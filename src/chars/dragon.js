// ドラゴン: パンチと尻尾の物理攻撃が主体の重量級。火炎ブレス、炎の体当たり、メテオ踏みつけ
import { buildDragon, DRAGON_HIP } from '../models/dragonModel.js';
import { makeAnims } from './anims.js';
import { approach, rand } from '../util.js';
import { audio } from '../audio.js';

const hb = (f0, f1, x, y, r, dmg, ang, bkb, kbg, extra = {}) => ({ f: [f0, f1], x, y, r, dmg, ang, bkb, kbg, ...extra });

// 基本姿勢: 膝を曲げて腰を落とし、鉤爪を前に構える（参考画像11）
const DI = { by: -0.26, legR: [-0.75, 0, -0.3], shinR: [1.2, 0, 0], legL: [-0.65, 0, 0.3], shinL: [1.15, 0, 0], torso: [0.3, 0, 0], head: [-0.32, 0, 0], armR: [-0.55, 0, -0.55], foreR: [-0.95, 0, 0.25], armL: [-0.55, 0, 0.55], foreL: [-0.95, 0, -0.25], wisp: [0, -0.35, 0] };
const AIR = { legR: [-0.8, 0, -0.2], shinR: [1.2, 0, 0], legL: [-0.5, 0, 0.2], shinL: [1.0, 0, 0], armR: [-0.6, 0, -0.8], foreR: [-0.8, 0, 0], armL: [-0.6, 0, 0.8], foreL: [-0.8, 0, 0], torso: [0.15, 0, 0], head: [-0.2, 0, 0] };
const TUCK = { legR: [-1.3, 0, -0.2], shinR: [1.8, 0, 0], legL: [-1.2, 0, 0.2], shinL: [1.7, 0, 0] };
const PUNCH_R = { ...DI, armR: [-1.55, 0, -0.05], foreR: [0, 0, 0], torso: [0.28, 0.45, 0], bz: 0.15 };
const PUNCH_L = { ...DI, armL: [-1.55, 0, 0.05], foreL: [0, 0, 0], torso: [0.28, -0.45, 0], bz: 0.15 };
const WIND_R = { ...DI, armR: [0.4, 0, -0.6], foreR: [-1.6, 0, 0], torso: [0.1, -0.4, 0] };
const OVER = { ...DI, armR: [-2.9, 0, -0.25], foreR: [-0.6, 0, 0], armL: [-2.9, 0, 0.25], foreL: [-0.6, 0, 0], torso: [-0.2, 0, 0], head: [-0.4, 0, 0], by: 0 };
const SLAM = { ...DI, armR: [-1.0, 0, 0.25], foreR: [-0.1, 0, 0], armL: [-1.0, 0, -0.25], foreL: [-0.1, 0, 0], torso: [0.6, 0, 0], head: [-0.4, 0, 0], by: -0.22, bz: 0.25 };
const ROAR = { ...DI, torso: [-0.15, 0, 0], head: [-0.6, 0, 0], armR: [-0.6, 0, -1.1], armL: [-0.6, 0, 1.1], earL: [0, 0, 0.55], earR: [0, 0, -0.55] };

// 口から炎を吐く
function breath(ft, dmg = 1.1, spread = 0.02) {
  const p = ft.model.mouth.getWorldPosition(ft.battle.tmpV);
  ft.battle.spawnProjectile(ft, {
    x: p.x + ft.facing * 0.15, y: p.y, vx: ft.facing * (0.24 + rand(0, 0.04)), vy: -0.025 + rand(-spread, spread),
    r: 0.18, rMax: 0.72, dmg, ang: 35, bkb: 10, kbg: 22, life: 22, color: 0xff6a1a, kind: 'flame',
  });
}

const moves = {
  // ---------- 弱攻撃（右・左パンチ→鉤爪アッパー） ----------
  jab1: {
    total: 20, next: 'jab2', nextWin: [6, 19], trail: 'handR', trailF: [3, 7], sfx: [3, 'whoosh', 0.3],
    hit: [hb(4, 5, 0.95, 1.3, 0.5, 3, 70, 8, 25)],
    anim: [[0, DI], [2, WIND_R], [5, PUNCH_R], [13, PUNCH_R], [20, DI]],
  },
  jab2: {
    total: 20, next: 'jab3', nextWin: [6, 19], trail: 'handL', trailF: [3, 7], sfx: [3, 'whoosh', 0.3],
    hit: [hb(4, 5, 0.95, 1.3, 0.5, 4, 70, 8, 25)],
    anim: [[0, PUNCH_R], [5, PUNCH_L], [13, PUNCH_L], [20, DI]],
  },
  jab3: {
    total: 32, trail: 'handR', trailF: [4, 10], sfx: [4, 'whoosh', 0.6],
    hit: [hb(6, 8, 0.9, 1.55, 0.62, 6, 50, 50, 80)],
    anim: [[0, PUNCH_L], [4, { ...DI, armR: [0.2, 0, -0.4], foreR: [-1.2, 0, 0], torso: [0.3, -0.3, 0], by: -0.18 }], [7, { ...DI, armR: [-2.5, 0, -0.2], foreR: [-0.4, 0, 0], torso: [-0.1, 0.4, 0], by: 0.02 }], [18, { ...DI, armR: [-2.3, 0, -0.2], torso: [-0.05, 0.3, 0] }], [32, DI]],
  },
  // ---------- 強攻撃 ----------
  ftilt: {
    total: 34, trail: 'handR', trailF: [7, 12], sfx: [7, 'whoosh', 0.7],
    hit: [hb(9, 11, 1.3, 1.25, 0.55, 11, 36, 34, 96), hb(9, 11, 0.7, 1.25, 0.5, 10, 36, 34, 96)],
    anim: [[0, DI], [6, WIND_R], [10, { ...PUNCH_R, legR: [-0.8, 0, -0.18], shinR: [0.8, 0, 0], legL: [0.2, 0, 0.18], by: -0.18, bz: 0.3 }], [20, { ...PUNCH_R, bz: 0.25 }], [34, DI]],
  },
  utilt: {
    total: 32, trail: 'handR', trailF: [6, 12], sfx: [6, 'whoosh', 0.6],
    hit: [hb(7, 12, 0, 0, 0.62, 10, 88, 40, 95, { path: [[0.95, 1.9], [-0.6, 2.2]] })],
    anim: [[0, DI], [5, { ...DI, armR: [-0.8, 0, -0.5], foreR: [-0.3, 0, 0], torso: [0.3, 0, 0] }], [9, { ...DI, armR: [-2.6, 0, -0.3], foreR: [-0.2, 0, 0], torso: [-0.1, 0.2, 0], head: [-0.5, 0, 0], by: 0 }], [13, { ...DI, armR: [-3.1, 0, -0.1], foreR: [-0.3, 0, 0], torso: [-0.25, 0.2, 0], head: [-0.5, 0, 0], by: 0 }], [32, DI]],
  },
  dtilt: {
    // 低い尻尾払い（くるりと回って尻尾で前を払う）
    total: 30, alpha: 0.8, trail: 'tail', trailF: [3, 12], sfx: [4, 'whoosh', 0.6],
    hit: [hb(6, 9, 1.35, 0.25, 0.62, 8, 72, 45, 55), hb(6, 9, 0.6, 0.25, 0.5, 8, 72, 45, 55)],
    anim: [[0, { ...DI, by: -0.25 }], [3, { ...DI, by: -0.3, body: [0, 0, 0], wisp: [-0.4, 0, 0] }], [7, { ...DI, by: -0.3, body: [0, Math.PI, 0], wisp: [-0.6, 0, 0], torso: [0.5, 0, 0] }], [14, { ...DI, by: -0.28, body: [0, Math.PI * 2, 0], wisp: [-0.3, 0, 0] }], [30, { ...DI, body: [0, Math.PI * 2, 0] }]],
  },
  dashattack: {
    // 肩からの体当たり
    total: 44, keepVel: true, sfx: [7, 'whoosh', 0.8],
    hit: [hb(8, 14, 0.9, 1.1, 0.75, 12, 45, 55, 72), hb(15, 20, 0.85, 1.1, 0.65, 8, 45, 40, 60)],
    onStart(ft) { ft.vx = ft.facing * 0.2; },
    onFrame(ft, f) {
      if (f <= 18) ft.vx = approach(ft.vx, ft.facing * 0.16, 0.01); else ft.friction(2.2);
      if (f % 4 === 0 && f < 18) ft.battle.effects.dust(ft.x, ft.y, 1, -ft.facing);
    },
    anim: [[0, DI], [8, { ...DI, torso: [0.6, -0.5, 0], armL: [-1.2, 0, 0.3], armR: [0.3, 0, -0.6], legR: [0.4, 0, -0.1], legL: [-0.8, 0, 0.1], shinL: [0.8, 0, 0], bz: 0.25, head: [-0.5, 0, 0] }], [24, { ...DI, torso: [0.5, -0.4, 0], bz: 0.2 }], [44, DI]],
  },
  // ---------- スマッシュ攻撃 ----------
  fsmash: {
    // 両拳のハンマー振り下ろし
    total: 58, smash: true, charge: { f: 8, max: 60 }, trail: 'handR', trailF: [14, 20], sfx: [15, 'whoosh', 1],
    hit: [hb(17, 19, 1.35, 0.8, 0.8, 19, 36, 40, 100), hb(17, 19, 0.7, 1.4, 0.6, 16, 36, 38, 98)],
    onFrame(ft, f) {
      if (f === 18) { ft.battle.effects.ring(ft.x + ft.facing * 1.4, ft.y + 0.1, 0xffa040, 2.8, 16); ft.battle.effects.dust(ft.x + ft.facing * 1.4, ft.y, 8, ft.facing); ft.battle.shakeCam(0.12); }
    },
    anim: [[0, DI], [7, OVER], [15, { ...OVER, torso: [-0.3, 0, 0] }], [18, SLAM], [32, SLAM], [58, DI]],
  },
  usmash: {
    // 角で突き上げる頭突き
    total: 54, smash: true, charge: { f: 7, max: 60 }, sfx: [12, 'whoosh', 1],
    hit: [hb(13, 17, 0.25, 2.35, 0.8, 17, 88, 40, 98), hb(13, 17, 0.3, 1.7, 0.6, 15, 85, 40, 96)],
    onFrame(ft, f) { if (f === 13) ft.battle.effects.sparkle(ft.x + ft.facing * 0.3, ft.y + 2.5, 0xffc060, 6, 0.4); },
    anim: [[0, DI], [7, { ...DI, by: -0.3, torso: [0.7, 0, 0], head: [0.5, 0, 0], legR: [-0.8, 0, -0.2], shinR: [1.3, 0, 0], legL: [-0.8, 0, 0.2], shinL: [1.3, 0, 0] }], [13, { ...ROAR, by: 0.1, torso: [-0.25, 0, 0], head: [-0.9, 0, 0], legR: [0, 0, -0.1], shinR: [0.1, 0, 0], legL: [0, 0, 0.1], shinL: [0.1, 0, 0] }], [26, { ...ROAR, torso: [-0.2, 0, 0], head: [-0.8, 0, 0] }], [54, DI]],
  },
  dsmash: {
    // 尻尾の大回転
    total: 56, smash: true, charge: { f: 7, max: 60 }, alpha: 0.85, trail: 'tail', trailF: [9, 20], sfx: [10, 'whoosh', 1],
    hit: [hb(11, 14, 1.5, 0.35, 0.72, 15, 32, 38, 98, { away: true }), hb(11, 14, -1.5, 0.35, 0.72, 15, 32, 38, 98, { away: true }), hb(15, 17, 0.9, 0.35, 0.6, 12, 32, 34, 92, { away: true })],
    anim: [[0, DI], [7, { ...DI, by: -0.3, torso: [0.4, 0, 0], wisp: [-0.5, 0, 0] }], [11, { ...DI, by: -0.3, body: [0, 0, 0], wisp: [-0.6, 0, 0], torso: [0.4, 0, 0] }], [17, { ...DI, by: -0.3, body: [0, Math.PI * 2, 0], wisp: [-0.6, 0, 0], torso: [0.4, 0, 0] }], [30, { ...DI, body: [0, Math.PI * 2, 0] }], [56, { ...DI, body: [0, Math.PI * 2, 0] }]],
  },
  // ---------- 空中攻撃 ----------
  nair: {
    total: 42, aerial: true, landLag: 10, acBefore: 5, acAfter: 32, alpha: 0.85, trail: 'tail', trailF: [6, 14], sfx: [6, 'whoosh', 0.8],
    hit: [hb(7, 13, 0, 0.9, 1.4, 11, 45, 30, 90, { away: true })],
    anim: [[0, AIR], [6, { ...TUCK, ...{ armR: [-0.4, 0, -1.2], armL: [-0.4, 0, 1.2] }, body: [0, 0, 0], wisp: [0.3, 0, 0] }], [14, { ...TUCK, armR: [-0.4, 0, -1.2], armL: [-0.4, 0, 1.2], body: [0, Math.PI * 2, 0], wisp: [0.3, 0, 0] }], [42, { ...AIR, body: [0, Math.PI * 2, 0] }]],
  },
  fair: {
    total: 40, aerial: true, landLag: 13, acBefore: 4, acAfter: 30, trail: 'handR', trailF: [8, 14], sfx: [9, 'whoosh', 0.8],
    hit: [hb(10, 13, 0, 0, 0.7, 13, 40, 32, 95, { path: [[1.0, 2.0], [1.25, 0.6]] })],
    anim: [[0, AIR], [7, { ...TUCK, armR: [-2.9, 0, -0.3], foreR: [-0.3, 0, 0], torso: [-0.2, 0.3, 0] }], [12, { ...TUCK, armR: [-0.7, 0, -0.1], foreR: [-0.1, 0, 0], torso: [0.5, 0.3, 0] }], [24, { ...TUCK, armR: [-0.6, 0, -0.1], torso: [0.4, 0.2, 0] }], [40, AIR]],
  },
  bair: {
    // 後ろへの尻尾のむち（強力）
    total: 40, aerial: true, landLag: 12, acBefore: 4, acAfter: 30, trail: 'tail', trailF: [6, 13], sfx: [7, 'whoosh', 0.9],
    hit: [hb(8, 11, -1.55, 0.9, 0.72, 14, 145, 38, 98), hb(8, 11, -0.8, 0.9, 0.6, 12, 145, 34, 92)],
    anim: [[0, AIR], [5, { ...TUCK, wisp: [-0.6, 0.5, 0], torso: [0.2, 0.3, 0] }], [9, { ...TUCK, wisp: [1.1, -0.2, 0], torso: [0.45, -0.4, 0], head: [0, -0.6, 0] }], [18, { ...TUCK, wisp: [0.9, 0, 0], torso: [0.4, -0.3, 0] }], [40, AIR]],
  },
  uair: {
    total: 38, aerial: true, landLag: 10, acBefore: 3, acAfter: 28, trail: 'handR', trailF: [6, 12], sfx: [6, 'whoosh', 0.7],
    hit: [hb(7, 11, 0, 0, 0.72, 11, 85, 32, 95, { path: [[0.85, 2.2], [-0.85, 2.2]] })],
    anim: [[0, AIR], [5, { ...TUCK, armR: [-1.4, 0, -0.4], armL: [-1.4, 0, 0.4] }], [9, { ...TUCK, armR: [-3.0, 0, -0.3], armL: [-3.0, 0, 0.3], foreR: [-0.3, 0, 0], foreL: [-0.3, 0, 0], head: [-0.6, 0, 0], body: [-0.2, 0, 0] }], [20, { ...TUCK, armR: [-2.8, 0, -0.3], armL: [-2.8, 0, 0.3] }], [38, AIR]],
  },
  dair: {
    // メテオになる踏みつけ
    total: 50, aerial: true, landLag: 22, acBefore: 3, acAfter: 40, trail: 'footR', trailF: [10, 18], sfx: [11, 'whoosh', 0.9],
    hit: [hb(12, 16, 0.05, -0.15, 0.62, 15, 270, 30, 90), hb(17, 26, 0.05, 0.0, 0.55, 9, 65, 25, 70)],
    onFrame(ft, f) {
      if (f < 11) ft.gravMult = 0.3;
      if (f === 12 && !ft.grounded) ft.vy = Math.min(ft.vy, -0.3);
    },
    onLand(ft) {
      ft.battle.effects.ring(ft.x, ft.y + 0.1, 0xffa040, 2.2, 14);
      ft.battle.effects.dust(ft.x, ft.y, 8, 0);
      ft.battle.shakeCam(0.1);
    },
    anim: [[0, AIR], [8, { ...TUCK, legR: [-1.6, 0, -0.1], shinR: [2.2, 0, 0], legL: [-1.6, 0, 0.1], shinL: [2.2, 0, 0], armR: [-2.6, 0, -0.5], armL: [-2.6, 0, 0.5], earL: [0, 0, 0.5], earR: [0, 0, -0.5], by: 0.15 }], [12, { legR: [0.1, 0, -0.08], shinR: [0.05, 0, 0], legL: [0.1, 0, 0.08], shinL: [0.05, 0, 0], armR: [-2.8, 0, -0.6], armL: [-2.8, 0, 0.6], torso: [-0.1, 0, 0], head: [0.2, 0, 0], earL: [0, 0, 0.7], earR: [0, 0, -0.7], by: -0.1 }], [26, { legR: [0.05, 0, -0.08], legL: [0.05, 0, 0.08], armR: [-2.6, 0, -0.6], armL: [-2.6, 0, 0.6], earL: [0, 0, 0.5], earR: [0, 0, -0.5] }], [50, AIR]],
  },
  // ---------- 必殺ワザ ----------
  neutralb: {
    // ファイアブレス: 押しっぱなしで炎を吐き続ける
    total: 30, charge: { f: 8, max: 80 }, fall: 0.45, landContinue: true, alpha: 0.5, noChargeFlash: true,
    onCharge(ft) {
      // 口元から途切れなく噴き出す炎（見た目）
      const p = ft.model.mouth.getWorldPosition(ft.battle.tmpV);
      ft.battle.effects.spawn({ x: p.x, y: p.y, z: 0.35, vx: ft.facing * rand(0.18, 0.26), vy: rand(-0.035, 0.0), life: 12, size: 0.25, size1: 0.9, color: ft.charge % 2 ? 0xff7a1a : 0xffd050 });
      if (ft.charge % 4 === 0) breath(ft);
      if (ft.charge % 12 === 0) audio.fire();
    },
    onFrame(ft, f) {
      if (f === 8) audio.fire();
      if (f >= 8 && f <= 16 && f % 3 === 2) breath(ft);
    },
    anim: [[0, DI], [6, { ...DI, torso: [0.05, 0, 0], head: [-0.5, 0, 0], armR: [-0.3, 0, -0.8], armL: [-0.3, 0, 0.8] }], [8, { ...DI, torso: [0.3, 0, 0], head: [0.05, 0, 0], bz: 0.12, armR: [-0.4, 0, -0.9], armL: [-0.4, 0, 0.9] }], [18, { ...DI, torso: [0.28, 0, 0], head: [0, 0, 0], bz: 0.1 }], [30, DI]],
  },
  sideb: {
    // 炎をまとった体当たり
    total: 48, noGravity: [0, 32], keepVel: true, noDrift: true, canLeaveGround: true, ledgeGrab: 10, landContinue: true,
    hit: [hb(9, 30, 0.8, 1.1, 0.82, 13, 40, 55, 75)],
    onStart(ft) { if (!ft.grounded) ft.sideBUsed = true; ft.vy = 0; },
    onFrame(ft, f) {
      const e = ft.battle.effects;
      if (f < 9) { ft.vx = approach(ft.vx, 0, 0.02); if (!ft.grounded) ft.vy = 0.004; if (f === 4) audio.fire(); }
      else if (f <= 30) {
        ft.vx = ft.facing * 0.3; ft.vy = ft.grounded ? 0 : 0.02;
        if (f === 9) audio.whoosh(1);
        for (let k = 0; k < 2; k++) e.spawn({ x: ft.x + ft.facing * rand(0, 0.9), y: ft.y + rand(0.5, 1.7), z: 0.4, vx: -ft.facing * 0.05, vy: 0.02, life: 16, size: rand(0.4, 0.8), size1: 0.1, color: k ? 0xff5a14 : 0xffd060 });
      } else ft.vx *= 0.85;
    },
    anim: [[0, DI], [8, { ...DI, torso: [0.2, -0.5, 0], by: -0.2, armL: [-0.4, 0, 0.6], foreL: [-1.4, 0, 0] }], [10, { ...DI, torso: [0.7, -0.5, 0], head: [-0.6, 0, 0], armL: [-1.4, 0, 0.3], foreL: [-0.4, 0, 0], armR: [0.4, 0, -0.5], legR: [0.5, 0, -0.1], legL: [-0.9, 0, 0.1], shinL: [0.8, 0, 0], earL: [0, 0, -0.3], earR: [0, 0, 0.3], bz: 0.25 }], [30, { ...DI, torso: [0.7, -0.5, 0], head: [-0.6, 0, 0], armL: [-1.4, 0, 0.3], armR: [0.4, 0, -0.5], earL: [0, 0, -0.3], earR: [0, 0, 0.3], bz: 0.25 }], [48, DI]],
  },
  upb: {
    // ウィングライズ: 翼で羽ばたいて上昇
    total: 44, helpless: true, helplessLag: 24, ledgeGrab: 14, noDrift: true, keepVel: true, noGravity: [4, 26],
    hit: [hb(5, 10, 0, 1.2, 1.15, 8, 80, 60, 70, { away: true })],
    onStart(ft) { ft.upBUsed = true; ft.vx *= 0.5; },
    onFrame(ft, f) {
      if (f < 4) ft.vy = ft.grounded ? 0 : Math.max(ft.vy, 0) * 0.5;
      if (f === 4) { ft.grounded = false; ft.surface = null; ft.y += 0.02; audio.whoosh(1); ft.battle.effects.dust(ft.x, ft.y, 8, 0); ft.battle.effects.ring(ft.x, ft.y + 0.4, 0xffa040, 2.4, 14); }
      if (f >= 4 && f <= 26) {
        ft.vy = 0.34 * (1 - (f - 4) / 23) + 0.012;
        ft.vx = approach(ft.vx, ft.input.stick.x * 0.11, 0.012);
        if (f % 6 === 4) audio.whoosh(0.5);
      }
      if (f > 26) ft.drift(0.6);
    },
    anim: [[0, { ...DI, by: -0.25 }], [4, { ...AIR, earL: [0, 0, 0.8], earR: [0, 0, -0.8], head: [-0.5, 0, 0] }], [8, { ...AIR, earL: [0, 0, -0.6], earR: [0, 0, 0.6], head: [-0.5, 0, 0] }], [12, { ...AIR, earL: [0, 0, 0.8], earR: [0, 0, -0.8] }], [16, { ...AIR, earL: [0, 0, -0.6], earR: [0, 0, 0.6] }], [20, { ...AIR, earL: [0, 0, 0.8], earR: [0, 0, -0.8] }], [24, { ...AIR, earL: [0, 0, -0.5], earR: [0, 0, 0.5] }], [44, AIR]],
  },
  downb: {
    // テイルスラム: 跳び上がって尻尾を叩きつけ、衝撃波で左右を打ち上げる
    total: 48, landContinue: true, alpha: 0.75, trail: 'tail', trailF: [10, 16], sfx: [11, 'whoosh', 1],
    hit: [hb(14, 16, 1.3, 0.3, 0.8, 13, 80, 60, 70, { away: true }), hb(14, 16, -1.3, 0.3, 0.8, 13, 80, 60, 70, { away: true }), hb(14, 16, 0, 0.5, 0.95, 13, 80, 60, 70, { away: true })],
    onFrame(ft, f) {
      if (f === 2 && ft.grounded) { ft.vy = 0.13; ft.grounded = false; ft.surface = null; ft.y += 0.02; }
      if (f === 12 && !ft.grounded) ft.vy = Math.min(ft.vy, -0.2);
      if (f === 14) {
        const e = ft.battle.effects;
        e.ring(ft.x, ft.y + 0.1, 0xffa040, 3.4, 16); e.dust(ft.x - 1, ft.y, 6, -1); e.dust(ft.x + 1, ft.y, 6, 1);
        ft.battle.shakeCam(0.18); audio.hit(0.8);
      }
    },
    anim: [[0, { ...DI, by: -0.25 }], [5, { ...AIR, wisp: [1.3, 0, 0], body: [0, 0, 0] }], [12, { ...AIR, wisp: [1.3, 0, 0], body: [0, Math.PI, 0] }], [15, { ...DI, wisp: [-0.7, 0, 0], body: [0, Math.PI * 2, 0], by: -0.3, torso: [0.5, 0, 0] }], [30, { ...DI, body: [0, Math.PI * 2, 0] }], [48, { ...DI, body: [0, Math.PI * 2, 0] }]],
  },
  // ---------- 最後の切りふだ ----------
  final: {
    // ドラゴン・インフェルノ: 翼を広げて咆哮し、巨大な炎の波を吐く
    total: 110, fs: true, intang: [0, 110], noGravity: [0, 110], noDrift: true, keepVel: true,
    onStart(ft) { ft.vx = 0; ft.vy = 0; ft.battle.startCine(ft, 45); },
    onFrame(ft, f) {
      const b = ft.battle;
      ft.vx = 0;
      if (!ft.grounded) ft.vy = 0;
      if (f < 45 && f % 3 === 0) { const p = ft.model.mouth.getWorldPosition(b.tmpV); b.effects.sparkle(p.x, p.y, f % 6 ? 0xff8030 : 0xffe070, 2, 0.4); }
      if (f === 55) {
        b.spawnProjectile(ft, { x: ft.x + ft.facing * 1.6, y: ft.y + 1.3, vx: ft.facing * 0.42, vy: 0, r: 1.9, dmg: 32, ang: 38, bkb: 110, kbg: 92, life: 90, color: 0xff5010, core: 0xffe070, kind: 'fswave', fs: true });
        b.shakeCam(0.5);
        audio.fsBoom(); audio.fire();
      }
      if (f >= 50 && f <= 80) {
        const p = ft.model.mouth.getWorldPosition(b.tmpV);
        b.effects.spawn({ x: p.x + ft.facing * 0.3, y: p.y, z: 0.4, vx: ft.facing * rand(0.2, 0.35), vy: rand(-0.04, 0.04), life: 22, size: rand(0.6, 1.2), size1: 2.0, color: f % 2 ? 0xff5a14 : 0xffd060 });
      }
    },
    anim: [[0, DI], [25, ROAR], [45, ROAR], [52, { ...DI, torso: [0.4, 0, 0], head: [0.1, 0, 0], bz: 0.2, earL: [0, 0, 0.3], earR: [0, 0, -0.3] }], [85, { ...DI, torso: [0.35, 0, 0], bz: 0.15 }], [110, DI]],
  },
  // ---------- つかみ・投げ ----------
  grab: {
    total: 34,
    hit: [hb(7, 8, 0.95, 1.1, 0.55, 0, 0, 0, 0, { type: 'grab' })],
    anim: [[0, DI], [7, { ...DI, armR: [-1.5, 0, 0.1], foreR: [0, 0, 0], armL: [-1.5, 0, -0.1], foreL: [0, 0, 0], torso: [0.35, 0, 0], bz: 0.15 }], [16, { ...DI, armR: [-1.4, 0, 0.1], armL: [-1.4, 0, -0.1], torso: [0.3, 0, 0] }], [34, DI]],
  },
  dashgrab: {
    total: 40, keepVel: true,
    hit: [hb(9, 10, 1.1, 1.1, 0.6, 0, 0, 0, 0, { type: 'grab' })],
    onFrame(ft) { ft.friction(1.2); },
    anim: [[0, DI], [9, { ...DI, armR: [-1.5, 0, 0.1], foreR: [0, 0, 0], armL: [-1.5, 0, -0.1], foreL: [0, 0, 0], torso: [0.45, 0, 0], bz: 0.2 }], [22, { ...DI, armR: [-1.4, 0, 0.1], armL: [-1.4, 0, -0.1], torso: [0.4, 0, 0] }], [40, DI]],
  },
  pummel: {
    total: 18, pummelAt: 6, pummelDmg: 2,
    anim: [[0, { ...DI, armL: [-1.4, 0, -0.1], armR: [-1.4, 0, 0.1] }], [6, { ...DI, armL: [-1.4, 0, -0.1], armR: [-1.4, 0, 0.1], head: [0.5, 0, 0], torso: [0.4, 0, 0] }], [18, { ...DI, armL: [-1.4, 0, -0.1], armR: [-1.4, 0, 0.1] }]],
  },
  fthrow: {
    total: 34, throwAt: 12, throwHit: { dmg: 9, ang: 40, bkb: 70, kbg: 70 },
    hold: () => [0.95, 0.25],
    anim: [[0, { ...DI, armL: [-1.4, 0, -0.1] }], [8, WIND_R], [12, { ...PUNCH_R, bz: 0.3 }], [34, DI]],
  },
  bthrow: {
    total: 40, throwAt: 16, throwHit: { dmg: 12, ang: 140, bkb: 60, kbg: 90 },
    hold: (f) => { const t = Math.min(1, f / 16); return [0.95 * Math.cos(Math.PI * t), 0.3 + 0.7 * Math.sin(Math.PI * t)]; },
    anim: [[0, { ...DI, armL: [-1.4, 0, -0.1] }], [16, { ...DI, body: [0, Math.PI, 0], armL: [-2.4, 0, 0.3], armR: [-2.4, 0, -0.3], wisp: [0.6, 0, 0] }], [24, { ...DI, body: [0, Math.PI * 2, 0] }], [40, { ...DI, body: [0, Math.PI * 2, 0] }]],
  },
  uthrow: {
    total: 40, throwAt: 14, throwHit: { dmg: 10, ang: 90, bkb: 75, kbg: 76 },
    hold: (f) => [0.6 - f * 0.03, 0.25 + f * 0.14],
    onFrame(ft, f) {
      if (f >= 15 && f <= 26) { const p = ft.model.mouth.getWorldPosition(ft.battle.tmpV); ft.battle.effects.spawn({ x: p.x, y: p.y + 0.1, z: 0.4, vy: 0.2, vx: rand(-0.03, 0.03), life: 16, size: 0.5, size1: 1.2, color: f % 2 ? 0xff5a14 : 0xffd060 }); }
    },
    anim: [[0, { ...DI, armL: [-1.4, 0, -0.1] }], [14, { ...ROAR, armR: [-3.0, 0, -0.2], armL: [-3.0, 0, 0.2] }], [40, DI]],
  },
  dthrow: {
    total: 40, throwAt: 16, throwHit: { dmg: 8, ang: 80, bkb: 60, kbg: 42 },
    hold: (f) => [0.95, Math.max(0, 0.25 - f * 0.02)],
    onFrame(ft, f) { if (f === 16) { ft.battle.effects.dust(ft.x + ft.facing * 0.9, ft.y, 8, 0); ft.battle.shakeCam(0.08); } },
    anim: [[0, { ...DI, armL: [-1.4, 0, -0.1] }], [10, OVER], [16, SLAM], [40, DI]],
  },
  getupattack: {
    total: 32, intang: [0, 9], alpha: 0.8, trail: 'tail', trailF: [6, 12],
    hit: [hb(8, 10, 1.3, 0.35, 0.65, 7, 40, 60, 50, { away: true }), hb(8, 10, -1.3, 0.35, 0.65, 7, 40, 60, 50, { away: true })],
    anim: [[0, { ...DI, by: -0.5 }], [8, { ...DI, by: -0.35, body: [0, 0, 0] }], [14, { ...DI, by: -0.35, body: [0, Math.PI * 2, 0] }], [32, { ...DI, body: [0, Math.PI * 2, 0] }]],
  },
  ledgeattack: {
    total: 36, intang: [0, 10], trail: 'handR', trailF: [8, 14], sfx: [9, 'whoosh', 0.6],
    hit: [hb(10, 13, 1.2, 0.6, 0.7, 8, 40, 60, 50)],
    anim: [[0, { ...DI, by: -0.35 }], [10, { ...PUNCH_R, bz: 0.3 }], [20, PUNCH_R], [36, DI]],
  },
};

export const DRAGON = {
  id: 'dragon',
  name: 'ドラゴン',
  en: 'DRAGON',
  title: '紅蓮の翼竜',
  color: 0xff5a2a,
  css: '#ff5a2a',
  desc: '鋼の筋肉と巨大な翼を持つ重量級。拳と尻尾の重い一撃、火炎ブレスで押し切る。',
  specials: ['ファイアブレス（押しっぱなしで吐き続ける）', 'フレイムタックル（炎の体当たり）', 'ウィングライズ（羽ばたき上昇）', 'テイルスラム（尻尾の叩きつけ）'],
  stats: {
    weight: 128, height: 2.05, radius: 0.52,
    walkSpeed: 0.07, dashSpeed: 0.145, dashFrames: 12, runSpeed: 0.128, traction: 0.012,
    airSpeed: 0.086, airAccel: 0.006, airFriction: 0.003,
    gravity: 0.0098, fallSpeed: 0.19, fastFall: 0.29,
    jumpV: 0.255, hopV: 0.16, djV: 0.24, airJumps: 1, jumpsquat: 5, rollSpeed: 0.12,
  },
  grabHold: [0.95, 0.25],
  buildModel: buildDragon,
  anims: makeAnims({
    idle: DI, hipY: DRAGON_HIP, bob: 0.9,
    runExtra: () => ({ armR: [0.6, 0, -0.5], armL: [0.6, 0, 0.5], foreR: [-1.2, 0, 0], foreL: [-1.2, 0, 0], torso: [0.5, 0, 0], head: [-0.4, 0, 0], earL: [0, 0, -0.25], earR: [0, 0, 0.25] }),
    override: {
      victory: (f) => {
        const k = Math.min(1, f / 30);
        return { ...ROAR, earL: [0, 0, 0.55 + Math.sin(f * 0.25) * 0.2 * k], earR: [0, 0, -0.55 - Math.sin(f * 0.25) * 0.2 * k], armR: [-1.2 * k, 0, -1.2], armL: [-1.2 * k, 0, 1.2] };
      },
    },
  }),
  moves,
};
