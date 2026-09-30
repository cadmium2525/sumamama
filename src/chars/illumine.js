// イルミネ: 軽量・空中戦が得意な影の魔法少女。空中ジャンプ2回、ワープ復帰、飛び道具、反射
import { buildIllumine, ILLUMINE_HIP } from '../models/illumineModel.js';
import { makeAnims } from './anims.js';
import { approach, sign } from '../util.js';
import { audio } from '../audio.js';
import { EclipseSphere } from '../smashball.js';

const hb = (f0, f1, x, y, r, dmg, ang, bkb, kbg, extra = {}) => ({ f: [f0, f1], x, y, r, dmg, ang, bkb, kbg, ...extra });

// 基本姿勢
// 待機: 片足で立ち、もう片方の膝を曲げ、袖を左右に広げる（参考画像05）
const NI = { armR: [0.05, 0, -0.95], foreR: [-0.1, 0, 0.45], armL: [0.05, 0, 0.95], foreL: [-0.1, 0, -0.45], legR: [0.02, 0, 0.03], legL: [-0.28, 0, -0.14], shinL: [0.9, 0, 0], torso: [0.02, 0, 0.03], head: [0.06, 0, 0.14], by: 0.02 };
const AIR = { legR: [-0.35, 0, -0.1], shinR: [0.6, 0, 0], legL: [0.15, 0, 0.1], shinL: [0.4, 0, 0], armR: [-0.3, 0, -0.9], armL: [-0.3, 0, 0.9], torso: [0.05, 0, 0] };
const TUCK = { legR: [-1.2, 0, -0.1], shinR: [1.8, 0, 0], legL: [-1.0, 0, 0.1], shinL: [1.6, 0, 0] };

const moves = {
  // ---------- 弱攻撃 ----------
  jab1: {
    total: 18, next: 'jab2', nextWin: [5, 17], trail: 'handR', trailF: [2, 6], sfx: [2, 'whoosh', 0.2],
    hit: [hb(3, 4, 0.75, 1.1, 0.42, 2.5, 75, 6, 22)],
    anim: [[0, NI], [2, { ...NI, armR: [-0.6, 0, -0.6], foreR: [-1.4, 0, 0], torso: [0.1, -0.3, 0] }], [4, { ...NI, armR: [-1.55, 0, -0.1], foreR: [-0.05, 0, 0], torso: [0.15, 0.35, 0] }], [12, { ...NI, armR: [-1.4, 0, -0.1], foreR: [-0.2, 0, 0], torso: [0.12, 0.3, 0] }], [18, NI]],
  },
  jab2: {
    total: 18, next: 'jab3', nextWin: [5, 17], trail: 'handL', trailF: [2, 6], sfx: [2, 'whoosh', 0.2],
    hit: [hb(3, 4, 0.8, 1.0, 0.42, 2.5, 75, 6, 22)],
    anim: [[0, { ...NI, armR: [-1.4, 0, -0.1], torso: [0.12, 0.3, 0] }], [4, { ...NI, armL: [-1.55, 0, 0.1], foreL: [-0.05, 0, 0], torso: [0.15, -0.35, 0] }], [12, { ...NI, armL: [-1.4, 0, 0.1], torso: [0.12, -0.3, 0] }], [18, NI]],
  },
  jab3: {
    total: 30, trail: 'handR', trailF: [3, 9], sfx: [4, 'whoosh', 0.5],
    hit: [hb(5, 7, 0.95, 1.05, 0.62, 4.5, 40, 45, 70)],
    onFrame(ft, f) { if (f === 5) ft.battle.effects.ring(ft.x + ft.facing * 1.0, ft.y + 1.05, 0xd070ff, 1.6); },
    anim: [[0, NI], [3, { ...NI, armR: [-0.5, 0, -0.4], armL: [-0.5, 0, 0.4], foreR: [-1.5, 0, 0], foreL: [-1.5, 0, 0], torso: [-0.1, 0, 0], flare: 0.2 }], [6, { ...NI, armR: [-1.5, 0, 0.15], armL: [-1.5, 0, -0.15], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [0.25, 0, 0], bz: 0.12, flare: 0.5 }], [18, { ...NI, armR: [-1.4, 0, 0.1], armL: [-1.4, 0, -0.1], torso: [0.2, 0, 0] }], [30, NI]],
  },
  // ---------- 強攻撃 ----------
  ftilt: {
    total: 27, trail: 'footR', trailF: [5, 10], sfx: [5, 'whoosh', 0.4],
    hit: [hb(6, 8, 1.05, 0.9, 0.48, 8, 36, 28, 100), hb(6, 8, 0.5, 0.9, 0.4, 8, 36, 28, 100)],
    anim: [[0, NI], [4, { ...NI, legR: [0.4, 0, -0.1], shinR: [1.2, 0, 0], torso: [0.1, -0.3, 0], armR: [0.2, 0, -0.8], armL: [0.2, 0, 0.8] }], [7, { legR: [-1.55, 0, -0.1], shinR: [0.05, 0, 0], torso: [-0.35, 0.25, 0], legL: [0.15, 0, 0.05], shinL: [0.25, 0, 0], armR: [0.4, 0, -1.1], armL: [0.3, 0, 1.1], head: [-0.1, 0, 0], flare: 0.3 }], [14, { legR: [-1.45, 0, -0.1], shinR: [0.2, 0, 0], torso: [-0.3, 0.2, 0], armR: [0.4, 0, -1.0], armL: [0.3, 0, 1.0] }], [27, NI]],
  },
  utilt: {
    total: 28, trail: 'handR', trailF: [5, 12], sfx: [5, 'whoosh', 0.4],
    hit: [hb(6, 10, 0, 0, 0.55, 7, 96, 38, 100, { path: [[0.75, 1.55], [-0.6, 1.7]] }), hb(6, 10, 0, 0, 0.5, 7, 96, 38, 100, { path: [[0.5, 2.25], [-0.4, 2.35]] })],
    anim: [[0, NI], [4, { ...NI, torso: [0.35, 0, 0], head: [0.4, 0, 0], armR: [0.4, 0, -0.4], armL: [0.4, 0, 0.4], by: -0.1, earR: [0.8, 0, 0], earL: [0.8, 0, 0] }], [8, { torso: [-0.3, 0, 0], head: [-0.5, 0, 0], armR: [-2.9, 0, -0.2], foreR: [0, 0, 0], armL: [-2.9, 0, 0.2], foreL: [0, 0, 0], earR: [-1.2, 0, 0], earL: [-1.2, 0, 0], by: 0.05 }], [14, { torso: [-0.25, 0, 0], head: [-0.4, 0, 0], armR: [-2.8, 0, -0.3], armL: [-2.8, 0, 0.3], earR: [-1.0, 0, 0], earL: [-1.0, 0, 0] }], [28, NI]],
  },
  dtilt: {
    total: 20, trail: 'footR', trailF: [4, 8], sfx: [4, 'whoosh', 0.3],
    hit: [hb(5, 7, 1.05, 0.25, 0.45, 6, 78, 45, 45), hb(5, 7, 0.5, 0.25, 0.4, 6, 78, 45, 45)],
    anim: [[0, { by: -0.3, torso: [0.4, 0, 0], legR: [-1.2, 0, -0.18], shinR: [2.0, 0, 0], legL: [-1.2, 0, 0.18], shinL: [2.0, 0, 0] }], [4, { by: -0.33, torso: [0.5, 0, 0], legR: [-1.45, 0, -0.2], shinR: [0.2, 0, 0], legL: [-0.9, 0, 0.15], shinL: [2.0, 0, 0], armR: [-0.3, 0, -0.6], armL: [-0.3, 0, 0.6] }], [12, { by: -0.33, torso: [0.5, 0, 0], legR: [-1.4, 0, -0.2], shinR: [0.3, 0, 0], legL: [-0.9, 0, 0.15], shinL: [2.0, 0, 0] }], [20, { by: -0.3, torso: [0.4, 0, 0], legR: [-1.2, 0, -0.18], shinR: [2.0, 0, 0], legL: [-1.2, 0, 0.18], shinL: [2.0, 0, 0] }]],
  },
  dashattack: {
    total: 34, keepVel: true, trail: 'handR', trailF: [3, 16], sfx: [3, 'whoosh', 0.6],
    hit: [hb(5, 8, 0.7, 0.85, 0.62, 9, 55, 55, 70), hb(9, 16, 0.7, 0.85, 0.55, 6, 60, 40, 50)],
    onStart(ft) { ft.vx = ft.facing * 0.2; },
    onFrame(ft, f) {
      if (f <= 15) ft.vx = approach(ft.vx, ft.facing * 0.15, 0.01);
      else ft.friction(2.2);
      if (f % 3 === 0 && f < 16) ft.battle.effects.sparkle(ft.x - ft.facing * 0.3, ft.y + 0.6, 0xd48cff, 1, 0.3);
    },
    anim: [[0, NI], [3, { body: [0.45, 0, 0], armR: [-1.5, 0, -0.7], armL: [-1.5, 0, 0.7], foreR: [0, 0, 0], foreL: [0, 0, 0], legR: [0.4, 0, -0.05], shinR: [0.9, 0, 0], legL: [0.25, 0, 0.05], shinL: [0.5, 0, 0], flare: 0.5, head: [-0.3, 0, 0] }], [16, { body: [0.4, 0, 0], armR: [-1.4, 0, -0.6], armL: [-1.4, 0, 0.6], legR: [0.3, 0, 0], shinR: [0.8, 0, 0], legL: [0.2, 0, 0], shinL: [0.5, 0, 0], flare: 0.4 }], [34, NI]],
  },
  // ---------- スマッシュ攻撃 ----------
  fsmash: {
    total: 50, smash: true, charge: { f: 6, max: 60 }, trail: 'handR', trailF: [12, 17], sfx: [12, 'whoosh', 0.8],
    hit: [hb(13, 16, 1.4, 1.0, 0.72, 15, 38, 34, 102), hb(13, 16, 0.7, 1.0, 0.5, 13, 38, 34, 100)],
    onFrame(ft, f) {
      if (f === 13) {
        const e = ft.battle.effects;
        e.ring(ft.x + ft.facing * 1.4, ft.y + 1.0, 0xb45cff, 2.6, 18);
        e.sparkle(ft.x + ft.facing * 1.5, ft.y + 1.0, 0xff9cf0, 6, 0.6);
      }
    },
    anim: [[0, NI], [5, { torso: [-0.2, -0.7, 0], armR: [0.9, 0, -0.6], foreR: [-1.2, 0, 0], armL: [-0.9, 0, 0.5], foreL: [-0.3, 0, 0], legR: [0.5, 0, -0.1], shinR: [0.5, 0, 0], legL: [-0.5, 0, 0.1], shinL: [0.4, 0, 0], by: -0.1, flare: 0.2 }], [11, { torso: [-0.25, -0.8, 0], armR: [1.0, 0, -0.6], foreR: [-1.3, 0, 0], armL: [-1.0, 0, 0.5], legR: [0.55, 0, -0.1], shinR: [0.5, 0, 0], legL: [-0.55, 0, 0.1], shinL: [0.45, 0, 0], by: -0.12 }], [13, { torso: [0.35, 0.6, 0], armR: [-1.6, 0, -0.05], foreR: [0, 0, 0], armL: [0.7, 0, 0.5], foreL: [-0.2, 0, 0], legR: [0.6, 0, -0.1], shinR: [0.4, 0, 0], legL: [-0.7, 0, 0.1], shinL: [0.2, 0, 0], by: -0.12, bz: 0.25, flare: 0.45 }], [26, { torso: [0.3, 0.5, 0], armR: [-1.5, 0, -0.05], armL: [0.6, 0, 0.5], legR: [0.5, 0, -0.1], legL: [-0.6, 0, 0.1], by: -0.1, bz: 0.2 }], [50, NI]],
  },
  usmash: {
    total: 46, smash: true, charge: { f: 5, max: 60 }, trail: 'handR', trailF: [10, 16], sfx: [10, 'whoosh', 0.8],
    hit: [hb(11, 16, 0.2, 2.15, 0.8, 14, 88, 38, 100), hb(11, 16, 0.3, 1.25, 0.55, 12, 85, 38, 100)],
    onFrame(ft, f) {
      if (f >= 11 && f <= 16) ft.battle.effects.sparkle(ft.x, ft.y + 1.2 + (f - 11) * 0.3, f % 2 ? 0xff9cf0 : 0xfff0b0, 2, 0.4);
    },
    anim: [[0, NI], [4, { by: -0.3, torso: [0.35, 0, 0], armR: [0.5, 0, -0.3], armL: [0.5, 0, 0.3], legR: [-0.7, 0, -0.1], shinR: [1.3, 0, 0], legL: [-0.7, 0, 0.1], shinL: [1.3, 0, 0], earR: [0.6, 0, 0], earL: [0.6, 0, 0] }], [11, { by: 0.12, torso: [-0.25, 0, 0], head: [-0.4, 0, 0], armR: [-3.0, 0, -0.15], foreR: [0, 0, 0], armL: [-3.0, 0, 0.15], foreL: [0, 0, 0], legR: [0.1, 0, -0.05], legL: [0.1, 0, 0.05], earR: [-0.9, 0, 0], earL: [-0.9, 0, 0], flare: 0.35 }], [22, { by: 0.08, torso: [-0.2, 0, 0], armR: [-2.9, 0, -0.2], armL: [-2.9, 0, 0.2], earR: [-0.7, 0, 0], earL: [-0.7, 0, 0] }], [46, NI]],
  },
  dsmash: {
    total: 44, smash: true, charge: { f: 5, max: 60 }, alpha: 0.85, sfx: [8, 'whoosh', 0.8],
    hit: [hb(9, 11, 1.1, 0.35, 0.55, 12, 32, 34, 96, { away: true }), hb(9, 11, -1.1, 0.35, 0.55, 12, 32, 34, 96, { away: true }), hb(12, 13, 0.6, 0.35, 0.5, 10, 32, 30, 90, { away: true }), hb(12, 13, -0.6, 0.35, 0.5, 10, 32, 30, 90, { away: true })],
    onFrame(ft, f) { if (f === 9) ft.battle.effects.ring(ft.x, ft.y + 0.3, 0xb45cff, 3, 16); },
    anim: (() => {
      const DS1 = { by: -0.28, torso: [0.3, 0, 0], armR: [0.2, 0, -1.2], armL: [0.2, 0, 1.2], legR: [-0.8, 0, -0.3], shinR: [1.4, 0, 0], legL: [-0.8, 0, 0.3], shinL: [1.4, 0, 0], flare: 0.3 };
      const DS2 = { ...DS1, armR: [0, 0, -1.5], armL: [0, 0, 1.5], flare: 1.1 };
      return [[0, NI], [5, DS1], [9, { ...DS2, body: [0, 0, 0] }], [13, { ...DS2, body: [0, Math.PI * 2, 0] }], [22, { ...DS1, body: [0, Math.PI * 2, 0], flare: 0.6 }], [44, { ...NI, body: [0, Math.PI * 2, 0] }]];
    })(),
  },
  // ---------- 空中攻撃 ----------
  nair: {
    total: 36, aerial: true, landLag: 7, acBefore: 3, acAfter: 26, alpha: 0.85, sfx: [4, 'whoosh', 0.5],
    hit: [hb(4, 7, 0, 0.85, 1.0, 9, 45, 28, 88, { away: true }), hb(8, 18, 0, 0.85, 0.95, 5, 45, 20, 70, { away: true })],
    anim: (() => {
      const NA = { armR: [0, 0, -1.4], armL: [0, 0, 1.4], legR: [-0.5, 0, -0.3], shinR: [0.8, 0, 0], legL: [-0.5, 0, 0.3], shinL: [0.8, 0, 0], flare: 1.0 };
      return [[0, AIR], [3, { ...NA, body: [0, 0, 0] }], [11, { ...NA, body: [0, Math.PI * 2, 0] }], [18, { ...NA, body: [0, Math.PI * 4, 0], flare: 0.7 }], [36, { ...AIR, body: [0, Math.PI * 4, 0] }]];
    })(),
  },
  fair: {
    total: 34, aerial: true, landLag: 10, acBefore: 4, acAfter: 24, trail: 'handR', trailF: [7, 12], sfx: [7, 'whoosh', 0.6],
    hit: [hb(8, 11, 0, 0, 0.62, 11, 40, 30, 96, { path: [[0.9, 1.75], [1.15, 0.45]] })],
    anim: [[0, AIR], [5, { ...TUCK, armR: [-2.9, 0, -0.3], foreR: [-0.2, 0, 0], torso: [-0.3, 0.35, 0], armL: [0.3, 0, 0.8] }], [8, { ...TUCK, armR: [-2.7, 0, -0.3], torso: [-0.3, 0.35, 0], armL: [0.3, 0, 0.8] }], [11, { legR: [-0.8, 0, 0], shinR: [1.2, 0, 0], legL: [0.3, 0, 0], shinL: [0.8, 0, 0], armR: [-0.5, 0, -0.1], foreR: [0, 0, 0], torso: [0.45, 0.35, 0], armL: [0.5, 0, 0.8] }], [20, { legR: [-0.7, 0, 0], shinR: [1.1, 0, 0], armR: [-0.6, 0, -0.1], torso: [0.4, 0.3, 0], armL: [0.5, 0, 0.8] }], [34, AIR]],
  },
  bair: {
    total: 36, aerial: true, landLag: 11, acBefore: 4, acAfter: 26, trail: 'footL', trailF: [6, 11], sfx: [6, 'whoosh', 0.6],
    hit: [hb(7, 9, -1.05, 0.85, 0.62, 13, 145, 32, 100), hb(10, 14, -0.9, 0.85, 0.5, 8, 145, 20, 80)],
    anim: [[0, AIR], [5, { legL: [-0.6, 0, 0.1], shinL: [1.6, 0, 0], legR: [-0.6, 0, -0.1], shinR: [1.3, 0, 0], torso: [0.2, -0.3, 0], head: [0.2, -0.4, 0], armR: [-0.4, 0, -0.8], armL: [-0.4, 0, 0.8] }], [8, { legL: [1.45, 0, 0.05], shinL: [0.05, 0, 0], legR: [-0.8, 0, -0.1], shinR: [1.3, 0, 0], torso: [0.45, -0.35, 0], head: [-0.1, -0.6, 0], armR: [-0.8, 0, -0.6], armL: [-0.8, 0, 0.6] }], [16, { legL: [1.3, 0, 0.05], shinL: [0.2, 0, 0], legR: [-0.7, 0, -0.1], shinR: [1.2, 0, 0], torso: [0.4, -0.3, 0], armR: [-0.7, 0, -0.6], armL: [-0.7, 0, 0.6] }], [36, AIR]],
  },
  uair: {
    total: 30, aerial: true, landLag: 8, acBefore: 3, acAfter: 22, trail: 'handR', trailF: [5, 11], sfx: [5, 'whoosh', 0.5],
    hit: [hb(6, 10, 0, 0, 0.6, 9, 85, 32, 96, { path: [[0.75, 1.75], [-0.7, 1.85]] }), hb(6, 10, 0, 0, 0.55, 9, 85, 32, 96, { path: [[0.45, 2.35], [-0.45, 2.35]] })],
    anim: [[0, AIR], [4, { ...TUCK, torso: [0.3, 0, 0], armR: [0.4, 0, -0.5], armL: [0.4, 0, 0.5], earR: [0.8, 0, 0], earL: [0.8, 0, 0] }], [8, { ...TUCK, body: [-0.4, 0, 0], torso: [-0.3, 0, 0], head: [-0.5, 0, 0], armR: [-3.0, 0, -0.2], foreR: [0, 0, 0], armL: [-3.0, 0, 0.2], foreL: [0, 0, 0], earR: [-1.3, 0, 0], earL: [-1.3, 0, 0] }], [16, { ...TUCK, body: [-0.3, 0, 0], armR: [-2.8, 0, -0.3], armL: [-2.8, 0, 0.3], earR: [-1, 0, 0], earL: [-1, 0, 0] }], [30, AIR]],
  },
  dair: {
    total: 44, aerial: true, landLag: 16, acBefore: 3, acAfter: 34, trail: 'footR', trailF: [11, 16], sfx: [11, 'whoosh', 0.7],
    hit: [hb(12, 15, 0.05, -0.1, 0.55, 12, 270, 28, 82), hb(16, 22, 0, 0.05, 0.5, 7, 60, 20, 70)],
    onFrame(ft, f) { if (f < 11) ft.gravMult = 0.35; },
    anim: [[0, AIR], [8, { legR: [-1.4, 0, -0.1], shinR: [2.0, 0, 0], legL: [-1.4, 0, 0.1], shinL: [2.0, 0, 0], armR: [-2.6, 0, -0.4], armL: [-2.6, 0, 0.4], torso: [-0.1, 0, 0], by: 0.15 }], [12, { legR: [0.15, 0, -0.03], shinR: [0, 0, 0], legL: [0.15, 0, 0.03], shinL: [0, 0, 0], armR: [-2.8, 0, -0.6], armL: [-2.8, 0, 0.6], torso: [-0.2, 0, 0], by: -0.1, flare: 0.5 }], [22, { legR: [0.1, 0, -0.03], legL: [0.1, 0, 0.03], armR: [-2.7, 0, -0.6], armL: [-2.7, 0, 0.6], flare: 0.4 }], [44, AIR]],
  },
  // ---------- 必殺ワザ ----------
  neutralb: {
    // アンブラオーブ: ためて撃つ闇の球
    total: 34, charge: { f: 8, max: 70 }, fall: 0.5, landContinue: true,
    onCharge(ft) {
      const c = ft.charge / 70;
      const p = ft.model.orbPoint.getWorldPosition(ft.battle.tmpV);
      ft.battle.effects.spawn({ x: p.x, y: p.y, z: p.z, life: 2, size: 0.35 + c * 0.7, color: 0xd070ff });
      ft.battle.effects.spawn({ x: p.x, y: p.y, z: p.z + 0.01, life: 2, size: 0.15 + c * 0.35, color: 0xffffff });
    },
    onFrame(ft, f) {
      if (f === 10) {
        const c = ft.charge / 70;
        ft.battle.spawnProjectile(ft, {
          x: ft.x + ft.facing * 0.75, y: ft.y + 1.05, vx: ft.facing * (0.2 + 0.08 * c), vy: 0,
          r: 0.28 + 0.3 * c, dmg: 5 + 11 * c, ang: 40, bkb: 22 + 28 * c, kbg: 62, life: 80, color: 0xc060ff, core: 0xffd0ff, kind: 'orb',
        });
        audio.orb();
      }
    },
    anim: [[0, NI], [6, { armR: [-1.2, 0, 0.1], foreR: [-0.5, 0, 0], armL: [-1.2, 0, -0.1], foreL: [-0.5, 0, 0], torso: [0.15, 0.1, 0], legR: [-0.3, 0, -0.1], legL: [0.3, 0, 0.1], shinL: [0.3, 0, 0] }], [10, { armR: [-1.6, 0, -0.15], foreR: [0, 0, 0], armL: [-1.6, 0, 0.15], foreL: [0, 0, 0], torso: [0.25, 0, 0], bz: 0.1, legR: [-0.3, 0, -0.1], legL: [0.3, 0, 0.1], flare: 0.3 }], [20, { armR: [-1.5, 0, -0.15], armL: [-1.5, 0, 0.15], torso: [0.2, 0, 0] }], [34, NI]],
  },
  sideb: {
    // ウィスプダッシュ: 高速の突進
    total: 40, keepVel: true, noDrift: true, noGravity: [0, 22], canLeaveGround: true, ledgeGrab: 8, landContinue: true, trail: 'handR', trailF: [7, 20],
    hit: [hb(7, 18, 0.5, 0.85, 0.62, 9, 42, 50, 62)],
    onStart(ft) { if (!ft.grounded) ft.sideBUsed = true; ft.vy = 0; },
    onFrame(ft, f) {
      if (f < 7) { ft.vx = approach(ft.vx, 0, 0.02); if (!ft.grounded) ft.vy = 0.005; }
      else if (f <= 20) {
        ft.vx = ft.facing * 0.34; ft.vy = 0;
        if (f === 7) audio.whoosh(0.9);
        ft.battle.effects.sparkle(ft.x - ft.facing * 0.4, ft.y + 0.8, f % 2 ? 0xff9cf0 : 0xfff0b0, 1, 0.3);
      } else ft.vx *= 0.86;
    },
    anim: [[0, NI], [4, { body: [-0.3, 0, 0], armR: [0.6, 0, -0.4], armL: [0.6, 0, 0.4], legR: [-0.8, 0, 0], shinR: [1.3, 0, 0], legL: [-0.6, 0, 0], shinL: [1.2, 0, 0] }], [7, { body: [1.25, 0, 0], armR: [-2.9, 0, -0.15], foreR: [0, 0, 0], armL: [-2.9, 0, 0.15], foreL: [0, 0, 0], legR: [0.2, 0, -0.05], legL: [0.2, 0, 0.05], flare: 0.2, head: [-0.9, 0, 0] }], [20, { body: [1.2, 0, 0], armR: [-2.9, 0, -0.15], armL: [-2.9, 0, 0.15], legR: [0.2, 0, -0.05], legL: [0.2, 0, 0.05], head: [-0.9, 0, 0] }], [32, AIR]],
  },
  upb: {
    // ムーンワープ: 好きな方向へ瞬間移動（その後しりもち落下）
    total: 38, helpless: true, helplessLag: 22, intang: [6, 16], noGravity: [0, 24], noDrift: true, keepVel: true, ledgeGrab: 16,
    hit: [hb(16, 17, 0, 0.9, 0.95, 7, 80, 55, 60, { away: true })],
    onStart(ft) { ft.upBUsed = true; ft.vx *= 0.3; ft.vy = 0; },
    onFrame(ft, f) {
      const e = ft.battle.effects;
      if (f < 6) { ft.vx *= 0.8; ft.vy = 0.01; }
      if (f === 6) {
        const { x, y } = ft.input.stick;
        let m = Math.hypot(x, y);
        let dx = 0, dy = 1;
        if (m > 0.3) { dx = x / m; dy = y / m; }
        if (ft.grounded && dy < 0) { dy = 0; dx = dx ? sign(dx) : ft.facing; }
        ft.vars.dir = [dx, dy];
        if (Math.abs(dx) > 0.2) ft.facing = sign(dx);
        ft.hidden = true;
        audio.warp();
        e.ring(ft.x, ft.y + 0.9, 0xd070ff, 2.2, 14);
        e.sparkle(ft.x, ft.y + 0.9, 0xff9cf0, 8, 0.6);
      }
      if (f >= 7 && f <= 14) {
        const [dx, dy] = ft.vars.dir;
        ft.vx = dx * 0.7; ft.vy = dy * 0.7;
        if (dy > 0.1 && ft.grounded) { ft.grounded = false; ft.surface = null; ft.y += 0.02; }
        ft.hidden = true;
        e.spawn({ x: ft.x, y: ft.y + 0.9, life: 14, size: 0.7, size1: 0.1, color: 0xb45cff });
      }
      if (f === 15) {
        const [dx] = ft.vars.dir;
        ft.vx = dx * 0.06; ft.vy = 0.02;
        ft.hidden = false;
        e.ring(ft.x, ft.y + 0.9, 0xff9cf0, 2.4, 14);
        e.sparkle(ft.x, ft.y + 0.9, 0xfff0b0, 8, 0.7);
      }
      if (f > 15) ft.vx *= 0.95;
    },
    anim: [[0, NI], [5, { armR: [-1.2, 0, 0.6], foreR: [-1.5, 0, 0], armL: [-1.2, 0, -0.6], foreL: [-1.5, 0, 0], legR: [-0.6, 0, 0], shinR: [1.2, 0, 0], legL: [-0.6, 0, 0], shinL: [1.2, 0, 0], body: [0, 0, 0] }], [14, { armR: [-1.2, 0, 0.6], armL: [-1.2, 0, -0.6], body: [0, 0, 0] }], [16, { armR: [-0.5, 0, -1.3], armL: [-0.5, 0, 1.3], foreR: [0, 0, 0], foreL: [0, 0, 0], flare: 0.9, body: [0, 0, 0] }], [38, AIR]],
  },
  downb: {
    // エクリプスヴェール: 飛び道具を反射するベール
    total: 32, reflect: [3, 22], fall: 0.35, landContinue: true, alpha: 0.7,
    hit: [hb(3, 4, 0, 0.85, 1.0, 5, 80, 55, 35, { away: true })],
    onStart(ft) { if (!ft.grounded) ft.vy = Math.max(ft.vy, 0); },
    onFrame(ft, f) {
      if (f >= 3 && f <= 22 && f % 3 === 0) ft.battle.effects.ring(ft.x, ft.y + 0.9, 0x9fe8ff, 2.3, 10);
      if (f === 3) audio.reflect();
    },
    anim: [[0, NI], [3, { armR: [0, 0, -1.6], armL: [0, 0, 1.6], foreR: [0, 0, 0], foreL: [0, 0, 0], flare: 0.9, head: [-0.2, 0, 0], torso: [-0.1, 0, 0] }], [22, { armR: [0, 0, -1.5], armL: [0, 0, 1.5], flare: 0.7 }], [32, NI]],
  },
  // ---------- 最後の切りふだ ----------
  final: {
    // エターナル・エクリプス: 巨大な闇の月で閉じ込め、連続ダメージのあと大爆発
    total: 150, fs: true, intang: [0, 150], noGravity: [0, 150], noDrift: true, keepVel: true, alpha: 0.35,
    onStart(ft) {
      ft.vx = 0; ft.vy = 0;
      ft.battle.startCine(ft, 48);
    },
    onFrame(ft, f) {
      const b = ft.battle, e = b.effects;
      ft.vx = 0;
      if (f < 48) {
        ft.vy = f < 30 ? 0.03 : 0;
        if (ft.grounded) { ft.grounded = false; ft.surface = null; ft.y += 0.03; }
        if (f % 2 === 0) e.sparkle(ft.x, ft.y + 0.9, f % 4 ? 0xd070ff : 0xfff0b0, 2, 1.2);
      } else ft.vy = 0;
      const cx = ft.x, cy = ft.y + 0.9;
      if (f === 48) { ft.vars.sphere = b.addFx(new EclipseSphere(b, cx, cy)); audio.warp(); b.shakeCam(0.3); }
      const sp = ft.vars.sphere;
      if (sp) {
        if (f >= 48 && f <= 66) { const r = 0.5 + (f - 48) / 18 * 6; sp.setRadius(r); b.fsTrap(ft, cx, cy, r); }
        if (f > 66 && f < 130 && f % 7 === 0) { b.fsDamage(ft, 3); e.ring(cx, cy, 0xff9cf0, 5, 12); }
        if (f === 130) {
          b.fsLaunch(ft, { dmg: 10, ang: 55, bkb: 110, kbg: 105 });
          e.koBlast(cx, cy, 0xd070ff);
          e.ring(cx, cy, 0xffffff, 12, 30);
          b.shakeCam(0.7);
          audio.fsBoom();
        }
        if (f > 130) sp.setRadius(Math.max(0.01, sp.mesh.scale.x * 0.7));
        if (f === 140) { b.removeFx(sp); ft.vars.sphere = null; }
      }
    },
    onEnd(ft) { if (ft.vars.sphere) { ft.battle.removeFx(ft.vars.sphere); ft.vars.sphere = null; } ft.battle.fsRelease(ft); },
    anim: [[0, NI], [20, { body: [-0.2, 0, 0], armR: [-2.8, 0, -0.5], armL: [-2.8, 0, 0.5], foreR: [0, 0, 0], foreL: [0, 0, 0], legR: [0.1, 0, -0.05], legL: [0.1, 0, 0.05], head: [-0.4, 0, 0], earR: [-0.6, 0, 0], earL: [-0.6, 0, 0], flare: 1.2 }], [48, { armR: [0, 0, -1.6], armL: [0, 0, 1.6], foreR: [0, 0, 0], foreL: [0, 0, 0], legR: [-0.3, 0, -0.1], legL: [-0.3, 0, 0.1], shinR: [0.5, 0, 0], shinL: [0.5, 0, 0], head: [-0.2, 0, 0], flare: 1.4 }], [130, { armR: [0, 0, -1.5], armL: [0, 0, 1.5], flare: 1.3 }], [150, AIR]],
  },
  // ---------- つかみ・投げ ----------
  grab: {
    total: 30,
    hit: [hb(6, 7, 0.75, 1.0, 0.45, 0, 0, 0, 0, { type: 'grab' })],
    anim: [[0, NI], [6, { armR: [-1.5, 0, 0.1], foreR: [0, 0, 0], armL: [-1.5, 0, -0.1], foreL: [0, 0, 0], torso: [0.25, 0, 0], bz: 0.1 }], [14, { armR: [-1.4, 0, 0.1], armL: [-1.4, 0, -0.1], torso: [0.2, 0, 0] }], [30, NI]],
  },
  dashgrab: {
    total: 36, keepVel: true,
    hit: [hb(8, 9, 0.95, 1.0, 0.5, 0, 0, 0, 0, { type: 'grab' })],
    onFrame(ft) { ft.friction(1.2); },
    anim: [[0, NI], [8, { armR: [-1.5, 0, 0.1], foreR: [0, 0, 0], armL: [-1.5, 0, -0.1], foreL: [0, 0, 0], torso: [0.35, 0, 0], bz: 0.15 }], [20, { armR: [-1.4, 0, 0.1], armL: [-1.4, 0, -0.1], torso: [0.3, 0, 0] }], [36, NI]],
  },
  pummel: {
    total: 16, pummelAt: 5, pummelDmg: 1.5,
    anim: [[0, { armR: [-1.35, 0, 0.05], armL: [-1.35, 0, -0.05], torso: [0.15, 0, 0] }], [5, { armR: [-1.35, 0, 0.05], armL: [-1.35, 0, -0.05], torso: [0.3, 0, 0], head: [0.4, 0, 0], earR: [1.0, 0, 0], earL: [1.0, 0, 0] }], [16, { armR: [-1.35, 0, 0.05], armL: [-1.35, 0, -0.05], torso: [0.15, 0, 0] }]],
  },
  fthrow: {
    total: 30, throwAt: 10, throwHit: { dmg: 8, ang: 40, bkb: 65, kbg: 65 },
    hold: (f) => [0.75 + Math.max(0, f - 6) * 0.08, 0.15],
    anim: [[0, { armR: [-1.35, 0, 0.05], armL: [-1.35, 0, -0.05] }], [6, { armR: [-0.8, 0, 0.1], foreR: [-1.4, 0, 0], armL: [-0.8, 0, -0.1], foreL: [-1.4, 0, 0], torso: [-0.1, 0, 0] }], [10, { armR: [-1.6, 0, -0.1], foreR: [0, 0, 0], armL: [-1.6, 0, 0.1], foreL: [0, 0, 0], torso: [0.3, 0, 0], bz: 0.15, flare: 0.4 }], [30, NI]],
  },
  bthrow: {
    total: 34, throwAt: 14, throwHit: { dmg: 10, ang: 140, bkb: 55, kbg: 85 },
    hold: (f) => { const t = Math.min(1, f / 14); return [0.8 * Math.cos(Math.PI * t), 0.25 + 0.6 * Math.sin(Math.PI * t)]; },
    anim: [[0, { armR: [-1.35, 0, 0.05], armL: [-1.35, 0, -0.05] }], [14, { body: [0, Math.PI, 0], armR: [-2.2, 0, -0.3], armL: [-2.2, 0, 0.3], flare: 0.8 }], [22, { body: [0, Math.PI * 2, 0], armR: [-1.4, 0, -0.3], armL: [-1.4, 0, 0.3] }], [34, { ...NI, body: [0, Math.PI * 2, 0] }]],
  },
  uthrow: {
    total: 36, throwAt: 12, throwHit: { dmg: 8, ang: 90, bkb: 75, kbg: 72 },
    hold: (f) => [0.5 - f * 0.03, 0.2 + f * 0.13],
    anim: [[0, { armR: [-1.35, 0, 0.05], armL: [-1.35, 0, -0.05] }], [12, { armR: [-3.0, 0, -0.1], foreR: [0, 0, 0], armL: [-3.0, 0, 0.1], foreL: [0, 0, 0], by: 0.1, earR: [-1, 0, 0], earL: [-1, 0, 0] }], [36, NI]],
  },
  dthrow: {
    total: 36, throwAt: 14, throwHit: { dmg: 6, ang: 75, bkb: 55, kbg: 45 },
    hold: (f) => [0.75, Math.max(0, 0.15 - f * 0.02)],
    onFrame(ft, f) { if (f === 14) ft.battle.effects.dust(ft.x + ft.facing * 0.7, ft.y, 6, 0); },
    anim: [[0, { armR: [-1.35, 0, 0.05], armL: [-1.35, 0, -0.05] }], [8, { by: 0.2, legR: [-1.2, 0, -0.1], shinR: [1.6, 0, 0], armR: [-2.5, 0, -0.5], armL: [-2.5, 0, 0.5] }], [14, { by: -0.1, legR: [-0.6, 0, -0.1], shinR: [0.2, 0, 0], torso: [0.3, 0, 0], armR: [-0.5, 0, -0.8], armL: [-0.5, 0, 0.8] }], [36, NI]],
  },
  // ---------- その他 ----------
  getupattack: {
    total: 30, intang: [0, 9], alpha: 0.8,
    hit: [hb(8, 10, 1.0, 0.4, 0.6, 7, 40, 60, 50, { away: true }), hb(8, 10, -1.0, 0.4, 0.6, 7, 40, 60, 50, { away: true })],
    anim: [[0, { by: -0.5, torso: [0.4, 0, 0] }], [8, { by: -0.3, body: [0, 0, 0], legR: [-1.4, 0, -0.5], armR: [0, 0, -1.4], armL: [0, 0, 1.4], flare: 1.0 }], [14, { by: -0.3, body: [0, Math.PI * 2, 0], legR: [-1.4, 0, -0.5], flare: 0.8 }], [30, { ...NI, body: [0, Math.PI * 2, 0] }]],
  },
  ledgeattack: {
    total: 34, intang: [0, 10], trail: 'footR', trailF: [8, 14],
    hit: [hb(10, 13, 1.0, 0.5, 0.65, 8, 40, 60, 50)],
    anim: [[0, { by: -0.3, torso: [0.5, 0, 0] }], [10, { legR: [-1.55, 0, -0.1], shinR: [0.1, 0, 0], torso: [-0.3, 0.2, 0], armR: [0.4, 0, -1.1], armL: [0.3, 0, 1.1] }], [18, { legR: [-1.4, 0, -0.1], torso: [-0.2, 0, 0] }], [34, NI]],
  },
};

export const ILLUMINE = {
  id: 'illumine',
  name: 'イルミネ',
  en: 'ILLUMINE',
  title: '宵闇の蛾姫',
  color: 0xc56bff,
  css: '#c56bff',
  desc: '光る裏地の衣をまとい、空中ジャンプ2回とワープで自在に舞う軽量級の魔法ファイター。',
  specials: ['アンブラオーブ（ため撃ち）', 'ウィスプダッシュ（突進）', 'ムーンワープ（瞬間移動）', 'エクリプスヴェール（反射）'],
  stats: {
    weight: 82, height: 1.75, radius: 0.36,
    walkSpeed: 0.085, dashSpeed: 0.175, dashFrames: 10, runSpeed: 0.16, traction: 0.009,
    airSpeed: 0.105, airAccel: 0.009, airFriction: 0.0025,
    gravity: 0.0078, fallSpeed: 0.145, fastFall: 0.23,
    jumpV: 0.216, hopV: 0.136, djV: 0.2, airJumps: 2, jumpsquat: 3, rollSpeed: 0.14,
  },
  grabHold: [0.75, 0.15],
  buildModel: buildIllumine,
  anims: makeAnims({
    idle: NI, hipY: ILLUMINE_HIP, bob: 1.6,
    runExtra: (ph) => ({ armR: [0.9, 0, -0.35], armL: [0.9, 0, 0.35], foreR: [-0.3, 0, 0], foreL: [-0.3, 0, 0], torso: [0.45, 0, 0], flare: 0.25 }),
    override: {
      victory: (f) => {
        const t = f * 0.05;
        return { body: [0, Math.min(1, f / 40) * Math.PI * 2, 0], armR: [-2.6, 0, -0.6 + Math.sin(t) * 0.1], armL: [0.2, 0, 0.5], foreR: [-0.3, 0, 0], legR: [-0.2, 0, -0.1], legL: [0.3, 0, 0.2], shinL: [0.8, 0, 0], torso: [-0.1, 0, 0.1], head: [-0.2, 0, 0.15], flare: 0.3 + Math.sin(t * 2) * 0.1, by: 0.12 + Math.sin(t) * 0.05 };
      },
    },
  }),
  moves,
};
