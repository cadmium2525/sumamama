// ハム: 太い腕で殴り合う近接格闘うさぎ。必殺ワザはおなら。ガスに当たった相手は短い時間ふらふらになる。
import { buildHamu, HAMU_HIP } from '../models/hamuModel.js';
import { makeAnims } from './anims.js';
import { approach, rand } from '../util.js';
import { audio } from '../audio.js';

const hb = (f0, f1, x, y, r, dmg, ang, bkb, kbg, extra = {}) => ({ f: [f0, f1], x, y, r, dmg, ang, bkb, kbg, ...extra });

const GAS = 0xb4c64a, GAS2 = 0xe8ea90;
const PI = Math.PI;

// 待機: 腕を左右に張って構える
const HI = { legR: [-0.3, 0, -0.14], shinR: [0.5, 0, 0], legL: [-0.2, 0, 0.14], shinL: [0.4, 0, 0], by: -0.015, torso: [0.06, 0, 0], head: [-0.04, 0, 0], armR: [-0.12, 0, -0.62], foreR: [-0.3, 0, 0.1], armL: [-0.12, 0, 0.62], foreL: [-0.3, 0, -0.1] };
const AIR = { legR: [-0.7, 0, -0.14], shinR: [0.9, 0, 0], legL: [-0.2, 0, 0.14], shinL: [0.6, 0, 0], armR: [-0.4, 0, -0.9], foreR: [-0.7, 0, 0], armL: [-0.4, 0, 0.9], foreL: [-0.7, 0, 0], torso: [0.1, 0, 0], earR: [-0.3, 0, 0], earL: [-0.3, 0, 0] };
const TUCK = { legR: [-1.2, 0, -0.14], shinR: [1.5, 0, 0], legL: [-1.0, 0, 0.14], shinL: [1.4, 0, 0] };
// 右・左のパンチ（腰を入れて突き出す）
const PUNCH_R = { ...HI, armR: [-1.5, 0, -0.05], foreR: [-0.05, 0, 0], torso: [0.14, 0.5, 0], armL: [0.2, 0, 0.5], foreL: [-1.5, 0, 0], bz: 0.1 };
const PUNCH_L = { ...HI, armL: [-1.5, 0, 0.05], foreL: [-0.05, 0, 0], torso: [0.14, -0.5, 0], armR: [0.2, 0, -0.5], foreR: [-1.5, 0, 0], bz: 0.1 };
const WIND_R = { ...HI, armR: [0.5, 0, -0.6], foreR: [-1.7, 0, 0], torso: [0, -0.5, 0], armL: [-0.6, 0, 0.4], foreL: [-1.2, 0, 0] };
// おしりを相手へ向けて突き出す
const BUTT = { ...HI, body: [0, PI, 0], torso: [0.7, 0, 0], head: [-0.5, 0.5, 0], by: -0.04, legR: [-0.75, 0, -0.2], shinR: [0.9, 0, 0], legL: [-0.75, 0, 0.2], shinL: [0.9, 0, 0], armR: [-0.4, 0, -0.9], armL: [-0.4, 0, 0.9], earR: [0.4, 0, 0], earL: [0.4, 0, 0] };
const SIT = { legR: [-1.5, 0, -0.25], shinR: [0.25, 0, 0], legL: [-1.5, 0, 0.25], shinL: [0.25, 0, 0], torso: [-0.2, 0, 0], armR: [-2.4, 0, -0.6], armL: [-2.4, 0, 0.6], foreR: [-0.3, 0, 0], foreL: [-0.3, 0, 0], head: [-0.2, 0, 0], earR: [-0.6, 0, 0], earL: [-0.6, 0, 0] };

// ガスの弾。地上の相手に当たると stun フレームのあいだふらふらにする（空中の相手は軽くふっとぶだけ）
function gas(ft, o) {
  ft.battle.spawnProjectile(ft, { vy: 0, r: 0.4, rMax: 0.8, dmg: 4, ang: 70, bkb: 28, kbg: 30, life: 50, stun: 75, color: GAS, core: GAS2, kind: 'gas', ...o });
}
function puff(ft, x, y, n = 4, size = 0.6, vx = 0) {
  for (let i = 0; i < n; i++) ft.battle.effects.spawn({ x: x + rand(-0.2, 0.2), y: y + rand(-0.2, 0.2), z: 0.35, vx: vx + rand(-0.03, 0.03), vy: rand(0, 0.03), life: rand(16, 28), size: rand(size * 0.5, size), size1: size * 1.5, color: i % 2 ? GAS : GAS2, additive: false, opacity: 0.5, drag: 0.93 });
}
const butt = (ft) => ft.model.butt.getWorldPosition(ft.battle.tmpV);

const moves = {
  // ---------- 弱・強 ----------
  jab1: {
    total: 16, next: 'jab2', nextWin: [5, 15], trail: 'handR', trailF: [2, 5], sfx: [2, 'whoosh', 0.3],
    hit: [hb(3, 4, 0.85, 0.95, 0.4, 2.5, 80, 12, 15), hb(3, 4, 0.4, 0.95, 0.35, 2.5, 80, 12, 15)],
    anim: [[0, HI], [3, PUNCH_R], [9, { ...PUNCH_R, armR: [-1.4, 0, -0.05] }], [16, HI]],
  },
  jab2: {
    total: 18, next: 'jab3', nextWin: [5, 17], trail: 'handL', trailF: [2, 5], sfx: [2, 'whoosh', 0.3],
    hit: [hb(3, 4, 0.9, 0.95, 0.4, 2.5, 78, 12, 15), hb(3, 4, 0.45, 0.95, 0.35, 2.5, 78, 12, 15)],
    anim: [[0, PUNCH_R], [3, PUNCH_L], [10, { ...PUNCH_L, armL: [-1.4, 0, 0.05] }], [18, HI]],
  },
  jab3: {
    // 突き上げ
    total: 28, trail: 'handR', trailF: [4, 9], sfx: [4, 'whoosh', 0.6],
    hit: [hb(5, 8, 0.8, 1.2, 0.5, 5, 55, 45, 85), hb(5, 8, 0.4, 0.8, 0.4, 5, 55, 45, 85)],
    anim: [[0, PUNCH_L], [4, { ...HI, by: -0.05, armR: [-0.3, 0, -0.3], foreR: [-1.6, 0, 0], torso: [0.3, -0.3, 0], legR: [-0.7, 0, -0.14], shinR: [1.0, 0, 0] }], [7, { ...HI, by: 0.04, armR: [-2.5, 0, -0.1], foreR: [-0.6, 0, 0], torso: [-0.15, 0.5, 0], head: [-0.2, 0, 0], legR: [-0.1, 0, -0.14], shinR: [0.1, 0, 0], legL: [0, 0, 0.14], shinL: [0.1, 0, 0] }], [16, { ...HI, armR: [-2.4, 0, -0.1], foreR: [-0.7, 0, 0], torso: [-0.1, 0.45, 0] }], [28, HI]],
  },
  ftilt: {
    // フック
    total: 28, trail: 'handR', trailF: [5, 10], sfx: [6, 'whoosh', 0.6],
    hit: [hb(7, 9, 1.0, 0.95, 0.46, 9, 38, 32, 96), hb(7, 9, 0.5, 0.95, 0.4, 8, 38, 30, 94)],
    anim: [[0, HI], [5, { ...WIND_R, armR: [-0.9, 0, -1.3], foreR: [-1.0, 0, 0] }], [8, { ...HI, armR: [-1.45, 0, 0.35], foreR: [-0.5, 0, 0], torso: [0.15, 0.75, 0], armL: [0.2, 0, 0.5], foreL: [-1.4, 0, 0], bz: 0.14, legL: [-0.5, 0, 0.14] }], [16, { ...HI, armR: [-1.4, 0, 0.3], foreR: [-0.6, 0, 0], torso: [0.12, 0.65, 0], bz: 0.1 }], [28, HI]],
  },
  utilt: {
    // 頭突き（耳を振り上げる）
    total: 26, sfx: [4, 'whoosh', 0.5],
    hit: [hb(5, 10, 0, 0, 0.5, 7, 92, 36, 88, { path: [[0.65, 1.5], [-0.3, 2.0]] }), hb(5, 8, 0.3, 1.2, 0.45, 7, 92, 36, 88)],
    anim: [[0, HI], [4, { ...HI, by: -0.05, torso: [0.5, 0, 0], head: [0.4, 0, 0], earR: [0.9, 0, 0], earL: [0.9, 0, 0], legR: [-0.7, 0, -0.14], shinR: [1.0, 0, 0], legL: [-0.6, 0, 0.14], shinL: [0.9, 0, 0] }], [8, { ...HI, by: 0.05, torso: [-0.3, 0, 0], head: [-0.6, 0, 0], earR: [-0.7, 0, 0], earL: [-0.7, 0, 0], legR: [-0.05, 0, -0.14], shinR: [0.1, 0, 0], legL: [0, 0, 0.14], shinL: [0.1, 0, 0] }], [15, { ...HI, torso: [-0.25, 0, 0], head: [-0.5, 0, 0], earR: [-0.6, 0, 0], earL: [-0.6, 0, 0] }], [26, HI]],
  },
  dtilt: {
    // 足払い
    total: 22, trail: 'footR', trailF: [4, 8], sfx: [4, 'whoosh', 0.4],
    hit: [hb(5, 7, 0.85, 0.18, 0.4, 6, 75, 32, 55), hb(5, 7, 0.45, 0.2, 0.35, 6, 75, 32, 55)],
    anim: [[0, { ...HI, by: -0.08, torso: [0.4, 0, 0], legR: [-1.2, 0, -0.2], shinR: [1.9, 0, 0], legL: [-1.2, 0, 0.2], shinL: [1.9, 0, 0] }], [5, { ...HI, by: -0.1, torso: [-0.1, 0.3, 0], legR: [-1.45, 0, -0.05], shinR: [0.1, 0, 0], legL: [-1.2, 0, 0.2], shinL: [2.0, 0, 0], armR: [0.4, 0, -0.8], armL: [0.4, 0, 0.8] }], [12, { ...HI, by: -0.1, torso: [-0.05, 0.25, 0], legR: [-1.4, 0, -0.05], shinR: [0.2, 0, 0], legL: [-1.2, 0, 0.2], shinL: [2.0, 0, 0] }], [22, HI]],
  },
  dashattack: {
    // 腹から滑り込む
    total: 38, keepVel: true, sfx: [5, 'whoosh', 0.7],
    hit: [hb(6, 13, 0.55, 0.5, 0.62, 10, 50, 55, 72), hb(14, 20, 0.5, 0.45, 0.5, 6, 60, 40, 50)],
    onStart(ft) { ft.vx = ft.facing * 0.22; },
    onFrame(ft, f) {
      if (f <= 16) ft.vx = approach(ft.vx, ft.facing * 0.17, 0.01); else ft.friction(2.4);
      if (f % 4 === 0 && f < 20) ft.battle.effects.dust(ft.x, ft.y, 1, -ft.facing);
    },
    anim: [[0, HI], [5, { body: [0.9, 0, 0], by: -0.1, torso: [0.1, 0, 0], head: [-0.7, 0, 0], armR: [-2.7, 0, -0.4], armL: [-2.7, 0, 0.4], foreR: [-0.1, 0, 0], foreL: [-0.1, 0, 0], legR: [0.5, 0, -0.2], shinR: [0.4, 0, 0], legL: [0.4, 0, 0.2], shinL: [0.6, 0, 0] }], [20, { body: [1.0, 0, 0], by: -0.12, head: [-0.7, 0, 0], armR: [-2.7, 0, -0.4], armL: [-2.7, 0, 0.4], legR: [0.5, 0, -0.2], shinR: [0.4, 0, 0], legL: [0.4, 0, 0.2], shinL: [0.6, 0, 0] }], [38, HI]],
  },
  // ---------- スマッシュ ----------
  fsmash: {
    // 振りかぶって殴り抜く
    total: 46, smash: true, charge: { f: 6, max: 60 }, trail: 'handR', trailF: [12, 18], sfx: [13, 'whoosh', 1.0],
    hit: [hb(14, 17, 1.15, 0.95, 0.56, 17, 38, 38, 102), hb(14, 17, 0.55, 0.95, 0.48, 15, 38, 36, 100)],
    onFrame(ft, f) { if (f === 14) { ft.vx = ft.facing * 0.06; ft.battle.effects.dust(ft.x, ft.y, 4, -ft.facing); } },
    anim: [[0, HI], [6, { ...WIND_R, armR: [0.9, 0, -0.7], torso: [-0.1, -0.8, 0], by: -0.04, legR: [0.3, 0, -0.14], legL: [-0.6, 0, 0.14], shinL: [0.8, 0, 0] }], [13, { ...WIND_R, armR: [1.0, 0, -0.7], torso: [-0.12, -0.9, 0], by: -0.05, legR: [0.3, 0, -0.14], legL: [-0.6, 0, 0.14], shinL: [0.8, 0, 0] }], [15, { ...PUNCH_R, torso: [0.35, 0.8, 0], bz: 0.3, by: 0.1, legR: [0.5, 0, -0.14], shinR: [0.6, 0, 0], legL: [-0.9, 0, 0.14], shinL: [0.9, 0, 0] }], [28, { ...PUNCH_R, torso: [0.3, 0.7, 0], bz: 0.25, by: 0.1, legR: [0.5, 0, -0.14], shinR: [0.6, 0, 0], legL: [-0.9, 0, 0.14], shinL: [0.9, 0, 0] }], [46, HI]],
  },
  usmash: {
    // 両の拳を突き上げて跳ねる
    total: 44, smash: true, charge: { f: 5, max: 60 }, trail: 'handR', trailF: [8, 15], sfx: [9, 'whoosh', 0.9],
    hit: [hb(10, 14, 0.15, 1.85, 0.62, 15, 88, 38, 100), hb(10, 12, 0.35, 1.0, 0.5, 13, 88, 38, 98)],
    anim: [[0, HI], [5, { ...HI, by: -0.1, torso: [0.35, 0, 0], legR: [-1.0, 0, -0.2], shinR: [1.6, 0, 0], legL: [-1.0, 0, 0.2], shinL: [1.6, 0, 0], armR: [0.3, 0, -0.4], foreR: [-1.8, 0, 0], armL: [0.3, 0, 0.4], foreL: [-1.8, 0, 0] }], [10, { ...HI, by: 0.14, torso: [-0.15, 0, 0], head: [-0.3, 0, 0], legR: [0, 0, -0.1], shinR: [0.05, 0, 0], legL: [0, 0, 0.1], shinL: [0.05, 0, 0], armR: [-3.0, 0, -0.15], foreR: [0, 0, 0], armL: [-3.0, 0, 0.15], foreL: [0, 0, 0] }], [18, { ...HI, by: 0.06, torso: [-0.1, 0, 0], armR: [-2.9, 0, -0.2], foreR: [0, 0, 0], armL: [-2.9, 0, 0.2], foreL: [0, 0, 0] }], [44, HI]],
  },
  dsmash: {
    // 両腕を左右へ叩きつける
    total: 44, smash: true, charge: { f: 5, max: 60 }, trail: 'handL', trailF: [7, 12], sfx: [8, 'whoosh', 0.9],
    hit: [hb(9, 11, 0.95, 0.3, 0.52, 13, 32, 36, 98), hb(9, 11, -0.95, 0.3, 0.52, 14, 148, 36, 98)],
    onFrame(ft, f) { if (f === 9) { ft.battle.effects.dust(ft.x + 0.9, ft.y, 4, 1); ft.battle.effects.dust(ft.x - 0.9, ft.y, 4, -1); ft.battle.shakeCam(0.06); } },
    anim: [[0, HI], [6, { ...HI, body: [0, 1.57, 0], by: 0.02, armR: [-0.3, 0, -2.6], foreR: [0, 0, 0], armL: [-0.3, 0, 2.6], foreL: [0, 0, 0], torso: [-0.1, 0, 0] }], [9, { ...HI, body: [0, 1.57, 0], by: -0.09, torso: [0.3, 0, 0], armR: [0, 0, -0.75], foreR: [0, 0, 0], armL: [0, 0, 0.75], foreL: [0, 0, 0], legR: [-0.9, 0, -0.4], shinR: [1.3, 0, 0], legL: [-0.9, 0, 0.4], shinL: [1.3, 0, 0] }], [22, { ...HI, body: [0, 1.57, 0], by: -0.08, torso: [0.25, 0, 0], armR: [0, 0, -0.8], foreR: [0, 0, 0], armL: [0, 0, 0.8], foreL: [0, 0, 0], legR: [-0.9, 0, -0.4], shinR: [1.3, 0, 0], legL: [-0.9, 0, 0.4], shinL: [1.3, 0, 0] }], [44, HI]],
  },
  // ---------- 空中 ----------
  nair: {
    // 丸まって回る体当たり
    total: 38, aerial: true, landLag: 8, acBefore: 3, acAfter: 28, alpha: 0.85, sfx: [4, 'whoosh', 0.5],
    hit: [hb(4, 10, 0, 0.65, 0.78, 9, 45, 30, 88, { away: true }), hb(11, 22, 0, 0.65, 0.68, 6, 45, 20, 70, { away: true })],
    anim: (() => {
      const S = { ...TUCK, armR: [-1.3, 0, -0.4], foreR: [-1.4, 0, 0], armL: [-1.3, 0, 0.4], foreL: [-1.4, 0, 0], torso: [0.4, 0, 0], head: [0.3, 0, 0] };
      return [[0, AIR], [4, { ...S, body: [0, 0, 0] }], [22, { ...S, body: [PI * 4, 0, 0] }], [38, { ...AIR, body: [PI * 4, 0, 0] }]];
    })(),
  },
  fair: {
    // 両拳を組んで振り下ろす
    total: 36, aerial: true, landLag: 12, acBefore: 4, acAfter: 28, trail: 'handR', trailF: [7, 13], sfx: [8, 'whoosh', 0.7],
    hit: [hb(9, 12, 0, 0, 0.55, 12, 42, 30, 96, { path: [[0.5, 1.7], [0.95, 0.5]] }), hb(9, 12, 0.5, 0.9, 0.45, 10, 42, 30, 92)],
    anim: [[0, AIR], [6, { ...TUCK, armR: [-2.9, 0, 0.2], foreR: [-0.5, 0, 0], armL: [-2.9, 0, -0.2], foreL: [-0.5, 0, 0], torso: [-0.3, 0, 0], head: [-0.2, 0, 0] }], [9, { ...TUCK, armR: [-2.6, 0, 0.2], foreR: [-0.3, 0, 0], armL: [-2.6, 0, -0.2], foreL: [-0.3, 0, 0], torso: [-0.3, 0, 0] }], [12, { ...TUCK, armR: [-0.9, 0, 0.2], foreR: [-0.1, 0, 0], armL: [-0.9, 0, -0.2], foreL: [-0.1, 0, 0], torso: [0.6, 0, 0], head: [0.2, 0, 0] }], [22, { ...TUCK, armR: [-0.8, 0, 0.2], armL: [-0.8, 0, -0.2], torso: [0.5, 0, 0] }], [36, AIR]],
  },
  bair: {
    // おしりで突き飛ばす
    total: 32, aerial: true, landLag: 10, acBefore: 3, acAfter: 24, sfx: [5, 'whoosh', 0.7],
    hit: [hb(6, 9, -0.7, 0.55, 0.58, 13, 145, 36, 100), hb(10, 15, -0.65, 0.55, 0.48, 8, 145, 25, 80)],
    onFrame(ft, f) { if (f === 6) { const p = butt(ft); puff(ft, p.x, p.y, 3, 0.4, -ft.facing * 0.04); } },
    anim: [[0, AIR], [4, { ...TUCK, torso: [0.3, 0, 0], armR: [-1.0, 0, -0.6], armL: [-1.0, 0, 0.6] }], [7, { body: [0.35, 0, 0], bz: -0.25, torso: [0.6, 0, 0], head: [-0.5, 0, 0], legR: [-1.3, 0, -0.2], shinR: [0.6, 0, 0], legL: [-1.3, 0, 0.2], shinL: [0.6, 0, 0], armR: [-1.4, 0, -0.5], armL: [-1.4, 0, 0.5] }], [15, { body: [0.3, 0, 0], bz: -0.2, torso: [0.55, 0, 0], head: [-0.5, 0, 0], legR: [-1.3, 0, -0.2], shinR: [0.6, 0, 0], legL: [-1.3, 0, 0.2], shinL: [0.6, 0, 0], armR: [-1.4, 0, -0.5], armL: [-1.4, 0, 0.5] }], [32, AIR]],
  },
  uair: {
    // 耳を振り上げる頭突き
    total: 30, aerial: true, landLag: 8, acBefore: 3, acAfter: 22, sfx: [4, 'whoosh', 0.5],
    hit: [hb(5, 9, 0.1, 1.85, 0.58, 9, 85, 30, 92), hb(5, 9, 0.1, 1.3, 0.45, 8, 85, 30, 90)],
    anim: [[0, AIR], [4, { ...TUCK, torso: [0.4, 0, 0], head: [0.4, 0, 0], earR: [0.8, 0, 0], earL: [0.8, 0, 0] }], [7, { ...AIR, torso: [-0.3, 0, 0], head: [-0.6, 0, 0], earR: [-0.6, 0, 0], earL: [-0.6, 0, 0], armR: [0.3, 0, -0.8], armL: [0.3, 0, 0.8] }], [14, { ...AIR, torso: [-0.25, 0, 0], head: [-0.5, 0, 0] }], [30, AIR]],
  },
  dair: {
    // 両足で踏みつける（出はじめはメテオ）
    total: 40, aerial: true, landLag: 16, acBefore: 3, acAfter: 32, trail: 'footR', trailF: [9, 16], sfx: [9, 'whoosh', 0.7],
    hit: [hb(10, 13, 0.05, -0.1, 0.5, 12, 270, 25, 85), hb(14, 20, 0.05, -0.05, 0.42, 8, 70, 25, 70)],
    anim: [[0, AIR], [7, { ...TUCK, torso: [0.2, 0, 0], armR: [-0.5, 0, -1.0], armL: [-0.5, 0, 1.0] }], [10, { legR: [-0.05, 0, -0.1], shinR: [0.05, 0, 0], legL: [-0.05, 0, 0.1], shinL: [0.05, 0, 0], by: 0.05, torso: [-0.1, 0, 0], armR: [-2.2, 0, -0.7], armL: [-2.2, 0, 0.7], earR: [-0.7, 0, 0], earL: [-0.7, 0, 0] }], [20, { legR: [-0.05, 0, -0.1], shinR: [0.05, 0, 0], legL: [-0.05, 0, 0.1], shinL: [0.05, 0, 0], torso: [-0.1, 0, 0], armR: [-2.2, 0, -0.7], armL: [-2.2, 0, 0.7] }], [40, AIR]],
  },
  // ---------- 必殺ワザ ----------
  neutralb: {
    // ガスショット: 後ろを向いておしりを突き出し、ガスの雲を飛ばす。当たった相手はふらふらになる
    total: 48, keepVel: true, fall: 0.6, landContinue: true,
    onFrame(ft, f) {
      if (ft.grounded) ft.friction(1.5);
      if (f === 13) {
        gas(ft, { x: ft.x + ft.facing * 0.7, y: ft.y + 0.6, vx: ft.facing * 0.19 });
        puff(ft, ft.x + ft.facing * 0.6, ft.y + 0.55, 5, 0.5, ft.facing * 0.05);
        audio.fart(0.5);
        if (!ft.grounded) ft.vx -= ft.facing * 0.04;
      }
    },
    anim: [[0, HI], [9, { ...BUTT, torso: [0.4, 0, 0] }], [13, { ...BUTT, bz: -0.12 }], [24, BUTT], [40, { ...HI, body: [0, PI * 2, 0] }], [48, { ...HI, body: [0, PI * 2, 0] }]],
  },
  sideb: {
    // うさぎラッシュ: 踏み込みながら拳を連打し、最後に殴り飛ばす
    total: 52, keepVel: true, noDrift: true, canLeaveGround: true, landContinue: true, noGravity: [6, 28], trail: 'handR', trailF: [8, 32],
    hit: [
      hb(9, 10, 0.8, 0.9, 0.55, 2, 20, 30, 10, { group: 1, link: true }), hb(13, 14, 0.8, 0.9, 0.55, 2, 20, 30, 10, { group: 2, link: true }),
      hb(17, 18, 0.8, 0.9, 0.55, 2, 20, 30, 10, { group: 3, link: true }), hb(21, 22, 0.8, 0.9, 0.55, 2, 20, 30, 10, { group: 4, link: true }),
      hb(28, 31, 0.95, 0.95, 0.62, 7, 40, 55, 95, { group: 5 }),
    ],
    onStart(ft) { if (!ft.grounded) ft.sideBUsed = true; ft.vy = 0; },
    onFrame(ft, f) {
      if (f < 8) { ft.vx = approach(ft.vx, 0, 0.02); if (!ft.grounded) ft.vy = 0; }
      else if (f <= 26) {
        ft.vx = ft.facing * 0.16; if (!ft.grounded) ft.vy = 0;
        if (f % 4 === 0) audio.whoosh(0.35);
        if (f % 4 === 0 && ft.grounded) ft.battle.effects.dust(ft.x, ft.y, 1, -ft.facing);
      } else { ft.vx *= 0.85; if (f === 28) audio.whoosh(0.9); }
    },
    anim: (() => {
      const run = { legR: [0.5, 0, -0.14], shinR: [0.7, 0, 0], legL: [-0.8, 0, 0.14], shinL: [0.7, 0, 0], by: 0.1, bz: 0.15 };
      const k = [[0, HI], [7, { ...WIND_R, by: -0.05 }]];
      for (let i = 0; i < 4; i++) { k.push([9 + i * 4, { ...(i % 2 ? PUNCH_L : PUNCH_R), ...run }]); k.push([11 + i * 4, { ...(i % 2 ? PUNCH_R : PUNCH_L), ...run, armR: [-0.8, 0, -0.3], armL: [-0.8, 0, 0.3], foreR: [-1.6, 0, 0], foreL: [-1.6, 0, 0] }]); }
      k.push([26, { ...WIND_R, ...run, armR: [1.0, 0, -0.7], torso: [-0.1, -0.9, 0] }], [29, { ...PUNCH_R, ...run, torso: [0.35, 0.85, 0], bz: 0.32 }], [38, { ...PUNCH_R, ...run, torso: [0.3, 0.75, 0], bz: 0.28 }], [52, HI]);
      return k;
    })(),
  },
  upb: {
    // ガスロケット: おならの勢いで真上へ飛ぶ。足元に残るガスもふらふらにする
    total: 40, helpless: true, helplessLag: 18, ledgeGrab: 12, noDrift: true, keepVel: true, noGravity: [5, 22], sfx: [5, 'whoosh', 0.8],
    hit: [hb(5, 9, 0, 1.2, 0.7, 6, 85, 55, 60), hb(10, 20, 0, 1.6, 0.55, 4, 80, 40, 60, { group: 1 })],
    onStart(ft) { ft.upBUsed = true; ft.vx *= 0.4; },
    onFrame(ft, f) {
      if (f < 5) ft.vy = ft.grounded ? 0 : Math.max(ft.vy, 0) * 0.5;
      if (f === 5) {
        gas(ft, { x: ft.x, y: ft.y + 0.35, vx: ft.facing * 0.002, vy: -0.03, r: 0.5, rMax: 0.85, life: 26, stun: 55, dmg: 3 });
        puff(ft, ft.x, ft.y + 0.3, 8, 0.7); audio.fart(0.9);
        ft.grounded = false; ft.surface = null; ft.y += 0.02;
      }
      if (f >= 5 && f <= 22) {
        ft.vy = 0.37 * (1 - (f - 5) / 19) + 0.015;
        ft.vx = approach(ft.vx, ft.input.stick.x * 0.11, 0.012);
        if (f % 2 === 0) puff(ft, ft.x, ft.y + 0.1, 1, 0.45);
      }
      if (f > 22) ft.drift(0.6);
    },
    anim: [[0, { ...HI, by: -0.1, torso: [0.4, 0, 0], legR: [-1.0, 0, -0.2], shinR: [1.6, 0, 0], legL: [-1.0, 0, 0.2], shinL: [1.6, 0, 0] }], [5, { legR: [-0.2, 0, -0.3], shinR: [0.3, 0, 0], legL: [-0.2, 0, 0.3], shinL: [0.3, 0, 0], torso: [-0.15, 0, 0], head: [-0.3, 0, 0], armR: [-3.0, 0, -0.2], foreR: [0, 0, 0], armL: [-3.0, 0, 0.2], foreL: [0, 0, 0], earR: [0.5, 0, 0], earL: [0.5, 0, 0] }], [22, { legR: [-0.3, 0, -0.3], shinR: [0.4, 0, 0], legL: [-0.3, 0, 0.3], shinL: [0.4, 0, 0], torso: [-0.15, 0, 0], head: [-0.3, 0, 0], armR: [-2.9, 0, -0.3], foreR: [0, 0, 0], armL: [-2.9, 0, 0.3], foreL: [0, 0, 0], earR: [0.5, 0, 0], earL: [0.5, 0, 0] }], [40, AIR]],
  },
  downb: {
    // ヒップドロップ（地上）: その場で跳び上がってから、おしりで落ちる
    total: 60, keepVel: true, noDrift: true, canLeaveGround: true,
    onStart(ft) { if (!ft.grounded) ft.startMove('downbair'); },
    onFrame(ft, f) {
      if (f < 7) ft.friction(2);
      if (f === 7) { ft.grounded = false; ft.surface = null; ft.y += 0.02; ft.vy = 0.3; ft.vx = ft.input.stick.x * 0.05; audio.jump(); ft.battle.effects.dust(ft.x, ft.y, 3, 0); }
      if (f === 24) ft.startMove('downbair');
    },
    anim: [[0, HI], [6, { ...HI, by: -0.1, torso: [0.4, 0, 0], legR: [-1.0, 0, -0.2], shinR: [1.6, 0, 0], legL: [-1.0, 0, 0.2], shinL: [1.6, 0, 0] }], [12, { ...AIR, armR: [-2.6, 0, -0.5], armL: [-2.6, 0, 0.5] }], [24, { ...TUCK, armR: [-2.6, 0, -0.5], armL: [-2.6, 0, 0.5] }], [60, AIR]],
  },
  downbair: {
    // ヒップドロップ（空中）: おしりから真下へ落ちる。出はじめはメテオ。着地でガスが左右に広がる
    total: 600, keepVel: true, noDrift: true, noGravity: [0, 600],
    hit: [hb(9, 13, 0, 0.15, 0.6, 12, 270, 28, 80), hb(14, 600, 0, 0.2, 0.55, 10, 62, 45, 70)],
    onFrame(ft, f) {
      if (f < 9) { ft.vx *= 0.8; ft.vy = Math.max(ft.vy - 0.006, -0.02); }
      else { ft.vx = 0; ft.vy = -0.36; if (f === 9) audio.whoosh(0.9); }
    },
    onLand(ft) { if (ft.mf >= 9) { ft.startMove('downbland'); return 'continue'; } },
    anim: [[0, { ...TUCK, armR: [-2.6, 0, -0.5], armL: [-2.6, 0, 0.5] }], [8, { ...SIT, by: 0.1 }], [600, SIT]],
  },
  downbland: {
    total: 34,
    onStart(ft) {
      ft.vx = 0;
      for (const s of [-1, 1]) gas(ft, { x: ft.x + s * 0.5, y: ft.y + 0.35, vx: s * 0.09, r: 0.45, rMax: 0.75, life: 18, stun: 60, dmg: 3 });
      puff(ft, ft.x, ft.y + 0.2, 8, 0.7);
      ft.battle.effects.dust(ft.x, ft.y, 8, 0); ft.battle.shakeCam(0.14); audio.fart(0.7); audio.land();
    },
    anim: [[0, { ...SIT, by: -0.17 }], [16, { ...SIT, by: -0.16 }], [34, HI]],
  },
  // ---------- 最後の切りふだ ----------
  final: {
    // メガトン・ガス: 特大のガスで周りの相手を包んで動けなくし、最後に爆発させる
    total: 130, fs: true, intang: [0, 130], noGravity: [0, 130], noDrift: true, keepVel: true,
    onStart(ft) { ft.vx = 0; ft.vy = 0; ft.battle.startCine(ft, 40); },
    onFrame(ft, f) {
      const b = ft.battle, cy = ft.y + 1.0;
      ft.vx = 0; if (!ft.grounded) ft.vy = 0;
      if (f === 40) { audio.fart(1); audio.fsBoom(); b.shakeCam(0.4); }
      if (f >= 40 && f < 100) {
        const R = Math.min(4.2, 1 + (f - 40) * 0.12);
        for (let i = 0; i < 4; i++) { const a = rand(0, PI * 2), d = rand(0, R); puff(ft, ft.x + Math.cos(a) * d, cy + Math.sin(a) * d * 0.7, 1, 1.6); }
        if (f % 6 === 0) b.fsTrap(ft, ft.x, cy, R);
        if (f % 8 === 0) { b.fsDamage(ft, 3); audio.fart(0.3); }
      }
      if (f === 100) {
        b.effects.ring(ft.x, cy, GAS2, 9, 26); b.effects.koBlast(ft.x, cy, GAS2); b.shakeCam(0.7); audio.fsBoom();
        b.fsLaunch(ft, { dmg: 20, ang: 55, bkb: 105, kbg: 100 });
      }
    },
    onEnd(ft) { ft.battle.fsRelease(ft); },
    anim: [[0, HI], [30, { ...HI, by: -0.07, torso: [0.3, 0, 0], armR: [-0.6, 0, -0.5], foreR: [-1.8, 0, 0], armL: [-0.6, 0, 0.5], foreL: [-1.8, 0, 0], legR: [-0.8, 0, -0.2], shinR: [1.2, 0, 0], legL: [-0.8, 0, 0.2], shinL: [1.2, 0, 0] }], [40, { ...BUTT, body: [0, 0, 0], torso: [0.3, 0, 0], armR: [-0.4, 0, -1.6], armL: [-0.4, 0, 1.6], head: [-0.5, 0, 0] }], [98, { ...BUTT, body: [0, 0, 0], torso: [0.35, 0, 0], armR: [-0.4, 0, -1.6], armL: [-0.4, 0, 1.6], head: [-0.5, 0, 0] }], [104, { ...HI, by: 0.1, torso: [-0.3, 0, 0], armR: [-2.8, 0, -0.7], armL: [-2.8, 0, 0.7], foreR: [0, 0, 0], foreL: [0, 0, 0] }], [130, HI]],
  },
  // ---------- つかみ・投げ ----------
  grab: {
    total: 32,
    hit: [hb(6, 7, 0.75, 0.9, 0.42, 0, 0, 0, 0, { type: 'grab' })],
    anim: [[0, HI], [6, { ...HI, armR: [-1.4, 0, 0.3], foreR: [-0.3, 0, 0], armL: [-1.4, 0, -0.3], foreL: [-0.3, 0, 0], torso: [0.3, 0, 0], bz: 0.1 }], [16, { ...HI, armR: [-1.3, 0, 0.3], armL: [-1.3, 0, -0.3], torso: [0.25, 0, 0] }], [32, HI]],
  },
  dashgrab: {
    total: 40, keepVel: true,
    hit: [hb(9, 10, 0.9, 0.9, 0.45, 0, 0, 0, 0, { type: 'grab' })],
    onFrame(ft) { ft.friction(1.2); },
    anim: [[0, HI], [9, { ...HI, armR: [-1.4, 0, 0.3], foreR: [-0.3, 0, 0], armL: [-1.4, 0, -0.3], foreL: [-0.3, 0, 0], torso: [0.45, 0, 0], bz: 0.2 }], [22, { ...HI, armR: [-1.3, 0, 0.3], armL: [-1.3, 0, -0.3], torso: [0.4, 0, 0] }], [40, HI]],
  },
  pummel: {
    // 頭突き
    total: 18, pummelAt: 6, pummelDmg: 1.4,
    anim: [[0, { ...HI, armR: [-1.35, 0, 0.3], armL: [-1.35, 0, -0.3], head: [-0.4, 0, 0] }], [6, { ...HI, armR: [-1.35, 0, 0.3], armL: [-1.35, 0, -0.3], torso: [0.35, 0, 0], head: [0.4, 0, 0] }], [18, { ...HI, armR: [-1.35, 0, 0.3], armL: [-1.35, 0, -0.3] }]],
  },
  fthrow: {
    // 腹で弾き飛ばす
    total: 32, throwAt: 11, throwHit: { dmg: 9, ang: 40, bkb: 65, kbg: 62 },
    hold: () => [0.75, 0.25],
    anim: [[0, { ...HI, armR: [-1.35, 0, 0.3], armL: [-1.35, 0, -0.3] }], [8, { ...HI, torso: [-0.35, 0, 0], armR: [-0.6, 0, -0.9], armL: [-0.6, 0, 0.9], bz: -0.1 }], [11, { ...HI, torso: [-0.1, 0, 0], armR: [0.4, 0, -1.0], armL: [0.4, 0, 1.0], bz: 0.3 }], [32, HI]],
  },
  bthrow: {
    // 後ろへ放り投げる
    total: 38, throwAt: 16, throwHit: { dmg: 10, ang: 140, bkb: 60, kbg: 92 },
    hold: (f) => { const t = Math.min(1, f / 15); return [0.75 * Math.cos(PI * t), 0.25 + 0.9 * Math.sin(PI * t)]; },
    anim: [[0, { ...HI, armR: [-1.35, 0, 0.3], armL: [-1.35, 0, -0.3] }], [8, { ...HI, armR: [-2.9, 0, 0.2], armL: [-2.9, 0, -0.2], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [-0.3, 0, 0] }], [16, { ...HI, armR: [-4.2, 0, 0.2], armL: [-4.2, 0, -0.2], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [-0.7, 0, 0], head: [-0.4, 0, 0] }], [38, HI]],
  },
  uthrow: {
    // 両腕で真上へ放り上げる
    total: 34, throwAt: 12, throwHit: { dmg: 8, ang: 88, bkb: 65, kbg: 60 },
    hold: (f) => [0.6 - f * 0.03, 0.25 + f * 0.09],
    anim: [[0, { ...HI, armR: [-1.35, 0, 0.3], armL: [-1.35, 0, -0.3] }], [8, { ...HI, by: -0.06, armR: [-0.9, 0, 0.2], armL: [-0.9, 0, -0.2] }], [12, { ...HI, by: 0.06, armR: [-3.0, 0, -0.1], armL: [-3.0, 0, 0.1], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [-0.15, 0, 0] }], [34, HI]],
  },
  dthrow: {
    // 相手を地面に置いて、おしりで踏みつぶす
    total: 40, throwAt: 20, throwHit: { dmg: 8, ang: 75, bkb: 60, kbg: 50 },
    hold: (f) => [Math.max(0.1, 0.75 - f * 0.05), Math.max(0, 0.25 - f * 0.03)],
    onFrame(ft, f) { if (f === 20) { puff(ft, ft.x, ft.y + 0.2, 6, 0.6); ft.battle.effects.dust(ft.x, ft.y, 6, 0); ft.battle.shakeCam(0.1); audio.fart(0.4); } },
    anim: [[0, { ...HI, armR: [-1.35, 0, 0.3], armL: [-1.35, 0, -0.3] }], [10, { ...HI, armR: [-0.5, 0, 0.2], armL: [-0.5, 0, -0.2], torso: [0.5, 0, 0], by: -0.05 }], [16, { ...SIT, by: 0.25 }], [20, { ...SIT, by: -0.1 }], [30, { ...SIT, by: -0.1 }], [40, HI]],
  },
  getupattack: {
    total: 38, intang: [0, 14], trail: 'handR', trailF: [12, 22],
    hit: [hb(14, 16, 0.9, 0.5, 0.55, 6, 48, 60, 50), hb(19, 21, -0.9, 0.5, 0.55, 6, 132, 60, 50, { group: 1 })],
    anim: [[0, { ...HI, by: -0.1, torso: [0.6, 0, 0] }], [14, { ...PUNCH_R, by: -0.05 }], [20, { ...HI, by: -0.05, body: [0, PI, 0], armL: [-1.5, 0, 0.05], foreL: [0, 0, 0] }], [30, { ...HI, body: [0, PI * 2, 0] }], [38, { ...HI, body: [0, PI * 2, 0] }]],
  },
  ledgeattack: {
    total: 38, intang: [0, 12], trail: 'handR', trailF: [10, 16], sfx: [11, 'whoosh', 0.6],
    hit: [hb(12, 15, 0.9, 0.8, 0.6, 9, 45, 60, 50)],
    anim: [[0, { ...HI, by: -0.06 }], [12, { ...PUNCH_R, bz: 0.25 }], [24, { ...PUNCH_R, bz: 0.2 }], [38, HI]],
  },
};

export const HAMU = {
  id: 'hamu',
  name: 'ハム',
  en: 'HAMU',
  title: 'うさぎ拳士',
  color: 0xffa050,
  css: '#ffa050',
  desc: '太い腕で殴り合う近接格闘タイプ。おならのガスで相手をふらふらにして、重い一撃を叩き込む。',
  specials: ['ガスショット（おならの雲を飛ばす・当たるとふらふら）', 'うさぎラッシュ（踏み込み連打）', 'ガスロケット（おならで上昇・足元のガスもふらふら）', 'ヒップドロップ（急降下・着地でガスが広がる）'],
  stats: {
    weight: 96, height: 1.6, radius: 0.44,
    walkSpeed: 0.072, dashSpeed: 0.165, dashFrames: 11, runSpeed: 0.145, traction: 0.013,
    airSpeed: 0.09, airAccel: 0.007, airFriction: 0.003,
    gravity: 0.0105, fallSpeed: 0.19, fastFall: 0.3,
    jumpV: 0.272, hopV: 0.168, djV: 0.25, airJumps: 1, jumpsquat: 4, rollSpeed: 0.135,
  },
  grabHold: [0.75, 0.25],
  buildModel: buildHamu,
  anims: makeAnims({
    idle: HI, hipY: HAMU_HIP, bob: 1.0,
    override: {
      victory: (f) => ({ ...HI, by: Math.abs(Math.sin(f * 0.2)) * 0.12, armR: [-2.8, 0, -0.5], foreR: [-0.3, 0, 0], armL: [-2.8, 0, 0.5], foreL: [-0.3, 0, 0], head: [-0.2, 0, 0], earR: [Math.sin(f * 0.4) * 0.3, 0, 0], earL: [-Math.sin(f * 0.4) * 0.3, 0, 0] }),
    },
  }),
  moves,
};
