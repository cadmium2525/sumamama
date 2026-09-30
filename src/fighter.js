// ファイター: 状態遷移・物理・攻撃・被弾・崖つかまり・つかみ
import * as THREE from 'three';
import { STAGE, MAIN_SURFACE, halfWidthAt, insideSolid } from './stage.js';
import { clamp, approach, sign, DEG, rand } from './util.js';
import { applyPose, track, normalizeRig } from './models/rig.js';
import { Trail } from './render/effects.js';
import { audio } from './audio.js';

export const KB_SCALE = 0.0027;
export const KB_DECAY = 0.0046;
const HW = 0.26; // 体の半幅
export const SHIELD_MAX = 50;
const YAW = Math.PI / 2 - 0.42;

export function calcKB(percent, dmg, weight, kbg, bkb) {
  return ((((percent / 10 + (percent * dmg) / 20) * (200 / (weight + 100)) * 1.4) + 18) * (kbg / 100)) + bkb;
}

const WALKOFF = new Set(['idle', 'walk', 'dash', 'run', 'skid', 'turn', 'crouch', 'hitstun', 'jumpsquat', 'land', 'knockdown', 'tumble']);

export class Fighter {
  constructor(battle, slot, def, { input, variant = 0, color, stocks = 3, cpu = false, label }) {
    this.battle = battle;
    this.slot = slot;
    this.def = def;
    this.s = def.stats;
    this.input = input;
    this.cpu = cpu;
    this.color = new THREE.Color(color);
    this.label = label;
    this.model = def.buildModel(variant);
    battle.scene.add(this.model.root);
    for (const o of this.model.worldObjects) battle.scene.add(o);
    if (this.model.shadow) battle.scene.add(this.model.shadow);
    this.trail = new Trail(battle.scene, this.model.trailColor);
    // シールド
    this.shieldMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 24, 16),
      new THREE.MeshBasicMaterial({ color: this.color.clone().multiplyScalar(0.9), transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending }),
    );
    this.shieldMesh.visible = false;
    battle.scene.add(this.shieldMesh);
    // 復活台
    this.platMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 0.5, 0.18, 24),
      new THREE.MeshBasicMaterial({ color: this.color.clone().multiplyScalar(1.3), transparent: true, opacity: 0.85 }),
    );
    this.platMesh.visible = false;
    battle.scene.add(this.platMesh);

    this.stocks = stocks;
    this.stats = { kos: 0, falls: 0, dealt: 0, taken: 0, sds: 0 };
    this.damage = 0;
    this.animT = 0;
    this.phase = 0;
    this.flashT = 0;
    this.fsReady = false;
    this.visYaw = YAW;
    this.shake = 0;
    this.reset(STAGE.spawns[slot % 2].x, STAGE.spawns[slot % 2].y, slot % 2 === 0 ? 1 : -1);
  }

  reset(x, y, facing) {
    this.x = x; this.y = y; this.prevX = x; this.prevY = y;
    this.vx = 0; this.vy = 0; this.kx = 0; this.ky = 0;
    this.facing = facing;
    this.grounded = true;
    this.surface = MAIN_SURFACE;
    for (const p of STAGE.platforms) if (Math.abs(p.y - y) < 0.01 && x >= p.x1 && x <= p.x2) this.surface = p;
    this.jumpsLeft = this.s.airJumps;
    this.fastfall = false;
    this.state = 'idle'; this.sf = 0;
    this.move = null; this.moveName = ''; this.mf = 0;
    this.hitIds = new Set();
    this.hitlag = 0; this.hitstun = 0; this.tumble = false; this.pendingLaunch = null;
    this.invuln = 0;
    this.shieldHP = SHIELD_MAX;
    this.upBUsed = false; this.sideBUsed = false; this.airdodgeUsed = false;
    this.dropTimer = 0; this.ledgeRegrab = 0; this.ledge = null; this.ledgeIntangUsed = false;
    this.grabbing = null; this.grabbedBy = null; this.grabTimer = 0;
    this.tapTimer = 0; this.jsTap = false;
    this.techWindow = 0; this.techCool = 0;
    this.landLag = 0; this.helplessLag = 20;
    this.charge = 0; this.charging = false; this.chargeDone = false; this.chargeBtn = 'attack';
    this.counterDmg = 0;
    this.djTimer = 0;
    this.lastHitBy = null; this.lastHitTimer = 0;
    this.noGrav = false; this.gravMult = 1;
    this.vars = {};
    this.hidden = false;
  }

  get height() { return this.s.height; }
  get alive() { return this.state !== 'dead' && this.stocks > 0; }

  endHook() {
    const mv = this.move;
    if (mv && mv.onEnd && !this.ending) { this.ending = true; mv.onEnd(this); this.ending = false; }
  }

  setState(s) {
    if (this.state === 'attack' && s !== 'attack') {
      this.endHook();
      this.move = null;
      normalizeRig(this.model.rig);
    }
    this.state = s;
    this.sf = 0;
    this.tapTimer = 0;
    this.hidden = false;
  }

  // ===================== 毎フレーム更新 =====================
  update() {
    this.prevX = this.x; this.prevY = this.y;
    if (this.flashT > 0) this.flashT--;
    if (this.state === 'dead') {
      if (--this.deadTimer <= 0 && this.stocks > 0) this.respawn();
      return;
    }
    if (this.hitlag > 0) {
      this.hitlag--;
      // 被弾中のずらし入力（SDI 簡易）
      if (this.pendingLaunch && this.input.dirPressed) {
        const dp = this.input.dirPressed;
        if (dp.left) this.x -= 0.06; if (dp.right) this.x += 0.06;
        if (dp.up) this.y += 0.06; if (dp.down && !this.grounded) this.y -= 0.06;
      }
      if (this.hitlag === 0 && this.pendingLaunch) this.launch();
      return;
    }
    if (this.invuln > 0) this.invuln--;
    if (this.dropTimer > 0) this.dropTimer--;
    if (this.ledgeRegrab > 0) this.ledgeRegrab--;
    if (this.techWindow > 0) this.techWindow--;
    if (this.techCool > 0) this.techCool--;
    if (this.djTimer > 0) this.djTimer--;
    if (this.lastHitTimer > 0) this.lastHitTimer--; else this.lastHitBy = null;
    if (this.state !== 'shield' && this.state !== 'shieldstun') this.shieldHP = Math.min(SHIELD_MAX, this.shieldHP + 0.09);
    this.sf++;
    this.animT++;
    if (this.fsReady && this.animT % 4 === 0) this.battle.effects.sparkle(this.x, this.y + this.height * 0.5, [0xff7070, 0xffe070, 0x70ff90, 0x70b0ff, 0xd070ff][(this.animT / 4) % 5], 1, 0.7);
    this.noGrav = false;
    this.gravMult = 1;
    this.stateStep();
    this.physics();
    this.collide();
    this.checkLedge();
  }

  stateStep() {
    switch (this.state) {
      case 'idle': return this.stIdle();
      case 'walk': return this.stWalk();
      case 'dash': return this.stDash();
      case 'run': return this.stRun();
      case 'skid': return this.stSkid();
      case 'turn': return this.stTurn();
      case 'crouch': return this.stCrouch();
      case 'jumpsquat': return this.stJumpsquat();
      case 'land': return this.stLand();
      case 'air': return this.stAir();
      case 'tumble': return this.stAir(true);
      case 'helpless': return this.stHelpless();
      case 'airdodge': return this.stAirdodge();
      case 'shield': return this.stShield();
      case 'shieldstun': return this.stShieldstun();
      case 'shieldoff': return this.stTimed(7, 'idle');
      case 'roll': return this.stRoll();
      case 'spotdodge': return this.stTimed(22, 'idle', true);
      case 'hitstun': return this.stHitstun();
      case 'knockdown': return this.stKnockdown();
      case 'getup': return this.stTimed(26, 'idle', true);
      case 'tech': return this.stTimed(22, 'idle', true);
      case 'ledge': return this.stLedge();
      case 'ledgeclimb': return this.stLedgeClimb();
      case 'grabbing': return this.stGrabbing();
      case 'grabbed': return this.stGrabbed();
      case 'shieldbreak': this.friction(); return;
      case 'dizzy': return this.stDizzy();
      case 'respawn': return this.stRespawn();
      case 'attack': return this.updateMove();
      case 'victory': case 'frozen': this.friction(); return;
      case 'trapped': return this.stTrapped();
    }
  }

  // ---------- 汎用 ----------
  friction(mult = 1) { this.vx = approach(this.vx, 0, this.s.traction * mult); }
  drift(mult = 1) {
    const s = this.s, x = this.input.stick.x;
    if (Math.abs(x) > 0.2) this.vx = approach(this.vx, x * s.airSpeed * mult, s.airAccel * Math.max(0.3, mult));
    else this.vx = approach(this.vx, 0, s.airFriction);
  }
  stTimed(n, next, fric = true) {
    if (fric) this.friction(1.2);
    if (this.sf >= n) this.setState(this.grounded ? next : 'air');
  }
  onPlatform() { return this.grounded && this.surface && !this.surface.main; }
  dropCheck() {
    if (this.input.dirPressed.down && this.onPlatform()) {
      this.grounded = false; this.surface = null;
      this.y -= 0.04; this.vy = -0.02;
      this.dropTimer = 12;
      this.setState('air');
      return true;
    }
    return false;
  }

  // ボタンと方向キーの同時押しズレを吸収する（押した直後で方向がニュートラルなら少し待つ）
  waitDir(btn, frames) {
    const inp = this.input;
    return inp.buf[btn] > 7 - frames && Math.hypot(inp.stick.x, inp.stick.y) < 0.3;
  }

  groundActions() {
    const inp = this.input;
    if (inp.buf.special && !this.waitDir('special', 2)) { inp.consume('special'); this.special(); return true; }
    if (inp.buf.grab || (inp.buf.attack && inp.raw.shield)) {
      inp.consume('grab'); inp.consume('attack');
      this.turnToStick();
      this.startMove(this.state === 'dash' || this.state === 'run' ? 'dashgrab' : 'grab');
      return true;
    }
    if (inp.cBuf || (inp.buf.smash && !this.waitDir('smash', 3))) {
      const d = inp.cBuf ? inp.cDir : inp.stick;
      this.chargeBtn = inp.cBuf ? null : 'smash';
      inp.cBuf = 0; inp.consume('smash');
      this.smashAttack(d);
      return true;
    }
    if (inp.buf.attack && !this.waitDir('attack', 1)) { inp.consume('attack'); this.chargeBtn = 'attack'; this.groundAttack(); return true; }
    if (inp.buf.jump || (inp.tapJump && inp.dirBuf.up)) {
      const tap = !inp.buf.jump;
      inp.consume('jump'); inp.consumeDir('up');
      this.setState('jumpsquat');
      this.jsTap = tap;
      return true;
    }
    if (inp.raw.shield) { this.setState('shield'); return true; }
    return false;
  }

  turnToStick() {
    const x = this.input.stick.x;
    if (Math.abs(x) > 0.5) this.facing = sign(x);
  }

  groundAttack() {
    const { x, y } = this.input.stick;
    if (this.state === 'dash' || this.state === 'run') return this.startMove('dashattack');
    if (y > 0.5 && y >= Math.abs(x) * 0.8) return this.startMove('utilt');
    if (y < -0.5 && -y >= Math.abs(x) * 0.8) return this.startMove('dtilt');
    if (Math.abs(x) > 0.4) { this.facing = sign(x); return this.startMove('ftilt'); }
    return this.startMove('jab1');
  }

  smashAttack(d) {
    if (d.y > 0.5 && d.y >= Math.abs(d.x)) return this.startMove('usmash');
    if (d.y < -0.5 && -d.y >= Math.abs(d.x)) return this.startMove('dsmash');
    if (Math.abs(d.x) > 0.3) this.facing = sign(d.x);
    return this.startMove('fsmash');
  }

  aerial(d) {
    if (d.y > 0.5 && d.y >= Math.abs(d.x)) return this.startMove('uair');
    if (d.y < -0.5 && -d.y >= Math.abs(d.x)) return this.startMove('dair');
    if (Math.abs(d.x) > 0.4) return this.startMove(sign(d.x) === this.facing ? 'fair' : 'bair');
    return this.startMove('nair');
  }

  special() {
    const { x, y } = this.input.stick;
    this.chargeBtn = 'special';
    if (this.fsReady && this.def.moves.final) {
      this.fsReady = false;
      if (Math.abs(x) > 0.4) this.facing = sign(x);
      return this.startMove('final');
    }
    if (y > 0.5 && y >= Math.abs(x) * 0.7) return this.startMove('upb');
    if (y < -0.5 && -y >= Math.abs(x)) return this.startMove('downb');
    if (Math.abs(x) > 0.4) {
      if (this.sideBUsed && !this.grounded) return false;
      this.facing = sign(x);
      return this.startMove('sideb');
    }
    return this.startMove('neutralb');
  }

  // ---------- 地上 ----------
  stIdle() {
    if (!this.grounded) return this.setState('air');
    if (this.groundActions()) return;
    if (this.dropCheck()) return;
    const x = this.input.stick.x;
    if (Math.abs(x) > 0.25) {
      if (Math.abs(x) > 0.75) this.startDash(sign(x));
      else { this.facing = sign(x); this.setState('walk'); }
      return;
    }
    if (this.input.stick.y < -0.6) return this.setState('crouch');
    this.friction();
  }
  startDash(d) {
    this.facing = d;
    this.setState('dash');
    this.vx = d * this.s.dashSpeed;
    audio.dash();
    this.battle.effects.dust(this.x - d * 0.3, this.y, 3, -d);
  }
  stWalk() {
    if (!this.grounded) return this.setState('air');
    if (this.groundActions()) return;
    if (this.dropCheck()) return;
    const x = this.input.stick.x;
    if (Math.abs(x) < 0.25) return this.setState('idle');
    if (this.input.stick.y < -0.6) return this.setState('crouch');
    if (Math.abs(x) > 0.75 && (this.input.dirPressed.left || this.input.dirPressed.right)) return this.startDash(sign(x));
    this.facing = sign(x);
    this.vx = approach(this.vx, x * this.s.walkSpeed * 1.3, 0.012);
  }
  stDash() {
    if (!this.grounded) return this.setState('air');
    if (this.groundActions()) return;
    const x = this.input.stick.x;
    if (sign(x) === -this.facing && Math.abs(x) > 0.6) return this.startDash(-this.facing);
    this.vx = approach(this.vx, this.facing * this.s.dashSpeed, 0.05);
    if (this.sf >= this.s.dashFrames) {
      if (sign(x) === this.facing && Math.abs(x) > 0.5) this.setState('run');
      else this.setState('skid');
    }
  }
  stRun() {
    if (!this.grounded) return this.setState('air');
    if (this.groundActions()) return;
    if (this.dropCheck()) return;
    const x = this.input.stick.x;
    if (this.input.stick.y < -0.6) return this.setState('crouch');
    if (Math.abs(x) < 0.3) return this.setState('skid');
    if (sign(x) === -this.facing) return this.setState('turn');
    this.vx = approach(this.vx, this.facing * this.s.runSpeed, 0.02);
    if (this.animT % 16 === 0) this.battle.effects.dust(this.x - this.facing * 0.2, this.y, 1, -this.facing);
  }
  stSkid() {
    if (!this.grounded) return this.setState('air');
    if (this.groundActions()) return;
    const x = this.input.stick.x;
    if (Math.abs(x) > 0.75 && (this.input.dirPressed.left || this.input.dirPressed.right)) return this.startDash(sign(x));
    this.friction(1.6);
    if (this.sf >= 8) this.setState('idle');
  }
  stTurn() {
    if (!this.grounded) return this.setState('air');
    if (this.groundActions()) return;
    this.friction(2.2);
    if (this.sf === 1) this.battle.effects.dust(this.x, this.y, 3, this.facing);
    if (this.sf === 5) this.facing = -this.facing;
    if (this.sf >= 10) {
      const x = this.input.stick.x;
      if (sign(x) === this.facing && Math.abs(x) > 0.5) this.setState('run'); else this.setState('idle');
    }
  }
  stCrouch() {
    if (!this.grounded) return this.setState('air');
    if (this.groundActions()) return;
    if (this.dropCheck()) return;
    if (this.input.stick.y > -0.5) return this.setState('idle');
    this.friction(1.5);
  }
  stJumpsquat() {
    const inp = this.input, s = this.s;
    this.friction(0.6);
    if (!this.grounded) return this.setState('air');
    if (this.jsTap) {
      // 上とほぼ同時に攻撃 → 上強。少し遅れて押した攻撃はジャンプ後の空中攻撃になる
      if (inp.buf.attack && this.sf <= 2) { inp.consume('attack'); this.chargeBtn = 'attack'; return this.startMove('utilt'); }
      if (inp.buf.smash) { inp.consume('smash'); this.chargeBtn = 'smash'; return this.startMove('usmash'); }
      if (inp.buf.special) { inp.consume('special'); return this.special(); }
      if (inp.buf.grab) { inp.consume('grab'); return this.startMove('grab'); }
    } else if (inp.buf.special && inp.stick.y > 0.5) {
      inp.consume('special'); return this.special();
    }
    if (this.sf >= s.jumpsquat) {
      const full = this.jsTap ? inp.raw.y > 0.5 : inp.raw.jump;
      this.vy = full ? s.jumpV : s.hopV;
      const carry = clamp(this.vx * 0.85, -s.airSpeed * 1.2, s.airSpeed * 1.2);
      this.vx = carry + inp.stick.x * s.airSpeed * 0.35;
      this.grounded = false; this.surface = null;
      this.fastfall = false;
      this.setState('air');
      audio.jump();
      this.battle.effects.dust(this.x, this.y, 4, 0);
    }
  }
  stLand() {
    this.friction(1.4);
    if (!this.grounded) return this.setState('air');
    if (this.sf >= this.landLag) this.setState('idle');
  }
  landing(lag) {
    this.setState('land');
    this.landLag = lag;
  }

  // ---------- 空中 ----------
  airActions() {
    const inp = this.input;
    if (inp.buf.special && !this.waitDir('special', 2)) {
      inp.consume('special');
      if (this.special() !== false) return true;
    }
    if (inp.cBuf || (inp.buf.smash && !this.waitDir('smash', 2))) {
      const d = inp.cBuf ? inp.cDir : inp.stick;
      inp.cBuf = 0; inp.consume('smash');
      this.aerial(d);
      return true;
    }
    if (inp.buf.attack || inp.buf.grab) { inp.consume('attack'); inp.consume('grab'); this.aerial(inp.stick); return true; }
    if (inp.buf.shield && !this.airdodgeUsed) { inp.consume('shield'); this.startAirdodge(); return true; }
    if (inp.buf.jump && this.jumpsLeft > 0) { inp.consume('jump'); this.doubleJump(); return true; }
    if (inp.tapJump && inp.dirBuf.up && this.jumpsLeft > 0 && this.tapTimer === 0) {
      inp.consumeDir('up');
      this.tapTimer = 3;
    }
    if (this.tapTimer > 0) {
      this.tapTimer--;
      if (this.tapTimer === 0) { this.doubleJump(); return true; }
    }
    return false;
  }
  doubleJump() {
    const s = this.s;
    this.jumpsLeft--;
    this.vy = s.djV;
    this.ky = Math.max(0, this.ky); this.kx *= 0.5;
    this.vx = this.input.stick.x * s.airSpeed;
    this.fastfall = false;
    this.djTimer = 24;
    this.setState('air');
    audio.djump();
    this.battle.effects.ring(this.x, this.y + 0.1, this.def.color, 1.8, 14);
  }
  fastfallCheck() {
    if (this.input.dirPressed.down && !this.fastfall && this.vy <= 0.03 && !this.grounded) {
      this.fastfall = true;
      this.vy = -this.s.fastFall;
      this.battle.effects.sparkle(this.x, this.y + this.height * 0.5, 0xffffff, 2, 0.3);
    }
  }
  stAir(tumble = false) {
    if (this.grounded) return this.setState('idle');
    if (tumble) this.updateTech();
    if (this.airActions()) return;
    this.drift();
    this.fastfallCheck();
  }
  stHelpless() {
    if (this.grounded) return this.landing(this.helplessLag);
    this.drift(0.65);
    this.fastfallCheck();
  }
  startAirdodge() {
    this.setState('airdodge');
    this.airdodgeUsed = true;
    const { x, y } = this.input.stick;
    const m = Math.hypot(x, y);
    this.fastfall = false;
    if (m > 0.5) {
      this.adDir = true;
      this.vx = (x / m) * 0.3; this.vy = (y / m) * 0.3;
      this.kx = 0; this.ky = 0;
    } else this.adDir = false;
    audio.dodge();
  }
  stAirdodge() {
    if (this.adDir) {
      if (this.sf < 14) { this.noGrav = true; this.vx *= 0.88; this.vy *= 0.88; }
      if (this.sf >= 38) this.setState('air');
    } else {
      this.drift(0.8);
      if (this.sf >= 30) this.setState('air');
    }
    if (this.sf % 3 === 0) this.battle.effects.sparkle(this.x, this.y + this.height * 0.5, 0xffffff, 1, 0.4);
  }

  // ---------- シールド/回避 ----------
  stShield() {
    const inp = this.input;
    if (!this.grounded) return this.setState('air');
    this.friction(1.5);
    this.shieldHP -= 0.13;
    if (this.shieldHP <= 0) return this.shieldBreak();
    if (inp.buf.jump || (inp.tapJump && inp.dirBuf.up)) {
      inp.consume('jump'); inp.consumeDir('up');
      this.setState('jumpsquat'); this.jsTap = false;
      return;
    }
    if (inp.buf.attack || inp.buf.grab) { inp.consume('attack'); inp.consume('grab'); return this.startMove('grab'); }
    if (inp.buf.special && inp.stick.y > 0.5) { inp.consume('special'); return this.special(); }
    const sd = inp.sidePressed();
    if (sd) { inp.consumeDir(sd < 0 ? 'left' : 'right'); return this.startRoll(sd); }
    if (inp.dirBuf.down) { inp.consumeDir('down'); this.setState('spotdodge'); audio.dodge(); return; }
    if (!inp.raw.shield && this.sf >= 4) this.setState('shieldoff');
  }
  stShieldstun() {
    this.friction(0.8);
    if (--this.shieldstun <= 0) this.setState(this.input.raw.shield ? 'shield' : 'shieldoff');
  }
  shieldBreak() {
    audio.shieldBreak();
    this.battle.effects.hitSpark(this.x, this.y + 1, this.color, 1.2);
    this.shieldHP = 30;
    this.setState('shieldbreak');
    this.grounded = false; this.surface = null;
    this.vy = 0.24; this.vx = 0;
    this.battle.shakeCam(0.4);
  }
  stDizzy() {
    this.friction();
    this.dizzyT -= 1 + this.input.mash * 4;
    if (this.animT % 20 === 0) this.battle.effects.sparkle(this.x, this.y + this.height + 0.2, 0xffee88, 1, 0.3);
    if (this.dizzyT <= 0) this.setState('idle');
  }
  startRoll(dir) {
    this.setState('roll');
    this.rollDir = dir;
    audio.dodge();
  }
  stRoll() {
    const f = this.sf;
    if (f >= 3 && f <= 20) this.vx = this.rollDir * this.s.rollSpeed * (f < 16 ? 1 : 0.5);
    else this.friction(2);
    if (f >= 27) { this.facing = -this.rollDir; this.setState(this.grounded ? 'idle' : 'air'); }
  }

  // ---------- 被弾 ----------
  updateTech() {
    if (this.input.pressed.shield && this.techCool === 0) { this.techWindow = 11; this.techCool = 40; }
  }
  stHitstun() {
    this.updateTech();
    this.hitstun--;
    if (this.grounded) this.friction(0.6);
    else if (this.hitstun < 6) this.drift(0.4);
    if (this.hitstun <= 0) {
      if (this.grounded) this.setState('idle');
      else this.setState(this.tumble ? 'tumble' : 'air');
    }
    if (!this.grounded && Math.hypot(this.kx, this.ky) > 0.18 && this.animT % 2 === 0) this.battle.effects.smoke(this.x, this.y + this.height * 0.5);
  }
  stKnockdown() {
    const inp = this.input;
    this.friction(2);
    if (this.sf > 14) {
      if (inp.buf.attack) { inp.consume('attack'); return this.startMove('getupattack'); }
      const sd = inp.sidePressed();
      if (sd) { inp.consumeDir(sd < 0 ? 'left' : 'right'); return this.startRoll(sd); }
      if (inp.dirBuf.up || inp.buf.jump || inp.buf.shield || this.sf > 80) {
        inp.consume('jump'); inp.consume('shield');
        this.setState('getup');
      }
    }
  }

  // ---------- 崖 ----------
  checkLedge() {
    if (this.grounded || this.ledgeRegrab > 0) return;
    const st = this.state;
    let ok = st === 'air' || st === 'helpless' || st === 'tumble' || (st === 'airdodge' && this.sf > 14);
    if (st === 'attack' && this.move && this.move.ledgeGrab !== undefined && this.mf >= this.move.ledgeGrab) ok = true;
    if (!ok) return;
    if (this.vy + this.ky > 0.05 && st !== 'attack') return;
    if (this.input.stick.y < -0.6) return;
    for (const L of STAGE.ledges) {
      const out = (this.x - L.x) * L.side;
      const dy = L.y - this.y;
      if (out < -0.4 || out > 1.15 || dy < 0.45 || dy > this.height * 1.25) continue;
      // すでに誰かがつかんでいたら、その相手を弾く（崖奪い）
      const other = this.battle.fighters.find((f) => f !== this && f.state === 'ledge' && f.ledge === L);
      if (other) {
        if (other.sf < 8) continue;
        other.setState('air');
        other.ledge = null;
        other.vx = L.side * 0.08; other.vy = 0.05;
        other.ledgeRegrab = 40;
      }
      this.grabLedge(L);
      return;
    }
  }
  grabLedge(L) {
    this.move = null;
    this.setState('ledge');
    this.ledge = L;
    this.x = L.x + L.side * 0.32;
    this.y = L.y - this.height * 0.84;
    this.vx = this.vy = this.kx = this.ky = 0;
    this.facing = -L.side;
    this.jumpsLeft = this.s.airJumps;
    this.upBUsed = false; this.sideBUsed = false; this.airdodgeUsed = false;
    this.fastfall = false;
    if (!this.ledgeIntangUsed) { this.invuln = 36; this.ledgeIntangUsed = true; }
    this.input.clearAll();
    audio.ledge();
  }
  stLedge() {
    const inp = this.input, L = this.ledge;
    this.x = L.x + L.side * 0.32;
    this.y = L.y - this.height * 0.84;
    if (this.sf < 7) return;
    const toward = -L.side;
    const sx = inp.stick.x;
    if (inp.buf.jump || inp.dirBuf.up) {
      inp.consume('jump'); inp.consumeDir('up');
      this.setState('air');
      this.ledge = null;
      this.y = L.y - this.height * 0.5;
      this.vy = this.s.jumpV * 1.02;
      this.vx = toward * 0.07;
      this.ledgeRegrab = 20;
      audio.jump();
      return;
    }
    if (inp.buf.attack || inp.buf.special) { inp.consume('attack'); inp.consume('special'); return this.startClimb('attack'); }
    if (inp.buf.shield) { inp.consume('shield'); return this.startClimb('roll'); }
    if ((sign(sx) === toward && Math.abs(sx) > 0.6)) return this.startClimb('climb');
    if (inp.dirBuf.down || (sign(sx) === -toward && Math.abs(sx) > 0.6) || this.sf > 330) {
      inp.consumeDir('down');
      this.setState('air');
      this.ledge = null;
      this.x += L.side * 0.15;
      this.ledgeRegrab = 24;
      return;
    }
  }
  startClimb(action) {
    this.climbAction = action;
    this.climbFrom = { x: this.x, y: this.y };
    this.setState('ledgeclimb');
  }
  stLedgeClimb() {
    const L = this.ledge;
    const n = 16;
    const t = Math.min(1, this.sf / n);
    const tx = L.x - L.side * 0.55;
    this.x = this.climbFrom.x + (tx - this.climbFrom.x) * t;
    this.y = this.climbFrom.y + (L.y - this.climbFrom.y) * Math.min(1, t * 1.6);
    if (this.sf >= n) {
      this.x = tx; this.y = L.y;
      this.grounded = true; this.surface = MAIN_SURFACE;
      this.ledge = null;
      this.vx = 0; this.vy = 0;
      if (this.climbAction === 'attack') this.startMove('ledgeattack');
      else if (this.climbAction === 'roll') this.startRoll(-L.side);
      else this.setState('idle');
    }
  }

  // ---------- つかみ ----------
  grabOpponent(v) {
    if (this.state !== 'attack') return;
    this.move = null;
    this.setState('grabbing');
    this.grabbing = v;
    this.grabTimer = Math.min(240, 80 + v.damage * 0.9);
    v.move = null;
    v.setState('grabbed');
    v.grabbedBy = this;
    v.vx = v.vy = v.kx = v.ky = 0;
    v.pendingLaunch = null;
    v.facing = -this.facing;
    this.vx = 0;
    audio.grab();
  }
  holdVictim(off) {
    const v = this.grabbing;
    if (!v) return;
    const o = off || this.def.grabHold;
    v.x = this.x + this.facing * o[0];
    v.y = this.y + o[1];
    v.facing = -this.facing;
    v.grounded = false;
  }
  stGrabbing() {
    const v = this.grabbing, inp = this.input;
    if (!v || v.state !== 'grabbed') { this.grabbing = null; return this.setState('idle'); }
    this.friction(2);
    this.holdVictim();
    this.grabTimer -= 1 + v.input.mash * 5;
    if (this.grabTimer <= 0) return this.releaseGrab();
    if (this.sf < 6) return;
    if (inp.buf.attack) { inp.consume('attack'); return this.startMove('pummel', true); }
    const { x, y } = inp.stick;
    if (y > 0.6) return this.startMove('uthrow', true);
    if (y < -0.6) return this.startMove('dthrow', true);
    if (Math.abs(x) > 0.6) return this.startMove(sign(x) === this.facing ? 'fthrow' : 'bthrow', true);
    if (inp.cBuf) {
      const d = inp.cDir; inp.cBuf = 0;
      if (d.y > 0.6) return this.startMove('uthrow', true);
      if (d.y < -0.6) return this.startMove('dthrow', true);
      return this.startMove(sign(d.x) === this.facing ? 'fthrow' : 'bthrow', true);
    }
  }
  releaseGrab() {
    const v = this.grabbing;
    this.grabbing = null;
    if (v && v.state === 'grabbed') {
      v.grabbedBy = null;
      v.setState('hitstun');
      v.hitstun = 18; v.tumble = false;
      v.y = this.y; v.grounded = this.grounded; v.surface = this.surface;
      v.kx = this.facing * 0.14; v.ky = 0;
      if (!v.grounded) v.vy = 0.1;
    }
    this.landing(14);
    this.vx = -this.facing * 0.08;
  }
  stGrabbed() {
    const g = this.grabbedBy;
    if (!g || (g.state !== 'grabbing' && !(g.state === 'attack' && g.grabbing === this))) {
      this.grabbedBy = null;
      this.setState('air');
    }
  }
  doThrow(th) {
    const v = this.grabbing;
    if (!v) return;
    this.grabbing = null;
    v.grabbedBy = null;
    v.setState('hitstun');
    this.battle.applyHit(this, v, { dmg: th.dmg, ang: th.ang, bkb: th.bkb, kbg: th.kbg, sfx: 'hit', throwHit: true }, v.x, v.y + v.height * 0.5, this.facing);
    audio.throwS();
  }

  // ---------- 技 ----------
  startMove(name, keepGrab = false) {
    const mv = this.def.moves[name];
    if (!mv) return false;
    if (!keepGrab) {
      if (this.grabbing && name !== 'pummel') this.grabbing = null;
    }
    if (this.state === 'attack') { this.endHook(); normalizeRig(this.model.rig); }
    this.state = 'attack';
    this.sf = 0;
    this.tapTimer = 0;
    this.move = mv;
    this.moveName = name;
    this.mf = -1;
    this.hitIds = new Set();
    this.charge = 0; this.charging = false; this.chargeDone = false;
    this.vars = {};
    this.hidden = false;
    if (mv.onStart) mv.onStart(this);
    this.updateMove();
    return true;
  }
  chargeHeld() {
    const b = this.chargeBtn;
    return b ? this.input.raw[b] : false;
  }
  get chargeRatio() { return this.move && this.move.charge ? this.charge / this.move.charge.max : 0; }
  updateMove() {
    const mv = this.move;
    if (!mv) return this.setState(this.grounded ? 'idle' : 'air');
    if (this.charging) {
      if (this.chargeHeld() && this.charge < mv.charge.max) {
        this.charge++;
        this.moveGravity(mv);
        if (this.grounded) this.friction(); else this.drift(0.4);
        if (this.charge % 6 === 0) this.battle.effects.sparkle(this.x, this.y + this.height * 0.6, this.def.color, 1, 0.5);
        if (this.charge % 12 === 0) audio.charge();
        if (mv.onCharge) mv.onCharge(this);
        return;
      }
      this.charging = false;
    }
    this.mf++;
    const f = this.mf;
    if (mv.charge && f === mv.charge.f && !this.chargeDone) {
      this.chargeDone = true;
      if (this.chargeHeld()) { this.charging = true; this.charge = 0; }
    }
    this.moveGravity(mv);
    // 既定の移動
    if (this.grounded) { if (!mv.keepVel) this.friction(mv.friction ?? 1); }
    else if (!mv.noDrift) this.drift(mv.drift ?? (mv.aerial ? 1 : 0.6));
    if (mv.aerial) this.fastfallCheck();
    if (mv.sfx && mv.sfx[0] === f) audio[mv.sfx[1]] ? audio[mv.sfx[1]](mv.sfx[2] ?? 0.5) : null;
    if (mv.hold && this.grabbing) this.holdVictim(mv.hold(f, this));
    else if (this.grabbing && (this.moveName === 'pummel' || mv.throwHit)) this.holdVictim();
    if (mv.pummelAt === f && this.grabbing) {
      const v = this.grabbing;
      v.damage = Math.min(999, v.damage + mv.pummelDmg);
      this.stats.dealt += mv.pummelDmg; v.stats.taken += mv.pummelDmg;
      v.flashT = 6;
      this.battle.effects.hitSpark(v.x, v.y + v.height * 0.6, this.color, 0.2);
      audio.hit(0.2);
      this.hitlag = 4; v.hitlag = 0;
    }
    if (mv.throwHit && f === mv.throwAt) this.doThrow(mv.throwHit);
    if (mv.onFrame) mv.onFrame(this, f);
    if (this.state !== 'attack' || this.move !== mv) return;
    if (mv.next && inWin(f, mv.nextWin) && this.input.buf.attack) {
      this.input.consume('attack');
      this.startMove(mv.next);
      return;
    }
    if (mv.iasa && f >= mv.iasa && this.grounded) {
      if (this.groundActionsLite()) return;
    }
    if (f >= mv.total) this.endMove();
  }
  groundActionsLite() {
    const inp = this.input;
    if (inp.buf.attack || inp.buf.special || inp.buf.jump || inp.buf.smash || inp.raw.shield || Math.abs(inp.stick.x) > 0.7) {
      this.move = null;
      this.setState('idle');
      this.stIdle();
      return true;
    }
    return false;
  }
  moveGravity(mv) {
    if (mv.noGravity && inWin(this.mf, mv.noGravity)) { this.noGrav = true; }
    if (mv.fall !== undefined) this.gravMult = mv.fall;
  }
  endMove() {
    const mv = this.move;
    this.endHook();
    if (this.moveName === 'pummel' && this.grabbing) {
      this.move = null;
      this.state = 'grabbing';
      this.sf = 10;
      normalizeRig(this.model.rig);
      return;
    }
    this.move = null;
    if (this.grounded) this.setState(mv.endState || 'idle');
    else {
      this.setState(mv.helpless ? 'helpless' : 'air');
      if (mv.helpless) this.helplessLag = mv.helplessLag || 20;
    }
  }
  landDuringMove(vyImpact) {
    const mv = this.move;
    if (mv.onLand) {
      const r = mv.onLand(this);
      if (r === 'continue') return;
    }
    if (mv.landContinue) return;
    let lag;
    if (mv.aerial) {
      const ac = (mv.acBefore !== undefined && this.mf < mv.acBefore) || (mv.acAfter !== undefined && this.mf >= mv.acAfter);
      lag = ac ? 4 : mv.landLag || 8;
      if (!ac && mv.landHit) {
        // 着地攻撃
        this.startMove(mv.landHit);
        return;
      }
    } else if (mv.helpless) lag = mv.helplessLag || 20;
    else lag = mv.landLag || 10;
    this.endHook();
    this.move = null;
    this.landing(lag);
    audio.land();
  }

  // 攻撃判定（ワールド座標）
  activeHitboxes() {
    const out = [];
    const mv = this.move;
    if (this.state !== 'attack' || !mv || !mv.hit || this.charging) return out;
    const f = this.mf;
    for (const h of mv.hit) {
      if (f < h.f[0] || f > h.f[1]) continue;
      let lx = h.x, ly = h.y;
      if (h.path) {
        const t = h.f[1] > h.f[0] ? (f - h.f[0]) / (h.f[1] - h.f[0]) : 0;
        lx = h.path[0][0] + (h.path[1][0] - h.path[0][0]) * t;
        ly = h.path[0][1] + (h.path[1][1] - h.path[0][1]) * t;
      }
      out.push({ h, x: this.x + lx * this.facing, y: this.y + ly, r: h.r });
    }
    return out;
  }

  hurtbox() {
    const s = this.s;
    let h = s.height, r = s.radius;
    if (this.state === 'crouch' || (this.state === 'attack' && this.moveName === 'dtilt')) h *= 0.65;
    if (this.state === 'knockdown') h *= 0.4;
    return { ax: this.x, ay: this.y + r, bx: this.x, by: this.y + h - r, r };
  }

  isIntangible() {
    if (this.invuln > 0) return true;
    const f = this.sf;
    switch (this.state) {
      case 'roll': return f >= 3 && f <= 18;
      case 'spotdodge': return f >= 3 && f <= 16;
      case 'airdodge': return f >= 2 && f <= (this.adDir ? 20 : 24);
      case 'getup': return f <= 20;
      case 'tech': return f <= 18;
      case 'ledgeclimb': return true;
      case 'respawn': case 'dead': return true;
      case 'attack': {
        const mv = this.move;
        return !!(mv && mv.intang && inWin(this.mf, mv.intang));
      }
    }
    return false;
  }
  inWindow(key) {
    return this.state === 'attack' && this.move && this.move[key] && inWin(this.mf, this.move[key]);
  }

  // 被弾（バトル側から呼ばれる）
  receiveKnockback(kb, ang, dir, dmg, attacker) {
    const hitlag = Math.min(20, Math.floor(dmg * 0.45 + 4));
    if (this.grabbing) this.releaseGrabQuiet();
    if (this.grabbedBy) { const g = this.grabbedBy; this.grabbedBy = null; if (g.grabbing === this) g.grabbing = null; }
    this.endHook();
    this.move = null;
    this.setState('hitstun');
    this.pendingLaunch = { kb, ang, dir };
    this.hitlag = hitlag;
    this.hitstun = Math.floor(kb * 0.4);
    this.tumble = kb >= 80;
    this.vx = 0; this.vy = 0; this.kx = 0; this.ky = 0;
    this.fastfall = false;
    this.upBUsed = false; this.sideBUsed = false; this.airdodgeUsed = false;
    this.charging = false;
    this.flashT = 8;
    this.lastHitBy = attacker;
    this.lastHitTimer = 600;
    return hitlag;
  }
  releaseGrabQuiet() {
    const v = this.grabbing;
    this.grabbing = null;
    if (v && v.state === 'grabbed') { v.grabbedBy = null; v.setState('air'); v.vy = 0.12; }
  }
  launch() {
    const { kb, ang, dir, link } = this.pendingLaunch;
    this.pendingLaunch = null;
    if (link) {
      this.kx = link.vx + (link.x + link.facing * 0.35 - this.x) * 0.12;
      this.ky = Math.max(0, link.vy) + (link.y + 1.3 - this.y) * 0.12;
      this.vy = 0;
      if (this.ky > 0.01) { this.grounded = false; this.surface = null; this.y += 0.02; }
      return;
    }
    let a = ang * DEG;
    let lx = Math.cos(a) * dir, ly = Math.sin(a);
    // DI（ふっとばし方向を最大15度ずらす）
    if (kb > 30) {
      const sx = this.input.stick.x, sy = this.input.stick.y;
      const perp = clamp(sx * -ly + sy * lx, -1, 1);
      const d = perp * 15 * DEG;
      const c = Math.cos(d), s = Math.sin(d);
      const nx = lx * c - ly * s, ny = lx * s + ly * c;
      lx = nx; ly = ny;
    }
    let vx = lx * kb * KB_SCALE, vy = ly * kb * KB_SCALE;
    if (this.grounded) {
      if (vy < 0) {
        if (kb > 70) vy = -vy * 0.75; else vy = 0;
      }
      if (vy > 0.03 || this.tumble) { this.grounded = false; this.surface = null; this.y += 0.02; }
      else vy = 0;
    }
    this.kx = vx; this.ky = vy;
  }

  // ---------- 物理 ----------
  physics() {
    const s = this.s;
    const st = this.state;
    if (st === 'ledge' || st === 'grabbed' || st === 'ledgeclimb' || st === 'respawn' || st === 'dead' || st === 'trapped') return;
    if (this.grounded) {
      this.vy = 0;
      if (this.kx) this.kx = approach(this.kx, 0, KB_DECAY + s.traction * 0.8);
      this.ky = 0;
    } else {
      if (!this.noGrav) {
        if (this.fastfall && this.vy <= 0) this.vy = -s.fastFall;
        else this.vy = Math.max(this.vy - s.gravity * this.gravMult, -s.fallSpeed);
      } else if (this.noGrav) {
        // 技側で vy を管理
      }
      const m = Math.hypot(this.kx, this.ky);
      if (m > 0) {
        const nm = Math.max(0, m - KB_DECAY);
        this.kx *= nm / m; this.ky *= nm / m;
      }
    }
    this.px = this.x; this.py = this.y;
    this.x += this.vx + this.kx;
    this.y += this.vy + this.ky;
  }

  collide() {
    const st = this.state;
    if (st === 'ledge' || st === 'grabbed' || st === 'ledgeclimb' || st === 'respawn' || st === 'dead' || st === 'trapped') return;
    const px = this.px, py = this.py;
    const plats = this.battle.stage.activePlatforms;
    if (this.grounded) {
      const s = this.surface || MAIN_SURFACE;
      this.y = s.y;
      if (this.x < s.x1 || this.x > s.x2) {
        const canFall = WALKOFF.has(st) || (st === 'attack' && this.move && this.move.canLeaveGround);
        if (canFall) {
          this.grounded = false; this.surface = null;
          if (st === 'attack') { /* 技継続 */ }
          else if (st === 'hitstun' || st === 'tumble') { /* そのまま */ }
          else if (st === 'knockdown') this.setState('air');
          else if (st !== 'jumpsquat') this.setState('air');
        } else {
          this.x = clamp(this.x, s.x1, s.x2);
          this.vx = 0; this.kx = 0;
        }
      }
    } else {
      const vyT = this.y - py;
      if (vyT <= 0) {
        const m = STAGE.main;
        if (py >= m.top - 1e-6 && this.y < m.top && Math.abs(this.x) <= m.half + 0.08) {
          this.x = clamp(this.x, -m.half, m.half);
          this.land(MAIN_SURFACE, vyT);
          return;
        }
        if (this.dropTimer <= 0 && !(this.input.stick.y < -0.6 && (st === 'air' || st === 'tumble') && this.fastfall)) {
          for (const p of plats) {
            if (py >= p.y - 1e-6 && this.y < p.y && this.x >= p.x1 - 0.05 && this.x <= p.x2 + 0.05) {
              this.x = clamp(this.x, p.x1, p.x2);
              this.land(p, vyT);
              return;
            }
          }
        }
      }
      this.resolveSolid(px, py);
    }
  }

  resolveSolid(px, py) {
    const h = this.height;
    const m = STAGE.main;
    for (let it = 0; it < 2; it++) {
      let hit = false;
      for (const k of [0.05, 0.5, 0.95]) {
        const yy = this.y + h * k;
        const w = halfWidthAt(yy);
        if (w < 0) continue;
        const pen = w + HW - Math.abs(this.x);
        if (pen <= 0) continue;
        // 下から天井にぶつかった
        const prevHead = py + h;
        if (Math.abs(this.x) < m.bottomHalf + HW && prevHead <= m.bottom + 0.25 && k > 0.5) {
          this.y = m.bottom - h - 0.01;
          if (this.vy > 0) this.vy = 0;
          if (this.ky > 0) this.ky = this.state === 'hitstun' ? -this.ky * 0.4 : 0;
        } else {
          const sgn = sign(this.x) || sign(px) || 1;
          this.x = sgn * (w + HW + 0.002);
          if (sign(this.vx) === -sgn) this.vx = 0;
          if (sign(this.kx) === -sgn) this.kx = (this.state === 'hitstun') ? -this.kx * 0.4 : 0;
        }
        hit = true;
        break;
      }
      if (!hit) break;
    }
  }

  land(surf, vyImpact) {
    const s = this.s;
    this.grounded = true;
    this.surface = surf;
    this.y = surf.y;
    this.vy = 0;
    this.jumpsLeft = s.airJumps;
    this.fastfall = false;
    this.upBUsed = false; this.sideBUsed = false; this.airdodgeUsed = false;
    this.ledgeIntangUsed = false;
    this.djTimer = 0;
    const st = this.state;
    if (st === 'hitstun' || st === 'tumble') {
      const hard = st === 'tumble' || this.tumble;
      if (hard) {
        this.ky = 0;
        if (this.techWindow > 0) {
          this.techWindow = 0;
          this.kx = 0;
          audio.tech();
          this.battle.effects.sparkle(this.x, this.y + 0.5, 0xffffff, 6, 0.6);
          const sx = this.input.stick.x;
          if (Math.abs(sx) > 0.5) this.startRoll(sign(sx)); else this.setState('tech');
          return;
        }
        this.kx *= 0.5;
        this.setState('knockdown');
        this.battle.effects.dust(this.x, this.y, 6, 0);
        audio.land();
        this.battle.shakeCam(0.08);
        return;
      }
      this.ky = 0;
      return; // 軽いひるみはそのまま地上で継続
    }
    this.ky = 0;
    this.kx *= 0.5;
    if (st === 'attack') return this.landDuringMove(vyImpact);
    if (st === 'shieldbreak') { this.setState('dizzy'); this.dizzyT = 200; return; }
    if (st === 'helpless') { this.landing(this.helplessLag); audio.land(); return; }
    if (st === 'airdodge') { this.landing(this.adDir ? 10 : 3); return; }
    if (st === 'grabbed') return;
    this.landing(3);
    audio.land();
    if (vyImpact < -0.12) this.battle.effects.dust(this.x, this.y, 4, 0);
  }

  stTrapped() {
    const t = this.trap;
    if (!t || !t.by || t.by.state !== 'attack' || !t.by.move || !t.by.move.fs) { this.trap = null; return this.setState('air'); }
    // 中心へ引き寄せられる
    this.x += (t.x - this.x) * 0.08;
    this.y += (t.y - this.height * 0.5 - this.y) * 0.08;
  }

  // ---------- 撃墜/復活 ----------
  die() {
    this.endHook();
    this.state = 'dead';
    this.move = null;
    this.deadTimer = 80;
    this.stocks--;
    this.stats.falls++;
    if (this.fsReady) { this.fsReady = false; this.battle.app.hud.setFs(this.slot, false); }
    this.model.root.visible = false;
    this.shieldMesh.visible = false;
    this.grabbing = null;
    if (this.grabbedBy) { this.grabbedBy.grabbing = null; this.grabbedBy = null; }
  }
  respawn() {
    const r = STAGE.respawn;
    this.reset(r.x, r.y, this.slot % 2 === 0 ? 1 : -1);
    this.damage = 0;
    this.state = 'respawn';
    this.grounded = false;
    this.surface = null;
    this.model.root.visible = true;
    this.model.update(1 / 60, { vx: 0, vy: 0, snap: true });
  }
  stRespawn() {
    const inp = this.input;
    const r = STAGE.respawn;
    this.x = r.x; this.y = r.y;
    const any = inp.buf.jump || inp.buf.attack || inp.buf.special || inp.buf.shield || Math.abs(inp.stick.x) > 0.5 || inp.stick.y < -0.5;
    if ((this.sf > 40 && any) || this.sf > 300) {
      this.setState('air');
      this.invuln = 120;
      this.vy = 0;
      this.jumpsLeft = this.s.airJumps;
    }
  }

  // ===================== アニメーション/描画 =====================
  animate() {
    const A = this.def.anims;
    const st = this.state;
    let pose, alpha = 0.3;
    const f = this.sf;
    switch (st) {
      case 'idle': case 'respawn': pose = A.idle(this.animT); alpha = 0.22; break;
      case 'walk': this.phase += Math.abs(this.vx) * 4.2; pose = A.walk(this.phase); break;
      case 'dash': case 'run': this.phase += Math.abs(this.vx) * 3.2; pose = A.run(this.phase); alpha = 0.4; break;
      case 'skid': case 'turn': pose = A.skid(); alpha = 0.4; break;
      case 'crouch': pose = A.crouch(this.animT); alpha = 0.4; break;
      case 'jumpsquat': case 'land': pose = A.squat(); alpha = 0.55; break;
      case 'air': case 'tumble':
        if (st === 'tumble') { pose = A.tumbleIdle(this.animT); alpha = 0.2; break; }
        if (this.djTimer > 0) { pose = A.djump(24 - this.djTimer); alpha = 0.45; }
        else pose = this.vy > 0.02 ? A.jump() : A.fall(this.animT);
        alpha = this.djTimer > 0 ? 0.45 : 0.15;
        break;
      case 'helpless': pose = A.helpless(this.animT); alpha = 0.2; break;
      case 'hitstun': pose = this.tumble ? A.tumble(this.animT) : A.hurt(); alpha = this.tumble ? 0.5 : 0.6; break;
      case 'shield': case 'shieldstun': case 'shieldoff': pose = A.shield(); alpha = 0.5; break;
      case 'roll': pose = A.roll(f, this.rollDir === this.facing); alpha = 0.6; break;
      case 'spotdodge': pose = A.spotdodge(f); alpha = 0.5; break;
      case 'airdodge': pose = A.airdodge(f); alpha = 0.4; break;
      case 'ledge': pose = A.ledge(this.animT); alpha = 0.4; break;
      case 'ledgeclimb': pose = A.climb(f); alpha = 0.5; break;
      case 'knockdown': pose = A.knockdown(); alpha = 0.4; break;
      case 'getup': case 'tech': pose = A.getup(f); alpha = 0.4; break;
      case 'grabbing': pose = A.hold(); alpha = 0.4; break;
      case 'grabbed': case 'trapped': pose = A.grabbed(this.animT); alpha = 0.4; break;
      case 'shieldbreak': case 'dizzy': pose = A.dizzy(this.animT); alpha = 0.3; break;
      case 'victory': pose = A.victory(f); alpha = 0.3; break;
      case 'frozen': pose = A.idle(this.animT); alpha = 0.2; break;
      case 'attack': {
        const mv = this.move;
        pose = mv && mv.anim ? track(mv.anim, Math.max(0, this.mf)) : A.idle(this.animT);
        alpha = mv && mv.alpha !== undefined ? mv.alpha : 0.55;
        break;
      }
      default: pose = A.idle(this.animT);
    }
    applyPose(this.model.rig, pose, alpha);
  }

  render(alpha, dt) {
    const m = this.model;
    if (this.state === 'dead') {
      m.root.visible = false;
      if (m.shadow) m.shadow.visible = false;
      this.shieldMesh.visible = false;
      this.platMesh.visible = false;
      this.trail.update(null, false);
      return;
    }
    m.root.visible = !this.hidden;
    const x = this.prevX + (this.x - this.prevX) * alpha;
    const y = this.prevY + (this.y - this.prevY) * alpha;
    let sx = 0, sy = 0;
    if (this.hitlag > 0 && this.pendingLaunch) { sx = rand(-0.07, 0.07); sy = rand(-0.04, 0.04); }
    m.root.position.set(x + sx, y + sy, 0);
    this.updateShadow(x, y);
    // 向き
    const target = this.facing * YAW;
    this.visYaw += (target - this.visYaw) * 0.35;
    m.root.rotation.y = this.visYaw;
    // 点滅/光
    let fa = 0;
    const fc = new THREE.Color(1, 1, 1);
    if (this.flashT > 0) { fa = 0.7 * (this.flashT / 8); fc.set(0xffffff); }
    else if (this.fsReady) { fa = 0.3 + 0.2 * Math.sin(this.animT * 0.3); fc.setHSL((this.animT * 0.01) % 1, 1, 0.6); }
    else if (this.state === 'attack' && this.move && this.move.fs) { fa = 0.25; fc.set(this.def.color); }
    else if (this.charging) { fa = 0.25 + 0.25 * Math.sin(this.animT * 0.6); fc.set(0xffffaa); }
    else if (this.invuln > 0 && this.state !== 'respawn' && this.state !== 'ledge') { fa = (Math.floor(this.animT / 3) % 2) * 0.5; fc.set(0xffffff); }
    else if (this.state === 'respawn') { fa = 0.25 + 0.15 * Math.sin(this.animT * 0.2); fc.copy(this.color); }
    else if (this.state === 'helpless') { fa = 0.35; fc.set(0x000000); }
    else if (this.inWindow('counter') || this.inWindow('reflect')) { fa = 0.35; fc.set(0x9fe8ff); }
    else if (this.inWindow('armor')) { fa = 0.3; fc.set(0xffd060); }
    m.setFlash(fc, fa);
    m.update(dt, { vx: this.vx + this.kx, vy: this.vy + this.ky });
    // 軌跡
    const mv = this.move;
    const tr = mv && mv.trail && this.state === 'attack' && inWin(this.mf, mv.trailF || [0, 999]) && !this.charging;
    this.trail.update(tr ? m.trails[mv.trail] : null, tr);
    // シールド
    if (this.state === 'shield' || this.state === 'shieldstun') {
      const r = 0.35 + 0.75 * (this.shieldHP / SHIELD_MAX);
      this.shieldMesh.visible = true;
      this.shieldMesh.position.set(x, y + this.height * 0.52, 0);
      this.shieldMesh.scale.setScalar(r * (this.height / 1.8));
      this.shieldMesh.material.opacity = 0.28 + 0.2 * (this.state === 'shieldstun' ? 1 : 0);
    } else this.shieldMesh.visible = false;
    // 復活台
    if (this.state === 'respawn') {
      this.platMesh.visible = true;
      this.platMesh.position.set(x, y - 0.09, 0);
      this.platMesh.rotation.y += 0.05;
    } else this.platMesh.visible = false;
  }

  // 足元の影: 真下の床に落とす（高いほど小さく薄く）
  updateShadow(x, y) {
    const sh = this.model.shadow;
    if (!sh) return;
    let gy = null;
    if (Math.abs(x) <= STAGE.main.half + 0.1 && y >= -0.05) gy = 0;
    for (const p of this.battle.stage.activePlatforms) {
      if (x >= p.x1 - 0.1 && x <= p.x2 + 0.1 && y >= p.y - 0.05 && (gy === null || p.y > gy)) gy = p.y;
    }
    const hidden = this.state === 'dead' || gy === null || this.hidden;
    sh.visible = !hidden;
    if (hidden) return;
    const h = Math.max(0, y - gy);
    const k = Math.max(0.25, 1 - h / 6);
    sh.position.set(x, gy + 0.012, 0.05);
    sh.scale.setScalar(k);
    sh.children[0].material.opacity = 0.75 * k;
  }

  dispose() {
    const sc = this.battle.scene;
    sc.remove(this.model.root);
    for (const o of this.model.worldObjects) sc.remove(o);
    if (this.model.shadow) sc.remove(this.model.shadow);
    this.model.dispose();
    this.trail.dispose();
    sc.remove(this.shieldMesh);
    sc.remove(this.platMesh);
    for (const m of [this.shieldMesh, this.platMesh]) { m.geometry.dispose(); m.material.dispose(); }
  }
}

export function inWin(f, w) { return w && f >= w[0] && f <= w[1]; }
