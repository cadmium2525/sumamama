// ハム: ずんぐりした洋梨体型のうさぎ（参考画像16〜19 準拠）。
// 橙の毛並みに白い腹と口元、こげ茶の前髪と耳先、桃色の耳の内側、太い腕と大きな拳、丸い尻尾。
import * as THREE from 'three';
import { gloss, basic, place, mesh, mergeStatic, joint, paramGeo, blobShadow, canvasTex } from './kit.js';
import { taperCapsule, disposeTree } from './common.js';

const VARIANTS = [
  { light: '#c09a6c', fur: '#a6734c', dark: '#84492f', cream: '#d6cdc2', tan: '#b4a292', hair: '#4c3a31', tip: '#48362d', earLo: '#a8744a', mask: '#8e5a36', pink: '#d8747a', grey: '#5c4e4a', claw: '#2e2020', eye: '#2e1610' },
  { light: '#b4bac6', mask: '#6c7484', fur: '#8f96a4', dark: '#565e6e', cream: '#d8dce4', tan: '#a8aeba', hair: '#303648', tip: '#262c3a', earLo: '#828a9a', pink: '#d888a8', grey: '#5c6474', claw: '#22242c', eye: '#1c2440' },
];

export const HAMU_HIP = 0.62;

// 輪郭（[半径, 高さ] を上から下へ並べる）をなめらかにつなぎ、高さから半径を引けるようにする。
// 縦の分割は上下の端ほど細かい（v → 高さは余弦）。絵を描くときは vOf(高さ) で縦位置を求める
function radial(pts) {
  const sm = new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y))).getPoints(200);
  const y0 = pts[pts.length - 1][1], y1 = pts[0][1];
  const r = (y) => { for (let i = 1; i < sm.length; i++) if (y >= sm[i].y) { const p = sm[i - 1], q = sm[i]; return Math.max(0, p.x + (q.x - p.x) * (p.y - y) / Math.max(1e-6, p.y - q.y)); } return 0; };
  return { r, yOf: (v) => y0 + (y1 - y0) * (0.5 + 0.5 * Math.cos(Math.PI * v)), vOf: (y) => Math.acos(Math.max(-1, Math.min(1, (y - y0) / (y1 - y0) * 2 - 1))) / Math.PI };
}

export function buildHamu(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  const std = (color, o = {}) => gloss(color, { rough: 0.92, metal: 0, env: 0.25, ...o });
  const fur = std(P.fur), dark = std(P.dark), cream = std(P.cream), hair = std(P.hair), hairF = std(P.hair), pink = std(P.pink), claw = std(P.claw, { rough: 0.5 });
  hairF.flatShading = true;
  const flashMats = [fur, dark, cream];
  const texMat = (tex) => { tex.flipY = false; const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.92, metalness: 0, envMapIntensity: 0.25 }); flashMats.push(m); return m; };
  let seed = 9; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  // 毛の筋
  const strands = (g, w, h, col, n) => { g.strokeStyle = col; g.lineWidth = 2; for (let i = 0; i < n; i++) { const x = rnd() * w, y = rnd() * h; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (rnd() - 0.5) * 6, y + 8 + rnd() * 10); g.stroke(); } };
  // 点の並びをなめらかな閉じた形にして塗る
  const blobPath = (g, pts) => { const c = new THREE.SplineCurve(pts.map(([x, y]) => new THREE.Vector2(x, y))).getPoints(pts.length * 8); g.beginPath(); c.forEach((q, i) => (i ? g.lineTo(q.x, q.y) : g.moveTo(q.x, q.y))); g.closePath(); g.fill(); };
  // 表面から生える毛の房（円錐）。dir の向きへ伸びる
  const up = new THREE.Vector3(0, 1, 0), tv = new THREE.Vector3();
  const tuft = (parent, mat, x, y, z, dx, dy, dz, len, r, flat = 0.55) => { const c = mesh(new THREE.ConeGeometry(r, len, 5), mat); tv.set(dx, dy, dz).normalize(); place(c, parent, x + tv.x * len * 0.4, y + tv.y * len * 0.4, z + tv.z * len * 0.4); c.quaternion.setFromUnitVectors(up, tv); c.scale.z = flat; return c; };

  const body = joint('body', root, 0, HAMU_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 胴（肩は狭く、腰へ向かって大きく広がる洋梨型） ----------
  const BT = 0.8;
  const B = radial([[0.0, BT], [0.16, 0.775], [0.25, 0.64], [0.32, 0.46], [0.41, 0.26], [0.475, 0.08], [0.47, -0.04], [0.36, -0.14], [0.0, -0.18]]);
  const bodyTex = canvasTex(512, 512, (g, w, h) => {
    const X = (du) => w * (0.5 + du), Y = (y) => B.vOf(y) * h;
    g.fillStyle = P.fur; g.fillRect(0, 0, w, h);
    // 腰から下は濃い色（毛並みのぎざぎざ）
    g.fillStyle = P.dark; g.beginPath(); g.moveTo(0, h);
    for (let i = 0; i <= 36; i++) g.lineTo(i / 36 * w, Y(0.1 + (i & 1 ? 0.05 : 0) + 0.02 * Math.sin(i * 1.7)));
    g.lineTo(w, h); g.closePath(); g.fill();
    strands(g, w, h, 'rgba(90,45,20,0.2)', 240);
    // 白い腹（首元から股まで）
    g.fillStyle = P.cream;
    const half = [[0, 0.79], [0.09, 0.75], [0.145, 0.6], [0.168, 0.4], [0.178, 0.2], [0.16, 0.02], [0.105, -0.12], [0, -0.175]];
    blobPath(g, [...half.map(([d, y]) => [X(d), Y(y)]), ...half.slice(1, -1).reverse().map(([d, y]) => [X(-d), Y(y)])]);
    // 下腹の灰みがかった毛（上の縁はぎざぎざ）
    g.fillStyle = P.tan; g.beginPath(); g.moveTo(X(-0.125), Y(0.12));
    for (let i = 0; i <= 10; i++) g.lineTo(X(-0.125 + i * 0.025), Y(0.12 - (i & 1 ? 0.035 : 0) - 0.07 * Math.sin(i / 10 * Math.PI)));
    for (const [d, y] of [[0.13, -0.02], [0.09, -0.12], [0, -0.17], [-0.09, -0.12], [-0.13, -0.02]]) g.lineTo(X(d), Y(y));
    g.closePath(); g.fill();
    // 背中の模様（継ぎ目をまたぐので左右の端に半分ずつ描く）
    g.fillStyle = P.grey;
    for (const x0 of [0, w]) { g.beginPath(); g.moveTo(x0, Y(0.56)); g.lineTo(x0 + w * 0.055, Y(0.66)); g.lineTo(x0 + w * 0.06, Y(0.5)); g.lineTo(x0, Y(0.3)); g.lineTo(x0 - w * 0.06, Y(0.5)); g.lineTo(x0 - w * 0.055, Y(0.66)); g.closePath(); g.fill(); }
  });
  const bodyGeo = paramGeo(36, 24, (u, v, p) => {
    const phi = (u - 0.5) * Math.PI * 2, y = B.yOf(v), r = B.r(y), c = Math.cos(phi);
    // 腹は前へ張り出し、背中はやや平ら
    const bulge = Math.max(0, c) * 0.05 * Math.exp(-((y - 0.1) ** 2) / 0.07);
    p.set(Math.sin(phi) * r, y, c * r * (c > 0 ? 0.88 : 0.8) + bulge * (r / 0.45));
  });
  place(mesh(bodyGeo, texMat(bodyTex)), torso, 0, 0, 0);
  // 毛並み: 輪郭がふさふさに見えるよう、体じゅうに下向きの毛の房を生やす（腹の白い部分は白い房）
  {
    let sd = 21; const rn = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
    const tanM = std(P.tan);
    for (let i = 0; i < 330; i++) {
      const phi = (rn() * 2 - 1) * Math.PI, y = -0.13 + rn() * 0.86, c = Math.cos(phi), r = B.r(y);
      const front = Math.abs(phi) < 1.0 + (y < 0.2 ? 0.25 : 0);
      if (!front && y > 0.08 && y < 0.17) continue; // 色の境目は避ける
      if (front) continue;
      if (Math.abs(phi) > 2.75 && y > 0.28 && y < 0.68) continue; // 背中の模様
      const mat = front ? (y <= 0.0 ? tanM : cream) : y < 0.1 ? dark : fur;
      const z = c * r * (c > 0 ? 0.88 : 0.8) + Math.max(0, c) * 0.05 * Math.exp(-((y - 0.1) ** 2) / 0.07) * (r / 0.45);
      tuft(torso, mat, Math.sin(phi) * r * 0.96, y, z * 0.96, Math.sin(phi) * 0.4, -1, c * 0.4, 0.045 + rn() * 0.025, 0.024 + rn() * 0.012, 0.6);
    }
  }
  place(mesh(new THREE.SphereGeometry(0.3, 14, 10), dark), hips, 0, -0.04, -0.02, 0, 0, 0, [1.3, 0.55, 1.0]);
  // 首元と肩の毛
  for (const [x, rz] of [[-0.05, 0.5], [0.04, -0.4], [0, 0]]) tuft(torso, cream, x, 0.75, 0.17, rz, -1, 0.5, 0.09, 0.035);
  // 尻尾（腰の後ろに突き出す毛玉。先は上を向く）
  const tail = new THREE.Group(); tail.userData.keep = true; place(tail, torso, 0, 0.1, -0.42, 0, 0, 0, 0.72);
  { const m = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), fur); m.scale.set(1, 0.95, 1.1); tail.add(m); }
  for (const [x, y, z, dx, dy, dz] of [[0, 0.1, -0.1, 0, 0.8, -0.6], [0.07, 0.11, -0.05, 0.4, 0.9, -0.3], [-0.07, 0.11, -0.05, -0.4, 0.9, -0.3], [0, 0.02, -0.16, 0, 0.3, -1]]) tuft(tail, fur, x, y, z, dx, dy, dz, 0.11, 0.045, 0.7);

  // ---------- 頭（横に広く、頬の高さがいちばん広い。顔は絵） ----------
  const head = joint('head', torso, 0, BT - 0.04, 0.09); j.head = head;
  head.scale.set(1.1, 0.95, 1.02);
  const HH = 0.42, HZ = 0.9;
  const H = radial([[0.0, HH], [0.14, HH - 0.02], [0.215, 0.32], [0.255, 0.22], [0.27, 0.13], [0.24, 0.05], [0.14, 0.008], [0.0, 0.0]]);
  const faceTex = canvasTex(1024, 512, (g, w, h) => {
    const U = w / (Math.PI * 2 * 0.265);
    const X = (x) => w / 2 + x * U, Y = (y) => H.vOf(y) * h;
    // 縦方向は余弦で詰まるので、円を描くときは縦の縮尺を合わせる
    const VS = (y) => (Y(y - 0.01) - Y(y + 0.01)) / 0.02;
    g.fillStyle = P.fur; g.fillRect(0, 0, w, h);
    strands(g, w, h, 'rgba(90,45,20,0.2)', 260);
    // 額と頬の明るい毛
    for (const [x, y, rx, ry] of [[-0.2, 0.3, 0.12, 0.08], [0.2, 0.3, 0.12, 0.08], [-0.33, 0.2, 0.1, 0.07], [0.33, 0.2, 0.1, 0.07]]) {
      const gl = g.createRadialGradient(0, 0, 0, 0, 0, 1); gl.addColorStop(0, P.light); gl.addColorStop(1, 'rgba(0,0,0,0)');
      g.save(); g.translate(X(x), Y(y)); g.scale(rx * U, ry * VS(y)); g.fillStyle = gl; g.globalAlpha = 0.4; g.beginPath(); g.arc(0, 0, 1, 0, 7); g.fill(); g.restore();
    }
    // 目のあいだから外へ流れる濃い毛
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1); gr.addColorStop(0, P.mask); gr.addColorStop(0.6, P.mask); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.save(); g.translate(X(0), Y(0.21)); g.scale(0.21 * U, 0.075 * VS(0.21)); g.fillStyle = gr; g.globalAlpha = 0.75; g.beginPath(); g.arc(0, 0, 1, 0, 7); g.fill(); g.restore();
    // 白い口元（目のすぐ下から頬の端まで広がる帯）
    g.fillStyle = P.cream;
    const top = [[-0.62, 0.12], [-0.34, 0.16], [-0.17, 0.138], [-0.06, 0.14], [0, 0.15], [0.06, 0.14], [0.17, 0.138], [0.34, 0.16], [0.62, 0.12]];
    g.beginPath(); g.moveTo(X(-0.62), Y(-0.01));
    new THREE.SplineCurve(top.map(([x, y]) => new THREE.Vector2(X(x), Y(y)))).getPoints(60).forEach((q) => g.lineTo(q.x, q.y));
    g.lineTo(X(0.62), Y(-0.01)); g.closePath(); g.fill();
    // あごの下の影
    // 前髪（頭頂から片側へ流れ、眉間で尖る。縁はぎざぎざ）
    {
      const XH = (x, y) => X(x * 0.265 / Math.max(0.09, H.r(y)));
      const o = [[-0.1, 0.415], [-0.12, 0.345], [-0.105, 0.28], [-0.078, 0.3], [-0.068, 0.235], [-0.032, 0.265], [0.028, 0.168], [0.05, 0.25], [0.076, 0.222], [0.082, 0.295], [0.112, 0.31], [0.108, 0.385], [0.07, 0.418], [0.0, 0.42]];
      g.fillStyle = P.hair; g.beginPath(); o.forEach(([x, y], i) => (i ? g.lineTo(XH(x, y), Y(y)) : g.moveTo(XH(x, y), Y(y)))); g.closePath(); g.fill();
      g.strokeStyle = 'rgba(30,18,12,0.35)'; g.lineWidth = 3;
      for (const [x0, y0, x1, y1] of [[-0.07, 0.39, -0.085, 0.3], [-0.03, 0.4, -0.05, 0.27], [0.0, 0.4, 0.0, 0.25], [0.03, 0.4, 0.03, 0.2], [0.06, 0.39, 0.06, 0.26], [0.09, 0.37, 0.09, 0.31]]) { g.beginPath(); g.moveTo(XH(x0, y0), Y(y0)); g.lineTo(XH(x1, y1), Y(y1)); g.stroke(); }
    }
    for (const s of [-1, 1]) {
      // 目: 内側が下がった大きな黒い目。上まぶたは太く、外へ跳ねる
      const ex = X(s * 0.112), ey = Y(0.175), vs = VS(0.175);
      g.save(); g.translate(ex, ey); g.rotate(s * 0.42);
      g.fillStyle = '#120a08'; g.beginPath(); g.ellipse(0, 0, 0.036 * U, 0.025 * vs, 0, 0, 7); g.fill();
      g.fillStyle = P.eye; g.beginPath(); g.ellipse(0, 0.004 * vs, 0.026 * U, 0.016 * vs, 0, 0, 7); g.fill();
      g.fillStyle = '#0a0606'; g.beginPath(); g.ellipse(0, 0.002 * vs, 0.02 * U, 0.013 * vs, 0, 0, 7); g.fill();
      g.restore();
      g.strokeStyle = '#120a08'; g.lineWidth = 0.005 * U; g.lineCap = 'round';
      g.beginPath(); g.moveTo(X(s * 0.072), Y(0.176)); g.quadraticCurveTo(X(s * 0.1), Y(0.205), X(s * 0.148), Y(0.205)); g.stroke();
      g.fillStyle = '#fff'; g.beginPath(); g.ellipse(X(s * 0.112 - 0.01), Y(0.163), 0.008 * U, 0.008 * vs, 0, 0, 7); g.fill();
    }
  });
  const headGeo = paramGeo(40, 22, (u, v, p) => { const phi = (u - 0.5) * Math.PI * 2, y = H.yOf(v), r = H.r(y); p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * HZ); });
  place(mesh(headGeo, texMat(faceTex)), head, 0, 0, 0);
  // 頭の毛並み（顔の正面は避ける。口元の白い帯のあたりは白い房）
  {
    let sd = 33; const rn = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 200; i++) {
      const phi = (rn() * 2 - 1) * Math.PI, y = 0.03 + rn() * 0.36, c = Math.cos(phi), r = H.r(y);
      if (Math.abs(phi) < 1.05 && y < 0.3) continue;
      if (Math.abs(phi) < 0.5) continue;
      if (y > 0.1 && y < 0.17 && Math.abs(phi) < 2.4) continue; // 色の境目は避ける
      const mat = y <= 0.1 && Math.abs(phi) < 2.3 ? cream : fur;
      tuft(head, mat, Math.sin(phi) * r * 0.96, y, c * r * HZ * 0.96, Math.sin(phi) * 0.6, -1 + (y > 0.3 ? 1.3 : 0), c * 0.6, 0.04 + rn() * 0.025, 0.022 + rn() * 0.01, 0.6);
    }
  }
  // 口吻、小さな逆三角の鼻、口と前歯
  place(mesh(new THREE.SphereGeometry(1, 12, 10), cream), head, 0, 0.1, 0.2, 0, 0, 0, [0.085, 0.052, 0.055]);
  place(mesh(new THREE.ConeGeometry(0.02, 0.022, 3), basic(P.claw)), head, 0, 0.122, 0.25, Math.PI, 0, 0, [1, 1, 0.5]);
  for (const s of [-1, 1]) place(mesh(new THREE.BoxGeometry(0.026, 0.004, 0.005), basic(0x6a4a3e)), head, s * 0.011, 0.078, 0.249, 0, s * 0.3, s * -0.25);
  place(mesh(new THREE.BoxGeometry(0.02, 0.012, 0.005), basic(0xf2eee4)), head, 0, 0.07, 0.247);
  // 頬の毛（白く外へ跳ねる）と、こめかみの毛
  for (const s of [-1, 1]) {
    for (const [y, dy, len] of [[0.12, -0.2, 0.085], [0.075, -0.6, 0.075], [0.155, 0.1, 0.06]]) tuft(head, cream, s * 0.25, y, 0.02, s, dy, 0, len, 0.045);
    for (const [y, dy, len] of [[0.3, 0.7, 0.055]]) tuft(head, fur, s * H.r(y) * 0.95, y, -0.02, s, dy, 0, len, 0.03);
  }
  // こげ茶の前髪: 頭頂をおおい、額の前へひさしのように張り出して、片側へ流れながら眉間まで垂れる
  place(mesh(new THREE.SphereGeometry(1, 14, 10), hair), head, 0, 0.385, -0.035, 0, 0, 0, [0.1, 0.07, 0.215]);
  {
    // 頭の丸みに沿って額へかぶさる毛の層。中央ほど厚く、下へ行くほど前へ浮いてひさしになる
    const edge = [[-1, 0.33], [-0.85, 0.27], [-0.62, 0.3], [-0.5, 0.235], [-0.22, 0.27], [0.25, 0.165], [0.48, 0.25], [0.7, 0.225], [0.8, 0.3], [1, 0.33]];
    const yb = (u) => { for (let i = 1; i < edge.length; i++) if (u <= edge[i][0]) { const [u0, y0] = edge[i - 1], [u1, y1] = edge[i]; return y0 + (y1 - y0) * (u - u0) / (u1 - u0); } return 0.33; };
    const hg = paramGeo(48, 10, (u, v, p) => {
      const uu = u * 2 - 1, y = 0.4 + (yb(uu) - 0.4) * v;
      const R = H.r(y) + 0.012 + 0.032 * (1 - uu * uu) * Math.sin(Math.PI * Math.min(1, 0.25 + v * 0.75));
      const x = uu * 0.09 - 0.025 * (1 - v), phi = Math.asin(Math.max(-1, Math.min(1, x / Math.max(0.11, R))));
      p.set(Math.sin(phi) * R, y, Math.cos(phi) * R * HZ + 0.07 * Math.max(0, 0.33 - y) / 0.16);
    });
    const hm = std(P.hair, { side: THREE.DoubleSide });
    place(mesh(hg, hm), head, 0, 0, 0);
  }
  for (const [x, y, z, dx, dy, dz, len] of [[0.03, 0.44, 0.04, 0.3, 1, 0.4, 0.04], [-0.04, 0.445, -0.03, -0.4, 1, -0.2, 0.035], [0.02, 0.43, -0.14, 0.1, 0.6, -1, 0.09], [-0.05, 0.41, -0.17, -0.3, 0.3, -1, 0.09], [0.06, 0.4, -0.18, 0.4, 0.2, -1, 0.08]]) tuft(head, hairF, x, y, z, dx, dy, dz, len, 0.035, 0.7);

  // ---------- 耳（長く、後ろへ倒れて外へ開く。内側は桃色、先はこげ茶） ----------
  const earTex = canvasTex(64, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, P.tip); gr.addColorStop(0.4, P.tip); gr.addColorStop(0.42, P.earLo); gr.addColorStop(0.8, P.earLo); gr.addColorStop(1, P.fur);
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  const earM = new THREE.MeshStandardMaterial({ map: earTex, roughness: 0.92, metalness: 0, envMapIntensity: 0.25 });
  const ears = [];
  for (const s of [-1, 1]) {
    const e = joint(s < 0 ? 'earR' : 'earL', head, s * 0.125, 0.36, -0.04); j[s < 0 ? 'earR' : 'earL'] = e;
    base[s < 0 ? 'earR' : 'earL'] = [-0.72, 0, s * -0.36];
    const sway = new THREE.Group(); sway.userData.keep = true; e.add(sway); ears.push(sway);
    const outer = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 14), earM); outer.scale.set(0.165, 0.41, 0.06); outer.position.set(0, 0.39, 0);
    const inner = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 14), pink); inner.scale.set(0.105, 0.345, 0.03); inner.position.set(s * 0.02, 0.385, 0.04);
    // 耳の面は外を向く（軸まわりのひねり）
    const twist = new THREE.Group(); twist.rotation.y = s * 0.95; sway.add(twist);
    twist.add(outer, inner);
    for (const [x, y, rz] of [[0.1, 0.08, -1.2], [-0.1, 0.09, 1.2]]) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), fur); c.position.set(x, y, 0); c.rotation.z = rz; c.scale.z = 0.5; twist.add(c); }
  }

  // ---------- 腕（太く長い。先へ行くほど太く、拳の下半分は濃い色） ----------
  const trails = {}, hands = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.24, 0.6, 0); j[R ? 'armR' : 'armL'] = arm;
    place(mesh(new THREE.SphereGeometry(0.11, 12, 10), fur), arm, 0, 0, 0);
    place(mesh(taperCapsule(0.33, 0.1, 0.105, 12), fur), arm, 0, 0, 0);
    // 腕の内側の白い毛
    place(mesh(new THREE.SphereGeometry(1, 8, 8), cream), arm, s * -0.055, -0.19, 0, 0, 0, 0, [0.06, 0.17, 0.085]);
    for (let k = 0; k < 7; k++) { const a = k * 2.1 + 0.4; tuft(arm, fur, Math.sin(a) * 0.09, -0.06 - k * 0.035, Math.cos(a) * 0.09, Math.sin(a) * 0.4, -1, Math.cos(a) * 0.4, 0.045, 0.022, 0.6); }
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.33, 0); j[R ? 'foreR' : 'foreL'] = fore;
    for (let k = 0; k < 7; k++) { const a = k * 2.3 + 1.1; tuft(fore, fur, Math.sin(a) * 0.105, -0.03 - k * 0.028, Math.cos(a) * 0.105, Math.sin(a) * 0.4, -1, Math.cos(a) * 0.4, 0.045, 0.024, 0.6); }
    place(mesh(new THREE.SphereGeometry(0.108, 10, 8), fur), fore, 0, 0, 0);
    place(mesh(taperCapsule(0.23, 0.11, 0.135, 12), fur), fore, 0, 0, 0);
    const hand = new THREE.Group(); hand.userData.joint = true; place(hand, fore, 0, -0.28, 0); hands[s] = hand;
    place(mesh(new THREE.SphereGeometry(0.148, 12, 10), fur), hand, 0, 0.02, 0.01, 0, 0, 0, [1, 0.9, 1.05]);
    place(mesh(new THREE.SphereGeometry(0.146, 12, 10), dark), hand, 0, -0.035, 0.015, 0, 0, 0, [1.04, 0.75, 1.1]);
    place(mesh(new THREE.SphereGeometry(0.042, 8, 6), cream), hand, s * -0.11, -0.01, 0.08, 0, 0, 0, [0.7, 1.2, 1]);
    const a = new THREE.Object3D(); a.position.set(0, -0.1, 0); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.42, 0); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }

  // ---------- 脚（胴の輪郭をそのまま下へ延ばす太い腿。足首まで濃い色、三本指に黒い爪） ----------
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.27, -0.04, 0); j[R ? 'legR' : 'legL'] = leg;
    place(mesh(new THREE.SphereGeometry(0.25, 14, 12), dark), leg, 0, -0.03, 0, 0, 0, 0, [1, 1.15, 1.15]);
    place(mesh(taperCapsule(0.2, 0.22, 0.19, 12), dark), leg, 0, 0, 0);
    for (let k = 0; k < 12; k++) { const a = k * 1.9 + 0.3, y = 0.05 - (k % 4) * 0.07; tuft(leg, dark, Math.sin(a) * 0.215, y, Math.cos(a) * 0.235, Math.sin(a) * 0.4, -1, Math.cos(a) * 0.4, 0.055, 0.03, 0.6); }
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.2, 0); j[R ? 'shinR' : 'shinL'] = shin;
    for (let k = 0; k < 7; k++) { const a = k * 0.9; tuft(shin, dark, Math.sin(a) * 0.15, -0.1, Math.cos(a) * 0.15, Math.sin(a) * 0.5, -1, Math.cos(a) * 0.5, 0.07, 0.04, 0.7); }
    place(mesh(taperCapsule(0.15, 0.19, 0.165, 12), dark), shin, 0, 0, 0);
    const foot = new THREE.Group(); place(foot, shin, 0, -0.22, 0.02);
    place(mesh(new THREE.SphereGeometry(1, 12, 8), fur), foot, 0, 0, 0.06, 0, 0, 0, [0.185, 0.09, 0.2]);
    for (const k of [-1, 0, 1]) {
      place(mesh(new THREE.SphereGeometry(0.072, 8, 6), fur), foot, k * 0.11, -0.01, 0.23 - Math.abs(k) * 0.02);
      place(mesh(new THREE.ConeGeometry(0.055, 0.14, 5), claw), foot, k * 0.11, -0.02, 0.31 - Math.abs(k) * 0.02, Math.PI / 2 + 0.25, 0, 0);
    }
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.28, 0.2); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
  }

  mergeStatic(root);

  const baseEmissive = flashMats.map((m) => m.emissive.clone());
  const rig = { j, base, hipY: HAMU_HIP, flare: 0 };
  const orbPoint = new THREE.Object3D(); orbPoint.position.set(0, 0.5, 0.8); body.add(orbPoint);
  // おしり（ガスの出どころ）
  const butt = new THREE.Object3D(); butt.position.set(0, 0.0, -0.5); torso.add(butt);
  const shadow = blobShadow(0x000000, null, 1.1);
  let t = 0, earV = 0, earA = 0;

  return {
    root, rig, trails, worldObjects: [], orbPoint, shadow, hands, butt,
    height: 1.6, headY: 2.45,
    trailColor: variant ? 0xa0c0ff : 0xffb060,
    update(dt, ctx) {
      t += dt;
      if (ctx.snap) { earA = 0; earV = 0; }
      // 耳は動きに遅れて揺れ、尻尾は小さく振る
      const want = Math.max(-0.5, Math.min(0.6, (ctx.vy || 0) * 2.2 - Math.abs(ctx.vx || 0) * 1.6));
      earV += (want - earA) * 0.12; earV *= 0.8; earA += earV;
      ears[0].rotation.x = earA + Math.sin(t * 2.1) * 0.03; ears[1].rotation.x = earA + Math.sin(t * 2.1 + 0.7) * 0.03;
      tail.rotation.y = Math.sin(t * 5) * 0.18;
    },
    setFlash(color, a) {
      flashMats.forEach((m, i) => { m.emissive.copy(baseEmissive[i]); if (a > 0) m.emissive.lerp(color, a * 0.8); });
    },
    dispose() { disposeTree(root); },
  };
}
