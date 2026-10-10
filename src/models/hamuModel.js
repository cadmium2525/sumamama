// ハム: ずんぐりした洋梨体型のうさぎ（参考画像16〜19 準拠）。
// 橙の毛並みに白い腹と口元、こげ茶の前髪と耳先、桃色の耳の内側、太い腕と大きな拳、丸い尻尾。
import * as THREE from 'three';
import { gloss, basic, place, mesh, mergeStatic, joint, paramGeo, blobShadow, canvasTex } from './kit.js';
import { taperCapsule, disposeTree } from './common.js';

const VARIANTS = [
  { fur: '#b47a4e', dark: '#7c4a30', cream: '#d8cab8', tan: '#ae9884', hair: '#523a2e', tip: '#48342a', earLo: '#b08048', mask: '#9a6238', pink: '#d8747a', grey: '#6e5f5a', claw: '#2e2020', eye: '#2e1610' },
  { mask: '#6c7484', fur: '#8f96a4', dark: '#565e6e', cream: '#d8dce4', tan: '#a8aeba', hair: '#303648', tip: '#262c3a', earLo: '#828a9a', pink: '#d888a8', grey: '#5c6474', claw: '#22242c', eye: '#1c2440' },
];

export const HAMU_HIP = 0.62;

// 輪郭（[半径, 高さ] の並び）をなめらかにつなぐ
const profile = (pts) => { const c = new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y))); const v = new THREE.Vector2(); return (t) => { c.getPoint(Math.max(0, Math.min(1, t)), v); return [Math.max(0, v.x), v.y]; }; };

export function buildHamu(variant = 0) {
  const P = VARIANTS[variant % VARIANTS.length];
  const root = new THREE.Group();
  const j = {}, base = {};
  const std = (color, o = {}) => gloss(color, { rough: 0.92, metal: 0, env: 0.25, ...o });
  const fur = std(P.fur), dark = std(P.dark), cream = std(P.cream), hair = std(P.hair), pink = std(P.pink), claw = std(P.claw, { rough: 0.5 });
  hair.flatShading = true;
  const flashMats = [fur, dark, cream];
  const texMat = (tex) => { tex.flipY = false; const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.92, metalness: 0, envMapIntensity: 0.25 }); flashMats.push(m); return m; };
  // 毛の筋
  const strands = (g, w, h, col, n, y0 = 0, y1 = 1) => { g.strokeStyle = col; g.lineWidth = 2; let s = 9; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; for (let i = 0; i < n; i++) { const x = r() * w, y = (y0 + r() * (y1 - y0)) * h; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 6, y + 8 + r() * 10); g.stroke(); } };

  const body = joint('body', root, 0, HAMU_HIP, 0); j.body = body;
  const hips = joint('hips', body); j.hips = hips;
  const torso = joint('torso', hips); j.torso = torso;

  // ---------- 胴（洋梨型。白い腹、濃い色の腰、背中の灰色の模様） ----------
  const BT = 0.78, BB = -0.17; // 首元と股の高さ
  const bodyP = profile([[0.0, BT + 0.02], [0.17, BT - 0.02], [0.27, 0.62], [0.34, 0.44], [0.42, 0.24], [0.47, 0.06], [0.455, -0.06], [0.32, -0.15], [0.0, BB]]);
  const bodyTex = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = P.fur; g.fillRect(0, 0, w, h);
    // 腰から下は濃い色（毛並みのぎざぎざ）
    g.fillStyle = P.dark; g.beginPath(); g.moveTo(0, h);
    for (let i = 0; i <= 32; i++) g.lineTo(i / 32 * w, h * (0.74 + (i & 1 ? 0.035 : 0) + 0.02 * Math.sin(i * 1.7)));
    g.lineTo(w, h); g.closePath(); g.fill();
    strands(g, w, h, 'rgba(120,60,30,0.22)', 220);
    // 白い腹（首元から股まで）と、下腹の灰みがかった部分
    g.fillStyle = P.cream; g.beginPath(); g.moveTo(w * 0.5, h * 0.06);
    g.bezierCurveTo(w * 0.72, h * 0.08, w * 0.7, h * 0.5, w * 0.655, h * 0.74);
    g.bezierCurveTo(w * 0.62, h * 0.9, w * 0.56, h * 0.97, w * 0.5, h * 0.98);
    g.bezierCurveTo(w * 0.44, h * 0.97, w * 0.38, h * 0.9, w * 0.345, h * 0.74);
    g.bezierCurveTo(w * 0.3, h * 0.5, w * 0.28, h * 0.08, w * 0.5, h * 0.06); g.fill();
    g.fillStyle = P.tan; g.beginPath(); g.moveTo(w * 0.4, h * 0.7);
    for (let i = 0; i <= 10; i++) g.lineTo(w * (0.4 + i * 0.02), h * (0.7 + (i & 1 ? 0.03 : 0) + 0.05 * Math.sin(i / 10 * Math.PI)));
    g.bezierCurveTo(w * 0.6, h * 0.9, w * 0.55, h * 0.96, w * 0.5, h * 0.97); g.bezierCurveTo(w * 0.45, h * 0.96, w * 0.4, h * 0.9, w * 0.4, h * 0.7); g.fill();
    // 背中の模様（継ぎ目をまたぐので左右の端に半分ずつ描く）
    g.fillStyle = P.grey;
    for (const x0 of [0, w]) { g.beginPath(); g.moveTo(x0, h * 0.27); g.lineTo(x0 + w * 0.055, h * 0.19); g.lineTo(x0 + w * 0.06, h * 0.31); g.lineTo(x0, h * 0.47); g.lineTo(x0 - w * 0.06, h * 0.31); g.lineTo(x0 - w * 0.055, h * 0.19); g.closePath(); g.fill(); }
  });
  const bodyGeo = paramGeo(36, 22, (u, v, p) => {
    const phi = (u - 0.5) * Math.PI * 2, [r, y] = bodyP(v), c = Math.cos(phi);
    // 腹は前へ張り出し、背中はやや平ら
    const bulge = Math.max(0, c) * 0.07 * Math.exp(-((y - 0.12) ** 2) / 0.07);
    p.set(Math.sin(phi) * r, y, c * r * (c > 0 ? 0.95 : 0.84) + bulge * (r / 0.45));
  });
  place(mesh(bodyGeo, texMat(bodyTex)), torso, 0, 0, 0);
  place(mesh(new THREE.SphereGeometry(0.3, 14, 10), dark), hips, 0, -0.02, -0.02, 0, 0, 0, [1.25, 0.55, 1.0]);
  // 首元の毛
  for (const [x, rz] of [[-0.05, 0.5], [0.04, -0.4], [0, 0]]) place(mesh(new THREE.ConeGeometry(0.035, 0.09, 4), cream), torso, x, 0.72, 0.2, Math.PI - 0.5, 0, rz, [1, 1, 0.5]);
  // 丸い尻尾
  const tail = new THREE.Group(); tail.userData.keep = true; place(tail, torso, 0, 0.16, -0.4, -0.3, 0, 0, 1.1);
  tail.add(new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), fur));
  for (const [x, y, z, rx, rz] of [[0, 0.11, -0.05, -0.6, 0], [0.07, 0.09, -0.03, -0.5, -0.6], [-0.07, 0.09, -0.03, -0.5, 0.6]]) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.1, 4), fur); c.position.set(x, y, z); c.rotation.set(rx, 0, rz); tail.add(c); }

  // ---------- 頭（顔は絵。口元の白い帯、吊り上がった目） ----------
  const head = joint('head', torso, 0, BT - 0.02, 0.02); j.head = head;
  const HH = 0.42, HZ = 0.9;
  const headP = profile([[0.0, HH], [0.15, HH - 0.025], [0.235, 0.31], [0.262, 0.2], [0.25, 0.1], [0.17, 0.025], [0.0, 0.0]]);
  const faceTex = canvasTex(1024, 512, (g, w, h) => {
    const U = w / (Math.PI * 2 * 0.26);
    const X = (x) => w / 2 + x * U, Y = (y) => (1 - y / HH) * h;
    g.fillStyle = P.fur; g.fillRect(0, 0, w, h);
    strands(g, w, h, 'rgba(120,60,30,0.2)', 260);
    g.fillStyle = P.mask; for (const s of [-1, 1]) { g.beginPath(); g.ellipse(X(s * 0.12), Y(0.235), 0.085 * U, 0.05 * U, s * -0.25, 0, 7); g.fill(); }
    // 白い口元（目の下から頬へ広がる帯）
    g.fillStyle = P.cream; g.beginPath(); g.moveTo(X(-0.46), Y(0.15));
    g.bezierCurveTo(X(-0.2), Y(0.2), X(-0.1), Y(0.17), X(-0.035), Y(0.205));
    g.quadraticCurveTo(X(0), Y(0.225), X(0.035), Y(0.205));
    g.bezierCurveTo(X(0.1), Y(0.17), X(0.2), Y(0.2), X(0.46), Y(0.15));
    g.lineTo(X(0.46), Y(-0.02)); g.lineTo(X(-0.46), Y(-0.02)); g.closePath(); g.fill();
    for (const s of [-1, 1]) {
      // 目: こげ茶の楕円。内側が下がった濃いまぶたで怒り顔に
      g.save(); g.translate(X(s * 0.108), Y(0.222)); g.rotate(s * 0.28);
      g.fillStyle = P.eye; g.beginPath(); g.ellipse(0, 0, 0.04 * U, 0.027 * U, 0, 0, 7); g.fill();
      g.fillStyle = '#120806'; g.beginPath(); g.ellipse(0, 0, 0.028 * U, 0.02 * U, 0, 0, 7); g.fill();
      g.restore();
      g.strokeStyle = '#1a0c08'; g.lineWidth = 0.007 * U; g.lineCap = 'round';
      g.beginPath(); g.moveTo(X(s * 0.062), Y(0.224)); g.quadraticCurveTo(X(s * 0.1), Y(0.254), X(s * 0.15), Y(0.252)); g.stroke();
      g.fillStyle = '#fff'; g.beginPath(); g.arc(X(s * 0.108 - 0.012), Y(0.214), 0.008 * U, 0, 7); g.fill();
    }
  });
  const headGeo = paramGeo(36, 18, (u, v, p) => { const phi = (u - 0.5) * Math.PI * 2, [r, y] = headP(v); p.set(Math.sin(phi) * r, y, Math.cos(phi) * r * HZ); });
  place(mesh(headGeo, texMat(faceTex)), head, 0, 0, 0);
  // 口吻、小さな鼻、口
  place(mesh(new THREE.SphereGeometry(1, 12, 10), cream), head, 0, 0.135, 0.185, 0, 0, 0, [0.105, 0.075, 0.075]);
  place(mesh(new THREE.SphereGeometry(1, 8, 6), basic(P.claw)), head, 0, 0.168, 0.252, 0, 0, 0, [0.015, 0.011, 0.01]);
  for (const s of [-1, 1]) place(mesh(new THREE.BoxGeometry(0.03, 0.005, 0.006), basic(0x5a3a30)), head, s * 0.013, 0.108, 0.25, 0, s * 0.3, s * -0.3);
  place(mesh(new THREE.BoxGeometry(0.022, 0.014, 0.006), basic(0xf4f0e6)), head, 0, 0.098, 0.252);
  // 頬の毛（白）と横の毛（橙）
  for (const s of [-1, 1]) {
    for (const [y, len, rz] of [[0.11, 0.13, 1.25], [0.065, 0.11, 1.6], [0.15, 0.1, 1.0]]) place(mesh(new THREE.ConeGeometry(0.045, len, 4), cream), head, s * 0.25, y, 0.03, 0, 0, s * -rz, [1, 1, 0.5]);
    for (const [y, len, rz] of [[0.3, 0.09, 1.0], [0.36, 0.08, 0.7]]) place(mesh(new THREE.ConeGeometry(0.035, len, 4), fur), head, s * (0.235 - (y - 0.3) * 0.5), y, -0.03, 0, 0, s * -rz, [1, 1, 0.5]);
  }
  // こげ茶の前髪（額へ垂れる束と、頭頂の逆毛）
  place(mesh(new THREE.SphereGeometry(1, 10, 8), hair), head, -0.01, 0.375, 0.09, -0.4, 0, 0.1, [0.105, 0.075, 0.17]);
  for (const [x, y, z, len, rx, rz, r] of [[-0.03, 0.29, 0.25, 0.26, 2.85, 0.22, 0.085], [0.045, 0.31, 0.235, 0.19, 2.85, -0.3, 0.06], [-0.09, 0.31, 0.215, 0.17, 2.85, 0.6, 0.05], [0.0, 0.27, 0.262, 0.16, 2.9, -0.05, 0.045], [0.02, 0.43, 0.02, 0.09, -0.5, -0.3, 0.035], [-0.03, 0.42, -0.04, 0.08, -0.9, 0.3, 0.03]]) {
    place(mesh(new THREE.ConeGeometry(r, len, 5), hair), head, x, y, z, rx, 0, rz, [1, 1, 0.55]);
  }

  // ---------- 耳（長く、外向きに開く。内側は桃色、先はこげ茶） ----------
  const earTex = canvasTex(64, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, P.tip); gr.addColorStop(0.48, P.tip); gr.addColorStop(0.54, P.earLo); gr.addColorStop(0.8, P.earLo); gr.addColorStop(1, P.fur);
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  const earM = new THREE.MeshStandardMaterial({ map: earTex, roughness: 0.92, metalness: 0, envMapIntensity: 0.25 });
  const ears = [];
  for (const s of [-1, 1]) {
    const e = joint(s < 0 ? 'earR' : 'earL', head, s * 0.13, 0.36, -0.04); j[s < 0 ? 'earR' : 'earL'] = e;
    base[s < 0 ? 'earR' : 'earL'] = [-0.6, s * 0.4, s * -0.42];
    const sway = new THREE.Group(); sway.userData.keep = true; e.add(sway); ears.push(sway);
    const outer = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 12), earM); outer.scale.set(0.165, 0.44, 0.06); outer.position.set(0, 0.4, 0);
    const inner = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 12), pink); inner.scale.set(0.1, 0.36, 0.03); inner.position.set(s * 0.04, 0.39, 0.04);
    sway.add(outer, inner);
    for (const [x, y, rz] of [[0.09, 0.06, -1.2], [-0.09, 0.07, 1.2]]) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), fur); c.position.set(x, y, 0); c.rotation.z = rz; c.scale.z = 0.5; sway.add(c); }
  }

  // ---------- 腕（太く長い。先へ行くほど太く、拳は濃い色） ----------
  const trails = {}, hands = {};
  for (const s of [-1, 1]) {
    const R = s < 0;
    const arm = joint(R ? 'armR' : 'armL', torso, s * 0.27, 0.6, 0); j[R ? 'armR' : 'armL'] = arm;
    place(mesh(new THREE.SphereGeometry(0.13, 12, 10), fur), arm, 0, 0, 0);
    place(mesh(taperCapsule(0.36, 0.105, 0.11, 12), fur), arm, 0, 0, 0);
    const fore = joint(R ? 'foreR' : 'foreL', arm, 0, -0.36, 0); j[R ? 'foreR' : 'foreL'] = fore;
    place(mesh(new THREE.SphereGeometry(0.112, 10, 8), fur), fore, 0, 0, 0);
    place(mesh(taperCapsule(0.26, 0.115, 0.15, 12), fur), fore, 0, 0, 0);
    // 腕の内側の白い毛
    place(mesh(new THREE.SphereGeometry(1, 8, 8), cream), fore, s * -0.07, -0.12, 0.02, 0, 0, 0, [0.07, 0.17, 0.1]);
    const hand = new THREE.Group(); hand.userData.joint = true; place(hand, fore, 0, -0.32, 0); hands[s] = hand;
    place(mesh(new THREE.SphereGeometry(0.17, 12, 10), fur), hand, 0, 0.02, 0.01, 0, 0, 0, [1, 0.9, 1.05]);
    place(mesh(new THREE.SphereGeometry(0.168, 12, 10), dark), hand, 0, -0.035, 0.015, 0, 0, 0, [1.03, 0.8, 1.08]);
    place(mesh(new THREE.SphereGeometry(0.05, 8, 6), cream), hand, s * -0.12, -0.02, 0.09, 0, 0, 0, [0.8, 1.2, 1]);
    const a = new THREE.Object3D(); a.position.set(0, -0.1, 0); fore.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.48, 0); fore.add(b);
    trails[R ? 'handR' : 'handL'] = [a, b];
  }

  // ---------- 脚（短く太い。三本指に黒い爪） ----------
  for (const s of [-1, 1]) {
    const R = s < 0;
    const leg = joint(R ? 'legR' : 'legL', hips, s * 0.25, -0.02, 0); j[R ? 'legR' : 'legL'] = leg;
    place(mesh(new THREE.SphereGeometry(0.24, 12, 10), dark), leg, 0, -0.02, 0, 0, 0, 0, [1, 1.1, 1.15]);
    place(mesh(taperCapsule(0.2, 0.21, 0.165, 12), dark), leg, 0, 0, 0);
    const shin = joint(R ? 'shinR' : 'shinL', leg, 0, -0.2, 0); j[R ? 'shinR' : 'shinL'] = shin;
    place(mesh(taperCapsule(0.17, 0.165, 0.14, 12), fur), shin, 0, 0, 0);
    const foot = new THREE.Group(); place(foot, shin, 0, -0.21, 0.02);
    place(mesh(new THREE.SphereGeometry(1, 12, 8), fur), foot, 0, 0, 0.09, 0, 0, 0, [0.18, 0.09, 0.23]);
    for (const k of [-1, 0, 1]) {
      place(mesh(new THREE.SphereGeometry(0.07, 8, 6), fur), foot, k * 0.105, -0.01, 0.29 - Math.abs(k) * 0.02);
      place(mesh(new THREE.ConeGeometry(0.05, 0.13, 5), claw), foot, k * 0.105, -0.03, 0.36 - Math.abs(k) * 0.02, Math.PI / 2 + 0.25, 0, 0);
    }
    const a = new THREE.Object3D(); shin.add(a);
    const b = new THREE.Object3D(); b.position.set(0, -0.26, 0.2); shin.add(b);
    trails[R ? 'footR' : 'footL'] = [a, b];
  }

  mergeStatic(root);

  const baseEmissive = flashMats.map((m) => m.emissive.clone());
  const rig = { j, base, hipY: HAMU_HIP, flare: 0 };
  const orbPoint = new THREE.Object3D(); orbPoint.position.set(0, 0.5, 0.8); body.add(orbPoint);
  // おしり（ガスの出どころ）
  const butt = new THREE.Object3D(); butt.position.set(0, 0.0, -0.45); torso.add(butt);
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
