// ドラゴン: 筋骨たくましい紅蓮の翼竜（参考画像 11〜14 準拠）
// 赤い体にクリーム色の蛇腹、星形の角の冠、コウモリ翼（表は黄土色・裏は赤）、先端に黄色い棘のある長い尻尾。
import * as THREE from 'three';
import { gloss, basic, lathe, shell, place, mesh, mergeStatic, joint } from './kit.js';
import { taperCapsule, disposeTree } from './common.js';
import { blobShadow } from './kit.js';

const VARIANTS = [
  { red: 0xb01a10, dark: 0x6e0c08, belly: 0xe4b870, membrane: 0xd49a52, claw: 0xf4ecf0, spike: 0xffb21e, frill: 0xf0b040, eye: 0xc8ff5a },
  { red: 0x24408a, dark: 0x142656, belly: 0xc6d4e6, membrane: 0x5a8ab8, claw: 0xf0f4ff, spike: 0x5fe6ff, frill: 0x8fd8ff, eye: 0xffd24a },
];

export const DRAGON_HIP = 0.98;

// 尻尾: 腰から後ろへ伸び、揺れる。裏側はクリーム色、節ごとに段差をつける
class Tail {
  constructor(P, n = 20, radial = 12) {
    this.n = n; this.radial = radial;
    const vc = (n + 1) * radial;
    this.pos = new Float32Array(vc * 3);
    const col = new Float32Array(vc * 3);
    const red = new THREE.Color(P.red), belly = new THREE.Color(P.belly), dark = new THREE.Color(P.dark);
    const c = new THREE.Color();
    for (let i = 0; i <= n; i++) {
      for (let k = 0; k < radial; k++) {
        const a = (k / radial) * Math.PI * 2; // 0 = 上
        const under = Math.cos(a) < -0.35;
        c.copy(under ? belly : red);
        if (i % 2 === 0) c.lerp(dark, under ? 0.18 : 0.25);
        const o = (i * radial + k) * 3;
        col[o] = c.r; col[o + 1] = c.g; col[o + 2] = c.b;
      }
    }
    const idx = [];
    for (let i = 0; i < n; i++) for (let k = 0; k < radial; k++) {
      const a = i * radial + k, b = i * radial + (k + 1) % radial, d = a + radial, e = b + radial;
      idx.push(a, b, d, b, e, d);
    }
    const g = new THREE.BufferGeometry();
    this.attr = new THREE.BufferAttribute(this.pos, 3);
    this.attr.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.attr);
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(idx);
    this.geo = g;
    this.mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.45, metalness: 0.05, envMapIntensity: 0.7 });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false;
    this.pts = Array.from({ length: n + 1 }, () => new THREE.Vector3());
    this.tip = new THREE.Group();
    const sm = new THREE.MeshStandardMaterial({ color: P.spike, emissive: new THREE.Color(P.spike).multiplyScalar(0.35), roughness: 0.3, metalness: 0.2 });
    for (const [ry, rz, len] of [[0, 0, 0.42], [0.55, 0.35, 0.34], [-0.55, 0.35, 0.34], [0.3, -0.5, 0.28], [-0.3, -0.5, 0.28]]) {
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.035, len, 5), sm);
      s.geometry.translate(0, len / 2, 0);
      s.rotation.set(Math.PI / 2 + rz * 0.6, ry, 0);
      this.tip.add(s);
    }
    this._t = new THREE.Vector3(); this._n = new THREE.Vector3(); this._b = new THREE.Vector3();
  }
  // lift: 上下の反り、swing: 左右の振り、time: 揺らぎ
  update(lift, swing, time) {
    const { n, pts } = this;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const w = Math.sin(time * 2.2 - t * 4) * 0.08 * t;
      const ang = swing * t * 1.6 + w;
      const back = 1.75 * t;
      const y = 0.02 - 0.95 * t + 0.55 * t * t + lift * t * t * 1.2;
      pts[i].set(Math.sin(ang) * back, y, -Math.cos(ang) * back - 0.12);
    }
    const T = this._t, N = this._n, B = this._b, up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n, i + 1)];
      T.subVectors(b, a).normalize();
      N.crossVectors(T, up).normalize();
      B.crossVectors(N, T).normalize();
      let r = 0.15 * Math.pow(1 - t, 0.85) + 0.018;
      if (i % 2 === 1) r *= 1.05;
      for (let k = 0; k < this.radial; k++) {
        const ang = (k / this.radial) * Math.PI * 2;
        const cx = Math.sin(ang) * r, cy = Math.cos(ang) * r * 0.9;
        const o = (i * this.radial + k) * 3;
        this.pos[o] = pts[i].x + N.x * cx + B.x * cy;
        this.pos[o + 1] = pts[i].y + N.y * cx + B.y * cy;
        this.pos[o + 2] = pts[i].z + N.z * cx + B.z * cy;
      }
    }
    this.attr.needsUpdate = true;
    this.geo.computeVertexNormals();
    // 先端の棘を尻尾の向きに合わせる
    const last = pts[n], prev = pts[n - 1];
    this.tip.position.copy(last);
    T.subVectors(last, prev).normalize();
    this.tip.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), T);
  }
}

export function buildDragon(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  const red = gloss(P.red, { rough: 0.55, metal: 0.02, env: 0.5, emissive: new THREE.Color(P.dark).multiplyScalar(0.12) });
  const belly = gloss(P.belly, { rough: 0.5, metal: 0.05, env: 0.6 });
  const claw = gloss(P.claw, { rough: 0.3, metal: 0.05, env: 0.8 });
  const frill = gloss(P.frill, { rough: 0.4, metal: 0.1, env: 0.8, emissive: new THREE.Color(P.frill).multiplyScalar(0.12) });
  const mouthM = gloss(0x5a0808, { rough: 0.6 });
  const tongue = gloss(0xff6a3a, { rough: 0.5, emissive: new THREE.Color(0x401000) });
  const eyeM = basic(P.eye, 1.5);
  const memFront = new THREE.MeshStandardMaterial({ color: P.membrane, roughness: 0.6, metalness: 0, envMapIntensity: 0.5, side: THREE.FrontSide });
  const memBack = new THREE.MeshStandardMaterial({ color: P.red, roughness: 0.5, metalness: 0, envMapIntensity: 0.6, side: THREE.BackSide });
  const flashMats = [red, belly, frill];
  const baseEmissive = flashMats.map((m) => m.emissive.clone());

  const body = joint('body', root, 0, DRAGON_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 腰 ----------
  place(mesh(new THREE.SphereGeometry(0.25, 24, 16), red), hips, 0, 0.02, -0.02, 0, 0, 0, [1.0, 0.8, 0.95]);
  // 尻尾（腰に付け根）
  const tail = new Tail(P);
  const tailRoot = new THREE.Group(); tailRoot.userData.keep = true;
  tail.mesh.userData.keep = true; tail.tip.userData.keep = true;
  tailRoot.add(tail.mesh, tail.tip);
  tailRoot.position.set(0, 0.02, -0.08);
  hips.add(tailRoot);
  const tailCtl = new THREE.Object3D(); j.wisp = tailCtl; root.add(tailCtl);

  // ---------- 胴（逆三角形の厚い胸） ----------
  place(mesh(lathe([[0.18, 0.0], [0.2, 0.12], [0.25, 0.3], [0.35, 0.48], [0.4, 0.6], [0.33, 0.71], [0.18, 0.78], [0.12, 0.8]], 28), red), torso, 0, 0, 0, 0, 0, 0, [1, 1, 0.74]);
  for (const s of [-1, 1]) {
    place(mesh(new THREE.SphereGeometry(1, 16, 12), red), torso, s * 0.15, 0.57, 0.17, 0, 0, s * -0.2, [0.17, 0.12, 0.1]); // 胸筋
    place(mesh(new THREE.SphereGeometry(1, 16, 12), red), torso, s * 0.3, 0.68, -0.02, 0, 0, s * 0.4, [0.16, 0.12, 0.15]); // 僧帽
    place(mesh(new THREE.SphereGeometry(1, 12, 10), red), torso, s * 0.2, 0.3, 0.12, 0, 0, 0, [0.09, 0.14, 0.08]); // 腹斜筋
  }
  // 蛇腹（首から腹へ）
  for (let i = 0; i < 9; i++) {
    const y = 0.72 - i * 0.082;
    const w = 0.2 - i * 0.008;
    const r = [0.2, 0.28, 0.35, 0.35, 0.3, 0.25, 0.23, 0.2, 0.19][i];
    place(mesh(new THREE.SphereGeometry(1, 18, 8), belly), torso, 0, y, r * 0.74 + (i < 4 ? 0.04 : 0.0), -0.12, 0, 0, [w, 0.05, 0.06]);
  }
  // 背中の山形の稜
  for (let i = 0; i < 4; i++) {
    const c = mesh(new THREE.ConeGeometry(0.05, 0.13, 4), red);
    place(c, torso, 0, 0.3 + i * 0.12, -0.24 - (i === 2 ? 0.02 : 0), -1.9, 0, 0, [1, 1, 0.45]);
  }

  // ---------- 頭（首ごと） ----------
  const head = joint('head', torso, 0, 0.74, 0.04); j.head = head;
  place(mesh(taperCapsule(0.2, 0.12, 0.15, 14), red), head, 0, 0.18, 0.03, -0.35, 0, 0);
  for (let i = 0; i < 3; i++) place(mesh(new THREE.SphereGeometry(1, 12, 8), belly), head, 0, 0.04 + i * 0.07, 0.13 + i * 0.03, -0.3, 0, 0, [0.085, 0.035, 0.04]);
  const skull = new THREE.Group();
  place(skull, head, 0, 0.3, 0.1, -0.1, 0, 0);
  place(mesh(new THREE.SphereGeometry(0.14, 20, 14), red), skull, 0, 0, 0, 0, 0, 0, [1, 0.88, 1.15]);
  place(mesh(new THREE.SphereGeometry(1, 16, 12), red), skull, 0, -0.01, 0.2, 0, 0, 0, [0.085, 0.065, 0.17]); // 鼻面
  place(mesh(new THREE.SphereGeometry(1, 14, 10), red), skull, 0, -0.11, 0.16, 0.38, 0, 0, [0.075, 0.035, 0.15]); // 下あご
  place(mesh(new THREE.SphereGeometry(1, 12, 8), mouthM), skull, 0, -0.065, 0.16, 0.2, 0, 0, [0.06, 0.04, 0.13]);
  place(mesh(new THREE.SphereGeometry(1, 10, 8), tongue), skull, 0, -0.085, 0.17, 0.3, 0, 0, [0.035, 0.015, 0.09]);
  for (const s of [-1, 1]) {
    for (let k = 0; k < 5; k++) {
      const z = 0.08 + k * 0.05;
      place(mesh(new THREE.ConeGeometry(0.011, 0.04, 4), claw), skull, s * (0.06 - k * 0.005), -0.055, z, Math.PI, 0, 0);
      place(mesh(new THREE.ConeGeometry(0.01, 0.035, 4), claw), skull, s * (0.055 - k * 0.005), -0.095 + k * 0.012, z - 0.01, 0.35, 0, 0);
    }
    // 目と、にらむ眉
    place(mesh(new THREE.SphereGeometry(0.022, 10, 8), eyeM), skull, s * 0.075, 0.04, 0.11, 0, 0, 0, [1, 0.7, 0.6]);
    place(mesh(new THREE.BoxGeometry(0.07, 0.025, 0.08), red), skull, s * 0.07, 0.075, 0.1, 0.2, 0, s * 0.35);
    // 頬のヒレ（黄色）
    const fs = new THREE.Shape();
    fs.moveTo(0, 0); fs.lineTo(0.16, 0.07); fs.lineTo(0.12, 0.0); fs.lineTo(0.17, -0.05); fs.lineTo(0.1, -0.05); fs.lineTo(0.14, -0.1); fs.lineTo(0, -0.04);
    const fg = new THREE.ExtrudeGeometry(fs, { depth: 0.012, bevelEnabled: false });
    place(mesh(fg, frill), skull, s * 0.1, 0.0, 0.02, 0, s < 0 ? Math.PI + 0.5 : -0.5, 0);
    // 角: 横に広がる角と、後ろへ長く伸びる角
    place(mesh(new THREE.ConeGeometry(0.035, 0.26, 6), red), skull, s * 0.08, 0.11, 0.0, -0.3, 0, s * -0.75);
    place(mesh(new THREE.ConeGeometry(0.04, 0.42, 6), red), skull, s * 0.06, 0.08, -0.1, -1.95, 0, s * -0.12);
  }
  place(mesh(new THREE.ConeGeometry(0.045, 0.3, 6), red), skull, 0, 0.16, 0.02, -0.25, 0, 0); // 中央の角
  place(mesh(new THREE.ConeGeometry(0.03, 0.12, 5), red), skull, 0, 0.06, 0.24, 0.9, 0, 0); // 鼻先の小角

  // ---------- 腕 ----------
  const trails = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.4, 0.6, 0);
    j[R ? 'armR' : 'armL'] = arm;
    place(mesh(new THREE.SphereGeometry(0.14, 16, 12), red), arm, 0, 0.0, 0);
    place(mesh(taperCapsule(0.3, 0.1, 0.085, 14), red), arm, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(1, 12, 10), red), arm, 0, -0.14, 0.05, 0, 0, 0, [0.11, 0.14, 0.11]); // 力こぶ
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.3, 0);
    j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(taperCapsule(0.27, 0.095, 0.07, 14), red), fore, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(1, 12, 10), red), fore, 0, -0.08, -0.02, 0, 0, 0, [0.1, 0.11, 0.09]);
    // 手と爪（開いた鉤爪）
    const hand = new THREE.Group();
    place(hand, fore, 0, -0.3, 0.02);
    place(mesh(new THREE.SphereGeometry(1, 12, 10), red), hand, 0, 0, 0, 0, 0, 0, [0.075, 0.065, 0.085]);
    for (let k = 0; k < 4; k++) {
      const f = new THREE.Group();
      place(f, hand, (k - 1.5) * 0.04 * s, -0.04, 0.04, -0.7, 0, (k - 1.5) * 0.12 * s);
      place(mesh(taperCapsule(0.06, 0.022, 0.018, 8), red), f, 0, 0, 0);
      const f2 = new THREE.Group(); place(f2, f, 0, -0.06, 0, -0.7, 0, 0);
      place(mesh(taperCapsule(0.04, 0.018, 0.014, 8), red), f2, 0, 0, 0);
      place(mesh(new THREE.ConeGeometry(0.015, 0.06, 5), claw), f2, 0, -0.06, 0, Math.PI, 0, 0);
    }
    const a = new THREE.Object3D(); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.45, 0.05); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }

  // ---------- 脚（太い腿・踵の蹴爪・白い爪） ----------
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.2, -0.02, 0);
    j[R ? 'legR' : 'legL'] = leg;
    place(mesh(taperCapsule(0.42, 0.16, 0.11, 16), red), leg, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(1, 14, 10), red), leg, s * 0.05, -0.16, 0.04, 0, 0, 0, [0.12, 0.18, 0.13]);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.43, 0);
    j[R ? 'shinR' : 'shinL'] = shin;
    place(mesh(taperCapsule(0.42, 0.11, 0.075, 14), red), shin, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(1, 12, 10), red), shin, 0, -0.14, -0.05, 0, 0, 0, [0.09, 0.14, 0.09]);
    place(mesh(new THREE.ConeGeometry(0.03, 0.14, 6), claw), shin, 0, -0.34, -0.1, -2.3, 0, 0); // 踵の蹴爪
    const foot = new THREE.Group();
    place(foot, shin, 0, -0.47, 0.05);
    place(mesh(new THREE.SphereGeometry(1, 14, 10), red), foot, 0, 0, 0.05, 0, 0, 0, [0.12, 0.06, 0.17]);
    for (let k = 0; k < 4; k++) {
      const x = (k - 1.5) * 0.055;
      place(mesh(new THREE.SphereGeometry(1, 10, 8), red), foot, x, -0.01, 0.18, 0, 0, 0, [0.03, 0.03, 0.06]);
      place(mesh(new THREE.ConeGeometry(0.02, 0.08, 5), claw), foot, x, -0.02, 0.25, Math.PI / 2 + 0.3, 0, 0);
    }
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.5, 0.2); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
  }
  trails.tail = [new THREE.Object3D(), new THREE.Object3D()];
  hips.add(trails.tail[0]); hips.add(trails.tail[1]);
  trails.tail[0].position.set(0, 0, -0.5); trails.tail[1].position.set(0, -0.3, -1.6);

  // ---------- 翼（earL/earR ジョイントを翼として使う） ----------
  const wingShape = new THREE.Shape();
  const Rp = [0, 0], E = [0.5, 0.52], W = [1.05, 0.95], T1 = [1.95, 0.15], T2 = [1.5, -0.3], T3 = [0.95, -0.5], T4 = [0.45, -0.42], B = [0.1, -0.22];
  const inward = (a, b) => [(a[0] + b[0]) / 2 * 0.82 + W[0] * 0.18, (a[1] + b[1]) / 2 * 0.82 + W[1] * 0.18];
  wingShape.moveTo(...Rp); wingShape.lineTo(...E); wingShape.lineTo(...W); wingShape.lineTo(...T1);
  for (const [a, b] of [[T1, T2], [T2, T3], [T3, T4], [T4, B]]) wingShape.quadraticCurveTo(...inward(a, b), ...b);
  wingShape.lineTo(...Rp);
  const memGeo = new THREE.ShapeGeometry(wingShape, 10);
  // 膜を少しふくらませる
  const mp = memGeo.attributes.position;
  for (let i = 0; i < mp.count; i++) { const x = mp.getX(i), y = mp.getY(i); mp.setZ(i, -0.08 * Math.sin(Math.min(1, Math.hypot(x - W[0], y - W[1]) / 1.2) * Math.PI)); }
  memGeo.computeVertexNormals();
  const bone = (a, b, r0, r1, parent) => {
    const va = new THREE.Vector3(a[0], a[1], 0), vb = new THREE.Vector3(b[0], b[1], 0);
    const len = va.distanceTo(vb);
    const g = new THREE.CylinderGeometry(r1, r0, len, 7);
    g.translate(0, len / 2, 0);
    const m = new THREE.Mesh(g, red);
    m.position.copy(va);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), vb.clone().sub(va).normalize());
    parent.add(m);
  };
  const wings = [];
  for (const s of [-1, 1]) {
    const key = s < 0 ? 'earR' : 'earL';
    const wj = joint(key, torso, s * 0.14, 0.64, -0.2);
    base[key] = [0.1, s * 0.22, s * -0.22];
    wj.rotation.set(...base[key]);
    j[key] = wj;
    const wg = new THREE.Group(); wg.userData.keep = true;
    wg.scale.set(s * 1.05, 1.05, 1.05);
    wj.add(wg);
    wg.add(shell(memGeo, memFront, memBack));
    bone(Rp, E, 0.055, 0.045, wg); bone(E, W, 0.045, 0.035, wg);
    for (const t of [T1, T2, T3, T4]) bone(W, t, 0.03, 0.012, wg);
    place(mesh(new THREE.ConeGeometry(0.035, 0.14, 6), claw), wg, W[0], W[1] + 0.06, 0, 0, 0, 0);
    wings.push(wg);
  }

  mergeStatic(root);

  const rig = { j, base, hipY: DRAGON_HIP, flare: 0 };
  const mouth = new THREE.Object3D(); mouth.position.set(0, -0.06, 0.34); skull.add(mouth);
  const orbPoint = mouth;
  const shadow = blobShadow(0x000000, null, 1.5);
  let time = 0, flap = 0;

  return {
    root, rig, trails, worldObjects: [], orbPoint, mouth, shadow,
    height: 2.05, headY: 2.45,
    trailColor: variant ? 0x6fd8ff : 0xffa040,
    update(dt, ctx) {
      time += dt;
      // 尻尾: ポーズ(wisp)の反り・振り＋走行でなびく
      const lift = tailCtl.rotation.x, swing = tailCtl.rotation.y;
      const yaw = root.rotation.y;
      const fwd = (ctx.vx || 0) * Math.sin(yaw);
      tail.update(lift + Math.min(0.4, Math.abs(fwd) * 2), swing, time);
      // 空中で上昇中は羽ばたく
      const want = ctx.air ? (ctx.vy > 0.02 ? 1 : 0.4) : 0;
      flap += (want - flap) * 0.1;
      const f = Math.sin(time * 14) * 0.45 * flap;
      wings[0].rotation.z = -f;
      wings[1].rotation.z = f;
    },
    setFlash(color, a) {
      flashMats.forEach((m, i) => { m.emissive.copy(baseEmissive[i]); if (a > 0) m.emissive.lerp(color, a * 0.8); });
      tail.mat.emissive.setRGB(0, 0, 0);
      if (a > 0) tail.mat.emissive.copy(color).multiplyScalar(a * 0.8);
    },
    dispose() { disposeTree(root); },
  };
}
