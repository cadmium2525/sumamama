// WebAudio による効果音 & BGM（外部アセットなし）
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.musicOn = true;
    this.bgm = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    const ctx = this.ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.55;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);
    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = 0.9;
    this.sfxBus.connect(this.master);
    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = 0.28;
    this.musicBus.connect(this.master);
    // ノイズバッファ
    const len = ctx.sampleRate * 1.5;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  }

  get ok() { return this.ctx && !this.muted; }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.55;
  }

  tone(freq, dur, { type = 'sine', vol = 0.3, slide = null, delay = 0, attack = 0.005, bus = null } = {}) {
    if (!this.ok) return;
    const ctx = this.ctx, t = ctx.currentTime + delay;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus || this.sfxBus);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  noise(dur, { vol = 0.3, freq = 2000, type = 'bandpass', q = 1, slide = null, delay = 0, bus = null } = {}) {
    if (!this.ok) return;
    const ctx = this.ctx, t = ctx.currentTime + delay;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (slide) f.frequency.exponentialRampToValueAtTime(Math.max(40, slide), t + dur);
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(bus || this.sfxBus);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.05);
  }

  // ---- 効果音 ----
  hit(power = 0.5) {
    const p = Math.min(1.4, power);
    this.tone(160 - p * 40, 0.12 + p * 0.12, { type: 'sine', vol: 0.5 + p * 0.3, slide: 40 });
    this.noise(0.06 + p * 0.1, { vol: 0.35 + p * 0.25, freq: 2400 - p * 900, q: 0.8, slide: 500 });
    if (p > 0.7) {
      this.noise(0.35, { vol: 0.25, freq: 900, type: 'lowpass', slide: 120 });
      this.tone(90, 0.3, { type: 'triangle', vol: 0.35, slide: 30 });
    }
  }
  slash(power = 0.5) {
    this.noise(0.12 + power * 0.1, { vol: 0.16, freq: 4000, q: 2, slide: 900 });
  }
  whoosh(power = 0.5) {
    this.noise(0.14 + power * 0.08, { vol: 0.08 + power * 0.05, freq: 700, q: 1.2, slide: 2200 });
  }
  jump() { this.tone(300, 0.1, { type: 'triangle', vol: 0.12, slide: 620 }); }
  djump() { this.tone(420, 0.14, { type: 'triangle', vol: 0.12, slide: 900 }); this.noise(0.1, { vol: 0.05, freq: 3000 }); }
  land() { this.noise(0.07, { vol: 0.1, freq: 500, type: 'lowpass' }); }
  dash() { this.noise(0.09, { vol: 0.07, freq: 900, type: 'lowpass' }); }
  shieldHit() { this.tone(900, 0.12, { type: 'square', vol: 0.07, slide: 500 }); this.noise(0.08, { vol: 0.12, freq: 3500, q: 3 }); }
  shieldBreak() {
    this.tone(700, 0.5, { type: 'sawtooth', vol: 0.15, slide: 80 });
    this.noise(0.5, { vol: 0.3, freq: 3000, slide: 200 });
  }
  grab() { this.tone(220, 0.06, { type: 'square', vol: 0.08 }); }
  throwS() { this.noise(0.2, { vol: 0.15, freq: 900, slide: 2500 }); }
  ledge() { this.tone(500, 0.05, { type: 'triangle', vol: 0.1 }); }
  dodge() { this.noise(0.12, { vol: 0.08, freq: 5000, q: 2, slide: 2000 }); }
  charge() { this.tone(300, 0.08, { type: 'sine', vol: 0.05, slide: 360 }); }
  orb() { this.tone(520, 0.25, { type: 'sine', vol: 0.18, slide: 180 }); this.tone(780, 0.2, { type: 'triangle', vol: 0.08, slide: 300 }); }
  warp() { this.tone(200, 0.3, { type: 'sine', vol: 0.18, slide: 1400 }); this.noise(0.3, { vol: 0.08, freq: 6000, q: 4, slide: 1500 }); }
  reflect() { this.tone(1200, 0.2, { type: 'triangle', vol: 0.14, slide: 2400 }); }
  counter() { this.tone(1500, 0.12, { type: 'square', vol: 0.1 }); this.tone(2200, 0.3, { type: 'triangle', vol: 0.12, delay: 0.05 }); }
  armor() { this.tone(180, 0.1, { type: 'square', vol: 0.1 }); }
  tech() { this.noise(0.08, { vol: 0.12, freq: 4000, q: 3 }); }
  star() { this.tone(1800, 0.15, { type: 'triangle', vol: 0.06 }); }
  ko() {
    this.tone(120, 1.1, { type: 'sawtooth', vol: 0.3, slide: 30 });
    this.noise(1.2, { vol: 0.5, freq: 1800, type: 'lowpass', slide: 80 });
    this.tone(60, 1.0, { type: 'sine', vol: 0.6, slide: 25 });
  }
  fsReady() {
    [660, 880, 1100, 1320, 1760].forEach((f, i) => this.tone(f, 0.3, { type: 'triangle', vol: 0.1, delay: i * 0.06 }));
    this.noise(0.6, { vol: 0.2, freq: 5000, q: 2, slide: 1500 });
  }
  fsStart() {
    this.tone(110, 1.2, { type: 'sawtooth', vol: 0.18, slide: 440 });
    this.noise(1.0, { vol: 0.25, freq: 400, slide: 4000, q: 1 });
    [523, 659, 784].forEach((f, i) => this.tone(f, 0.8, { type: 'square', vol: 0.06, delay: 0.3 + i * 0.1 }));
  }
  fsBoom() {
    this.tone(70, 1.4, { type: 'sine', vol: 0.7, slide: 25 });
    this.noise(1.3, { vol: 0.55, freq: 2500, type: 'lowpass', slide: 100 });
    this.tone(200, 0.8, { type: 'sawtooth', vol: 0.2, slide: 40 });
  }
  countdown() { this.tone(660, 0.18, { type: 'square', vol: 0.12 }); }
  go() { this.tone(990, 0.5, { type: 'square', vol: 0.14 }); this.tone(1320, 0.5, { type: 'triangle', vol: 0.1 }); }
  game() {
    [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.5, { type: 'square', vol: 0.09, delay: i * 0.09 }));
  }
  menuMove() { this.tone(880, 0.05, { type: 'square', vol: 0.05 }); }
  menuOk() { this.tone(660, 0.08, { type: 'square', vol: 0.08 }); this.tone(990, 0.12, { type: 'square', vol: 0.08, delay: 0.07 }); }
  menuBack() { this.tone(500, 0.1, { type: 'square', vol: 0.07, slide: 300 }); }

  // ---- BGM: 簡易ステップシーケンサー ----
  playMusic(kind = 'battle') {
    if (!this.ctx) return;
    this.stopMusic();
    if (!this.musicOn) return;
    const ctx = this.ctx;
    const tempo = kind === 'battle' ? 148 : 104;
    const step = 60 / tempo / 4; // 16分
    // Am - F - C - G / Dm - F - E - E
    const prog = kind === 'battle'
      ? [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62], [50, 53, 57], [53, 57, 60], [52, 56, 59], [52, 56, 59]]
      : [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]];
    const melody = kind === 'battle'
      ? [76, -1, 74, 72, 74, -1, 76, -1, 79, -1, 76, 74, 72, -1, 69, -1]
      : [];
    const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
    const bgm = { stepIdx: 0, next: ctx.currentTime + 0.1, timer: 0 };
    const sched = () => {
      while (bgm.next < ctx.currentTime + 0.12) {
        const i = bgm.stepIdx;
        const bar = Math.floor(i / 16) % prog.length;
        const s = i % 16;
        const chord = prog[bar];
        const t = bgm.next;
        const d = t - ctx.currentTime;
        if (!this.muted) {
          // ベース
          if (s % 2 === 0) this.tone(mtof(chord[0] - 24), step * 1.8, { type: 'sawtooth', vol: s % 4 === 0 ? 0.22 : 0.14, delay: d, bus: this.musicBus });
          // アルペジオ
          const arp = chord[[0, 1, 2, 1][s % 4]] + (s >= 8 ? 12 : 0);
          this.tone(mtof(arp), step * 0.9, { type: 'square', vol: 0.045, delay: d, bus: this.musicBus });
          if (kind === 'battle') {
            // ドラム
            if (s % 4 === 0) this.tone(140, 0.14, { type: 'sine', vol: 0.5, slide: 40, delay: d, bus: this.musicBus });
            if (s % 8 === 4) this.noise(0.14, { vol: 0.28, freq: 1800, q: 0.7, delay: d, bus: this.musicBus });
            if (s % 2 === 1) this.noise(0.03, { vol: 0.08, freq: 8000, type: 'highpass', delay: d, bus: this.musicBus });
            // メロディ（偶数小節のみ）
            const m = melody[s];
            if (bar % 2 === 1 && m > 0) this.tone(mtof(m + (bar >= 4 ? -2 : 0)), step * 1.9, { type: 'triangle', vol: 0.12, delay: d, bus: this.musicBus });
          } else if (s === 0) {
            chord.forEach((n) => this.tone(mtof(n + 12), step * 14, { type: 'triangle', vol: 0.05, delay: d, attack: 0.3, bus: this.musicBus }));
          }
        }
        bgm.stepIdx++;
        bgm.next += step;
      }
    };
    bgm.timer = setInterval(sched, 30);
    this.bgm = bgm;
  }

  stopMusic() {
    if (this.bgm) clearInterval(this.bgm.timer);
    this.bgm = null;
  }
}

export const audio = new AudioEngine();
