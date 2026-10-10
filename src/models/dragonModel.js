// ドラゴン: 筋骨たくましい紅蓮の翼竜（参考画像 11〜14 準拠）
// 赤い体にクリーム色の蛇腹、星形の角の冠、コウモリ翼（表は黄土色・裏は赤）、先端に黄色い棘のある長い尻尾。
import * as THREE from 'three';
import { gloss, basic, lathe, shell, place, mesh, mergeStatic, joint } from './kit.js';
import { taperCapsule, disposeTree } from './common.js';
import { blobShadow } from './kit.js';

const VARIANTS = [
  { red: 0x8e150c, dark: 0x560a06, belly: 0xc09a50, membrane: 0x9c7a42, claw: 0xf4ecf0, spike: 0xffd22a, frill: 0xa8802c, eye: 0x5e8a2e },
  { red: 0x24408a, dark: 0x142656, belly: 0xc6d4e6, membrane: 0x5a8ab8, claw: 0xf0f4ff, spike: 0x5fe6ff, frill: 0x8fd8ff, eye: 0xffd24a },
];

export const DRAGON_HIP = 1.26;

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
    this.mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.02, envMapIntensity: 0.45, flatShading: true });
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
    this.tip.scale.setScalar(2.0);
    this._t = new THREE.Vector3(); this._n = new THREE.Vector3(); this._b = new THREE.Vector3();
  }
  // lift: 上下の反り、swing: 左右の振り、time: 揺らぎ
  update(lift, swing, time) {
    const { n, pts } = this;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const w = Math.sin(time * 2.2 - t * 4) * 0.08 * t;
      const ang = swing * t * 1.6 + w;
      const back = 1.95 * t;
      const y = 0.02 - 2.3 * t + 1.3 * t * t + lift * t * t * 1.2; // 垂れて地面を這い、先だけ少し上がる
      pts[i].set(Math.sin(ang) * back, y, -Math.cos(ang) * back - 0.12);
    }
    const T = this._t, N = this._n, B = this._b, up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n, i + 1)];
      T.subVectors(b, a).normalize();
      N.crossVectors(T, up).normalize();
      B.crossVectors(N, T).normalize();
      let r = 0.2 * Math.pow(1 - t, 0.9) + 0.018;
      if (i % 2 === 1) r *= 1.16;
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
  // 面の角が立つ彫りの深い体（フラットシェーディング）
  const red = gloss(P.red, { rough: 0.6, metal: 0.02, env: 0.45, emissive: new THREE.Color(P.dark).multiplyScalar(0.1) });
  red.flatShading = true; // 面の角が立つ彫りの深い体
  const belly = gloss(P.belly, { rough: 0.55, metal: 0.03, env: 0.5 });
  const claw = gloss(P.claw, { rough: 0.3, metal: 0.05, env: 0.8 });
  const frill = gloss(P.frill, { rough: 0.5, metal: 0.1, env: 0.6, emissive: new THREE.Color(P.frill).multiplyScalar(0.06), side: THREE.DoubleSide });
  const mouthM = gloss(0x5a0808, { rough: 0.6 });
  const tongue = gloss(0xd8470e, { rough: 0.7, env: 0.3 });
  const eyeM = basic(P.eye, 1.0);
  const memFront = new THREE.MeshStandardMaterial({ color: P.membrane, roughness: 0.75, metalness: 0, envMapIntensity: 0.5, side: THREE.FrontSide });
  const memBack = new THREE.MeshStandardMaterial({ color: new THREE.Color(P.red).multiplyScalar(0.82), roughness: 0.95, metalness: 0, envMapIntensity: 0.15, side: THREE.BackSide });
  const flashMats = [red, belly, frill];
  const baseEmissive = flashMats.map((m) => m.emissive.clone());

  const body = joint('body', root, 0, DRAGON_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 腰 ----------
  place(mesh(new THREE.SphereGeometry(0.25, 10, 7), red), hips, 0, 0.02, -0.02, 0, 0, 0, [1.0, 0.8, 0.95]);
  // 尻尾（腰に付け根）
  const tail = new Tail(P);
  const tailRoot = new THREE.Group(); tailRoot.userData.keep = true;
  tail.mesh.userData.keep = true; tail.tip.userData.keep = true;
  tailRoot.add(tail.mesh, tail.tip);
  tailRoot.position.set(0, 0.02, -0.08);
  hips.add(tailRoot);
  const tailCtl = new THREE.Object3D(); j.wisp = tailCtl; root.add(tailCtl);

  // ---------- 胴（逆三角形の厚い胸） ----------
  place(mesh(lathe([[0.15, 0.0], [0.16, 0.12], [0.22, 0.3], [0.35, 0.48], [0.4, 0.6], [0.33, 0.71], [0.18, 0.78], [0.12, 0.8]], 10), red), torso, 0, 0, 0, 0, 0, 0, [0.82, 1, 0.74]);
  for (const s of [-1, 1]) {
    place(mesh(new THREE.SphereGeometry(1, 7, 5), red), torso, s * 0.13, 0.57, 0.17, 0, 0, s * -0.2, [0.16, 0.13, 0.11]); // 胸筋
    place(mesh(new THREE.SphereGeometry(1, 7, 5), red), torso, s * 0.24, 0.68, -0.02, 0, 0, s * 0.4, [0.15, 0.12, 0.15]); // 僧帽
    place(mesh(new THREE.SphereGeometry(1, 6, 5), red), torso, s * 0.16, 0.3, 0.12, 0, 0, 0, [0.08, 0.15, 0.085]); // 腹斜筋
  }
  // 蛇腹（首から腹へ）
  for (let i = 0; i < 9; i++) {
    const y = 0.72 - i * 0.082;
    const w = 0.2 - i * 0.008;
    const r = [0.2, 0.28, 0.35, 0.35, 0.3, 0.25, 0.23, 0.2, 0.19][i];
    place(mesh(new THREE.SphereGeometry(1, 14, 6), belly), torso, 0, y, r * 0.74 + (i < 4 ? 0.035 : 0.0), -0.12, 0, 0, [w * 1.2, 0.058, 0.07]);
  }
  // 腹の帯を股まで続ける
  for (let i = 0; i < 3; i++) place(mesh(new THREE.SphereGeometry(1, 12, 6), belly), hips, 0, 0.0 - i * 0.075, 0.2 - i * 0.03, 0.25 + i * 0.25, 0, 0, [0.15 - i * 0.02, 0.05, 0.06]);
  // 背中の山形の板（暗い赤の板が背骨に沿って重なる）
  const redDark = red.clone(); redDark.color = new THREE.Color(P.red).lerp(new THREE.Color(P.dark), 0.55);
  for (let i = 0; i < 5; i++) {
    const c = mesh(new THREE.ConeGeometry(0.2 - i * 0.012, 0.2, 4), redDark);
    place(c, torso, 0, 0.2 + i * 0.125, -[0.17, 0.21, 0.27, 0.32, 0.28][i], Math.PI - 0.15, 0, 0, [1, 1, 0.22]);
  }
  // 背中の山形の稜
  for (let i = 0; i < 4; i++) {
    const c = mesh(new THREE.ConeGeometry(0.1, 0.16, 4), red);
    place(c, torso, 0, 0.3 + i * 0.12, -0.24 - (i === 2 ? 0.02 : 0), -1.9, 0, 0, [1, 1, 0.45]);
  }

  // ---------- 頭（首ごと） ----------
  // くさび形の頭。星形に広がる5本の角、金色の頬ヒレ、開いた口の奥に橙の舌。
  const head = joint('head', torso, 0, 0.74, 0.04); j.head = head;
  place(mesh(taperCapsule(0.3, 0.13, 0.17, 8), red), head, 0, 0.28, 0.06, -0.35, 0, 0); // 長い首
  for (let i = 0; i < 4; i++) place(mesh(new THREE.SphereGeometry(1, 8, 5), belly), head, 0, 0.04 + i * 0.075, 0.125 + i * 0.035, -0.3, 0, 0, [0.085, 0.04, 0.045]); // 喉の蛇腹
  const skull = new THREE.Group();
  place(skull, head, 0, 0.4, 0.13, 0.05, 0, 0, 1.08);
  // 四角すい台を前へ向けて「くさび」を作る
  const wedge = (pts, parent, x, y, z, rx, sx, sy, mat = red) => {
    const g = lathe(pts, 4);
    g.rotateY(Math.PI / 4);
    return place(mesh(g, mat), parent, x, y, z, rx, 0, 0, [sx, 1, sy]);
  };
  // 頭蓋（後ろが広く、前へすぼまる）
  place(mesh(new THREE.SphereGeometry(0.15, 10, 8), red), skull, 0, 0.0, 0.02, 0, 0, 0, [1.05, 0.8, 1.25]);
  // 上あご（鼻面）
  { const g = lathe([[0.125, 0.0], [0.105, 0.12], [0.078, 0.25], [0.045, 0.33], [0.0, 0.35]], 6); place(mesh(g, red), skull, 0, 0.0, 0.1, Math.PI / 2 - 0.08, 0, 0, [0.72, 1, 0.6]); }
  // 下あご（大きく開く）
  const jaw = new THREE.Group();
  place(jaw, skull, 0, -0.06, 0.06, 0.68, 0, 0);
  { const g = lathe([[0.1, 0.0], [0.08, 0.12], [0.05, 0.24], [0.015, 0.3], [0.0, 0.31]], 6); place(mesh(g, red), jaw, 0, -0.02, 0.0, Math.PI / 2, 0, 0, [0.95, 1, 0.4]); }
  // 口の中と舌
  // 口の中（上あごの裏と下あごの内側を暗い面にする。四角い穴には見せない）
  { const g = lathe([[0.11, 0.0], [0.092, 0.12], [0.066, 0.25], [0.03, 0.32]], 6); place(mesh(g, mouthM), skull, 0, -0.03, 0.1, Math.PI / 2 - 0.08, 0, 0, [0.66, 1, 0.3]); }
  { const g = lathe([[0.09, 0.0], [0.07, 0.12], [0.042, 0.24], [0.01, 0.29]], 6); place(mesh(g, mouthM), jaw, 0, -0.002, 0.0, Math.PI / 2, 0, 0, [0.9, 1, 0.3]); }
  place(mesh(new THREE.SphereGeometry(0.075, 8, 6), mouthM), skull, 0, -0.05, 0.08, 0, 0, 0, [1, 0.8, 1]);
  place(mesh(new THREE.SphereGeometry(1, 8, 6), tongue), jaw, 0, 0.02, 0.11, 0, 0, 0, [0.046, 0.02, 0.11]);
  for (const s of [-1, 1]) {
    // 歯（上あごと下あごの縁）
    for (let k = 0; k < 6; k++) {
      const z = 0.15 + k * 0.038, x = s * (0.085 - k * 0.011);
      place(mesh(new THREE.ConeGeometry(0.005, 0.018, 4), claw), skull, x * 0.82, -0.058 - k * 0.003, z, Math.PI, 0, 0);
      place(mesh(new THREE.ConeGeometry(0.0045, 0.016, 4), claw), jaw, s * (0.048 - k * 0.006), 0.022, 0.05 + k * 0.04, 0, 0, 0);
    }
    // 眉の稜（にらむ目）と緑の目
    place(mesh(new THREE.BoxGeometry(0.1, 0.035, 0.12), red), skull, s * 0.085, 0.085, 0.12, 0.35, s * -0.25, s * 0.5);
    place(mesh(new THREE.SphereGeometry(0.03, 8, 6), mouthM), skull, s * 0.083, 0.05, 0.148, 0, 0, 0, [1.3, 0.8, 0.8]);
    place(mesh(new THREE.SphereGeometry(0.014, 8, 6), eyeM), skull, s * 0.085, 0.05, 0.168, 0, 0, s * 0.4, [1.5, 0.38, 0.7]);
    // 鼻孔のふくらみ
    // 頬のヒレ（金色）
    const fs = new THREE.Shape();
    fs.moveTo(0, 0.02); fs.lineTo(0.11, 0.07); fs.lineTo(0.085, 0.015); fs.lineTo(0.125, -0.02); fs.lineTo(0.08, -0.035); fs.lineTo(0.1, -0.085); fs.lineTo(0, -0.05);
    const fg = new THREE.ShapeGeometry(fs); // 薄い膜
    place(mesh(fg, frill), skull, s * 0.12, -0.01, 0.0, 0, s < 0 ? Math.PI + 0.75 : -0.75, s * 0.1, 1.1);
    // 角: 斜め上へ広がる角と、横へ張る角
    place(mesh(new THREE.ConeGeometry(0.07, 0.22, 5), red), skull, s * 0.11, 0.13, -0.05, -0.3, 0, s * -0.9, [1, 1, 0.5]);
    place(mesh(new THREE.ConeGeometry(0.045, 0.14, 5), red), skull, s * 0.14, 0.04, -0.06, -0.3, 0, s * -1.25, [1, 1, 0.5]);
  }
  place(mesh(new THREE.ConeGeometry(0.085, 0.3, 5), red), skull, 0, 0.21, -0.05, -0.3, 0, 0, [1, 1, 0.5]); // 中央の角
  place(mesh(new THREE.SphereGeometry(1, 8, 5), red), skull, 0, 0.09, -0.07, -0.3, 0, 0, [0.17, 0.09, 0.04]); // 角の間をつなぐ冠
  place(mesh(new THREE.ConeGeometry(0.03, 0.1, 4), red), skull, 0, 0.07, 0.36, 0.5, 0, 0); // 鼻先の小角

  // ---------- 腕 ----------
  const trails = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.33, 0.6, 0);
    j[R ? 'armR' : 'armL'] = arm;
    arm.scale.setScalar(1.15); // 長い腕
    place(mesh(new THREE.SphereGeometry(0.12, 8, 6), red), arm, 0, 0.0, 0);
    place(mesh(taperCapsule(0.3, 0.095, 0.078, 8), red), arm, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(1, 7, 5), red), arm, 0, -0.14, 0.05, 0, 0, 0, [0.105, 0.14, 0.105]); // 力こぶ
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.3, 0);
    j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(taperCapsule(0.3, 0.085, 0.062, 10), red), fore, 0, 0, 0);
    place(mesh(new THREE.SphereGeometry(1, 7, 5), red), fore, 0, -0.08, -0.02, 0, 0, 0, [0.095, 0.11, 0.09]);
    // 手と爪（開いた鉤爪）
    const hand = new THREE.Group();
    place(hand, fore, 0, -0.3, 0.02, 0, 0, 0, 1.3); // 大きな鉤爪の手
    place(mesh(new THREE.SphereGeometry(1, 12, 10), red), hand, 0, 0, 0, 0, 0, 0, [0.075, 0.065, 0.085]);
    for (let k = 0; k < 4; k++) {
      const f = new THREE.Group();
      place(f, hand, (k - 1.5) * 0.045 * s, -0.04, 0.04, -0.3, 0, (k - 1.5) * 0.22 * s);
      place(mesh(taperCapsule(0.06, 0.022, 0.018, 8), red), f, 0, 0, 0);
      const f2 = new THREE.Group(); place(f2, f, 0, -0.06, 0, -0.5, 0, 0);
      place(mesh(taperCapsule(0.04, 0.018, 0.014, 8), red), f2, 0, 0, 0);
      place(mesh(new THREE.ConeGeometry(0.017, 0.1, 5), claw), f2, 0, -0.075, 0, Math.PI, 0, 0);
    }
    const a = new THREE.Object3D(); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.45, 0.05); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }

  // ---------- 脚（太い腿・踵の蹴爪・白い爪） ----------
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.17, -0.02, 0);
    j[R ? 'legR' : 'legL'] = leg;
    place(mesh(taperCapsule(0.52, 0.19, 0.13, 12), red), leg, 0, 0, 0, 0, 0, 0, [1, 1, 1.3]);
    place(mesh(new THREE.SphereGeometry(1, 10, 8), red), leg, s * 0.07, -0.17, 0.06, 0, 0, 0, [0.15, 0.26, 0.2]);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.53, 0);
    shin.scale.setScalar(1.3); // 長いすねと大きな足
    j[R ? 'shinR' : 'shinL'] = shin;
    // すねは後ろへ流れて踵（飛節）が高く上がり、そこから足先へ下りる
    const seg = (a, b, r0, r1) => {
      const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
      const len = va.distanceTo(vb);
      const g = new THREE.CylinderGeometry(r1, r0, len, 10);
      g.translate(0, len / 2, 0);
      const m = mesh(g, red);
      m.position.copy(va);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), vb.clone().sub(va).normalize());
      shin.add(m);
    };
    place(mesh(new THREE.SphereGeometry(0.13, 10, 8), red), shin, 0, 0, 0);
    seg([0, 0, 0], [0, -0.27, -0.15], 0.125, 0.085);
    place(mesh(new THREE.SphereGeometry(0.09, 10, 8), red), shin, 0, -0.27, -0.15);
    seg([0, -0.27, -0.15], [0, -0.46, 0.03], 0.085, 0.075);
    place(mesh(new THREE.SphereGeometry(1, 8, 6), red), shin, 0, -0.13, -0.11, 0, 0, 0, [0.1, 0.13, 0.09]);
    place(mesh(new THREE.ConeGeometry(0.035, 0.16, 6), claw), shin, 0, -0.27, -0.24, -2.0, 0, 0); // 踵の蹴爪
    const foot = new THREE.Group();
    place(foot, shin, 0, -0.47, 0.05, -0.45, 0, s * -0.42); // 待機姿勢で足裏が水平に接地する
    place(mesh(new THREE.SphereGeometry(1, 10, 6), red), foot, 0, 0, 0.08, 0, 0, 0, [0.16, 0.075, 0.23]);
    for (let k = 0; k < 4; k++) {
      const x = (k - 1.5) * 0.075;
      place(mesh(new THREE.SphereGeometry(1, 10, 8), red), foot, x, -0.01, 0.27, 0, 0, 0, [0.04, 0.04, 0.08]);
      place(mesh(new THREE.ConeGeometry(0.036, 0.15, 5), claw), foot, x, -0.025, 0.37, Math.PI / 2 + 0.3, 0, 0);
    }
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.5, 0.2); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
  }
  trails.tail = [new THREE.Object3D(), new THREE.Object3D()];
  hips.add(trails.tail[0]); hips.add(trails.tail[1]);
  trails.tail[0].position.set(0, 0, -0.5); trails.tail[1].position.set(0, -0.3, -1.6);

  // ---------- 翼（earL/earR ジョイントを翼として使う） ----------
  const wz = (x) => 0.16 * x * x; // 翼端ほど前へ巻き込む
  const wingShape = new THREE.Shape();
  const Rp = [0, 0], E = [0.3, 0.36], W = [0.62, 0.58], M1 = [1.45, 0.56], T1 = [2.1, -0.2], T2 = [1.4, -0.48], T3 = [0.9, -0.2], T4 = [0.58, -0.06], B = [0.2, -0.06];
  const inward = (a, b) => [(a[0] + b[0]) / 2 * 0.55 + W[0] * 0.45, (a[1] + b[1]) / 2 * 0.55 + W[1] * 0.45];
  wingShape.moveTo(...Rp); wingShape.lineTo(...E); wingShape.lineTo(...W); wingShape.quadraticCurveTo(...M1, ...T1);
  for (const [a, b] of [[T1, T2], [T2, T3], [T3, T4], [T4, B]]) wingShape.quadraticCurveTo(...inward(a, b), ...b);
  wingShape.lineTo(...Rp);
  const memGeo = new THREE.ShapeGeometry(wingShape, 10);
  // 膜を少しふくらませる
  const mp = memGeo.attributes.position;
  for (let i = 0; i < mp.count; i++) { const x = mp.getX(i), y = mp.getY(i); mp.setZ(i, wz(x) - 0.08 * Math.sin(Math.min(1, Math.hypot(x - W[0], y - W[1]) / 1.2) * Math.PI)); }
  memGeo.computeVertexNormals();
  const bone = (a, b, r0, r1, parent) => {
    const va = new THREE.Vector3(a[0], a[1], wz(a[0])), vb = new THREE.Vector3(b[0], b[1], wz(b[0]));
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
    base[key] = [-0.3, s * -0.3, s * -0.05]; // 胴の前傾を打ち消して翼を水平に広げる
    wj.rotation.set(...base[key]);
    j[key] = wj;
    const wg = new THREE.Group(); wg.userData.keep = true;
    wg.scale.set(s * 1.35, 1.3, 1.3);
    wj.add(wg);
    wg.add(shell(memGeo, memFront, memBack));
    bone(Rp, E, 0.055, 0.045, wg); bone(E, W, 0.045, 0.035, wg);
    const M2 = [(W[0] + 2 * M1[0] + T1[0]) / 4, (W[1] + 2 * M1[1] + T1[1]) / 4]; // 前縁の骨は外へ弓なり
    bone(W, M2, 0.032, 0.022, wg); bone(M2, T1, 0.022, 0.01, wg);
    for (const t of [T2, T3, T4]) bone(W, t, 0.028, 0.01, wg);
    place(mesh(new THREE.ConeGeometry(0.035, 0.14, 6), claw), wg, W[0], W[1] + 0.06, wz(W[0]), 0, 0, 0);
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
    height: 2.25, headY: 2.7,
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
