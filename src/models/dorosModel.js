// ドロス: 灰緑の肌に逆立つ赤髪の魔王（参考画像15 準拠）。
// 黒鉄に金縁の甲冑、赤い宝玉、毛皮の縁取り、金の紋様が入った赤いマントと前垂れ。
// スマッシュ攻撃のときだけ右手に大剣が現れる（setSword）。
import * as THREE from 'three';
import { metal, gloss, basic, lathe, place, mesh, mergeStatic, joint, paramGeo, blobShadow, canvasTex } from './kit.js';
import { taperCapsule, disposeTree } from './common.js';

const VARIANTS = [
  { skin: 0x54563f, hair: 0x8a2410, iron: 0x34343a, gold: 0x9a7420, red: 0x521012, redIn: 0x360a0c, gem: 0xd01828, fur: 0x7c7468, cloth: 0x2a2a2c, goldCss: '#b08a3a', redCss: '#5a1214', ironCss: '#48484e', printCss: '#6e5424', cloth2: 0x303033 },
  { skin: 0x565a66, hair: 0xd8d8e4, iron: 0x20283c, gold: 0xb4bcc8, red: 0x1c2c66, redIn: 0x0e1638, gem: 0x40d0ff, fur: 0x9aa0b0, cloth: 0x1c2030, goldCss: '#c0c8d8', redCss: '#1c2c66', ironCss: '#3a4460', printCss: '#70788c', cloth2: 0x242838 },
];

export const DOROS_HIP = 1.6;
// 全身の拡大率（縦横同じ比率。足場の下に立っても頭が突き抜けない背丈にする）
export const DOROS_SCALE = 0.88;

// 金の紋様（重ねた菱形と、裾から立ちのぼる炎の唐草）を布地に描く
function patternTex(P) {
  return canvasTex(256, 512, (g, w, h) => {
    g.fillStyle = P.redCss; g.fillRect(0, 0, w, h);
    // 布の濃淡
    let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,140,110'},${0.03 + rnd() * 0.05})`; g.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 10, 1 + rnd() * 3); }
    g.strokeStyle = P.printCss; g.fillStyle = P.printCss; g.lineJoin = 'miter'; g.lineCap = 'butt'; g.miterLimit = 8;
    const poly = (pts, fill, lw = 0.04) => { g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x * w, y * h) : g.moveTo(x * w, y * h))); g.closePath(); g.lineWidth = w * lw; fill ? g.fill() : g.stroke(); };
    // 中央: 大きな菱形の枠、その下に小さな菱形と左右へ跳ねる刃、下へ伸びる穂先
    poly([[0.5, 0.3], [0.61, 0.4], [0.5, 0.5], [0.39, 0.4]], false, 0.045);
    poly([[0.5, 0.36], [0.54, 0.4], [0.5, 0.44], [0.46, 0.4]], true);
    poly([[0.5, 0.5], [0.57, 0.57], [0.5, 0.64], [0.43, 0.57]], false, 0.04);
    poly([[0.5, 0.62], [0.545, 0.7], [0.5, 0.88], [0.455, 0.7]], true);
    for (const s of [-1, 1]) {
      const X = (x) => 0.5 + s * x;
      poly([[X(0.09), 0.5], [X(0.2), 0.44], [X(0.16), 0.56], [X(0.22), 0.66], [X(0.1), 0.6]], true);
      poly([[X(0.08), 0.68], [X(0.17), 0.72], [X(0.11), 0.8]], true);
      // 肩から下がる細い帯
      g.lineWidth = w * 0.022; g.beginPath(); g.moveTo(X(0.36) * w, h * 0.04); g.lineTo(X(0.4) * w, h * 0.5); g.stroke();
      // 裾から立ちのぼる炎の唐草
      g.lineWidth = w * 0.05; g.lineCap = 'round';
      g.beginPath(); g.moveTo(X(0.42) * w, h * 0.96);
      g.bezierCurveTo(X(0.2) * w, h * 0.92, X(0.24) * w, h * 0.78, X(0.38) * w, h * 0.76);
      g.bezierCurveTo(X(0.46) * w, h * 0.74, X(0.44) * w, h * 0.66, X(0.34) * w, h * 0.68); g.stroke();
      g.beginPath(); g.moveTo(X(0.3) * w, h * 0.84);
      g.bezierCurveTo(X(0.22) * w, h * 0.74, X(0.3) * w, h * 0.62, X(0.4) * w, h * 0.58);
      g.bezierCurveTo(X(0.47) * w, h * 0.55, X(0.44) * w, h * 0.5, X(0.38) * w, h * 0.52); g.stroke();
      g.lineCap = 'butt';
      poly([[X(0.28), 0.6], [X(0.33), 0.5], [X(0.31), 0.63]], true);
      poly([[X(0.2), 0.9], [X(0.14), 0.8], [X(0.24), 0.86]], true);
    }
  });
}
// 黒鉄に金の縁と菱形の細工（籠手・長靴）
function ornTex(P) {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = P.ironCss; g.fillRect(0, 0, w, h);
    g.strokeStyle = P.goldCss; g.fillStyle = P.goldCss; g.lineJoin = 'miter';
    g.fillRect(0, 0, w, h * 0.09); g.fillRect(0, h * 0.91, w, h * 0.09);
    g.lineWidth = w * 0.05;
    for (const cx of [0, w / 2, w]) {
      g.beginPath(); g.moveTo(cx, h * 0.2); g.lineTo(cx + w * 0.15, h * 0.5); g.lineTo(cx, h * 0.8); g.lineTo(cx - w * 0.15, h * 0.5); g.closePath(); g.stroke();
    }
    g.lineWidth = w * 0.035;
    for (const cx of [w / 4, w * 3 / 4]) {
      g.beginPath(); g.moveTo(cx - w * 0.09, h * 0.14); g.lineTo(cx, h * 0.34); g.lineTo(cx + w * 0.09, h * 0.14); g.stroke();
      g.beginPath(); g.moveTo(cx - w * 0.09, h * 0.86); g.lineTo(cx, h * 0.66); g.lineTo(cx + w * 0.09, h * 0.86); g.stroke();
      g.beginPath(); g.moveTo(cx, h * 0.42); g.lineTo(cx + w * 0.03, h * 0.5); g.lineTo(cx, h * 0.58); g.lineTo(cx - w * 0.03, h * 0.5); g.closePath(); g.fill();
    }
  }, { repeat: [2, 1] });
}
// うろこ状の鎧
function scaleTex() {
  return canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#c4c4c8'; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(16,16,20,0.8)'; g.lineWidth = 2.5;
    for (let r = 0; r < 9; r++) for (let c = -1; c < 9; c++) { const x = c * 16 + (r % 2 ? 8 : 0), y = r * 16; g.beginPath(); g.arc(x + 8, y, 9, 0.15, Math.PI - 0.15); g.stroke(); g.fillStyle = 'rgba(255,255,255,0.16)'; g.fillRect(x + 4, y + 10, 8, 2); }
  }, { repeat: [3, 3] });
}

export function buildDoros(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  const skin = gloss(P.skin, { rough: 0.7, metal: 0.02, env: 0.35 });
  const hair = gloss(P.hair, { rough: 0.75, metal: 0.02, env: 0.25 }); hair.flatShading = true;
  const iron = metal(P.iron, { rough: 0.6, metal: 0.55, env: 0.6 });
  const scale = new THREE.MeshStandardMaterial({ color: new THREE.Color(P.iron).multiplyScalar(1.7), map: scaleTex(), roughness: 0.65, metalness: 0.5, envMapIntensity: 0.5 });
  const gold = metal(P.gold, { rough: 0.5, metal: 0.65, env: 0.7 });
  const cloth = gloss(P.cloth, { rough: 0.9, metal: 0.02, env: 0.2 });
  const fur = gloss(P.fur, { rough: 1, metal: 0, env: 0.15 }); fur.flatShading = true;
  const gemM = new THREE.MeshStandardMaterial({ color: P.gem, roughness: 0.2, metalness: 0.2, envMapIntensity: 1.2, emissive: new THREE.Color(P.gem).multiplyScalar(0.35) });
  const eyeM = basic(0xff5a30, 1.1);
  const redM = gloss(P.red, { rough: 0.9, metal: 0, env: 0.2, side: THREE.DoubleSide });
  const orn = new THREE.MeshStandardMaterial({ map: ornTex(P), roughness: 0.55, metalness: 0.45, envMapIntensity: 0.6 });
  const hair2 = gloss(new THREE.Color(P.hair).multiplyScalar(0.72), { rough: 0.8, metal: 0.02, env: 0.2 }); hair2.flatShading = true;
  const capeTex = patternTex(P); capeTex.flipY = false;
  const capeOut = new THREE.MeshStandardMaterial({ map: capeTex, roughness: 0.9, metalness: 0, envMapIntensity: 0.2, side: THREE.BackSide });
  const capeIn = new THREE.MeshStandardMaterial({ color: P.redIn, roughness: 0.95, metalness: 0, envMapIntensity: 0.1, side: THREE.FrontSide });
  const tabM = new THREE.MeshStandardMaterial({ map: patternTex(P), roughness: 0.9, metalness: 0, envMapIntensity: 0.2, side: THREE.DoubleSide });
  const bladeM = metal(0xb8bcc8, { rough: 0.2, metal: 1, env: 1.2 });
  const flashMats = [skin, iron, scale, cloth, capeOut, redM, orn];
  const baseEmissive = flashMats.map((m) => m.emissive.clone());

  const gemBase = metal(new THREE.Color(P.gold).multiplyScalar(0.7), { rough: 0.75, metal: 0.3, env: 0.3 });
  // 金の台座つき宝玉 / 金の鋲
  const gem = (parent, x, y, z, r = 0.04, rx = 0, ry = 0) => {
    const g = new THREE.Group(); place(g, parent, x, y, z, rx, ry, 0);
    place(mesh(new THREE.CylinderGeometry(r * 1.4, r * 1.4, r * 0.4, 8), gemBase), g, 0, 0, 0, Math.PI / 2, 0, 0);
    place(mesh(new THREE.OctahedronGeometry(r, 0), gemM), g, 0, 0, r * 0.35, 0, 0, 0, [1, 1, 0.6]);
  };
  const stud = (parent, x, y, z, r = 0.022) => place(mesh(new THREE.OctahedronGeometry(r, 0), gold), parent, x, y, z);
  // 毛皮の輪
  const furRing = (parent, y, r, t = 0.045) => place(mesh(new THREE.TorusGeometry(r, t, 5, 12), fur), parent, 0, y, 0, Math.PI / 2, 0, 0);

  const fig = new THREE.Group(); fig.userData.keep = true; fig.scale.setScalar(DOROS_SCALE); root.add(fig);
  const body = joint('body', fig, 0, DOROS_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;
  torso.scale.setScalar(0.88); // 脚を長く、上半身を小さめにして頭身を上げる

  // ---------- 腰（帯・前垂れ・草摺り） ----------
  place(mesh(new THREE.SphereGeometry(0.3, 16, 12), cloth), hips, 0, 0.02, 0, 0, 0, 0, [0.9, 0.8, 0.8]);
  const beltG = new THREE.Group(); place(beltG, hips, 0, 0, 0, 0, 0, 0, [0.84, 1, 0.86]);
  place(mesh(lathe([[0.31, 0.22], [0.325, 0.16], [0.325, 0.08], [0.31, 0.04]], 24), iron), beltG, 0, 0, 0, 0, 0, 0, [1, 1, 0.88]);
  for (const y of [0.22, 0.04]) place(mesh(new THREE.TorusGeometry(0.32, 0.012, 5, 28), gold), beltG, 0, y, 0, Math.PI / 2, 0, 0, [1, 0.88, 1]);
  for (let i = 0; i < 10; i++) { const a = (i + 0.5) / 10 * Math.PI * 2; if (Math.abs(Math.sin(a)) < 0.25 && Math.cos(a) > 0) continue; stud(beltG, Math.sin(a) * 0.33, 0.13, Math.cos(a) * 0.29); }
  gem(beltG, 0, 0.13, 0.295, 0.06);
  for (const s of [-1, 1]) place(mesh(new THREE.ConeGeometry(0.04, 0.12, 4), gold), beltG, s * 0.11, 0.13, 0.29, 0, 0, s * 1.57, [1, 1, 0.4]);
  // 前垂れ（赤地に金の紋様、裾に房）と後ろの垂れ
  const tab = (z, ry, len, w) => {
    const geo = new THREE.PlaneGeometry(w, len, 1, 4);
    geo.translate(0, -len / 2, 0);
    const g = new THREE.Group(); place(g, hips, 0, 0.06, z, ry ? 0.08 : -0.08, ry, 0);
    g.add(new THREE.Mesh(geo, tabM));
    place(mesh(new THREE.BoxGeometry(w * 1.04, 0.05, 0.02), gold), g, 0, -len - 0.02, 0);
    for (const s of [-1, 1]) place(mesh(new THREE.BoxGeometry(0.018, len, 0.012), gold), g, s * w / 2, -len / 2, 0.002);
  };
  tab(0.26, 0, 0.78, 0.27);
  tab(-0.235, Math.PI, 0.5, 0.27);
  // 両脇の草摺り（黒鉄に金縁の五角板）
  for (const s of [-1, 1]) {
    const g = new THREE.Group();
    place(g, hips, s * 0.245, 0.05, 0.14, -0.06, s * 0.8, s * 0.1, 0.92);
    const sh = new THREE.Shape();
    sh.moveTo(-0.14, 0); sh.lineTo(0.14, 0); sh.lineTo(0.16, -0.36); sh.lineTo(0, -0.52); sh.lineTo(-0.16, -0.36); sh.lineTo(-0.14, 0);
    place(mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.03, bevelEnabled: false }), iron), g, 0, 0, 0);
    const rim = new THREE.Shape();
    rim.moveTo(-0.1, -0.06); rim.lineTo(0.1, -0.06); rim.lineTo(0.115, -0.33); rim.lineTo(0, -0.44); rim.lineTo(-0.115, -0.33); rim.lineTo(-0.1, -0.06);
    const pts = rim.getPoints().map((p) => new THREE.Vector3(p.x, p.y, 0.036));
    place(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0), 24, 0.012, 4, true), gold), g, 0, 0, 0);
    gem(g, 0, -0.2, 0.034, 0.035);
  }

  // ---------- 胴（うろこの胸甲。分厚い胸板と太い胴） ----------
  place(mesh(lathe([[0.255, 0.0], [0.265, 0.14], [0.31, 0.34], [0.395, 0.54], [0.42, 0.66], [0.36, 0.77], [0.22, 0.85], [0.15, 0.88]], 24), scale), torso, 0, 0, 0, 0, 0, 0, [0.92, 1, 0.8]);
  place(mesh(new THREE.SphereGeometry(1, 16, 10), scale), torso, 0, 0.56, 0.2, -0.1, 0, 0, [0.34, 0.2, 0.14]);
  // 首飾り（金の鎖に赤い宝玉。中央が大きい）
  for (let i = -2; i <= 2; i++) {
    const a = i * 0.36;
    gem(torso, Math.sin(a) * 0.36, 0.71 - Math.cos(a) * 0.1 - (i === 0 ? 0.02 : 0), 0.14 + Math.cos(a) * 0.19, i === 0 ? 0.066 : Math.abs(i) === 2 ? 0.066 : 0.04, -0.25, a);
  }
  place(mesh(new THREE.TorusGeometry(0.34, 0.014, 5, 20, Math.PI * 0.6), gold), torso, 0, 0.66, 0.05, Math.PI / 2 + 0.28, 0, Math.PI * 0.2, [1, 0.95, 1]);
  // 太い首
  place(mesh(taperCapsule(0.17, 0.135, 0.14, 12), skin), torso, 0, 0.86, 0.0);

  // 肩当て（角ばった板を重ねた黒鉄。金縁と鋲）
  for (const s of [-1, 1]) {
    const pa = new THREE.Group();
    place(pa, torso, s * 0.47, 0.76, 0, 0, 0, s * -0.26, 0.98);
    const g1 = lathe([[0.02, 0.1], [0.2, 0.04], [0.3, -0.1]], 4); g1.rotateY(Math.PI / 4);
    place(mesh(g1, iron), pa, 0, 0, 0, 0, 0, 0, [1.05, 1, 1.15]);
    const g2 = lathe([[0.285, -0.08], [0.3, -0.1], [0.32, -0.14]], 4); g2.rotateY(Math.PI / 4);
    place(mesh(g2, gold), pa, 0, 0.004, 0, 0, 0, 0, [1.06, 1, 1.16]);
    const g4 = lathe([[0.27, -0.22], [0.285, -0.27]], 4); g4.rotateY(Math.PI / 4);
    place(mesh(g4, gold), pa, s * 0.04, 0, 0, 0, 0, 0, [1.01, 1, 1.11]);
    const g3 = lathe([[0.18, -0.1], [0.27, -0.22], [0.28, -0.26]], 4); g3.rotateY(Math.PI / 4);
    place(mesh(g3, iron), pa, s * 0.04, 0, 0, 0, 0, 0, [1.0, 1, 1.1]);
    for (const [x, z] of [[0.1, 0.12], [-0.1, 0.12], [0.1, -0.12], [-0.1, -0.12], [0.17, 0]]) { const r = Math.max(Math.abs(x) / 1.05, Math.abs(z) / 1.15) / 0.707; stud(pa, s * x, (r < 0.2 ? 0.1 - (r - 0.02) / 0.18 * 0.06 : 0.04 - (r - 0.2) * 1.4) + 0.012, z, 0.036); }
  }

  // ---------- マント（高い襟、金の紋様、裂けた裾） ----------
  const capeG = new THREE.Group(); capeG.userData.keep = true;
  place(capeG, torso, 0, 0.78, -0.2);
  const capeGeo = paramGeo(24, 14, (u, v, p) => {
    const a = (u - 0.5) * 2.2;
    const top = Math.min(1, v * 9);
    const w = 0.25 + 0.21 * top + 0.62 * v;
    const tear = v > 0.82 ? (0.2 + 0.1 * Math.sin(u * 23)) * Math.abs(Math.sin(u * Math.PI * 10.5 + Math.sin(u * 9))) * (v - 0.82) / 0.18 : 0;
    p.set(Math.sin(a) * w, 0.13 * (1 - top) - 2.1 * v + tear + 0.04 * Math.cos(a) * (1 - v), -Math.cos(a) * 0.1 - 0.26 * Math.min(1, v * 3) - 0.08 * v + 0.05 * Math.sin(u * Math.PI * 5) * v);
  });
  capeG.add(new THREE.Mesh(capeGeo, capeOut));
  const capeInner = new THREE.Mesh(capeGeo, capeIn); capeInner.userData.inner = true; capeG.add(capeInner);
  // 襟（首の後ろから両肩へ立ち上がる）と肩に掛かる布
  place(mesh(lathe([[0.2, 0.8], [0.25, 0.96], [0.31, 1.14]], 20, Math.PI * 0.45, Math.PI * 1.1), redM), torso, 0, 0, -0.03, 0, 0, 0, [1.1, 1, 0.85]);
  place(mesh(lathe([[0.306, 1.132], [0.326, 1.16]], 20, Math.PI * 0.45, Math.PI * 1.1), gold), torso, 0, 0, -0.03, 0, 0, 0, [1.1, 1, 0.85]);
  place(mesh(new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), redM), torso, 0, 0.76, -0.2, 0, 0, 0, [0.44, 0.1, 0.2]);
  place(mesh(new THREE.SphereGeometry(1, 12, 8), redM), torso, 0, 0.6, -0.27, 0, 0, 0, [0.36, 0.2, 0.08]);
  // 背中の留め具（金の鎖と宝玉）
  for (const [x, r] of [[-0.3, 0.07], [0, 0.08], [0.3, 0.07]]) gem(torso, x, 0.66 - (x === 0 ? 0.06 : 0), -0.36, r, 0, Math.PI);

  // ---------- 頭（顔は絵で描き、鼻・眉・耳・髪は形で足す） ----------
  const head = joint('head', torso, 0, 0.96, 0.03); j.head = head;
  const hs = new THREE.Group();
  place(hs, head, 0, 0, 0, 0, 0, 0, 0.98);
  const HEAD_H = 0.34, HEAD_Z = 1.1;
  // 高さ y（0=あご先）での頭の半径。角ばったあご、広い頬、丸い頭頂
  const headRad = (y) => {
    const t = Math.max(0, Math.min(1, y / HEAD_H));
    if (t < 0.36) return 0.114 + 0.024 * Math.sin((t / 0.36) * Math.PI / 2);
    if (t < 0.6) return 0.138 + 0.004 * (t - 0.36) / 0.24;
    const k = (t - 0.6) / 0.4; return 0.142 * Math.sqrt(Math.max(0, 1 - k * k));
  };
  const hp = (phi, y, off = 0) => { const r = headRad(y) + off; return [Math.sin(phi) * r, y, Math.cos(phi) * r * HEAD_Z]; };
  const css = (hex, k = 1) => '#' + new THREE.Color(hex).multiplyScalar(k).getHexString();
  const faceTex = canvasTex(1024, 512, (g, w, h) => {
    const U = w / (Math.PI * 2 * 0.138); // 顔の正面での 1 単位あたりの px
    const X = (x) => w / 2 + x * U, Y = (y) => (1 - y / HEAD_H) * 0.94 * h, PX = (phi) => (phi / (Math.PI * 2) + 0.5) * w;
    g.fillStyle = css(P.skin); g.fillRect(0, 0, w, h);
    const blob = (x, y, rx, ry, col) => { const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1); gr.addColorStop(0, col); gr.addColorStop(1, col.replace(/[\d.]+\)$/, '0)')); g.save(); g.translate(X(x), Y(y)); g.scale(rx * U, ry * U); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 1, 0, 7); g.fill(); g.restore(); };
    const path = (pts) => { g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(X(x), Y(y)) : g.moveTo(X(x), Y(y)))); };
    // 肌の陰影: 額・頬骨は明るく、こめかみ・頬のこけ・あごの下は暗く
    blob(0, 0.235, 0.075, 0.035, 'rgba(255,250,200,0.13)');
    blob(0, 0.03, 0.06, 0.03, 'rgba(255,250,200,0.1)');
    for (const s of [-1, 1]) {
      blob(s * 0.075, 0.135, 0.035, 0.022, 'rgba(255,250,200,0.14)');
      blob(s * 0.085, 0.08, 0.035, 0.05, 'rgba(0,0,0,0.3)');
      blob(s * 0.052, 0.178, 0.045, 0.028, 'rgba(8,6,0,0.75)'); // 眼窩
      blob(s * 0.03, 0.14, 0.018, 0.05, 'rgba(0,0,0,0.3)'); // 鼻の脇
    }
    for (const s of [-1, 1]) {
      // 目: 内側が下がった細い吊り目。白目は黄みがかり、瞳は小さい
      path([[s * 0.024, 0.166], [s * 0.05, 0.184], [s * 0.084, 0.186], [s * 0.056, 0.168]]); g.closePath(); g.fillStyle = '#e6dcb8'; g.fill();
      g.fillStyle = '#b02a10'; g.beginPath(); g.arc(X(s * 0.05), Y(0.177), 0.0095 * U, 0, 7); g.fill();
      g.fillStyle = '#120404'; g.beginPath(); g.arc(X(s * 0.05), Y(0.177), 0.005 * U, 0, 7); g.fill();
      // 上まぶたの濃い線と下まぶた
      g.strokeStyle = '#0c0a06'; g.lineWidth = 0.009 * U; g.lineCap = 'round';
      path([[s * 0.02, 0.166], [s * 0.05, 0.187], [s * 0.09, 0.189]]); g.stroke();
      g.strokeStyle = 'rgba(12,10,6,0.6)'; g.lineWidth = 0.004 * U;
      path([[s * 0.024, 0.165], [s * 0.056, 0.166], [s * 0.086, 0.184]]); g.stroke();
      // 眉間のしわ、ほうれい線、頬のしわ
      g.strokeStyle = 'rgba(10,10,4,0.5)'; g.lineWidth = 0.005 * U;
      path([[s * 0.012, 0.225], [s * 0.008, 0.198]]); g.stroke();
      g.beginPath(); g.moveTo(X(s * 0.036), Y(0.112)); g.quadraticCurveTo(X(s * 0.062), Y(0.09), X(s * 0.064), Y(0.045)); g.stroke();
      g.strokeStyle = 'rgba(10,10,4,0.3)';
      g.beginPath(); g.moveTo(X(s * 0.085), Y(0.15)); g.quadraticCurveTo(X(s * 0.1), Y(0.11), X(s * 0.088), Y(0.06)); g.stroke();
      // 小鼻
      g.fillStyle = 'rgba(8,8,2,0.7)'; g.beginPath(); g.ellipse(X(s * 0.02), Y(0.098), 0.009 * U, 0.005 * U, 0, 0, 7); g.fill();
    }
    // への字に結んだ口と下唇の影、あごの割れ
    g.strokeStyle = '#14140c'; g.lineWidth = 0.008 * U; g.lineCap = 'round';
    g.beginPath(); g.moveTo(X(-0.046), Y(0.055)); g.quadraticCurveTo(X(-0.025), Y(0.066), X(0), Y(0.065)); g.quadraticCurveTo(X(0.025), Y(0.066), X(0.046), Y(0.055)); g.stroke();
    g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 0.006 * U;
    g.beginPath(); g.moveTo(X(-0.03), Y(0.046)); g.quadraticCurveTo(X(0), Y(0.04), X(0.03), Y(0.046)); g.stroke();
    path([[0, 0.028], [0, 0.008]]); g.stroke();
    blob(0, 0.082, 0.04, 0.012, 'rgba(0,0,0,0.22)');
    // 髪の地（頭頂・後頭部・もみあげ）。ぎざぎざの生え際
    g.fillStyle = css(P.hair, 0.8);
    g.beginPath(); g.moveTo(0, 0); g.lineTo(w, 0); g.lineTo(w, Y(0.03));
    g.lineTo(PX(1.3), Y(0.03)); g.lineTo(PX(1.0), Y(0.045)); g.lineTo(PX(0.84), Y(0.1)); g.lineTo(PX(0.9), Y(0.17)); g.lineTo(PX(0.8), Y(0.235));
    for (let i = 8; i >= -8; i--) g.lineTo(PX(i * 0.085), Y(0.272 - (i & 1 ? 0.012 : 0)));
    g.lineTo(PX(-0.8), Y(0.235)); g.lineTo(PX(-0.9), Y(0.17)); g.lineTo(PX(-0.84), Y(0.1)); g.lineTo(PX(-1.0), Y(0.045)); g.lineTo(PX(-1.3), Y(0.03));
    g.lineTo(0, Y(0.03)); g.closePath(); g.fill();
    // 髪の筋
    g.strokeStyle = css(P.hair, 0.55); g.lineWidth = 3;
    for (let i = 0; i < 70; i++) { const x = (i + 0.5) / 70 * w; if (Math.abs(x - w / 2) < w * 0.13) continue; g.beginPath(); g.moveTo(x, Y(0.24)); g.lineTo(x + (x < w / 2 ? 14 : -14), Y(0.04)); g.stroke(); }
  });
  faceTex.flipY = false;
  const faceM = new THREE.MeshStandardMaterial({ map: faceTex, roughness: 0.7, metalness: 0.02, envMapIntensity: 0.35 });
  flashMats.push(faceM); baseEmissive.push(faceM.emissive.clone());
  const headGeo = paramGeo(40, 20, (u, v, p) => {
    const phi = (u - 0.5) * Math.PI * 2;
    const y = HEAD_H * (1 - Math.min(1, v / 0.94));
    const r = v > 0.94 ? headRad(0) * (1 - (v - 0.94) / 0.06) : headRad(y);
    const t = y / HEAD_H;
    // あご先は前へ、眉の高さは少し張り出す
    const fwd = Math.max(0, Math.cos(phi)) * (0.016 * Math.max(0, 1 - t / 0.35) + 0.008 * Math.exp(-((t - 0.6) ** 2) / 0.004));
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * HEAD_Z + fwd);
  });
  place(mesh(headGeo, faceM), hs, 0, 0, 0);
  // 鼻（高い鷲鼻）
  place(mesh(new THREE.ConeGeometry(0.03, 0.115, 4), skin), hs, 0, 0.142, 0.158, -0.3, Math.PI / 4, 0, [0.95, 1, 1.25]);
  for (const s of [-1, 1]) {
    // 張り出した眉の庇と太い赤眉（内側が下がる）
    place(mesh(new THREE.BoxGeometry(0.11, 0.03, 0.04), skin), hs, s * 0.058, 0.203, 0.14, 0.35, s * 0.42, s * 0.2);
    place(mesh(new THREE.BoxGeometry(0.085, 0.02, 0.026), hair2), hs, s * 0.058, 0.208, 0.153, 0.35, s * 0.42, s * 0.32);
    // 尖った耳
    place(mesh(new THREE.ConeGeometry(0.03, 0.09, 5), skin), hs, ...hp(s * 1.5, 0.185, 0.012), -0.5, 0, s * -0.75, [1, 1, 0.4]);
    // もみあげ（頬へ向かって尖る房）
    for (const [phi, y, len, rz] of [[0.93, 0.15, 0.16, 0.12], [1.06, 0.11, 0.15, 0.05], [0.86, 0.2, 0.1, 0.25]]) {
      place(mesh(new THREE.ConeGeometry(0.05, len * 1.15, 5), hair), hs, ...hp(s * phi, y, 0.008), Math.PI, s * phi, s * rz, [1.1, 1, 0.6]);
    }
  }
  // 金の額飾り（菱形の台に赤い宝玉、こめかみへ伸びる翼、眉間へ下がる穂先）
  place(mesh(new THREE.OctahedronGeometry(0.042, 0), gold), hs, 0, 0.248, 0.156, -0.18, 0, 0, [1, 1.2, 0.22]);
  place(mesh(new THREE.OctahedronGeometry(0.024, 0), gemM), hs, 0, 0.248, 0.165, -0.18, 0, 0, [1, 1.2, 0.5]);
  place(mesh(new THREE.ConeGeometry(0.014, 0.05, 4), gold), hs, 0, 0.202, 0.166, Math.PI, 0, 0, [1, 1, 0.4]);
  place(mesh(new THREE.ConeGeometry(0.016, 0.05, 4), gold), hs, 0, 0.3, 0.136, -0.45, 0, 0, [1, 1, 0.4]);
  for (const s of [-1, 1]) {
    place(mesh(new THREE.BoxGeometry(0.06, 0.02, 0.012), gold), hs, ...hp(s * 0.42, 0.252, 0.006), -0.15, s * 0.42, s * 0.2);
    place(mesh(new THREE.BoxGeometry(0.06, 0.016, 0.012), gold), hs, ...hp(s * 0.8, 0.266, 0.006), -0.15, s * 0.8, s * 0.25);
    place(mesh(new THREE.OctahedronGeometry(0.016, 0), gold), hs, ...hp(s * 0.6, 0.26, 0.012));
  }
  // たてがみのような赤髪（短い房を重ね、上と後ろへ流す）
  place(mesh(new THREE.SphereGeometry(1, 12, 10), hair2), hs, 0, 0.215, -0.035, 0, 0, 0, [0.172, 0.17, 0.18]);
  {
    let seed = 5; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const up = new THREE.Vector3(0, 1, 0), d = new THREE.Vector3(), dir = new THREE.Vector3();
    const tuft = (az, el, k) => {
      d.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
      dir.copy(d).add(new THREE.Vector3(0, 0.45, -0.4)).normalize();
      const len = (0.075 + rnd() * 0.04) * k, c = mesh(new THREE.ConeGeometry(0.052 + rnd() * 0.012, len, 4), rnd() < 0.4 ? hair2 : hair);
      place(c, hs, d.x * 0.17 + dir.x * len * 0.3, 0.21 + d.y * 0.155 + dir.y * len * 0.3, -0.035 + d.z * 0.17 + dir.z * len * 0.3);
      c.quaternion.setFromUnitVectors(up, dir); c.rotateY(rnd() * 3);
    };
    for (let r = 0; r < 7; r++) {
      const el = -0.3 + r * 0.3, n = Math.max(3, Math.round(13 * Math.cos(el)));
      for (let i = 0; i < n; i++) {
        const az = ((i + (r % 2) * 0.5) / n) * Math.PI * 2 - Math.PI + (rnd() - 0.5) * 0.2;
        if (Math.abs(az) < 1.15 && el < 0.72) continue;     // 顔
        if (Math.abs(az) < 1.6 && el < 0.1) continue;      // 耳ともみあげ
        tuft(az, el, el > 0.7 ? 1.15 : 1);
      }
    }
    // 生え際から立ち上がる前髪
    for (let i = -3; i <= 3; i++) tuft(i * 0.27, 0.56 + (i & 1 ? 0.07 : 0), 1.1);
  }

  // ---------- 腕（むき出しの太い上腕、毛皮の縁の籠手、大きな拳） ----------
  const trails = {};
  const hands = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.445, 0.62, 0);
    j[R ? 'armR' : 'armL'] = arm;
    place(mesh(new THREE.SphereGeometry(0.16, 12, 10), skin), arm, 0, 0, 0);
    furRing(arm, -0.07, 0.15, 0.04);
    place(mesh(taperCapsule(0.34, 0.185, 0.15, 12), skin), arm, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(1, 10, 8), skin), arm, 0, -0.15, 0.05, 0, 0, 0, [0.17, 0.18, 0.15]); // 力こぶ
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.36, 0);
    j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(lathe([[0.14, 0.0], [0.15, -0.08], [0.135, -0.22], [0.11, -0.32]], 14), orn), fore, 0, 0, 0);
    furRing(fore, 0.02, 0.135, 0.05);
    place(mesh(new THREE.TorusGeometry(0.148, 0.012, 5, 18), gold), fore, 0, -0.07, 0, Math.PI / 2, 0, 0);
    place(mesh(new THREE.TorusGeometry(0.114, 0.014, 5, 18), gold), fore, 0, -0.31, 0, Math.PI / 2, 0, 0);
    gem(fore, s * 0.142, -0.17, 0, 0.04, 0, s * Math.PI / 2);
    gem(fore, 0, -0.17, 0.142, 0.032);
    const hand = new THREE.Group(); hand.userData.joint = true;
    place(hand, fore, 0, -0.41, 0);
    hands[s] = hand;
    place(mesh(new THREE.SphereGeometry(0.112, 12, 10), skin), hand, 0, 0, 0.01, 0, 0, 0, [1, 1.0, 0.9]);
    for (let k = 0; k < 4; k++) place(mesh(new THREE.SphereGeometry(0.038, 6, 5), skin), hand, (k - 1.5) * 0.05, -0.08, 0.045);
    const a = new THREE.Object3D(); a.position.set(0, -0.1, 0); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.55, 0); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }

  // ---------- 大剣（スマッシュ攻撃のときだけ現れる。刀身は手のローカル +Z） ----------
  const sword = joint('wep', hands[-1], 0, 0, 0.0);
  j.wep = sword;
  const swordVis = new THREE.Group(); swordVis.userData.keep = true; swordVis.visible = false;
  sword.add(swordVis);
  {
    const add = (m, x, y, z, rx = 0, ry = 0, rz = 0) => { place(m, swordVis, x, y, z, rx, ry, rz); return m; };
    add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.032, 0.36, 8), iron), 0, 0, -0.04, Math.PI / 2, 0, 0);
    add(new THREE.Mesh(new THREE.OctahedronGeometry(0.055, 0), gemM), 0, 0, -0.25);
    add(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.66, 0.1), gold), 0, 0, 0.15);
    for (const k of [-1, 1]) add(new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.2, 4), gold), 0, k * 0.38, 0.21, k > 0 ? 0.6 : Math.PI - 0.6, 0, 0);
    add(new THREE.Mesh(new THREE.OctahedronGeometry(0.05, 0), gemM), 0.045, 0, 0.15);
    add(new THREE.Mesh(new THREE.OctahedronGeometry(0.05, 0), gemM), -0.045, 0, 0.15);
    const bs = new THREE.Shape();
    bs.moveTo(0.18, -0.2); bs.lineTo(1.5, -0.17); bs.lineTo(1.9, 0); bs.lineTo(1.5, 0.17); bs.lineTo(0.18, 0.2); bs.lineTo(0.18, -0.2);
    const bg = new THREE.ExtrudeGeometry(bs, { depth: 0.012, bevelEnabled: true, bevelSize: 0.014, bevelThickness: 0.012, bevelSegments: 1 });
    bg.translate(0, 0, -0.006);
    add(new THREE.Mesh(bg, bladeM), 0, 0, 0, 0, -Math.PI / 2, 0);
    const fl = new THREE.Shape();
    fl.moveTo(0.2, -0.06); fl.lineTo(1.4, -0.045); fl.lineTo(1.55, 0); fl.lineTo(1.4, 0.045); fl.lineTo(0.2, 0.06); fl.lineTo(0.2, -0.06);
    const flM = new THREE.MeshStandardMaterial({ color: 0x2a2630, roughness: 0.35, metalness: 0.8, side: THREE.DoubleSide });
    for (const sx of [-1, 1]) add(new THREE.Mesh(new THREE.ShapeGeometry(fl), flM), sx * 0.0195, 0, 0, 0, -Math.PI / 2, 0);
  }
  const swordBase = new THREE.Object3D(); swordBase.position.set(0, 0, 0.4); sword.add(swordBase);
  const swordTip = new THREE.Object3D(); swordTip.position.set(0, 0, 1.85); sword.add(swordTip);
  trails.sword = [swordBase, swordTip];

  // ---------- 脚（太い腿、宝玉つきの膝当て、毛皮の縁の重い長靴） ----------
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.17, -0.02, 0);
    j[R ? 'legR' : 'legL'] = leg;
    place(mesh(taperCapsule(0.64, 0.17, 0.135, 12), gloss(P.cloth2, { rough: 0.9, metal: 0.02, env: 0.2 })), leg, 0, 0, 0);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.68, 0);
    j[R ? 'shinR' : 'shinL'] = shin;
    // 膝当て（金縁の菱形板に赤い宝玉）
    const kg = lathe([[0.02, 0.2], [0.15, 0.02], [0.02, -0.16]], 4); kg.rotateY(Math.PI / 4);
    place(mesh(kg, iron), shin, 0, 0.02, 0.105, 0, 0, 0, [1, 1, 0.45]);
    const kr = lathe([[0.15, 0.02], [0.17, 0.02]], 4); kr.rotateY(Math.PI / 4);
    place(mesh(kr, gold), shin, 0, 0.02, 0.105, 0, 0, 0, [1, 6, 0.45]);
    gem(shin, 0, 0.03, 0.178, 0.04);
    furRing(shin, -0.02, 0.145, 0.048);
    place(mesh(lathe([[0.145, -0.02], [0.155, -0.16], [0.125, -0.48], [0.12, -0.66]], 14), orn), shin, 0, 0, 0);
    furRing(shin, -0.64, 0.12, 0.04);
    const foot = new THREE.Group();
    place(foot, shin, 0, -0.73, 0.03, 0, 0, 0, 0.88);
    place(mesh(new THREE.SphereGeometry(1, 12, 8), iron), foot, 0, 0.01, 0.08, 0, 0, 0, [0.165, 0.1, 0.27]);
    place(mesh(new THREE.SphereGeometry(1, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), gold), foot, 0, -0.04, 0.31, Math.PI / 2 - 0.5, 0, 0, [0.1, 0.05, 0.045]);
    place(mesh(new THREE.TorusGeometry(0.15, 0.018, 5, 16, Math.PI), gold), foot, 0, -0.01, 0.1, 0, 0, 0, [1.1, 0.75, 1]);
    place(mesh(new THREE.BoxGeometry(0.3, 0.035, 0.5), iron), foot, 0, -0.085, 0.1);
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.8, 0.22); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
  }

  mergeStatic(root);

  const rig = { j, base, hipY: DOROS_HIP, flare: 0 };
  const orbPoint = new THREE.Object3D(); orbPoint.position.set(0, 0.5, 0.9); body.add(orbPoint);
  const shadow = blobShadow(0x000000, null, 1.4);
  let t = 0;

  return {
    root, rig, trails, worldObjects: [], orbPoint, shadow, hands,
    height: 2.3, headY: 2.7,
    trailColor: variant ? 0x60b0ff : 0xb040ff,
    update(dt, ctx) {
      t += dt;
      // マントのなびき（移動と落下でふくらむ）
      const yaw = root.rotation.y;
      const fwd = (ctx.vx || 0) * Math.sin(yaw);
      const want = Math.max(-0.1, Math.min(0.9, fwd * 4 + (ctx.vy < 0 ? -ctx.vy * 2.2 : 0))) + Math.sin(t * 2.4) * 0.02;
      capeG.rotation.x += (want - capeG.rotation.x) * 0.12;
    },
    setSword(on) { swordVis.visible = on; },
    setFlash(color, a) {
      flashMats.forEach((m, i) => { m.emissive.copy(baseEmissive[i]); if (a > 0) m.emissive.lerp(color, a * 0.8); });
    },
    dispose() { disposeTree(root); },
  };
}
