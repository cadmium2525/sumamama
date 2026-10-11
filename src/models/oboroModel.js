// オボロゲソウ: 全身が半透明の水草（参考画像24〜27 準拠）。
// しずく形の大きな球根から根の足が生え、左右の大きな葉を手や羽のように使う。頭には3本の茎の先に花が咲く。
// 中央の花は、ドリルのワザのあいだ花びらをすぼめて回る（setDrill）。
import * as THREE from 'three';
import { place, mesh, mergeStatic, joint, paramGeo, blobShadow, canvasTex } from './kit.js';
import { disposeTree } from './common.js';

const VARIANTS = [
  { base: '#8a9c96', band: '#1c5fd8', band2: '#3aa8f0', tint: 0xb8c4c4, yellow: 0xf2c030, emis: 0x0c2840 },
  { base: '#a898ac', band: '#b84ac8', band2: '#e898f8', tint: 0xffffff, yellow: 0xf2e060, emis: 0x300c40 },
];

export const OBORO_HIP = 0.52;
const SCALE = 0.86;

function radial(pts) {
  const sm = new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y))).getPoints(200);
  const y0 = pts[pts.length - 1][1], y1 = pts[0][1];
  const r = (y) => { for (let i = 1; i < sm.length; i++) if (y >= sm[i].y) { const p = sm[i - 1], q = sm[i]; return Math.max(0, p.x + (q.x - p.x) * (p.y - y) / Math.max(1e-6, p.y - q.y)); } return 0; };
  return { r, yOf: (v) => y0 + (y1 - y0) * (0.5 + 0.5 * Math.cos(Math.PI * v)) };
}

export function buildOboro(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  // 水のゆらぎの帯模様（体じゅうで共用）
  const gelTex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = P.base; g.fillRect(0, 0, w, h);
    let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 9; i++) {
      const y = (i + r() * 0.6) / 9 * h, t = 6 + r() * 16;
      g.fillStyle = i % 3 === 0 ? P.band : i % 3 === 1 ? P.band2 : '#dff0f8'; g.globalAlpha = i % 3 === 2 ? 0.45 : 0.6 + r() * 0.3;
      g.beginPath(); g.moveTo(0, y);
      for (let x = 0; x <= w; x += 16) g.lineTo(x, y + Math.sin(x * 0.05 + i) * 7);
      for (let x = w; x >= 0; x -= 16) g.lineTo(x, y + t + Math.sin(x * 0.04 + i * 2) * 6);
      g.closePath(); g.fill();
    }
    g.globalAlpha = 1;
  });
  gelTex.wrapS = gelTex.wrapT = THREE.RepeatWrapping;
  const gel = new THREE.MeshStandardMaterial({ map: gelTex, color: P.tint, roughness: 0.15, metalness: 0, envMapIntensity: 0.45, transparent: true, opacity: 0.62, emissive: P.emis, side: THREE.DoubleSide });
  const leafTex = gelTex.clone(); leafTex.repeat.set(0.6, 0.5); leafTex.needsUpdate = true;
  const petalTex = gelTex.clone(); petalTex.repeat.set(1, 1.1); petalTex.needsUpdate = true;
  const leafM = new THREE.MeshStandardMaterial({ map: leafTex, color: P.tint, roughness: 0.2, metalness: 0, envMapIntensity: 0.4, transparent: true, opacity: 0.56, emissive: P.emis, side: THREE.DoubleSide });
  const petalM = new THREE.MeshStandardMaterial({ map: petalTex, color: P.tint, roughness: 0.2, metalness: 0, envMapIntensity: 0.4, transparent: true, opacity: 0.62, emissive: P.emis, side: THREE.DoubleSide });
  const yellow = new THREE.MeshStandardMaterial({ color: P.yellow, roughness: 0.5, emissive: new THREE.Color(P.yellow).multiplyScalar(0.3) });
  const flashMats = [gel, leafM, petalM];

  // 曲線に沿って太さの変わる管（茎や根）
  const zA = new THREE.Vector3(0, 0, 1), tC = new THREE.Vector3(), tT = new THREE.Vector3(), tN = new THREE.Vector3(), tB = new THREE.Vector3();
  const tube = (pts, r0, r1, segV = 14) => {
    const curve = new THREE.CatmullRomCurve3(pts.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    return paramGeo(8, segV, (u, v, q) => {
      curve.getPoint(v, tC); curve.getTangent(v, tT); tN.crossVectors(tT, zA); if (tN.lengthSq() < 1e-6) tN.set(1, 0, 0); tN.normalize(); tB.crossVectors(tT, tN).normalize();
      const r = r0 + (r1 - r0) * v, a = u * Math.PI * 2;
      q.copy(tC).addScaledVector(tN, Math.cos(a) * r).addScaledVector(tB, Math.sin(a) * r);
    });
  };

  const fig = new THREE.Group(); fig.userData.keep = true; fig.scale.setScalar(SCALE); root.add(fig);
  const body = joint('body', fig, 0, OBORO_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 球根（しずく形。下がふくらみ、上は細い首になる） ----------
  const B = radial([[0.0, 1.1], [0.055, 1.08], [0.06, 0.98], [0.075, 0.88], [0.13, 0.78], [0.25, 0.66], [0.36, 0.54], [0.405, 0.4], [0.35, 0.2], [0.245, 0.08], [0.125, 0.02], [0.0, 0.0]]);
  place(mesh(paramGeo(32, 26, (u, v, p) => { const phi = (u - 0.5) * Math.PI * 2, y = B.yOf(v), r = B.r(y); p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * 0.92); }), gel), torso, 0, 0, 0);
  // への字の口
  place(mesh(new THREE.BoxGeometry(0.12, 0.006, 0.006), new THREE.MeshBasicMaterial({ color: 0x6a8a9a, transparent: true, opacity: 0.7 })), torso, 0, 0.3, 0.37);

  // ---------- 根の足（前の2本は legR / legL と shinR / shinL で動く。後ろの2本は腰に付く） ----------
  const trails = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.07, 0.03, 0.05); j[R ? 'legR' : 'legL'] = leg;
    place(mesh(tube([[0, 0, 0], [s * 0.02, -0.12, 0.02], [s * 0.2, -0.2, 0.06]], 0.05, 0.044), gel), leg, 0, 0, 0);
    const shin = joint(R ? 'shinR' : 'shinL', leg, s * 0.2, -0.2, 0.06); j[R ? 'shinR' : 'shinL'] = shin;
    place(mesh(tube([[0, 0, 0], [s * 0.0, -0.14, 0.0], [s * 0.02, -0.26, 0.03], [s * 0.12, -0.31, 0.14], [s * 0.32, -0.31, 0.32], [s * 0.5, -0.28, 0.52]], 0.044, 0.005, 22), gel), shin, 0, 0, 0);
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(s * 0.5, -0.28, 0.52); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
    // 後ろの根
    place(mesh(tube([[s * 0.06, 0.03, -0.05], [s * 0.1, -0.1, -0.08], [s * 0.2, -0.2, -0.12], [s * 0.22, -0.36, -0.14], [s * 0.25, -0.48, -0.2], [s * 0.36, -0.5, -0.36], [s * 0.5, -0.47, -0.54]], 0.048, 0.005, 26), gel), hips, 0, 0, 0);
  }

  // ---------- 葉（手や羽になる。付け根側は armR / armL、先側は foreR / foreL） ----------
  // 葉は関節から -y へ伸びる。待機ではほぼ真横へ広げる（姿勢の z 回転）
  const leafShape = (t0, t1) => {
    const L = 1.2, W = 0.235;
    // 付け根は細い柄、3〜4割のところがいちばん広く、先は尖る。縁には先へ向いた切れ込み
    const w = (t) => { if (t < 0.08) return 0.022; const x = (t - 0.08) / 0.92; return 0.022 * (1 - x) + W * 2.75 * Math.pow(x, 0.6) * Math.pow(1 - x, 0.9) * (x > 0.2 ? 0.6 + 0.4 * ((x * 5) % 1) : 1); };
    const sh = new THREE.Shape(), n = 40;
    for (let i = 0; i <= n; i++) { const t = t0 + (t1 - t0) * i / n; const x = w(t), y = -(t - t0) * L; i ? sh.lineTo(x, y) : sh.moveTo(x, y); }
    for (let i = n; i >= 0; i--) { const t = t0 + (t1 - t0) * i / n; sh.lineTo(-w(t), -(t - t0) * L); }
    sh.closePath();
    const g = new THREE.ExtrudeGeometry(sh, { depth: 0.012, bevelEnabled: false }); g.translate(0, 0, -0.006);
    return g;
  };
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.13, 0.9, 0); j[R ? 'armR' : 'armL'] = arm;
    place(mesh(leafShape(0, 0.5), leafM), arm, 0, 0, 0);
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.6, 0); j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(leafShape(0.5, 1), leafM), fore, 0, 0, 0);
    const a = new THREE.Object3D(); a.position.set(0, -0.1, 0); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.58, 0); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }

  // ---------- 花（3本の茎の先に、とがった花びら5枚の花。中央が顔） ----------
  const flowers = [];
  const flower = (parent, x, y, z, rx, ry, size) => {
    const f = new THREE.Group(); f.userData.keep = true; f.position.set(x, y, z); f.rotation.set(rx, ry, 0); parent.add(f);
    const spin = new THREE.Group(); f.add(spin);
    const sh = new THREE.Shape(); sh.moveTo(0, 0.02); sh.bezierCurveTo(0.16, 0.04, 0.17, 0.2, 0.1, 0.24); sh.lineTo(0, 0.36); sh.lineTo(-0.1, 0.24); sh.bezierCurveTo(-0.17, 0.2, -0.16, 0.04, 0, 0.02);
    const pg = new THREE.ExtrudeGeometry(sh, { depth: 0.01, bevelEnabled: false });
    const pivots = [];
    for (let k = 0; k < 5; k++) {
      const hold = new THREE.Group(); hold.rotation.z = k / 5 * Math.PI * 2; spin.add(hold);
      const pv = new THREE.Group(); pv.rotation.x = 0.35; hold.add(pv); pivots.push(pv);
      pv.add(new THREE.Mesh(pg, petalM));
    }
    const c = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), new THREE.MeshStandardMaterial({ color: 0xe8f4ff, roughness: 0.3, transparent: true, opacity: 0.85, emissive: 0x284a80 })); c.scale.z = 0.5; spin.add(c);
    for (const k of [-1, 1]) { const st = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.11, 5), yellow); st.position.set(k * 0.035, 0.01, 0.07); st.rotation.set(Math.PI / 2 - 0.3, 0, k * -0.5); spin.add(st); }
    f.scale.setScalar(size);
    const o = { f, spin, pivots }; flowers.push(o); return o;
  };
  const head = joint('head', torso, 0, 1.08, 0); j.head = head;
  place(mesh(tube([[0, -0.04, 0], [0.0, 0.22, 0.0], [0.0, 0.42, 0.03]], 0.04, 0.026), gel), head, 0, 0, 0);
  const face = flower(head, 0, 0.46, 0.07, -0.3, 0, 1.15);
  const headTip = new THREE.Object3D(); headTip.position.set(0, 0.5, 0.3); head.add(headTip);
  const headBase = new THREE.Object3D(); headBase.position.set(0, 0.3, 0.0); head.add(headBase);
  trails.head = [headBase, headTip];
  for (const [s, ex, ey] of [[-1, -0.66, 0.2], [1, 0.62, 0.48]]) {
    const e = joint(s < 0 ? 'earR' : 'earL', torso, s * 0.04, 1.04, 0); j[s < 0 ? 'earR' : 'earL'] = e;
    place(mesh(tube([[0, -0.02, 0], [ex * 0.25, 0.06, s * 0.02], [ex * 0.6, ey * 0.35, s * 0.05], [ex * 0.92, ey * 0.8, 0.0], [ex, ey, 0.03]], 0.034, 0.02), gel), e, 0, 0, 0);
    flower(e, ex, ey + 0.02, 0.06, -0.3, s * 0.5, 1.15);
  }

  mergeStatic(root);

  const baseEmissive = flashMats.map((m) => m.emissive.clone());
  const rig = { j, base, hipY: OBORO_HIP, flare: 0 };
  const orbPoint = new THREE.Object3D(); orbPoint.position.set(0, 0.5, 0.8); body.add(orbPoint);
  const shadow = blobShadow(0x000000, null, 1.1);
  let t = 0, drill = 0, drillOn = false;

  return {
    root, rig, trails, worldObjects: [], orbPoint, shadow, face: face.f,
    height: 1.9, headY: 2.45,
    trailColor: variant ? 0xf0a8ff : 0x9fe0ff,
    update(dt, ctx) {
      t += dt;
      if (ctx.snap) drill = drillOn ? 1 : 0;
      drill += ((drillOn ? 1 : 0) - drill) * 0.3;
      // 花はゆっくり揺れる。ドリルのあいだ、中央の花は花びらをすぼめて高速で回る
      flowers.forEach((o, i) => {
        const d = i === 0 ? drill : 0;
        const fold = 0.35 + Math.sin(t * 1.6 + i * 2) * 0.06 + d * 0.9;
        for (const pv of o.pivots) pv.rotation.x = fold;
        o.spin.rotation.z += dt * (0.5 + d * 42);
      });
    },
    setDrill(on) { drillOn = on; },
    setFlash(color, a) {
      flashMats.forEach((m, i) => { m.emissive.copy(baseEmissive[i]); if (a > 0) m.emissive.lerp(color, a * 0.8); });
    },
    dispose() { disposeTree(root); },
  };
}
