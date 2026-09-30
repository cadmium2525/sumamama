// CPU の思考: 状況判断→入力（キー押下相当）を生成する
import { blankRaw } from './input.js';
import { STAGE } from './stage.js';
import { sign, chance, rand, randi, clamp } from './util.js';

const BTN = ['jump', 'attack', 'special', 'shield', 'smash', 'grab'];

export class CpuController {
  constructor(battle, fighter, level = 5) {
    this.b = battle;
    this.f = fighter;
    this.level = clamp(level, 1, 9);
    const L = this.level;
    this.react = Math.max(2, Math.round(26 - L * 2.7));
    this.defendP = 0.04 + L * 0.075;
    this.techP = L * 0.1;
    this.diP = L * 0.1;
    this.aggro = 0.35 + L * 0.06;
    this.q = {};
    this.last = blankRaw();
    this.sx = 0; this.sy = 0;
    this.flickQ = null;
    this.timer = randi(10, 30);
    this.busy = 0;
    this.ledgeWait = -1;
    this.techTried = false;
    this.jumpCd = 0;
    this.aimAfter = null;
    this.diSet = false;
    this.wander = 0;
  }

  press(btn, n = 1) { this.q[btn] = { n, gap: this.last[btn] ? 1 : 0 }; }
  flick(x, y, n = 3) { this.flickQ = { x, y, n, gap: 1 }; }
  holding(btn) { return !!this.q[btn]; }

  // 毎フレーム呼ばれ raw を返す
  update() {
    const raw = blankRaw();
    this.think();
    for (const b of BTN) {
      const q = this.q[b];
      if (!q) continue;
      if (q.gap > 0) { q.gap--; continue; }
      raw[b] = true;
      if (--q.n <= 0) delete this.q[b];
    }
    let x = this.sx, y = this.sy;
    if (this.flickQ) {
      const fq = this.flickQ;
      if (fq.gap > 0) { fq.gap--; x = 0; y = 0; }
      else { x = fq.x; y = fq.y; if (--fq.n <= 0) this.flickQ = null; }
    }
    raw.x = clamp(x, -1, 1); raw.y = clamp(y, -1, 1);
    this.last = raw;
    return raw;
  }

  opponent() {
    let best = null, bd = 1e9;
    for (const o of this.b.fighters) {
      if (o === this.f || o.state === 'dead' || o.stocks <= 0) continue;
      const d = Math.abs(o.x - this.f.x) + Math.abs(o.y - this.f.y);
      if (d < bd) { bd = d; best = o; }
    }
    return best;
  }

  think() {
    const me = this.f;
    if (this.jumpCd > 0) this.jumpCd--;
    if (this.b.phase !== 'fight') { this.sx = 0; this.sy = 0; return; }
    const st = me.state;
    const op = this.opponent();

    // 空中ワープ等の方向入力を後から入れる
    if (this.aimAfter) {
      if (--this.aimAfter.n <= 0) { this.sx = this.aimAfter.x; this.sy = this.aimAfter.y; this.aimAfter = null; }
      return;
    }
    if (st !== 'hitstun') this.diSet = false;
    if (st !== 'hitstun' && st !== 'tumble') this.techTried = false;

    switch (st) {
      case 'dead': this.sx = 0; this.sy = 0; return;
      case 'respawn':
        this.sx = 0; this.sy = 0;
        if (me.sf > 50 + randi(0, 60) - this.level * 5) this.flick(0, -1, 2);
        return;
      case 'grabbed': case 'dizzy':
        if (chance(0.1 + this.level * 0.04)) this.press(BTN[randi(1, 2)]);
        if (chance(0.15)) this.flick(chance(0.5) ? 1 : -1, 0, 1);
        return;
      case 'grabbing': return this.doThrow(op);
      case 'ledge': return this.doLedge();
      case 'knockdown':
        if (me.sf > 16 && chance(0.1 + this.level * 0.02)) {
          const r = Math.random();
          if (r < 0.35) this.press('attack');
          else if (r < 0.65) this.flick(-sign(me.x) || 1, 0, 2);
          else this.flick(0, 1, 2);
        }
        return;
      case 'hitstun': case 'tumble': return this.doHitstun();
    }
    this.ledgeWait = -1;
    if (st === 'attack' || st === 'airdodge' || st === 'roll' || st === 'spotdodge' || st === 'ledgeclimb') {
      // 技中の軽い操作（空中なら崖側へドリフト）
      // イルミネのワープは方向入力が決まるまで舵を取らない
      const warping = me.def.id === 'illumine' && me.moveName === 'upb' && me.mf <= 7;
      if (!me.grounded && this.offstage() && !warping) this.steerToLedge();
      return;
    }
    if (!me.grounded && this.offstage()) return this.recover();
    if (st === 'helpless') { if (this.offstage()) this.steerToLedge(); else this.sx = 0; return; }

    // シールド中は保持
    if (st === 'shield' && this.holding('shield')) {
      if (op && op.state !== 'attack' && Math.abs(op.x - me.x) < 1.4 && chance(0.25 + this.level * 0.05)) {
        this.q = {}; this.press('attack');
      }
      return;
    }

    if (this.busy > 0) { this.busy--; this.edgeSafety(); return; }
    if (--this.timer > 0) { this.edgeSafety(); return; }
    this.timer = this.react + randi(0, Math.max(1, 10 - this.level));

    if (!op) { this.sx = Math.abs(me.x) > 1.5 ? -sign(me.x) : 0; return; }
    if (op.state === 'respawn' || op.invuln > 30) { this.neutralWait(op); return; }
    if (this.defend(op)) return;
    if (me.fsReady && this.tryFinal(op)) return;
    const ball = this.b.ball;
    if (ball && ball.life > 0 && !me.fsReady && Math.abs(ball.x) < STAGE.main.half + 0.5 && this.chaseBall(ball, op)) return;
    if (this.opOffstage(op)) return this.edgeguard(op);
    if (me.grounded) this.groundPlay(op); else this.airPlay(op);
    this.edgeSafety();
  }

  tryFinal(op) {
    const me = this.f;
    if (op.state === 'dead' || op.state === 'respawn' || op.invuln > 0) return false;
    const dx = op.x - me.x, dy = op.y - me.y;
    const ok = me.def.id === 'illumine' ? Math.hypot(dx, dy) < 4.8 : Math.abs(dy) < 1.8 && Math.abs(dx) < 14;
    if (!ok || !chance(0.5)) return false;
    this.sx = sign(dx) * 0.6; this.sy = 0;
    this.press('special');
    this.busy = 20;
    return true;
  }

  chaseBall(ball, op) {
    const me = this.f;
    const dx = ball.x - me.x, dy = ball.y - (me.y + me.height * 0.5);
    const dOp = Math.abs(op.x - me.x) + Math.abs(op.y - me.y);
    const dBall = Math.abs(dx) + Math.abs(dy);
    if (dBall > dOp + 3 && !chance(0.3)) return false;
    const dir = sign(dx) || me.facing;
    this.sy = 0;
    if (Math.abs(dx) < 1.5 && Math.abs(dy) < 1.4) {
      if (me.grounded && dy > 0.7) { this.sx = 0; this.sy = 1; this.press('attack'); }
      else if (me.grounded) { this.sx = dir; this.press('attack'); }
      else { this.sx = dir === me.facing ? dir : dir; this.sy = dy > 0.8 ? 1 : dy < -0.8 ? -1 : 0; this.press('attack'); }
      this.after(() => { this.sy = 0; }, 3);
      this.busy = 12;
      return true;
    }
    this.sx = dir;
    if (dy > 1.3 && (me.grounded || (me.jumpsLeft > 0 && me.vy < 0.02)) && this.jumpCd <= 0) { this.press('jump', me.grounded ? 8 : 1); this.jumpCd = 16; }
    this.edgeSafety();
    this.busy = 3;
    return true;
  }

  // 崖の少し外側を目指す（ステージの裏側へ潜り込まないように）
  steerToLedge() {
    const me = this.f;
    const side = sign(me.x) || 1;
    const below = me.y < -0.3;
    const tx = below ? side * (STAGE.main.half + 0.45) : side * (STAGE.main.half - 1);
    const dx = tx - me.x;
    this.sx = Math.abs(dx) < 0.15 ? 0 : Math.max(-1, Math.min(1, dx * 2));
    this.sy = 0;
  }

  offstage() {
    const me = this.f;
    return Math.abs(me.x) > STAGE.main.half + 0.1 || me.y < -0.4;
  }
  opOffstage(op) {
    return !op.grounded && (Math.abs(op.x) > STAGE.main.half + 0.4 || op.y < -0.8) || op.state === 'ledge';
  }

  edgeSafety() {
    const me = this.f;
    if (me.grounded && Math.abs(me.x) > STAGE.main.half - 1.1 && sign(this.sx) === sign(me.x)) this.sx = 0;
  }

  neutralWait(op) {
    const me = this.f;
    const dx = op.x - me.x;
    this.sx = Math.abs(dx) > 4 ? sign(dx) * 0.5 : 0;
    this.sy = 0;
    if (me.grounded && chance(0.02)) this.press('jump');
  }

  defend(op) {
    const me = this.f;
    const dx = op.x - me.x, adx = Math.abs(dx), dy = op.y - me.y;
    // 飛び道具
    for (const p of this.b.projectiles) {
      if (p.owner === me) continue;
      const pdx = me.x - p.x;
      if (Math.abs(pdx) < 3.2 && sign(p.vx) === sign(pdx) && Math.abs(p.y - (me.y + 0.9)) < 1.2 && chance(this.defendP)) {
        if (me.def.id === 'illumine' && chance(0.5)) { this.sx = 0; this.sy = -1; this.press('special'); this.aimAfter = { n: 3, x: 0, y: 0 }; return true; }
        if (me.grounded && chance(0.5)) { this.press('shield', 16); return true; }
        this.press('jump'); return true;
      }
    }
    if (op.state !== 'attack' || !op.move || !op.move.hit || adx > 2.8 || Math.abs(dy) > 2.2) return false;
    const first = Math.min(...op.move.hit.map((h) => h.f[0]));
    if (op.mf > first + 2 || op.move.hit.every((h) => h.type === 'grab')) return false;
    if (!chance(this.defendP)) return false;
    if (me.grounded) {
      const r = Math.random();
      if (me.def.counterMove && r < 0.15 && this.level >= 4) { this.sx = 0; this.sy = -1; this.press('special'); this.aimAfter = { n: 3, x: 0, y: 0 }; }
      else if (r < 0.65) this.press('shield', randi(12, 24));
      else if (r < 0.8) { this.press('shield', 3); this.flick(0, -1, 2); }
      else if (r < 0.92) { this.press('shield', 3); this.flick(-sign(dx) || 1, 0, 2); }
      else this.press('jump');
    } else if (chance(0.5)) this.press('shield');
    this.busy = 6;
    return true;
  }

  groundPlay(op) {
    const me = this.f;
    const dx = op.x - me.x, adx = Math.abs(dx), dy = op.y - me.y;
    const dir = sign(dx) || me.facing;
    const noc = me.def.id === 'illumine';
    const reach = noc ? 1.35 : 1.9;
    const killable = op.damage > (noc ? 105 : 85) - this.level * 2;
    this.sy = 0;
    // 真上の相手
    if (dy > 1.6 && adx < 1.4) {
      if (chance(0.5)) { this.sx = 0; this.sy = 0; this.press('smash'); this.sy = 1; this.busy = 20; }
      else { this.sx = dir * 0.4; this.press('jump', dy > 2.5 ? 8 : 1); this.busy = 4; }
      return;
    }
    // 台の上/下の相手へ
    if (dy > 2 && adx < 4 && chance(0.6)) { this.sx = dir; this.press('jump', 10); this.busy = 8; return; }
    if (dy < -1.5 && me.onPlatform() && adx < 4) { this.sx = 0; this.flick(0, -1, 2); this.busy = 4; return; }
    // 射程内
    if (adx < reach && Math.abs(dy) < 1.3) {
      this.sx = 0;
      const r = Math.random();
      if (op.state === 'shield' && r < 0.5) { this.press('grab'); this.busy = 20; return; }
      if (killable && r < 0.55) { this.sx = dir; this.sy = 0; this.press('smash', randi(1, 12)); this.busy = 30; return; }
      if (r < 0.2) {
        // 弱攻撃3段
        this.sx = 0; this.press('attack');
        this.after(() => this.press('attack'), 7);
        this.after(() => this.press('attack'), 14);
        this.busy = 22; return;
      }
      if (r < 0.45) { this.sx = dir; this.press('attack'); this.busy = 18; return; }
      if (r < 0.6) { this.sx = 0; this.sy = -1; this.press('attack'); this.busy = 14; this.after(() => { this.sy = 0; }, 3); return; }
      if (r < 0.72) { this.press('grab'); this.busy = 20; return; }
      if (r < 0.85 && dy > 0.3) { this.sy = 1; this.sx = 0; this.press('attack'); this.busy = 16; this.after(() => { this.sy = 0; }, 3); return; }
      this.sx = dir; this.press('smash', randi(1, 20)); this.busy = 30;
      return;
    }
    // 飛び道具
    if (noc && adx > 5 && chance(0.18) && Math.abs(dy) < 1.5) {
      me.facing === dir ? (this.sx = 0) : (this.sx = dir * 0.3);
      this.press('special', chance(0.4) ? randi(10, 50) : 1);
      this.busy = 30;
      return;
    }
    // ドラゴン: 中距離で火炎ブレスを吐き続ける
    if (me.def.id === 'dragon' && adx > 1.2 && adx < 3.4 && Math.abs(dy) < 1 && chance(0.22)) {
      this.sx = me.facing === dir ? 0 : dir * 0.3; this.sy = 0;
      this.press('special', randi(15, 45));
      this.busy = 40;
      return;
    }
    if (!noc && adx > 3.2 && adx < 6.5 && chance(0.08) && Math.abs(dy) < 1) {
      this.sx = dir; this.press('special'); this.busy = 40; return;
    }
    // 空中から攻める
    if (adx < 4.2 && adx > 1.6 && chance(0.28 * this.aggro)) {
      this.sx = dir; this.press('jump'); this.busy = 3;
      this.after(() => { this.sx = dir; this.press('attack'); }, noc ? 6 : 8);
      return;
    }
    // ダッシュ攻撃
    if (adx < 3.2 && adx > 1.8 && chance(0.12)) { this.sx = dir; this.after(() => this.press('attack'), 4); this.busy = 20; return; }
    // 接近
    this.sx = adx > 2.2 ? dir : dir * 0.5;
    if (chance(0.03 * (10 - this.level))) this.sx = 0;
  }

  airPlay(op) {
    const me = this.f;
    const dx = op.x - me.x, adx = Math.abs(dx), dy = op.y - me.y;
    const dir = sign(dx) || me.facing;
    this.sx = dir;
    this.sy = 0;
    if (adx < 1.9 && Math.abs(dy) < 1.8) {
      if (dy < -0.8 && adx < 0.9) { this.sx = 0; this.sy = -1; }
      else if (dy > 0.8 && adx < 1.0) { this.sx = 0; this.sy = 1; }
      else if (dir !== me.facing) { this.sx = dir; }
      else if (adx < 0.9) { this.sx = 0; }
      else this.sx = dir;
      this.press('attack');
      this.after(() => { this.sy = 0; }, 3);
      this.busy = 10;
      return;
    }
    if (dy > 1.5 && me.jumpsLeft > 0 && chance(0.2) && this.jumpCd <= 0) { this.press('jump'); this.jumpCd = 20; }
    if (dy < -1 && me.vy < 0 && chance(0.3)) this.flick(dir * 0.3, -1, 2);
  }

  edgeguard(op) {
    const me = this.f;
    const side = sign(op.x) || 1;
    const tx = side * (STAGE.main.half - 1.3);
    if (!me.grounded) { this.sx = sign(tx - me.x); return; }
    if (Math.abs(me.x - tx) > 0.5) { this.sx = sign(tx - me.x); return; }
    this.sx = 0;
    // 崖上がりを狩る
    if (op.state === 'ledgeclimb' || op.state === 'getup' || (op.state === 'attack' && op.moveName === 'ledgeattack')) {
      if (chance(0.3 + this.level * 0.05)) { this.press('shield', 10); this.busy = 10; }
      return;
    }
    const adx = Math.abs(op.x - me.x), dy = op.y - me.y;
    if (op.state !== 'ledge' && adx < 2.2 && dy > -1.5 && dy < 1.5 && chance(0.3 + this.level * 0.05)) {
      this.sx = side; this.press('smash', randi(1, 6)); this.busy = 30; return;
    }
    if (me.def.id === 'illumine' && op.state !== 'ledge' && adx > 3 && chance(0.1)) {
      this.sx = me.facing === side ? 0 : side * 0.3; this.press('special'); this.busy = 30; return;
    }
    // 高レベルは飛び出して空中攻撃
    if (this.level >= 6 && op.state !== 'ledge' && op.y > -3 && adx < 4 && chance(0.05 * (this.level - 5))) {
      this.sx = side; this.press('jump'); this.after(() => { this.sx = side; this.press('attack'); }, 8);
      this.busy = 30;
    }
  }

  recover() {
    const me = this.f;
    const side = sign(me.x) || 1;
    const L = STAGE.ledges.find((l) => l.side === side);
    this.sx = -side;
    this.sy = 0;
    const vyT = me.vy + me.ky;
    const farX = Math.abs(me.x) - STAGE.main.half;
    if (vyT > 0.04 && me.y > -1) return; // 上昇中は待つ
    const noc = me.def.id === 'illumine';
    if (me.jumpsLeft > 0 && this.jumpCd <= 0 && (me.y < 0.8 || farX > 2.5) && (me.y > -4.5 || me.upBUsed || noc)) {
      this.press('jump'); this.jumpCd = noc ? 16 : 22;
      return;
    }
    if (me.upBUsed) return;
    if (me.y < -1.4 || farX > 3.2) {
      if (farX > (noc ? 5 : 4.2) && !me.sideBUsed && me.y > (noc ? -2.6 : -4.2) && me.y < 1.5) {
        this.sx = -side; this.sy = 0; this.press('special');
        return;
      }
      if (me.y < -0.9 || farX > 4) {
        this.sx = -side * 0.3; this.sy = 1;
        this.press('special');
        if (noc) {
          const tx = L.x - side * 0.2, ty = L.y + 0.4;
          let ax = tx - me.x, ay = ty - me.y;
          const d = Math.hypot(ax, ay) || 1;
          ax /= d; ay /= d;
          if (d > 5.4) { ay = Math.max(ay, 0.55); const n = Math.hypot(ax, ay); ax /= n; ay /= n; }
          this.aimAfter = { n: 2, x: ax, y: ay };
        } else {
          this.after(() => { this.sx = -side * 0.8; this.sy = 0; }, 3);
        }
      }
    }
  }

  doLedge() {
    const me = this.f;
    this.sx = 0; this.sy = 0;
    if (this.ledgeWait < 0) this.ledgeWait = randi(6, 50 - this.level * 3);
    if (--this.ledgeWait > 0) return;
    const toward = -me.ledge.side;
    const r = Math.random();
    if (r < 0.4) this.flick(toward, 0, 3);
    else if (r < 0.65) this.press('jump');
    else if (r < 0.85) this.press('attack');
    else this.press('shield');
    this.ledgeWait = 60;
  }

  doHitstun() {
    const me = this.f;
    if (me.pendingLaunch && !this.diSet) {
      this.diSet = true;
      if (chance(this.diP)) {
        const inward = -sign(me.x) || 1;
        this.sx = inward * 0.8; this.sy = 0.6;
      } else { this.sx = rand(-1, 1) * 0.3; this.sy = 0; }
    }
    // 受け身
    const vy = me.vy + me.ky;
    const groundY = Math.abs(me.x) <= STAGE.main.half ? 0 : -99;
    if (!this.techTried && (me.tumble || me.state === 'tumble') && vy < 0 && me.y - groundY < 1.2 + Math.abs(vy) * 4) {
      this.techTried = true;
      if (chance(this.techP)) { this.press('shield'); this.sx = chance(0.5) ? rand(-1, 1) : 0; }
    }
    if (me.state === 'tumble') {
      if (this.offstage()) return this.recover();
      if (chance(0.05)) this.press('jump');
    }
  }

  doThrow(op) {
    const me = this.f;
    if (me.sf < 8 + randi(0, 10)) return;
    const edgeDir = sign(me.x) || me.facing;
    let d;
    if (op && op.damage > 90 && Math.abs(me.x) > 4) d = edgeDir === me.facing ? [me.facing, 0] : [-me.facing, 0];
    else if (chance(0.3)) d = [0, -1];
    else if (chance(0.3)) d = [0, 1];
    else if (chance(0.3)) this.press('attack');
    else d = [me.facing, 0];
    if (d) this.flick(d[0], d[1], 3);
  }

  after(fn, frames) {
    const b = this.b;
    b.later(frames, fn);
  }
}
