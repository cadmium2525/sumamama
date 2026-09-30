// デュラハン: 重量級の黄金騎士。剣のリーチと重い一撃、スーパーアーマー突進、カウンター
import { buildDullahan, DULLAHAN_HIP } from '../models/dullahanModel.js';
import { makeAnims } from './anims.js';
import { approach, clamp } from '../util.js';
import { audio } from '../audio.js';

const hb = (f0, f1, x, y, r, dmg, ang, bkb, kbg, extra = {}) => ({ f: [f0, f1], x, y, r, dmg, ang, bkb, kbg, ...extra });

// 剣の向き φ = armR.x + foreR.x + wep.x （0=前, -π/2=上, +π/2=下）
// 待機: 大剣を右肩に担ぐ（参考画像01）
const AI = { legR: [-0.12, 0, -0.07], shinR: [0.08, 0, 0], legL: [0.12, 0, 0.08], shinL: [0.24, 0, 0], by: -0.03, hips: [0, 0.12, 0.04], torso: [0.06, 0.06, -0.05], head: [0.08, -0.12, 0.04], armR: [-1.0, 0, -0.45], foreR: [-1.7, 0, 0], wep: [0.14, 0.34, -0.84], armL: [0.05, 0, 0.2], foreL: [-0.3, 0, 0] };
const AIR = { legR: [-0.5, 0, -0.1], shinR: [0.8, 0, 0], legL: [0.2, 0, 0.1], shinL: [0.5, 0, 0], armR: [-0.5, 0, -0.5], foreR: [-0.6, 0, 0], wep: [1.2, 0, 0], armL: [-0.6, 0, 0.5], foreL: [-1.0, 0, 0], torso: [0.1, 0, 0] };
const TUCK = { legR: [-1.1, 0, -0.1], shinR: [1.6, 0, 0], legL: [-0.8, 0, 0.1], shinL: [1.4, 0, 0] };
const LUNGE = { legR: [-0.9, 0, -0.1], shinR: [0.8, 0, 0], legL: [0.7, 0, 0.1], shinL: [0.15, 0, 0], by: -0.22 };

const moves = {
  jab1: {
    total: 20, next: 'jab2', nextWin: [7, 19], trail: 'sword', trailF: [3, 8], sfx: [3, 'slash', 0.3],
    hit: [hb(5, 6, 1.2, 1.15, 0.5, 4, 72, 8, 25), hb(5, 6, 0.6, 1.1, 0.45, 4, 72, 8, 25)],
    anim: [[0, AI], [3, { ...AI, armR: [-1.3, 0, -0.9], foreR: [-0.3, 0, 0], wep: [1.4, 0, 0], torso: [0.1, -0.35, 0] }], [6, { ...AI, armR: [-1.45, 0, 0.25], foreR: [-0.1, 0, 0], wep: [1.5, 0, 0], torso: [0.15, 0.45, 0] }], [14, { ...AI, armR: [-1.3, 0, 0.1], foreR: [-0.2, 0, 0], wep: [1.4, 0, 0], torso: [0.12, 0.35, 0] }], [20, AI]],
  },
  jab2: {
    total: 28, trail: 'handL', trailF: [3, 8], sfx: [3, 'whoosh', 0.5],
    hit: [hb(5, 7, 0.95, 1.1, 0.62, 5, 40, 45, 72)],
    anim: [[0, { ...AI, armR: [-1.3, 0, 0.1], torso: [0.12, 0.35, 0] }], [5, { ...AI, armL: [-1.45, 0, 0.1], foreL: [-0.3, 0, 0], torso: [0.25, -0.6, 0], armR: [0.3, 0, -0.5], bz: 0.18 }], [16, { ...AI, armL: [-1.35, 0, 0.1], foreL: [-0.4, 0, 0], torso: [0.2, -0.5, 0], bz: 0.12 }], [28, AI]],
  },
  ftilt: {
    total: 34, trail: 'sword', trailF: [8, 13], sfx: [8, 'slash', 0.6],
    hit: [hb(9, 11, 1.8, 1.1, 0.45, 11, 35, 34, 96), hb(9, 11, 1.05, 1.1, 0.5, 10, 35, 34, 96)],
    anim: [[0, AI], [6, { ...AI, armR: [0.2, 0, -0.3], foreR: [-1.6, 0, 0], wep: [1.4, 0, 0], torso: [-0.1, -0.4, 0] }], [9, { ...LUNGE, armR: [-1.5, 0, -0.1], foreR: [0, 0, 0], wep: [1.25, 0, 0], torso: [0.25, 0.5, 0], armL: [-0.3, 0, 0.5], foreL: [-1.0, 0, 0], bz: 0.25 }], [18, { ...LUNGE, armR: [-1.45, 0, -0.1], foreR: [0, 0, 0], wep: [1.25, 0, 0], torso: [0.2, 0.45, 0], armL: [-0.3, 0, 0.5], bz: 0.2 }], [34, AI]],
  },
  utilt: {
    total: 34, trail: 'sword', trailF: [7, 14], sfx: [7, 'slash', 0.6],
    hit: [hb(8, 13, 0, 0, 0.6, 10, 92, 40, 95, { path: [[1.1, 1.7], [-0.9, 1.6]] }), hb(8, 13, 0, 0, 0.62, 10, 92, 40, 95, { path: [[0.9, 2.6], [-0.6, 2.6]] })],
    anim: [[0, AI], [5, { ...AI, armR: [-0.9, 0, -0.6], foreR: [-0.2, 0, 0], wep: [0.8, 0, 0], torso: [0.2, 0, 0] }], [8, { ...AI, armR: [-1.85, 0, -0.4], foreR: [-0.1, 0, 0], wep: [1.0, 0, 0], torso: [-0.05, 0.1, 0], head: [-0.3, 0, 0] }], [13, { ...AI, armR: [-2.9, 0, -0.2], foreR: [-0.1, 0, 0], wep: [0.6, 0, 0], torso: [-0.2, 0.1, 0], head: [-0.3, 0, 0] }], [20, { ...AI, armR: [-2.85, 0, -0.2], foreR: [-0.1, 0, 0], wep: [0.6, 0, 0], torso: [-0.15, 0, 0] }], [34, AI]],
  },
  dtilt: {
    total: 26, trail: 'sword', trailF: [6, 10], sfx: [6, 'slash', 0.4],
    hit: [hb(7, 9, 1.65, 0.35, 0.45, 8, 30, 40, 60), hb(7, 9, 0.9, 0.35, 0.45, 8, 30, 40, 60)],
    anim: [[0, { by: -0.36, torso: [0.45, 0, 0], legR: [-1.2, 0, -0.18], shinR: [2.0, 0, 0], legL: [-1.2, 0, 0.18], shinL: [2.0, 0, 0], armR: [-0.4, 0, -0.3], foreR: [-0.6, 0, 0], wep: [1.3, 0, 0], armL: [-0.6, 0, 0.3], foreL: [-1.0, 0, 0] }], [7, { by: -0.38, torso: [0.6, 0.3, 0], legR: [-1.3, 0, -0.1], shinR: [1.7, 0, 0], legL: [-0.3, 0, 0.1], shinL: [1.9, 0, 0], armR: [-1.0, 0, -0.2], foreR: [0, 0, 0], wep: [0.55, 0, 0], armL: [-0.4, 0, 0.4], foreL: [-1.0, 0, 0] }], [16, { by: -0.38, torso: [0.55, 0.25, 0], legR: [-1.3, 0, -0.1], shinR: [1.7, 0, 0], legL: [-0.3, 0, 0.1], shinL: [1.9, 0, 0], armR: [-0.95, 0, -0.2], wep: [0.6, 0, 0] }], [26, { by: -0.36, torso: [0.45, 0, 0], legR: [-1.2, 0, -0.18], shinR: [2.0, 0, 0], legL: [-1.2, 0, 0.18], shinL: [2.0, 0, 0] }]],
  },
  dashattack: {
    total: 42, keepVel: true, trail: 'handL', trailF: [7, 18], sfx: [7, 'whoosh', 0.7],
    hit: [hb(8, 14, 0.85, 1.0, 0.7, 12, 45, 55, 72), hb(15, 20, 0.8, 1.0, 0.6, 8, 45, 40, 60)],
    onStart(ft) { ft.vx = ft.facing * 0.2; },
    onFrame(ft, f) {
      if (f <= 18) ft.vx = approach(ft.vx, ft.facing * 0.16, 0.01); else ft.friction(2.2);
      if (f % 4 === 0 && f < 18) ft.battle.effects.dust(ft.x, ft.y, 1, -ft.facing);
    },
    anim: [[0, AI], [6, { ...AI, armL: [-0.4, 0, 0.6], foreL: [-1.4, 0, 0], torso: [0.1, -0.3, 0] }], [9, { legR: [0.5, 0, -0.1], shinR: [0.6, 0, 0], legL: [-0.7, 0, 0.1], shinL: [0.5, 0, 0], armL: [-1.5, 0, 0.1], foreL: [-0.2, 0, 0], torso: [0.35, -0.6, 0], armR: [0.3, 0, -0.5], foreR: [-0.6, 0, 0], wep: [1.2, 0, 0], bz: 0.2, by: -0.1 }], [22, { legR: [0.4, 0, -0.1], legL: [-0.5, 0, 0.1], armL: [-1.4, 0, 0.1], torso: [0.3, -0.5, 0], armR: [0.3, 0, -0.5], wep: [1.2, 0, 0], bz: 0.15 }], [42, AI]],
  },
  fsmash: {
    total: 58, smash: true, charge: { f: 7, max: 60 }, trail: 'sword', trailF: [14, 20], sfx: [14, 'slash', 1.0],
    hit: [hb(16, 18, 1.85, 0.75, 0.72, 19, 36, 40, 100), hb(16, 18, 1.0, 1.25, 0.62, 16, 36, 38, 98)],
    onFrame(ft, f) {
      if (f === 17) {
        ft.battle.effects.ring(ft.x + ft.facing * 1.9, ft.y + 0.2, 0xffd060, 2.6, 16);
        ft.battle.effects.dust(ft.x + ft.facing * 1.9, ft.y, 6, ft.facing);
        ft.battle.shakeCam(0.08);
      }
    },
    anim: [[0, AI], [6, { ...AI, armR: [-2.9, 0, -0.3], foreR: [-0.4, 0, 0], wep: [0.3, 0, 0], torso: [-0.3, -0.3, 0], head: [-0.2, 0, 0], legR: [-0.2, 0, -0.1], legL: [0.4, 0, 0.1] }], [14, { ...AI, armR: [-3.0, 0, -0.3], foreR: [-0.5, 0, 0], wep: [0.2, 0, 0], torso: [-0.35, -0.35, 0], legR: [-0.2, 0, -0.1], legL: [0.45, 0, 0.1] }], [17, { ...LUNGE, armR: [-1.7, 0, -0.1], foreR: [-0.1, 0, 0], wep: [1.6, 0, 0], torso: [0.5, 0.3, 0], armL: [-0.2, 0, 0.6], foreL: [-1, 0, 0], by: -0.28, bz: 0.3 }], [30, { ...LUNGE, armR: [-1.6, 0, -0.1], foreR: [-0.1, 0, 0], wep: [1.6, 0, 0], torso: [0.45, 0.3, 0], by: -0.26, bz: 0.25 }], [58, AI]],
  },
  usmash: {
    total: 54, smash: true, charge: { f: 6, max: 60 }, trail: 'sword', trailF: [11, 18], sfx: [11, 'slash', 1.0],
    hit: [hb(13, 17, 0.3, 2.8, 0.75, 17, 88, 40, 98), hb(13, 17, 0.3, 1.75, 0.6, 15, 85, 40, 96)],
    onFrame(ft, f) { if (f === 13) ft.battle.effects.sparkle(ft.x + ft.facing * 0.3, ft.y + 2.8, 0xfff0b0, 6, 0.4); },
    anim: [[0, AI], [6, { by: -0.3, torso: [0.3, 0, 0], legR: [-0.8, 0, -0.15], shinR: [1.4, 0, 0], legL: [-0.8, 0, 0.15], shinL: [1.4, 0, 0], armR: [-0.3, 0, -0.3], foreR: [-1.3, 0, 0], wep: [0.5, 0, 0], armL: [-0.6, 0, 0.3], foreL: [-1.2, 0, 0] }], [13, { by: 0.06, torso: [-0.15, 0, 0], head: [-0.3, 0, 0], legR: [0.05, 0, -0.1], legL: [0.05, 0, 0.1], armR: [-3.05, 0, -0.1], foreR: [0, 0, 0], wep: [1.45, 0, 0], armL: [-0.4, 0, 0.5], foreL: [-1.2, 0, 0] }], [26, { by: 0.04, torso: [-0.1, 0, 0], armR: [-3.0, 0, -0.1], foreR: [0, 0, 0], wep: [1.4, 0, 0], armL: [-0.4, 0, 0.5] }], [54, AI]],
  },
  dsmash: {
    total: 58, smash: true, charge: { f: 6, max: 60 }, trail: 'sword', trailF: [8, 22], sfx: [8, 'slash', 0.9],
    hit: [hb(10, 11, 1.55, 0.3, 0.6, 15, 30, 36, 98), hb(10, 11, 0.8, 0.3, 0.5, 13, 30, 36, 96), hb(19, 20, -1.55, 0.3, 0.6, 16, 150, 38, 98), hb(19, 20, -0.8, 0.3, 0.5, 14, 150, 36, 96)],
    anim: [[0, AI], [6, { by: -0.35, torso: [0.5, -0.5, 0], legR: [-1.0, 0, -0.3], shinR: [1.3, 0, 0], legL: [-0.2, 0, 0.3], shinL: [1.6, 0, 0], armR: [-1.0, 0, -1.0], foreR: [0, 0, 0], wep: [0.8, 0, 0] }], [10, { by: -0.38, torso: [0.5, 0.6, 0], legR: [-1.0, 0, -0.3], shinR: [1.3, 0, 0], legL: [-0.2, 0, 0.3], shinL: [1.6, 0, 0], armR: [-1.1, 0, 0.4], foreR: [0, 0, 0], wep: [0.8, 0, 0] }], [15, { by: -0.38, body: [0, 0, 0], torso: [0.5, 0.6, 0], armR: [-1.1, 0, 0.4], wep: [1.9, 0, 0], legR: [-1.0, 0, -0.3], shinR: [1.3, 0, 0], legL: [-0.2, 0, 0.3], shinL: [1.6, 0, 0] }], [19, { by: -0.38, body: [0, Math.PI, 0], torso: [0.5, 0.6, 0], armR: [-1.1, 0, 0.4], wep: [1.9, 0, 0], legR: [-1.0, 0, -0.3], shinR: [1.3, 0, 0], legL: [-0.2, 0, 0.3], shinL: [1.6, 0, 0] }], [32, { by: -0.3, body: [0, Math.PI, 0], torso: [0.4, 0.4, 0], armR: [-1.0, 0, 0.3], wep: [1.8, 0, 0] }], [58, { ...AI, body: [0, Math.PI * 2, 0] }]],
  },
  nair: {
    total: 40, aerial: true, landLag: 10, acBefore: 5, acAfter: 30, alpha: 0.85, trail: 'sword', trailF: [6, 13], sfx: [6, 'slash', 0.7],
    hit: [hb(7, 12, 0, 0.95, 1.35, 10, 45, 30, 90, { away: true })],
    anim: (() => {
      const S = { ...TUCK, armR: [-1.5, 0, -1.1], foreR: [0, 0, 0], wep: [1.5, 0, 0], armL: [-0.8, 0, 0.8], foreL: [-1.2, 0, 0] };
      return [[0, AIR], [6, { ...S, body: [0, 0, 0] }], [13, { ...S, body: [0, Math.PI * 2, 0] }], [20, { ...S, body: [0, Math.PI * 2, 0] }], [40, { ...AIR, body: [0, Math.PI * 2, 0] }]];
    })(),
  },
  fair: {
    total: 42, aerial: true, landLag: 14, acBefore: 4, acAfter: 32, trail: 'sword', trailF: [8, 15], sfx: [9, 'slash', 0.7],
    hit: [hb(10, 13, 0, 0, 0.7, 13, 40, 32, 95, { path: [[1.1, 2.2], [1.45, 0.3]] }), hb(10, 13, 0.6, 1.2, 0.5, 10, 40, 30, 90)],
    anim: [[0, AIR], [6, { ...TUCK, armR: [-2.9, 0, -0.3], foreR: [-0.4, 0, 0], wep: [0.3, 0, 0], torso: [-0.3, 0.2, 0], armL: [-0.6, 0, 0.5], foreL: [-1.2, 0, 0] }], [10, { ...TUCK, armR: [-2.6, 0, -0.3], foreR: [-0.3, 0, 0], wep: [0.4, 0, 0], torso: [-0.3, 0.2, 0] }], [13, { ...TUCK, armR: [-0.6, 0, -0.1], foreR: [-0.1, 0, 0], wep: [1.3, 0, 0], torso: [0.5, 0.25, 0], armL: [-0.3, 0, 0.6] }], [24, { ...TUCK, armR: [-0.5, 0, -0.1], wep: [1.3, 0, 0], torso: [0.45, 0.2, 0] }], [42, AIR]],
  },
  bair: {
    total: 38, aerial: true, landLag: 12, acBefore: 4, acAfter: 28, trail: 'handL', trailF: [6, 12], sfx: [7, 'whoosh', 0.7],
    hit: [hb(8, 11, -1.15, 1.0, 0.72, 12, 145, 38, 95)],
    anim: [[0, AIR], [5, { ...TUCK, torso: [0.1, 0.5, 0], armL: [-1.2, 0, 0.3], foreL: [-0.8, 0, 0], head: [0, 0.3, 0] }], [9, { ...TUCK, torso: [0.2, -1.1, 0], head: [0, -0.8, 0], armL: [1.3, 0, 0.5], foreL: [-0.3, 0, 0], armR: [-0.8, 0, -0.6], wep: [1.2, 0, 0] }], [18, { ...TUCK, torso: [0.2, -1.0, 0], head: [0, -0.7, 0], armL: [1.2, 0, 0.5], foreL: [-0.3, 0, 0] }], [38, AIR]],
  },
  uair: {
    total: 38, aerial: true, landLag: 10, acBefore: 3, acAfter: 28, trail: 'sword', trailF: [6, 12], sfx: [6, 'slash', 0.6],
    hit: [hb(7, 11, 0, 0, 0.7, 11, 85, 32, 95, { path: [[1.0, 2.1], [-0.9, 2.1]] })],
    anim: [[0, AIR], [5, { ...TUCK, armR: [-1.2, 0, -0.3], foreR: [-0.2, 0, 0], wep: [0.8, 0, 0], torso: [0.1, 0, 0] }], [8, { ...TUCK, body: [-0.3, 0, 0], armR: [-2.0, 0, -0.2], foreR: [0, 0, 0], wep: [0.7, 0, 0], head: [-0.4, 0, 0] }], [12, { ...TUCK, body: [-0.35, 0, 0], armR: [-2.9, 0, -0.2], foreR: [0, 0, 0], wep: [0.8, 0, 0], head: [-0.4, 0, 0] }], [22, { ...TUCK, body: [-0.2, 0, 0], armR: [-2.8, 0, -0.2], wep: [0.8, 0, 0] }], [38, AIR]],
  },
  dair: {
    total: 52, aerial: true, landLag: 22, acBefore: 3, acAfter: 42, trail: 'sword', trailF: [12, 22], sfx: [13, 'slash', 0.8],
    hit: [hb(14, 18, 0.1, -0.4, 0.58, 15, 270, 30, 88), hb(19, 30, 0.1, -0.3, 0.5, 10, 70, 25, 70)],
    onFrame(ft, f) {
      if (f < 13) ft.gravMult = 0.25;
      if (f === 14 && !ft.grounded) { ft.vy = Math.min(ft.vy, -0.26); }
    },
    anim: [[0, AIR], [8, { ...TUCK, armR: [-2.6, 0, -0.3], foreR: [-0.4, 0, 0], wep: [2.0, 0, 0], torso: [-0.1, 0, 0], by: 0.1 }], [14, { legR: [-0.3, 0, -0.1], shinR: [0.5, 0, 0], legL: [-0.1, 0, 0.1], shinL: [0.4, 0, 0], armR: [-0.3, 0, -0.1], foreR: [-0.6, 0, 0], wep: [2.4, 0, 0], torso: [0.2, 0, 0], armL: [-0.6, 0, 0.5], foreL: [-1.0, 0, 0] }], [30, { legR: [-0.3, 0, -0.1], shinR: [0.5, 0, 0], armR: [-0.3, 0, -0.1], foreR: [-0.6, 0, 0], wep: [2.4, 0, 0], torso: [0.2, 0, 0] }], [52, AIR]],
  },
  neutralb: {
    // サンランス: ためて突く一撃。シールドを大きく削る
    total: 44, charge: { f: 6, max: 60 }, chargeScale: 1.2, keepVel: true, fall: 0.45, landContinue: true, trail: 'sword', trailF: [13, 18], sfx: [13, 'slash', 0.9],
    hit: [hb(14, 17, 1.95, 1.1, 0.55, 9, 38, 36, 86, { shield: 20 }), hb(14, 17, 1.15, 1.1, 0.5, 8, 38, 34, 84, { shield: 18 })],
    onFrame(ft, f) {
      if (f === 13) ft.vx = ft.facing * 0.2;
      else if (ft.grounded) ft.friction(1.2);
      else ft.vx *= 0.94;
      if (f === 14) {
        const c = ft.chargeRatio;
        ft.battle.effects.sparkle(ft.x + ft.facing * 2.0, ft.y + 1.1, 0xfff0b0, 4 + Math.floor(c * 8), 0.4);
        if (c > 0.7) ft.battle.effects.ring(ft.x + ft.facing * 2.0, ft.y + 1.1, 0xffd060, 3, 16);
      }
    },
    onCharge(ft) {
      if (ft.charge % 4 === 0) {
        const p = ft.model.trails.sword[1].getWorldPosition(ft.battle.tmpV);
        ft.battle.effects.sparkle(p.x, p.y, 0xffe38a, 1, 0.15);
      }
    },
    anim: [[0, AI], [6, { armR: [0.6, 0, -0.3], foreR: [-1.8, 0, 0], wep: [1.2, 0, 0], torso: [-0.2, -0.6, 0], by: -0.15, legR: [-0.5, 0, -0.1], shinR: [0.6, 0, 0], legL: [0.5, 0, 0.1], shinL: [0.4, 0, 0], armL: [-0.6, 0, 0.4], foreL: [-1.3, 0, 0] }], [14, { ...LUNGE, armR: [-1.55, 0, -0.05], foreR: [0, 0, 0], wep: [1.3, 0, 0], torso: [0.3, 0.6, 0], by: -0.25, bz: 0.35, armL: [-0.2, 0, 0.6] }], [26, { ...LUNGE, armR: [-1.5, 0, -0.05], foreR: [0, 0, 0], wep: [1.28, 0, 0], torso: [0.25, 0.5, 0], bz: 0.25 }], [44, AI]],
  },
  sideb: {
    // ゴールデンラッシュ: スーパーアーマー付きの盾突進
    total: 48, armor: [8, 30], noGravity: [0, 30], keepVel: true, noDrift: true, canLeaveGround: true, ledgeGrab: 10, landContinue: true,
    hit: [hb(8, 30, 0.85, 1.0, 0.72, 10, 42, 60, 65)],
    onStart(ft) { if (!ft.grounded) ft.sideBUsed = true; ft.vy = 0; },
    onFrame(ft, f) {
      if (f < 8) { ft.vx = approach(ft.vx, 0, 0.02); if (!ft.grounded) ft.vy = 0.004; }
      else if (f <= 30) {
        ft.vx = ft.facing * 0.28; ft.vy = ft.grounded ? 0 : 0.025;
        if (f === 8) audio.whoosh(1);
        if (f % 3 === 0) {
          if (ft.grounded) ft.battle.effects.dust(ft.x - ft.facing * 0.4, ft.y, 1, -ft.facing);
          ft.battle.effects.sparkle(ft.x + ft.facing * 0.9, ft.y + 1.0, 0xffe38a, 1, 0.4);
        }
      } else ft.vx *= 0.85;
    },
    anim: [[0, AI], [6, { ...AI, armL: [-0.3, 0, 0.6], foreL: [-1.5, 0, 0], torso: [-0.1, -0.4, 0], by: -0.2, legR: [-0.6, 0, -0.1], shinR: [0.9, 0, 0], legL: [0.4, 0, 0.1], shinL: [0.6, 0, 0] }], [9, { armL: [-1.5, 0, 0.15], foreL: [-0.3, 0, 0], torso: [0.4, -0.7, 0], armR: [0.4, 0, -0.4], foreR: [-0.8, 0, 0], wep: [1.0, 0, 0], legR: [0.6, 0, -0.1], shinR: [0.4, 0, 0], legL: [-0.7, 0, 0.1], shinL: [0.6, 0, 0], by: -0.12, bz: 0.2 }], [30, { armL: [-1.5, 0, 0.15], foreL: [-0.3, 0, 0], torso: [0.4, -0.7, 0], armR: [0.4, 0, -0.4], wep: [1.0, 0, 0], legR: [-0.6, 0, -0.1], shinR: [0.4, 0, 0], legL: [0.6, 0, 0.1], shinL: [0.6, 0, 0], by: -0.12, bz: 0.2 }], [48, AI]],
  },
  upb: {
    // ライジングクレスト: 回転しながら上昇する斬り上げ
    total: 42, helpless: true, helplessLag: 24, ledgeGrab: 14, noDrift: true, keepVel: true, noGravity: [4, 24], alpha: 0.9, trail: 'sword', trailF: [4, 24],
    hit: [
      hb(5, 7, 0.3, 1.2, 0.95, 3, 88, 40, 8, { group: 1, link: true }), hb(9, 11, 0.3, 1.3, 0.95, 3, 88, 40, 8, { group: 2, link: true }),
      hb(13, 15, 0.3, 1.4, 0.95, 3, 88, 40, 8, { group: 3, link: true }), hb(19, 22, 0.3, 1.9, 1.05, 6, 75, 60, 90, { group: 4 }),
    ],
    onStart(ft) { ft.upBUsed = true; ft.vx *= 0.4; },
    onFrame(ft, f) {
      if (f < 4) { ft.vy = ft.grounded ? 0 : Math.max(ft.vy, 0) * 0.5; }
      if (f === 4) { ft.grounded = false; ft.surface = null; ft.y += 0.02; audio.whoosh(1); ft.battle.effects.ring(ft.x, ft.y + 0.2, 0xffd060, 2, 14); }
      if (f >= 4 && f <= 24) {
        ft.vy = 0.36 * (1 - (f - 4) / 21) + 0.015;
        ft.vx = approach(ft.vx, ft.input.stick.x * 0.12, 0.014);
        if (f % 2 === 0) ft.battle.effects.sparkle(ft.x, ft.y + 1.0, 0xffe38a, 1, 0.5);
      }
      if (f > 24) ft.drift(0.6);
      if (f % 4 === 1 && f < 22) audio.slash(0.3);
    },
    anim: (() => {
      const S = { armR: [-2.2, 0, -0.9], foreR: [0, 0, 0], wep: [1.2, 0, 0], armL: [-0.5, 0, 0.8], foreL: [-1.2, 0, 0], legR: [-0.3, 0, -0.1], shinR: [0.6, 0, 0], legL: [0.1, 0, 0.1], shinL: [0.3, 0, 0], head: [-0.3, 0, 0] };
      return [[0, { ...AI, by: -0.25, legR: [-0.8, 0, -0.15], shinR: [1.4, 0, 0], legL: [-0.8, 0, 0.15], shinL: [1.4, 0, 0] }], [4, { ...S, body: [0, 0, 0] }], [12, { ...S, body: [0, Math.PI * 3, 0] }], [22, { ...S, body: [0, Math.PI * 6, 0] }], [42, { ...AIR, body: [0, Math.PI * 6, 0] }]];
    })(),
  },
  downb: {
    // ブルワーク: 盾を構えて攻撃を受け止め反撃する
    total: 50, counter: [5, 28], fall: 0.3, landContinue: true,
    onFrame(ft, f) { if (f === 5) audio.counter(); },
    anim: [[0, AI], [5, { armL: [-1.5, 0, 0.35], foreL: [-0.6, 0, 0], torso: [0.1, -0.7, 0], armR: [0.3, 0, -0.5], foreR: [-0.8, 0, 0], wep: [0.9, 0, 0], by: -0.14, legR: [-0.5, 0, -0.1], shinR: [0.7, 0, 0], legL: [0.5, 0, 0.1], shinL: [0.4, 0, 0] }], [28, { armL: [-1.45, 0, 0.35], foreL: [-0.6, 0, 0], torso: [0.1, -0.6, 0], armR: [0.3, 0, -0.5], wep: [0.9, 0, 0], by: -0.12 }], [50, AI]],
  },
  counterhit: {
    total: 36, intang: [0, 14], trail: 'sword', trailF: [4, 10], sfx: [5, 'slash', 1.0], alpha: 0.7,
    hit: [hb(6, 9, 1.5, 1.1, 0.85, (ft) => clamp(ft.counterDmg * 1.3, 8, 35), 38, 60, 88)],
    onFrame(ft, f) { if (f === 6) ft.battle.effects.ring(ft.x + ft.facing * 1.4, ft.y + 1.1, 0xfff0b0, 3, 14); },
    anim: [[0, { ...AI, armR: [-2.9, 0, -0.3], foreR: [-0.4, 0, 0], wep: [0.3, 0, 0], torso: [-0.3, -0.3, 0] }], [6, { ...LUNGE, armR: [-1.6, 0, 0.2], foreR: [0, 0, 0], wep: [1.3, 0, 0], torso: [0.5, 0.5, 0], bz: 0.3 }], [20, { ...LUNGE, armR: [-1.5, 0, 0.2], wep: [1.3, 0, 0], torso: [0.4, 0.4, 0], bz: 0.25 }], [36, AI]],
  },
  final: {
    // ソーラー・ジャッジメント: 画面を横切る巨大な黄金の剣閃
    total: 100, fs: true, intang: [0, 100], noGravity: [0, 100], noDrift: true, keepVel: true, trail: 'sword', trailF: [50, 60],
    onStart(ft) {
      ft.vx = 0; ft.vy = 0;
      ft.battle.startCine(ft, 45);
    },
    onFrame(ft, f) {
      const b = ft.battle, e = b.effects;
      ft.vx = 0;
      if (!ft.grounded) ft.vy = 0;
      if (f < 45 && f % 2 === 0) {
        const p = ft.model.trails.sword[1].getWorldPosition(b.tmpV);
        e.sparkle(p.x, p.y, f % 4 ? 0xffd060 : 0xffffff, 2, 0.4);
      }
      if (f === 54) {
        b.spawnProjectile(ft, { x: ft.x + ft.facing * 1.6, y: ft.y + 1.2, vx: ft.facing * 0.42, vy: 0, r: 1.9, dmg: 32, ang: 38, bkb: 110, kbg: 92, life: 90, color: 0xffd060, kind: 'fswave', fs: true });
        b.shakeCam(0.5);
        audio.fsBoom();
      }
    },
    anim: [[0, AI], [20, { ...AI, armR: [-3.0, 0, -0.2], foreR: [0, 0, 0], wep: [1.5, 0, 0], torso: [-0.2, 0, 0], head: [-0.4, 0, 0], armL: [-0.4, 0, 0.6], legR: [-0.2, 0, -0.15], legL: [0.2, 0, 0.15] }], [45, { ...AI, armR: [-3.0, 0, -0.2], foreR: [0, 0, 0], wep: [1.5, 0, 0], torso: [-0.25, 0, 0], head: [-0.4, 0, 0] }], [50, { ...AI, armR: [-2.9, 0, -0.3], foreR: [-0.4, 0, 0], wep: [0.3, 0, 0], torso: [-0.35, -0.3, 0] }], [55, { ...LUNGE, armR: [-1.7, 0, -0.1], foreR: [-0.1, 0, 0], wep: [1.6, 0, 0], torso: [0.5, 0.3, 0], by: -0.28, bz: 0.3 }], [80, { ...LUNGE, armR: [-1.6, 0, -0.1], wep: [1.6, 0, 0], torso: [0.45, 0.3, 0], by: -0.26, bz: 0.25 }], [100, AI]],
  },
  grab: {
    total: 34,
    hit: [hb(7, 8, 0.85, 1.05, 0.5, 0, 0, 0, 0, { type: 'grab' })],
    anim: [[0, AI], [7, { ...AI, armL: [-1.5, 0, -0.1], foreL: [0, 0, 0], armR: [-1.0, 0, -0.3], torso: [0.25, -0.3, 0], bz: 0.12 }], [16, { ...AI, armL: [-1.4, 0, -0.1], foreL: [-0.1, 0, 0], torso: [0.2, -0.2, 0] }], [34, AI]],
  },
  dashgrab: {
    total: 40, keepVel: true,
    hit: [hb(9, 10, 1.05, 1.05, 0.55, 0, 0, 0, 0, { type: 'grab' })],
    onFrame(ft) { ft.friction(1.2); },
    anim: [[0, AI], [9, { ...AI, armL: [-1.5, 0, -0.1], foreL: [0, 0, 0], torso: [0.35, -0.3, 0], bz: 0.15 }], [22, { ...AI, armL: [-1.4, 0, -0.1], torso: [0.3, -0.2, 0] }], [40, AI]],
  },
  pummel: {
    total: 18, pummelAt: 6, pummelDmg: 2,
    anim: [[0, { ...AI, armL: [-1.35, 0, -0.05] }], [6, { ...AI, armL: [-1.35, 0, -0.05], armR: [-1.2, 0, 0.3], foreR: [-0.9, 0, 0], torso: [0.2, 0.4, 0] }], [18, { ...AI, armL: [-1.35, 0, -0.05] }]],
  },
  fthrow: {
    total: 34, throwAt: 12, throwHit: { dmg: 9, ang: 40, bkb: 70, kbg: 68 },
    hold: (f) => [0.85, 0.2],
    anim: [[0, { ...AI, armL: [-1.35, 0, -0.05] }], [8, { ...AI, armL: [-0.4, 0, 0.5], foreL: [-1.5, 0, 0], torso: [-0.1, -0.5, 0] }], [12, { ...LUNGE, armL: [-1.5, 0, 0.1], foreL: [-0.2, 0, 0], torso: [0.35, -0.6, 0], bz: 0.25 }], [34, AI]],
  },
  bthrow: {
    total: 40, throwAt: 16, throwHit: { dmg: 11, ang: 140, bkb: 60, kbg: 88 },
    hold: (f) => { const t = Math.min(1, f / 16); return [0.85 * Math.cos(Math.PI * t), 0.3 + 0.5 * Math.sin(Math.PI * t)]; },
    anim: [[0, { ...AI, armL: [-1.35, 0, -0.05] }], [16, { ...AI, body: [0, Math.PI, 0], armL: [-2.0, 0, 0.3], torso: [0.2, 0, 0] }], [24, { ...AI, body: [0, Math.PI * 2, 0] }], [40, { ...AI, body: [0, Math.PI * 2, 0] }]],
  },
  uthrow: {
    total: 40, throwAt: 14, throwHit: { dmg: 9, ang: 90, bkb: 75, kbg: 75 },
    hold: (f) => [0.6 - f * 0.03, 0.2 + f * 0.13],
    anim: [[0, { ...AI, armL: [-1.35, 0, -0.05] }], [14, { ...AI, armL: [-3.0, 0, 0.1], foreL: [0, 0, 0], by: 0.05, head: [-0.4, 0, 0] }], [40, AI]],
  },
  dthrow: {
    total: 40, throwAt: 16, throwHit: { dmg: 7, ang: 80, bkb: 60, kbg: 40 },
    hold: (f) => [0.85, Math.max(0, 0.2 - f * 0.02)],
    onFrame(ft, f) { if (f === 16) { ft.battle.effects.dust(ft.x + ft.facing * 0.8, ft.y, 8, 0); ft.battle.shakeCam(0.06); } },
    anim: [[0, { ...AI, armL: [-1.35, 0, -0.05] }], [10, { ...AI, armL: [-2.6, 0, 0.3], armR: [-2.4, 0, -0.3], wep: [0.4, 0, 0], by: 0.05 }], [16, { ...AI, armL: [-0.8, 0, 0.3], armR: [-0.8, 0, -0.3], wep: [1.8, 0, 0], torso: [0.5, 0, 0], by: -0.25 }], [40, AI]],
  },
  getupattack: {
    total: 32, intang: [0, 9], alpha: 0.8, trail: 'sword', trailF: [7, 12],
    hit: [hb(8, 10, 1.2, 0.4, 0.62, 7, 40, 60, 50, { away: true }), hb(8, 10, -1.2, 0.4, 0.62, 7, 40, 60, 50, { away: true })],
    anim: [[0, { by: -0.5, torso: [0.4, 0, 0] }], [8, { by: -0.3, body: [0, 0, 0], armR: [-1.4, 0, -1.2], wep: [1.5, 0, 0] }], [14, { by: -0.3, body: [0, Math.PI * 2, 0], armR: [-1.4, 0, -1.2], wep: [1.5, 0, 0] }], [32, { ...AI, body: [0, Math.PI * 2, 0] }]],
  },
  ledgeattack: {
    total: 36, intang: [0, 10], trail: 'sword', trailF: [8, 14], sfx: [9, 'slash', 0.6],
    hit: [hb(10, 13, 1.2, 0.5, 0.7, 8, 40, 60, 50)],
    anim: [[0, { by: -0.3, torso: [0.5, 0, 0] }], [10, { ...LUNGE, armR: [-1.0, 0, 0.3], foreR: [0, 0, 0], wep: [1.0, 0, 0], torso: [0.4, 0.4, 0] }], [20, { ...LUNGE, armR: [-0.9, 0, 0.3], wep: [1.0, 0, 0], torso: [0.3, 0.3, 0] }], [36, AI]],
  },
};

export const DULLAHAN = {
  id: 'dullahan',
  name: 'デュラハン',
  en: 'DULLAHAN',
  title: '黄金の首なし騎士',
  color: 0xffc83a,
  css: '#ffc83a',
  desc: '兜の奥に炎だけが灯る、中身のない生ける甲冑。大剣のリーチと一撃の重さ、アーマー突進とカウンターが武器の重量級。',
  specials: ['サンランス（ため突き）', 'ゴールデンラッシュ（アーマー体当たり）', 'ライジングクレスト（上昇斬り）', 'ブルワーク（カウンター）'],
  stats: {
    weight: 116, height: 2.05, radius: 0.46,
    walkSpeed: 0.075, dashSpeed: 0.15, dashFrames: 12, runSpeed: 0.135, traction: 0.011,
    airSpeed: 0.088, airAccel: 0.0065, airFriction: 0.003,
    gravity: 0.0095, fallSpeed: 0.18, fastFall: 0.28,
    jumpV: 0.25, hopV: 0.16, djV: 0.235, airJumps: 1, jumpsquat: 4, rollSpeed: 0.125,
  },
  grabHold: [0.85, 0.2],
  counterMove: 'counterhit',
  buildModel: buildDullahan,
  anims: makeAnims({
    idle: AI, hipY: DULLAHAN_HIP, bob: 0.8,
    shieldExtra: { armL: [-1.4, 0, 0.2], foreL: [-0.5, 0, 0], armR: [0.2, 0, -0.4], foreR: [-0.8, 0, 0], wep: [1.2, 0, 0] },
    holdExtra: { armR: [-0.35, 0, -0.3], foreR: [-0.8, 0, 0], wep: [1.6, 0, 0], armL: [-1.4, 0, -0.05], foreL: [-0.2, 0, 0] },
    runExtra: () => ({ armR: [-0.3, 0, -0.3], foreR: [-0.9, 0, 0], wep: [1.9, 0, 0] }),
    override: {
      victory: (f) => {
        const k = Math.min(1, f / 30);
        return { armR: [-3.0 * k, 0, -0.25], foreR: [0, 0, 0], wep: [1.55, 0, 0], armL: [-0.4, 0, 0.3], foreL: [-1.2, 0, 0], legR: [-0.2, 0, -0.15], legL: [0.2, 0, 0.15], torso: [-0.1, 0.1, 0], head: [-0.25, 0, 0] };
      },
    },
  }),
  moves,
};
