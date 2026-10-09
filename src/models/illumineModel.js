// イルミネ: 宵闇の蛾姫（参考画像 05〜08 準拠）
// 艶のある闇色の細い体、きのこ傘のような二段フード、釣鐘の袖、二段スカート。
// 布の外側は闇色、内側は水面のように光る紫。フードの脇から虹色のリボンがなびく。
import * as THREE from 'three';
import { gloss, basic, lathe, shell, place, mesh, mergeStatic, joint, paramGeo, glowLining, blobShadow, canvasTex } from './kit.js';
import { taperCapsule, FlowTube, disposeTree } from './common.js';

const VARIANTS = [
  {
    skin: 0x2c1c36, eye: 0xffa6e2, mark: 0xff86cc, curl: 0xffe6f2,
    glow: { c1: 0xb0a0ff, c2: 0xa67cff, c3: 0xe45ce8, line: 0xe8c8ff, bright: 1.0, scale: 8 },
    ear: [0xe8789c, 0xffd0b4, 0xfff4d8], dots: 0xffb4e4,
    wisp: [0x9a4dff, 0xff7fa6, 0xffc0a0, 0xfff2cc], shadow: 0x14041f, ring: 0x9a4dff,
  },
  {
    skin: 0x122632, eye: 0x8ff3ff, mark: 0x5fe4ff, curl: 0xdcfbff,
    glow: { c1: 0x1a6cff, c2: 0x22d8d0, c3: 0x8a7bff, line: 0xe0fff9 },
    ear: [0x5fd8ff, 0xb8fff0, 0xf4fff6], dots: 0x44c8ff,
    wisp: [0x3a7bff, 0x3fe6d0, 0xb8ffe0, 0xffffff], shadow: 0x031018, ring: 0x3fd8ff,
  },
];

export const ILLUMINE_HIP = 0.9;

export function buildIllumine(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  const skin = gloss(P.skin, { rough: 0.78, metal: 0.04, env: 0.4, emissive: new THREE.Color(P.skin).multiplyScalar(0.16) });
  // 布は肌よりわずかに明るく、つやを抑える
  const clothCol = new THREE.Color(P.skin).multiplyScalar(2.2);
  const cloth = gloss(clothCol, { rough: 0.88, metal: 0.02, env: 0.3, emissive: clothCol.clone().multiplyScalar(0.16) });
  // 布の縦すじ（ひだの明暗）
  cloth.map = canvasTex(512, 8, (g, w, h) => {
    g.fillStyle = '#b4b4b4'; g.fillRect(0, 0, w, h);
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 46; i++) {
      const x = 40 + rnd() * (w - 80), bw = 4 + rnd() * 16, light = rnd() < 0.55; // 継ぎ目（両端）には筋を置かない
      const gr = g.createLinearGradient(x - bw, 0, x + bw, 0);
      const c = light ? '255,255,255' : '40,30,50';
      gr.addColorStop(0, `rgba(${c},0)`); gr.addColorStop(0.5, `rgba(${c},${light ? 0.52 : 0.36})`); gr.addColorStop(1, `rgba(${c},0)`);
      g.fillStyle = gr; g.fillRect(x - bw, 0, bw * 2, h);
    }
  }, { repeat: [1, 1] });
  const lining = glowLining(P.glow);
  // フードの裏地は淡い薄紫（首まわりが白っぽく光る）
  const pale = (c, k) => new THREE.Color(c).lerp(new THREE.Color(0xffffff), k).getHex();
  const liningH = glowLining({ ...P.glow, c1: pale(P.glow.c1, 0.55), c2: pale(P.glow.c2, 0.3), c3: P.glow.c3 });
  const markM = basic(P.mark, 1.25);
  const eyeM = basic(P.eye, 1.7);
  const curlM = basic(P.curl, 1.1);
  const flashMats = [skin, cloth];
  const baseEmissive = flashMats.map((m) => m.emissive.clone());

  const body = joint('body', root, 0, ILLUMINE_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 胴（くびれた細身） ----------
  place(mesh(lathe([[0.001, -0.02], [0.08, 0.0], [0.07, 0.1], [0.05, 0.22], [0.056, 0.3], [0.08, 0.37], [0.098, 0.42], [0.088, 0.455], [0.045, 0.49], [0.023, 0.515], [0.02, 0.6], [0.001, 0.62]], 20), skin), torso, 0, 0, 0, 0, 0, 0, [1, 1, 0.78]);
  // 胸の桃色の模様（斜めの楕円2つと点）
  for (const s of [-1, 1]) place(mesh(new THREE.SphereGeometry(1, 12, 8), markM), torso, s * 0.038, 0.43, 0.064, 0, s * 0.35, s * -0.55, [0.024, 0.012, 0.007]);
  for (const s of [-1, 1]) place(mesh(new THREE.SphereGeometry(1, 10, 8), markM), torso, s * 0.03, 0.365, 0.05, 0, s * 0.4, 0, [0.008, 0.009, 0.005]);

  // ---------- 頭 ----------
  // 顔は逆しずく形（目の高さが一番広く、あごは小さい）。フードが髪のように顔を包み、顔だけが窓からのぞく。
  const head = joint('head', torso, 0, 0.55, 0); j.head = head;
  head.scale.setScalar(0.84); // 参考画像の頭身（あごまでが顔幅の約7.5倍）に合わせる
  const HEAD_PTS = [[0.0005, 0], [0.05, 0.003], [0.09, 0.024], [0.112, 0.058], [0.118, 0.098], [0.119, 0.135], [0.116, 0.185], [0.104, 0.23], [0.076, 0.264], [0.0005, 0.28]];
  const headCurve = new THREE.SplineCurve(HEAD_PTS.map(([x, y]) => new THREE.Vector2(x, y))).getPoints(40);
  const HEAD_Z = 0.94;
  const headRad = (y) => {
    if (y <= 0) return 0.0005;
    for (let i = 1; i < headCurve.length; i++) {
      const a = headCurve[i - 1], b = headCurve[i];
      if (y <= b.y) return a.x + (b.x - a.x) * ((y - a.y) / Math.max(1e-6, b.y - a.y));
    }
    return 0.0005;
  };
  place(mesh(lathe(headCurve.map((q) => [q.x, q.y]), 40), skin), head, 0, 0, 0, 0, 0, 0, [1, 1, HEAD_Z]);
  // 顔（目）: 頭の前面に沿った薄い面にテクスチャで描く。細い葉形の吊り目、淡い桃色のグラデーション。
  const FACE_PHI = 1.2, FACE_H = 0.27;
  const faceTex = canvasTex(1024, 512, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    const sx = w / (2 * FACE_PHI * 0.117), sy = h / FACE_H; // ワールド単位 → px
    const eyeCol = new THREE.Color(P.eye);
    const css = (c, k, a = 1) => `rgba(${Math.round(Math.min(1, c.r * k) * 255)},${Math.round(Math.min(1, c.g * k) * 255)},${Math.round(Math.min(1, c.b * k) * 255)},${a})`;
    const pale = eyeCol.clone().lerp(new THREE.Color(0xffffff), 0.74);
    const mid = eyeCol.clone().lerp(new THREE.Color(0xf6e0ff), 0.62);
    for (const s of [-1, 1]) {
      const phi = s * 0.75, y = 0.104;
      g.save();
      g.translate((phi + FACE_PHI) / (2 * FACE_PHI) * w, (1 - y / FACE_H) * h);
      g.scale(sx * s, sy);
      g.rotate(-0.28); // 外側の端が上がる
      // 目のまわりの影
      const sh = g.createRadialGradient(0, 0, 0.01, 0, 0, 0.06);
      sh.addColorStop(0, 'rgba(12,4,20,0.4)'); sh.addColorStop(1, 'rgba(12,4,20,0)');
      g.fillStyle = sh; g.beginPath(); g.arc(0, 0, 0.06, 0, Math.PI * 2); g.fill();
      // 涙滴形（内側の下が尖り、外側の上が丸くふくらむ）
      const L = 0.047;
      g.beginPath();
      g.moveTo(-L, 0.014);
      g.bezierCurveTo(-L * 0.7, -0.016, L * 0.45, -0.05, L * 0.9, -0.026);
      g.bezierCurveTo(L * 1.35, 0.0, L * 0.5, 0.042, -L, 0.014);
      g.closePath();
      // 淡い桃紫。下内側がやや濃く、上外側へ白くぼける
      const gr = g.createLinearGradient(-L * 0.6, 0.024, L * 0.7, -0.026);
      gr.addColorStop(0, css(mid, 0.96)); gr.addColorStop(0.5, css(pale, 0.97)); gr.addColorStop(1, css(pale, 1.06));
      g.fillStyle = gr; g.fill();
      g.lineWidth = 0.0012; g.strokeStyle = css(mid, 0.8, 0.6); g.stroke();
      const hl = g.createRadialGradient(-L * 0.25, -0.012, 0, -L * 0.25, -0.012, 0.012);
      hl.addColorStop(0, 'rgba(255,255,255,0.8)'); hl.addColorStop(0.5, 'rgba(255,255,255,0.35)'); hl.addColorStop(1, 'rgba(255,255,255,0)');
      g.save(); g.clip(); g.fillStyle = hl; g.beginPath(); g.arc(-L * 0.25, -0.012, 0.012, 0, Math.PI * 2); g.fill(); g.restore();
      g.restore();
    }
  });
  faceTex.flipY = false;
  const faceGeo = paramGeo(28, 16, (u, v, p) => {
    const phi = -FACE_PHI + u * 2 * FACE_PHI, y = FACE_H * (1 - v);
    const r = headRad(y) * 1.012 + 0.0008;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * HEAD_Z);
  });
  const faceM = new THREE.MeshBasicMaterial({ map: faceTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  place(mesh(faceGeo, faceM), head, 0, 0, 0);
  // 首元の白い印
  place(mesh(new THREE.SphereGeometry(1, 10, 6), curlM), torso, 0, 0.548, 0.026, 0, 0, 0, [0.014, 0.002, 0.005]);

  // ---------- フード（上段: 頭に被さる厚い傘。前は顔の形にくり抜かれ、縁が生え際のように顔を囲む） ----------
  const hood = new THREE.Group(); hood.userData.keep = true;
  place(hood, head, 0, 0, 0);
  const sstep = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  // 開口は傘の面にあいた大きなアーチ（頂点は頭頂の高さ）。縁は顔から少し離れ、奥は暗い。
  const CAP_V0 = 0.68, CAP_T = 1.2, OPEN_X = 0.115;
  const capArch = (v) => (v < CAP_V0 ? 0 : Math.pow(Math.sin(Math.min(1, (v - CAP_V0) / 0.13) * Math.PI / 2), 0.3));
  const capFn = (u, v, p) => {
    // 楕円体の上部を切り取った丸い傘（縁は斜め下を向く）
    const th = v * CAP_T, k = Math.sin(th) / Math.sin(CAP_T);
    const a = capArch(v) * Math.asin(Math.min(0.95, OPEN_X / Math.max(0.14, 0.245 * k)));
    const phi = a + u * (Math.PI * 2 - 2 * a);
    const side = Math.pow(Math.sin(phi), 2);
    const lobe = Math.cos(phi * 6) * v * v * v;
    const y0 = 0.435 - (0.33 + 0.03 * side) * (1 - Math.cos(th)) / (1 - Math.cos(CAP_T));
    const r = (0.245 + 0.195 * side + 0.34 * Math.pow(Math.max(0, -Math.cos(phi)), 1.5)) * k + 0.04 * lobe + 0.024 * Math.cos(phi * 14) * Math.pow(v, 1.3);
    p.set(Math.sin(phi) * r, y0 + 0.035 * (lobe - v * v * v) - 0.07 * Math.max(0, -Math.cos(phi)) * v * v, Math.cos(phi) * r * 0.95 - 0.07);
  };
  // フードの奥（顔のまわりの暗がり）
  place(mesh(new THREE.SphereGeometry(1, 20, 14), basic(new THREE.Color(P.skin).multiplyScalar(0.45))), hood, 0, 0.21, -0.08, 0, 0, 0, [0.19, 0.12, 0.14]);
  const capGeo = paramGeo(72, 24, capFn);
  { // 正面の継ぎ目で法線をそろえる
    const pa = capGeo.attributes.position, na = capGeo.attributes.normal;
    for (let r = 0; r <= 24; r++) {
      const i0 = r * 73, i1 = i0 + 72;
      if (Math.abs(pa.getX(i0) - pa.getX(i1)) + Math.abs(pa.getZ(i0) - pa.getZ(i1)) > 1e-4) continue;
      const n = new THREE.Vector3(na.getX(i0) + na.getX(i1), na.getY(i0) + na.getY(i1), na.getZ(i0) + na.getZ(i1)).normalize();
      na.setXYZ(i0, n.x, n.y, n.z); na.setXYZ(i1, n.x, n.y, n.z);
    }
  }
  place(shell(capGeo, cloth, liningH), hood, 0, 0, 0);
  // フード下段（顔の両脇から胸元まで垂れ、左右へ大きく広がる房）
  const mantleFn = (u, v, p) => {
    const y0 = 0.2 - 0.3 * v;
    const r0 = 0.19 + 0.07 * Math.sin(v * Math.PI / 2) + 0.08 * Math.pow(v, 2.6);
    // 縁は顔の脇をまっすぐ下り、あごの下から外へ開く
    const a = Math.asin(Math.min(0.95, (OPEN_X * 1.03 + Math.max(0, 0.03 - y0) * 0.55) / r0));
    const phi = a + u * (Math.PI * 2 - 2 * a);
    const side = Math.pow(Math.sin(phi), 2);
    const lobe = Math.cos(phi * 8);
    const y = 0.2 - (0.3 + 0.12 * side) * v + 0.045 * (lobe - 1) * v * v * v;
    const r = 0.19 + 0.07 * Math.sin(v * Math.PI / 2) + (0.08 + 0.2 * side + 0.36 * Math.pow(Math.max(0, -Math.cos(phi)), 1.5)) * Math.pow(v, 2.2) + 0.04 * lobe * v * v + 0.012 * Math.cos(phi * 16) * v;
    p.set(Math.sin(phi) * r, y - 0.05 * Math.max(0, -Math.cos(phi)) * v, Math.cos(phi) * r * 0.9 - 0.05);
  };
  place(shell(paramGeo(64, 16, mantleFn), cloth, liningH), hood, 0, 0, 0);
  // 縁取り（淡いクリーム色の細い線）
  const edgeM = basic(0xe8dcc8, 1);
  const edgeLine = (pts, rad, closed = false) => place(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, closed), pts.length * 2, rad, 5, closed), edgeM), hood, 0, 0, 0);
  const ep = new THREE.Vector3();
  const sample = (fn, u, v, k = 1.012) => { fn(u, v, ep); return new THREE.Vector3(ep.x * k, ep.y, ep.z * k + 0.002); };
  {
    const arch = [];
    for (let i = 0; i <= 24; i++) arch.push(sample(capFn, 1, 1 - (1 - CAP_V0) * i / 24));
    for (let i = 1; i <= 24; i++) arch.push(sample(capFn, 0, CAP_V0 + (1 - CAP_V0) * i / 24));
    edgeLine(arch, 0.0026);
    for (const u of [0, 1]) { const l = []; for (let i = 0; i <= 16; i++) l.push(sample(mantleFn, u, 0.4 + 0.6 * i / 16)); edgeLine(l, 0.0026); }
    const rim1 = [], rim2 = [];
    for (let i = 0; i <= 96; i++) { rim1.push(sample(capFn, 0.06 + 0.88 * i / 96, 1, 1.003)); rim2.push(sample(mantleFn, i / 96, 1, 1.003)); }
    edgeLine(rim1, 0.0025); edgeLine(rim2, 0.0025);
  }
  // 額の渦巻き: 分け目から顔の横へ流れ、目の高さで内側に巻く大きな房（根元は薄紫、先は白）
  {
    // フード前面の位置を調べて、その少し手前を通す
    const grid = [];
    for (let a = 0; a <= 160; a++) for (let b = 0; b <= 50; b++) { capFn(a / 160, b / 50, ep); if (ep.z > -0.05) grid.push(ep.x, ep.y, ep.z); }
    const frontZ = (x, y) => {
      let z = headRad(y) * HEAD_Z * Math.sqrt(Math.max(0, 1 - Math.pow(x / Math.max(0.001, headRad(y)), 2)));
      for (let i = 0; i < grid.length; i += 3) if (Math.abs(grid[i] - x) < 0.014 && Math.abs(grid[i + 1] - y) < 0.014 && grid[i + 2] > z) z = grid[i + 2];
      return z;
    };
    const xy = [[0.0, 0.272], [-0.06, 0.272], [-0.12, 0.258], [-0.175, 0.228], [-0.212, 0.19], [-0.22, 0.155], [-0.205, 0.125], [-0.178, 0.113], [-0.152, 0.126], [-0.145, 0.15], [-0.156, 0.17], [-0.172, 0.166]].map(([x, y]) => [x * 0.86, 0.262 + (y - 0.272) * 0.97]);
    const zs = xy.map(([x, y]) => frontZ(x, y));
    for (let n = 0; n < 3; n++) for (let i = 0; i < zs.length; i++) zs[i] = Math.max(zs[i], ((zs[i - 1] ?? zs[i]) + (zs[i + 1] ?? zs[i])) / 2);
    const pts = xy.map(([x, y], i) => new THREE.Vector3(x, y, zs[i] + 0.012));
    const curve = new THREE.CatmullRomCurve3(pts);
    const N = 80, M = 8;
    const fr = curve.computeFrenetFrames(N, false);
    const pos = [], col = [], idx = [];
    const c0 = new THREE.Color(P.skin).lerp(new THREE.Color(P.glow.c2), 0.45).lerp(new THREE.Color(0xffffff), 0.08), c1 = new THREE.Color(P.curl), cc = new THREE.Color();
    const cp = new THREE.Vector3();
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      curve.getPointAt(t, cp);
      const rad = 0.0065 + 0.0055 * Math.sin(Math.min(1, t * 4) * Math.PI / 2) - 0.0055 * t;
      cc.copy(c0).lerp(c1, sstep(0.02, 0.45, t));
      for (let k = 0; k <= M; k++) {
        const a = (k / M) * Math.PI * 2;
        const cx = Math.cos(a) * rad, cy = Math.sin(a) * rad * 0.7;
        pos.push(cp.x + fr.normals[i].x * cx + fr.binormals[i].x * cy, cp.y + fr.normals[i].y * cx + fr.binormals[i].y * cy, cp.z + fr.normals[i].z * cx + fr.binormals[i].z * cy);
        col.push(cc.r, cc.g, cc.b);
      }
    }
    for (let i = 0; i < N; i++) for (let k = 0; k < M; k++) {
      const a = i * (M + 1) + k, b = a + 1, c = a + M + 1, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
    const cg = new THREE.BufferGeometry();
    cg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    cg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    cg.setIndex(idx);
    place(mesh(cg, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })), hood, 0, 0, 0);
    const end = pts[pts.length - 1];
    place(mesh(new THREE.SphereGeometry(0.02, 12, 10), curlM), hood, end.x, end.y, end.z + 0.002);
  }
  // 耳（先の尖った葉形。先はクリーム色、根元に淡い桃色の斑点）
  const earProfile = [[0.001, 0], [0.03, 0.012], [0.052, 0.07], [0.062, 0.13], [0.056, 0.19], [0.034, 0.25], [0.012, 0.295], [0.001, 0.315]];
  const earCurve = new THREE.SplineCurve(earProfile.map(([x, y]) => new THREE.Vector2(x, y))).getPoints(24);
  const earGeo = lathe(earCurve.map((q) => [q.x, q.y]), 18);
  const earRad = (y) => { for (let i = 1; i < earCurve.length; i++) if (y <= earCurve[i].y) return earCurve[i].x; return 0.001; };
  const ec = P.ear.map((c) => new THREE.Color(c));
  const earBase = new THREE.Color(P.skin).lerp(new THREE.Color(P.ear[0]), 0.12);
  const col = new Float32Array(earGeo.attributes.position.count * 3);
  const tmp = new THREE.Color();
  for (let i = 0; i < earGeo.attributes.position.count; i++) {
    const t = earGeo.attributes.position.getY(i) / 0.315;
    if (t < 0.3) tmp.copy(earBase).lerp(ec[0], sstep(0.2, 0.3, t)); else if (t < 0.58) tmp.copy(ec[0]).lerp(ec[1], (t - 0.3) / 0.28); else tmp.copy(ec[1]).lerp(ec[2], Math.min(1, (t - 0.58) / 0.3));
    col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
  }
  earGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const earM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0, emissive: 0x2a1820 });
  const dotM = basic(P.dots, 1.1);
  const EAR_Z = 0.55, EAR_Y = 0.06, EAR_S = 0.92;
  for (const s of [-1, 1]) {
    const key = s < 0 ? 'earR' : 'earL';
    const ear = joint(key, head, s * 0.066, 0.325, 0.085);
    base[key] = [0.06, 0, s * -0.37];
    ear.rotation.set(...base[key]);
    place(mesh(new THREE.CylinderGeometry(0.014, 0.026, 0.08, 12), skin), ear, 0, 0.025, 0);
    const leaf = new THREE.Group();
    place(leaf, ear, 0, EAR_Y, 0, 0, 0, 0, EAR_S);
    place(mesh(earGeo, earM), leaf, 0, 0, 0, 0, 0, 0, [1.1, 1, EAR_Z]);
    const rows = [[-0.5, 0.5], [-1, 0, 1], [-1.5, -0.5, 0.5, 1.5]];
    rows.forEach((cs, row) => {
      for (const c of cs) {
        const x = c * 0.025, y = 0.018 + row * 0.03 + Math.abs(c) * 0.003;
        const rr = earRad(y);
        if (Math.abs(x) > rr * 0.86) continue;
        const z = EAR_Z * Math.sqrt(rr * rr - x * x) + 0.001;
        place(mesh(new THREE.SphereGeometry(1, 8, 6), dotM), leaf, x, y, z, 0, 0, c * -0.12, [0.009, 0.013, 0.004]);
      }
    });
  }

  // ---------- 腕（先が大きな釣鐘の袖） ----------
  const sleeveGeo = paramGeo(40, 12, (u, v, p) => {
    const phi = u * Math.PI * 2;
    // 丸くふくらんだ釣鐘（裾は丸い波）
    const r = 0.026 + 0.225 * Math.pow(Math.sin(v * 2.1), 0.85) + 0.035 * Math.cos(phi * 5) * v * v;
    const y = -0.12 - 0.5 * v + 0.045 * Math.cos(phi * 5) * v * v * v;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r);
  });
  const trails = {};
  const sleeves = [];
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.092, 0.445, 0);
    j[R ? 'armR' : 'armL'] = arm;
    place(mesh(taperCapsule(0.22, 0.026, 0.021, 10), skin), arm, 0, 0, 0);
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.22, 0);
    j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(taperCapsule(0.14, 0.021, 0.019, 10), skin), fore, 0, 0, 0);
    const sl = new THREE.Group(); sl.userData.keep = true;
    place(sl, fore, 0, 0, 0, 0.3, 0, s * 0.75);
    place(shell(sleeveGeo, cloth, lining), sl, 0, 0, 0);
    // 袖の奥をふさぐ（腕の先や穴が見えないように）
    place(mesh(new THREE.CircleGeometry(0.06, 16), basic(P.glow.c2, 0.9, { side: THREE.DoubleSide })), sl, 0, -0.2, 0, Math.PI / 2, 0, 0);
    sleeves.push(sl);
    const a = new THREE.Object3D(); a.position.set(0, -0.05, 0); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.58, 0); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }

  // ---------- スカート ----------
  const skirt = new THREE.Group(); skirt.userData.keep = true;
  hips.add(skirt);
  // 上段: 花びら状のペプラム（桃色の縁取り）
  const pep = (u, v, p) => {
    const phi = u * Math.PI * 2;
    let r = 0.055 + 0.35 * Math.pow(Math.sin(v * Math.PI / 2), 0.72);
    r *= 1 + 0.1 * Math.cos(phi * 5) * v * v;
    const y = 0.3 - 0.36 * Math.pow(v, 1.1) + 0.055 * Math.cos(phi * 5) * v * v;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * 0.9);
  };
  place(shell(paramGeo(60, 12, pep), cloth, lining), skirt, 0, 0, 0);
  const rimPts = [];
  const q = new THREE.Vector3();
  for (let i = -36; i <= 36; i++) { pep(((i + 120) % 120) / 120, 0.985, q); rimPts.push(q.clone().multiplyScalar(1.004)); } // 縁の線は前側だけ
  place(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rimPts, false), 120, 0.003, 5, false), edgeM), skirt, 0, 0, 0);
  for (const s of [-1, 1]) {
    const u = s < 0 ? 0.93 : 0.07;
    pep(u, 0.5, q);
    const phi = u * Math.PI * 2;
    place(mesh(new THREE.SphereGeometry(1, 12, 8), markM), skirt, q.x * 1.02, q.y + 0.01, q.z * 1.02, -0.9, phi, 0, [0.03, 0.017, 0.008]);
  }
  // 下段: 前が開いた大きな釣鐘（内側が光る）
  const L0 = 1.05;
  const lowGeo = paramGeo(64, 18, (u, v, p) => {
    const phi = L0 + u * (Math.PI * 2 - 2 * L0);
    // 風船のように丸くふくらむ釣鐘。ふくらみは後ろ寄りで、前の縁は切れ上がって脚が見える
    const e = Math.min(u, 1 - u) * (Math.PI * 2 - 2 * L0);
    const front = 1 - sstep(0, 1.1, e);
    const r = 0.12 + 0.39 * Math.pow(Math.sin(v * 2.05), 0.9) + 0.03 * Math.cos(phi * 7) * v * v;
    const y = 0.14 - (0.82 - 0.34 * front) * v + 0.045 * Math.cos(phi * 7) * v * v * v;
    p.set(Math.sin(phi) * r * 1.02, y, Math.cos(phi) * r * 0.9 - 0.03 - 0.02 * v);
  });
  place(shell(lowGeo, cloth, lining), skirt, 0, 0, 0);

  // ---------- 脚（太ももが太く、先が尖る） ----------
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.08, 0.02, 0);
    j[R ? 'legR' : 'legL'] = leg;
    place(mesh(lathe([[0.001, 0.06], [0.05, 0.04], [0.074, -0.02], [0.079, -0.1], [0.068, -0.24], [0.045, -0.37], [0.034, -0.44], [0.001, -0.47]], 16), skin), leg, 0, 0, 0, 0, 0, 0, [1.3, 1, 1.2]);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.44, 0);
    j[R ? 'shinR' : 'shinL'] = shin;
    place(mesh(lathe([[0.001, 0.03], [0.033, 0.01], [0.038, -0.1], [0.032, -0.22], [0.02, -0.34], [0.012, -0.42], [0.001, -0.48]], 14), skin), shin, 0, 0, 0, 0, 0, 0, [1.4, 1, 1.5]);
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.48, 0.02); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
  }

  // ---------- 漆黒の弓（通常必殺ワザ中だけ左手に現れる） ----------
  const bow = new THREE.Group(); bow.userData.keep = true;
  bow.visible = false;
  j.foreL.add(bow);
  bow.position.set(0, -0.36, 0);
  const bowMat = gloss(0x0a0510, { rough: 0.2, metal: 0.6, env: 1.2, emissive: new THREE.Color(0x1a0630) });
  const bowGlow = basic(P.glow.c2, 1.4);
  const limb = [];
  for (let i = 0; i <= 16; i++) {
    const t = i / 16 * 2 - 1; // -1..1（下端→上端）
    const z = t * 0.52;
    const y = -0.13 * (1 - t * t) + 0.05 * Math.pow(Math.abs(t), 6); // 前へ弓なり、先端は反り返る
    limb.push(new THREE.Vector3(0, y, z));
  }
  bow.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(limb), 40, 0.02, 6), bowMat));
  bow.add(place(mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.14, 8), bowMat), new THREE.Group(), 0, -0.13, 0, Math.PI / 2, 0, 0));
  for (const zz of [-0.52, 0.52]) {
    const tip = mesh(new THREE.ConeGeometry(0.028, 0.12, 6), bowGlow);
    tip.position.set(0, 0.05, zz + Math.sign(zz) * 0.05); tip.rotation.x = Math.sign(zz) * Math.PI / 2;
    bow.add(tip);
  }
  bow.add(place(mesh(new THREE.OctahedronGeometry(0.035, 0), bowGlow), new THREE.Group(), 0, -0.15, 0));
  // 弦（引き具合で形が変わる）と、つがえた矢
  const strPos = new Float32Array(9);
  const strGeo = new THREE.BufferGeometry();
  strGeo.setAttribute('position', new THREE.BufferAttribute(strPos, 3));
  const string = new THREE.Line(strGeo, new THREE.LineBasicMaterial({ color: new THREE.Color(P.glow.line).multiplyScalar(1.3) }));
  string.frustumCulled = false;
  bow.add(string);
  const nocked = new THREE.Group();
  nocked.add(place(mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.6, 5), basic(0x14081c)), new THREE.Group(), 0, -0.3, 0));
  nocked.add(place(mesh(new THREE.ConeGeometry(0.04, 0.12, 6), bowGlow), new THREE.Group(), 0, -0.62, 0, Math.PI, 0, 0));
  bow.add(nocked);
  const setBowDraw = (d) => {
    const ny = 0.05 + d * 0.32;
    strPos.set([0, 0.05, -0.52, 0, ny, 0, 0, 0.05, 0.52]);
    strGeo.attributes.position.needsUpdate = true;
    nocked.position.y = ny;
  };
  setBowDraw(0);

  mergeStatic(root);

  // ---------- 虹色のリボン（ワールド空間でなびく） ----------
  const wc = P.wisp.map((c) => new THREE.Color(c));
  const wispColor = (t, out) => {
    if (t < 0.14) out.copy(wc[0]);
    else if (t < 0.3) out.copy(wc[0]).lerp(wc[1], (t - 0.14) / 0.16);
    else if (t < 0.5) out.copy(wc[1]);
    else if (t < 0.64) out.copy(wc[1]).lerp(wc[2], (t - 0.5) / 0.14);
    else out.copy(wc[2]).lerp(wc[3], Math.min(1, (t - 0.64) / 0.12));
    out.multiplyScalar(1.05);
  };
  const wispGroup = new THREE.Group();
  const wisps = [-1, 1].map((s) => {
    const tube = new FlowTube({
      segments: 24, radial: 6, segLen: 0.06, flat: 0.3, colors: wispColor,
      radius: (t) => 0.008 + 0.048 * sstep(0.14, 0.5, t) * (t < 0.92 ? 1 : 1 - (t - 0.92) / 0.08 * 0.6),
    });
    tube.waveAmp = 0.09; tube.waveFreq = 16; tube.twist = 2.2;
    tube.mesh.material = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    wispGroup.add(tube.mesh);
    const anchor = new THREE.Object3D();
    anchor.position.set(s * 0.3, 0.1, -0.05);
    head.add(anchor);
    return { tube, anchor, s };
  });

  const orbPoint = new THREE.Object3D(); orbPoint.position.set(0, 0.25, 0.55); body.add(orbPoint);
  const shadow = blobShadow(P.shadow, P.ring, 1.25);
  const rig = { j, base, hipY: ILLUMINE_HIP, flare: 0 };
  const tmpV = new THREE.Vector3(), dir = new THREE.Vector3();
  let time = 0;

  return {
    root, rig, trails, worldObjects: [wispGroup], orbPoint, shadow,
    height: 1.75, headY: 2.2,
    trailColor: variant ? 0x6fe8ff : 0xff7ae0,
    update(dt, ctx) {
      time += dt;
      lining.uniforms.time.value = time;
      liningH.uniforms.time.value = time;
      // スカートの広がり・なびき
      const f = rig.flare;
      skirt.scale.set(1 + f * 0.3, 1 - f * 0.18, 1 + f * 0.3);
      const yaw = root.rotation.y;
      const fwd = ctx.vx * Math.sin(yaw);
      skirt.rotation.x += (Math.max(-0.35, Math.min(0.35, -fwd * 1.6)) + Math.max(-0.15, Math.min(0.2, ctx.vy * 0.8)) - skirt.rotation.x) * 0.15;
      hood.rotation.x += (Math.max(-0.07, Math.min(0.07, -fwd * 0.4)) - hood.rotation.x) * 0.12;
      for (const sl of sleeves) sl.scale.setScalar(1 + f * 0.2);
      root.updateMatrixWorld(true);
      for (const w of wisps) {
        w.anchor.getWorldPosition(tmpV);
        w.tube.waveT = time * 5 + w.s;
        if (!w.tube.inited || ctx.snap) {
          dir.set(w.s * 0.7, -0.7, -0.1).applyQuaternion(root.quaternion).normalize();
          w.tube.reset(tmpV, dir);
        }
        dir.set(w.s, -0.25, -0.2).applyQuaternion(root.quaternion).normalize();
        w.tube.simulate(tmpV, (i, t, fo) => {
          const out = 0.0021 * (1 - t * 0.2);
          fo.x = dir.x * out;
          fo.y = -0.0027 + Math.sin(time * 2.3 - t * 6) * 0.0009 + t * 0.0016;
          fo.z = dir.z * out;
        }, 0.84);
      }
      wispGroup.visible = root.visible;
    },
    setBow(on, draw = 0, arrow = true) {
      bow.visible = on;
      nocked.visible = on && arrow;
      setBowDraw(draw);
    },
    setFlash(color, a) {
      flashMats.forEach((m, i) => {
        m.emissive.copy(baseEmissive[i]);
        if (a > 0) m.emissive.lerp(color, a * 0.8);
      });
      lining.uniforms.flash.value.set(color.r, color.g, color.b, a * 0.6);
      liningH.uniforms.flash.value.copy(lining.uniforms.flash.value);
    },
    dispose() {
      wispGroup.parent && wispGroup.parent.remove(wispGroup);
      disposeTree(root);
      disposeTree(wispGroup);
    },
  };
}
