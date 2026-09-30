// 1試合分の進行: 入力→ファイター更新→当たり判定→撃墜判定→カメラ
import * as THREE from 'three';
import { Fighter, calcKB, KB_SCALE, KB_DECAY } from './fighter.js';
import { CpuController } from './ai.js';
import { PlayerInput, blankRaw, KEYMAPS, readGamepad } from './input.js';
import { STAGE, insideSolid } from './stage.js';
import { CHARS } from './chars/index.js';
import { audio } from './audio.js';
import { clamp, sign, distPointSegment, DEG, rand } from './util.js';
import { softTexture } from './render/toon.js';
import { SmashBall, EclipseSphere, makeSolarWave, fsLabel } from './smashball.js';

export const PLAYER_COLORS = [0xff4a5a, 0x3f8cff, 0xffd23a, 0x3fdc6a];
export const PLAYER_CSS = ['#ff4a5a', '#3f8cff', '#ffd23a', '#3fdc6a'];

class Projectile {
  constructor(battle, owner, o) {
    this.b = battle;
    this.owner = owner;
    Object.assign(this, o);
    this.hitIds = new Set();
    this.dead = false;
    this.age = 0;
    if (o.kind === 'arrow') {
      // 漆黒の矢: 黒い矢柄＋紫に光る矢じり
      const g = new THREE.Group();
      const len = 0.75 + o.r;
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, len, 6), new THREE.MeshBasicMaterial({ color: 0x14081c }));
      shaft.rotation.z = Math.PI / 2;
      const head = new THREE.Mesh(new THREE.ConeGeometry(0.06 + o.r * 0.12, 0.22, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(o.color).multiplyScalar(1.5) }));
      head.rotation.z = -Math.PI / 2; head.position.x = len / 2 + 0.08;
      const fl = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 3), new THREE.MeshBasicMaterial({ color: 0x2a1040 }));
      fl.rotation.z = -Math.PI / 2; fl.position.x = -len / 2 + 0.05; fl.scale.set(1, 1, 0.2);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: o.color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      glow.scale.setScalar(0.5 + o.r * 2); glow.position.x = len / 2;
      g.add(shaft, head, fl, glow);
      g.position.set(o.x, o.y, 0.25);
      g.rotation.z = Math.atan2(o.vy, o.vx);
      this.mesh = g;
      battle.scene.add(g);
      return;
    }
    if (o.kind === 'flame') {
      // 火炎ブレスの炎（広がりながら減速して消える）
      const g = new THREE.Group();
      const outer = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: 0xff4a0a, transparent: true, depthWrite: false }));
      const inner = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(0xffc030), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      g.add(outer, inner);
      g.position.set(o.x, o.y, 0.3);
      this.outer = outer; this.inner = inner; this.maxLife = o.life;
      this.mesh = g;
      battle.scene.add(g);
      return;
    }
    if (o.kind === 'fswave') {
      this.mesh = makeSolarWave(o.color, o.core);
      this.mesh.position.set(o.x, o.y, 0.3);
      if (o.vx < 0) this.mesh.rotation.y = Math.PI;
      battle.scene.add(this.mesh);
      return;
    }
    const g = new THREE.Group();
    const core = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(o.core || 0xffffff).multiplyScalar(1.4) }));
    core.scale.setScalar(o.r * 0.55);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: o.color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    glow.scale.setScalar(o.r * 4);
    const shell = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(o.color).multiplyScalar(1.1), transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    shell.scale.setScalar(o.r);
    g.add(shell, core, glow);
    g.position.set(o.x, o.y, 0.2);
    this.mesh = g;
    this.shell = shell;
    battle.scene.add(g);
  }
  update() {
    this.age++;
    this.px = this.x; this.py = this.y;
    this.x += this.vx; this.y += this.vy;
    this.life--;
    if (this.kind === 'flame') {
      this.vx *= 0.94; this.vy *= 0.94;
      this.r = Math.min(this.rMax || 0.7, this.r + 0.03);
      if (this.age % 3 === 0) this.b.effects.spawn({ x: this.x, y: this.y + 0.1, z: 0.2, vy: 0.015, life: 18, size: this.r * 0.8, size1: 0.1, color: 0x3a2a2a, additive: false, opacity: 0.35 });
      if (this.life <= 0 || insideSolid(this.x, this.y)) this.kill(false);
      return;
    }
    if (this.kind === 'arrow') {
      if (this.age % 2 === 0) this.b.effects.spawn({ x: this.x - this.vx * 1.5, y: this.y, z: 0.2, life: 12, size: 0.25 + this.r, size1: 0.02, color: this.color });
      if (this.life <= 0 || insideSolid(this.x, this.y) || Math.abs(this.x) > 30) this.kill(true);
      return;
    }
    if (this.kind === 'fswave') {
      for (let i = 0; i < 3; i++) this.b.effects.sparkle(this.x - this.vx * 2, this.y + rand(-1.8, 1.8), i ? (this.color || 0xffd060) : 0xffffff, 1, 0.3);
      if (this.life <= 0 || Math.abs(this.x) > 26) this.kill(false);
      return;
    }
    if (this.age % 2 === 0) this.b.effects.spawn({ x: this.x - this.vx * 2, y: this.y + rand(-0.1, 0.1), z: 0.2, life: 14, size: this.r * 1.6, size1: 0.05, color: this.color });
    if (this.life <= 0 || insideSolid(this.x, this.y) || Math.abs(this.x) > 30) this.kill(true);
  }
  kill(fx) {
    if (this.dead) return;
    this.dead = true;
    if (fx) this.b.effects.ring(this.x, this.y, this.color, 1.5, 12);
    this.b.scene.remove(this.mesh);
    this.mesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  }
  render(alpha) {
    const x = this.px === undefined ? this.x : this.px + (this.x - this.px) * alpha;
    const y = this.py === undefined ? this.y : this.py + (this.y - this.py) * alpha;
    this.mesh.position.set(x, y, this.kind === 'fswave' ? 0.3 : 0.2);
    if (this.kind === 'flame') {
      const t = this.age / this.maxLife;
      this.outer.scale.setScalar(this.r * 2.6);
      this.inner.scale.setScalar(this.r * 1.3 * (1 - t * 0.6));
      this.outer.material.opacity = 0.9 * Math.max(0, 1 - t * t);
      this.inner.material.opacity = 0.8 * Math.max(0, 1 - t);
      this.outer.material.color.setRGB(1, 0.2 + 0.35 * (1 - t), 0.03);
      return;
    }
    if (this.kind === 'arrow') return;
    if (this.shell) this.shell.scale.setScalar(this.r * (1 + Math.sin(this.age * 0.6) * 0.08));
    else this.mesh.scale.set(1, 1 + Math.sin(this.age * 0.5) * 0.05, 1);
  }
}

export class Battle {
  constructor(app, cfg) {
    this.app = app;
    this.scene = app.scene;
    this.stage = app.stage;
    this.effects = app.effects;
    this.camera = app.camera;
    this.cfg = cfg;
    this.stage.setType(cfg.stage);
    this.effects.clear();
    this.tmpV = new THREE.Vector3();
    this.projectiles = [];
    this.timers = [];
    this.frame = 0;
    this.phase = 'countdown';
    this.phaseT = 0;
    this.shake = 0;
    this.slowmo = 0;
    this.finalFocus = null;
    this.winner = null;
    this.hitboxDebug = false;
    this.ballOn = cfg.ball !== false;
    this.ball = null;
    this.ballTimer = 60 * rand(16, 26);
    this.cine = null;
    this.fsFx = [];
    const humans = cfg.players.filter((p) => p.type === 'human').length;
    // 同キャラ対決はカラー違い
    const variants = cfg.players.map((p, i) => cfg.players.slice(0, i).filter((q) => q.char === p.char).length);
    this.fighters = cfg.players.map((p, i) => {
      const input = new PlayerInput();
      const f = new Fighter(this, i, CHARS[p.char], {
        input, variant: variants[i], color: PLAYER_COLORS[i], stocks: cfg.stocks, cpu: p.type === 'cpu',
        label: p.type === 'cpu' ? 'CPU' : `P${i + 1}`,
      });
      if (p.type === 'cpu') f.ai = new CpuController(this, f, p.level);
      // 1人プレイ時はP1が両方のキー配置を使える
      f.keymaps = p.type === 'human' ? (humans === 1 ? KEYMAPS : [KEYMAPS[i]]) : [];
      f.padIndex = p.type === 'human' ? cfg.players.slice(0, i).filter((q) => q.type === 'human').length : -1;
      return f;
    });
    this.cam = { x: 0, y: 2, d: 22 };
    this.updateCamera(1);
    this.dbg = new THREE.Group();
    this.scene.add(this.dbg);
    audio.playMusic('battle');
  }

  later(frames, fn) { this.timers.push({ t: frames, fn }); }

  shakeCam(v) { this.shake = Math.max(this.shake, v); }

  // ---------- 1フレーム ----------
  tick() {
    this.frame++;
    this.phaseT++;
    if (this.phase === 'fight') this.fightFrames = (this.fightFrames || 0) + 1;
    for (let i = this.timers.length - 1; i >= 0; i--) {
      const t = this.timers[i];
      if (--t.t <= 0) { this.timers.splice(i, 1); t.fn(); }
    }
    // 入力
    for (const f of this.fighters) {
      let raw;
      if (f.ai) raw = f.ai.update();
      else {
        raw = blankRaw();
        this.app.kb.read(f.keymaps, raw);
        if (f.padIndex >= 0) readGamepad(f.padIndex, raw);
        if (f.padIndex === 0) this.app.touch.read(raw);
      }
      if (this.phase === 'countdown' || this.phase === 'gameover') raw = blankRaw();
      f.input.latch(raw);
    }
    if (this.phase === 'countdown') {
      const n = 3 - Math.floor(this.phaseT / 50);
      if (this.phaseT % 50 === 1 && n > 0) { this.app.bigText(String(n), 'count'); audio.countdown(); }
      if (this.phaseT === 150) { this.phase = 'fight'; this.app.bigText('GO!', 'go'); audio.go(); }
      for (const f of this.fighters) { f.animT++; f.prevX = f.x; f.prevY = f.y; f.animate(); }
      this.effects.update();
      return;
    }
    if (this.phase === 'gameover' && this.phaseT > 50) {
      // 決着後は動きを止める
      for (const f of this.fighters) { f.prevX = f.x; f.prevY = f.y; f.animT++; f.animate(); }
      this.effects.update();
      if (this.phaseT === 170) this.app.showResults(this);
      return;
    }
    // 切りふだの演出中は使用者以外を止める
    if (this.cine) {
      const c = this.cine;
      c.t++;
      for (const f of this.fighters) { if (f !== c.user) { f.prevX = f.x; f.prevY = f.y; } }
      c.user.update();
      for (const f of this.fighters) f.animate();
      for (const fx of this.fsFx) if (fx.update) fx.update();
      this.effects.update();
      if (c.t >= c.len) { this.cine = null; this.app.setCine(false); }
      return;
    }
    for (const f of this.fighters) f.update();
    for (const p of this.projectiles) p.update();
    for (const fx of this.fsFx) if (fx.update) fx.update();
    this.updateBall();
    this.resolveHits();
    this.resolveProjectiles();
    this.projectiles = this.projectiles.filter((p) => !p.dead);
    this.pushApart();
    for (const f of this.fighters) this.checkBlast(f);
    for (const f of this.fighters) f.animate();
    this.effects.update();
    if (this.phase === 'gameover') {
      if (this.phaseT === 170) this.app.showResults(this);
    }
  }

  // ---------- 当たり判定 ----------
  resolveHits() {
    const hits = [];
    for (const a of this.fighters) {
      if (a.state !== 'attack' || a.hitlag > 0) continue;
      const boxes = a.activeHitboxes();
      if (!boxes.length) continue;
      for (const d of this.fighters) {
        if (d === a || d.state === 'dead' || d.state === 'respawn') continue;
        const hurt = d.hurtbox();
        for (const box of boxes) {
          const key = (box.h.group || 0) + ':' + d.slot;
          if (a.hitIds.has(key)) continue;
          if (distPointSegment(box.x, box.y, hurt.ax, hurt.ay, hurt.bx, hurt.by) > box.r + hurt.r) continue;
          if (d.isIntangible()) continue;
          if (box.h.type === 'grab') {
            if (d.state === 'grabbed' || d.state === 'ledge' || d.grabbing || a.grabbing) continue;
          }
          a.hitIds.add(key);
          hits.push({ a, d, box });
          break;
        }
      }
    }
    for (const { a, d, box } of hits) this.processHit(a, d, box);
    // スマッシュボール
    const ball = this.ball;
    if (ball && !ball.dead && ball.life > 0) {
      for (const a of this.fighters) {
        if (a.state !== 'attack' || a.hitlag > 0 || a.hitIds.has('ball') || a.fsReady) continue;
        for (const box of a.activeHitboxes()) {
          if (box.h.type === 'grab') continue;
          if (Math.hypot(box.x - ball.x, box.y - ball.y) > box.r + ball.r) continue;
          a.hitIds.add('ball');
          a.hitlag = 5;
          if (ball.hit(this.calcDmg(a, box.h), sign(ball.x - a.x) || a.facing)) this.breakBall(a);
          break;
        }
        if (!this.ball) break;
      }
    }
  }

  updateBall() {
    if (!this.ballOn || this.phase !== 'fight') return;
    if (this.ball) {
      this.ball.update();
      if (this.ball.dead) { this.ball = null; this.ballTimer = 60 * rand(20, 32); }
      return;
    }
    if (this.fighters.some((f) => f.fsReady || (f.move && f.move.fs))) return;
    if (--this.ballTimer <= 0) {
      this.ball = new SmashBall(this);
      audio.star();
    }
  }

  breakBall(a) {
    const b = this.ball;
    this.effects.koBlast(b.x, b.y, 0xffe070);
    this.effects.ring(b.x, b.y, 0xffffff, 5, 24);
    this.shakeCam(0.25);
    audio.fsReady();
    b.remove();
    this.ball = null;
    this.ballTimer = 60 * rand(22, 34);
    a.fsReady = true;
    this.app.hud.setFs(a.slot, true);
  }

  // ---------- 最後の切りふだ ----------
  startCine(user, len) {
    this.cine = { user, t: 0, len };
    this.app.setCine(true, `${user.def.name}「${fsLabel(user.def)}」`, user.def.css);
    audio.fsStart();
    this.app.hud.setFs(user.slot, false);
  }
  fsTrap(user, x, y, r) {
    for (const d of this.fighters) {
      if (d === user || d.state === 'dead' || d.state === 'respawn' || d.state === 'trapped') continue;
      if (d.invuln > 0 || d.state === 'ledgeclimb') continue;
      if (Math.hypot(d.x - x, d.y + d.height * 0.5 - y) > r + 0.4) continue;
      d.move = null;
      if (d.grabbing) d.releaseGrabQuiet();
      if (d.grabbedBy) { d.grabbedBy.grabbing = null; d.grabbedBy = null; }
      d.setState('trapped');
      d.trap = { by: user, x, y };
      d.vx = d.vy = d.kx = d.ky = 0;
      d.grounded = false; d.surface = null;
      d.pendingLaunch = null;
    }
  }
  fsTrapped(user) { return this.fighters.filter((d) => d.state === 'trapped' && d.trap && d.trap.by === user); }
  fsDamage(user, dmg) {
    for (const d of this.fsTrapped(user)) {
      d.damage = Math.min(999, d.damage + dmg);
      user.stats.dealt += dmg; d.stats.taken += dmg;
      d.flashT = 5;
      this.app.hud.bump(d.slot);
      this.effects.hitSpark(d.x + rand(-0.4, 0.4), d.y + d.height * 0.5 + rand(-0.4, 0.4), user.def.color, 0.35);
      audio.hit(0.35);
    }
  }
  fsLaunch(user, h) {
    for (const d of this.fsTrapped(user)) {
      d.trap = null;
      d.setState('hitstun');
      const dir = sign(d.x - user.x) || user.facing;
      this.applyHit(user, d, h, d.x, d.y + d.height * 0.5, dir, h.dmg);
      d.hitlag = 12;
    }
  }
  fsRelease(user) {
    for (const d of this.fsTrapped(user)) { d.trap = null; d.setState('air'); }
  }
  addFx(fx) { this.fsFx.push(fx); return fx; }
  removeFx(fx) { const i = this.fsFx.indexOf(fx); if (i >= 0) this.fsFx.splice(i, 1); fx.remove(); }

  calcDmg(a, h) {
    let dmg = typeof h.dmg === 'function' ? h.dmg(a) : h.dmg;
    const mv = a.move;
    if (mv && mv.smash) dmg *= 1 + 0.4 * a.chargeRatio;
    if (mv && mv.chargeScale) dmg *= 1 + mv.chargeScale * a.chargeRatio;
    return Math.round(dmg * 10) / 10;
  }

  processHit(a, d, box) {
    const h = box.h;
    if (h.type === 'grab') {
      if (a.state === 'attack' && d.state !== 'grabbed' && a.state !== 'grabbed') a.grabOpponent(d);
      return;
    }
    const dmg = this.calcDmg(a, h);
    if (d.inWindow('counter')) return this.triggerCounter(d, a, dmg);
    const dir = h.away ? (sign(d.x - a.x) || a.facing) : a.facing;
    if (d.state === 'shield' || d.state === 'shieldstun') return this.shieldHit(a, d, h, dmg, box.x, box.y, dir);
    this.applyHit(a, d, h, box.x, box.y, dir, dmg);
  }

  applyHit(a, d, h, hx, hy, dir, dmgIn) {
    const dmg = dmgIn ?? h.dmg;
    d.damage = Math.min(999, d.damage + dmg);
    a.stats.dealt += dmg;
    d.stats.taken += dmg;
    d.lastHitInfo = { move: h.throwHit ? 'throw' : h.projectile ? 'projectile' : a.moveName, frame: this.frame, dmg: d.damage };
    this.app.hud.bump(d.slot);
    // スーパーアーマー
    if (d.inWindow('armor') && !h.throwHit) {
      const hl = Math.floor(dmg * 0.35 + 3);
      if (!h.projectile) a.hitlag = hl;
      d.hitlag = hl;
      d.flashT = 6;
      this.effects.hitSpark(hx, hy, 0xffd060, 0.3, dir);
      audio.armor();
      return;
    }
    const kb = calcKB(d.damage, dmg, d.s.weight, h.kbg, h.bkb);
    let ang = h.ang;
    if (ang === 361) ang = d.grounded && kb < 60 ? 0 : 40;
    const hl = d.receiveKnockback(kb, ang, dir, dmg, a);
    if (h.link && d.pendingLaunch) {
      // 多段ヒット: 相手を攻撃者に引き連れる
      d.pendingLaunch.link = a;
      d.hitstun = 16;
      d.tumble = false;
    }
    if (!h.throwHit && !h.projectile) a.hitlag = hl;
    const power = kb / 140;
    this.effects.hitSpark(hx, hy, a.def.color, power, dir);
    if (h.throwHit) audio.hit(power * 0.8);
    else if (a.def.id === 'dullahan' && !h.projectile && (a.move && a.move.trail === 'sword')) { audio.slash(power); audio.hit(power * 0.9); }
    else audio.hit(power);
    if (kb > 90) this.shakeCam(Math.min(0.5, kb / 500));
    // 最後の一撃の演出
    const alive = this.fighters.filter((f) => f.stocks > 0 && f.state !== 'dead');
    if (d.stocks === 1 && alive.length === 2 && this.predictKO(d, kb, ang, dir)) {
      this.slowmo = 50;
      this.finalFocus = d;
      this.effects.ring(d.x, d.y + 1, 0xffffff, 6, 30);
    }
  }

  predictKO(d, kb, ang, dir) {
    let x = d.x, y = d.y;
    let kx = Math.cos(ang * DEG) * dir * kb * KB_SCALE, ky = Math.sin(ang * DEG) * kb * KB_SCALE;
    let vy = 0;
    const b = STAGE.blast;
    for (let i = 0; i < 240; i++) {
      const m = Math.hypot(kx, ky);
      if (m > 0) { const nm = Math.max(0, m - KB_DECAY); kx *= nm / m; ky *= nm / m; }
      vy = Math.max(vy - d.s.gravity, -d.s.fallSpeed);
      x += kx; y += ky + vy;
      if (x < b.left || x > b.right || y > b.top || y < b.bottom) return true;
      if (insideSolid(x, y)) return false;
      if (m < 0.02 && i > 10) return false;
    }
    return false;
  }

  shieldHit(a, d, h, dmg, hx, hy, dir) {
    d.shieldHP -= dmg + (h.shield || 0);
    d.setState('shieldstun');
    d.shieldstun = Math.floor(dmg * 0.75 + 2);
    d.vx = dir * Math.min(0.18, 0.03 + dmg * 0.008);
    if (!h.projectile && a.grounded) a.vx = -dir * Math.min(0.12, 0.01 + dmg * 0.005);
    const hl = Math.floor(dmg * 0.35 + 3);
    if (!h.projectile) a.hitlag = hl;
    d.hitlag = hl;
    this.effects.shieldSpark(hx, hy, d.color);
    audio.shieldHit();
    if (d.shieldHP <= 0) d.shieldBreak();
  }

  triggerCounter(d, a, dmg) {
    d.counterDmg = dmg;
    d.facing = sign(a.x - d.x) || d.facing;
    d.startMove(d.def.counterMove);
    d.invuln = Math.max(d.invuln, 14);
    a.hitlag = 14;
    this.effects.ring(d.x, d.y + 1, 0x9fe8ff, 3.5, 18);
    this.effects.sparkle(d.x, d.y + 1, 0xffffff, 8, 0.8);
    audio.counter();
    this.shakeCam(0.1);
  }

  resolveProjectiles() {
    for (const p of this.projectiles) {
      if (p.dead) continue;
      const ball = this.ball;
      if (ball && !ball.dead && ball.life > 0 && !p.fs && !p.owner.fsReady && Math.hypot(p.x - ball.x, p.y - ball.y) < p.r + ball.r) {
        if (ball.hit(p.dmg, sign(p.vx) || 1)) this.breakBall(p.owner);
        p.kill(true);
        continue;
      }
      for (const d of this.fighters) {
        if (d === p.owner || d.state === 'dead' || d.state === 'respawn' || p.hitIds.has(d.slot)) continue;
        const hurt = d.hurtbox();
        if (distPointSegment(p.x, p.y, hurt.ax, hurt.ay, hurt.bx, hurt.by) > p.r + hurt.r) continue;
        if (p.fs) {
          if (d.invuln > 0) continue;
          p.hitIds.add(d.slot);
          if (d.grabbing) d.releaseGrabQuiet();
          d.move = null;
          this.applyHit(p.owner, d, { dmg: p.dmg, ang: p.ang, bkb: p.bkb, kbg: p.kbg, projectile: true }, d.x, d.y + d.height * 0.5, sign(p.vx) || 1, p.dmg);
          d.hitlag = 26;
          this.effects.koBlast(d.x, d.y + 1, 0xffd060);
          this.shakeCam(0.5);
          continue;
        }
        if (d.inWindow('reflect')) {
          p.owner = d;
          p.vx = -p.vx * 1.2;
          p.dmg *= 1.4;
          p.life = 90;
          p.hitIds.clear();
          this.effects.ring(p.x, p.y, 0x9fe8ff, 2, 12);
          audio.reflect();
          continue;
        }
        if (d.isIntangible()) continue;
        p.hitIds.add(d.slot);
        const h = { dmg: p.dmg, ang: p.ang, bkb: p.bkb, kbg: p.kbg, projectile: true };
        if (d.inWindow('counter')) { this.triggerCounter(d, p.owner, p.dmg); p.kill(true); break; }
        const dir = sign(p.vx) || 1;
        if (d.state === 'shield' || d.state === 'shieldstun') this.shieldHit(p.owner, d, h, p.dmg, p.x, p.y, dir);
        else this.applyHit(p.owner, d, h, p.x, p.y, dir, p.dmg);
        p.kill(false);
        break;
      }
    }
  }

  spawnProjectile(owner, o) {
    this.projectiles.push(new Projectile(this, owner, o));
  }

  pushApart() {
    const fs = this.fighters;
    for (let i = 0; i < fs.length; i++) {
      for (let j = i + 1; j < fs.length; j++) {
        const a = fs[i], b = fs[j];
        if (!a.grounded || !b.grounded || a.surface !== b.surface) continue;
        if (a.state === 'grabbed' || b.state === 'grabbed' || a.state === 'dead' || b.state === 'dead') continue;
        const dx = b.x - a.x;
        const min = (a.s.radius + b.s.radius) * 0.9;
        if (Math.abs(dx) < min) {
          const push = Math.min(0.04, (min - Math.abs(dx)) * 0.25);
          const s = sign(dx) || (a.slot < b.slot ? 1 : -1);
          const sf = a.surface || { x1: -99, x2: 99 };
          a.x = clamp(a.x - s * push, sf.x1, sf.x2);
          b.x = clamp(b.x + s * push, sf.x1, sf.x2);
        }
      }
    }
  }

  checkBlast(f) {
    if (f.state === 'dead' || f.state === 'respawn' || this.phase === 'gameover') return;
    const b = STAGE.blast;
    if (f.x > b.left && f.x < b.right && f.y > b.bottom && f.y < b.top) return;
    const ex = clamp(f.x, b.left + 1, b.right - 1), ey = clamp(f.y, b.bottom + 1, b.top - 1);
    this.effects.koBlast(ex, ey, PLAYER_COLORS[f.slot]);
    audio.ko();
    this.shakeCam(0.7);
    if (f.lastHitBy && f.lastHitBy !== f) f.lastHitBy.stats.kos++;
    else f.stats.sds++;
    f.die();
    this.app.hud.bump(f.slot);
    if (this.finalFocus === f) { this.finalFocus = null; }
    const left = this.fighters.filter((x) => x.stocks > 0);
    if (left.length <= 1 && this.phase === 'fight') {
      this.phase = 'gameover';
      this.phaseT = 0;
      this.winner = left[0] || null;
      this.slowmo = 60;
      this.app.bigText('GAME!', 'game');
      audio.game();
      audio.stopMusic();
    }
  }

  // ---------- 描画 ----------
  render(alpha, dt) {
    for (const f of this.fighters) f.render(alpha, dt);
    for (const p of this.projectiles) p.render(alpha);
    if (this.ball) this.ball.render(alpha);
    this.updateCamera(dt);
    if (this.hitboxDebug) this.drawDebug(); else if (this.dbg.children.length) this.dbg.clear();
  }

  updateCamera(dt) {
    const b = STAGE.blast;
    let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9, n = 0;
    for (const f of this.fighters) {
      if (f.state === 'dead') continue;
      const x = clamp(f.x, b.left + 3, b.right - 3), y = clamp(f.y, b.bottom + 2, b.top - 2);
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y + f.height);
      n++;
    }
    if (!n) { minX = -4; maxX = 4; minY = 0; maxY = 2; }
    let cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
    const aspect = this.camera.aspect;
    const tanH = Math.tan((this.camera.fov * DEG) / 2);
    const needW = (maxX - minX) + 9, needH = (maxY - minY) + 6;
    let d = Math.max(needW / (2 * tanH * aspect), needH / (2 * tanH));
    d = clamp(d, 15, 34);
    cx = clamp(cx, -11, 11);
    cy = clamp(cy, -2.5, 9) + 0.6;
    let k = Math.min(1, dt * 4);
    if (this.cine) {
      const u = this.cine.user;
      cx = u.x; cy = u.y + 1.1; d = 7.5; k = Math.min(1, dt * 5);
    } else if (this.finalFocus && this.slowmo > 0) {
      cx = this.finalFocus.x; cy = this.finalFocus.y + 1; d = 9; k = Math.min(1, dt * 6);
    }
    const c = this.cam;
    c.x += (cx - c.x) * k; c.y += (cy - c.y) * k; c.d += (d - c.d) * k;
    const s = this.shake;
    const sx = s ? rand(-s, s) : 0, sy = s ? rand(-s, s) : 0;
    this.shake = Math.max(0, this.shake - dt * 1.6);
    this.camera.position.set(c.x + sx, c.y + c.d * 0.12 + sy, c.d);
    this.camera.lookAt(c.x + sx * 0.5, c.y + sy * 0.5, 0);
  }

  drawDebug() {
    this.dbg.children.forEach((m) => { m.geometry.dispose(); m.material.dispose(); });
    this.dbg.clear();
    const sph = (x, y, r, color, wire = false) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: wire ? 0.9 : 0.18, wireframe: wire, depthTest: false }));
      m.position.set(x, y, 0.5);
      this.dbg.add(m);
    };
    for (const f of this.fighters) {
      if (f.state === 'dead') continue;
      const h = f.hurtbox();
      const col = f.isIntangible() ? 0x4488ff : 0xffee33;
      for (let t = 0; t <= 1.001; t += 0.25) sph(h.ax, h.ay + (h.by - h.ay) * t, h.r, col);
      for (const bx of f.activeHitboxes()) sph(bx.x, bx.y, bx.r, bx.h.type === 'grab' ? 0x8844ff : 0xff2222, true);
    }
    for (const p of this.projectiles) sph(p.x, p.y, p.r, 0xff2222, true);
  }

  dispose() {
    for (const f of this.fighters) f.dispose();
    for (const p of this.projectiles) p.kill(false);
    this.projectiles = [];
    if (this.ball) this.ball.remove();
    for (const fx of this.fsFx) fx.remove();
    this.fsFx = [];
    this.app.setCine(false);
    this.scene.remove(this.dbg);
    this.effects.clear();
    audio.stopMusic();
  }
}
