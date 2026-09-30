// イルミネ: 宵闇の蛾姫（参考画像 05〜08 準拠）
// 艶のある闇色の細い体、きのこ傘のような二段フード、釣鐘の袖、二段スカート。
// 布の外側は闇色、内側は水面のように光る紫。フードの脇から虹色のリボンがなびく。
import * as THREE from 'three';
import { gloss, basic, lathe, shell, place, mesh, mergeStatic, joint, paramGeo, glowLining, blobShadow } from './kit.js';
import { taperCapsule, FlowTube, disposeTree } from './common.js';

const VARIANTS = [
  {
    skin: 0x2f1e3a, eye: 0xffa6e2, mark: 0xff86cc, curl: 0xffe6f2,
    glow: { c1: 0x3f35ff, c2: 0x9a3dff, c3: 0xff3fc8, line: 0xe8c8ff, bright: 1.1, scale: 9 },
    ear: [0xf06aa8, 0xffb898, 0xfff0c8], dots: 0xff4fae,
    wisp: [0x9a4dff, 0xff5c9e, 0xffb08a, 0xfff2cc], shadow: 0x14041f, ring: 0x9a4dff,
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
  const skin = gloss(P.skin, { rough: 0.28, metal: 0.25, env: 1.1, emissive: new THREE.Color(P.skin).multiplyScalar(0.15) });
  const cloth = skin;
  const lining = glowLining(P.glow);
  const markM = basic(P.mark, 1.25);
  const eyeM = basic(P.eye, 1.7);
  const curlM = basic(P.curl, 1.1);
  const flashMats = [skin];
  const baseEmissive = flashMats.map((m) => m.emissive.clone());

  const body = joint('body', root, 0, ILLUMINE_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 胴（くびれた細身） ----------
  place(mesh(lathe([[0.001, -0.02], [0.08, 0.0], [0.07, 0.1], [0.05, 0.22], [0.056, 0.3], [0.078, 0.38], [0.086, 0.43], [0.07, 0.49], [0.036, 0.53], [0.026, 0.6], [0.001, 0.62]], 20), skin), torso, 0, 0, 0, 0, 0, 0, [1, 1, 0.78]);
  // 胸の桃色の模様（斜めの楕円2つと点）
  for (const s of [-1, 1]) place(mesh(new THREE.SphereGeometry(1, 12, 8), markM), torso, s * 0.038, 0.43, 0.064, 0, s * 0.35, s * -0.55, [0.022, 0.011, 0.008]);
  place(mesh(new THREE.SphereGeometry(1, 10, 8), markM), torso, 0, 0.35, 0.052, 0, 0, 0, [0.011, 0.011, 0.006]);
  place(mesh(new THREE.TorusGeometry(0.029, 0.0035, 6, 20), curlM), torso, 0, 0.565, 0.0, Math.PI / 2 + 0.25, 0, 0);

  // ---------- 頭 ----------
  const head = joint('head', torso, 0, 0.55, 0); j.head = head;
  place(mesh(lathe([[0.001, -0.005], [0.05, 0.005], [0.095, 0.05], [0.117, 0.115], [0.113, 0.18], [0.088, 0.232], [0.045, 0.26], [0.001, 0.265]], 24), skin), head, 0, 0, 0, 0, 0, 0, [1, 1, 0.94]);
  // 目（つり上がったアーモンド形）
  for (const s of [-1, 1]) {
    place(mesh(new THREE.SphereGeometry(1, 16, 10), eyeM), head, s * 0.05, 0.11, 0.094, 0, s * 0.42, s * 0.36, [0.046, 0.029, 0.016]);
    place(mesh(new THREE.SphereGeometry(0.006, 8, 6), basic(0xffffff, 1.4)), head, s * 0.058, 0.12, 0.108);
  }
  // 額の渦巻き
  const spiral = [];
  for (let i = 0; i <= 40; i++) {
    const a = (i / 40) * Math.PI * 3.2;
    const r = 0.034 * (1 - i / 48);
    spiral.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r + (i < 6 ? (6 - i) * 0.006 : 0), 0));
  }
  place(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(spiral.reverse()), 50, 0.0055, 6), curlM), head, -0.055, 0.215, 0.085, -0.3, 0.35, 0);

  // フード上段（きのこの傘）
  const hood = new THREE.Group(); hood.userData.keep = true;
  place(hood, head, 0, 0, -0.01);
  const capGeo = paramGeo(48, 12, (u, v, p) => {
    const phi = u * Math.PI * 2;
    const drop = 0.26 - 0.06 * Math.cos(phi);
    const y = 0.44 - drop * Math.pow(v, 1.15) + 0.02 * Math.cos(phi * 7) * v * v * v;
    let r = 0.27 * Math.pow(Math.sin(Math.min(1, v * 1.05) * Math.PI / 2), 0.75) + 0.035 * Math.pow(v, 4);
    r += 0.012 * Math.cos(phi * 7) * v * v * v;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * 0.95);
  });
  place(shell(capGeo, cloth, lining), hood, 0, 0, 0);
  // フード下段（顔の前が開いたケープ、左右が大きな釣鐘状に垂れる）
  const F0 = 0.72;
  const mantleGeo = paramGeo(56, 16, (u, v, p) => {
    const phi = F0 + u * (Math.PI * 2 - 2 * F0);
    const side = Math.pow(Math.sin(phi), 2);
    const L = 0.2 + 0.13 * side;
    const y = 0.23 - L * v + 0.035 * Math.cos(phi * 8) * v * v * v;
    let r = 0.25 + (0.08 + 0.24 * side) * Math.pow(v, 1.3) + 0.06 * Math.sin(Math.PI * v);
    r += 0.018 * Math.cos(phi * 8) * v * v;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * 0.88 - 0.02);
  });
  place(shell(mantleGeo, cloth, lining), hood, 0, 0, 0);
  // 耳（先がクリーム色、根元に桃色の水玉）
  const earProfile = [[0.001, 0], [0.035, 0.015], [0.052, 0.07], [0.053, 0.14], [0.04, 0.2], [0.018, 0.25], [0.001, 0.27]];
  const earGeo = lathe(earProfile, 14);
  const ec = P.ear.map((c) => new THREE.Color(c));
  const col = new Float32Array(earGeo.attributes.position.count * 3);
  const tmp = new THREE.Color();
  for (let i = 0; i < earGeo.attributes.position.count; i++) {
    const t = earGeo.attributes.position.getY(i) / 0.27;
    if (t < 0.45) tmp.copy(ec[0]).lerp(ec[1], t / 0.45); else tmp.copy(ec[1]).lerp(ec[2], (t - 0.45) / 0.55);
    col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
  }
  earGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const earM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.45, metalness: 0, emissive: 0x201018 });
  const dotM = basic(P.dots, 1.2);
  for (const s of [-1, 1]) {
    const key = s < 0 ? 'earR' : 'earL';
    const ear = joint(key, head, s * 0.1, 0.4, -0.03);
    base[key] = [-0.12, 0, s * -0.36];
    ear.rotation.set(...base[key]);
    place(mesh(new THREE.CylinderGeometry(0.018, 0.026, 0.07, 10), skin), ear, 0, 0.0, 0);
    place(mesh(earGeo, earM), ear, 0, 0.03, 0, 0, 0, 0, [1.3, 1.3, 0.55]);
    for (let k = 0; k < 8; k++) {
      const row = k < 4 ? 0 : 1, c = k % 4;
      place(mesh(new THREE.SphereGeometry(0.009, 8, 6), dotM), ear, (c - 1.5) * 0.017, 0.07 + row * 0.022, 0.022, 0, 0, 0, [1, 1, 0.5]);
    }
  }

  // ---------- 腕（先が大きな釣鐘の袖） ----------
  const sleeveGeo = paramGeo(40, 12, (u, v, p) => {
    const phi = u * Math.PI * 2;
    const r = 0.028 + 0.17 * Math.pow(v, 1.5) + 0.018 * Math.cos(phi * 5) * v * v;
    const y = -0.08 - 0.32 * v + 0.03 * Math.cos(phi * 5) * v * v * v;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r);
  });
  const trails = {};
  const sleeves = [];
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.085, 0.45, 0);
    j[R ? 'armR' : 'armL'] = arm;
    place(mesh(taperCapsule(0.22, 0.026, 0.021, 10), skin), arm, 0, 0, 0);
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.22, 0);
    j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(taperCapsule(0.14, 0.021, 0.02, 10), skin), fore, 0, 0, 0);
    const sl = new THREE.Group(); sl.userData.keep = true;
    place(sl, fore, 0, 0, 0, -0.35, 0, s * 0.45);
    place(shell(sleeveGeo, cloth, lining), sl, 0, 0, 0);
    sleeves.push(sl);
    const a = new THREE.Object3D(); a.position.set(0, -0.05, 0); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.45, 0); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }

  // ---------- スカート ----------
  const skirt = new THREE.Group(); skirt.userData.keep = true;
  hips.add(skirt);
  // 上段: 花びら状のペプラム（桃色の縁取り）
  const pep = (u, v, p) => {
    const phi = u * Math.PI * 2;
    let r = 0.055 + 0.34 * Math.pow(Math.sin(v * Math.PI / 2), 1.1);
    r *= 1 + 0.08 * Math.cos(phi * 5) * v * v;
    const y = 0.3 - 0.36 * Math.pow(v, 1.1) + 0.05 * Math.cos(phi * 5) * v * v;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * 0.9);
  };
  place(shell(paramGeo(60, 12, pep), cloth, lining), skirt, 0, 0, 0);
  const rimPts = [];
  const q = new THREE.Vector3();
  for (let i = 0; i <= 120; i++) { pep(i / 120, 0.985, q); rimPts.push(q.clone().multiplyScalar(1.004)); }
  place(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rimPts, true), 160, 0.006, 5, true), markM), skirt, 0, 0, 0);
  for (const s of [-1, 1]) {
    const u = s < 0 ? 0.93 : 0.07;
    pep(u, 0.62, q);
    const phi = u * Math.PI * 2;
    place(mesh(new THREE.SphereGeometry(1, 12, 8), markM), skirt, q.x * 1.02, q.y + 0.01, q.z * 1.02, -0.9, phi, 0, [0.04, 0.022, 0.008]);
  }
  // 下段: 前が開いた大きな釣鐘（内側が光る）
  const L0 = 1.35;
  const lowGeo = paramGeo(56, 14, (u, v, p) => {
    const phi = L0 + u * (Math.PI * 2 - 2 * L0);
    let r = 0.13 + 0.37 * Math.pow(v, 0.8) + 0.025 * Math.cos(phi * 6) * v * v;
    const y = 0.14 - 0.5 * v + 0.075 * Math.cos(phi * 6) * v * v * v;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * 0.86 - 0.03);
  });
  place(shell(lowGeo, cloth, lining), skirt, 0, 0, 0);

  // ---------- 脚（太ももが太く、先が尖る） ----------
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.055, 0.02, 0);
    j[R ? 'legR' : 'legL'] = leg;
    place(mesh(lathe([[0.001, 0.06], [0.05, 0.04], [0.074, -0.02], [0.079, -0.1], [0.068, -0.24], [0.045, -0.37], [0.034, -0.44], [0.001, -0.47]], 16), skin), leg, 0, 0, 0, 0, 0, 0, [0.86, 1, 0.86]);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.44, 0);
    j[R ? 'shinR' : 'shinL'] = shin;
    place(mesh(lathe([[0.001, 0.03], [0.033, 0.01], [0.038, -0.1], [0.032, -0.22], [0.02, -0.34], [0.012, -0.42], [0.001, -0.48]], 14), skin), shin, 0, 0, 0, 0, 0, 0, [1, 1, 1.15]);
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.48, 0.02); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
  }

  mergeStatic(root);

  // ---------- 虹色のリボン（ワールド空間でなびく） ----------
  const wc = P.wisp.map((c) => new THREE.Color(c));
  const wispColor = (t, out) => {
    if (t < 0.4) out.copy(wc[0]).lerp(wc[1], t / 0.4);
    else if (t < 0.72) out.copy(wc[1]).lerp(wc[2], (t - 0.4) / 0.32);
    else out.copy(wc[2]).lerp(wc[3], (t - 0.72) / 0.28);
    out.multiplyScalar(1.05);
  };
  const wispGroup = new THREE.Group();
  const wisps = [-1, 1].map((s) => {
    const tube = new FlowTube({
      segments: 18, radial: 6, segLen: 0.052, flat: 0.3, colors: wispColor,
      radius: (t) => 0.026 + 0.03 * Math.sin(Math.min(1, t * 1.1) * Math.PI * 0.9 + 0.2),
    });
    tube.waveAmp = 0.06; tube.waveFreq = 16; tube.twist = 2.2;
    tube.mesh.material = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    wispGroup.add(tube.mesh);
    const anchor = new THREE.Object3D();
    anchor.position.set(s * 0.26, 0.08, -0.06);
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
      // スカートの広がり・なびき
      const f = rig.flare;
      skirt.scale.set(1 + f * 0.3, 1 - f * 0.18, 1 + f * 0.3);
      const yaw = root.rotation.y;
      const fwd = ctx.vx * Math.sin(yaw);
      skirt.rotation.x += (Math.max(-0.35, Math.min(0.35, -fwd * 1.6)) + Math.max(-0.15, Math.min(0.2, ctx.vy * 0.8)) - skirt.rotation.x) * 0.15;
      hood.rotation.x += (Math.max(-0.3, Math.min(0.3, -fwd * 1.2)) - hood.rotation.x) * 0.12;
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
          const out = 0.0017 * (1 - t * 0.2);
          fo.x = dir.x * out;
          fo.y = -0.0022 + Math.sin(time * 2.3 - t * 6) * 0.0009 + t * 0.0012;
          fo.z = dir.z * out;
        }, 0.84);
      }
      wispGroup.visible = root.visible;
    },
    setFlash(color, a) {
      flashMats.forEach((m, i) => {
        m.emissive.copy(baseEmissive[i]);
        if (a > 0) m.emissive.lerp(color, a * 0.8);
      });
      lining.uniforms.flash.value.set(color.r, color.g, color.b, a * 0.6);
    },
    dispose() {
      wispGroup.parent && wispGroup.parent.remove(wispGroup);
      disposeTree(root);
      disposeTree(wispGroup);
    },
  };
}
