// アプリ本体: 画面遷移（タイトル/キャラ選択/バトル/リザルト）とメインループ
import * as THREE from 'three';
import { createRenderer, IS_TOUCH } from './render/renderer.js';
import { TouchControls } from './touch.js';
import { Effects } from './render/effects.js';
import { Stage } from './stage.js';
import { Keyboard, readGamepad, blankRaw } from './input.js';
import { Battle, PLAYER_COLORS, PLAYER_CSS } from './battle.js';
import { CHARS, CHAR_LIST } from './chars/index.js';
import { applyPose } from './models/rig.js';
import { audio } from './audio.js';
import { clamp } from './util.js';

const STEP = 1 / 60;
const $ = (s) => document.querySelector(s);
const hex = (c) => '#' + c.toString(16).padStart(6, '0');

class Hud {
  constructor(app) {
    this.app = app;
    this.el = $('#cards');
    this.tagsEl = $('#tags');
    this.cards = [];
    this.tags = [];
    this.v = new THREE.Vector3();
  }
  setup(battle) {
    this.el.innerHTML = '';
    this.tagsEl.innerHTML = '';
    this.cards = battle.fighters.map((f, i) => {
      const c = document.createElement('div');
      c.className = 'card';
      c.style.setProperty('--pc', PLAYER_CSS[i]);
      c.style.setProperty('--cc', f.def.css);
      c.innerHTML = `<div class="bg"></div><img src="${this.app.portrait(f.def.id, battle.cfg.players.slice(0, i).filter((q) => q.char === f.def.id).length)}"><div class="ptag">${f.label}</div><div class="nm">${f.def.name}</div><div class="stocks"></div><div class="pct">0<small>%</small></div>`;
      this.el.appendChild(c);
      return { el: c, pct: c.querySelector('.pct'), stocks: c.querySelector('.stocks'), last: -1, lastS: -1 };
    });
    this.tags = battle.fighters.map((f, i) => {
      const t = document.createElement('div');
      t.className = 'ntag';
      t.textContent = f.label;
      t.style.background = PLAYER_CSS[i];
      t.style.borderTopColor = PLAYER_CSS[i];
      t.style.color = '#fff';
      this.tagsEl.appendChild(t);
      return t;
    });
  }
  setFs(slot, on) {
    const c = this.cards[slot];
    if (c) c.el.classList.toggle('fs', on);
  }
  bump(slot) {
    const c = this.cards[slot];
    if (!c) return;
    c.el.classList.remove('bump');
    void c.el.offsetWidth;
    c.el.classList.add('bump');
  }
  pctColor(p) {
    const stops = [[0, [255, 255, 255]], [50, [255, 230, 90]], [100, [255, 150, 50]], [150, [255, 55, 50]], [230, [170, 0, 20]]];
    let a = stops[0], b = stops[stops.length - 1];
    for (let i = 0; i < stops.length - 1; i++) if (p >= stops[i][0] && p <= stops[i + 1][0]) { a = stops[i]; b = stops[i + 1]; break; }
    if (p > 230) a = b;
    const t = b[0] === a[0] ? 0 : (p - a[0]) / (b[0] - a[0]);
    const c = a[1].map((v, k) => Math.round(v + (b[1][k] - v) * t));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }
  update(battle) {
    battle.fighters.forEach((f, i) => {
      const c = this.cards[i];
      const p = Math.floor(f.damage);
      const dead = f.state === 'dead';
      if (p !== c.last || dead !== c.dead) {
        c.pct.innerHTML = dead ? '' : `${p}<small>%</small>`;
        c.pct.style.color = this.pctColor(p);
        c.last = p; c.dead = dead;
      }
      if (f.stocks !== c.lastS) {
        c.stocks.innerHTML = '<i></i>'.repeat(Math.max(0, f.stocks));
        c.lastS = f.stocks;
        c.el.classList.toggle('out', f.stocks <= 0);
      }
      // 名前タグ
      const t = this.tags[i];
      if (dead || f.stocks <= 0) { t.style.display = 'none'; return; }
      t.style.display = '';
      const x = f.prevX + (f.x - f.prevX), y = f.y + f.model.headY + 0.15;
      this.v.set(x, y, 0).project(this.app.camera);
      const W = window.innerWidth, H = window.innerHeight;
      let sx = (this.v.x * 0.5 + 0.5) * W, sy = (-this.v.y * 0.5 + 0.5) * H;
      const off = sx < 20 || sx > W - 20 || sy < 40 || sy > H - 10;
      sx = clamp(sx, 30, W - 30); sy = clamp(sy, 40, H - 140);
      t.style.left = sx + 'px';
      t.style.top = sy + 'px';
      t.textContent = off ? `${f.label} ${Math.floor(f.damage)}%` : f.label;
      t.classList.toggle('off', off);
    });
    const s = Math.floor((battle.fightFrames || 0) / 60);
    $('#timer').textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }
}

class App {
  constructor() {
    this.R = createRenderer($('#gl'));
    this.scene = this.R.scene;
    this.camera = this.R.camera;
    this.stage = new Stage(this.scene);
    this.effects = new Effects(this.scene);
    this.kb = new Keyboard();
    this.hud = new Hud(this);
    this.isTouch = IS_TOUCH;
    this.touch = new TouchControls($('#app'), () => this.togglePause());
    this.setTouchMode(IS_TOUCH);
    this.mode = 'title';
    this.paused = false;
    this.battle = null;
    this.acc = 0;
    this.time = 0;
    this.last = performance.now();
    this.sel = {
      players: [{ char: 'illumine', type: 'human', level: 5 }, { char: 'dullahan', type: 'cpu', level: 5 }],
      stocks: 3,
      stage: 'battlefield',
      ball: true,
    };
    this.previews = [];
    this.portraits = {};
    this.padPrev = blankRaw();
    this.makePortraits();
    this.bindUI();
    this.renderSelectPanels();
    this.showScreen('title');
    this.setPreviews([{ char: 'illumine', v: 0 }, { char: 'dullahan', v: 0 }]);
    this.layoutPreviews();
    $('#loading').classList.add('hidden');
    requestAnimationFrame((t) => this.loop(t));
  }

  // ---------- ポートレート生成 ----------
  makePortraits() {
    const r = this.R.renderer;
    const scene = new THREE.Scene();
    scene.environment = this.scene.environment;
    scene.environmentIntensity = 0.8;
    scene.add(new THREE.HemisphereLight(0xd8d0ff, 0x302040, 1.3));
    const dl = new THREE.DirectionalLight(0xffffff, 2.2); dl.position.set(-2, 3, 4); scene.add(dl);
    const rim = new THREE.DirectionalLight(0xc090ff, 2); rim.position.set(3, 2, -3); scene.add(rim);
    const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    const size = 256;
    const prevSize = r.getSize(new THREE.Vector2());
    const prevPR = r.getPixelRatio();
    const prevTM = r.toneMapping;
    r.setPixelRatio(1);
    r.setSize(size, size, false);
    for (const def of CHAR_LIST) {
      for (const v of [0, 1]) {
        const m = def.buildModel(v);
        applyPose(m.rig, def.anims.idle(0), 1);
        m.root.rotation.y = 0.45;
        scene.add(m.root);
        m.root.updateMatrixWorld(true);
        const headY = { illumine: 1.62, dullahan: 1.92, dragon: 2.02 }[def.id] || 1.8;
        cam.position.set(0.1, headY + 0.1, { illumine: 2.6, dullahan: 2.2, dragon: 2.6 }[def.id] || 2.4);
        cam.lookAt(0, headY - 0.05, 0);
        scene.background = new THREE.Color(def.color).multiplyScalar(0.25);
        r.render(scene, cam);
        const c = document.createElement('canvas');
        c.width = c.height = size;
        c.getContext('2d').drawImage(r.domElement, 0, 0, size, size, 0, 0, size, size);
        this.portraits[`${def.id}:${v}`] = c.toDataURL();
        scene.remove(m.root);
      }
    }
    r.toneMapping = prevTM;
    r.setPixelRatio(prevPR);
    r.setSize(prevSize.x, prevSize.y, false);
    this.R.resize();
  }
  portrait(id, v = 0) { return this.portraits[`${id}:${v % 2}`]; }

  // ---------- メニュー用3Dプレビュー ----------
  setPreviews(list) {
    for (const p of this.previews) { this.scene.remove(p.model.root); p.model.worldObjects.forEach((o) => this.scene.remove(o)); if (p.model.shadow) this.scene.remove(p.model.shadow); p.model.dispose(); }
    this.previews = list.map((it) => {
      const def = CHARS[it.char];
      const model = def.buildModel(it.v || 0);
      this.scene.add(model.root);
      model.worldObjects.forEach((o) => this.scene.add(o));
      if (model.shadow) this.scene.add(model.shadow);
      return { def, model, t: Math.random() * 100, victory: !!it.victory, x: 0, yaw: 0 };
    });
  }
  layoutPreviews() {
    const n = this.previews.length;
    this.previews.forEach((p, i) => {
      if (this.mode === 'results') { p.x = 1.4; p.yaw = -0.35; }
      else if (this.mode === 'select') { p.x = i === 0 ? -2.0 : 2.0; p.yaw = i === 0 ? 0.55 : -0.55; }
      else { p.x = i === 0 ? -2.3 : 2.3; p.yaw = i === 0 ? 0.5 : -0.5; }
    });
  }
  animatePreviews(dt) {
    for (const p of this.previews) {
      p.t += 1;
      const pose = p.victory ? p.def.anims.victory(p.t) : p.def.anims.idle(p.t);
      applyPose(p.model.rig, pose, p.victory ? 0.2 : 0.25);
      p.model.root.position.set(p.x, 0, 0);
      if (p.model.shadow) p.model.shadow.position.set(p.x, 0.01, 0);
      p.model.root.rotation.y = p.yaw;
      p.model.setFlash(new THREE.Color(), 0);
      p.model.update(dt, { vx: 0, vy: 0 });
    }
  }

  // ---------- 画面 ----------
  setTouchMode(on) {
    this.isTouch = on;
    document.body.classList.toggle('touch', on);
  }
  // フルスクリーン＆横画面固定（スマホのブラウザで遊ぶとき）
  enterFullscreen() {
    if (!this.isTouch || document.fullscreenElement || matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches) return;
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (!req) return;
    try {
      const p = req.call(el, { navigationUI: 'hide' });
      if (p && p.then) p.then(() => screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {})).catch(() => {});
    } catch (e) { /* 非対応 */ }
  }
  showScreen(name) {
    for (const s of ['title', 'select', 'pause', 'results', 'howto']) $('#' + s).classList.toggle('hidden', s !== name);
    const humans = this.battle ? this.battle.fighters.some((f) => !f.ai) : false;
    this.touch.show(name === 'battle' && this.isTouch && humans);
    $('#hud').classList.toggle('hidden', name !== 'battle' && name !== 'pause');
    $('#tags').classList.toggle('hidden', name !== 'battle' && name !== 'pause');
  }
  go(mode) {
    this.mode = mode;
    if (mode === 'title') {
      this.endBattle();
      this.setPreviews([{ char: 'illumine', v: 0 }, { char: 'dullahan', v: 0 }]);
      this.showScreen('title');
      this.stage.setType('battlefield');
      if (audio.ctx) audio.playMusic('menu');
    } else if (mode === 'select') {
      this.endBattle();
      this.refreshSelectPreviews();
      this.renderSelectPanels();
      this.showScreen('select');
      this.stage.setType(this.sel.stage);
      if (audio.ctx && (!audio.bgm || this.musicKind !== 'menu')) { audio.playMusic('menu'); }
      this.musicKind = 'menu';
    }
    this.layoutPreviews();
  }
  refreshSelectPreviews() {
    const p = this.sel.players;
    const v1 = p[1].char === p[0].char ? 1 : 0;
    this.setPreviews([{ char: p[0].char, v: 0 }, { char: p[1].char, v: v1 }]);
    this.layoutPreviews();
  }

  startBattle() {
    audio.init();
    this.endBattle();
    this.setPreviews([]);
    this.mode = 'battle';
    this.paused = false;
    this.acc = 0;
    this.battle = new Battle(this, JSON.parse(JSON.stringify(this.sel)));
    this.battle.hitboxDebug = $('#dbgChk').checked;
    this.musicKind = 'battle';
    this.hud.setup(this.battle);
    this.showScreen('battle');
    window.battle = this.battle;
  }
  endBattle() {
    if (this.battle) { this.battle.dispose(); this.battle = null; }
    this.paused = false;
    const bt = $('#bigtext');
    bt.className = '';
    bt.textContent = '';
  }
  togglePause() {
    if (this.mode !== 'battle' || !this.battle || this.battle.phase === 'gameover') return;
    this.paused = !this.paused;
    this.showScreen(this.paused ? 'pause' : 'battle');
    $('#hud').classList.remove('hidden');
    audio.menuOk();
  }
  showResults(battle) {
    const fs = battle.fighters;
    const w = battle.winner;
    const order = [...fs].sort((a, b) => (b === w) - (a === w) || b.stocks - a.stocks || a.damage - b.damage);
    $('#resWinner').innerHTML = w ? `<span style="color:${PLAYER_CSS[w.slot]}">${w.label}</span> ${w.def.name}` : 'DRAW';
    $('#resTable').innerHTML = order.map((f, rank) => `
      <div class="rcard" style="--pc:${PLAYER_CSS[f.slot]}">
        <span class="rank">${rank + 1}</span><h3>${f.label} ${f.def.name}</h3>
        <table>
          <tr><td>撃墜数</td><td>${f.stats.kos}</td></tr>
          <tr><td>落下数</td><td>${f.stats.falls - f.stats.sds}</td></tr>
          <tr><td>自滅数</td><td>${f.stats.sds}</td></tr>
          <tr><td>与えたダメージ</td><td>${Math.round(f.stats.dealt)}%</td></tr>
          <tr><td>受けたダメージ</td><td>${Math.round(f.stats.taken)}%</td></tr>
        </table>
      </div>`).join('');
    const winChar = w ? w.def.id : fs[0].def.id;
    const v = w ? battle.cfg.players.slice(0, w.slot).filter((q) => q.char === winChar).length : 0;
    this.endBattle();
    this.mode = 'results';
    this.setPreviews([{ char: winChar, v, victory: true }]);
    this.layoutPreviews();
    this.showScreen('results');
    audio.playMusic('menu');
    this.musicKind = 'menu';
  }

  setCine(on, label = '', color = '#fff') {
    const el = $('#cine');
    el.classList.toggle('on', on);
    if (on) {
      const l = $('#cineLabel');
      l.textContent = label;
      l.style.color = color;
      l.classList.remove('show'); void l.offsetWidth; l.classList.add('show');
    }
  }

  bigText(text, cls) {
    const el = $('#bigtext');
    el.className = '';
    void el.offsetWidth;
    el.textContent = text;
    el.className = cls;
  }

  // ---------- UI ----------
  bindUI() {
    document.addEventListener('click', (e) => {
      audio.init();
      const b = e.target.closest('[data-act]');
      if (!b) return;
      this.action(b.dataset.act, b);
    });
    const unlock = () => { audio.init(); if (!audio.bgm && this.mode !== 'battle') audio.playMusic('menu'); };
    window.addEventListener('keydown', unlock, { once: false });
    window.addEventListener('pointerdown', unlock);
    $('#dbgChk').addEventListener('change', (e) => { if (this.battle) this.battle.hitboxDebug = e.target.checked; });
  }

  action(act, el) {
    const P = this.sel.players;
    switch (act) {
      case 'start': audio.menuOk(); this.enterFullscreen(); this.go('select'); break;
      case 'howto': audio.menuOk(); this.howtoFrom = this.paused ? 'pause' : this.mode; this.showScreen('howto'); break;
      case 'closehowto':
        audio.menuBack();
        this.showScreen(this.howtoFrom === 'pause' ? 'pause' : this.howtoFrom === 'battle' ? 'battle' : this.howtoFrom);
        if (this.howtoFrom === 'pause') $('#hud').classList.remove('hidden');
        break;
      case 'back': audio.menuBack(); this.go('title'); break;
      case 'stock-': this.sel.stocks = clamp(this.sel.stocks - 1, 1, 9); audio.menuMove(); this.renderSelectPanels(); break;
      case 'stock+': this.sel.stocks = clamp(this.sel.stocks + 1, 1, 9); audio.menuMove(); this.renderSelectPanels(); break;
      case 'stage':
        this.sel.stage = this.sel.stage === 'battlefield' ? 'omega' : 'battlefield';
        this.stage.setType(this.sel.stage);
        audio.menuMove(); this.renderSelectPanels(); break;
      case 'ball': this.sel.ball = !this.sel.ball; audio.menuMove(); this.renderSelectPanels(); break;
      case 'quality': this.R.setQuality(this.R.quality === 'high' ? 'low' : 'high'); audio.menuMove(); this.renderSelectPanels(); break;
      case 'fight': audio.menuOk(); this.startBattle(); break;
      case 'resume': this.togglePause(); break;
      case 'quit': audio.menuBack(); this.go('select'); break;
      case 'title': audio.menuBack(); this.go('title'); break;
      case 'rematch': audio.menuOk(); this.startBattle(); break;
      case 'char': {
        const s = +el.dataset.slot, d = +el.dataset.d;
        this.cycleChar(s, d);
        break;
      }
      case 'type': {
        const s = +el.dataset.slot;
        P[s].type = P[s].type === 'human' ? 'cpu' : 'human';
        audio.menuMove(); this.renderSelectPanels(); break;
      }
      case 'lv': {
        const s = +el.dataset.slot;
        P[s].level = clamp(P[s].level + +el.dataset.d, 1, 9);
        audio.menuMove(); this.renderSelectPanels(); break;
      }
    }
  }

  cycleChar(slot, d) {
    const P = this.sel.players;
    const i = CHAR_LIST.findIndex((c) => c.id === P[slot].char);
    P[slot].char = CHAR_LIST[(i + d + CHAR_LIST.length) % CHAR_LIST.length].id;
    audio.menuMove();
    this.renderSelectPanels();
    this.refreshSelectPreviews();
  }

  renderSelectPanels() {
    const P = this.sel.players;
    $('#stockVal').textContent = this.sel.stocks;
    $('#stageBtn').textContent = this.sel.stage === 'battlefield' ? '月夜の聖域' : '月夜の聖域・終点';
    $('#ballBtn').textContent = this.sel.ball ? 'あり' : 'なし';
    $('#qualityBtn').textContent = this.R.quality === 'high' ? '高' : '軽量';
    document.querySelectorAll('.panel').forEach((el) => {
      const s = +el.dataset.slot;
      const p = P[s];
      const def = CHARS[p.char];
      const v = s === 1 && P[0].char === P[1].char ? 1 : 0;
      el.style.setProperty('--pc', PLAYER_CSS[s]);
      el.style.setProperty('--cc', def.css);
      el.innerHTML = `
        <div class="ph"><span class="tag">${p.type === 'cpu' ? 'CPU' : 'P' + (s + 1)}</span>
          <div style="display:flex;gap:8px;align-items:center">
            ${p.type === 'cpu' ? `<span class="lv"><button data-act="lv" data-slot="${s}" data-d="-1">−</button>Lv.${p.level}<button data-act="lv" data-slot="${s}" data-d="1">＋</button></span>` : ''}
            <button class="type" data-act="type" data-slot="${s}" title="プレイヤー/CPU 切り替え">${p.type === 'cpu' ? 'CPU' : 'PLAYER'} ⇄</button>
          </div></div>
        <div class="charrow">
          <button class="arrow" data-act="char" data-slot="${s}" data-d="-1">◀</button>
          <img class="portrait" src="${this.portrait(p.char, v)}">
          <div class="cname"><div class="t">${def.title}</div><div class="n">${def.name}</div><div class="e">${def.en}</div></div>
          <button class="arrow" data-act="char" data-slot="${s}" data-d="1">▶</button>
        </div>
        <div class="desc">${def.desc}</div>
        <div class="sp">必殺ワザ: ${def.specials.join(' / ')}</div>`;
    });
  }

  // ---------- 入力（メニュー） ----------
  menuKeys() {
    const kb = this.kb;
    const pad = readGamepad(0, blankRaw());
    const padOk = pad.attack && !this.padPrev.attack;
    const padStart = pad.start && !this.padPrev.start;
    const padBack = pad.special && !this.padPrev.special;
    const padL = pad.x < -0.6 && !(this.padPrev.x < -0.6), padR = pad.x > 0.6 && !(this.padPrev.x > 0.6);
    this.padPrev = pad;
    const ok = kb.take('Enter') || kb.take('NumpadEnter') || padOk || padStart;
    const esc = kb.take('Escape') || padBack;
    switch (this.mode) {
      case 'title':
        if (!$('#howto').classList.contains('hidden')) { if (ok || esc) this.action('closehowto'); break; }
        if (ok || kb.take('Space')) this.action('start');
        break;
      case 'select':
        if (kb.take('KeyA') || padL) this.cycleChar(0, -1);
        if (kb.take('KeyD') || padR) this.cycleChar(0, 1);
        if (kb.take('ArrowLeft')) this.cycleChar(1, -1);
        if (kb.take('ArrowRight')) this.cycleChar(1, 1);
        if (ok) this.action('fight');
        else if (esc) this.action('back');
        break;
      case 'results':
        if (ok) this.action('rematch');
        else if (esc) this.action('quit');
        break;
      case 'battle':
        if (!$('#howto').classList.contains('hidden')) { if (ok || esc) this.action('closehowto'); break; }
        if (ok || esc || padStart) this.togglePause();
        if (kb.take('Backquote') || kb.take('F2')) { const c = $('#dbgChk'); c.checked = !c.checked; if (this.battle) this.battle.hitboxDebug = c.checked; }
        break;
    }
    kb.clearOnce();
  }

  // ---------- メインループ ----------
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    const dt = Math.min(0.1, (now - this.last) / 1000);
    this.last = now;
    this.time += dt;
    this.menuKeys();
    if (this.mode === 'battle' && this.battle) {
      const b = this.battle;
      if (!this.paused) {
        const ts = b.slowmo > 0 ? 0.3 : 1;
        this.acc += dt * ts;
        let n = 0;
        while (this.acc >= STEP && n < 6) {
          b.tick();
          if (b.slowmo > 0) b.slowmo--;
          this.acc -= STEP;
          n++;
          if (this.mode !== 'battle') break;
        }
        if (n >= 6) this.acc = 0;
      }
      if (this.battle) {
        this.battle.render(this.paused ? 1 : this.acc / STEP, this.paused ? 0 : dt);
        this.hud.update(this.battle);
      }
    } else {
      this.menuCamera(dt);
      this.acc += dt;
      while (this.acc >= STEP) { this.acc -= STEP; this.effects.update(); this.animatePreviews(STEP); }
    }
    this.stage.update(dt);
    this.R.render();
  }

  menuCamera(dt) {
    const c = this.camera, t = this.time;
    if (this.mode === 'title') {
      c.position.set(Math.sin(t * 0.15) * 1.2, 1.25 + Math.sin(t * 0.2) * 0.1, 6.4);
      c.lookAt(0, 1.3, 0);
    } else if (this.mode === 'select') {
      c.position.set(0, 1.9, 7.4);
      c.lookAt(0, 0.6, 0);
    } else if (this.mode === 'results') {
      c.position.set(0.2, 1.5, 5.6);
      c.lookAt(0.3, 1.05, 0);
    }
  }
}

const app = new App();
window.app = app;
// タッチ操作を検知したらタッチモードへ
window.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' && !app.isTouch) app.setTouchMode(true); }, { capture: true });
// 本番ビルドではサービスワーカーを登録（オフラインで遊べるPWA）
if (typeof __PROD__ !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
