// スネグーラチカ: 水の精ウンディーネの亜種。水と氷をあやつり、氷の剣と氷の弓で戦う。
// 宙に浮いていて軽く、地上ではよく滑る。リーチの長い剣と飛び道具で間合いを取るタイプ。
import * as THREE from 'three';
import { buildSnegu, SNEGU_HIP } from '../models/sneguModel.js';
import { makeAnims } from './anims.js';
import { approach, rand } from '../util.js';
import { audio } from '../audio.js';

const hb = (f0, f1, x, y, r, dmg, ang, bkb, kbg, extra = {}) => ({ f: [f0, f1], x, y, r, dmg, ang, bkb, kbg, ...extra });

const ICE = 0x9fe4ff, WATER = 0x4cc8d4;
const PI = Math.PI;

// 尾は legR（付け根）と shinR（中ほど）で振る。待機では後ろへゆるく流す
const SI = { legR: [0.1, 0, 0], shinR: [0, 0, 0], torso: [0.03, 0, 0], head: [0, 0, 0], armR: [0.12, 0, -0.32], foreR: [-0.3, 0, 0.1], armL: [0.12, 0, 0.32], foreL: [-0.3, 0, -0.1], wep: [1.57, 0, 0] };
const AIR = { ...SI, legR: [0.35, 0, 0], shinR: [0.2, 0, 0], armR: [-0.2, 0, -0.8], armL: [-0.2, 0, 0.8], torso: [0.08, 0, 0] };
// 剣の構え（刀身は右腕の延長）
const B_UP = { ...SI, armR: [-3.0, 0, -0.2], foreR: [-0.3, 0, 0], torso: [-0.2, -0.25, 0], armL: [-0.5, 0, 0.5], legR: [0.3, 0, 0] };
const B_FWD = { ...SI, armR: [-1.4, 0, -0.05], foreR: [-0.05, 0, 0], torso: [0.3, 0.45, 0], armL: [0.4, 0, 0.6], legR: [0.5, 0, 0], bz: 0.18 };
const B_SIDE = { ...SI, armR: [-1.4, 0, -1.3], foreR: [-0.2, 0, 0], torso: [0.05, -0.6, 0], armL: [-0.4, 0, 0.5] };
// 弓の構え（左手で弓を前へ、右手で引く）
const BOW = { ...SI, armL: [-1.5, 0, 0.05], foreL: [0, 0, 0], armR: [-1.3, 0, 0.5], foreR: [-1.9, 0, 0], torso: [0.02, -0.5, 0], head: [0, 0.4, 0] };
const blade = { onStart(ft) { ft.model.setWeapon('blade'); }, onEnd(ft) { ft.model.setWeapon(null); } };

function splash(ft, x, y, n = 4, size = 0.4, color = WATER) {
  for (let i = 0; i < n; i++) ft.battle.effects.spawn({ x: x + rand(-0.2, 0.2), y: y + rand(-0.2, 0.2), z: 0.35, vx: rand(-0.05, 0.05), vy: rand(0.01, 0.08), life: rand(12, 22), size: rand(size * 0.5, size), size1: 0.05, color: i % 2 ? color : 0xe8fbff, gravity: -0.004 });
}
const frost = (ft, x, y, n = 4) => ft.battle.effects.sparkle(x, y, n % 2 ? ICE : 0xffffff, n, 0.5);
// 氷のつぶて／矢
function shard(ft, o) {
  ft.battle.spawnProjectile(ft, { vy: 0, r: 0.2, dmg: 6, ang: 40, bkb: 25, kbg: 60, life: 60, color: ICE, kind: 'ice', ...o });
}

// 地面や空中に生える氷の柱（見た目だけ。少しのあいだ残って砕ける）
class IceSpike {
  constructor(battle, x, y, len, wid, ang = 0, life = 24) {
    this.b = battle; this.t = 0; this.life = life;
    const m = new THREE.MeshStandardMaterial({ color: ICE, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.85, emissive: 0x2a6a8a, flatShading: true });
    const g = new THREE.Group();
    const add = (l, w, dx, rz) => { const c = new THREE.Mesh(new THREE.ConeGeometry(w, l, 5), m); c.position.set(dx - Math.sin(rz) * l / 2, Math.cos(rz) * l / 2, 0); c.rotation.z = rz; g.add(c); };
    add(len, wid, 0, 0); add(len * 0.6, wid * 0.7, wid * 0.8, -0.35); add(len * 0.5, wid * 0.6, -wid * 0.8, 0.4);
    g.position.set(x, y, 0.1); g.rotation.z = ang; g.scale.set(1, 0.01, 1);
    this.mesh = g; this.mat = m; this.x = x; this.y = y; this.len = len;
    battle.scene.add(g);
  }
  update() {
    this.t++;
    this.mesh.scale.y = Math.min(1, this.t / 4);
    if (this.t > this.life - 6) this.mat.opacity = 0.85 * Math.max(0, (this.life - this.t) / 6);
    if (this.t === this.life - 6) this.b.effects.sparkle(this.x, this.y + this.len * 0.5, ICE, 6, 0.5);
    if (this.t >= this.life) this.b.removeFx(this);
  }
  remove() { this.b.scene.remove(this.mesh); this.mesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); this.mat.dispose(); }
}
const spike = (ft, x, y, len, wid, ang, life) => ft.battle.addFx(new IceSpike(ft.battle, x, y, len, wid, ang, life));

const moves = {
  // ---------- 弱・強 ----------
  jab1: {
    total: 18, next: 'jab2', nextWin: [6, 17], trail: 'handL', trailF: [3, 6], sfx: [3, 'whoosh', 0.3],
    hit: [hb(4, 5, 0.7, 1.4, 0.42, 3, 75, 14, 18), hb(4, 5, 0.35, 1.4, 0.35, 3, 75, 14, 18)],
    onFrame(ft, f) { if (f === 4) splash(ft, ft.x + ft.facing * 0.75, ft.y + 1.4, 3, 0.3); },
    anim: [[0, SI], [4, { ...SI, armL: [-1.5, 0, 0.05], foreL: [0, 0, 0], torso: [0.1, -0.4, 0] }], [10, { ...SI, armL: [-1.4, 0, 0.05], torso: [0.08, -0.3, 0] }], [18, SI]],
  },
  jab2: {
    // 水のはじける掌打
    total: 26, trail: 'handR', trailF: [3, 7], sfx: [4, 'whoosh', 0.5],
    hit: [hb(5, 7, 0.9, 1.4, 0.52, 5, 45, 42, 75)],
    onFrame(ft, f) { if (f === 5) { splash(ft, ft.x + ft.facing * 0.95, ft.y + 1.4, 7, 0.5); ft.battle.effects.ring(ft.x + ft.facing * 0.95, ft.y + 1.4, WATER, 1.6, 10); } },
    anim: [[0, { ...SI, armL: [-1.4, 0, 0.05], torso: [0.08, -0.3, 0] }], [5, { ...SI, armR: [-1.5, 0, -0.05], foreR: [0, 0, 0], torso: [0.15, 0.5, 0], armL: [0.3, 0, 0.5], bz: 0.1 }], [14, { ...SI, armR: [-1.4, 0, -0.05], torso: [0.12, 0.4, 0] }], [26, SI]],
  },
  ftilt: {
    // 氷の剣の横なぎ
    total: 32, trail: 'blade', trailF: [6, 12], sfx: [7, 'slash', 0.6], ...blade,
    hit: [hb(8, 10, 1.55, 1.3, 0.45, 9, 38, 30, 92), hb(8, 10, 0.85, 1.3, 0.45, 8, 38, 30, 90)],
    anim: [[0, SI], [6, B_SIDE], [9, { ...B_FWD, armR: [-1.45, 0, 0.5] }], [18, { ...B_FWD, armR: [-1.4, 0, 0.45] }], [32, SI]],
  },
  utilt: {
    // 剣を頭上で弧に振る
    total: 30, trail: 'blade', trailF: [5, 13], sfx: [6, 'slash', 0.6], ...blade,
    hit: [hb(6, 12, 0, 0, 0.52, 8, 90, 36, 90, { path: [[1.0, 1.9], [-0.7, 2.4]] }), hb(6, 12, 0, 0, 0.5, 8, 90, 36, 90, { path: [[0.6, 2.7], [-0.3, 2.9]] })],
    anim: [[0, SI], [5, { ...B_FWD, armR: [-1.9, 0, -0.1], torso: [0.1, 0.2, 0], bz: 0 }], [9, { ...B_UP, armR: [-3.0, 0, -0.1], torso: [-0.15, 0, 0], head: [-0.3, 0, 0] }], [13, { ...B_UP, armR: [-3.8, 0, -0.1], torso: [-0.2, -0.1, 0], head: [-0.3, 0, 0] }], [20, { ...B_UP, armR: [-3.7, 0, -0.1] }], [30, SI]],
  },
  dtilt: {
    // 尾で足もとを払う
    total: 24, trail: 'tail', trailF: [4, 9], sfx: [5, 'whoosh', 0.4],
    hit: [hb(6, 9, 0.95, 0.25, 0.42, 7, 72, 32, 58), hb(6, 9, 0.45, 0.3, 0.38, 7, 72, 32, 58)],
    anim: [[0, { ...SI, by: -0.25, torso: [0.3, 0, 0], legR: [0.6, 0, 0], shinR: [0.6, 0, 0] }], [6, { ...SI, by: -0.3, torso: [-0.15, 0, 0], legR: [-1.2, 0, 0], shinR: [-0.6, 0, 0], armR: [0.4, 0, -0.7], armL: [0.4, 0, 0.7] }], [12, { ...SI, by: -0.3, torso: [-0.1, 0, 0], legR: [-1.15, 0, 0], shinR: [-0.5, 0, 0] }], [24, SI]],
  },
  dashattack: {
    // 水の流れに乗って体ごと突っ込む
    total: 38, keepVel: true, sfx: [5, 'whoosh', 0.7],
    hit: [hb(6, 14, 0.75, 0.95, 0.65, 9, 50, 52, 70), hb(15, 20, 0.7, 0.95, 0.5, 6, 60, 40, 50)],
    onStart(ft) { ft.vx = ft.facing * 0.22; },
    onFrame(ft, f) {
      if (f <= 16) { ft.vx = approach(ft.vx, ft.facing * 0.18, 0.01); if (f % 2 === 0) splash(ft, ft.x - ft.facing * 0.3, ft.y + 0.6, 2, 0.5); } else ft.friction(1.6);
    },
    anim: [[0, SI], [6, { ...SI, body: [0.5, 0, 0], armR: [-2.4, 0, -0.3], armL: [-2.4, 0, 0.3], foreR: [0, 0, 0], foreL: [0, 0, 0], legR: [0.5, 0, 0], shinR: [0.2, 0, 0], head: [-0.4, 0, 0] }], [20, { ...SI, body: [0.5, 0, 0], armR: [-2.4, 0, -0.3], armL: [-2.4, 0, 0.3], legR: [0.5, 0, 0], head: [-0.4, 0, 0] }], [38, SI]],
  },
  // ---------- スマッシュ ----------
  fsmash: {
    // 氷の剣を振りかぶって叩き下ろす。切っ先から氷の柱が立つ
    total: 50, smash: true, charge: { f: 8, max: 60 }, trail: 'blade', trailF: [13, 20], sfx: [15, 'slash', 1.0], ...blade,
    hit: [hb(16, 19, 1.75, 0.9, 0.62, 16, 38, 36, 100), hb(16, 19, 0.95, 1.5, 0.52, 14, 38, 36, 98)],
    onFrame(ft, f) { if (f === 17) { spike(ft, ft.x + ft.facing * 1.9, ft.y, 1.3, 0.28, ft.facing * -0.25, 22); frost(ft, ft.x + ft.facing * 1.8, ft.y + 0.6, 8); ft.battle.shakeCam(0.08); audio.tech(); } },
    anim: [[0, SI], [8, B_UP], [15, { ...B_UP, armR: [-3.2, 0, -0.2], torso: [-0.3, -0.3, 0] }], [18, { ...B_FWD, armR: [-0.95, 0, -0.05], torso: [0.5, 0.4, 0], bz: 0.25, by: -0.1 }], [32, { ...B_FWD, armR: [-0.95, 0, -0.05], torso: [0.45, 0.35, 0], bz: 0.2, by: -0.1 }], [50, SI]],
  },
  usmash: {
    // 両手を掲げ、頭上に氷の柱を突き上げる
    total: 46, smash: true, charge: { f: 6, max: 60 }, sfx: [10, 'whoosh', 0.8],
    hit: [hb(11, 16, 0.15, 2.7, 0.62, 14, 88, 36, 98), hb(11, 14, 0.2, 1.8, 0.5, 12, 88, 36, 96)],
    onFrame(ft, f) { if (f === 11) { spike(ft, ft.x + ft.facing * 0.15, ft.y + 1.9, 1.5, 0.3, 0, 20); frost(ft, ft.x, ft.y + 2.8, 8); audio.tech(); } },
    anim: [[0, SI], [6, { ...SI, by: -0.15, armR: [0.3, 0, -0.4], foreR: [-1.6, 0, 0], armL: [0.3, 0, 0.4], foreL: [-1.6, 0, 0], torso: [0.2, 0, 0] }], [11, { ...SI, by: 0.08, armR: [-3.0, 0, -0.15], foreR: [0, 0, 0], armL: [-3.0, 0, 0.15], foreL: [0, 0, 0], torso: [-0.1, 0, 0], head: [-0.3, 0, 0] }], [22, { ...SI, armR: [-2.9, 0, -0.2], armL: [-2.9, 0, 0.2], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [46, SI]],
  },
  dsmash: {
    // 両腕を広げ、左右の地面から氷の柱を生やす
    total: 46, smash: true, charge: { f: 6, max: 60 }, sfx: [9, 'whoosh', 0.8],
    hit: [hb(10, 13, 1.1, 0.45, 0.55, 13, 35, 36, 98), hb(10, 13, -1.1, 0.45, 0.55, 13, 145, 36, 98)],
    onFrame(ft, f) { if (f === 10) { spike(ft, ft.x + 1.15, ft.y, 1.1, 0.26, -0.3, 20); spike(ft, ft.x - 1.15, ft.y, 1.1, 0.26, 0.3, 20); ft.battle.shakeCam(0.06); audio.tech(); } },
    anim: [[0, SI], [7, { ...SI, by: 0.06, armR: [-2.8, 0, -0.3], armL: [-2.8, 0, 0.3], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [10, { ...SI, by: -0.2, torso: [0.25, 0, 0], armR: [0, 0, -1.2], armL: [0, 0, 1.2], foreR: [0, 0, 0], foreL: [0, 0, 0], legR: [0.5, 0, 0], shinR: [0.5, 0, 0] }], [24, { ...SI, by: -0.18, torso: [0.2, 0, 0], armR: [0, 0, -1.2], armL: [0, 0, 1.2], legR: [0.5, 0, 0], shinR: [0.5, 0, 0] }], [46, SI]],
  },
  // ---------- 空中 ----------
  nair: {
    // 水の輪をまとって回る（連続ヒット）
    total: 42, aerial: true, landLag: 8, acBefore: 3, acAfter: 32, alpha: 0.85, sfx: [4, 'whoosh', 0.5],
    hit: [hb(5, 7, 0, 1.0, 0.85, 2.5, 70, 20, 10, { group: 1, link: true }), hb(11, 13, 0, 1.0, 0.85, 2.5, 70, 20, 10, { group: 2, link: true }), hb(17, 19, 0, 1.0, 0.85, 2.5, 70, 20, 10, { group: 3, link: true }), hb(24, 27, 0, 1.0, 0.95, 4, 45, 40, 90, { group: 4, away: true })],
    onFrame(ft, f) { if (f >= 4 && f <= 26 && f % 2 === 0) { const a = f * 0.7; splash(ft, ft.x + Math.cos(a) * 0.8, ft.y + 1.0 + Math.sin(a) * 0.5, 1, 0.45); } },
    anim: [[0, AIR], [4, { ...AIR, body: [0, 0, 0], armR: [-0.3, 0, -1.4], armL: [-0.3, 0, 1.4], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [26, { ...AIR, body: [0, PI * 4, 0], armR: [-0.3, 0, -1.4], armL: [-0.3, 0, 1.4], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [42, { ...AIR, body: [0, PI * 4, 0] }]],
  },
  fair: {
    // 剣を前へ振り下ろす
    total: 38, aerial: true, landLag: 12, acBefore: 4, acAfter: 28, trail: 'blade', trailF: [7, 13], sfx: [8, 'slash', 0.7], ...blade,
    hit: [hb(9, 12, 0, 0, 0.55, 11, 42, 30, 94, { path: [[0.9, 2.3], [1.55, 0.9]] }), hb(9, 12, 0.7, 1.4, 0.45, 9, 42, 30, 90)],
    anim: [[0, AIR], [7, { ...AIR, ...B_UP, legR: [0.4, 0, 0] }], [11, { ...AIR, ...B_FWD, armR: [-1.0, 0, -0.05], bz: 0 }], [20, { ...AIR, ...B_FWD, armR: [-0.95, 0, -0.05], bz: 0 }], [38, AIR]],
  },
  bair: {
    // 尾で後ろを打つ
    total: 34, aerial: true, landLag: 10, acBefore: 3, acAfter: 25, trail: 'tail', trailF: [5, 11], sfx: [6, 'whoosh', 0.7],
    hit: [hb(7, 10, -1.0, 0.75, 0.58, 12, 145, 36, 98), hb(7, 10, -0.5, 0.8, 0.45, 10, 145, 34, 94)],
    anim: [[0, AIR], [5, { ...AIR, torso: [0.4, 0, 0], legR: [-0.6, 0, 0], shinR: [-0.4, 0, 0] }], [8, { ...AIR, body: [0.5, 0, 0], torso: [0.3, 0, 0], head: [-0.5, 0, 0], legR: [1.0, 0, 0], shinR: [-0.3, 0, 0], armR: [-1.2, 0, -0.6], armL: [-1.2, 0, 0.6] }], [16, { ...AIR, body: [0.45, 0, 0], torso: [0.3, 0, 0], head: [-0.5, 0, 0], legR: [0.95, 0, 0], shinR: [-0.25, 0, 0] }], [34, AIR]],
  },
  uair: {
    // 剣を頭上で払う
    total: 32, aerial: true, landLag: 8, acBefore: 3, acAfter: 24, trail: 'blade', trailF: [5, 11], sfx: [5, 'slash', 0.6], ...blade,
    hit: [hb(6, 10, 0, 0, 0.55, 9, 85, 30, 92, { path: [[0.9, 2.2], [-0.7, 2.5]] }), hb(6, 10, 0, 0, 0.5, 9, 85, 30, 92, { path: [[0.5, 2.9], [-0.3, 3.0]] })],
    anim: [[0, AIR], [5, { ...AIR, ...B_FWD, armR: [-2.0, 0, -0.1], bz: 0, torso: [0, 0.2, 0] }], [10, { ...AIR, ...B_UP, armR: [-3.9, 0, -0.1], torso: [-0.2, -0.1, 0], head: [-0.3, 0, 0] }], [18, { ...AIR, ...B_UP, armR: [-3.8, 0, -0.1] }], [32, AIR]],
  },
  dair: {
    // 足もとへ氷のつららを突き出す（出はじめはメテオ）
    total: 42, aerial: true, landLag: 16, acBefore: 3, acAfter: 32, sfx: [9, 'whoosh', 0.7],
    hit: [hb(11, 14, 0.05, -0.35, 0.5, 12, 270, 25, 85), hb(15, 22, 0.05, -0.2, 0.42, 8, 70, 25, 70)],
    onFrame(ft, f) { if (f === 11) { spike(ft, ft.x, ft.y + 0.3, 1.0, 0.24, PI, 12); frost(ft, ft.x, ft.y - 0.4, 5); audio.tech(); } },
    anim: [[0, AIR], [8, { ...AIR, armR: [-2.8, 0, -0.3], armL: [-2.8, 0, 0.3], legR: [0.9, 0, 0], shinR: [0.6, 0, 0] }], [11, { ...AIR, armR: [-0.2, 0, -0.2], armL: [-0.2, 0, 0.2], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [0.25, 0, 0], legR: [0.9, 0, 0], shinR: [0.6, 0, 0] }], [22, { ...AIR, armR: [-0.2, 0, -0.2], armL: [-0.2, 0, 0.2], torso: [0.2, 0, 0], legR: [0.9, 0, 0] }], [42, AIR]],
  },
  // ---------- 必殺ワザ ----------
  neutralb: {
    // アイスアロー: 氷の弓を引いて矢を放つ。ためるほど速く、強くなる
    total: 44, charge: { f: 12, max: 70 }, keepVel: true, fall: 0.5, landContinue: true,
    onStart(ft) { ft.model.setWeapon('bow'); },
    onEnd(ft) { ft.model.setWeapon(null); },
    onCharge(ft) { if (ft.charge % 6 === 0) frost(ft, ft.x + ft.facing * 0.7, ft.y + 1.45, 1); },
    onFrame(ft, f) {
      if (ft.grounded) ft.friction(1.5);
      if (f === 14) {
        const c = ft.chargeRatio;
        shard(ft, { x: ft.x + ft.facing * 0.9, y: ft.y + 1.42, vx: ft.facing * (0.3 + 0.2 * c), r: 0.16 + 0.1 * c, dmg: 5 + 11 * c, bkb: 22 + 26 * c, kbg: 64, life: 70 });
        frost(ft, ft.x + ft.facing * 0.9, ft.y + 1.42, 4 + Math.floor(c * 6)); audio.whoosh(0.4 + c * 0.6); audio.tech();
      }
    },
    anim: [[0, SI], [10, BOW], [13, { ...BOW, armR: [-1.3, 0, 0.6], foreR: [-2.1, 0, 0] }], [16, { ...BOW, armR: [-1.0, 0, -0.5], foreR: [-0.6, 0, 0] }], [30, { ...BOW, armR: [-0.9, 0, -0.5], foreR: [-0.6, 0, 0] }], [44, SI]],
  },
  sideb: {
    // アクアスライド: 波に乗って前へ滑り、巻き込んだ相手を最後に打ち上げる
    total: 50, keepVel: true, noDrift: true, canLeaveGround: true, landContinue: true, noGravity: [6, 28],
    hit: [hb(8, 10, 0.6, 0.8, 0.7, 2, 15, 30, 10, { group: 1, link: true }), hb(13, 15, 0.6, 0.8, 0.7, 2, 15, 30, 10, { group: 2, link: true }), hb(18, 20, 0.6, 0.8, 0.7, 2, 15, 30, 10, { group: 3, link: true }), hb(23, 25, 0.6, 0.8, 0.7, 2, 15, 30, 10, { group: 4, link: true }), hb(29, 32, 0.7, 1.0, 0.8, 6, 65, 60, 88, { group: 5 })],
    onStart(ft) { if (!ft.grounded) ft.sideBUsed = true; ft.vy = 0; },
    onFrame(ft, f) {
      if (f < 7) { ft.vx = approach(ft.vx, 0, 0.02); if (!ft.grounded) ft.vy = 0; }
      else if (f <= 28) {
        ft.vx = ft.facing * 0.24; if (!ft.grounded) ft.vy = 0;
        if (f === 7) audio.whoosh(1);
        splash(ft, ft.x - ft.facing * 0.2, ft.y + 0.4, 2, 0.6); splash(ft, ft.x + ft.facing * 0.6, ft.y + 0.7, 1, 0.5);
      } else { ft.vx *= 0.85; if (f === 29) { ft.battle.effects.ring(ft.x + ft.facing * 0.7, ft.y + 1.0, WATER, 2.6, 14); splash(ft, ft.x + ft.facing * 0.7, ft.y + 1.2, 10, 0.7); } }
    },
    anim: [[0, SI], [6, { ...SI, by: -0.15, torso: [0.3, 0, 0], armR: [0.6, 0, -0.4], armL: [0.6, 0, 0.4] }], [9, { ...SI, body: [0.7, 0, 0], by: -0.2, head: [-0.6, 0, 0], armR: [-2.6, 0, -0.3], armL: [-2.6, 0, 0.3], foreR: [0, 0, 0], foreL: [0, 0, 0], legR: [0.4, 0, 0], shinR: [0.3, 0, 0] }], [28, { ...SI, body: [0.7, 0, 0], by: -0.2, head: [-0.6, 0, 0], armR: [-2.6, 0, -0.3], armL: [-2.6, 0, 0.3], legR: [0.4, 0, 0], shinR: [0.3, 0, 0] }], [31, { ...SI, by: 0.05, torso: [-0.3, 0, 0], armR: [-2.9, 0, -0.6], armL: [-2.9, 0, 0.6], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [50, SI]],
  },
  upb: {
    // ウォータースパウト: 吹き上がる水柱に乗って上昇する
    total: 44, helpless: true, helplessLag: 18, ledgeGrab: 12, noDrift: true, keepVel: true, noGravity: [5, 26],
    hit: [hb(5, 7, 0, 0.9, 0.8, 2, 88, 40, 8, { group: 1, link: true }), hb(10, 12, 0, 1.0, 0.8, 2, 88, 40, 8, { group: 2, link: true }), hb(15, 17, 0, 1.1, 0.8, 2, 88, 40, 8, { group: 3, link: true }), hb(21, 25, 0, 1.6, 0.9, 5, 80, 60, 88, { group: 4 })],
    onStart(ft) { ft.upBUsed = true; ft.vx *= 0.4; },
    onFrame(ft, f) {
      if (f < 5) ft.vy = ft.grounded ? 0 : Math.max(ft.vy, 0) * 0.5;
      if (f === 5) { ft.grounded = false; ft.surface = null; ft.y += 0.02; audio.whoosh(1); ft.battle.effects.ring(ft.x, ft.y + 0.2, WATER, 2.2, 14); }
      if (f >= 5 && f <= 26) {
        ft.vy = 0.34 * (1 - (f - 5) / 23) + 0.015;
        ft.vx = approach(ft.vx, ft.input.stick.x * 0.12, 0.014);
        for (let i = 0; i < 3; i++) ft.battle.effects.spawn({ x: ft.x + rand(-0.3, 0.3), y: ft.y + rand(-0.6, 0.4), z: 0.3, vy: rand(0.05, 0.14), life: 14, size: rand(0.4, 0.7), size1: 0.1, color: i ? WATER : 0xe8fbff });
      }
      if (f > 26) ft.drift(0.6);
    },
    anim: [[0, { ...SI, by: -0.2, torso: [0.3, 0, 0] }], [5, { ...SI, body: [0, 0, 0], armR: [-3.0, 0, -0.2], armL: [-3.0, 0, 0.2], foreR: [0, 0, 0], foreL: [0, 0, 0], legR: [0.05, 0, 0], shinR: [-0.3, 0, 0], head: [-0.3, 0, 0] }], [26, { ...SI, body: [0, PI * 4, 0], armR: [-3.0, 0, -0.2], armL: [-3.0, 0, 0.2], foreR: [0, 0, 0], foreL: [0, 0, 0], legR: [0.05, 0, 0], shinR: [-0.3, 0, 0], head: [-0.3, 0, 0] }], [44, { ...AIR, body: [0, PI * 4, 0] }]],
  },
  downb: {
    // つらら落とし: 前方の頭上に氷のつららを3本つくり、順に落とす
    total: 52, keepVel: true, fall: 0.5, landContinue: true, sfx: [10, 'whoosh', 0.5],
    onFrame(ft, f) {
      if (ft.grounded) ft.friction(1.5);
      for (let i = 0; i < 3; i++) {
        const x = ft.x + ft.facing * (1.3 + i * 1.0), y = ft.y + 3.4;
        if (f === 10 + i * 5) { frost(ft, x, y, 4); audio.tech(); }
        if (f === 18 + i * 6) shard(ft, { x, y, vx: ft.facing * 0.02, vy: -0.3, r: 0.24, dmg: 7, ang: 60, bkb: 40, kbg: 62, life: 40 });
      }
    },
    anim: [[0, SI], [10, { ...SI, armR: [-2.9, 0, -0.3], foreR: [-0.2, 0, 0], armL: [-0.6, 0, 0.5], torso: [-0.15, 0, 0], head: [-0.3, 0, 0] }], [18, { ...SI, armR: [-3.0, 0, -0.3], foreR: [-0.2, 0, 0], torso: [-0.15, 0, 0], head: [-0.3, 0, 0] }], [22, { ...SI, armR: [-1.0, 0, -0.1], foreR: [0, 0, 0], torso: [0.3, 0.2, 0] }], [36, { ...SI, armR: [-0.9, 0, -0.1], torso: [0.25, 0.2, 0] }], [52, SI]],
  },
  // ---------- 最後の切りふだ ----------
  final: {
    // ダイヤモンドダスト: 吹雪で周りの相手を凍えさせて動けなくし、巨大な氷の結晶ごと砕く
    total: 130, fs: true, intang: [0, 130], noGravity: [0, 130], noDrift: true, keepVel: true,
    onStart(ft) { ft.vx = 0; ft.vy = 0; ft.battle.startCine(ft, 40); },
    onFrame(ft, f) {
      const b = ft.battle, cx = ft.x + ft.facing * 2.2, cy = ft.y + 1.4;
      ft.vx = 0; if (!ft.grounded) ft.vy = 0;
      if (f < 40 && f % 2 === 0) frost(ft, ft.x + rand(-1, 1), ft.y + rand(0.5, 2.5), 1);
      if (f === 40) { audio.fsBoom(); b.shakeCam(0.4); }
      if (f >= 40 && f < 96) {
        for (let i = 0; i < 5; i++) { const a = rand(0, PI * 2), d = rand(0, 3.6); b.effects.spawn({ x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d * 0.7, z: 0.4, vx: ft.facing * rand(0.05, 0.15), vy: rand(-0.04, 0.02), life: 16, size: rand(0.2, 0.5), size1: 0.05, color: i % 2 ? ICE : 0xffffff, tex: i % 3 ? 'soft' : 'star' }); }
        if (f % 6 === 0) b.fsTrap(ft, cx, cy, 3.6);
        if (f % 8 === 0) { b.fsDamage(ft, 3); audio.tech(); }
        if (f === 70) { spike(ft, cx, ft.y, 3.4, 0.9, 0, 32); b.shakeCam(0.3); }
      }
      if (f === 100) {
        b.effects.ring(cx, cy, ICE, 9, 26); b.effects.koBlast(cx, cy, 0xe8fbff); b.shakeCam(0.7); audio.fsBoom();
        b.fsLaunch(ft, { dmg: 20, ang: 50, bkb: 105, kbg: 100 });
      }
    },
    onEnd(ft) { ft.battle.fsRelease(ft); },
    anim: [[0, SI], [30, { ...SI, by: 0.15, armR: [-2.9, 0, -0.5], armL: [-2.9, 0, 0.5], foreR: [0, 0, 0], foreL: [0, 0, 0], head: [-0.3, 0, 0] }], [40, { ...SI, by: 0.1, armR: [-1.5, 0, -0.2], armL: [-1.5, 0, 0.2], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [0.15, 0, 0] }], [96, { ...SI, by: 0.1, armR: [-1.5, 0, -0.2], armL: [-1.5, 0, 0.2], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [0.15, 0, 0] }], [100, { ...SI, armR: [-0.3, 0, -1.2], armL: [-0.3, 0, 1.2], torso: [0.3, 0, 0] }], [130, SI]],
  },
  // ---------- つかみ・投げ ----------
  grab: {
    total: 34,
    hit: [hb(7, 8, 0.8, 1.35, 0.45, 0, 0, 0, 0, { type: 'grab' })],
    anim: [[0, SI], [7, { ...SI, armL: [-1.5, 0, 0.05], foreL: [0, 0, 0], torso: [0.2, -0.4, 0], bz: 0.1 }], [18, { ...SI, armL: [-1.4, 0, 0.05], torso: [0.15, -0.3, 0] }], [34, SI]],
  },
  dashgrab: {
    total: 42, keepVel: true,
    hit: [hb(10, 11, 1.0, 1.35, 0.48, 0, 0, 0, 0, { type: 'grab' })],
    onFrame(ft) { ft.friction(1.2); },
    anim: [[0, SI], [10, { ...SI, armL: [-1.5, 0, 0.05], foreL: [0, 0, 0], torso: [0.35, -0.4, 0], bz: 0.2 }], [24, { ...SI, armL: [-1.4, 0, 0.05], torso: [0.3, -0.3, 0] }], [42, SI]],
  },
  pummel: {
    // 冷気を浴びせる
    total: 18, pummelAt: 6, pummelDmg: 1.3,
    onFrame(ft, f) { if (f === 6 && ft.grabbing) frost(ft, ft.grabbing.x, ft.grabbing.y + 1, 3); },
    anim: [[0, { ...SI, armL: [-1.4, 0, 0.05] }], [6, { ...SI, armL: [-1.4, 0, 0.05], armR: [-1.4, 0, 0.3], foreR: [-0.4, 0, 0] }], [18, { ...SI, armL: [-1.4, 0, 0.05] }]],
  },
  fthrow: {
    // 水の塊をぶつけて吹き飛ばす
    total: 34, throwAt: 12, throwHit: { dmg: 9, ang: 40, bkb: 62, kbg: 66 },
    hold: () => [0.8, 0.4],
    onFrame(ft, f) { if (f === 12) splash(ft, ft.x + ft.facing * 0.9, ft.y + 1.2, 8, 0.6); },
    anim: [[0, { ...SI, armL: [-1.4, 0, 0.05] }], [8, { ...SI, armL: [-1.4, 0, 0.05], armR: [0.5, 0, -0.5], foreR: [-1.6, 0, 0], torso: [0.05, -0.4, 0] }], [12, { ...SI, armR: [-1.5, 0, -0.05], foreR: [0, 0, 0], torso: [0.2, 0.5, 0], bz: 0.15 }], [34, SI]],
  },
  bthrow: {
    // 振り向きざまに尾で打つ
    total: 40, throwAt: 17, throwHit: { dmg: 10, ang: 140, bkb: 60, kbg: 95 },
    hold: (f) => { const t = Math.min(1, f / 15); return [0.8 * Math.cos(PI * t), 0.4 + 0.5 * Math.sin(PI * t)]; },
    anim: [[0, { ...SI, armL: [-1.4, 0, 0.05] }], [12, { ...SI, torso: [0, -1.2, 0], armL: [1.0, 0, 0.3] }], [17, { ...SI, torso: [-0.2, -0.6, 0], legR: [1.3, 0, 0], shinR: [-0.3, 0, 0] }], [40, SI]],
  },
  uthrow: {
    // 足もとから水柱で打ち上げる
    total: 36, throwAt: 13, throwHit: { dmg: 8, ang: 88, bkb: 68, kbg: 62 },
    hold: (f) => [0.7 - f * 0.03, 0.4 + f * 0.06],
    onFrame(ft, f) { if (f === 13) { splash(ft, ft.x + ft.facing * 0.4, ft.y + 1.0, 10, 0.7); ft.battle.effects.ring(ft.x + ft.facing * 0.4, ft.y + 0.3, WATER, 2, 12); } },
    anim: [[0, { ...SI, armL: [-1.4, 0, 0.05] }], [9, { ...SI, by: -0.12, armR: [-0.6, 0, -0.3], armL: [-0.6, 0, 0.3] }], [13, { ...SI, by: 0.06, armR: [-3.0, 0, -0.2], armL: [-3.0, 0, 0.2], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [36, SI]],
  },
  dthrow: {
    // 地面に押しつけて凍らせる
    total: 38, throwAt: 17, throwHit: { dmg: 7, ang: 72, bkb: 65, kbg: 48 },
    hold: (f) => [0.75, Math.max(0, 0.4 - f * 0.04)],
    onFrame(ft, f) { if (f === 17) { spike(ft, ft.x + ft.facing * 0.75, ft.y, 0.8, 0.22, 0, 16); audio.tech(); } },
    anim: [[0, { ...SI, armL: [-1.4, 0, 0.05] }], [10, { ...SI, by: -0.2, torso: [0.5, 0, 0], armL: [-0.8, 0, 0.05], armR: [-0.8, 0, -0.05] }], [17, { ...SI, by: -0.25, torso: [0.6, 0, 0], armL: [-0.7, 0, 0.05], armR: [-0.7, 0, -0.05] }], [38, SI]],
  },
  getupattack: {
    total: 38, intang: [0, 14], trail: 'tail', trailF: [12, 22],
    hit: [hb(14, 16, 1.0, 0.5, 0.58, 6, 48, 60, 50), hb(19, 21, -1.0, 0.5, 0.58, 6, 132, 60, 50, { group: 1 })],
    anim: [[0, { ...SI, by: -0.3, torso: [0.5, 0, 0] }], [14, { ...SI, by: -0.25, legR: [-1.2, 0, 0], shinR: [-0.5, 0, 0] }], [20, { ...SI, by: -0.25, legR: [1.2, 0, 0], shinR: [-0.3, 0, 0] }], [38, SI]],
  },
  ledgeattack: {
    total: 38, intang: [0, 12], trail: 'handR', trailF: [10, 16], sfx: [11, 'whoosh', 0.6],
    hit: [hb(12, 15, 1.0, 1.0, 0.65, 9, 45, 60, 50)],
    onFrame(ft, f) { if (f === 12) splash(ft, ft.x + ft.facing * 1.0, ft.y + 1.0, 6, 0.5); },
    anim: [[0, { ...SI, by: -0.12 }], [12, { ...SI, armR: [-1.5, 0, -0.05], foreR: [0, 0, 0], torso: [0.3, 0.45, 0], bz: 0.2 }], [24, { ...SI, armR: [-1.4, 0, -0.05], torso: [0.25, 0.4, 0] }], [38, SI]],
  },
};

export const SNEGU = {
  id: 'snegu',
  name: 'スネグーラチカ',
  en: 'SNEGUROCHKA',
  title: '雪の水精',
  color: 0x6ad8e8,
  css: '#6ad8e8',
  desc: '水と氷をあやつる水の精。氷の剣の長いリーチと、氷の弓・つららの飛び道具で間合いを支配する。体は軽く、地上ではよく滑る。',
  specials: ['アイスアロー（氷の弓・ためるほど強い）', 'アクアスライド（波に乗って突進・連続ヒット）', 'ウォータースパウト（水柱で上昇）', 'つらら落とし（前方の頭上から3本）'],
  stats: {
    weight: 84, height: 1.95, radius: 0.36,
    walkSpeed: 0.08, dashSpeed: 0.165, dashFrames: 10, runSpeed: 0.15, traction: 0.007,
    airSpeed: 0.1, airAccel: 0.008, airFriction: 0.0025,
    gravity: 0.0082, fallSpeed: 0.15, fastFall: 0.24,
    jumpV: 0.222, hopV: 0.138, djV: 0.205, airJumps: 1, jumpsquat: 3, rollSpeed: 0.14,
  },
  grabHold: [0.8, 0.4],
  buildModel: buildSnegu,
  anims: makeAnims({
    idle: SI, hipY: SNEGU_HIP, bob: 2.2,
    override: {
      victory: (f) => ({ ...SI, body: [0, Math.min(1, f / 40) * PI * 2, 0], armR: [-2.8, 0, -0.5], armL: [-0.3, 0, 0.9], foreR: [-0.2, 0, 0], head: [-0.15, 0, 0] }),
    },
  }),
  moves,
};
