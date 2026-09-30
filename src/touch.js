// スマホ用タッチ操作: 左半分どこでも出現するバーチャルスティック + 右下のボタン
const BTN_DEFS = [
  { b: 'attack', label: '攻撃', cls: 'a' },
  { b: 'special', label: '必殺', cls: 'b' },
  { b: 'jump', label: 'ジャンプ', cls: 'y' },
  { b: 'smash', label: 'スマッシュ', cls: 's' },
  { b: 'shield', label: 'ガード', cls: 'r' },
  { b: 'grab', label: 'つかみ', cls: 'z' },
];

export class TouchControls {
  constructor(root, onPause) {
    this.state = { x: 0, y: 0, jump: false, attack: false, special: false, shield: false, smash: false, grab: false };
    this.enabled = false;
    const el = document.createElement('div');
    el.id = 'touch';
    el.className = 'hidden';
    el.innerHTML = `
      <div id="stickZone"></div>
      <div id="stickBase"><div id="stickKnob"></div></div>
      <div id="tbtns">${BTN_DEFS.map((d) => `<div class="tb ${d.cls}" data-b="${d.b}"><span>${d.label}</span></div>`).join('')}</div>
      <div id="tpause">II</div>`;
    root.appendChild(el);
    this.el = el;
    this.base = el.querySelector('#stickBase');
    this.knob = el.querySelector('#stickKnob');
    this.stickId = null;
    this.origin = { x: 0, y: 0 };
    this.radius = 56;
    const zone = el.querySelector('#stickZone');
    this.zone = zone;
    zone.addEventListener('pointerdown', (e) => {
      // 前の指の入力が残っていても、新しく触れた指で必ず操作し直す
      if (this.stickId !== null) this.releaseStick();
      this.stickId = e.pointerId;
      try { zone.setPointerCapture(e.pointerId); } catch (err) { /* 合成イベント等 */ }
      this.origin = { x: e.clientX, y: e.clientY };
      this.base.style.left = e.clientX + 'px';
      this.base.style.top = e.clientY + 'px';
      this.base.classList.add('on');
      this.moveStick(e.clientX, e.clientY);
      e.preventDefault();
    });
    // 指がどこへ移動しても追従できるよう window で受ける
    window.addEventListener('pointermove', (e) => { if (e.pointerId === this.stickId) this.moveStick(e.clientX, e.clientY); }, true);
    const endPointer = (e) => {
      if (e.pointerId === this.stickId) this.releaseStick();
      this.releaseButtonPointer(e.pointerId);
    };
    // 指を離した場所がスティック領域の外でも確実に解除する
    for (const t of ['pointerup', 'pointercancel']) window.addEventListener(t, endPointer, true);
    zone.addEventListener('lostpointercapture', (e) => { if (e.pointerId === this.stickId) this.releaseStick(); });
    // タッチの終了時に「画面に残っている指」と入力を突き合わせる（取りこぼし対策）
    const reconcile = (e) => this.reconcile(e.touches);
    window.addEventListener('touchend', reconcile, true);
    window.addEventListener('touchcancel', reconcile, true);
    // アプリ切替・画面非表示では全入力を解除
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.reset(); });
    window.addEventListener('blur', () => this.reset());
    window.addEventListener('pagehide', () => this.reset());
    // ボタン（複数同時押し可）
    this.btnPointers = new Map();
    this.btnEls = {};
    for (const b of el.querySelectorAll('.tb')) {
      const key = b.dataset.b;
      this.btnEls[key] = b;
      b.addEventListener('pointerdown', (e) => {
        try { b.setPointerCapture(e.pointerId); } catch (err) { /* 合成イベント等 */ }
        this.btnPointers.set(e.pointerId, key);
        this.state[key] = true;
        b.classList.add('on');
        if (navigator.vibrate) navigator.vibrate(8);
        e.preventDefault();
      });
      b.addEventListener('lostpointercapture', (e) => this.releaseButtonPointer(e.pointerId));
    }
    el.querySelector('#tpause').addEventListener('pointerdown', (e) => { e.preventDefault(); onPause(); });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  releaseStick() {
    this.stickId = null;
    this.state.x = 0; this.state.y = 0;
    this.base.classList.remove('on');
    this.knob.style.transform = 'translate(-50%,-50%)';
  }

  releaseButtonPointer(id) {
    const key = this.btnPointers.get(id);
    if (!key) return;
    this.btnPointers.delete(id);
    if (![...this.btnPointers.values()].includes(key)) { this.state[key] = false; this.btnEls[key].classList.remove('on'); }
  }

  // 画面に残っている指の位置と、押されている入力を突き合わせる
  reconcile(touches) {
    if (!touches || touches.length === 0) { this.reset(); return; }
    const inside = (el) => {
      const r = el.getBoundingClientRect();
      for (const t of touches) if (t.clientX >= r.left - 30 && t.clientX <= r.right + 30 && t.clientY >= r.top - 30 && t.clientY <= r.bottom + 30) return true;
      return false;
    };
    if (this.stickId !== null) {
      // スティックの指は左側のどこかにいるはず。左側に指が1本もなければ解除
      const zr = this.zone.getBoundingClientRect();
      let any = false;
      for (const t of touches) if (t.clientX <= zr.right + 80) any = true;
      if (!any) this.releaseStick();
    }
    for (const [id, key] of [...this.btnPointers]) if (!inside(this.btnEls[key])) this.releaseButtonPointer(id);
  }

  moveStick(px, py) {
    let dx = px - this.origin.x, dy = py - this.origin.y;
    const d = Math.hypot(dx, dy);
    const r = this.radius;
    // 大きく引っぱったら土台を追従させる
    if (d > r * 1.6) {
      const k = (d - r * 1.6) / d;
      this.origin.x += dx * k; this.origin.y += dy * k;
      this.base.style.left = this.origin.x + 'px';
      this.base.style.top = this.origin.y + 'px';
      dx = px - this.origin.x; dy = py - this.origin.y;
    }
    const m = Math.min(1, Math.hypot(dx, dy) / r);
    const a = Math.atan2(dy, dx);
    const nx = Math.cos(a) * m, ny = Math.sin(a) * m;
    const dz = m < 0.18 ? 0 : 1;
    this.state.x = nx * dz;
    this.state.y = -ny * dz;
    this.knob.style.transform = `translate(calc(-50% + ${nx * r}px), calc(-50% + ${ny * r}px))`;
  }

  show(on) {
    this.enabled = on;
    this.el.classList.toggle('hidden', !on);
    if (!on) this.reset();
  }

  reset() {
    for (const k of Object.keys(this.state)) this.state[k] = k === 'x' || k === 'y' ? 0 : false;
    this.releaseStick();
    this.btnPointers.clear();
    for (const b of this.el.querySelectorAll('.tb')) b.classList.remove('on');
  }

  // raw 入力に合成
  read(raw) {
    if (!this.enabled) return raw;
    const s = this.state;
    if (Math.abs(s.x) > Math.abs(raw.x)) raw.x = s.x;
    if (Math.abs(s.y) > Math.abs(raw.y)) raw.y = s.y;
    for (const b of ['jump', 'attack', 'special', 'shield', 'smash', 'grab']) if (s[b]) raw[b] = true;
    return raw;
  }
}
