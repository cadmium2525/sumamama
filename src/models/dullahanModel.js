// デュラハン: 中身のない黄金の甲冑騎士（参考画像 01〜04 準拠）
// 兜の奥に橙の炎が灯り、各パーツは宙に浮いて分離している。大剣を肩に担ぎ、背中に円盾。
import * as THREE from 'three';
import { metal, gloss, basic, lathe, shell, place, mesh, mergeStatic, joint, filigreeTex, runeShieldTex, plumeTex, blobShadow } from './kit.js';
import { disposeTree } from './common.js';

const VARIANTS = [
  { silver: 0xe9ebef, gold: 0xf0c04a, navy: 0x161b2b, plume: ['#d2330c', '#8a1604', '#ff6a24'], eye: 0xff8a1e, blade: 0xf5f7fa, gem: 0x9fd0ff, goldHex: '#f0c04a', ink: '#a8741c' },
  { silver: 0x4a5064, gold: 0xc8d2e4, navy: 0x0b0e18, plume: ['#2d7bff', '#0c3aa0', '#7ac4ff'], eye: 0x4fe6ff, blade: 0xe8eef8, gem: 0xff6a8a, goldHex: '#c8d2e4', ink: '#6a7890' },
];

export const DULLAHAN_HIP = 1.05;

export function buildDullahan(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  const silver = metal(P.silver, { rough: 0.2, metal: 0.85, env: 1.15 });
  const gold = metal(P.gold, { rough: 0.26, metal: 0.95, env: 1.2 });
  const navy = gloss(P.navy, { rough: 0.7, metal: 0.2, env: 0.4, side: THREE.BackSide });
  const navyF = gloss(P.navy, { rough: 0.7, metal: 0.2, env: 0.4 });
  const bladeM = metal(P.blade, { rough: 0.12, metal: 1, env: 1.3 });
  const fuller = new THREE.MeshStandardMaterial({ color: 0x14171e, roughness: 0.3, metalness: 0.6, envMapIntensity: 0.6, side: THREE.DoubleSide });
  const plume = new THREE.MeshStandardMaterial({ map: plumeTex(...P.plume), roughness: 0.8, metalness: 0, envMapIntensity: 0.25, side: THREE.DoubleSide, color: 0x9a9a9a });
  const filigree = filigreeTex(P.goldHex, P.ink);
  const goldEngr = new THREE.MeshStandardMaterial({ map: filigree, metalness: 0.85, roughness: 0.3, envMapIntensity: 1.1 });
  const shieldFace = new THREE.MeshStandardMaterial({ map: runeShieldTex(P.goldHex, P.ink), metalness: 0.85, roughness: 0.3, envMapIntensity: 1.1 });
  const eyeM = basic(P.eye, 2.2);
  const gemM = metal(P.gem, { rough: 0.1, metal: 0.3, env: 1.4, emissive: new THREE.Color(P.gem).multiplyScalar(0.25) });
  const flashMats = [silver, gold, goldEngr, shieldFace, bladeM];
  const baseEmissive = flashMats.map((m) => m.emissive.clone());

  const body = joint('body', root, 0, DULLAHAN_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 腰まわり ----------
  place(mesh(new THREE.SphereGeometry(0.17, 20, 14), navyF), hips, 0, 0.05, 0, 0, 0, 0, [1.05, 0.75, 0.85]);
  // ベルト（銀帯＋金の上縁）
  place(shell(lathe([[0.215, 0.18], [0.225, 0.2], [0.225, 0.27], [0.215, 0.29]], 28), silver, navy), hips, 0, 0, 0, 0, 0, 0, [1, 1, 0.82]);
  place(mesh(new THREE.TorusGeometry(0.222, 0.016, 8, 32), gold), hips, 0, 0.29, 0, Math.PI / 2, 0, 0, [1, 0.82, 1]);
  place(mesh(new THREE.TorusGeometry(0.222, 0.012, 8, 32), gold), hips, 0, 0.18, 0, Math.PI / 2, 0, 0, [1, 0.82, 1]);
  // 草摺り（左側の大きな曲面板・背面）
  const tasset = (phi0, len, drop, parent) => {
    const g = shell(lathe([[0.22, 0.18], [0.25, 0.1], [0.3, -0.02], [0.335, -drop]], 20, phi0, len), silver, navy);
    g.scale.set(1, 1, 0.84);
    parent.add(g);
    const rim = mesh(new THREE.TorusGeometry(0.335, 0.012, 6, 20, len), gold);
    rim.rotation.set(Math.PI / 2, 0, -phi0 + Math.PI / 2 - len);
    rim.position.y = -drop;
    rim.scale.set(1, 0.84, 1);
    parent.add(rim);
  };
  tasset(Math.PI * 0.2, Math.PI * 0.55, 0.12, hips); // 左（+X）
  tasset(Math.PI * 0.8, Math.PI * 0.4, 0.06, hips); // 背面
  // 前右（-X）の垂れ板と金の紋章＋青い宝石
  const front = new THREE.Group();
  place(front, hips, -0.09, 0.14, 0.2, 0.12, -0.3, 0);
  place(mesh(new THREE.BoxGeometry(0.14, 0.22, 0.018), silver), front, 0, -0.05, 0);
  const em = new THREE.Shape();
  em.moveTo(0, 0.1); em.lineTo(0.065, 0.06); em.lineTo(0.06, -0.05); em.lineTo(0, -0.13); em.lineTo(-0.06, -0.05); em.lineTo(-0.065, 0.06); em.lineTo(0, 0.1);
  place(mesh(new THREE.ExtrudeGeometry(em, { depth: 0.02, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2 }), gold), front, 0, -0.02, 0.012);
  place(mesh(new THREE.SphereGeometry(0.03, 14, 10), gemM), front, 0, 0.0, 0.045, 0, 0, 0, [1, 0.8, 0.6]);

  // ---------- 胴 ----------
  place(mesh(new THREE.CylinderGeometry(0.16, 0.17, 0.14, 20, 1, true), navyF), torso, 0, 0.3, 0);
  const chestPts = [[0.235, 0.33], [0.285, 0.38], [0.305, 0.46], [0.3, 0.55], [0.265, 0.63], [0.19, 0.685], [0.14, 0.7]];
  place(shell(lathe(chestPts, 32), silver, navy), torso, 0, 0, 0.02, 0, 0, 0, [1, 1, 0.78]);
  // 首まわりの金縁と胸の中央の金の稜線
  place(mesh(new THREE.TorusGeometry(0.145, 0.022, 8, 28), gold), torso, 0, 0.7, 0.02, Math.PI / 2, 0, 0, [1, 0.78, 1]);
  place(mesh(new THREE.TorusGeometry(0.24, 0.014, 6, 32), gold), torso, 0, 0.335, 0.02, Math.PI / 2, 0, 0, [1, 0.78, 1]);
  for (let i = 0; i < 4; i++) {
    const y = 0.64 - i * 0.075;
    const r = [0.215, 0.27, 0.3, 0.3][i];
    const fin = mesh(new THREE.ConeGeometry(0.02, 0.09, 4), gold);
    place(fin, torso, 0, y, 0.02 + r * 0.78 + 0.01, 0.35, 0, 0, [1, 1, 0.6]);
  }
  place(mesh(new THREE.BoxGeometry(0.025, 0.3, 0.02), gold), torso, 0, 0.5, 0.02 + 0.3 * 0.78 - 0.005, -0.05);
  place(mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.1, 12), navyF), torso, 0, 0.72, 0);

  // 肩当て（胴に固定・金縁・金のトゲ）
  for (const s of [-1, 1]) {
    const pa = new THREE.Group();
    place(pa, torso, s * 0.315, 0.6, 0, 0, 0, s * -0.32, 0.9);
    place(shell(new THREE.SphereGeometry(0.2, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.6), silver, navy), pa, 0, 0, 0, 0, 0, 0, [1.12, 1.0, 1.08]);
    place(mesh(new THREE.TorusGeometry(0.2 * Math.sin(Math.PI * 0.6) * 1.1, 0.02, 8, 28), gold), pa, 0, 0.2 * Math.cos(Math.PI * 0.6), 0, Math.PI / 2, 0, 0, [1, 0.98, 1]);
    const sp1 = mesh(new THREE.ConeGeometry(0.035, 0.2, 8), gold);
    place(sp1, pa, s * 0.14, 0.12, 0.02, 0, 0, s * -0.9);
    const sp2 = mesh(new THREE.ConeGeometry(0.032, 0.17, 8), gold);
    place(sp2, pa, s * 0.19, 0.0, -0.03, 0, 0, s * -1.55);
  }

  // 背中の円盾（金の盾面にルーン文字、厚い銀の縁）
  const sh = new THREE.Group();
  place(sh, torso, 0, 0.44, -0.31, -0.08, Math.PI, 0);
  const faceGeo = new THREE.CircleGeometry(0.36, 48);
  const pa = faceGeo.attributes.position;
  for (let i = 0; i < pa.count; i++) { const r = Math.hypot(pa.getX(i), pa.getY(i)) / 0.36; pa.setZ(i, 0.07 * (1 - r * r)); }
  faceGeo.computeVertexNormals();
  place(mesh(faceGeo, shieldFace), sh, 0, 0, 0.0);
  place(mesh(new THREE.SphereGeometry(0.26, 28, 12, 0, Math.PI * 2, 0, 0.42), gold), sh, 0, 0, -0.17, Math.PI / 2, 0, 0);
  place(mesh(new THREE.TorusGeometry(0.375, 0.05, 12, 48), silver), sh, 0, 0, 0);
  place(mesh(new THREE.CircleGeometry(0.39, 32), navyF), sh, 0, 0, -0.03, 0, Math.PI, 0);

  // ---------- 兜 ----------
  const head = joint('head', torso, 0, 0.7, 0); j.head = head;
  const hs = new THREE.Group();
  place(hs, head, 0, 0.02, 0.01);
  // 上部ドーム
  place(shell(lathe([[0.155, 0.18], [0.15, 0.24], [0.125, 0.3], [0.07, 0.34], [0.0, 0.355]], 28), silver, navy), hs, 0, 0, 0, 0, 0, 0, [0.96, 1, 1.05]);
  // 下部（前面が開いた顔の部分）
  place(shell(lathe([[0.125, 0.0], [0.15, 0.06], [0.16, 0.13], [0.155, 0.185]], 28, Math.PI * 0.2, Math.PI * 1.6), silver, navy), hs, 0, 0, 0, 0, 0, 0, [0.96, 1, 1.05]);
  place(mesh(new THREE.SphereGeometry(0.125, 18, 14), navyF), hs, 0, 0.12, 0.0);
  // 炎の瞳
  place(mesh(new THREE.SphereGeometry(0.03, 12, 10), eyeM), hs, 0, 0.14, 0.11, 0, 0, 0, [1.3, 0.8, 0.5]);
  const eyeGlow = new THREE.Sprite(new THREE.SpriteMaterial({ color: P.eye, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
  eyeGlow.scale.setScalar(0.09);
  eyeGlow.position.set(0, 0.14, 0.13);
  eyeGlow.userData.keep = true;
  hs.add(eyeGlow);
  // 金の額飾り（貝殻状の扇）
  for (let i = 0; i < 7; i++) {
    const a = (i - 3) / 3;
    const rib = mesh(new THREE.CapsuleGeometry(0.014, 0.07, 3, 6), gold);
    place(rib, hs, a * 0.075, 0.235 - Math.abs(a) * 0.02, 0.148 - Math.abs(a) * 0.03, -0.35, 0, -a * 0.55);
  }
  place(mesh(new THREE.TorusGeometry(0.155, 0.017, 6, 24, Math.PI * 0.55), gold), hs, 0, 0.19, 0.0, Math.PI / 2, 0, Math.PI * 0.225, [0.96, 1.05, 1]);
  // 顔の縁（左右）
  for (const s of [-1, 1]) {
    place(mesh(new THREE.CapsuleGeometry(0.016, 0.16, 3, 6), gold), hs, s * 0.092, 0.1, 0.125, 0.1, s * 0.5, s * 0.12);
  }
  // 金の牙（あごのガード）
  const fangs = [[-0.055, 0.1, 0.13], [-0.02, 0.15, 0.14], [0.02, 0.15, 0.14], [0.055, 0.1, 0.13]];
  for (const [x, len, z] of fangs) {
    const f = mesh(new THREE.ConeGeometry(0.018, len, 5), gold);
    place(f, hs, x, 0.1 - len / 2, z, Math.PI + 0.12, 0, x * 1.5, [1, 1, 0.6]);
  }
  // 耳の円盤
  for (const s of [-1, 1]) {
    place(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 20), gold), hs, s * 0.152, 0.17, -0.01, 0, 0, Math.PI / 2);
    place(mesh(new THREE.SphereGeometry(0.022, 10, 8), gold), hs, s * 0.165, 0.17, -0.01);
  }
  // 首の金縁
  place(mesh(new THREE.TorusGeometry(0.128, 0.014, 6, 28), gold), hs, 0, 0.005, 0, Math.PI / 2, 0, 0, [0.96, 1.05, 1]);
  // 赤い羽根飾り（前から後ろへの半円の扇）
  const fan = new THREE.Shape();
  const R0 = 0.13, R1 = 0.33, N = 26;
  fan.moveTo(R0 * Math.cos(0.15), R0 * Math.sin(0.15));
  for (let i = 0; i <= N; i++) {
    const a = 0.15 + (i / N) * (Math.PI - 0.35);
    const r = R1 * (i % 2 ? 0.93 : 1) * (0.9 + 0.1 * Math.sin((i / N) * Math.PI));
    fan.lineTo(r * Math.cos(a), r * Math.sin(a));
  }
  for (let i = N; i >= 0; i--) {
    const a = 0.15 + (i / N) * (Math.PI - 0.35);
    fan.lineTo(R0 * Math.cos(a), R0 * Math.sin(a));
  }
  const fg = new THREE.ExtrudeGeometry(fan, { depth: 0.036, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2, curveSegments: 4 });
  fg.translate(0, 0, -0.018);
  // UV（シェイプ座標）→ 中心から放射状のすじ
  const uvA = fg.attributes.uv;
  for (let i = 0; i < uvA.count; i++) uvA.setXY(i, uvA.getX(i) / 0.7 + 0.5, uvA.getY(i) / 0.7 + 0.5);
  const plumeMesh = mesh(fg, plume);
  place(plumeMesh, hs, 0, 0.17, -0.01, 0, -Math.PI / 2, 0);
  place(mesh(new THREE.BoxGeometry(0.05, 0.03, 0.26), gold), hs, 0, 0.33, -0.02, 0.35, 0, 0);

  // ---------- 腕 ----------
  const trails = {};
  const hands = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.33, 0.55, 0);
    j[R ? 'armR' : 'armL'] = arm;
    place(mesh(new THREE.SphereGeometry(0.075, 14, 10), navyF), arm, 0, -0.02, 0);
    place(shell(lathe([[0.1, -0.05], [0.122, -0.1], [0.125, -0.17], [0.112, -0.24], [0.092, -0.285]], 20), silver, navy), arm, 0, 0, 0);
    place(mesh(new THREE.TorusGeometry(0.092, 0.02, 8, 22), gold), arm, 0, -0.29, 0, Math.PI / 2, 0, 0);
    place(mesh(new THREE.SphereGeometry(0.065, 12, 10), navyF), arm, 0, -0.33, 0);
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.33, 0);
    j[R ? 'foreR' : 'foreL'] = fore;
    place(shell(lathe([[0.085, -0.03], [0.088, -0.1], [0.098, -0.22], [0.108, -0.28]], 20), silver, navy), fore, 0, 0, 0);
    place(mesh(new THREE.TorusGeometry(0.09, 0.016, 8, 22), gold), fore, 0, -0.06, 0, Math.PI / 2, 0, 0);
    place(mesh(new THREE.TorusGeometry(0.108, 0.02, 8, 22), gold), fore, 0, -0.28, 0, Math.PI / 2, 0, 0);
    // 浮いた籠手（指付き）
    const hand = new THREE.Group();
    hand.userData.joint = true;
    place(hand, fore, 0, -0.4, 0.0, 0, 0, 0, 1.35);
    hands[s] = hand;
    const grip = R;
    place(mesh(new THREE.SphereGeometry(0.06, 14, 10), silver), hand, 0, 0, 0, 0, 0, 0, [1.0, 1.15, 0.7]);
    place(mesh(new THREE.CylinderGeometry(0.058, 0.062, 0.05, 12), silver), hand, 0, 0.055, 0);
    place(mesh(new THREE.TorusGeometry(0.058, 0.01, 6, 16), gold), hand, 0, 0.08, 0, Math.PI / 2, 0, 0);
    for (let k = 0; k < 4; k++) {
      const x = (k - 1.5) * 0.028;
      const f1 = new THREE.Group();
      place(f1, hand, x * s, -0.07, 0.01, grip ? -1.2 : -0.35, 0, 0);
      place(mesh(new THREE.CapsuleGeometry(0.014, 0.035, 3, 6), silver), f1, 0, -0.025, 0);
      const f2 = new THREE.Group();
      place(f2, f1, 0, -0.055, 0, grip ? -1.3 : -0.5, 0, 0);
      place(mesh(new THREE.CapsuleGeometry(0.013, 0.03, 3, 6), silver), f2, 0, -0.02, 0);
    }
    const th = new THREE.Group();
    place(th, hand, s * -0.055, -0.02, 0.03, -0.6, 0, s * 0.7);
    place(mesh(new THREE.CapsuleGeometry(0.015, 0.05, 3, 6), silver), th, 0, -0.03, 0);
    trails[R ? 'handR' : 'handL'] = null;
  }

  // ---------- 大剣（右手・刀身は手のローカル +Z） ----------
  const sword = joint('wep', hands[-1], 0, -0.02, 0.0);
  sword.scale.setScalar(0.68);
  j.wep = sword;
  // 柄・柄頭
  place(mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.26, 12), gold), sword, 0, 0, -0.01, Math.PI / 2, 0, 0);
  for (const z of [-0.09, 0.0, 0.08]) place(mesh(new THREE.TorusGeometry(0.027, 0.007, 6, 14), gold), sword, 0, 0, z);
  place(mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.05, 8), gold), sword, 0, 0, -0.16, Math.PI / 2, 0, 0);
  place(mesh(new THREE.SphereGeometry(0.03, 10, 8), gold), sword, 0, 0, -0.195);
  // 鍔（三日月形の角）
  const horn = new THREE.Shape();
  horn.moveTo(0, 0.05);
  horn.quadraticCurveTo(0.03, 0.2, -0.16, 0.26);
  horn.quadraticCurveTo(-0.02, 0.18, -0.04, 0.05);
  horn.lineTo(0, 0.05);
  const hornGeo = new THREE.ExtrudeGeometry(horn, { depth: 0.04, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.01, bevelSegments: 2, curveSegments: 10 });
  hornGeo.translate(0, 0, -0.02);
  place(mesh(hornGeo, gold), sword, 0, 0, 0.15, 0, -Math.PI / 2, 0);
  place(mesh(new THREE.BoxGeometry(0.06, 0.2, 0.05), gold), sword, 0, -0.01, 0.15);
  // 刀身（先細りの両刃・中央に黒い樋）
  const bs = new THREE.Shape();
  bs.moveTo(0.14, -0.075); bs.lineTo(1.22, -0.068); bs.lineTo(1.46, 0); bs.lineTo(1.22, 0.068); bs.lineTo(0.14, 0.075); bs.lineTo(0.14, -0.075);
  const bg = new THREE.ExtrudeGeometry(bs, { depth: 0.012, bevelEnabled: true, bevelSize: 0.014, bevelThickness: 0.012, bevelSegments: 2 });
  bg.translate(0, 0, -0.006);
  place(mesh(bg, bladeM), sword, 0, 0, 0, 0, -Math.PI / 2, 0);
  const fl = new THREE.Shape();
  fl.moveTo(0.5, -0.03); fl.lineTo(1.24, -0.02); fl.lineTo(1.37, 0); fl.lineTo(1.24, 0.02); fl.lineTo(0.5, 0.03); fl.lineTo(0.5, -0.03);
  const flGeo = new THREE.ShapeGeometry(fl);
  for (const sx of [-1, 1]) place(mesh(flGeo, fuller), sword, sx * 0.0195, 0, 0, 0, -Math.PI / 2, 0);
  // 刀身の根元を覆う唐草模様の金具
  const lg = new THREE.Shape();
  lg.moveTo(0.13, -0.1); lg.lineTo(0.46, -0.085); lg.lineTo(0.56, 0); lg.lineTo(0.46, 0.085); lg.lineTo(0.13, 0.1); lg.lineTo(0.13, -0.1);
  const lgeo = new THREE.ExtrudeGeometry(lg, { depth: 0.03, bevelEnabled: true, bevelSize: 0.01, bevelThickness: 0.008, bevelSegments: 2 });
  lgeo.translate(0, 0, -0.015);
  const luv = lgeo.attributes.uv;
  for (let i = 0; i < luv.count; i++) luv.setXY(i, (luv.getX(i) - 0.13) / 0.43, (luv.getY(i) + 0.1) / 0.2);
  place(mesh(lgeo, goldEngr), sword, 0, 0, 0, 0, -Math.PI / 2, 0);
  const swordBase = new THREE.Object3D(); swordBase.position.set(0, 0, 0.45); sword.add(swordBase);
  const swordTip = new THREE.Object3D(); swordTip.position.set(0, 0, 1.45); sword.add(swordTip);
  trails.sword = [swordBase, swordTip];
  trails.handR = trails.sword;
  const lf = new THREE.Object3D(); lf.position.set(0, -0.05, 0); hands[1].add(lf);
  const lf2 = new THREE.Object3D(); lf2.position.set(0.1, -0.35, 0.2); hands[1].add(lf2);
  trails.handL = [lf, lf2];

  // ---------- 脚 ----------
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.13, -0.02, 0);
    j[R ? 'legR' : 'legL'] = leg;
    place(mesh(new THREE.SphereGeometry(0.075, 12, 10), navyF), leg, 0, -0.01, 0);
    // 腿当て（浮いた筒）
    place(shell(lathe([[0.118, -0.05], [0.122, -0.12], [0.112, -0.26], [0.1, -0.35]], 20), silver, navy), leg, 0, 0, 0, 0, 0, 0, [1, 1, 1.1]);
    place(mesh(new THREE.SphereGeometry(0.065, 12, 10), navyF), leg, 0, -0.42, 0);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.43, 0);
    j[R ? 'shinR' : 'shinL'] = shin;
    // 膝の金の炎飾り
    place(mesh(new THREE.SphereGeometry(0.06, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), gold), shin, 0, 0.0, 0.07, Math.PI / 2, 0, 0, [1, 1, 0.6]);
    place(mesh(new THREE.ConeGeometry(0.032, 0.19, 6), gold), shin, 0, 0.1, 0.1, -0.2, 0, 0);
    for (const k of [-1, 1]) place(mesh(new THREE.ConeGeometry(0.02, 0.09, 5), gold), shin, k * 0.045, 0.04, 0.095, -0.3, 0, k * -0.7);
    // すね当て（裾が広がる）
    place(shell(lathe([[0.1, -0.04], [0.105, -0.12], [0.092, -0.32], [0.1, -0.42], [0.115, -0.47]], 20), silver, navy), shin, 0, 0, 0, 0, 0, 0, [1, 1, 1.12]);
    place(mesh(new THREE.ConeGeometry(0.04, 0.12, 4), silver), shin, 0, -0.02, 0.095, Math.PI, 0, 0, [1, 1, 0.4]);
    // 浮いた鉄靴（重ね板と金の底）
    const foot = new THREE.Group();
    place(foot, shin, 0, -0.56, 0.03, 0, 0, 0, 1.2);
    place(mesh(new THREE.BoxGeometry(0.13, 0.02, 0.28), gold), foot, 0, -0.035, 0.03);
    for (let k = 0; k < 3; k++) {
      const plate = mesh(new THREE.CylinderGeometry(0.06, 0.065, 0.13, 14, 1, false, -Math.PI / 2, Math.PI), silver);
      place(plate, foot, 0, 0.0, -0.03 + k * 0.065, Math.PI / 2, 0, Math.PI / 2, [1, 1, 0.75 - k * 0.12]);
    }
    place(mesh(new THREE.SphereGeometry(0.06, 12, 8), silver), foot, 0, -0.005, 0.14, 0, 0, 0, [1, 0.55, 1.1]);
    place(mesh(new THREE.TorusGeometry(0.063, 0.01, 6, 16, Math.PI), gold), foot, 0, 0, 0.06, 0, Math.PI / 2, 0, [1, 1, 1]);
    const fa = new THREE.Object3D(); fa.position.set(0, -0.3, 0.05); shin.add(fa);
    const fb = new THREE.Object3D(); fb.position.set(0, -0.62, 0.18); shin.add(fb);
    trails[R ? 'footR' : 'footL'] = [fa, fb];
  }

  mergeStatic(root);
  root.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });

  const rig = { j, base, hipY: DULLAHAN_HIP, flare: 0 };
  const orbPoint = new THREE.Object3D(); orbPoint.position.set(0, 0.3, 0.9); body.add(orbPoint);
  const shadow = blobShadow(0x000000, null, 1.1);
  let t = 0;

  return {
    root, rig, trails, worldObjects: [], orbPoint, shadow,
    height: 2.0, headY: 2.45,
    trailColor: variant ? 0x8fd0ff : 0xffe38a,
    update(dt) {
      t += dt;
      eyeGlow.material.opacity = 0.45 + 0.2 * Math.sin(t * 9) * Math.sin(t * 3.1);
    },
    setFlash(color, a) {
      flashMats.forEach((m, i) => {
        m.emissive.copy(baseEmissive[i]);
        if (a > 0) m.emissive.lerp(color, a * 0.8);
      });
    },
    dispose() { disposeTree(root); },
  };
}
