// オボロゲソウ: 全身が半透明の水草。大きな球根に根の足、葉を手や羽のように使って戦う。
// 種を飛ばす種ガン（押しっぱなしで連射）、地面を這って伸びる根、相手をふらふらにする花粉、顔の花のドリルを持つ。
// ジャンプは低いが、葉で羽ばたいて空中で2回跳べる。
import * as THREE from 'three';
import { buildOboro, OBORO_HIP } from '../models/oboroModel.js';
import { makeAnims } from './anims.js';
import { approach, rand } from '../util.js';
import { audio } from '../audio.js';

const hb = (f0, f1, x, y, r, dmg, ang, bkb, kbg, extra = {}) => ({ f: [f0, f1], x, y, r, dmg, ang, bkb, kbg, ...extra });

const AQUA = 0x7fd6ff, POLLEN = 0xf2d040, POLLEN2 = 0xfff4b0;
const PI = Math.PI;

// 葉（armR / armL）は関節から下へ伸びる板。z で上下、y で前後へ振る。
// 待機では羽のように斜め後ろへ上げる（横から見て形が分かる向き）
const WING = { armR: [0, -0.85, -1.85], foreR: [0, 0, -0.15], armL: [0, 0.85, 1.85], foreL: [0, 0, 0.15] };
const OI = { ...WING, legR: [0, 0, 0], shinR: [0, 0, 0], legL: [0, 0, 0], shinL: [0, 0, 0], torso: [0.04, 0, 0], head: [0.1, 0, 0], earR: [0.1, 0, 0], earL: [0.1, 0, 0] };
const AIR = { ...OI, armR: [0, -0.5, -2.2], armL: [0, 0.5, 2.2], legR: [-0.5, 0, 0], shinR: [0.7, 0, 0], legL: [-0.2, 0, 0], shinL: [0.5, 0, 0] };
// 右／左の葉を前へ振り出す
const LEAF_R = { ...OI, armR: [0, 1.25, -1.35], foreR: [0, 0, 0.1], torso: [0.1, 0.4, 0] };
const LEAF_L = { ...OI, armL: [0, -1.25, 1.35], foreL: [0, 0, -0.1], torso: [0.1, -0.4, 0] };
const LEAF_BACK_R = { ...OI, armR: [0, -1.5, -1.4], torso: [0.02, -0.5, 0] };
// 花を前へ突き出す（茎ごと前へ倒す）
const BOW = { ...OI, torso: [0.75, 0, 0], head: [0.55, 0, 0], earR: [0.5, 0, 0], earL: [0.5, 0, 0], armR: [0, -1.1, -1.5], armL: [0, 1.1, 1.5], bz: 0.15 };
const drill = { onStart(ft) { ft.model.setDrill(true); }, onEnd(ft) { ft.model.setDrill(false); } };

function drops(ft, x, y, n = 4, size = 0.35, color = AQUA) {
  for (let i = 0; i < n; i++) ft.battle.effects.spawn({ x: x + rand(-0.2, 0.2), y: y + rand(-0.2, 0.2), z: 0.35, vx: rand(-0.05, 0.05), vy: rand(0.0, 0.07), life: rand(12, 22), size: rand(size * 0.5, size), size1: 0.04, color: i % 2 ? color : 0xeafaff });
}
function pollenFx(ft, x, y, n = 6, size = 0.5) {
  for (let i = 0; i < n; i++) ft.battle.effects.spawn({ x: x + rand(-0.3, 0.3), y: y + rand(-0.3, 0.3), z: 0.35, vx: rand(-0.04, 0.04), vy: rand(-0.01, 0.04), life: rand(18, 30), size: rand(size * 0.4, size), size1: size * 1.2, color: i % 2 ? POLLEN : POLLEN2, additive: false, opacity: 0.55, drag: 0.94 });
}
const facePos = (ft) => ft.model.face.getWorldPosition(ft.battle.tmpV);
// 種（小さな飛び道具）
function seed(ft, o) {
  const p = facePos(ft);
  ft.battle.spawnProjectile(ft, { x: p.x + ft.facing * 0.25, y: p.y, vx: ft.facing * 0.36, vy: -0.004, r: 0.13, dmg: 1.5, ang: 30, bkb: 10, kbg: 12, life: 46, color: 0x5a8a3a, kind: 'seed', ...o });
}
// 花粉の雲。地上の相手に当たると stun フレームのあいだふらふらにする
function pollen(ft, o) {
  ft.battle.spawnProjectile(ft, { vy: 0, r: 0.45, rMax: 0.9, dmg: 3, ang: 70, bkb: 26, kbg: 30, life: 40, stun: 70, color: POLLEN, core: POLLEN2, kind: 'gas', ...o });
}

// 地面を這って伸びる根（見た目だけ。持ち主について動き、伸びて縮む）
class RootWhip {
  constructor(battle, ft, len, grow, hold, back, y = 0.12) {
    this.b = battle; this.ft = ft; this.len = len; this.grow = grow; this.hold = hold; this.back = back; this.y = y; this.t = 0; this.dir = ft.facing;
    this.mat = new THREE.MeshStandardMaterial({ color: 0xb4d4e4, roughness: 0.2, transparent: true, opacity: 0.85, emissive: 0x1c5a8a });
    const g = new THREE.Group();
    for (const k of [-1, 1]) {
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.07, 1, 6), this.mat);
      c.rotation.z = -Math.PI / 2; c.position.set(0.5, 0, k * 0.12); g.add(c);
    }
    g.scale.set(0.01, 1, 1);
    this.mesh = g; battle.scene.add(g);
  }
  update() {
    this.t++;
    const t = this.t, a = this.grow, b = a + this.hold, c = b + this.back;
    const k = t < a ? t / a : t < b ? 1 : Math.max(0, 1 - (t - b) / this.back);
    this.mesh.position.set(this.ft.x + this.dir * 0.2, this.ft.y + this.y, 0.1);
    this.mesh.scale.set(Math.max(0.01, this.len * k) * this.dir, 1 + Math.sin(t * 0.9) * 0.15, 1);
    if (t < a && t % 2 === 0) this.b.effects.dust(this.ft.x + this.dir * (0.2 + this.len * k), this.ft.y, 1, this.dir);
    if (t >= c || this.ft.state !== 'attack') this.b.removeFx(this);
  }
  remove() { this.b.scene.remove(this.mesh); this.mesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); this.mat.dispose(); }
}
// 地面から突き出す根（下スマッシュ・投げ）
class RootSpike {
  constructor(battle, x, y, h, lean, life = 20) {
    this.b = battle; this.t = 0; this.life = life;
    this.mat = new THREE.MeshStandardMaterial({ color: 0xb4d4e4, roughness: 0.2, transparent: true, opacity: 0.85, emissive: 0x1c5a8a });
    const g = new THREE.Group();
    for (const [dx, k, rz] of [[0, 1, 0], [0.16, 0.65, -0.3], [-0.16, 0.6, 0.3]]) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.09, h * k, 6), this.mat); c.position.set(dx - Math.sin(rz) * h * k / 2, Math.cos(rz) * h * k / 2, 0); c.rotation.z = rz; g.add(c); }
    g.position.set(x, y, 0.1); g.rotation.z = lean; g.scale.set(1, 0.01, 1);
    this.mesh = g; battle.scene.add(g);
  }
  update() {
    this.t++;
    this.mesh.scale.y = this.t < 4 ? this.t / 4 : this.t > this.life - 6 ? Math.max(0.01, (this.life - this.t) / 6) : 1;
    if (this.t >= this.life) this.b.removeFx(this);
  }
  remove() { this.b.scene.remove(this.mesh); this.mesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); this.mat.dispose(); }
}
const spike = (ft, x, h, lean, life) => ft.battle.addFx(new RootSpike(ft.battle, x, ft.y, h, lean, life));

const moves = {
  // ---------- 弱・強 ----------
  jab1: {
    total: 18, next: 'jab2', nextWin: [6, 17], trail: 'handR', trailF: [3, 7], sfx: [3, 'whoosh', 0.3],
    hit: [hb(4, 6, 0.85, 1.15, 0.45, 3, 75, 14, 18), hb(4, 6, 0.4, 1.1, 0.4, 3, 75, 14, 18)],
    anim: [[0, OI], [4, LEAF_R], [10, { ...LEAF_R, armR: [0, 1.15, -1.35] }], [18, OI]],
  },
  jab2: {
    total: 26, trail: 'handL', trailF: [3, 8], sfx: [4, 'whoosh', 0.5],
    hit: [hb(5, 7, 0.95, 1.15, 0.5, 5, 45, 42, 75), hb(5, 7, 0.45, 1.1, 0.42, 5, 45, 42, 75)],
    anim: [[0, LEAF_R], [5, LEAF_L], [14, { ...LEAF_L, armL: [0, -1.15, 1.35] }], [26, OI]],
  },
  ftilt: {
    // 葉を大きく横へ払う
    total: 32, trail: 'handR', trailF: [6, 12], sfx: [7, 'slash', 0.5],
    hit: [hb(8, 11, 1.25, 1.1, 0.5, 9, 38, 30, 92), hb(8, 11, 0.6, 1.1, 0.45, 8, 38, 30, 90)],
    anim: [[0, OI], [6, LEAF_BACK_R], [10, { ...LEAF_R, armR: [0, 1.5, -1.45], torso: [0.15, 0.7, 0], bz: 0.1 }], [18, { ...LEAF_R, armR: [0, 1.45, -1.45], torso: [0.12, 0.6, 0] }], [32, OI]],
  },
  utilt: {
    // 花を突き上げる
    total: 28, trail: 'head', trailF: [4, 10], sfx: [5, 'whoosh', 0.5],
    hit: [hb(6, 10, 0.1, 2.2, 0.6, 8, 90, 36, 90), hb(6, 9, 0.2, 1.5, 0.45, 7, 90, 36, 90)],
    anim: [[0, OI], [4, { ...OI, by: -0.12, torso: [0.3, 0, 0], head: [0.5, 0, 0], earR: [0.5, 0, 0], earL: [0.5, 0, 0], legR: [-0.5, 0, 0], shinR: [0.8, 0, 0], legL: [-0.5, 0, 0], shinL: [0.8, 0, 0] }], [7, { ...OI, by: 0.1, torso: [-0.15, 0, 0], head: [-0.3, 0, 0], earR: [-0.4, 0, 0], earL: [-0.4, 0, 0] }], [15, { ...OI, by: 0.05, torso: [-0.1, 0, 0], head: [-0.2, 0, 0] }], [28, OI]],
  },
  dtilt: {
    // 根で足もとを払う
    total: 24, trail: 'footR', trailF: [4, 9], sfx: [5, 'whoosh', 0.4],
    hit: [hb(6, 9, 0.95, 0.2, 0.42, 7, 72, 32, 58), hb(6, 9, 0.45, 0.22, 0.38, 7, 72, 32, 58)],
    anim: [[0, { ...OI, by: -0.12, torso: [0.2, 0, 0] }], [6, { ...OI, by: -0.14, torso: [-0.1, 0.3, 0], legR: [-1.2, 0, 0], shinR: [0.3, 0, 0] }], [12, { ...OI, by: -0.14, torso: [-0.08, 0.25, 0], legR: [-1.15, 0, 0], shinR: [0.3, 0, 0] }], [24, OI]],
  },
  dashattack: {
    // 花のドリルで突っ込む
    total: 40, keepVel: true, trail: 'head', trailF: [6, 18], sfx: [6, 'whoosh', 0.7], ...drill,
    hit: [hb(7, 9, 0.95, 1.25, 0.5, 2, 20, 30, 10, { group: 1, link: true }), hb(11, 13, 0.95, 1.25, 0.5, 2, 20, 30, 10, { group: 2, link: true }), hb(15, 18, 1.0, 1.25, 0.55, 6, 45, 55, 80, { group: 3 })],
    onStart(ft) { ft.model.setDrill(true); ft.vx = ft.facing * 0.2; },
    onFrame(ft, f) { if (f <= 18) ft.vx = approach(ft.vx, ft.facing * 0.16, 0.01); else ft.friction(2); },
    anim: [[0, OI], [6, BOW], [20, { ...BOW, torso: [0.8, 0, 0] }], [40, OI]],
  },
  // ---------- スマッシュ ----------
  fsmash: {
    // フラワードリル: 茎を前へ倒し、回る花で貫く
    total: 52, smash: true, charge: { f: 8, max: 60 }, trail: 'head', trailF: [15, 28], sfx: [16, 'whoosh', 1.0], ...drill,
    hit: [hb(16, 18, 1.2, 1.2, 0.55, 3, 15, 30, 10, { group: 1, link: true }), hb(20, 22, 1.2, 1.2, 0.55, 3, 15, 30, 10, { group: 2, link: true }), hb(24, 26, 1.2, 1.2, 0.55, 3, 15, 30, 10, { group: 3, link: true }), hb(29, 32, 1.3, 1.2, 0.65, 9, 38, 45, 108, { group: 4 })],
    onFrame(ft, f) { if (f >= 16 && f <= 30 && f % 2 === 0) { const p = facePos(ft); drops(ft, p.x + ft.facing * 0.2, p.y, 2, 0.3); } if (f === 16) ft.vx = ft.facing * 0.07; },
    anim: [[0, OI], [8, { ...OI, torso: [-0.3, 0, 0], head: [-0.3, 0, 0], by: -0.05 }], [14, { ...OI, torso: [-0.35, 0, 0], head: [-0.35, 0, 0], by: -0.05 }], [17, { ...BOW, torso: [0.95, 0, 0], head: [0.5, 0, 0], bz: 0.3 }], [32, { ...BOW, torso: [1.0, 0, 0], head: [0.5, 0, 0], bz: 0.35 }], [52, OI]],
  },
  usmash: {
    // 3つの花を突き上げて花粉をはじけさせる
    total: 46, smash: true, charge: { f: 6, max: 60 }, sfx: [10, 'whoosh', 0.8],
    hit: [hb(11, 15, 0.1, 2.4, 0.75, 14, 88, 36, 98), hb(11, 13, 0.2, 1.5, 0.5, 12, 88, 36, 96)],
    onFrame(ft, f) { if (f === 11) { pollenFx(ft, ft.x, ft.y + 2.5, 12, 0.7); ft.battle.effects.ring(ft.x, ft.y + 2.4, POLLEN, 2.4, 14); } },
    anim: [[0, OI], [6, { ...OI, by: -0.16, torso: [0.3, 0, 0], head: [0.5, 0, 0], earR: [0.6, 0, 0.3], earL: [0.6, 0, -0.3], legR: [-0.6, 0, 0], shinR: [0.9, 0, 0], legL: [-0.6, 0, 0], shinL: [0.9, 0, 0] }], [11, { ...OI, by: 0.14, torso: [-0.1, 0, 0], head: [-0.2, 0, 0], earR: [-0.2, 0, 0.5], earL: [-0.2, 0, -0.5], armR: [0, 0, -2.8], armL: [0, 0, 2.8] }], [22, { ...OI, by: 0.06, head: [-0.15, 0, 0], earR: [-0.15, 0, 0.4], earL: [-0.15, 0, -0.4], armR: [0, 0, -2.7], armL: [0, 0, 2.7] }], [46, OI]],
  },
  dsmash: {
    // 根を地面に刺し、左右から突き出す
    total: 48, smash: true, charge: { f: 6, max: 60 }, sfx: [9, 'whoosh', 0.8],
    hit: [hb(11, 14, 1.15, 0.5, 0.55, 13, 35, 36, 98), hb(11, 14, -1.15, 0.5, 0.55, 13, 145, 36, 98)],
    onFrame(ft, f) { if (f === 11) { spike(ft, ft.x + 1.2, 1.1, -0.3, 20); spike(ft, ft.x - 1.2, 1.1, 0.3, 20); ft.battle.effects.dust(ft.x + 1.2, ft.y, 4, 1); ft.battle.effects.dust(ft.x - 1.2, ft.y, 4, -1); ft.battle.shakeCam(0.06); } },
    anim: [[0, OI], [7, { ...OI, by: 0.1, armR: [0, 0, -2.7], armL: [0, 0, 2.7] }], [11, { ...OI, by: -0.2, torso: [0.15, 0, 0], legR: [-0.3, 0, -0.5], shinR: [0.8, 0, 0], legL: [-0.3, 0, 0.5], shinL: [0.8, 0, 0], armR: [0, 0, -1.0], armL: [0, 0, 1.0] }], [26, { ...OI, by: -0.18, legR: [-0.3, 0, -0.5], shinR: [0.8, 0, 0], legL: [-0.3, 0, 0.5], shinL: [0.8, 0, 0], armR: [0, 0, -1.0], armL: [0, 0, 1.0] }], [48, OI]],
  },
  // ---------- 空中 ----------
  nair: {
    // 葉を広げて回る
    total: 40, aerial: true, landLag: 8, acBefore: 3, acAfter: 30, alpha: 0.85, trail: 'handR', trailF: [4, 22], sfx: [4, 'whoosh', 0.5],
    hit: [hb(5, 12, 0, 1.1, 1.05, 9, 45, 30, 88, { away: true }), hb(13, 24, 0, 1.1, 0.9, 6, 45, 20, 70, { away: true })],
    anim: [[0, AIR], [4, { ...AIR, body: [0, 0, 0], armR: [0, 0, -1.5], armL: [0, 0, 1.5], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [24, { ...AIR, body: [0, PI * 4, 0], armR: [0, 0, -1.5], armL: [0, 0, 1.5], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [40, { ...AIR, body: [0, PI * 4, 0] }]],
  },
  fair: {
    // 両の葉を前で打ち合わせる
    total: 36, aerial: true, landLag: 12, acBefore: 4, acAfter: 26, trail: 'handR', trailF: [6, 12], sfx: [7, 'slash', 0.6],
    hit: [hb(8, 11, 1.1, 1.15, 0.6, 11, 42, 30, 94), hb(8, 11, 0.5, 1.15, 0.5, 9, 42, 30, 90)],
    anim: [[0, AIR], [6, { ...AIR, armR: [0, -1.4, -1.5], armL: [0, 1.4, 1.5] }], [9, { ...AIR, armR: [0, 1.45, -1.45], armL: [0, -1.45, 1.45], torso: [0.2, 0, 0] }], [18, { ...AIR, armR: [0, 1.4, -1.45], armL: [0, -1.4, 1.45], torso: [0.15, 0, 0] }], [36, AIR]],
  },
  bair: {
    // 根で後ろを蹴る
    total: 34, aerial: true, landLag: 10, acBefore: 3, acAfter: 25, trail: 'footR', trailF: [5, 11], sfx: [6, 'whoosh', 0.7],
    hit: [hb(7, 10, -0.95, 0.5, 0.58, 12, 145, 36, 98), hb(7, 10, -0.45, 0.6, 0.45, 10, 145, 34, 94)],
    anim: [[0, AIR], [5, { ...AIR, legR: [-0.9, 0, 0], shinR: [1.2, 0, 0], legL: [-0.9, 0, 0], shinL: [1.2, 0, 0] }], [8, { ...AIR, body: [0.5, 0, 0], legR: [1.5, 0, 0], shinR: [-0.4, 0, 0], legL: [1.3, 0, 0], shinL: [-0.3, 0, 0], head: [-0.4, 0, 0] }], [16, { ...AIR, body: [0.45, 0, 0], legR: [1.45, 0, 0], shinR: [-0.3, 0, 0], legL: [1.25, 0, 0], head: [-0.4, 0, 0] }], [34, AIR]],
  },
  uair: {
    // 頭上で花を回す
    total: 32, aerial: true, landLag: 8, acBefore: 3, acAfter: 24, trail: 'head', trailF: [4, 14], sfx: [5, 'whoosh', 0.5], ...drill,
    hit: [hb(6, 8, 0.05, 2.3, 0.6, 3, 85, 30, 10, { group: 1, link: true }), hb(10, 12, 0.05, 2.3, 0.6, 3, 85, 30, 10, { group: 2, link: true }), hb(14, 17, 0.05, 2.35, 0.65, 5, 85, 40, 95, { group: 3 })],
    anim: [[0, AIR], [5, { ...AIR, head: [-0.5, 0, 0], earR: [-0.5, 0, 0], earL: [-0.5, 0, 0], torso: [-0.15, 0, 0] }], [17, { ...AIR, head: [-0.55, 0, 0], earR: [-0.5, 0, 0], earL: [-0.5, 0, 0], torso: [-0.15, 0, 0], by: 0.05 }], [32, AIR]],
  },
  dair: {
    // 逆さになって花のドリルで突き下ろす（連続ヒット）
    total: 46, aerial: true, landLag: 18, acBefore: 3, acAfter: 36, trail: 'head', trailF: [10, 28], sfx: [10, 'whoosh', 0.7], ...drill,
    hit: [hb(12, 14, 0, -0.2, 0.52, 2.5, 270, 20, 8, { group: 1, link: true }), hb(17, 19, 0, -0.2, 0.52, 2.5, 270, 20, 8, { group: 2, link: true }), hb(22, 24, 0, -0.2, 0.52, 2.5, 270, 20, 8, { group: 3, link: true }), hb(27, 30, 0, -0.2, 0.6, 5, 60, 40, 90, { group: 4 })],
    onFrame(ft, f) { if (f >= 12 && f <= 28) ft.vy = Math.max(ft.vy, -0.12); },
    anim: [[0, AIR], [10, { ...AIR, body: [PI, 0, 0], head: [0, 0, 0], earR: [0, 0, 0.4], earL: [0, 0, -0.4] }], [30, { ...AIR, body: [PI, 0, 0], head: [0, 0, 0], earR: [0, 0, 0.4], earL: [0, 0, -0.4] }], [46, { ...AIR, body: [PI * 2, 0, 0] }]],
  },
  // ---------- 必殺ワザ ----------
  neutralb: {
    // 種ガン: 顔の花から種を撃つ。ボタンを押しっぱなしにすると連射する（最大10発）
    total: 96, keepVel: true, fall: 0.6, landContinue: true,
    onFrame(ft, f) {
      if (ft.grounded) ft.friction(1.5);
      if (f === 10) { seed(ft, { dmg: 4, bkb: 16, kbg: 20, r: 0.15 }); audio.tech(); ft.vars.shots = 1; }
      if (f > 10 && f <= 76 && (f - 10) % 6 === 0) {
        if (ft.input.raw.special && ft.vars.shots < 10) { seed(ft, { vy: rand(-0.012, 0.004) }); audio.tech(); ft.vars.shots++; if (!ft.grounded) ft.vx -= ft.facing * 0.006; }
        else ft.mf = 78; // 離したら終わる
      }
    },
    anim: [[0, OI], [8, { ...BOW, torso: [0.45, 0, 0], head: [0.45, 0, 0] }], [78, { ...BOW, torso: [0.45, 0, 0], head: [0.45, 0, 0] }], [96, OI]],
  },
  sideb: {
    // 根のばし: 地面を這わせて根を遠くまで伸ばし、当たった相手を手前へ引き寄せる
    total: 54, sfx: [12, 'whoosh', 0.8],
    hit: [hb(13, 15, 1.3, 0.3, 0.42, 9, 150, 55, 28), hb(15, 18, 2.3, 0.3, 0.42, 9, 150, 55, 28), hb(17, 24, 3.25, 0.3, 0.45, 9, 150, 55, 28)],
    onStart(ft) { if (!ft.grounded) { ft.sideBUsed = true; ft.startMove('sidebair'); } },
    onFrame(ft, f) { ft.friction(2); if (f === 11) ft.battle.addFx(new RootWhip(ft.battle, ft, 3.5, 7, 7, 10)); },
    anim: [[0, OI], [10, { ...OI, by: -0.16, torso: [0.25, 0, 0], legR: [-0.9, 0, 0], shinR: [0.4, 0, 0], legL: [-0.9, 0, 0], shinL: [0.4, 0, 0] }], [26, { ...OI, by: -0.18, torso: [0.3, 0, 0], legR: [-1.2, 0, 0], shinR: [0.1, 0, 0], legL: [-1.2, 0, 0], shinL: [0.1, 0, 0] }], [54, OI]],
  },
  sidebair: {
    // 根のばし（空中）: 斜め下へ根を突き出す
    total: 40, keepVel: true, fall: 0.7, landLag: 14, sfx: [9, 'whoosh', 0.7], trail: 'footR', trailF: [8, 16],
    hit: [hb(10, 15, 1.0, 0.1, 0.5, 9, 60, 40, 80), hb(10, 15, 1.7, -0.4, 0.45, 9, 60, 40, 80)],
    anim: [[0, AIR], [8, { ...AIR, legR: [-0.3, 0, 0], shinR: [1.2, 0, 0], legL: [-0.3, 0, 0], shinL: [1.2, 0, 0] }], [11, { ...AIR, body: [-0.3, 0, 0], legR: [-1.0, 0, 0], shinR: [-0.2, 0, 0], legL: [-1.0, 0, 0], shinL: [-0.2, 0, 0] }], [20, { ...AIR, body: [-0.3, 0, 0], legR: [-1.0, 0, 0], shinR: [-0.2, 0, 0], legL: [-1.0, 0, 0], shinL: [-0.2, 0, 0] }], [40, AIR]],
  },
  upb: {
    // 葉ばたき: 葉を羽のように3回打ち下ろして上昇する
    total: 50, helpless: true, helplessLag: 16, ledgeGrab: 10, noDrift: true, keepVel: true, noGravity: [4, 34], trail: 'handR', trailF: [4, 34],
    hit: [hb(5, 8, 0, 1.2, 1.0, 3, 85, 40, 10, { group: 1, link: true }), hb(15, 18, 0, 1.2, 1.0, 3, 85, 40, 10, { group: 2, link: true }), hb(25, 29, 0, 1.3, 1.05, 5, 80, 55, 85, { group: 3 })],
    onStart(ft) { ft.upBUsed = true; ft.vx *= 0.4; },
    onFrame(ft, f) {
      if (f < 4) ft.vy = ft.grounded ? 0 : Math.max(ft.vy, 0) * 0.5;
      if (f === 4) { ft.grounded = false; ft.surface = null; ft.y += 0.02; }
      if (f >= 4 && f <= 34) {
        const ph = (f - 4) % 10; // 10フレームで1回羽ばたく
        if (ph === 0) { ft.vy = 0.3; audio.whoosh(0.7); drops(ft, ft.x, ft.y + 0.9, 5, 0.4); } else ft.vy = Math.max(0.02, ft.vy - 0.028);
        ft.vx = approach(ft.vx, ft.input.stick.x * 0.13, 0.014);
      }
      if (f > 34) ft.drift(0.7);
    },
    anim: (() => {
      const up = { ...AIR, armR: [0, 0, -2.9], armL: [0, 0, 2.9], foreR: [0, 0, -0.3], foreL: [0, 0, 0.3] }, dn = { ...AIR, armR: [0, 0, -0.7], armL: [0, 0, 0.7], foreR: [0, 0, 0.3], foreL: [0, 0, -0.3] };
      return [[0, up], [4, up], [8, dn], [14, up], [18, dn], [24, up], [28, dn], [36, { ...AIR, armR: [0, 0, -1.6], armL: [0, 0, 1.6] }], [50, AIR]];
    })(),
  },
  downb: {
    // 花粉: 3つの花から花粉をまく。地上の相手に当たるとふらふらにする
    total: 48, keepVel: true, fall: 0.6, landContinue: true,
    onFrame(ft, f) {
      if (ft.grounded) ft.friction(1.5);
      if (f === 14) {
        pollen(ft, { x: ft.x + ft.facing * 0.9, y: ft.y + 1.0, vx: ft.facing * 0.07 });
        pollen(ft, { x: ft.x - ft.facing * 0.4, y: ft.y + 1.2, vx: -ft.facing * 0.03, r: 0.4, rMax: 0.7, life: 28 });
        pollenFx(ft, ft.x + ft.facing * 0.5, ft.y + 1.6, 10, 0.6); audio.whoosh(0.5);
      }
    },
    anim: [[0, OI], [8, { ...OI, torso: [-0.2, 0, 0], head: [-0.4, 0, 0], earR: [-0.3, 0, 0.3], earL: [-0.3, 0, -0.3] }], [14, { ...OI, torso: [0.45, 0, 0], head: [0.6, 0, 0], earR: [0.6, 0, 0.4], earL: [0.6, 0, -0.4] }], [20, { ...OI, torso: [0.3, 0, 0], head: [0.2, 0, 0], earR: [0.2, 0, -0.2], earL: [0.2, 0, 0.2] }], [26, { ...OI, torso: [0.4, 0, 0], head: [0.5, 0, 0], earR: [0.5, 0, 0.3], earL: [0.5, 0, -0.3] }], [48, OI]],
  },
  // ---------- 最後の切りふだ ----------
  final: {
    // 朧花吹雪: 花粉の嵐で前方の相手を動けなくし、種の雨を浴びせて最後に根で突き上げる
    total: 130, fs: true, intang: [0, 130], noGravity: [0, 130], noDrift: true, keepVel: true,
    onStart(ft) { ft.vx = 0; ft.vy = 0; ft.battle.startCine(ft, 40); },
    onFrame(ft, f) {
      const b = ft.battle, cx = ft.x + ft.facing * 2.4, cy = ft.y + 1.3;
      ft.vx = 0; if (!ft.grounded) ft.vy = 0;
      if (f < 40 && f % 3 === 0) pollenFx(ft, ft.x, ft.y + 2.0, 2, 0.5);
      if (f === 40) { audio.fsBoom(); b.shakeCam(0.4); }
      if (f >= 40 && f < 96) {
        for (let i = 0; i < 3; i++) { const a = rand(0, PI * 2), d = rand(0, 3.4); pollenFx(ft, cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.7, 1, 1.2); }
        b.effects.spawn({ x: cx + rand(-3, 3), y: cy + 3.2, z: 0.4, vx: rand(-0.02, 0.02), vy: -0.3, life: 12, size: 0.22, size1: 0.1, color: 0x5a8a3a, additive: false });
        if (f % 6 === 0) b.fsTrap(ft, cx, cy, 3.4);
        if (f % 8 === 0) { b.fsDamage(ft, 3); audio.tech(); }
      }
      if (f === 100) {
        for (let i = -1; i <= 1; i++) b.addFx(new RootSpike(b, cx + i * 1.3, ft.y, 3.0 - Math.abs(i) * 0.6, -i * 0.2, 26));
        b.effects.ring(cx, cy, AQUA, 9, 26); b.effects.koBlast(cx, cy, 0xeafaff); b.shakeCam(0.7); audio.fsBoom();
        b.fsLaunch(ft, { dmg: 20, ang: 80, bkb: 105, kbg: 100 });
      }
    },
    onEnd(ft) { ft.battle.fsRelease(ft); },
    anim: [[0, OI], [30, { ...OI, by: 0.1, armR: [0, 0, -2.8], armL: [0, 0, 2.8], head: [-0.3, 0, 0], earR: [-0.3, 0, 0.5], earL: [-0.3, 0, -0.5] }], [40, { ...BOW, torso: [0.4, 0, 0] }], [96, { ...BOW, torso: [0.4, 0, 0] }], [100, { ...OI, by: -0.15, torso: [0.2, 0, 0] }], [130, OI]],
  },
  // ---------- つかみ・投げ ----------
  grab: {
    total: 34, trail: 'handL', trailF: [5, 9],
    hit: [hb(7, 8, 0.9, 1.1, 0.48, 0, 0, 0, 0, { type: 'grab' })],
    anim: [[0, OI], [7, { ...OI, armR: [0, 1.3, -1.35], armL: [0, -1.3, 1.35], torso: [0.15, 0, 0], bz: 0.1 }], [18, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35], torso: [0.12, 0, 0] }], [34, OI]],
  },
  dashgrab: {
    total: 42, keepVel: true,
    hit: [hb(10, 11, 1.05, 1.1, 0.5, 0, 0, 0, 0, { type: 'grab' })],
    onFrame(ft) { ft.friction(1.2); },
    anim: [[0, OI], [10, { ...OI, armR: [0, 1.3, -1.35], armL: [0, -1.3, 1.35], torso: [0.3, 0, 0], bz: 0.2 }], [24, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35], torso: [0.25, 0, 0] }], [42, OI]],
  },
  pummel: {
    // 花でつつく
    total: 18, pummelAt: 6, pummelDmg: 1.3,
    anim: [[0, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35], head: [-0.3, 0, 0] }], [6, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35], torso: [0.3, 0, 0], head: [0.7, 0, 0] }], [18, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35] }]],
  },
  fthrow: {
    // 葉ではじき飛ばす
    total: 34, throwAt: 12, throwHit: { dmg: 9, ang: 40, bkb: 62, kbg: 66 },
    hold: () => [0.85, 0.4],
    anim: [[0, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35] }], [8, { ...OI, armR: [0, -1.4, -1.4], armL: [0, 1.4, 1.4], torso: [-0.2, 0, 0] }], [12, { ...OI, armR: [0, 1.5, -1.4], armL: [0, -1.5, 1.4], torso: [0.3, 0, 0], bz: 0.15 }], [34, OI]],
  },
  bthrow: {
    // 後ろへ放り投げる
    total: 40, throwAt: 17, throwHit: { dmg: 10, ang: 140, bkb: 60, kbg: 95 },
    hold: (f) => { const t = Math.min(1, f / 15); return [0.85 * Math.cos(PI * t), 0.4 + 0.9 * Math.sin(PI * t)]; },
    anim: [[0, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35] }], [9, { ...OI, armR: [0, 0, -2.8], armL: [0, 0, 2.8], torso: [-0.2, 0, 0] }], [17, { ...OI, armR: [0, -1.4, -2.2], armL: [0, 1.4, 2.2], torso: [-0.5, 0, 0], head: [-0.3, 0, 0] }], [40, OI]],
  },
  uthrow: {
    // 地面から根で突き上げる
    total: 36, throwAt: 13, throwHit: { dmg: 8, ang: 88, bkb: 68, kbg: 62 },
    hold: (f) => [0.7 - f * 0.03, 0.4 + f * 0.06],
    onFrame(ft, f) { if (f === 13) spike(ft, ft.x + ft.facing * 0.4, 1.3, 0, 16); },
    anim: [[0, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35] }], [9, { ...OI, by: -0.12, armR: [0, 0.6, -1.0], armL: [0, -0.6, 1.0] }], [13, { ...OI, by: 0.06, armR: [0, 0, -2.8], armL: [0, 0, 2.8] }], [36, OI]],
  },
  dthrow: {
    // 球根でのしかかる
    total: 40, throwAt: 20, throwHit: { dmg: 8, ang: 72, bkb: 62, kbg: 48 },
    hold: (f) => [Math.max(0.1, 0.8 - f * 0.05), Math.max(0, 0.4 - f * 0.04)],
    onFrame(ft, f) { if (f === 20) { ft.battle.effects.dust(ft.x, ft.y, 6, 0); ft.battle.shakeCam(0.1); drops(ft, ft.x, ft.y + 0.3, 6, 0.4); } },
    anim: [[0, { ...OI, armR: [0, 1.25, -1.35], armL: [0, -1.25, 1.35] }], [10, { ...OI, armR: [0, 0.6, -0.8], armL: [0, -0.6, 0.8], torso: [0.3, 0, 0] }], [16, { ...OI, by: 0.3, legR: [-0.8, 0, 0], shinR: [1.2, 0, 0], legL: [-0.8, 0, 0], shinL: [1.2, 0, 0] }], [20, { ...OI, by: -0.2, legR: [-0.3, 0, -0.5], legL: [-0.3, 0, 0.5] }], [30, { ...OI, by: -0.18, legR: [-0.3, 0, -0.5], legL: [-0.3, 0, 0.5] }], [40, OI]],
  },
  getupattack: {
    total: 38, intang: [0, 14], trail: 'handR', trailF: [12, 22],
    hit: [hb(14, 16, 1.0, 0.6, 0.58, 6, 48, 60, 50), hb(19, 21, -1.0, 0.6, 0.58, 6, 132, 60, 50, { group: 1 })],
    anim: [[0, { ...OI, by: -0.2, torso: [0.4, 0, 0] }], [14, { ...LEAF_R, by: -0.1 }], [20, { ...OI, by: -0.1, armL: [0, 1.5, 1.4], torso: [0, 0.5, 0] }], [38, OI]],
  },
  ledgeattack: {
    total: 38, intang: [0, 12], trail: 'handR', trailF: [10, 16], sfx: [11, 'whoosh', 0.6],
    hit: [hb(12, 15, 1.0, 1.0, 0.65, 9, 45, 60, 50)],
    anim: [[0, { ...OI, by: -0.1 }], [12, { ...LEAF_R, bz: 0.2 }], [24, { ...LEAF_R, bz: 0.15 }], [38, OI]],
  },
};

// 羽ばたき（ジャンプ・空中ジャンプ・落下）
const flap = (k) => ({ armR: [0, -0.3, -1.75 - k * 1.0], armL: [0, 0.3, 1.75 + k * 1.0], foreR: [0, 0, -k * 0.3], foreL: [0, 0, k * 0.3] });

export const OBORO = {
  id: 'oboro',
  name: 'オボロゲソウ',
  en: 'OBOROGESOU',
  title: '朧の水草',
  color: 0x7fd6ff,
  css: '#7fd6ff',
  desc: '全身が半透明の水草。葉を手や羽のように使い、種・根・花粉で遠くからも戦える。ジャンプは低いが、葉で羽ばたいて空中で2回跳べる。',
  specials: ['種ガン（押しっぱなしで連射）', '根のばし（地面を這う長い根・引き寄せ）', '葉ばたき（3回羽ばたいて上昇）', '花粉（当たるとふらふら）'],
  stats: {
    weight: 100, height: 1.9, radius: 0.42,
    walkSpeed: 0.062, dashSpeed: 0.14, dashFrames: 12, runSpeed: 0.122, traction: 0.011,
    airSpeed: 0.085, airAccel: 0.0065, airFriction: 0.003,
    gravity: 0.0078, fallSpeed: 0.135, fastFall: 0.22,
    jumpV: 0.168, hopV: 0.118, djV: 0.158, airJumps: 2, jumpsquat: 4, rollSpeed: 0.12,
  },
  grabHold: [0.85, 0.4],
  buildModel: buildOboro,
  anims: makeAnims({
    idle: OI, hipY: OBORO_HIP, bob: 1.2,
    walkExtra: { ...WING },
    runExtra: (ph) => ({ ...flap(Math.sin(ph * 2) * 0.25), torso: [0.3, 0, 0] }),
    override: {
      jump: () => ({ ...OI, ...flap(-0.7), legR: [-0.6, 0, 0], shinR: [0.9, 0, 0], legL: [-0.3, 0, 0], shinL: [0.6, 0, 0] }),
      djump: (t) => ({ ...OI, ...flap(Math.cos(Math.min(t, 16) / 16 * PI) * 0.9), legR: [-0.6, 0, 0], shinR: [0.9, 0, 0], legL: [-0.3, 0, 0], shinL: [0.6, 0, 0] }),
      fall: (t) => ({ ...OI, ...flap(0.5 + Math.sin(t * 0.25) * 0.15), legR: [-0.3, 0, 0], shinR: [0.5, 0, 0], legL: [-0.1, 0, 0], shinL: [0.3, 0, 0] }),
      victory: (f) => ({ ...OI, ...flap(Math.sin(f * 0.3) * 0.6), by: Math.abs(Math.sin(f * 0.15)) * 0.15, head: [-0.2, Math.sin(f * 0.2) * 0.3, 0] }),
    },
  }),
  moves,
};
