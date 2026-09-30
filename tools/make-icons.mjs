// PWA用アイコンを生成（外部ライブラリなし：距離関数で描いてPNGにエンコード）
// 使い方: node tools/make-icons.mjs
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };

// 回転楕円の符号付き距離（近似）
function ell(x, y, cx, cy, rx, ry, rot = 0) {
  const c = Math.cos(rot), s = Math.sin(rot);
  const dx = x - cx, dy = y - cy;
  const u = (dx * c + dy * s) / rx, v = (-dx * s + dy * c) / ry;
  return (Math.hypot(u, v) - 1) * Math.min(rx, ry);
}

function shade(x, y, scale) {
  // scale: 絵柄の縮小率（マスカブル用）
  const X = 0.5 + (x - 0.5) / scale, Y = 0.5 + (y - 0.5) / scale;
  const r = Math.hypot(x - 0.5, y - 0.45);
  let col = mix(hex('#6a2fa0'), hex('#0e0520'), smooth(0.0, 0.72, r));
  // 月と光輪
  const dm = Math.hypot(X - 0.5, Y - 0.44) - 0.3;
  col = mix(col, hex('#ffd6f4'), clamp(0.55 * Math.exp(-Math.max(0, dm) * 14)) * (dm > 0 ? 1 : 0));
  const moon = mix(hex('#fff3c4'), hex('#f2b440'), smooth(-0.3, 0.02, dm));
  col = mix(col, moon, smooth(0.006, -0.006, dm));
  // 耳（根元ピンク→先クリーム）
  for (const s of [-1, 1]) {
    const ex = 0.5 + s * 0.1, ey = 0.19;
    const d = ell(X, Y, ex, ey, 0.05, 0.13, s * 0.35);
    const t = clamp((0.3 - Y) / 0.22);
    const ec = mix(hex('#f06aa8'), hex('#fff0c8'), t);
    col = mix(col, ec, smooth(0.0022, -0.0022, d));
    for (let k = 0; k < 3; k++) {
      const dd = Math.hypot(X - (ex - s * 0.012 + (k - 1) * 0.022), Y - 0.28) - 0.009;
      col = mix(col, hex('#ff4fae'), smooth(0.002, -0.002, dd));
    }
  }
  // フード（傘）と頭
  const dark = hex('#24142f');
  const hood = Math.min(ell(X, Y, 0.5, 0.39, 0.22, 0.12), ell(X, Y, 0.34, 0.5, 0.08, 0.15, 0.25), ell(X, Y, 0.66, 0.5, 0.08, 0.15, -0.25));
  col = mix(col, dark, smooth(0.0022, -0.0022, hood));
  // 光る裏地（フードの縁）
  const lining = Math.min(ell(X, Y, 0.34, 0.6, 0.07, 0.035, 0.25), ell(X, Y, 0.66, 0.6, 0.07, 0.035, -0.25));
  col = mix(col, hex('#9a4dff'), smooth(0.0022, -0.0022, lining));
  const head = ell(X, Y, 0.5, 0.53, 0.11, 0.14);
  col = mix(col, hex('#2e1d3a'), smooth(0.0022, -0.0022, head));
  // 目
  for (const s of [-1, 1]) {
    const d = ell(X, Y, 0.5 + s * 0.047, 0.535, 0.038, 0.019, -s * 0.45);
    col = mix(col, hex('#ff9ad8'), smooth(0.002, -0.002, d));
    const hl = Math.hypot(X - (0.5 + s * 0.052), Y - 0.53) - 0.006;
    col = mix(col, [255, 255, 255], smooth(0.003, -0.003, hl));
  }
  // 額の渦巻き
  const sr = Math.hypot(X - 0.465, Y - 0.445);
  const sa = Math.atan2(Y - 0.445, X - 0.465);
  const spiral = Math.abs(((sr * 260 - sa * 1.6) % 6.283 + 6.283) % 6.283 - 3.14) < 0.9 && sr < 0.022;
  if (spiral) col = mix(col, hex('#ffe6f2'), 0.9);
  return col;
}

function render(size, scale) {
  const buf = Buffer.alloc(size * size * 4);
  const ss = 3;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let acc = [0, 0, 0];
      for (let j = 0; j < ss; j++) for (let i = 0; i < ss; i++) {
        const c = shade((x + (i + 0.5) / ss) / size, (y + (j + 0.5) / ss) / size, scale);
        acc = acc.map((v, k) => v + c[k]);
      }
      const o = (y * size + x) * 4;
      buf[o] = Math.round(acc[0] / (ss * ss)); buf[o + 1] = Math.round(acc[1] / (ss * ss)); buf[o + 2] = Math.round(acc[2] / (ss * ss)); buf[o + 3] = 255;
    }
  }
  return buf;
}

const CRC = new Uint32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
const crc32 = (b) => { let c = 0xffffffff; for (const v of b) c = CRC[(c ^ v) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const c = Buffer.alloc(4); c.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, c]);
}
function png(size, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) { raw[y * (size * 4 + 1)] = 0; rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4); }
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

mkdirSync('icons', { recursive: true });
for (const [name, size, scale] of [['icon-192.png', 192, 1], ['icon-512.png', 512, 1], ['icon-maskable-512.png', 512, 0.78], ['apple-touch-icon.png', 180, 0.9]]) {
  writeFileSync('icons/' + name, png(size, render(size, scale)));
  console.log('wrote icons/' + name);
}
