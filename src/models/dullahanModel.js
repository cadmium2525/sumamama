// デュラハン: 中身のない黄金の甲冑騎士（参考画像 01〜04 準拠）
// 兜の奥に橙の炎が灯り、各パーツは宙に浮いて分離している。大剣を肩に担ぎ、背中に円盾。
import * as THREE from 'three';
import { metal, gloss, basic, lathe, shell, place, mesh, mergeStatic, joint, filigreeTex, runeShieldTex, plumeTex, blobShadow, paramGeo, canvasTex } from './kit.js';
import { disposeTree } from './common.js';

const VARIANTS = [
  { silver: 0xd0d0d0, gold: 0xf0bc2c, navy: 0x161b2b, plume: ['#d2330c', '#8a1604', '#ff6a24'], eye: 0xff8a1e, blade: 0xf5f7fa, gem: 0x9fd0ff, goldHex: '#f0c04a', ink: '#a8741c' },
  { silver: 0x4a5064, gold: 0xc8d2e4, navy: 0x0b0e18, plume: ['#2d7bff', '#0c3aa0', '#7ac4ff'], eye: 0x4fe6ff, blade: 0xe8eef8, gem: 0xff6a8a, goldHex: '#c8d2e4', ink: '#6a7890' },
];

export const DULLAHAN_HIP = 1.2;

export function buildDullahan(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  // 鏡面ではなく、白磁のようにやわらかく光る甲冑
  const silver = metal(P.silver, { rough: 0.33, metal: 0.8, env: 1.0 });
  const gold = metal(P.gold, { rough: 0.34, metal: 0.78, env: 1.0 });
  const goldD = gold.clone(); goldD.side = THREE.DoubleSide;
  const navy = gloss(P.navy, { rough: 0.7, metal: 0.2, env: 0.4, side: THREE.BackSide });
  const navyF = gloss(P.navy, { rough: 0.7, metal: 0.2, env: 0.4 });
  const bladeM = metal(P.blade, { rough: 0.12, metal: 1, env: 1.3 });
  const fuller = new THREE.MeshStandardMaterial({ color: 0x14171e, roughness: 0.3, metalness: 0.6, envMapIntensity: 0.6, side: THREE.DoubleSide });
  const plume = new THREE.MeshStandardMaterial({ map: plumeTex(...P.plume), roughness: 0.8, metalness: 0, envMapIntensity: 0.25, side: THREE.DoubleSide, color: 0x9a9a9a });
  const filigree = filigreeTex(P.goldHex, P.ink);
  const goldEngr = new THREE.MeshStandardMaterial({ map: filigree, metalness: 0.6, roughness: 0.45, envMapIntensity: 0.45, emissive: 0x2c2406 });
  const shieldFace = new THREE.MeshStandardMaterial({ map: runeShieldTex(P.goldHex, P.ink), metalness: 0.6, roughness: 0.4, envMapIntensity: 0.9, emissive: 0x3a3008 });
  const eyeM = basic(P.eye, 1.15);
  const gemM = metal(P.gem, { rough: 0.1, metal: 0.3, env: 1.4, emissive: new THREE.Color(P.gem).multiplyScalar(0.25) });
  const silverFlat = silver.clone(); silverFlat.flatShading = true; // 板を組んだ面の角を見せる
  const flashMats = [silverFlat, silver, gold, goldD, goldEngr, shieldFace, bladeM];
  const baseEmissive = flashMats.map((m) => m.emissive.clone());

  const body = joint('body', root, 0, DULLAHAN_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 腰まわり（細く絞る） ----------
  const hipDeco = new THREE.Group();
  hipDeco.scale.set(0.74, 1, 0.76);
  hips.add(hipDeco);
  place(mesh(new THREE.SphereGeometry(0.15, 20, 14), navyF), hipDeco, 0, 0.14, 0, 0, 0, 0, [0.9, 0.5, 0.75]);
  // ベルト（銀帯＋金の上縁）
  place(shell(lathe([[0.215, 0.18], [0.225, 0.2], [0.225, 0.27], [0.215, 0.29]], 28), silver, navy), hipDeco, 0, 0, 0, 0, 0, 0, [1, 1, 0.82]);
  place(mesh(new THREE.TorusGeometry(0.222, 0.016, 8, 32), gold), hipDeco, 0, 0.29, 0, Math.PI / 2, 0, 0, [1, 0.82, 1]);
  // 草摺り（左側の大きな曲面板・背面）
  const tasset = (phi0, len, drop, parent) => {
    const g = shell(lathe([[0.22, 0.18], [0.255, 0.1], [0.3, 0.02], [0.33, -0.03 - drop]], 20, phi0, len), silver, navy);
    g.scale.set(1, 1, 0.84);
    parent.add(g);
    const rim = mesh(new THREE.TorusGeometry(0.33, 0.015, 6, 20, len), gold);
    rim.rotation.set(Math.PI / 2, 0, -phi0 + Math.PI / 2 - len);
    rim.position.y = -0.03 - drop;
    rim.scale.set(1, 0.84, 1);
    parent.add(rim);
  };
  tasset(Math.PI * 0.2, Math.PI * 0.55, 0.12, hipDeco); // 左（+X）
  tasset(Math.PI * 0.78, Math.PI * 0.44, 0.08, hipDeco); // 背面
  tasset(Math.PI * 1.25, Math.PI * 0.42, 0.04, hipDeco); // 右（-X）
  tasset(Math.PI * 1.7, Math.PI * 0.46, -0.13, hipDeco); // 前（短い）
  // 前右（-X）の垂れ板と金の紋章＋青い宝石
  const front = new THREE.Group();
  place(front, hipDeco, -0.09, 0.14, 0.215, 0.12, -0.3, 0, 1.05);
    const em = new THREE.Shape();
  em.moveTo(0, 0.1); em.lineTo(0.065, 0.06); em.lineTo(0.06, -0.05); em.lineTo(0, -0.13); em.lineTo(-0.06, -0.05); em.lineTo(-0.065, 0.06); em.lineTo(0, 0.1);
  place(mesh(new THREE.ExtrudeGeometry(em, { depth: 0.02, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2 }), gold), front, 0, -0.02, 0.012);
  place(mesh(new THREE.SphereGeometry(0.03, 14, 10), gemM), front, 0, 0.0, 0.045, 0, 0, 0, [1, 0.8, 0.6]);

  // ---------- 胴 ----------
  place(mesh(new THREE.CylinderGeometry(0.13, 0.14, 0.14, 20, 1, true), navyF), torso, 0, 0.3, 0);
  // 腹当て（胸当てとベルトの間を覆う細い板）
  place(shell(lathe([[0.165, 0.27], [0.15, 0.32], [0.162, 0.385]], 24), silver, navy), torso, 0, 0, 0.01, 0, 0, 0, [1, 1, 0.8]);
  // 逆三角形の胸当て（上が広く、腰に向かって絞る）
  const chestPts = [[0.12, 0.35], [0.18, 0.39], [0.275, 0.47], [0.32, 0.56], [0.295, 0.635], [0.2, 0.685], [0.14, 0.7]];
  place(shell(lathe(chestPts, 32), silver, navy), torso, 0, 0, 0.02, 0, 0, 0, [1, 1, 0.78]);
  // 首まわりの金縁と胸の中央の金の稜線
  // 襟の金縁（首まわりの輪。前が少し下がる）
  place(mesh(new THREE.TorusGeometry(0.152, 0.024, 8, 28), gold), torso, 0, 0.69, 0.03, Math.PI / 2 + 0.22, 0, 0, [1, 0.8, 1]);
  for (let i = 0; i < 4; i++) {
    const y = 0.64 - i * 0.075;
    const r = [0.25, 0.3, 0.29, 0.25][i];
    const fin = mesh(new THREE.ConeGeometry(0.036, 0.11, 4), gold);
    place(fin, torso, 0, y, 0.02 + r * 0.78 + 0.01, 0.35, 0, 0, [1, 1, 0.6]);
  }
  place(mesh(new THREE.BoxGeometry(0.045, 0.3, 0.03), gold), torso, 0, 0.5, 0.02 + 0.3 * 0.78 - 0.005, -0.05);
  place(mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.1, 12), navyF), torso, 0, 0.72, 0);

  // 肩当て（胴に固定・金縁・金のトゲ）
  for (const s of [-1, 1]) {
    const pa = new THREE.Group();
    place(pa, torso, s * 0.345, 0.63, 0, 0, 0, s * -0.3, 1.04);
    place(shell(new THREE.SphereGeometry(0.2, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.6), silver, navy), pa, 0, 0, 0, 0, 0, 0, [1.12, 0.88, 1.08]);
    // 下縁の金の縁取り（胸側は開ける）
    place(mesh(new THREE.TorusGeometry(0.2 * Math.sin(Math.PI * 0.6) * 1.12, 0.024, 8, 28, Math.PI * 1.3), gold), pa, 0, 0.2 * Math.cos(Math.PI * 0.6) * 0.88, 0, Math.PI / 2, 0, s > 0 ? -Math.PI * 0.65 : Math.PI * 0.35, [1, 0.98, 1.1]);
    const sp1 = mesh(new THREE.ConeGeometry(0.075, 0.4, 10), gold);
    place(sp1, pa, s * 0.15, 0.2, 0.02, 0, 0, s * -0.5);
    const sp2 = mesh(new THREE.ConeGeometry(0.06, 0.24, 10), gold);
    place(sp2, pa, s * 0.22, 0.03, -0.09, -0.5, 0, s * -1.15);
    place(mesh(new THREE.ConeGeometry(0.058, 0.22, 10), gold), pa, s * 0.2, 0.05, 0.11, 0.6, 0, s * -1.05);
  }

  // 背中の円盾（金の盾面にルーン文字、厚い銀の縁）
  const sh = new THREE.Group();
  place(sh, torso, 0, 0.31, -0.27, -0.08, Math.PI, 0, 0.92);
  const faceGeo = new THREE.CircleGeometry(0.36, 48);
  const pa = faceGeo.attributes.position;
  for (let i = 0; i < pa.count; i++) { const r = Math.hypot(pa.getX(i), pa.getY(i)) / 0.36; pa.setZ(i, 0.07 * (1 - r * r)); }
  faceGeo.computeVertexNormals();
  place(mesh(faceGeo, shieldFace), sh, 0, 0, 0.0);
  place(mesh(new THREE.SphereGeometry(0.5, 32, 10, 0, Math.PI * 2, 0, 0.37), gold), sh, 0, 0, -0.43, Math.PI / 2, 0, 0);
  place(mesh(new THREE.TorusGeometry(0.385, 0.055, 12, 48), silver), sh, 0, 0, 0, 0, 0, 0, [1, 1, 0.45]);
  place(mesh(new THREE.CircleGeometry(0.39, 32), navyF), sh, 0, 0, -0.03, 0, Math.PI, 0);

  // ---------- 兜 ----------
  // 小ぶりな白銀の兜。額は金の貝殻状のひさし、暗い顔の奥に橙の炎、金の長い牙が格子のように垂れる。
  const head = joint('head', torso, 0, 0.7, 0); j.head = head;
  const hs = new THREE.Group();
  place(hs, head, 0, 0.02, 0.02, 0, 0, 0, [0.84, 0.74, 0.84]);
  // 上部ドーム
  place(shell(lathe([[0.155, 0.18], [0.152, 0.23], [0.135, 0.29], [0.095, 0.335], [0.045, 0.358], [0.0, 0.364]], 28), silver, navy), hs, 0, 0, 0, 0, 0, 0, [0.96, 1, 1.05]);
  // 下部（前面が開いた顔の部分・頬当て）
  place(shell(lathe([[0.13, -0.02], [0.152, 0.05], [0.16, 0.13], [0.155, 0.185]], 28, Math.PI * 0.24, Math.PI * 1.52), silver, navy), hs, 0, 0, 0, 0, 0, 0, [0.96, 1, 1.05]);
  place(mesh(new THREE.SphereGeometry(0.128, 18, 14), basic(0x0a0608)), hs, 0, 0.11, 0.0);
  // 炎の瞳（横に広い三日月形の光）
  place(mesh(new THREE.SphereGeometry(0.03, 14, 10), eyeM), hs, 0, 0.138, 0.112, 0, 0, 0, [1.9, 0.8, 0.5]);
  place(mesh(new THREE.SphereGeometry(0.016, 10, 8), basic(0xffd040, 1.3)), hs, 0, 0.133, 0.126, 0, 0, 0, [1.3, 0.5, 0.5]);
  const glowTex = canvasTex(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); });
  const eyeGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: P.eye, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
  eyeGlow.scale.setScalar(0.16);
  eyeGlow.position.set(0, 0.136, 0.14);
  eyeGlow.userData.keep = true;
  hs.add(eyeGlow);
  // 金の額飾り（一枚の扇形の貝殻。浅い溝の畝が額いっぱいに広がる）
  const browGeo = paramGeo(96, 10, (u, v, p) => {
    // 目の真上の一点から放射状に広がる扇。畝は8本、上縁は波形
    const a = (u - 0.5) * 2.2;
    const rib = Math.pow(Math.abs(Math.cos((u - 0.5) * Math.PI * 9)), 0.6);
    const rho = 0.045 + v * (0.15 + 0.007 * rib); // 丸い帆立貝の輪郭（上縁は浅い波）
    const x2 = Math.sin(a) * rho, y = 0.165 + Math.cos(a) * rho;
    const phi = x2 / 0.165;
    const k = Math.max(0, (y - 0.17) / 0.19);
    const r = 0.18 - 0.05 * k * k + 0.016 * rib * (0.4 + 0.6 * v) + 0.022 * Math.sin(Math.PI * v);
    p.set(Math.sin(phi) * r * 0.96, y, Math.cos(phi) * r * 1.05);
  });
  place(mesh(browGeo, goldD), hs, 0, 0, 0);
  // 金の牙（額から顎の下まで垂れる長い格子。中央が最も長い）
  // 先端が襟に埋もれない長さにする（中央が最も下まで届く）
  const fangs = [[-0.105, 0.15, 0.108, 0.5, 0.15], [-0.058, 0.18, 0.142, 0.25, 0.135], [0, 0.19, 0.154, 0, 0.105], [0.058, 0.18, 0.142, -0.25, 0.135], [0.105, 0.15, 0.108, -0.5, 0.15]];
  for (const [x, len, z, ry, top] of fangs) {
    const fgeo = new THREE.ConeGeometry(0.026, len, 4);
    fgeo.rotateY(Math.PI / 4); fgeo.scale(1, 1, 0.5); // 平たい刃。左右対称に内側へ傾ける
    place(mesh(fgeo, gold), hs, x * (1 - 0.12), top - len / 2, z, Math.PI + 0.1, -ry, x * -1.8);
  }
  // 頬当て（開口の下の角を覆い、黒い開口を逆三角形に見せる。下縁は金）
  const silverD = silver.clone(); silverD.side = THREE.DoubleSide;
  const cheek = new THREE.Shape();
  cheek.moveTo(0, 0.14); cheek.lineTo(0, -0.03); cheek.lineTo(0.078, -0.03); cheek.lineTo(0, 0.14);
  const cheekGeo = new THREE.ShapeGeometry(cheek);
  for (const s of [-1, 1]) {
    const c = new THREE.Group();
    place(c, hs, s * 0.122, 0, 0.098, 0, s * -0.62, 0, [-s, 1, 1]);
    c.add(mesh(cheekGeo, silverD));
    place(mesh(new THREE.BoxGeometry(0.095, 0.016, 0.016), gold), c, 0.04, -0.032, 0);
  }
  // 耳の円盤
  for (const s of [-1, 1]) {
    place(mesh(new THREE.SphereGeometry(0.048, 16, 12), gold), hs, s * 0.152, 0.15, -0.005, 0, 0, 0, [0.6, 1, 1]);
  }
  // 赤い羽根飾り（頭頂から後ろへ立つ扇。正面からは縦に長い房）
  const fan = new THREE.Shape();
  const R0 = 0.13, R1 = 0.4, N = 26;
  const A0 = 0.45, A1 = Math.PI - 0.1;
  fan.moveTo(R0 * Math.cos(A0), R0 * Math.sin(A0));
  for (let i = 0; i <= N; i++) {
    const a = A0 + (i / N) * (A1 - A0);
    const r = R1 * (i % 2 ? 0.95 : 1) * (0.72 + 0.28 * Math.sin((i / N) * Math.PI * 0.75 + 0.5));
    fan.lineTo(r * Math.cos(a), r * Math.sin(a));
  }
  for (let i = N; i >= 0; i--) {
    const a = A0 + (i / N) * (A1 - A0);
    fan.lineTo(R0 * Math.cos(a), R0 * Math.sin(a));
  }
  const fg = new THREE.ExtrudeGeometry(fan, { depth: 0.04, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.016, bevelSegments: 2, curveSegments: 4 });
  fg.translate(0, 0, -0.02);
  // UV（シェイプ座標）→ 中心から放射状のすじ
  const uvA = fg.attributes.uv;
  for (let i = 0; i < uvA.count; i++) uvA.setXY(i, uvA.getX(i) / 0.84 + 0.5, uvA.getY(i) / 0.84 + 0.5);
  const plumeMesh = mesh(fg, plume);
  place(plumeMesh, hs, 0, 0.2, -0.02, 0, -Math.PI / 2, 0);

  // ---------- 腕 ----------
  const trails = {};
  const hands = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.36, 0.57, 0);
    j[R ? 'armR' : 'armL'] = arm;
    place(mesh(new THREE.SphereGeometry(0.075, 14, 10), navyF), arm, 0, -0.02, 0);
    place(shell(lathe([[0.095, -0.05], [0.112, -0.11], [0.112, -0.18], [0.098, -0.25], [0.082, -0.3]], 20), silver, navy), arm, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(0.06, 12, 10), navyF), arm, 0, -0.35, 0);
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.35, 0);
    j[R ? 'foreR' : 'foreL'] = fore;
    place(shell(lathe([[0.128, 0.01], [0.116, -0.06], [0.09, -0.17], [0.086, -0.27], [0.094, -0.3]], 20), silver, navy), fore, 0, 0, 0);
    place(mesh(new THREE.TorusGeometry(0.126, 0.013, 8, 22), gold), fore, 0, 0.005, 0, Math.PI / 2, 0, 0, [1, 1, 1.4]);
    // 浮いた籠手（指付き）
    const hand = new THREE.Group();
    hand.userData.joint = true;
    place(hand, fore, 0, -0.42, 0.0, 0, 0, 0, 1.55);
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
  sword.scale.setScalar(0.76);
  j.wep = sword;
  // 柄・柄頭
  place(mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.26, 12), gold), sword, 0, 0, -0.01, Math.PI / 2, 0, 0);
  for (const z of [-0.09, 0.0, 0.08]) place(mesh(new THREE.TorusGeometry(0.027, 0.007, 6, 14), gold), sword, 0, 0, z);
  place(mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.05, 8), gold), sword, 0, 0, -0.16, Math.PI / 2, 0, 0);
  place(mesh(new THREE.SphereGeometry(0.03, 10, 8), gold), sword, 0, 0, -0.195);
  // 鍔（三日月形の角）
  const horn = new THREE.Shape();
  horn.moveTo(0, 0.05);
  horn.quadraticCurveTo(0.09, 0.32, -0.26, 0.42);
  horn.quadraticCurveTo(-0.03, 0.25, -0.1, 0.05);
  horn.lineTo(0, 0.05);
  const hornGeo = new THREE.ExtrudeGeometry(horn, { depth: 0.07, bevelEnabled: true, bevelSize: 0.016, bevelThickness: 0.014, bevelSegments: 2, curveSegments: 10 });
  hornGeo.translate(0, 0, -0.035);
  place(mesh(hornGeo, goldD), sword, 0, 0, 0.15, 0, -Math.PI / 2, 0, [0.75, -0.75, 1.2]); // 手の外側へ巻く三日月
  place(mesh(new THREE.BoxGeometry(0.07, 0.2, 0.06), gold), sword, 0, 0, 0.15);
  // 刀身（先細りの両刃・中央に黒い樋）
  const bs = new THREE.Shape();
  bs.moveTo(0.14, -0.095); bs.lineTo(1.2, -0.08); bs.lineTo(1.46, 0); bs.lineTo(1.2, 0.08); bs.lineTo(0.14, 0.095); bs.lineTo(0.14, -0.095);
  const bg = new THREE.ExtrudeGeometry(bs, { depth: 0.012, bevelEnabled: true, bevelSize: 0.014, bevelThickness: 0.012, bevelSegments: 2 });
  bg.translate(0, 0, -0.006);
  place(mesh(bg, bladeM), sword, 0, 0, 0, 0, -Math.PI / 2, 0);
  const fl = new THREE.Shape();
  fl.moveTo(0.45, -0.035); fl.lineTo(1.2, -0.025); fl.lineTo(1.36, 0); fl.lineTo(1.2, 0.025); fl.lineTo(0.45, 0.035); fl.lineTo(0.45, -0.035);
  const flGeo = new THREE.ShapeGeometry(fl);
  for (const sx of [-1, 1]) place(mesh(flGeo, fuller), sword, sx * 0.0195, 0, 0, 0, -Math.PI / 2, 0);
  // 刀身の根元を覆う唐草模様の金具
  const lg = new THREE.Shape();
  lg.moveTo(0.13, -0.11); lg.lineTo(0.44, -0.098); lg.lineTo(0.56, 0); lg.lineTo(0.44, 0.098); lg.lineTo(0.13, 0.11); lg.lineTo(0.13, -0.11);
  const lgeo = new THREE.ExtrudeGeometry(lg, { depth: 0.03, bevelEnabled: true, bevelSize: 0.01, bevelThickness: 0.008, bevelSegments: 2 });
  lgeo.translate(0, 0, -0.015);
  const luv = lgeo.attributes.uv;
  for (let i = 0; i < luv.count; i++) luv.setXY(i, (luv.getX(i) - 0.13) / 0.43, (luv.getY(i) + 0.11) / 0.22);
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
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.17, -0.02, 0);
    j[R ? 'legR' : 'legL'] = leg;
    place(mesh(new THREE.SphereGeometry(0.05, 12, 10), navyF), leg, 0, -0.1, 0);
    // 腿当て（浮いた筒）
    { const g = lathe([[0.165, -0.1], [0.172, -0.16], [0.146, -0.32], [0.11, -0.46]], 6); g.rotateY(Math.PI / 6); place(shell(g, silver, navy), leg, 0, 0, 0, 0, 0, 0, [1, 1, 0.78]); }
    place(mesh(new THREE.SphereGeometry(0.058, 12, 10), navyF), leg, 0, -0.49, 0);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.5, 0);
    j[R ? 'shinR' : 'shinL'] = shin;
    // 膝の金の炎飾り
    place(mesh(new THREE.SphereGeometry(0.06, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), gold), shin, 0, 0.0, 0.07, Math.PI / 2, 0, 0, [1, 1, 0.6]);
    place(mesh(new THREE.ConeGeometry(0.065, 0.22, 6), gold), shin, 0, 0.1, 0.105, -0.12, 0, 0, [1, 1, 0.5]);
    for (const k of [-1, 1]) place(mesh(new THREE.ConeGeometry(0.04, 0.12, 5), gold), shin, k * 0.055, 0.05, 0.1, -0.2, 0, k * -0.5, [1, 1, 0.5]);
    // すね当て（裾が広がる）
    place(shell(lathe([[0.136, 0.02], [0.122, -0.08], [0.114, -0.23], [0.078, -0.42], [0.07, -0.52], [0.074, -0.57]], 24), silver, navy), shin, 0, 0, -0.015, 0, 0, 0, [1, 1, 1.22]);
    place(mesh(new THREE.ConeGeometry(0.04, 0.12, 4), silver), shin, 0, -0.02, 0.095, Math.PI, 0, 0, [1, 1, 0.4]);
    // 浮いた鉄靴（重ね板と金の底）
    const foot = new THREE.Group();
    place(foot, shin, 0, -0.62, 0.03, 0, 0, 0, [1.08, 1.08, 1.2]);
    place(mesh(new THREE.BoxGeometry(0.09, 0.012, 0.22), metal(0x9a7430, { rough: 0.5, metal: 0.5, env: 0.7 })), foot, 0, -0.055, 0.035);
    place(mesh(new THREE.SphereGeometry(1, 16, 12), silver), foot, 0, -0.005, 0.05, 0, 0, 0, [0.066, 0.058, 0.15]);
    place(mesh(new THREE.ConeGeometry(0.045, 0.1, 8), silver), foot, 0, -0.02, 0.2, Math.PI / 2, 0, 0, [1, 1, 0.6]);
    for (let k = 0; k < 3; k++) {
      const plate = mesh(new THREE.CylinderGeometry(0.06, 0.065, 0.13, 14, 1, false, -Math.PI / 2, Math.PI), silver);
      place(plate, foot, 0, 0.0, -0.03 + k * 0.065, Math.PI / 2, 0, Math.PI / 2, [1, 1, 0.75 - k * 0.12]);
    }
    place(mesh(new THREE.SphereGeometry(0.06, 12, 8), silver), foot, 0, -0.005, 0.14, 0, 0, 0, [1, 0.55, 1.1]);
    place(mesh(new THREE.TorusGeometry(0.063, 0.01, 6, 16, Math.PI), gold), foot, 0, 0, 0.06, 0, Math.PI / 2, 0, [1, 1, 1]);
    const fa = new THREE.Object3D(); fa.position.set(0, -0.35, 0.05); shin.add(fa);
    const fb = new THREE.Object3D(); fb.position.set(0, -0.7, 0.18); shin.add(fb);
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
    height: 2.1, headY: 2.55,
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
