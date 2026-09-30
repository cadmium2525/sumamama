// 開発用テストハーネス（ブラウザのコンソールから import('/dev/test.js') で読み込む）
const blank = () => ({ x: 0, y: 0, cx: 0, cy: 0, jump: false, attack: false, special: false, shield: false, smash: false, grab: false });
const app = window.app;

window.T = {
  start(c1 = 'illumine', c2 = 'dullahan', dummy = true, stage = 'battlefield') {
    app.sel.players[0] = { char: c1, type: 'human', level: 5 };
    app.sel.players[1] = { char: c2, type: 'cpu', level: 1 };
    app.sel.stage = stage;
    app.startBattle();
    const b = app.battle;
    if (dummy) { this.dummyRaw = blank(); b.fighters[1].ai = { update: () => ({ ...this.dummyRaw }) }; }
    b.phase = 'fight'; b.phaseT = 200;
    app.paused = true;
    this.b = b; this.p = b.fighters[0]; this.o = b.fighters[1];
    return 'started';
  },
  hold(...codes) { codes.forEach((c) => app.kb.down.add(c)); },
  release(...codes) { if (!codes.length) app.kb.down.clear(); else codes.forEach((c) => app.kb.down.delete(c)); },
  step(n = 1, log = false, f) { const out = []; for (let i = 0; i < n; i++) { this.b.tick(); if (log) out.push(this.snap(f)); } return out; },
  snap(f = this.p) { return `${f.state}${f.state === 'attack' ? ':' + f.moveName + '@' + f.mf : ''} x${f.x.toFixed(2)} y${f.y.toFixed(2)} vx${f.vx.toFixed(3)} vy${f.vy.toFixed(3)} k(${f.kx.toFixed(2)},${f.ky.toFixed(2)}) g${+f.grounded} j${f.jumpsLeft} ${f.damage.toFixed(1)}%`; },
  tap(code, frames = 1) { this.hold(code); const r = this.step(frames, true); this.release(code); return r; },
  live() { app.paused = false; },
};

window.soak = function soak(ticks, l1 = 9, l2 = 9, c1 = 'illumine', c2 = 'dullahan', stage = 'battlefield') {
  app.sel.players[0] = { char: c1, type: 'cpu', level: l1 };
  app.sel.players[1] = { char: c2, type: 'cpu', level: l2 };
  app.sel.stage = stage;
  app.startBattle();
  const b = app.battle;
  app.paused = true;
  const stateCount = {}, maxRun = {}, run = [0, 0], prevS = ['', ''];
  let nan = 0, err = null, hits = 0;
  const events = [];
  const prevDmg = [0, 0], prevStocks = [b.cfg.stocks, b.cfg.stocks];
  let t = 0;
  try {
    for (; t < ticks; t++) {
      if (app.battle !== b) break;
      b.tick();
      b.fighters.forEach((f, i) => {
        stateCount[f.state] = (stateCount[f.state] || 0) + 1;
        if (f.state === prevS[i]) run[i]++; else { run[i] = 0; prevS[i] = f.state; }
        const k = f.def.id + ':' + f.state + (f.state === 'attack' ? ':' + f.moveName : '');
        maxRun[k] = Math.max(maxRun[k] || 0, run[i]);
        if (!isFinite(f.x) || !isFinite(f.y)) nan++;
        if (f.damage > prevDmg[i]) hits++;
        if (f.stocks < prevStocks[i]) { const h = f.lastHitInfo || {}; events.push(`t${t} ${f.def.id} KO at ${prevDmg[i].toFixed(0)}% last=${h.move}(${b.frame - h.frame}f ago) pos ${f.x.toFixed(1)},${f.y.toFixed(1)} upB=${f.upBUsed} j=${f.jumpsLeft}`); }
        prevDmg[i] = f.damage; prevStocks[i] = f.stocks;
      });
    }
  } catch (e) { err = e.stack; }
  const over = Object.entries(maxRun).filter(([k, v]) => v > 150 && !/idle|dead|respawn|ledge/.test(k));
  return { t, err, nan, hits, events, over, mode: app.mode };
};
window.T.show = function (c, move, frame, air = false) {
  this.start(c, c === 'illumine' ? 'dullahan' : 'illumine');
  const p = this.p, o = this.o; p.x = 0; p.facing = 1; o.x = 7;
  document.querySelector('#dbgChk').checked = true; this.b.hitboxDebug = true;
  if (air) { p.grounded = false; p.surface = null; p.setState('air'); p.y = 2.5; }
  p.startMove(move);
  for (let i = 0; i < frame; i++) { if (air) { p.vy = 0; p.y = 2.5; } this.b.tick(); }
  for (let i = 0; i < 8; i++) p.animate();
  this.b.cam = { x: 0.6, y: air ? 3.2 : 1.2, d: 6.5 };
  return p.mf;
};
export default window.T;
