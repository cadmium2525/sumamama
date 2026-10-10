// ドロス: 鈍重だが一撃が重い魔王。滅砕拳、獄炎掌、雷閃掌、烈震脚。スマッシュ攻撃は大剣。
import * as THREE from 'three';
import { buildDoros, DOROS_HIP, DOROS_SCALE } from '../models/dorosModel.js';
import { makeAnims } from './anims.js';
import { approach, rand } from '../util.js';
import { audio } from '../audio.js';

// 攻撃判定の位置と大きさは、体の拡大率に合わせて広げる
const HS = DOROS_SCALE * 1.07;
const hb = (f0, f1, x, y, r, dmg, ang, bkb, kbg, extra = {}) => ({ f: [f0, f1], x: x * HS, y: y * HS, r: r * HS, dmg, ang, bkb, kbg, ...extra });
const DARK = 0xb040ff, DARK2 = 0x5a1a9a;

// 基本姿勢: 胸を張って仁王立ち、拳を握る
const GI = { by: -0.05, legR: [-0.1, 0, -0.17], shinR: [0.18, 0, 0.05], legL: [0.04, 0, 0.17], shinL: [0.14, 0, -0.05], torso: [0.12, 0, 0], head: [-0.06, 0, 0], armR: [0.05, 0, -0.32], foreR: [-0.35, 0, 0.1], armL: [0.05, 0, 0.32], foreL: [-0.35, 0, -0.1] };
const AIR = { legR: [-0.5, 0, -0.12], shinR: [0.8, 0, 0], legL: [0.15, 0, 0.12], shinL: [0.5, 0, 0], armR: [-0.3, 0, -0.6], foreR: [-0.7, 0, 0], armL: [-0.3, 0, 0.6], foreL: [-0.7, 0, 0], torso: [0.1, 0, 0] };
const SWORD_UP = { ...GI, armR: [-3.3, 0, -0.15], foreR: [-0.2, 0, 0], wep: [1.3, 0, 0], torso: [-0.25, 0.2, 0], armL: [-0.5, 0, 0.5], legR: [0.2, 0, -0.15], legL: [-0.3, 0, 0.15], shinL: [0.3, 0, 0] };
const SWORD_DOWN = { ...GI, armR: [-0.95, 0, -0.05], foreR: [-0.1, 0, 0], wep: [1.57, 0, 0], torso: [0.55, 0.3, 0], armL: [0.3, 0, 0.5], legR: [0.4, 0, -0.15], shinR: [0.3, 0, 0], legL: [-0.8, 0, 0.15], shinL: [0.9, 0, 0], by: -0.08, bz: 0.25 };

// 闇の炎（紫の粒）
function darkFx(ft, x, y, n = 1, size = 0.6) {
  for (let i = 0; i < n; i++) ft.battle.effects.spawn({ x: x + rand(-0.25, 0.25), y: y + rand(-0.25, 0.25), z: 0.4, vx: rand(-0.03, 0.03), vy: rand(0.01, 0.06), life: 18, size: rand(size * 0.6, size), size1: 0.1, color: i % 2 ? DARK : DARK2 });
}
function handPos(ft, s = -1) { return ft.model.hands[s].getWorldPosition(ft.battle.tmpV); }
// つかんでいる相手へ直接ダメージ
function zap(ft, dmg) {
  const v = ft.grabbing;
  if (!v) return;
  v.damage = Math.min(999, v.damage + dmg);
  ft.stats.dealt += dmg; v.stats.taken += dmg;
  v.flashT = 6;
  ft.battle.app.hud.bump(v.slot);
  ft.battle.effects.hitSpark(v.x, v.y + v.height * 0.6, DARK, 0.3);
  audio.hit(0.3);
}
// 滅砕拳の威力: 地上30／振り向き37、空中で出すとさらに高い（38／40）
const wpDmg = (a) => (a.vars.air ? (a.vars.rev ? 40 : 38) : (a.vars.rev ? 37 : 30));
const sword = { onStart(ft) { ft.model.setSword(true); }, onEnd(ft) { ft.model.setSword(false); } };

// 最後の切りふだの魔獣（大まかな影絵）
class Beast {
  constructor(battle, x, y, dir) {
    this.b = battle; this.x = x; this.y = y; this.dir = dir; this.t = 0; this.vx = 0;
    const g = new THREE.Group();
    const dark = new THREE.MeshStandardMaterial({ color: 0x1c1a2a, roughness: 0.7, metalness: 0.2, emissive: 0x200838 });
    const mane = new THREE.MeshStandardMaterial({ color: 0xd2501c, roughness: 0.6, emissive: 0x401000 });
    const tusk = new THREE.MeshStandardMaterial({ color: 0xf0e8d0, roughness: 0.4 });
    const glow = new THREE.MeshBasicMaterial({ color: 0xffd040 });
    const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, s = null) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); if (s) m.scale.set(...s); g.add(m); return m; };
    add(new THREE.SphereGeometry(1, 16, 12), dark, 0, 2.4, 0, 0, 0, 0, [2.0, 1.9, 1.6]); // 胴
    add(new THREE.SphereGeometry(1, 14, 10), dark, 1.9, 2.9, 0, 0, 0, 0, [1.1, 1.0, 1.0]); // 頭
    add(new THREE.SphereGeometry(1, 12, 8), dark, 2.9, 2.5, 0, 0, 0, 0, [0.8, 0.6, 0.7]); // 鼻面
    for (const s of [-1, 1]) {
      add(new THREE.ConeGeometry(0.22, 1.3, 6), tusk, 2.9, 2.7, s * 0.6, 0, 0, -0.9); // 牙
      add(new THREE.ConeGeometry(0.3, 1.6, 6), tusk, 1.6, 4.0, s * 0.7, s * 0.5, 0, -0.5); // 角
      add(new THREE.SphereGeometry(0.14, 8, 6), glow, 2.55, 3.2, s * 0.55); // 目
      add(new THREE.CylinderGeometry(0.5, 0.42, 2.2, 8), dark, 0.9, 1.0, s * 0.9); // 前脚
      add(new THREE.CylinderGeometry(0.55, 0.45, 2.0, 8), dark, -1.1, 0.9, s * 0.9); // 後脚
      add(new THREE.BoxGeometry(0.16, 3.6, 0.5), new THREE.MeshStandardMaterial({ color: 0xb8bcc8, metalness: 1, roughness: 0.2 }), 2.4, 3.6, s * 1.7, 0, 0, -0.7); // 双剣
    }
    for (let i = 0; i < 7; i++) add(new THREE.ConeGeometry(0.4, 1.4, 5), mane, 1.2 - i * 0.45, 4.1 - i * 0.12, 0, 0, 0, 0.5 + i * 0.1); // たてがみ
    g.scale.set(0.01, 0.01, 0.01);
    this.mesh = g;
    battle.scene.add(g);
  }
  update() {
    this.t++;
    this.x += this.vx;
    const k = Math.min(1, this.t / 14);
    this.mesh.scale.set(this.dir * k, k, k);
    this.mesh.position.set(this.x, this.y + (this.vx ? Math.abs(Math.sin(this.t * 0.6)) * 0.3 : 0), 0);
    if (this.t % 2 === 0) this.b.effects.spawn({ x: this.x + rand(-2, 2), y: this.y + rand(0.5, 4.5), z: 0.8, vy: 0.05, life: 20, size: rand(0.8, 1.6), size1: 0.2, color: this.t % 4 ? DARK : DARK2 });
  }
  remove() {
    if (this.dead) return;
    this.dead = true;
    this.b.scene.remove(this.mesh);
    this.mesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  }
}

const moves = {
  // ---------- 弱攻撃: 雷を帯びた掌底（単発） ----------
  jab1: {
    total: 34, trail: 'handR', trailF: [5, 10], sfx: [6, 'whoosh', 0.5],
    hit: [hb(8, 10, 1.15, 1.45, 0.5, 11, 361, 30, 100), hb(8, 10, 0.6, 1.45, 0.45, 8, 361, 30, 90)],
    onFrame(ft, f) { if (f >= 7 && f <= 11) { const p = handPos(ft); darkFx(ft, p.x, p.y, 1, 0.4); ft.battle.effects.sparkle(p.x, p.y, 0xd0b0ff, 1, 0.3); } },
    anim: [[0, GI], [5, { ...GI, armR: [0.3, 0, -0.5], foreR: [-1.6, 0, 0], torso: [0.05, -0.4, 0] }], [8, { ...GI, armR: [-1.55, 0, -0.05], foreR: [0, 0, 0], torso: [0.15, 0.45, 0], bz: 0.12, legL: [-0.3, 0, 0.14], shinL: [0.3, 0, 0] }], [18, { ...GI, armR: [-1.5, 0, -0.05], torso: [0.12, 0.4, 0], bz: 0.1 }], [34, GI]],
  },
  // ---------- 強攻撃 ----------
  ftilt: {
    // 突き蹴り
    total: 39, trail: 'footR', trailF: [8, 13], sfx: [9, 'whoosh', 0.7],
    hit: [hb(10, 12, 1.45, 1.15, 0.5, 14, 30, 30, 96), hb(10, 12, 0.8, 1.15, 0.5, 13, 30, 28, 94)],
    anim: [[0, GI], [6, { ...GI, legR: [-1.2, 0, -0.1], shinR: [1.8, 0, 0], torso: [-0.15, 0, 0], armR: [0.3, 0, -0.5], armL: [-0.4, 0, 0.6] }], [10, { ...GI, legR: [-1.5, 0, -0.05], shinR: [0.05, 0, 0], torso: [-0.3, 0, 0], armR: [0.5, 0, -0.6], armL: [-0.3, 0, 0.7], bz: 0.1 }], [20, { ...GI, legR: [-1.4, 0, -0.05], shinR: [0.2, 0, 0], torso: [-0.25, 0, 0] }], [39, GI]],
  },
  utilt: {
    // 爆砕蹴: 足を高く掲げてから踵を落とし、爆発を起こす。発生は非常に遅い
    total: 112, trail: 'footR', trailF: [56, 64],
    hit: [hb(60, 62, 1.1, 0.5, 1.15, 24, 70, 40, 92, { shield: 40 }), hb(60, 62, 1.0, 1.6, 0.8, 24, 70, 40, 92, { shield: 40 })],
    onFrame(ft, f) {
      const e = ft.battle.effects;
      // 掲げた足に相手を吸い寄せる風
      if (f >= 12 && f < 58) {
        if (f % 4 === 0) e.spawn({ x: ft.x + ft.facing * rand(1.5, 3.5), y: ft.y + rand(0.2, 1.6), z: 0.3, vx: -ft.facing * 0.1, vy: 0.01, life: 14, size: 0.3, size1: 0.05, color: 0xd0c0ff });
        for (const d of ft.battle.fighters) {
          if (d === ft || !d.alive || d.state === 'grabbed' || d.state === 'ledge') continue;
          const dx = (d.x - ft.x) * ft.facing;
          if (dx > 0.3 && dx < 4 && Math.abs(d.y - ft.y) < 1.5) d.x -= ft.facing * 0.012;
        }
      }
      if (f === 56) audio.whoosh(1);
      if (f === 60) {
        const x = ft.x + ft.facing * 1.15;
        e.ring(x, ft.y + 0.1, DARK, 4.2, 18); e.dust(x, ft.y, 10, 0); darkFx(ft, x, ft.y + 0.6, 10, 1.4);
        ft.battle.shakeCam(0.3); audio.fsBoom ? audio.hit(1) : null;
      }
    },
    anim: [[0, GI], [14, { ...GI, legR: [-2.2, 0, -0.1], shinR: [0.6, 0, 0], torso: [-0.2, 0, 0], armR: [0.4, 0, -0.6], armL: [0.3, 0, 0.7], legL: [0.1, 0, 0.14] }], [55, { ...GI, legR: [-2.75, 0, -0.1], shinR: [0.1, 0, 0], torso: [-0.3, 0, 0], armR: [0.5, 0, -0.7], armL: [0.3, 0, 0.8], legL: [0.12, 0, 0.14] }], [60, { ...GI, legR: [-0.9, 0, -0.05], shinR: [0.1, 0, 0], torso: [0.35, 0, 0], legL: [0.1, 0, 0.14], shinL: [0.5, 0, 0], by: -0.05 }], [84, { ...GI, legR: [-0.8, 0, -0.05], shinR: [0.3, 0, 0], torso: [0.3, 0, 0], by: -0.05 }], [112, GI]],
  },
  dtilt: {
    // しゃがんで足払い
    total: 35, trail: 'footR', trailF: [8, 13], sfx: [9, 'whoosh', 0.6],
    hit: [hb(10, 12, 1.5, 0.3, 0.5, 14, 80, 50, 60), hb(10, 12, 0.8, 0.3, 0.48, 14, 80, 50, 60)],
    anim: [[0, { ...GI, by: -0.18, legL: [-1.2, 0, 0.2], shinL: [2.0, 0, 0], legR: [-1.2, 0, -0.2], shinR: [2.0, 0, 0], torso: [0.4, 0, 0] }], [10, { ...GI, by: -0.23, legL: [-1.3, 0, 0.2], shinL: [2.2, 0, 0], legR: [-1.5, 0, -0.05], shinR: [0.05, 0, 0], torso: [0.1, 0, 0], armL: [0.6, 0, 0.5], armR: [0.4, 0, -0.6] }], [20, { ...GI, by: -0.23, legL: [-1.3, 0, 0.2], shinL: [2.2, 0, 0], legR: [-1.45, 0, -0.05], shinR: [0.2, 0, 0], torso: [0.15, 0, 0] }], [35, GI]],
  },
  dashattack: {
    // 肩からの体当たり
    total: 39, keepVel: true, sfx: [9, 'whoosh', 0.8],
    hit: [hb(10, 13, 0.9, 1.2, 0.72, 15, 60, 70, 60), hb(14, 19, 0.85, 1.2, 0.62, 11, 60, 55, 55)],
    onStart(ft) { ft.vx = ft.facing * 0.19; },
    onFrame(ft, f) { if (f <= 18) ft.vx = approach(ft.vx, ft.facing * 0.15, 0.01); else ft.friction(2.4); if (f % 4 === 0 && f < 18) ft.battle.effects.dust(ft.x, ft.y, 1, -ft.facing); },
    anim: [[0, GI], [9, { ...GI, torso: [0.5, -0.6, 0], armL: [-0.6, 0, 0.2], foreL: [-1.6, 0, 0], armR: [0.5, 0, -0.5], legR: [0.5, 0, -0.1], legL: [-0.9, 0, 0.1], shinL: [0.9, 0, 0], bz: 0.25, by: -0.05, head: [-0.3, 0.5, 0] }], [22, { ...GI, torso: [0.45, -0.5, 0], armL: [-0.6, 0, 0.2], foreL: [-1.6, 0, 0], bz: 0.2, by: -0.05 }], [39, GI]],
  },
  // ---------- スマッシュ攻撃（大剣） ----------
  fsmash: {
    // 大剣を頭上から振り下ろす
    total: 78, smash: true, charge: { f: 12, max: 60 }, trail: 'sword', trailF: [26, 36], sfx: [28, 'whoosh', 1], ...sword,
    hit: [hb(31, 34, 0, 0, 0.75, 24, 45, 30, 100, { path: [[0.6, 3.0], [2.1, 0.5]] }), hb(31, 34, 0, 0, 0.6, 24, 45, 30, 100, { path: [[0.3, 2.0], [1.2, 0.6]] })],
    onFrame(ft, f) { if (f === 34) { ft.battle.effects.dust(ft.x + ft.facing * 2, ft.y, 8, ft.facing); ft.battle.shakeCam(0.18); } },
    anim: [[0, { ...GI, wep: [1.3, 0, 0] }], [12, SWORD_UP], [28, { ...SWORD_UP, torso: [-0.35, 0.25, 0] }], [34, SWORD_DOWN], [52, SWORD_DOWN], [78, GI]],
  },
  usmash: {
    // 大剣で前から後ろへ頭上を大きく薙ぐ
    total: 59, smash: true, charge: { f: 9, max: 60 }, trail: 'sword', trailF: [17, 30], sfx: [19, 'whoosh', 1], ...sword,
    hit: [hb(20, 28, 0, 0, 0.75, 24, 80, 30, 96, { path: [[2.0, 1.0], [-1.6, 2.6]] }), hb(20, 28, 0, 0, 0.7, 21, 80, 30, 94, { path: [[1.0, 1.4], [-0.6, 2.4]] }), hb(22, 26, 0.2, 3.3, 0.8, 24, 85, 30, 96)],
    anim: [[0, { ...GI, wep: [1.57, 0, 0] }], [9, { ...GI, armR: [-0.5, 0, -0.2], foreR: [-0.3, 0, 0], wep: [1.57, 0, 0], torso: [0.35, 0.3, 0], by: -0.07 }], [19, { ...GI, armR: [-1.2, 0, -0.1], foreR: [0, 0, 0], wep: [1.57, 0, 0], torso: [0.2, 0.2, 0] }], [24, { ...GI, armR: [-2.9, 0, -0.1], foreR: [0, 0, 0], wep: [1.57, 0, 0], torso: [-0.4, 0, 0], head: [-0.5, 0, 0], legL: [-0.4, 0, 0.1], shinL: [0.4, 0, 0] }], [29, { ...GI, armR: [-4.3, 0, -0.1], foreR: [0, 0, 0], wep: [1.57, 0, 0], torso: [-0.3, -0.2, 0] }], [42, { ...GI, armR: [-4.2, 0, -0.1], wep: [1.57, 0, 0], torso: [-0.25, -0.2, 0] }], [59, GI]],
  },
  dsmash: {
    // 大剣を前へ突き、続けて後ろを薙ぐ（1段目から2段目へつながる）
    total: 62, smash: true, charge: { f: 6, max: 60 }, trail: 'sword', trailF: [12, 40], ...sword,
    hit: [hb(15, 17, 1.7, 0.6, 0.6, 5, 150, 60, 20, { group: 0 }), hb(15, 17, 0.9, 0.7, 0.55, 5, 150, 60, 20, { group: 0 }), hb(35, 38, -1.8, 0.7, 0.7, 15, 140, 40, 96, { group: 1 }), hb(35, 38, -0.9, 0.8, 0.6, 15, 140, 40, 96, { group: 1 })],
    onFrame(ft, f) { if (f === 14 || f === 33) audio.whoosh(0.9); },
    anim: [[0, { ...GI, wep: [1.57, 0, 0] }], [8, { ...GI, armR: [0.3, 0, -0.3], foreR: [-1.3, 0, 0], wep: [1.57, 0, 0], torso: [0.3, -0.3, 0], by: -0.09 }], [15, { ...GI, armR: [-1.15, 0, -0.05], foreR: [0, 0, 0], wep: [1.57, 0, 0], torso: [0.5, 0.3, 0], by: -0.14, bz: 0.2, legL: [-0.9, 0, 0.14], shinL: [1.2, 0, 0], legR: [0.4, 0, -0.14] }], [26, { ...GI, armR: [-0.9, 0, -0.4], foreR: [-0.6, 0, 0], wep: [1.57, 0, 0], torso: [0.3, -0.2, 0], by: -0.11 }], [35, { ...GI, armR: [1.25, 0, -0.25], foreR: [0, 0, 0], wep: [1.57, 0, 0], torso: [0.25, -0.9, 0], head: [0, -0.7, 0], by: -0.14, legR: [-0.8, 0, -0.14], shinR: [1.1, 0, 0], legL: [0.4, 0, 0.14] }], [46, { ...GI, armR: [1.15, 0, -0.25], wep: [1.57, 0, 0], torso: [0.25, -0.8, 0], by: -0.13 }], [62, GI]],
  },
  // ---------- 空中攻撃 ----------
  nair: {
    // 2連蹴り
    total: 43, aerial: true, landLag: 11, acBefore: 4, acAfter: 36, trail: 'footR', trailF: [5, 24],
    hit: [hb(7, 9, 0.95, 0.9, 0.55, 7, 70, 30, 30, { group: 0 }), hb(20, 23, 1.05, 0.95, 0.62, 12, 45, 40, 90, { group: 1 })],
    onFrame(ft, f) { if (f === 6 || f === 19) audio.whoosh(0.6); },
    anim: [[0, AIR], [7, { ...AIR, legR: [-1.4, 0, -0.05], shinR: [0.1, 0, 0], torso: [-0.2, 0, 0] }], [14, { ...AIR, legR: [-0.2, 0, -0.1], shinR: [1.0, 0, 0], legL: [-1.0, 0, 0.1], shinL: [1.6, 0, 0] }], [20, { ...AIR, legL: [-1.45, 0, 0.05], shinL: [0.1, 0, 0], legR: [0.3, 0, -0.1], torso: [-0.25, 0, 0] }], [30, { ...AIR, legL: [-1.3, 0, 0.05], shinL: [0.3, 0, 0] }], [43, AIR]],
  },
  fair: {
    // 兜割り: 上から拳を叩きつける
    total: 44, aerial: true, landLag: 16, acBefore: 4, acAfter: 37, trail: 'handR', trailF: [11, 18], sfx: [13, 'whoosh', 0.9],
    hit: [hb(14, 17, 0, 0, 0.72, 18, 45, 35, 96, { path: [[0.9, 2.3], [1.3, 0.8]] })],
    anim: [[0, AIR], [10, { ...AIR, armR: [-3.2, 0, -0.2], foreR: [-0.5, 0, 0], torso: [-0.25, 0.3, 0] }], [15, { ...AIR, armR: [-1.0, 0, -0.05], foreR: [0, 0, 0], torso: [0.45, 0.35, 0] }], [26, { ...AIR, armR: [-0.8, 0, -0.05], torso: [0.4, 0.3, 0] }], [44, AIR]],
  },
  bair: {
    // 裏拳
    total: 34, aerial: true, landLag: 11, acBefore: 4, acAfter: 26, trail: 'handR', trailF: [7, 13], sfx: [9, 'whoosh', 0.8],
    hit: [hb(10, 13, -1.25, 1.45, 0.6, 18.5, 140, 35, 96), hb(10, 13, -0.6, 1.45, 0.5, 17, 140, 35, 94)],
    anim: [[0, AIR], [6, { ...AIR, armR: [-1.3, 0, 0.6], foreR: [-1.4, 0, 0], torso: [0.1, 0.4, 0] }], [10, { ...AIR, armR: [1.5, 0, -0.2], foreR: [0, 0, 0], torso: [0, -1.0, 0], head: [0, -0.7, 0] }], [18, { ...AIR, armR: [1.4, 0, -0.2], torso: [0, -0.9, 0] }], [34, AIR]],
  },
  uair: {
    // 宙返り蹴り
    total: 31, aerial: true, landLag: 10, acBefore: 3, acAfter: 26, trail: 'footR', trailF: [4, 16], sfx: [5, 'whoosh', 0.7],
    hit: [hb(6, 9, 0, 0, 0.7, 13, 70, 30, 96, { path: [[1.1, 1.6], [0.2, 2.9]] }), hb(10, 16, 0, 0, 0.65, 8, 172, 30, 55, { path: [[0.1, 2.9], [-1.1, 1.5]] })],
    anim: [[0, AIR], [5, { body: [0.5, 0, 0], legR: [-1.5, 0, -0.05], shinR: [0.1, 0, 0], legL: [-0.2, 0, 0.1], shinL: [0.8, 0, 0], armR: [0.3, 0, -0.8], armL: [0.3, 0, 0.8] }], [16, { body: [-2.6, 0, 0], legR: [-1.5, 0, -0.05], shinR: [0.1, 0, 0], legL: [-0.2, 0, 0.1], shinL: [0.8, 0, 0], armR: [0.3, 0, -0.8], armL: [0.3, 0, 0.8] }], [31, { ...AIR, body: [-Math.PI * 2, 0, 0] }]],
  },
  dair: {
    // 轟雷蹴: 両足で踏みつけるメテオ
    total: 47, aerial: true, landLag: 17, acBefore: 3, acAfter: 38, trail: 'footR', trailF: [13, 20], sfx: [15, 'whoosh', 1],
    hit: [hb(16, 19, 0.05, -0.1, 0.72, 19, 270, 30, 96)],
    onFrame(ft, f) { if (f >= 16 && f <= 19) { darkFx(ft, ft.x, ft.y, 2, 0.5); ft.battle.effects.sparkle(ft.x, ft.y, 0xd0b0ff, 1, 0.4); } },
    anim: [[0, AIR], [12, { legR: [-1.7, 0, -0.08], shinR: [2.3, 0, 0], legL: [-1.7, 0, 0.08], shinL: [2.3, 0, 0], armR: [-0.4, 0, -1.0], armL: [-0.4, 0, 1.0], torso: [0.3, 0, 0], by: 0.2 }], [16, { legR: [-0.25, 0, -0.04], shinR: [0.3, 0, 0], legL: [-0.25, 0, 0.04], shinL: [0.3, 0, 0], armR: [-0.2, 0, -1.5], armL: [-0.2, 0, 1.5], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [0.25, 0, 0], head: [0.3, 0, 0] }], [28, { legR: [0.05, 0, -0.06], legL: [0.05, 0, 0.06], armR: [-0.5, 0, -1.1], armL: [-0.5, 0, 1.1] }], [47, AIR]],
  },
  // ---------- 必殺ワザ ----------
  neutralb: {
    // 滅砕拳: 長い溜めから闇の拳を放つ。溜め中はふっとばない。溜めはじめに後ろへ入力すると振り向いて威力が上がる
    total: 118, armor: [11, 68], landContinue: true, fall: 0.6, drift: 0.3,
    hit: [hb(70, 73, 1.25, 1.35, 0.85, wpDmg, 40, 30, 96), hb(70, 73, 0.5, 1.35, 0.6, wpDmg, 40, 30, 96)],
    onStart(ft) { ft.vars.air = !ft.grounded; },
    onFrame(ft, f) {
      const e = ft.battle.effects;
      if (f === 2) audio.charge();
      // 振り向き滅砕拳
      if (f === 22 && !ft.vars.rev && ft.input.stick.x * ft.facing < -0.5) { ft.vars.rev = true; ft.facing = -ft.facing; ft.mf -= 10; }
      if (f >= 8 && f < 68) {
        const p = handPos(ft);
        if (f % 2 === 0) e.spawn({ x: p.x + rand(-0.8, 0.8), y: p.y + rand(-0.8, 0.8), z: 0.4, vx: 0, vy: 0, life: 10, size: 0.15, size1: 0.5, color: f % 4 ? DARK : 0xe0c0ff });
        darkFx(ft, p.x, p.y, 1, 0.4 + f * 0.01);
        if (f % 16 === 0) audio.charge();
      }
      if (f === 68) audio.whoosh(1);
      if (f === 70) {
        const p = handPos(ft);
        e.ring(p.x, p.y, DARK, 4.5, 18); darkFx(ft, p.x, p.y, 14, 1.6);
        ft.battle.shakeCam(0.25); audio.fire();
        if (ft.grounded) ft.vx = ft.facing * 0.12;
      }
    },
    anim: [[0, GI], [10, { ...GI, armR: [0.9, 0, -0.6], foreR: [-1.9, 0, 0], armL: [-1.2, 0, 0.3], foreL: [-0.4, 0, 0], torso: [0.1, -1.2, 0], head: [0, 1.0, 0], legR: [0.3, 0, -0.14], legL: [-0.5, 0, 0.14], shinL: [0.5, 0, 0], by: -0.05 }], [66, { ...GI, armR: [1.1, 0, -0.6], foreR: [-2.0, 0, 0], armL: [-1.2, 0, 0.3], foreL: [-0.4, 0, 0], torso: [0.05, -1.4, 0], head: [0, 1.1, 0], legR: [0.3, 0, -0.14], legL: [-0.5, 0, 0.14], shinL: [0.5, 0, 0], by: -0.06 }], [70, { ...GI, armR: [-1.55, 0, -0.02], foreR: [0, 0, 0], armL: [0.5, 0, 0.5], torso: [0.3, 0.75, 0], legR: [0.5, 0, -0.14], legL: [-0.9, 0, 0.14], shinL: [0.9, 0, 0], by: -0.09, bz: 0.35 }], [92, { ...GI, armR: [-1.5, 0, -0.02], armL: [0.5, 0, 0.5], torso: [0.28, 0.7, 0], by: -0.08, bz: 0.3 }], [118, GI]],
  },
  sideb: {
    // 獄炎掌: 突進して相手の首をつかむ。地上では闇の爆発で地面に叩き伏せ、空中では道連れに急降下する
    total: 60, keepVel: true, noDrift: true, canLeaveGround: true, noGravity: [10, 32], landContinue: true, helpless: true, helplessLag: 22,
    hit: [hb(16, 30, 0.85, 1.25, 0.55, 0, 0, 0, 0, { type: 'grab', then: (a) => (a.grounded ? 'sidebchoke' : 'sidebdive') })],
    onStart(ft) { if (!ft.grounded) ft.sideBUsed = true; },
    onFrame(ft, f) {
      if (f < 16) ft.vx = approach(ft.vx, 0, 0.02);
      else if (f <= 30) {
        ft.vx = ft.facing * (ft.grounded ? 0.27 : 0.21); if (!ft.grounded) ft.vy = -0.015;
        if (f === 16) audio.whoosh(0.9);
        const p = handPos(ft, 1); darkFx(ft, p.x, p.y, 1, 0.5);
      } else { ft.vx *= 0.8; }
    },
    anim: [[0, GI], [12, { ...GI, armL: [0.6, 0, 0.5], foreL: [-1.5, 0, 0], torso: [0.2, 0.5, 0], by: -0.05 }], [16, { ...GI, armL: [-1.5, 0, 0.05], foreL: [-0.2, 0, 0], armR: [0.6, 0, -0.5], torso: [0.5, -0.5, 0], legR: [0.6, 0, -0.14], legL: [-0.9, 0, 0.14], shinL: [0.8, 0, 0], by: -0.07, bz: 0.3 }], [32, { ...GI, armL: [-1.45, 0, 0.05], armR: [0.6, 0, -0.5], torso: [0.45, -0.5, 0], by: -0.05, bz: 0.25 }], [60, GI]],
  },
  sidebchoke: {
    total: 58,
    hold: (f) => [0.8, f < 18 ? Math.min(0.9, f * 0.07) : Math.max(0, 0.9 - (f - 18) * 0.3)],
    onStart(ft) { ft.vx = 0; },
    onFrame(ft, f) {
      ft.vx = 0;
      if (f < 22) { darkFx(ft, ft.x + ft.facing * 0.8, ft.y + 1.6, 2, 0.6); }
      if (f === 22) {
        // 闇の爆発で地面に叩き伏せる（相手はその場でダウン）
        const v = ft.grabbing;
        if (v) {
          zap(ft, 12);
          ft.grabbing = null; v.grabbedBy = null;
          v.x = ft.x + ft.facing * 0.85; v.y = ft.y; v.vx = v.vy = v.kx = v.ky = 0;
          v.grounded = true; v.surface = ft.surface;
          // 叩きつけの瞬間にシールドを押していれば受け身
          if (v.techWindow > 0) { v.techWindow = 0; audio.tech(); v.setState('tech'); } else v.setState('knockdown');
        }
        const x = ft.x + ft.facing * 0.8; ft.battle.effects.ring(x, ft.y + 0.2, DARK, 3.2, 16); darkFx(ft, x, ft.y + 0.5, 12, 1.4); ft.battle.shakeCam(0.2); audio.fire();
      }
    },
    anim: [[0, { ...GI, armL: [-1.5, 0, 0.05], foreL: [-0.2, 0, 0], torso: [0.3, -0.4, 0] }], [16, { ...GI, armL: [-2.2, 0, 0.05], foreL: [-0.2, 0, 0], torso: [0, -0.3, 0] }], [22, { ...GI, armL: [-0.9, 0, 0.05], foreL: [0, 0, 0], torso: [0.6, -0.3, 0], by: -0.14, legL: [-0.9, 0, 0.14], shinL: [1.2, 0, 0] }], [40, { ...GI, armL: [-0.9, 0, 0.05], torso: [0.55, -0.3, 0], by: -0.13 }], [58, GI]],
  },
  sidebdive: {
    // 空中でつかむと、相手ごと真下へ急降下（足場がなければ道連れ）
    total: 400, noGravity: [0, 400], keepVel: true, noDrift: true,
    hold: () => [0.7, 0.5],
    onFrame(ft, f) {
      if (ft.vars.endAt) { ft.vx = 0; if (f >= ft.vars.endAt) ft.endMove(); return; }
      ft.vx = 0; ft.vy = f < 8 ? 0.02 : -0.36;
      darkFx(ft, ft.x + ft.facing * 0.7, ft.y + 1.4, 1, 0.6);
    },
    onLand(ft) {
      if (!ft.vars.endAt) {
        ft.vars.endAt = ft.mf + 30;
        const x = ft.x + ft.facing * 0.7;
        ft.doThrow({ dmg: 15, ang: 70, bkb: 60, kbg: 50 });
        ft.battle.effects.ring(x, ft.y + 0.2, DARK, 3.6, 16); darkFx(ft, x, ft.y + 0.5, 12, 1.4); ft.battle.shakeCam(0.25); audio.fire();
      }
      return 'continue';
    },
    anim: [[0, { ...AIR, armL: [-1.5, 0, 0.05], foreL: [-0.2, 0, 0] }], [8, { ...AIR, armL: [-0.7, 0, 0.05], foreL: [0, 0, 0], torso: [0.5, -0.3, 0] }], [400, { ...AIR, armL: [-0.7, 0, 0.05], foreL: [0, 0, 0], torso: [0.5, -0.3, 0] }]],
  },
  upb: {
    // 雷閃掌: 跳び上がって相手に組み付き、闇の雷を流し込んで爆発させる。つかめなければ最後に拳を振り上げる
    total: 62, helpless: true, helplessLag: 26, ledgeGrab: 20, noDrift: true, keepVel: true, noGravity: [14, 40],
    hit: [hb(14, 30, 0.45, 1.7, 0.6, 0, 0, 0, 0, { type: 'grab', then: 'upbshock' }), hb(34, 37, 0.5, 2.3, 0.6, 7, 70, 60, 70)],
    onStart(ft) { ft.upBUsed = true; ft.vx *= 0.4; },
    onFrame(ft, f) {
      if (f < 14) { if (!ft.grounded) ft.vy = Math.max(ft.vy, -0.02); if (Math.abs(ft.input.stick.x) > 0.4 && f < 6) ft.facing = Math.sign(ft.input.stick.x); }
      if (f === 14) { ft.grounded = false; ft.surface = null; ft.y += 0.02; audio.whoosh(1); }
      if (f >= 14 && f <= 40) {
        ft.vy = 0.33 * (1 - (f - 14) / 30) + 0.01;
        ft.vx = approach(ft.vx, ft.facing * 0.07 + ft.input.stick.x * 0.04, 0.012);
        const p = handPos(ft, 1); darkFx(ft, p.x, p.y, 1, 0.45);
      }
      if (f > 40) ft.drift(0.5);
    },
    anim: [[0, { ...GI, by: -0.09, legR: [-0.8, 0, -0.14], shinR: [1.3, 0, 0], legL: [-0.8, 0, 0.14], shinL: [1.3, 0, 0], armL: [0.4, 0, 0.4] }], [14, { ...AIR, armL: [-2.6, 0, 0.1], foreL: [-0.2, 0, 0], armR: [0.3, 0, -0.5], torso: [-0.1, 0, 0], head: [-0.3, 0, 0] }], [32, { ...AIR, armL: [-2.5, 0, 0.1], foreL: [-0.3, 0, 0], armR: [0.4, 0, -0.5], foreR: [-1.4, 0, 0] }], [36, { ...AIR, armR: [-2.9, 0, -0.1], foreR: [-0.2, 0, 0], armL: [0.3, 0, 0.5], torso: [-0.2, 0.3, 0] }], [62, AIR]],
  },
  upbshock: {
    total: 50, noGravity: [0, 34], keepVel: true, noDrift: true, throwAt: 30, throwHit: { dmg: 9, ang: 55, bkb: 70, kbg: 78 },
    hold: () => [0.45, 0.75],
    onFrame(ft, f) {
      if (f < 30) { ft.vx = 0; ft.vy = 0; }
      if (f < 24 && f % 6 === 5) { zap(ft, 1.5); ft.battle.effects.sparkle(ft.x + ft.facing * 0.5, ft.y + 1.8, 0xe0c0ff, 4, 0.6); darkFx(ft, ft.x + ft.facing * 0.5, ft.y + 1.8, 3, 0.7); }
      if (f === 30) {
        ft.battle.effects.ring(ft.x + ft.facing * 0.5, ft.y + 1.8, DARK, 3.4, 16); darkFx(ft, ft.x + ft.facing * 0.5, ft.y + 1.8, 12, 1.4); audio.fire(); ft.battle.shakeCam(0.2);
        // 反動で後ろへ跳ね、もう一度雷閃掌を使える
        ft.vy = 0.22; ft.vx = -ft.facing * 0.07; ft.upBUsed = false;
      }
    },
    anim: [[0, { ...AIR, armL: [-2.3, 0, 0.1], foreL: [-0.6, 0, 0], armR: [-2.0, 0, -0.1], foreR: [-0.8, 0, 0] }], [28, { ...AIR, armL: [-2.3, 0, 0.1], foreL: [-0.7, 0, 0], armR: [-2.0, 0, -0.1], foreR: [-0.9, 0, 0], torso: [0.15, 0, 0] }], [31, { ...AIR, armL: [-2.6, 0, 0.8], foreL: [0, 0, 0], armR: [-2.6, 0, -0.8], foreR: [0, 0, 0], torso: [-0.3, 0, 0] }], [50, AIR]],
  },
  downb: {
    // 烈震脚（地上）: 闇の炎をまとった跳び蹴りで前へ突進する
    total: 62, keepVel: true, noDrift: true, canLeaveGround: true, landContinue: true, noGravity: [16, 36],
    hit: [hb(16, 22, 0.95, 0.75, 0.6, 14, 44, 50, 80), hb(23, 36, 0.9, 0.75, 0.55, 12, 44, 40, 70)],
    onStart(ft) { if (!ft.grounded) ft.startMove('downbair'); },
    onFrame(ft, f) {
      if (f < 16) ft.vx = approach(ft.vx, 0, 0.02);
      else if (f <= 36) {
        ft.vx = ft.facing * 0.27; if (!ft.grounded) ft.vy = 0;
        if (f === 16) audio.whoosh(1);
        darkFx(ft, ft.x + ft.facing * 0.9, ft.y + 0.7, 2, 0.6);
        if (f % 4 === 0 && ft.grounded) ft.battle.effects.dust(ft.x, ft.y, 1, -ft.facing);
      } else ft.friction(2.5);
    },
    anim: [[0, GI], [12, { ...GI, legR: [-1.0, 0, -0.1], shinR: [1.7, 0, 0], torso: [-0.1, 0, 0], armR: [0.3, 0, -0.6], armL: [-0.5, 0, 0.5], by: -0.05 }], [16, { ...GI, legR: [-1.45, 0, -0.03], shinR: [0, 0, 0], legL: [0.5, 0, 0.14], shinL: [0.9, 0, 0], torso: [-0.5, 0, 0], armR: [0.6, 0, -0.7], armL: [0.4, 0, 0.7], by: -0.11, bz: 0.2 }], [36, { ...GI, legR: [-1.45, 0, -0.03], shinR: [0, 0, 0], legL: [0.5, 0, 0.14], shinL: [0.9, 0, 0], torso: [-0.5, 0, 0], armR: [0.6, 0, -0.7], armL: [0.4, 0, 0.7], by: -0.11, bz: 0.2 }], [62, GI]],
  },
  downbair: {
    // 烈震脚（空中）: 斜め下へ急降下。出はじめはメテオ。着地で衝撃波
    total: 600, keepVel: true, noDrift: true, noGravity: [0, 600],
    hit: [hb(16, 19, 0.7, 0.1, 0.62, 15, 270, 30, 90), hb(20, 600, 0.7, 0.15, 0.55, 14, 55, 45, 75)],
    onStart(ft) { ft.jumpsLeft = ft.s.airJumps; }, // 空中ジャンプが回復する
    onFrame(ft, f) {
      if (f < 16) { ft.vx *= 0.85; ft.vy = Math.max(ft.vy - 0.004, -0.03); }
      else { ft.vx = ft.facing * 0.2; ft.vy = -0.32; if (f === 16) audio.whoosh(1); darkFx(ft, ft.x + ft.facing * 0.6, ft.y + 0.2, 2, 0.6); }
    },
    onLand(ft) { if (ft.mf >= 16) { ft.startMove('downbland'); return 'continue'; } },
    anim: [[0, AIR], [12, { ...AIR, legR: [-1.2, 0, -0.1], shinR: [1.8, 0, 0], armR: [0.3, 0, -0.7], armL: [0.3, 0, 0.7] }], [16, { body: [0.55, 0, 0], legR: [-0.9, 0, -0.03], shinR: [0, 0, 0], legL: [-0.2, 0, 0.14], shinL: [1.6, 0, 0], armR: [0.5, 0, -0.8], armL: [0.5, 0, 0.8], torso: [-0.3, 0, 0] }], [600, { body: [0.55, 0, 0], legR: [-0.9, 0, -0.03], shinR: [0, 0, 0], legL: [-0.2, 0, 0.14], shinL: [1.6, 0, 0], armR: [0.5, 0, -0.8], armL: [0.5, 0, 0.8], torso: [-0.3, 0, 0] }]],
  },
  downbland: {
    total: 34,
    hit: [hb(1, 3, 0.6, 0.3, 0.9, 8, 70, 60, 60, { away: true }), hb(1, 3, -0.6, 0.3, 0.8, 8, 70, 60, 60, { away: true })],
    onStart(ft) { ft.vx = 0; ft.battle.effects.ring(ft.x, ft.y + 0.1, DARK, 3.0, 14); ft.battle.effects.dust(ft.x, ft.y, 8, 0); ft.battle.shakeCam(0.15); audio.hit(0.7); },
    anim: [[0, { ...GI, by: -0.2, legR: [-1.3, 0, -0.2], shinR: [1.9, 0, 0], legL: [-0.6, 0, 0.2], shinL: [1.8, 0, 0], torso: [0.4, 0, 0] }], [20, { ...GI, by: -0.18, legR: [-1.2, 0, -0.2], shinR: [1.8, 0, 0], legL: [-0.6, 0, 0.2], shinL: [1.7, 0, 0], torso: [0.35, 0, 0] }], [34, GI]],
  },
  // ---------- 最後の切りふだ ----------
  final: {
    // 魔獣ドロス: 魔獣に変身し、双剣を叩きつけて目の前の相手を動けなくしてから、画面を横切って突進する
    total: 150, fs: true, intang: [0, 150], noGravity: [0, 150], noDrift: true, keepVel: true,
    onStart(ft) { ft.vx = 0; ft.vy = 0; ft.battle.startCine(ft, 40); },
    onFrame(ft, f) {
      const b = ft.battle;
      ft.vx = 0; if (!ft.grounded) ft.vy = 0;
      if (f < 40) darkFx(ft, ft.x, ft.y + 1.2, 3, 1.0 + f * 0.03);
      if (f === 40) { ft.hidden = true; ft.vars.beast = b.addFx(new Beast(b, ft.x - ft.facing * 1.5, ft.y, ft.facing)); audio.fsBoom(); b.shakeCam(0.4); }
      if (f > 40) ft.hidden = true;
      if (f === 62) {
        // 双剣の叩きつけ: 前方の相手を動けなくする
        const x = ft.x + ft.facing * 3.2;
        b.effects.ring(x, ft.y + 0.2, DARK, 7, 22); b.effects.dust(x, ft.y, 12, 0); b.shakeCam(0.6); audio.hit(1);
        b.fsTrap(ft, x, ft.y + 1.2, 3.2);
        b.fsDamage(ft, 10);
      }
      if (f === 84) {
        ft.vars.beast.vx = ft.facing * 0.75;
        b.fsLaunch(ft, { dmg: 40, ang: 38, bkb: 110, kbg: 95 });
        b.spawnProjectile(ft, { x: ft.x + ft.facing * 2, y: ft.y + 1.8, vx: ft.facing * 0.75, vy: 0, r: 2.4, dmg: 40, ang: 38, bkb: 110, kbg: 95, life: 60, color: DARK2, core: DARK, kind: 'fswave', fs: true });
        b.shakeCam(0.7); audio.fsBoom();
      }
      if (f > 84 && f % 6 === 0) b.shakeCam(0.2);
    },
    onEnd(ft) { ft.hidden = false; if (ft.vars.beast) { ft.battle.removeFx(ft.vars.beast); ft.vars.beast = null; } ft.battle.fsRelease(ft); },
    anim: [[0, GI], [30, { ...GI, armR: [-0.6, 0, -1.2], armL: [-0.6, 0, 1.2], foreR: [-1.0, 0, 0], foreL: [-1.0, 0, 0], torso: [-0.25, 0, 0], head: [-0.4, 0, 0] }], [150, GI]],
  },
  // ---------- つかみ・投げ ----------
  grab: {
    total: 37,
    hit: [hb(7, 8, 0.95, 1.4, 0.5, 0, 0, 0, 0, { type: 'grab' })],
    anim: [[0, GI], [7, { ...GI, armL: [-1.5, 0, 0.05], foreL: [-0.1, 0, 0], torso: [0.25, -0.4, 0], bz: 0.12 }], [18, { ...GI, armL: [-1.4, 0, 0.05], torso: [0.2, -0.35, 0] }], [37, GI]],
  },
  dashgrab: {
    total: 44, keepVel: true,
    hit: [hb(10, 11, 1.1, 1.4, 0.55, 0, 0, 0, 0, { type: 'grab' })],
    onFrame(ft) { ft.friction(1.2); },
    anim: [[0, GI], [10, { ...GI, armL: [-1.5, 0, 0.05], foreL: [-0.1, 0, 0], torso: [0.4, -0.4, 0], bz: 0.2 }], [24, { ...GI, armL: [-1.4, 0, 0.05], torso: [0.35, -0.35, 0] }], [44, GI]],
  },
  pummel: {
    // 膝蹴り
    total: 20, pummelAt: 6, pummelDmg: 1.6,
    anim: [[0, { ...GI, armL: [-1.4, 0, 0.05] }], [6, { ...GI, armL: [-1.4, 0, 0.05], legR: [-1.3, 0, -0.05], shinR: [1.7, 0, 0], torso: [0.2, 0, 0] }], [20, { ...GI, armL: [-1.4, 0, 0.05] }]],
  },
  fthrow: {
    // 腹への拳
    total: 36, throwAt: 12, throwHit: { dmg: 13, ang: 40, bkb: 60, kbg: 70 },
    hold: () => [0.9, 0.3],
    anim: [[0, { ...GI, armL: [-1.4, 0, 0.05] }], [8, { ...GI, armL: [-1.4, 0, 0.05], armR: [0.5, 0, -0.5], foreR: [-1.6, 0, 0], torso: [0.05, -0.4, 0] }], [12, { ...GI, armR: [-1.4, 0, -0.05], foreR: [0, 0, 0], torso: [0.25, 0.5, 0], bz: 0.2 }], [36, GI]],
  },
  bthrow: {
    // 後ろへ放って蹴り飛ばす
    total: 40, throwAt: 16, throwHit: { dmg: 10, ang: 140, bkb: 60, kbg: 100 },
    hold: (f) => { const t = Math.min(1, f / 14); return [0.9 * Math.cos(Math.PI * t), 0.3 + 0.5 * Math.sin(Math.PI * t)]; },
    anim: [[0, { ...GI, armL: [-1.4, 0, 0.05] }], [12, { ...GI, torso: [0, -1.2, 0], armL: [1.0, 0, 0.3] }], [16, { ...GI, torso: [-0.2, -0.6, 0], legR: [1.3, 0, -0.05], shinR: [0, 0, 0] }], [40, GI]],
  },
  uthrow: {
    // 突き上げる拳
    total: 38, throwAt: 14, throwHit: { dmg: 13, ang: 88, bkb: 70, kbg: 70 },
    hold: (f) => [0.7 - f * 0.02, 0.3 + f * 0.05],
    anim: [[0, { ...GI, armL: [-1.4, 0, 0.05] }], [9, { ...GI, armL: [-1.8, 0, 0.05], armR: [0.4, 0, -0.4], foreR: [-1.6, 0, 0], by: -0.07 }], [14, { ...GI, armR: [-2.9, 0, -0.1], foreR: [0, 0, 0], torso: [-0.15, 0.3, 0], by: 0.05 }], [38, GI]],
  },
  dthrow: {
    // 片手で地面に叩きつける
    total: 38, throwAt: 16, throwHit: { dmg: 7, ang: 70, bkb: 70, kbg: 45 },
    hold: (f) => [0.85, f < 10 ? 0.3 + f * 0.09 : Math.max(0, 1.2 - (f - 10) * 0.2)],
    onFrame(ft, f) { if (f === 16) { ft.battle.effects.dust(ft.x + ft.facing * 0.85, ft.y, 8, 0); ft.battle.shakeCam(0.1); } },
    anim: [[0, { ...GI, armL: [-1.4, 0, 0.05] }], [10, { ...GI, armL: [-2.6, 0, 0.05], torso: [-0.1, 0, 0] }], [16, { ...GI, armL: [-0.8, 0, 0.05], foreL: [0, 0, 0], torso: [0.6, -0.2, 0], by: -0.14 }], [38, GI]],
  },
  getupattack: {
    total: 40, intang: [0, 14], trail: 'footR', trailF: [12, 22],
    hit: [hb(15, 17, 1.2, 0.5, 0.65, 7, 48, 60, 50), hb(20, 22, -1.2, 0.5, 0.65, 7, 132, 60, 50, { group: 1 })],
    anim: [[0, { ...GI, by: -0.32, torso: [0.6, 0, 0] }], [15, { ...GI, by: -0.18, legR: [-1.45, 0, -0.05], shinR: [0, 0, 0], torso: [-0.2, 0, 0] }], [21, { ...GI, by: -0.18, legR: [1.3, 0, -0.05], shinR: [0, 0, 0], torso: [0.4, 0, 0] }], [40, GI]],
  },
  ledgeattack: {
    total: 40, intang: [0, 12], trail: 'handR', trailF: [10, 16], sfx: [11, 'whoosh', 0.6],
    hit: [hb(12, 15, 1.1, 0.9, 0.7, 10, 45, 60, 50)],
    anim: [[0, { ...GI, by: -0.14 }], [12, { ...GI, armR: [-1.5, 0, -0.05], foreR: [0, 0, 0], torso: [0.3, 0.45, 0], bz: 0.25 }], [24, { ...GI, armR: [-1.4, 0, -0.05], torso: [0.25, 0.4, 0] }], [40, GI]],
  },
};

export const DOROS = {
  id: 'doros',
  name: 'ドロス',
  en: 'DOROS',
  title: '魔王',
  color: 0xa040ff,
  css: '#a040ff',
  desc: '動きは重く遅いが、どのワザも一撃必殺級。闇の拳と大剣で相手をねじ伏せる。',
  specials: ['滅砕拳（長い溜め・溜め中はふっとばない・振り向きで威力増）', '獄炎掌（突進つかみ・空中では道連れ急降下）', '雷閃掌（上昇つかみ→爆発）', '烈震脚（地上は突進蹴り・空中は急降下メテオ）'],
  stats: {
    weight: 118, height: 2.3, radius: 0.46,
    walkSpeed: 0.055, dashSpeed: 0.125, dashFrames: 13, runSpeed: 0.102, traction: 0.011,
    airSpeed: 0.066, airAccel: 0.005, airFriction: 0.003,
    gravity: 0.0108, fallSpeed: 0.195, fastFall: 0.31,
    jumpV: 0.25, hopV: 0.155, djV: 0.225, airJumps: 1, jumpsquat: 6, rollSpeed: 0.11,
  },
  grabHold: [0.9, 0.35],
  buildModel: buildDoros,
  anims: makeAnims({
    idle: GI, hipY: DOROS_HIP, bob: 0.7,
    override: {
      victory: (f) => ({ ...GI, armR: [0.1, 0, -0.5], foreR: [-2.0, 0, 0.6], armL: [0.1, 0, 0.5], foreL: [-2.0, 0, -0.6], torso: [-0.12, 0, 0], head: [-0.2 + Math.sin(f * 0.25) * 0.05, 0, 0] }),
    },
  }),
  moves,
};
