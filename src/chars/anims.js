// 共通の状態アニメーション（キャラごとに基本姿勢/上書きを渡す）
const add = (a = [0, 0, 0], b = [0, 0, 0]) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];

export function makeAnims(o) {
  const I = o.idle;
  const hip = o.hipY;
  const base = {
    idle: (t) => {
      const b = Math.sin(t * 0.055);
      return { ...I, by: (I.by || 0) + b * 0.018 * (o.bob || 1), torso: add(I.torso, [b * 0.03, 0, 0]), armR: add(I.armR, [0, 0, -b * 0.04]), armL: add(I.armL, [0, 0, b * 0.04]) };
    },
    walk: (ph) => {
      const s = Math.sin(ph), c = Math.cos(ph);
      return {
        legR: [-0.55 * s, 0, -0.04], legL: [0.55 * s, 0, 0.04],
        shinR: [0.1 + 0.7 * Math.max(0, c), 0, 0], shinL: [0.1 + 0.7 * Math.max(0, -c), 0, 0],
        armR: [0.4 * s, 0, -0.18], armL: [-0.4 * s, 0, 0.18], foreR: [-0.3, 0, 0], foreL: [-0.3, 0, 0],
        torso: [0.08, 0.12 * s, 0], by: -0.03 + 0.03 * Math.abs(c), ...(o.walkExtra || {}),
      };
    },
    run: (ph) => {
      const s = Math.sin(ph), c = Math.cos(ph);
      return {
        legR: [-0.95 * s - 0.2, 0, -0.04], legL: [0.95 * s - 0.2, 0, 0.04],
        shinR: [0.3 + 1.3 * Math.max(0, c), 0, 0], shinL: [0.3 + 1.3 * Math.max(0, -c), 0, 0],
        armR: [0.8 * s, 0, -0.25], armL: [-0.8 * s, 0, 0.25], foreR: [-1.2, 0, 0], foreL: [-1.2, 0, 0],
        torso: [0.35, 0.2 * s, 0], head: [-0.2, 0, 0], by: -0.06 + 0.06 * Math.abs(c), ...(o.runExtra ? o.runExtra(ph) : {}),
      };
    },
    skid: () => ({ torso: [-0.3, 0, 0], legR: [-0.8, 0, -0.1], shinR: [0.2, 0, 0], legL: [0.3, 0, 0.1], shinL: [1.0, 0, 0], armR: [-0.5, 0, -0.8], armL: [-0.5, 0, 0.8], by: -0.14 }),
    crouch: (t) => ({ by: -hip * 0.4, torso: [0.4, 0, 0], head: [-0.25, 0, 0], legR: [-1.25, 0, -0.18], shinR: [2.1, 0, 0], legL: [-1.25, 0, 0.18], shinL: [2.1, 0, 0], armR: [-0.4, 0, -0.35], armL: [-0.4, 0, 0.35], foreR: [-0.6, 0, 0], foreL: [-0.6, 0, 0] }),
    squat: () => ({ by: -hip * 0.22, torso: [0.3, 0, 0], legR: [-0.8, 0, -0.1], shinR: [1.3, 0, 0], legL: [-0.8, 0, 0.1], shinL: [1.3, 0, 0], armR: [0.3, 0, -0.4], armL: [0.3, 0, 0.4] }),
    jump: () => ({ legR: [-0.9, 0, -0.05], shinR: [1.3, 0, 0], legL: [0.15, 0, 0.05], shinL: [0.6, 0, 0], armR: [-0.6, 0, -0.5], armL: [-0.4, 0, 0.6], torso: [-0.1, 0, 0], head: [-0.15, 0, 0] }),
    fall: (t) => ({ legR: [-0.35, 0, -0.1], shinR: [0.5, 0, 0], legL: [0.15, 0, 0.1], shinL: [0.35, 0, 0], armR: [-0.3, 0, -1.0 + Math.sin(t * 0.2) * 0.1], armL: [-0.3, 0, 1.0 - Math.sin(t * 0.2) * 0.1], torso: [0.05, 0, 0] }),
    djump: (t) => {
      const k = Math.min(1, t / 20);
      return { body: [k * Math.PI * 2, 0, 0], legR: [-1.4, 0, -0.1], shinR: [2.0, 0, 0], legL: [-1.4, 0, 0.1], shinL: [2.0, 0, 0], armR: [-1.2, 0, -0.4], armL: [-1.2, 0, 0.4], foreR: [-1, 0, 0], foreL: [-1, 0, 0] };
    },
    helpless: (t) => ({ body: [0.15, 0, Math.sin(t * 0.15) * 0.15], armR: [-2.6, 0, -0.5 + Math.sin(t * 0.3) * 0.3], armL: [-2.6, 0, 0.5 - Math.sin(t * 0.3) * 0.3], legR: [-0.2, 0, -0.1], shinR: [0.6, 0, 0], legL: [0.2, 0, 0.1], shinL: [0.3, 0, 0], head: [-0.3, 0, 0] }),
    hurt: () => ({ torso: [-0.45, 0, 0], head: [-0.5, 0, 0], armR: [-0.9, 0, -1.0], armL: [-0.9, 0, 1.0], legR: [-0.5, 0, -0.1], shinR: [0.9, 0, 0], legL: [0.3, 0, 0.1], shinL: [0.4, 0, 0] }),
    tumble: (t) => ({ body: [-t * 0.32, 0, 0.3], torso: [-0.3, 0, 0], armR: [-1.0, 0, -1.3], armL: [-1.0, 0, 1.3], legR: [-0.6, 0, -0.3], shinR: [0.8, 0, 0], legL: [0.3, 0, 0.3], shinL: [0.8, 0, 0] }),
    tumbleIdle: (t) => ({ body: [-0.35, 0, Math.sin(t * 0.1) * 0.2], torso: [-0.2, 0, 0], armR: [-1.4, 0, -1.0], armL: [-1.4, 0, 1.0], legR: [-0.4, 0, -0.2], shinR: [0.9, 0, 0], legL: [0.2, 0, 0.2], shinL: [0.6, 0, 0] }),
    shield: () => ({ ...I, by: (I.by || 0) - 0.12, torso: [0.3, 0, 0], armR: [-1.1, 0, 0.3], foreR: [-1.3, 0, 0], armL: [-1.1, 0, -0.3], foreL: [-1.3, 0, 0], ...(o.shieldExtra || {}) }),
    roll: (f, fwd) => {
      const k = Math.min(1, Math.max(0, (f - 2) / 22));
      return { body: [(fwd ? 1 : -1) * k * Math.PI * 2, 0, 0], by: -hip * 0.35 * Math.sin(k * Math.PI), legR: [-1.5, 0, -0.1], shinR: [2.2, 0, 0], legL: [-1.5, 0, 0.1], shinL: [2.2, 0, 0], armR: [-1.4, 0, 0.2], armL: [-1.4, 0, -0.2], foreR: [-1.3, 0, 0], foreL: [-1.3, 0, 0], torso: [0.8, 0, 0] };
    },
    spotdodge: (f) => ({ by: -0.25, torso: [0.2, 0, 0.3], head: [0.3, 0, 0], legR: [-0.9, 0, -0.2], shinR: [1.5, 0, 0], legL: [-0.4, 0, 0.2], shinL: [1.2, 0, 0], armR: [0.4, 0, -0.9], armL: [0.4, 0, 0.9] }),
    airdodge: (f) => ({ body: [0.3, Math.min(1, f / 18) * Math.PI * 2, 0], legR: [-1.3, 0, -0.1], shinR: [1.9, 0, 0], legL: [-1.3, 0, 0.1], shinL: [1.9, 0, 0], armR: [-1.3, 0, 0.3], armL: [-1.3, 0, -0.3], foreR: [-1.4, 0, 0], foreL: [-1.4, 0, 0] }),
    ledge: (t) => ({ bz: 0.12, armR: [-2.95, 0, -0.2], armL: [-2.95, 0, 0.2], foreR: [0, 0, 0], foreL: [0, 0, 0], torso: [0.1, 0, 0], head: [-0.4, 0, 0], legR: [-0.2 + Math.sin(t * 0.08) * 0.1, 0, -0.1], shinR: [0.4, 0, 0], legL: [0.1 - Math.sin(t * 0.08) * 0.1, 0, 0.1], shinL: [0.3, 0, 0] }),
    climb: (f) => ({ by: -hip * 0.25, torso: [0.6, 0, 0], legR: [-1.5, 0, -0.1], shinR: [1.8, 0, 0], legL: [-0.4, 0, 0.1], shinL: [1.5, 0, 0], armR: [-1.6, 0, -0.2], armL: [-1.6, 0, 0.2] }),
    knockdown: () => ({ body: [-1.5, 0, 0], by: -hip + 0.18, armR: [-2.4, 0, -0.5], armL: [-2.4, 0, 0.5], legR: [-0.1, 0, -0.1], legL: [0.1, 0, 0.1], shinR: [0.3, 0, 0], head: [0.3, 0, 0] }),
    getup: (f) => ({ by: -hip * 0.3, torso: [0.5, 0, 0], legR: [-1.4, 0, -0.1], shinR: [2.0, 0, 0], legL: [0.2, 0, 0.1], shinL: [1.9, 0, 0], armR: [-0.4, 0, -0.5], armL: [-0.4, 0, 0.5] }),
    hold: () => ({ ...I, armR: [-1.35, 0, 0.05], foreR: [-0.3, 0, 0], armL: [-1.35, 0, -0.05], foreL: [-0.3, 0, 0], torso: [0.15, 0, 0], ...(o.holdExtra || {}) }),
    grabbed: (t) => ({ torso: [-0.3, 0, Math.sin(t * 0.5) * 0.1], head: [-0.3, 0, 0], armR: [-0.7, 0, -0.9 + Math.sin(t * 0.7) * 0.3], armL: [-0.7, 0, 0.9 - Math.sin(t * 0.7) * 0.3], legR: [-0.4, 0, -0.1], shinR: [0.8, 0, 0], legL: [0.2, 0, 0.1], shinL: [0.5, 0, 0] }),
    dizzy: (t) => ({ torso: [0.25, 0, Math.sin(t * 0.08) * 0.25], head: [0.35, Math.sin(t * 0.12) * 0.4, 0], armR: [0.2, 0, -0.15], armL: [0.2, 0, 0.15], legR: [-0.1, 0, -0.1], shinR: [0.4, 0, 0], legL: [0.1, 0, 0.1], shinL: [0.4, 0, 0], by: -0.08 }),
    victory: (f) => I,
  };
  return { ...base, ...(o.override || {}) };
}
