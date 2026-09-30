// ポーズ（関節回転のセット）とキーフレーム補間
// 座標系: モデルは +Z を向く。armR.x 負 = 腕を前に上げる / legR.x 負 = 脚を前へ / shin.x 正 = 膝を曲げる
// torso.x 正 = 前傾 / torso.y 正 = 右肩が前へ / body = 全身回転（宙返り等）
import { easeOut } from '../util.js';

export const JOINTS = ['body', 'hips', 'torso', 'head', 'armL', 'foreL', 'armR', 'foreR', 'legL', 'shinL', 'legR', 'shinR', 'wep', 'earL', 'earR', 'wisp'];
const SCALARS = ['by', 'bz', 'flare'];
const Z = [0, 0, 0];

export function mixPose(a, b, t) {
  const out = {};
  for (const k of JOINTS) {
    const va = a[k], vb = b[k];
    if (!va && !vb) continue;
    const A = va || Z, B = vb || Z;
    out[k] = [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t];
  }
  for (const k of SCALARS) {
    const A = a[k] || 0, B = b[k] || 0;
    if (A || B) out[k] = A + (B - A) * t;
  }
  return out;
}

// keys: [[frame, pose], ...]
export function track(keys, f) {
  if (f <= keys[0][0]) return keys[0][1];
  for (let i = 0; i < keys.length - 1; i++) {
    const [f0, p0] = keys[i];
    const [f1, p1] = keys[i + 1];
    if (f < f1) return mixPose(p0, p1, easeOut((f - f0) / (f1 - f0)));
  }
  return keys[keys.length - 1][1];
}

export const P = (...parts) => Object.assign({}, ...parts);

// rig.j[joint] は Object3D。rig.base[joint] は基準回転（耳など）
export function applyPose(rig, pose, alpha) {
  for (const k of JOINTS) {
    const j = rig.j[k];
    if (!j) continue;
    const v = pose[k] || Z;
    const b = rig.base[k] || Z;
    const tx = b[0] + v[0], ty = b[1] + v[1], tz = b[2] + v[2];
    if (k === 'body') {
      // 全身回転は最短経路で補間（宙返り後に逆回転しない）
      j.rotation.x = wrapNear(j.rotation.x, tx);
      j.rotation.y = wrapNear(j.rotation.y, ty);
      j.rotation.z = wrapNear(j.rotation.z, tz);
    }
    j.rotation.x += (tx - j.rotation.x) * alpha;
    j.rotation.y += (ty - j.rotation.y) * alpha;
    j.rotation.z += (tz - j.rotation.z) * alpha;
  }
  const body = rig.j.body;
  body.position.y += (rig.hipY + (pose.by || 0) - body.position.y) * alpha;
  body.position.z += ((pose.bz || 0) - body.position.z) * alpha;
  rig.flare += ((pose.flare || 0) - rig.flare) * alpha;
}

const TWO_PI = Math.PI * 2;
function wrapNear(cur, tgt) {
  while (cur - tgt > Math.PI) cur -= TWO_PI;
  while (tgt - cur > Math.PI) cur += TWO_PI;
  return cur;
}

// 回転角を -PI..PI に戻す（スピン後に逆回転しないように）
export function normalizeRig(rig) {
  for (const k of ['body', 'hips', 'torso']) {
    const j = rig.j[k];
    if (!j) continue;
    for (const ax of ['x', 'y', 'z']) {
      let a = j.rotation[ax];
      a = ((a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
      j.rotation[ax] = a;
    }
  }
}
