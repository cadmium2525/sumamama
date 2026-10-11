// スネグーラチカ: 水の精ウンディーネの亜種（参考画像20〜23 準拠）。
// 赤い帽子と服に白い毛皮の縁、足もとまで届く青緑の長い髪（赤い玉と金の星の飾り）、水でできた半透明の腕、
// 脚のかわりに白い尾。氷の剣と氷の弓はワザのときだけ現れる（setWeapon）。
import * as THREE from 'three';
import { gloss, basic, lathe, place, mesh, mergeStatic, joint, paramGeo, blobShadow, canvasTex } from './kit.js';
import { taperCapsule, disposeTree } from './common.js';

const VARIANTS = [
  { skin: '#d9b9aa', red: '#a82424', fur: '#d8ccb0', hairA: '#289c86', hairB: '#125c7c', water: 0x4cc8d4, tail: '#cfd4e0', wrap: '#22a4ae', gold: '#c0902c', belt: '#1c1c22', eye: '#2a70c8', eye2: '#6cc4f0', ball: '#b82020', ice: 0x9fe4ff },
  { skin: '#d9b9aa', red: '#2a4a9a', fur: '#d8dce8', hairA: '#c8ccdc', hairB: '#7c88b4', water: 0x9ab4ff, tail: '#cfd4e0', wrap: '#4a5cb0', gold: '#b4bcc8', belt: '#1c1c22', eye: '#7a3ac0', eye2: '#c89cf0', ball: '#3a5ac0', ice: 0xc8d4ff },
];

export const SNEGU_HIP = 1.25;
const SCALE = 0.82;

function radial(pts) {
  const sm = new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y))).getPoints(200);
  const y0 = pts[pts.length - 1][1], y1 = pts[0][1];
  const r = (y) => { for (let i = 1; i < sm.length; i++) if (y >= sm[i].y) { const p = sm[i - 1], q = sm[i]; return Math.max(0, p.x + (q.x - p.x) * (p.y - y) / Math.max(1e-6, p.y - q.y)); } return 0; };
  return { r, yOf: (v) => y0 + (y1 - y0) * (0.5 + 0.5 * Math.cos(Math.PI * v)), vOf: (y) => Math.acos(Math.max(-1, Math.min(1, (y - y0) / (y1 - y0) * 2 - 1))) / Math.PI };
}
// 五芒星の薄い板
function starGeo(r) {
  const sh = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 + Math.PI / 2, q = i % 2 ? r * 0.45 : r; i ? sh.lineTo(Math.cos(a) * q, Math.sin(a) * q) : sh.moveTo(Math.cos(a) * q, Math.sin(a) * q); }
  sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth: r * 0.2, bevelEnabled: true, bevelSize: r * 0.08, bevelThickness: r * 0.1, bevelSegments: 1 });
  g.translate(0, 0, -r * 0.1);
  return g;
}

export function buildSnegu(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  const std = (color, o = {}) => gloss(color, { rough: 0.8, metal: 0, env: 0.3, ...o });
  const skin = std(P.skin), red = std(P.red), fur = std(P.fur, { rough: 1 }), gold = gloss(P.gold, { rough: 0.4, metal: 0.6, env: 0.8 }), belt = std(P.belt), tailM = std(P.tail, { rough: 0.6 }), wrap = std(P.wrap), ball = std(P.ball, { rough: 0.5 });
  const hairM = std(P.hairA, { rough: 0.6 });
  const water = new THREE.MeshStandardMaterial({ color: P.water, roughness: 0.25, metalness: 0, envMapIntensity: 0.9, transparent: true, opacity: 0.78, emissive: new THREE.Color(P.water).multiplyScalar(0.25) });
  const ice = new THREE.MeshStandardMaterial({ color: P.ice, roughness: 0.15, metalness: 0.1, envMapIntensity: 1.3, transparent: true, opacity: 0.88, emissive: new THREE.Color(P.ice).multiplyScalar(0.35) });
  const flashMats = [skin, red, tailM, wrap, hairM];
  const up = new THREE.Vector3(0, 1, 0), tv = new THREE.Vector3();
  // 表面から伸びる房（円錐）
  const lock = (parent, mat, x, y, z, dx, dy, dz, len, r, flat = 0.6) => { const c = mesh(new THREE.ConeGeometry(r, len, 6), mat); tv.set(dx, dy, dz).normalize(); place(c, parent, x + tv.x * len * 0.5, y + tv.y * len * 0.5, z + tv.z * len * 0.5); c.quaternion.setFromUnitVectors(up, tv); c.scale.z = flat; return c; };

  const fig = new THREE.Group(); fig.userData.keep = true; fig.scale.setScalar(SCALE); root.add(fig);
  const body = joint('body', fig, 0, SNEGU_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;
  torso.scale.set(1.18, 1, 1.18); // 胴を太めに（頭は下で打ち消す）

  // ---------- 腰と尾（脚のかわりの白い尾。legR・shinR の姿勢で振れる） ----------
  place(mesh(lathe([[0.235, 0.02], [0.235, -0.1], [0.19, -0.26], [0.13, -0.32]], 20), wrap), hips, 0, 0, 0, 0, 0, 0, [1, 1, 0.85]);
  const tailW = [];
  const seg = (name, parent, y, len, r0, r1, rx) => {
    const g = joint(name, parent, 0, y, 0); if (name) { j[name] = g; base[name] = [rx, 0, 0]; } else g.rotation.x = rx;
    const w = new THREE.Group(); w.userData.keep = true; g.add(w); tailW.push(w);
    const m = new THREE.Mesh(taperCapsule(len, r0, r1, 14), tailM); m.scale.z = 0.85; w.add(m);
    const top = new THREE.Mesh(new THREE.SphereGeometry(r0, 12, 8), tailM); top.scale.z = 0.85; w.add(top);
    return w;
  };
  const t1 = seg('legR', hips, -0.14, 0.34, 0.18, 0.14, 0.12);
  const t2 = seg('shinR', t1, -0.34, 0.32, 0.14, 0.095, 0.3);
  const t3 = seg('', t2, -0.32, 0.3, 0.095, 0.05, 0.75);
  { // 尾びれ（平たく尖る）
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.34, 8), tailM); fin.scale.set(1.7, 1, 0.22); fin.position.set(0, -0.44, 0); fin.rotation.x = Math.PI; t3.add(fin);
    // 前の布の金の縁取り（V字）
    for (const s of [-1, 1]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.3, 0.012), gold); b.position.set(s * 0.055, -0.12, 0.135); b.rotation.z = s * 0.33; b.rotation.x = 0.08; t1.add(b); }
  }
  const tailTip = new THREE.Object3D(); tailTip.position.set(0, -0.6, 0); t3.add(tailTip);

  // ---------- 胴（肩を出した赤い服。上下の縁は白い毛皮、黒い帯に金の留め具） ----------
  const skirtTex = canvasTex(256, 128, (g, w, h) => {
    g.fillStyle = P.red; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,0.9)';
    let s = 5; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 26; i++) { const x = r() * w, y = h * (0.45 + r() * 0.5), q = 1.5 + r() * 2; g.beginPath(); for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2, d = k % 2 ? q * 0.4 : q; g.lineTo(x + Math.cos(a) * d, y + Math.sin(a) * d); } g.fill(); }
  });
  const skirtM = new THREE.MeshStandardMaterial({ map: skirtTex, roughness: 0.8, metalness: 0, envMapIntensity: 0.3 }); flashMats.push(skirtM);
  place(mesh(lathe([[0.255, -0.04], [0.225, 0.08], [0.16, 0.22], [0.13, 0.3]], 24), skirtM), torso, 0, 0, 0, 0, 0, 0, [1, 1, 0.86]);
  place(mesh(new THREE.TorusGeometry(0.252, 0.045, 8, 24), fur), torso, 0, -0.04, 0, Math.PI / 2, 0, 0, [1, 0.86, 1]);
  place(mesh(new THREE.CylinderGeometry(0.134, 0.134, 0.04, 20), belt), torso, 0, 0.3, 0, 0, 0, 0, [1, 1, 0.84]);
  place(mesh(new THREE.BoxGeometry(0.06, 0.045, 0.02), gold), torso, 0, 0.3, 0.112);
  place(mesh(lathe([[0.13, 0.3], [0.135, 0.4], [0.158, 0.48], [0.155, 0.53]], 24), red), torso, 0, 0, 0, 0, 0, 0, [1, 1, 0.8]);
  for (const s of [-1, 1]) place(mesh(new THREE.SphereGeometry(0.084, 12, 10), red), torso, s * 0.07, 0.465, 0.08, 0, 0, 0, [1, 0.95, 0.9]);
  place(mesh(new THREE.TorusGeometry(0.158, 0.028, 8, 24), fur), torso, 0, 0.535, 0.004, Math.PI / 2 - 0.12, 0, 0, [1, 0.84, 1]);
  // 肩と首（肌）、赤い首飾り
  place(mesh(lathe([[0.14, 0.5], [0.15, 0.56], [0.1, 0.63], [0.05, 0.66], [0.045, 0.74]], 20), skin), torso, 0, 0, 0, 0, 0, 0, [1.12, 1, 0.72]);
  place(mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.035, 14), red), torso, 0, 0.69, 0);
  for (const y of [0.672, 0.708]) place(mesh(new THREE.TorusGeometry(0.052, 0.008, 5, 14), fur), torso, 0, y, 0, Math.PI / 2, 0, 0);

  // ---------- 頭（大きな青い目。顔は絵） ----------
  const head = joint('head', torso, 0, 0.73, 0.0); j.head = head;
  head.scale.set(1.28 / 1.18, 1.28, 1.28 / 1.18);
  const HH = 0.36, HZ = 0.95;
  const H = radial([[0.0, HH], [0.115, HH - 0.015], [0.172, 0.27], [0.185, 0.18], [0.158, 0.1], [0.095, 0.035], [0.03, 0.002], [0.0, 0.0]]);
  const faceTex = canvasTex(1024, 512, (g, w, h) => {
    const U = w / (Math.PI * 2 * 0.185);
    const X = (x) => w / 2 + x * U, Y = (y) => H.vOf(y) * h, VS = (y) => (Y(y - 0.01) - Y(y + 0.01)) / 0.02;
    g.fillStyle = P.skin; g.fillRect(0, 0, w, h);
    // 髪の地（頭頂・後ろ・横）
    g.fillStyle = P.hairA; g.fillRect(0, 0, w, Y(0.25));
    g.fillRect(0, 0, X(-0.2), h); g.fillRect(X(0.2), 0, w - X(0.2), h);
    for (const s of [-1, 1]) {
      // ほお紅
      const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1); gr.addColorStop(0, 'rgba(240,120,120,0.35)'); gr.addColorStop(1, 'rgba(240,120,120,0)');
      g.save(); g.translate(X(s * 0.105), Y(0.105)); g.scale(0.045 * U, 0.025 * VS(0.105)); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 1, 0, 7); g.fill(); g.restore();
      // 目: 白目、青い瞳（上が濃く下が明るい）、黒い瞳孔、光
      const ex = X(s * 0.074), ey = Y(0.152), vs = VS(0.152);
      g.fillStyle = '#f8f8fa'; g.beginPath(); g.ellipse(ex, ey, 0.031 * U, 0.034 * vs, 0, 0, 7); g.fill();
      const ig = g.createLinearGradient(0, ey - 0.032 * vs, 0, ey + 0.032 * vs); ig.addColorStop(0, '#102a60'); ig.addColorStop(0.45, P.eye); ig.addColorStop(1, P.eye2);
      g.fillStyle = ig; g.beginPath(); g.ellipse(ex, ey + 0.001 * vs, 0.025 * U, 0.032 * vs, 0, 0, 7); g.fill();
      g.fillStyle = '#081430'; g.beginPath(); g.ellipse(ex, ey, 0.011 * U, 0.013 * vs, 0, 0, 7); g.fill();
      g.fillStyle = '#fff'; g.beginPath(); g.ellipse(ex - 0.01 * U, ey - 0.016 * vs, 0.008 * U, 0.009 * vs, 0, 0, 7); g.fill();
      // まつ毛（上は太く外へ跳ねる）、下まつ毛、眉
      g.strokeStyle = '#1a1c2a'; g.lineCap = 'round'; g.lineWidth = 0.008 * U;
      g.beginPath(); g.moveTo(X(s * 0.04), Y(0.172)); g.quadraticCurveTo(X(s * 0.074), Y(0.198), X(s * 0.112), Y(0.178)); g.stroke();
      g.strokeStyle = 'rgba(26,28,42,0.5)'; g.lineWidth = 0.003 * U; g.beginPath(); g.moveTo(X(s * 0.05), Y(0.118)); g.quadraticCurveTo(X(s * 0.074), Y(0.112), X(s * 0.1), Y(0.12)); g.stroke();
      g.strokeStyle = P.hairB; g.lineWidth = 0.005 * U; g.beginPath(); g.moveTo(X(s * 0.035), Y(0.228)); g.quadraticCurveTo(X(s * 0.07), Y(0.24), X(s * 0.108), Y(0.226)); g.stroke();
    }
    // 小さな鼻と口
    g.fillStyle = 'rgba(180,110,100,0.6)'; g.beginPath(); g.ellipse(X(0), Y(0.1), 0.004 * U, 0.006 * VS(0.1), 0, 0, 7); g.fill();
    g.strokeStyle = '#a05858'; g.lineWidth = 0.004 * U; g.lineCap = 'round'; g.beginPath(); g.moveTo(X(-0.018), Y(0.062)); g.quadraticCurveTo(X(0), Y(0.054), X(0.018), Y(0.062)); g.stroke();
  });
  faceTex.flipY = false;
  const faceM = new THREE.MeshStandardMaterial({ map: faceTex, roughness: 0.8, metalness: 0, envMapIntensity: 0.3 }); flashMats.push(faceM);
  const headGeo = paramGeo(40, 22, (u, v, p) => { const phi = (u - 0.5) * Math.PI * 2, y = H.yOf(v), r = H.r(y); p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * HZ); });
  place(mesh(headGeo, faceM), head, 0, 0, 0);
  // 尖った耳
  for (const s of [-1, 1]) lock(head, skin, s * 0.17, 0.14, -0.01, s, 0.25, -0.35, 0.15, 0.04, 0.4);
  // 前髪（額にかぶさる層。縁はぎざぎざ）と、顔の両脇に垂れる房
  {
    const edge = [[-1, 0.04], [-0.86, 0.15], [-0.7, 0.08], [-0.52, 0.215], [-0.36, 0.17], [-0.18, 0.232], [-0.02, 0.185], [0.16, 0.235], [0.32, 0.18], [0.5, 0.22], [0.68, 0.08], [0.84, 0.15], [1, 0.04]];
    const yb = (u) => { for (let i = 1; i < edge.length; i++) if (u <= edge[i][0]) { const [u0, y0] = edge[i - 1], [u1, y1] = edge[i]; return y0 + (y1 - y0) * (u - u0) / (u1 - u0); } return 0.1; };
    const hg = paramGeo(56, 10, (u, v, p) => {
      const uu = u * 2 - 1, y = 0.345 + (yb(uu) - 0.345) * v;
      const R = H.r(y) + 0.006 + 0.012 * Math.sin(Math.PI * Math.min(1, 0.3 + v * 0.7));
      const phi = uu * 1.25;
      p.set(Math.sin(phi) * R, y, Math.cos(phi) * R * HZ + 0.02 * v);
    });
    place(mesh(hg, std(P.hairA, { rough: 0.6, side: THREE.DoubleSide })), head, 0, 0, 0);
  }
  place(mesh(new THREE.SphereGeometry(1, 16, 12), hairM), head, 0, 0.19, -0.03, 0, 0, 0, [0.195, 0.185, 0.2]);
  for (const s of [-1, 1]) {
    lock(head, hairM, s * 0.175, 0.2, 0.06, s * 0.12, -1, 0.05, 0.38, 0.05, 0.5);
    lock(head, hairM, s * 0.19, 0.22, -0.02, s * 0.3, -1, -0.1, 0.42, 0.055, 0.5);
    lock(head, hairM, s * 0.15, 0.14, 0.1, s * 0.55, -1, 0.1, 0.16, 0.035, 0.5);
  }

  // ---------- 帽子（白い毛皮の縁、先が横へ垂れる赤い三角帽、先に白い玉。前に金の星） ----------
  {
    const hat = new THREE.Group(); place(hat, head, 0.01, 0.275, -0.02, -0.2, 0, -0.22, 0.95);
    place(mesh(new THREE.TorusGeometry(0.175, 0.05, 8, 24), fur), hat, 0, 0, 0, Math.PI / 2, 0, 0, [1.02, 1, 1]);
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.0, 0.12, -0.01), new THREE.Vector3(0.09, 0.19, -0.03), new THREE.Vector3(0.22, 0.13, -0.04), new THREE.Vector3(0.27, 0.0, -0.03)]);
    const zAx = new THREE.Vector3(0, 0, 1), C = new THREE.Vector3(), T = new THREE.Vector3(), N = new THREE.Vector3(), Bn = new THREE.Vector3();
    const hg = paramGeo(18, 14, (u, v, p) => {
      curve.getPoint(v, C); curve.getTangent(v, T); N.crossVectors(T, zAx).normalize(); Bn.crossVectors(T, N).normalize();
      const r = 0.17 * Math.pow(1 - v, 0.75) + 0.025, a = u * Math.PI * 2;
      p.copy(C).addScaledVector(N, Math.cos(a) * r).addScaledVector(Bn, Math.sin(a) * r);
    });
    place(mesh(hg, std(P.red, { side: THREE.DoubleSide })), hat, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(0.055, 10, 8), fur), hat, 0.275, -0.04, -0.03);
    place(mesh(starGeo(0.075), gold), hat, -0.17, 0.0, 0.13, 0, -0.75, 0.25);
  }

  // ---------- 後ろ髪（足もとまで届く長い髪。裾へ向かって広がり、赤い玉と金の星を飾る） ----------
  const hairBack = new THREE.Group(); hairBack.userData.keep = true; place(hairBack, head, 0, 0.2, -0.08);
  {
    const L = 1.32;
    const hairTex = canvasTex(256, 512, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, P.hairA); gr.addColorStop(0.35, P.hairA); gr.addColorStop(1, P.hairB);
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
      let s = 3; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
      for (let i = 0; i < 60; i++) { const x = r() * w; g.strokeStyle = r() < 0.5 ? 'rgba(255,255,255,0.12)' : 'rgba(0,30,50,0.14)'; g.lineWidth = 1 + r() * 3; g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x + (r() - 0.5) * 20, h * 0.3, x + (r() - 0.5) * 30, h * 0.7, x + (r() - 0.5) * 30, h); g.stroke(); }
    });
    hairTex.flipY = false;
    const backM = new THREE.MeshStandardMaterial({ map: hairTex, roughness: 0.6, metalness: 0, envMapIntensity: 0.4, side: THREE.DoubleSide }); flashMats.push(backM);
    // 表面の点（u: -1〜1 で一周、v: 0〜1 で根元から毛先）。下へ行くほど太く、後ろへ流れ、毛先で閉じる
    const surf = (uu, v, p, off = 0) => {
      const a = uu * Math.PI, end = v > 0.82 ? Math.sqrt(Math.max(0, 1 - ((v - 0.82) / 0.18) ** 2)) : 1;
      const rx = (0.16 + 0.27 * Math.pow(v, 0.8)) * (0.25 + 0.75 * end) + off, rz = (0.12 + 0.15 * v) * (0.25 + 0.75 * end) + off;
      const wave = 0.03 * Math.sin(uu * 14) * v;
      p.set(Math.sin(a) * (rx + wave), -L * v + 0.05, -0.06 - 0.36 * Math.pow(v, 1.15) - Math.cos(a) * (rz + wave));
    };
    hairBack.add(new THREE.Mesh(paramGeo(44, 20, (u, v, p) => surf(u * 2 - 1, v, p)), backM));
    const q = new THREE.Vector3();
    // 外へ跳ねる毛先
    for (const [uu, v, len] of [[-0.42, 0.5, 0.3], [0.42, 0.55, 0.3], [-0.38, 0.8, 0.34], [0.38, 0.84, 0.34], [-0.15, 0.97, 0.3], [0.15, 0.97, 0.3], [0, 0.99, 0.26]]) {
      surf(uu, v, q, -0.04);
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.09, len, 6), backM); tv.set(Math.sin(uu * Math.PI) * 1.2, -0.7, -0.2 - Math.abs(Math.cos(uu * Math.PI)) * 0.3).normalize();
      c.position.copy(q).addScaledVector(tv, len * 0.4); c.quaternion.setFromUnitVectors(up, tv); c.scale.z = 0.5; hairBack.add(c);
    }
    for (const [uu, v] of [[-0.3, 0.32], [0.33, 0.45], [-0.12, 0.7], [0.3, 0.8], [-0.36, 0.62]]) { surf(uu, v, q, 0.045); const m = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), ball); m.position.copy(q); hairBack.add(m); }
    for (const [uu, v] of [[0.12, 0.22], [-0.14, 0.42], [0.1, 0.6], [-0.28, 0.85], [0.36, 0.66]]) { surf(uu, v, q, 0.03); const m = new THREE.Mesh(starGeo(0.06), gold); m.position.copy(q); m.lookAt(q.x * 3, q.y, q.z * 3 - 1); hairBack.add(m); }
  }

  // ---------- 腕（肩は肌、その先は水でできた半透明の腕） ----------
  const trails = {}, hands = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.165, 0.57, 0); j[R ? 'armR' : 'armL'] = arm;
    place(mesh(new THREE.SphereGeometry(0.052, 10, 8), skin), arm, 0, 0, 0);
    place(mesh(taperCapsule(0.1, 0.05, 0.046, 10), skin), arm, 0, 0, 0);
    place(mesh(taperCapsule(0.19, 0.05, 0.044, 10), water), arm, 0, -0.08, 0);
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.27, 0); j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(taperCapsule(0.22, 0.045, 0.034, 10), water), fore, 0, 0, 0);
    const hand = new THREE.Group(); hand.userData.joint = true; place(hand, fore, 0, -0.24, 0); hands[s] = hand;
    place(mesh(new THREE.SphereGeometry(0.042, 8, 6), water), hand, 0, -0.02, 0, 0, 0, 0, [1, 1.3, 0.7]);
    for (let k = 0; k < 4; k++) place(mesh(new THREE.ConeGeometry(0.011, 0.07, 4), water), hand, (k - 1.5) * 0.02, -0.095, 0, Math.PI, 0, (k - 1.5) * -0.1);
    const a = new THREE.Object3D(); a.position.set(0, -0.05, 0); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.36, 0); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }
  trails.tail = [t2, tailTip];

  // ---------- 氷の剣（右手。刀身は手のローカル +Z）と氷の弓（左手） ----------
  const wep = joint('wep', hands[-1], 0, -0.03, 0); j.wep = wep;
  const blade = new THREE.Group(); blade.userData.keep = true; blade.visible = false; wep.add(blade);
  {
    const sh = new THREE.Shape();
    sh.moveTo(0.1, -0.035); sh.lineTo(0.25, -0.1); sh.lineTo(1.15, -0.07); sh.lineTo(1.45, 0); sh.lineTo(1.15, 0.07); sh.lineTo(0.25, 0.1); sh.lineTo(0.1, 0.035); sh.closePath();
    const bg = new THREE.ExtrudeGeometry(sh, { depth: 0.02, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 1 }); bg.translate(0, 0, -0.01);
    const m = new THREE.Mesh(bg, ice); m.rotation.y = -Math.PI / 2; blade.add(m);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.22, 6), ice); grip.rotation.x = Math.PI / 2; grip.position.z = 0.02; blade.add(grip);
    for (const k of [-1, 1]) { const c = new THREE.Mesh(new THREE.OctahedronGeometry(0.05, 0), ice); c.position.set(0, k * 0.1, 0.14); c.scale.set(0.5, 1.6, 0.8); blade.add(c); }
  }
  const bladeBase = new THREE.Object3D(); bladeBase.position.set(0, 0, 0.3); wep.add(bladeBase);
  const bladeTip = new THREE.Object3D(); bladeTip.position.set(0, 0, 1.4); wep.add(bladeTip);
  trails.blade = [bladeBase, bladeTip];
  const bow = new THREE.Group(); bow.userData.keep = true; bow.visible = false; hands[1].add(bow);
  {
    const c = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0.1, 0.5), new THREE.Vector3(0, -0.3, 0), new THREE.Vector3(0, 0.1, -0.5));
    bow.add(new THREE.Mesh(new THREE.TubeGeometry(c, 16, 0.022, 6), ice));
    for (const k of [-1, 1]) { const t = new THREE.Mesh(new THREE.OctahedronGeometry(0.045, 0), ice); t.position.set(0, 0.1, k * 0.5); t.scale.set(0.6, 0.8, 1.6); bow.add(t); }
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 1.0, 4), basic(0xe8f8ff)); st.rotation.x = Math.PI / 2; st.position.y = 0.1; bow.add(st);
    bow.position.set(0, -0.03, 0);
  }

  mergeStatic(root);

  const baseEmissive = flashMats.map((m) => m.emissive.clone());
  const rig = { j, base, hipY: SNEGU_HIP, flare: 0 };
  const orbPoint = new THREE.Object3D(); orbPoint.position.set(0, 0.5, 0.8); body.add(orbPoint);
  const shadow = blobShadow(0x000000, null, 0.9);
  let t = 0;

  return {
    root, rig, trails, worldObjects: [], orbPoint, shadow, hands,
    height: 1.95, headY: 2.55,
    trailColor: variant ? 0xc0c8ff : 0x9fe8ff,
    update(dt, ctx) {
      t += dt;
      // 後ろ髪は動きに遅れてなびき、尾はゆっくり波打つ
      const yaw = root.rotation.y;
      const fwd = (ctx.vx || 0) * Math.sin(yaw);
      const want = Math.max(-0.15, Math.min(0.8, fwd * 3.5 + (ctx.vy < 0 ? -ctx.vy * 1.8 : 0))) + Math.sin(t * 1.8) * 0.03;
      if (ctx.snap) hairBack.rotation.x = want; else hairBack.rotation.x += (want - hairBack.rotation.x) * 0.1;
      for (let i = 0; i < tailW.length; i++) tailW[i].rotation.x = Math.sin(t * 2.4 - i * 0.9) * 0.09 + (i ? Math.max(-0.2, Math.min(0.5, fwd * 2)) : 0);
    },
    setWeapon(kind) { blade.visible = kind === 'blade'; bow.visible = kind === 'bow'; },
    setFlash(color, a) {
      flashMats.forEach((m, i) => { m.emissive.copy(baseEmissive[i]); if (a > 0) m.emissive.lerp(color, a * 0.8); });
    },
    dispose() { disposeTree(root); },
  };
}
