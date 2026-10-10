// ドロス: 灰緑の肌に逆立つ赤髪の魔王（参考画像15 準拠）。
// 黒鉄に金縁の甲冑、赤い宝玉、毛皮の縁取り、金の紋様が入った赤いマントと前垂れ。
// スマッシュ攻撃のときだけ右手に大剣が現れる（setSword）。
import * as THREE from 'three';
import { metal, gloss, basic, lathe, place, mesh, mergeStatic, joint, paramGeo, blobShadow, canvasTex } from './kit.js';
import { taperCapsule, disposeTree } from './common.js';

const VARIANTS = [
  { skin: 0x4a4c3e, hair: 0x9a2812, iron: 0x2c2c30, gold: 0x9a7420, red: 0x521012, redIn: 0x360a0c, gem: 0xd01828, fur: 0x7c7468, cloth: 0x2a2a2c, goldCss: '#a07c34', redCss: '#521012' },
  { skin: 0x565a66, hair: 0xd8d8e4, iron: 0x20283c, gold: 0xb4bcc8, red: 0x1c2c66, redIn: 0x0e1638, gem: 0x40d0ff, fur: 0x9aa0b0, cloth: 0x1c2030, goldCss: '#c0c8d8', redCss: '#1c2c66' },
];

export const DOROS_HIP = 1.48;

// 金の紋様（菱形と唐草）を布地に描く
function patternTex(P, tall) {
  return canvasTex(256, tall ? 512 : 256, (g, w, h) => {
    g.fillStyle = P.redCss; g.fillRect(0, 0, w, h);
    g.strokeStyle = P.goldCss; g.fillStyle = P.goldCss; g.lineWidth = w * 0.035; g.lineJoin = 'miter';
    const dia = (cx, cy, rx, ry, fill) => { g.beginPath(); g.moveTo(cx, cy - ry); g.lineTo(cx + rx, cy); g.lineTo(cx, cy + ry); g.lineTo(cx - rx, cy); g.closePath(); fill ? g.fill() : g.stroke(); };
    const cy = h * (tall ? 0.52 : 0.55);
    dia(w / 2, cy - h * 0.1, w * 0.11, h * 0.1, false);
    dia(w / 2, cy + h * 0.08, w * 0.07, h * 0.06, true);
    g.beginPath(); g.moveTo(w * 0.36, cy - h * 0.02); g.lineTo(w * 0.5, cy + h * 0.2); g.lineTo(w * 0.64, cy - h * 0.02); g.stroke();
    // 両脇の唐草
    for (const s of [-1, 1]) {
      const x = w / 2 + s * w * 0.33;
      g.beginPath(); g.moveTo(x, h * 0.3);
      g.bezierCurveTo(x - s * w * 0.14, h * 0.45, x + s * w * 0.12, h * 0.55, x - s * w * 0.04, h * 0.68);
      g.bezierCurveTo(x - s * w * 0.16, h * 0.76, x + s * w * 0.1, h * 0.8, x, h * 0.9); g.stroke();
      dia(x - s * w * 0.02, h * 0.5, w * 0.03, h * 0.025, true);
    }
  });
}
// うろこ状の鎧
function scaleTex() {
  return canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#9a9a9e'; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(20,20,24,0.75)'; g.lineWidth = 2.5;
    for (let r = 0; r < 9; r++) for (let c = -1; c < 9; c++) { const x = c * 16 + (r % 2 ? 8 : 0), y = r * 16; g.beginPath(); g.arc(x + 8, y, 9, 0.15, Math.PI - 0.15); g.stroke(); }
  }, { repeat: [3, 3] });
}

export function buildDoros(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  const skin = gloss(P.skin, { rough: 0.7, metal: 0.02, env: 0.35 });
  const hair = gloss(P.hair, { rough: 0.75, metal: 0.02, env: 0.25 }); hair.flatShading = true;
  const iron = metal(P.iron, { rough: 0.6, metal: 0.55, env: 0.6 });
  const scale = new THREE.MeshStandardMaterial({ color: P.iron, map: scaleTex(), roughness: 0.65, metalness: 0.5, envMapIntensity: 0.5 });
  const gold = metal(P.gold, { rough: 0.5, metal: 0.65, env: 0.7 });
  const cloth = gloss(P.cloth, { rough: 0.9, metal: 0.02, env: 0.2 });
  const fur = gloss(P.fur, { rough: 1, metal: 0, env: 0.15 }); fur.flatShading = true;
  const gemM = new THREE.MeshStandardMaterial({ color: P.gem, roughness: 0.2, metalness: 0.2, envMapIntensity: 1.2, emissive: new THREE.Color(P.gem).multiplyScalar(0.35) });
  const eyeM = basic(0xff5a30, 1.1);
  const redM = gloss(P.red, { rough: 0.9, metal: 0, env: 0.2, side: THREE.DoubleSide });
  const capeTex = patternTex(P, true); capeTex.flipY = false;
  const capeOut = new THREE.MeshStandardMaterial({ map: capeTex, roughness: 0.9, metalness: 0, envMapIntensity: 0.2, side: THREE.BackSide });
  const capeIn = new THREE.MeshStandardMaterial({ color: P.redIn, roughness: 0.95, metalness: 0, envMapIntensity: 0.1, side: THREE.FrontSide });
  const tabM = new THREE.MeshStandardMaterial({ map: patternTex(P, true), roughness: 0.9, metalness: 0, envMapIntensity: 0.2, side: THREE.DoubleSide });
  const bladeM = metal(0xb8bcc8, { rough: 0.2, metal: 1, env: 1.2 });
  const flashMats = [skin, iron, scale, cloth, capeOut, redM];
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

  const body = joint('body', root, 0, DOROS_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;
  torso.scale.setScalar(0.88); // 脚を長く、上半身を小さめにして頭身を上げる

  // ---------- 腰（帯・前垂れ・草摺り） ----------
  place(mesh(new THREE.SphereGeometry(0.3, 16, 12), cloth), hips, 0, 0.02, 0, 0, 0, 0, [1.05, 0.8, 0.9]);
  place(mesh(lathe([[0.31, 0.22], [0.325, 0.16], [0.325, 0.08], [0.31, 0.04]], 24), iron), hips, 0, 0, 0, 0, 0, 0, [1, 1, 0.88]);
  for (const y of [0.22, 0.04]) place(mesh(new THREE.TorusGeometry(0.32, 0.012, 5, 28), gold), hips, 0, y, 0, Math.PI / 2, 0, 0, [1, 0.88, 1]);
  for (let i = 0; i < 10; i++) { const a = (i + 0.5) / 10 * Math.PI * 2; if (Math.abs(Math.sin(a)) < 0.25 && Math.cos(a) > 0) continue; stud(hips, Math.sin(a) * 0.33, 0.13, Math.cos(a) * 0.29); }
  gem(hips, 0, 0.13, 0.295, 0.055);
  for (const s of [-1, 1]) place(mesh(new THREE.ConeGeometry(0.04, 0.12, 4), gold), hips, s * 0.11, 0.13, 0.29, 0, 0, s * 1.57, [1, 1, 0.4]);
  // 前垂れ（赤地に金の紋様、裾に房）と後ろの垂れ
  const tab = (z, ry, len, w) => {
    const geo = new THREE.PlaneGeometry(w, len, 1, 4);
    geo.translate(0, -len / 2, 0);
    const g = new THREE.Group(); place(g, hips, 0, 0.06, z, ry ? 0.08 : -0.08, ry, 0);
    g.add(new THREE.Mesh(geo, tabM));
    place(mesh(new THREE.BoxGeometry(w * 1.04, 0.05, 0.02), gold), g, 0, -len - 0.02, 0);
    for (const s of [-1, 1]) place(mesh(new THREE.BoxGeometry(0.018, len, 0.012), gold), g, s * w / 2, -len / 2, 0.002);
  };
  tab(0.3, 0, 0.72, 0.3);
  tab(-0.27, Math.PI, 0.5, 0.3);
  // 両脇の草摺り（黒鉄に金縁の五角板）
  for (const s of [-1, 1]) {
    const g = new THREE.Group();
    place(g, hips, s * 0.3, 0.06, 0.1, 0, s * 1.1, s * 0.12);
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
  place(mesh(lathe([[0.29, 0.0], [0.31, 0.14], [0.345, 0.32], [0.4, 0.5], [0.42, 0.62], [0.36, 0.73], [0.22, 0.8], [0.15, 0.82]], 24), scale), torso, 0, 0, 0, 0, 0, 0, [1, 1, 0.84]);
  place(mesh(new THREE.SphereGeometry(1, 16, 10), scale), torso, 0, 0.56, 0.2, -0.1, 0, 0, [0.34, 0.2, 0.14]);
  // 首飾り（金の鎖に赤い宝玉。中央が大きい）
  for (let i = -2; i <= 2; i++) {
    const a = i * 0.36;
    gem(torso, Math.sin(a) * 0.36, 0.71 - Math.cos(a) * 0.1 - (i === 0 ? 0.02 : 0), 0.14 + Math.cos(a) * 0.19, i === 0 ? 0.055 : Math.abs(i) === 2 ? 0.05 : 0.035, -0.25, a);
  }
  place(mesh(new THREE.TorusGeometry(0.34, 0.014, 5, 20, Math.PI * 0.6), gold), torso, 0, 0.66, 0.05, Math.PI / 2 + 0.28, 0, Math.PI * 0.2, [1, 0.95, 1]);
  // 太い首
  place(mesh(taperCapsule(0.1, 0.13, 0.135, 12), skin), torso, 0, 0.88, 0.0);

  // 肩当て（角ばった板を重ねた黒鉄。金縁と鋲）
  for (const s of [-1, 1]) {
    const pa = new THREE.Group();
    place(pa, torso, s * 0.5, 0.74, 0, 0, 0, s * -0.18, 0.95);
    const g1 = lathe([[0.02, 0.1], [0.2, 0.04], [0.3, -0.1]], 4); g1.rotateY(Math.PI / 4);
    place(mesh(g1, iron), pa, 0, 0, 0, 0, 0, 0, [1.05, 1, 1.15]);
    const g2 = lathe([[0.3, -0.1], [0.32, -0.14]], 4); g2.rotateY(Math.PI / 4);
    place(mesh(g2, gold), pa, 0, 0, 0, 0, 0, 0, [1.05, 1, 1.15]);
    const g3 = lathe([[0.18, -0.1], [0.27, -0.22], [0.28, -0.26]], 4); g3.rotateY(Math.PI / 4);
    place(mesh(g3, iron), pa, s * 0.04, 0, 0, 0, 0, 0, [1.0, 1, 1.1]);
    for (const [x, z] of [[0.1, 0.12], [-0.1, 0.12], [0.1, -0.12], [-0.1, -0.12], [0.17, 0]]) stud(pa, s * x, 0.045 - Math.abs(x) * 0.15, z, 0.026);
  }

  // ---------- マント（高い襟、金の紋様、裂けた裾） ----------
  const capeG = new THREE.Group(); capeG.userData.keep = true;
  place(capeG, torso, 0, 0.78, -0.2);
  const capeGeo = paramGeo(24, 14, (u, v, p) => {
    const a = (u - 0.5) * 2.2;
    const w = 0.46 + 0.62 * v;
    const tear = v > 0.85 ? 0.16 * Math.abs(Math.sin(u * Math.PI * 12.5)) * (v - 0.85) / 0.15 : 0;
    p.set(Math.sin(a) * w, -2.1 * v + tear + 0.04 * Math.cos(a) * (1 - v), -Math.cos(a) * 0.1 - 0.26 * Math.min(1, v * 3) - 0.08 * v + 0.05 * Math.sin(u * Math.PI * 5) * v);
  });
  capeG.add(new THREE.Mesh(capeGeo, capeOut));
  const capeInner = new THREE.Mesh(capeGeo, capeIn); capeInner.userData.inner = true; capeG.add(capeInner);
  // 襟（首の後ろから両肩へ立ち上がる）と肩に掛かる布
  place(mesh(lathe([[0.2, 0.76], [0.27, 0.9], [0.33, 1.06]], 20, Math.PI * 0.45, Math.PI * 1.1), redM), torso, 0, 0, -0.03, 0, 0, 0, [1.1, 1, 0.85]);
  place(mesh(lathe([[0.33, 1.05], [0.345, 1.075]], 20, Math.PI * 0.45, Math.PI * 1.1), gold), torso, 0, 0, -0.03, 0, 0, 0, [1.1, 1, 0.85]);
  place(mesh(new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), redM), torso, 0, 0.76, -0.2, 0, 0, 0, [0.44, 0.1, 0.2]);
  place(mesh(new THREE.SphereGeometry(1, 12, 8), redM), torso, 0, 0.6, -0.27, 0, 0, 0, [0.36, 0.2, 0.08]);
  // 背中の留め具（金の鎖と宝玉）
  for (const [x, r] of [[-0.3, 0.05], [0, 0.06], [0.3, 0.05]]) gem(torso, x, 0.66 - (x === 0 ? 0.06 : 0), -0.36, r, 0, Math.PI);

  // ---------- 頭 ----------
  const head = joint('head', torso, 0, 0.86, 0.03); j.head = head;
  const hs = new THREE.Group();
  place(hs, head, 0, 0, 0, 0, 0, 0, 1.12);
  place(mesh(new THREE.SphereGeometry(0.15, 18, 14), skin), hs, 0, 0.17, 0.0, 0, 0, 0, [1.1, 1.0, 1.02]);
  place(mesh(lathe([[0.09, 0.0], [0.125, 0.04], [0.135, 0.12], [0.13, 0.2]], 12), skin), hs, 0, 0, 0.015, 0, 0, 0, [1.15, 1, 1]);
  // 太い眉の庇、赤く光る目
  place(mesh(new THREE.BoxGeometry(0.25, 0.045, 0.07), skin), hs, 0, 0.215, 0.12, 0.4, 0, 0);
  for (const s of [-1, 1]) {
    place(mesh(new THREE.BoxGeometry(0.085, 0.022, 0.03), hair), hs, s * 0.06, 0.222, 0.152, 0.3, 0, s * 0.36);
    place(mesh(new THREE.SphereGeometry(0.024, 8, 6), basic(0x140c0a)), hs, s * 0.057, 0.183, 0.125, 0, 0, 0, [1.4, 0.9, 0.6]);
    place(mesh(new THREE.SphereGeometry(0.013, 8, 6), basic(0xe8e0d0)), hs, s * 0.057, 0.181, 0.138, 0, 0, s * 0.3, [1.5, 0.7, 0.6]);
    place(mesh(new THREE.SphereGeometry(0.006, 6, 5), basic(0x200808)), hs, s * 0.055, 0.181, 0.146);
    // 尖った耳
    place(mesh(new THREE.ConeGeometry(0.038, 0.1, 5), skin), hs, s * 0.175, 0.2, -0.01, -0.4, 0, s * -0.6, [1, 1, 0.45]);
    // 長いもみあげ
    place(mesh(new THREE.ConeGeometry(0.055, 0.24, 5), hair), hs, s * 0.155, 0.11, 0.03, Math.PI, 0, s * 0.1, [0.7, 1, 1.3]);
  }
  // 大きな鼻、への字の口
  place(mesh(new THREE.ConeGeometry(0.05, 0.15, 4), skin), hs, 0, 0.16, 0.15, 0.6, Math.PI / 4, 0, [1.15, 1, 1.4]);
  for (const s of [-1, 1]) place(mesh(new THREE.BoxGeometry(0.05, 0.006, 0.01), basic(0x2c2e24)), hs, s * 0.022, 0.07, 0.135, 0, 0, s * -0.2);
  // 金の額飾り（中央に赤い宝玉、左右へ伸びる）
  gem(hs, 0, 0.262, 0.148, 0.026, -0.25);
  place(mesh(new THREE.ConeGeometry(0.022, 0.05, 4), gold), hs, 0, 0.305, 0.14, -0.3, 0, 0, [1, 1, 0.4]);
  for (const s of [-1, 1]) {
    place(mesh(new THREE.BoxGeometry(0.1, 0.022, 0.014), gold), hs, s * 0.085, 0.262, 0.118, -0.2, s * 0.6, s * -0.12);
    stud(hs, s * 0.085, 0.262, 0.128, 0.016);
  }
  // 逆立つ赤髪（上と後ろへ炎のように立つ）
  place(mesh(new THREE.SphereGeometry(0.165, 10, 8), hair), hs, 0, 0.245, -0.075, 0, 0, 0, [1.04, 0.95, 1.0]);
  let seed = 3; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let r = 0; r < 4; r++) for (let i = 0; i < 6; i++) {
    const a = (i - 2.5) / 2.5;
    const len = 0.2 + rnd() * 0.08 + (r >= 2 ? 0.08 : 0);
    place(mesh(new THREE.ConeGeometry(0.085, len, 5), hair), hs, a * (0.115 - r * 0.005), 0.31 + 0.05 * (1 - Math.abs(a)) - r * 0.04, 0.02 - r * 0.07, -0.3 - r * 0.45, 0, a * -0.45);
  }

  // ---------- 腕（むき出しの太い上腕、毛皮の縁の籠手、大きな拳） ----------
  const trails = {};
  const hands = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.47, 0.62, 0);
    j[R ? 'armR' : 'armL'] = arm;
    place(mesh(new THREE.SphereGeometry(0.16, 12, 10), skin), arm, 0, 0, 0);
    place(mesh(taperCapsule(0.34, 0.165, 0.13, 12), skin), arm, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(1, 10, 8), skin), arm, 0, -0.15, 0.05, 0, 0, 0, [0.15, 0.17, 0.14]); // 力こぶ
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.36, 0);
    j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(lathe([[0.14, 0.0], [0.15, -0.08], [0.135, -0.22], [0.11, -0.32]], 14), iron), fore, 0, 0, 0);
    furRing(fore, 0.02, 0.135, 0.05);
    place(mesh(new THREE.TorusGeometry(0.148, 0.012, 5, 18), gold), fore, 0, -0.07, 0, Math.PI / 2, 0, 0);
    place(mesh(new THREE.TorusGeometry(0.114, 0.014, 5, 18), gold), fore, 0, -0.31, 0, Math.PI / 2, 0, 0);
    gem(fore, s * 0.142, -0.17, 0, 0.04, 0, s * Math.PI / 2);
    gem(fore, 0, -0.17, 0.142, 0.032);
    const hand = new THREE.Group(); hand.userData.joint = true;
    place(hand, fore, 0, -0.41, 0);
    hands[s] = hand;
    place(mesh(new THREE.SphereGeometry(0.125, 12, 10), skin), hand, 0, 0, 0.01, 0, 0, 0, [1, 1.0, 0.9]);
    for (let k = 0; k < 4; k++) place(mesh(new THREE.SphereGeometry(0.038, 6, 5), skin), hand, (k - 1.5) * 0.056, -0.09, 0.05);
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
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.19, -0.02, 0);
    j[R ? 'legR' : 'legL'] = leg;
    place(mesh(taperCapsule(0.58, 0.21, 0.16, 12), cloth), leg, 0, 0, 0);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.62, 0);
    j[R ? 'shinR' : 'shinL'] = shin;
    // 膝当て（金縁の菱形板に赤い宝玉）
    const kg = lathe([[0.02, 0.2], [0.17, 0.02], [0.02, -0.16]], 4); kg.rotateY(Math.PI / 4);
    place(mesh(kg, iron), shin, 0, 0.02, 0.12, 0, 0, 0, [1, 1, 0.45]);
    const kr = lathe([[0.17, 0.02], [0.19, 0.02]], 4); kr.rotateY(Math.PI / 4);
    place(mesh(kr, gold), shin, 0, 0.02, 0.12, 0, 0, 0, [1, 6, 0.45]);
    gem(shin, 0, 0.03, 0.2, 0.042);
    furRing(shin, -0.02, 0.17, 0.06);
    place(mesh(lathe([[0.17, -0.02], [0.18, -0.16], [0.155, -0.44], [0.15, -0.6]], 14), iron), shin, 0, 0, 0);
    for (const y of [-0.2, -0.42]) place(mesh(new THREE.TorusGeometry(0.172 - (y < -0.3 ? 0.014 : 0), 0.016, 5, 18), gold), shin, 0, y, 0, Math.PI / 2, 0, 0);
    furRing(shin, -0.58, 0.15, 0.045);
    const foot = new THREE.Group();
    place(foot, shin, 0, -0.67, 0.03);
    place(mesh(new THREE.SphereGeometry(1, 12, 8), iron), foot, 0, 0.01, 0.08, 0, 0, 0, [0.165, 0.1, 0.27]);
    place(mesh(new THREE.SphereGeometry(1, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), gold), foot, 0, -0.03, 0.3, Math.PI / 2 - 0.5, 0, 0, [0.12, 0.07, 0.07]);
    place(mesh(new THREE.TorusGeometry(0.15, 0.018, 5, 16, Math.PI), gold), foot, 0, -0.01, 0.1, 0, 0, 0, [1.1, 0.75, 1]);
    place(mesh(new THREE.BoxGeometry(0.3, 0.035, 0.5), iron), foot, 0, -0.085, 0.1);
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.75, 0.25); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
  }

  mergeStatic(root);

  const rig = { j, base, hipY: DOROS_HIP, flare: 0 };
  const orbPoint = new THREE.Object3D(); orbPoint.position.set(0, 0.5, 0.9); body.add(orbPoint);
  const shadow = blobShadow(0x000000, null, 1.4);
  let t = 0;

  return {
    root, rig, trails, worldObjects: [], orbPoint, shadow, hands,
    height: 2.4, headY: 2.85,
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
