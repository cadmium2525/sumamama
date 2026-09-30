// 入力: キーボード / ゲームパッド / CPU を共通の raw 形式に変換し、押下バッファを管理する
export const BUTTONS = ['jump', 'attack', 'special', 'shield', 'smash', 'grab'];
const BUF = 7; // 先行入力フレーム

export const KEYMAPS = [
  { left: ['KeyA'], right: ['KeyD'], up: ['KeyW'], down: ['KeyS'], jump: ['Space'],
    attack: ['KeyJ', 'KeyF'], special: ['KeyK', 'KeyG'], shield: ['KeyL', 'KeyH'], smash: ['KeyI', 'KeyR'], grab: ['KeyU', 'KeyT'] },
  { left: ['ArrowLeft'], right: ['ArrowRight'], up: ['ArrowUp'], down: ['ArrowDown'], jump: ['Numpad0', 'ShiftRight'],
    attack: ['Numpad1', 'Comma'], special: ['Numpad2', 'Period'], shield: ['Numpad3', 'Slash'], smash: ['Numpad5', 'Semicolon'], grab: ['Numpad4', 'KeyM'] },
];

export function blankRaw() {
  return { x: 0, y: 0, cx: 0, cy: 0, jump: false, attack: false, special: false, shield: false, smash: false, grab: false, start: false, any: false };
}

export class Keyboard {
  constructor() {
    this.down = new Set();
    this.pressedOnce = new Set();
    window.addEventListener('keydown', (e) => {
      if (!this.down.has(e.code)) this.pressedOnce.add(e.code);
      this.down.add(e.code);
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Slash', 'Tab'].includes(e.code)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.down.delete(e.code));
    window.addEventListener('blur', () => this.down.clear());
  }
  // メニュー用: 1回だけ反応
  take(code) {
    if (this.pressedOnce.has(code)) { this.pressedOnce.delete(code); return true; }
    return false;
  }
  clearOnce() { this.pressedOnce.clear(); }
  any(codes) { return codes.some((c) => this.down.has(c)); }

  read(maps, raw) {
    for (const m of maps) {
      const r = this.any(m.right), l = this.any(m.left), u = this.any(m.up), d = this.any(m.down);
      if (r && !l) raw.x = 1; else if (l && !r) raw.x = -1;
      if (u && !d) raw.y = 1; else if (d && !u) raw.y = -1;
      for (const b of BUTTONS) if (this.any(m[b])) raw[b] = true;
    }
    return raw;
  }
}

export function readGamepad(index, raw) {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  const gp = pads && pads[index];
  if (!gp) return raw;
  const dz = (v) => (Math.abs(v) < 0.22 ? 0 : v);
  const b = (i) => gp.buttons[i] && gp.buttons[i].pressed;
  let x = dz(gp.axes[0] || 0), y = -dz(gp.axes[1] || 0);
  if (b(14)) x = -1; if (b(15)) x = 1; if (b(12)) y = 1; if (b(13)) y = -1;
  if (Math.abs(x) > Math.abs(raw.x)) raw.x = x;
  if (Math.abs(y) > Math.abs(raw.y)) raw.y = y;
  const cx = dz(gp.axes[2] || 0), cy = -dz(gp.axes[3] || 0);
  if (Math.hypot(cx, cy) > 0.6) { raw.cx = cx; raw.cy = cy; }
  if (b(0)) raw.attack = true;
  if (b(1)) raw.special = true;
  if (b(2) || b(3)) raw.jump = true;
  if (b(4) || b(5)) raw.grab = true;
  if (b(6) || b(7)) raw.shield = true;
  if (b(9)) raw.start = true;
  return raw;
}

// プレイヤー1人分の入力状態（押下エッジ・バッファ）
export class PlayerInput {
  constructor() {
    this.raw = blankRaw();
    this.prev = blankRaw();
    this.pressed = {};
    this.buf = {};
    this.stick = { x: 0, y: 0 };
    this.dirBuf = { up: 0, down: 0, left: 0, right: 0 };
    this.dirPressed = { up: false, down: false, left: false, right: false };
    this.cBuf = 0;
    this.cDir = { x: 0, y: 0 };
    this.mash = 0;
    this.tapJump = true;
    for (const b of BUTTONS) { this.pressed[b] = false; this.buf[b] = 0; }
  }

  latch(raw) {
    this.prev = this.raw;
    this.raw = raw;
    this.mash = 0;
    for (const b of BUTTONS) {
      this.pressed[b] = raw[b] && !this.prev[b];
      if (this.pressed[b]) { this.buf[b] = BUF; this.mash++; }
      else if (this.buf[b] > 0) this.buf[b]--;
    }
    this.stick.x = raw.x;
    this.stick.y = raw.y;
    const T = 0.6;
    const dp = this.dirPressed;
    dp.up = raw.y > T && !(this.prev.y > T);
    dp.down = raw.y < -T && !(this.prev.y < -T);
    dp.right = raw.x > T && !(this.prev.x > T);
    dp.left = raw.x < -T && !(this.prev.x < -T);
    for (const k of ['up', 'down', 'left', 'right']) {
      if (dp[k]) { this.dirBuf[k] = BUF; this.mash++; }
      else if (this.dirBuf[k] > 0) this.dirBuf[k]--;
    }
    // Cスティック（スマッシュ方向）
    const cOn = Math.hypot(raw.cx, raw.cy) > 0.6, cPrev = Math.hypot(this.prev.cx, this.prev.cy) > 0.6;
    if (cOn && !cPrev) { this.cBuf = BUF; this.cDir = { x: raw.cx, y: raw.cy }; }
    else if (this.cBuf > 0) this.cBuf--;
  }

  consume(b) { this.buf[b] = 0; }
  consumeDir(k) { this.dirBuf[k] = 0; }
  clearAll() {
    for (const b of BUTTONS) this.buf[b] = 0;
    for (const k in this.dirBuf) this.dirBuf[k] = 0;
    this.cBuf = 0;
  }
  // 水平方向を今押したか
  sidePressed() { return this.dirBuf.left > 0 ? -1 : this.dirBuf.right > 0 ? 1 : 0; }
}
