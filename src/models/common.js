import * as THREE from 'three';

// 先細りカプセル（原点から -Y 方向へ len 伸びる）
export function taperCapsule(len, r0, r1, seg = 12) {
  const pts = [];
  const n = 6;
  for (let i = 0; i <= n; i++) {
    const a = -Math.PI / 2 + (i / n) * (Math.PI / 2);
    pts.push(new THREE.Vector2(Math.max(0.0001, r1 * Math.cos(a)), -len + r1 * Math.sin(a)));
  }
  for (let i = 1; i <= n; i++) {
    const a = (i / n) * (Math.PI / 2);
    pts.push(new THREE.Vector2(Math.max(0.0001, r0 * Math.cos(a)), r0 * Math.sin(a)));
  }
  return new THREE.LatheGeometry(pts, seg);
}

// パラメトリックに毎フレーム形状を更新できる布メッシュ
export class ParamSurface {
  constructor(cols, rows, fn, material) {
    this.cols = cols;
    this.rows = rows;
    this.fn = fn;
    const n = (cols + 1) * (rows + 1);
    this.pos = new Float32Array(n * 3);
    const uv = new Float32Array(n * 2);
    const idx = [];
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const i = r * (cols + 1) + c;
        uv[i * 2] = c / cols;
        uv[i * 2 + 1] = r / rows;
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const a = r * (cols + 1) + c, b = a + 1, d = a + cols + 1, e = d + 1;
        idx.push(a, d, b, b, d, e);
      }
    }
    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.pos, 3);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    this.geo = geo;
    this.mesh = new THREE.Mesh(geo, material);
    this.mesh.castShadow = true;
    this.mesh.frustumCulled = false;
    this.out = [0, 0, 0];
    this.update({});
  }
  update(params) {
    const { cols, rows, pos, out } = this;
    let i = 0;
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        this.fn(c / cols, r / rows, params, out);
        pos[i++] = out[0]; pos[i++] = out[1]; pos[i++] = out[2];
      }
    }
    this.posAttr.needsUpdate = true;
    this.geo.computeVertexNormals();
  }
}

// 区分線形テーブル
export function table(tab, v) {
  if (v <= tab[0][0]) return tab[0][1];
  for (let i = 0; i < tab.length - 1; i++) {
    const [a, x] = tab[i], [b, y] = tab[i + 1];
    if (v <= b) return x + (y - x) * ((v - a) / (b - a));
  }
  return tab[tab.length - 1][1];
}

// 世界座標でなびくチューブ（ウィスプ/羽飾り）
export class FlowTube {
  constructor({ segments = 16, radial = 6, segLen = 0.12, radius = (t) => 0.05, colors, flat = 0.55 }) {
    this.n = segments + 1;
    this.radial = radial;
    this.segLen = segLen;
    this.radius = radius;
    this.flat = flat;
    this.p = []; this.o = [];
    for (let i = 0; i < this.n; i++) { this.p.push(new THREE.Vector3()); this.o.push(new THREE.Vector3()); }
    const vcount = this.n * radial;
    this.posArr = new Float32Array(vcount * 3);
    const col = new Float32Array(vcount * 3);
    const tmp = new THREE.Color();
    for (let i = 0; i < this.n; i++) {
      const t = i / (this.n - 1);
      colors(t, tmp);
      for (let k = 0; k < radial; k++) {
        const vi = (i * radial + k) * 3;
        col[vi] = tmp.r; col[vi + 1] = tmp.g; col[vi + 2] = tmp.b;
      }
    }
    const idx = [];
    for (let i = 0; i < this.n - 1; i++) {
      for (let k = 0; k < radial; k++) {
        const a = i * radial + k, b = i * radial + ((k + 1) % radial);
        const c = a + radial, d = b + radial;
        idx.push(a, c, b, b, c, d);
      }
    }
    const geo = new THREE.BufferGeometry();
    this.attr = new THREE.BufferAttribute(this.posArr, 3);
    this.attr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.attr);
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setIndex(idx);
    this.mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false;
    this.inited = false;
    this._t = new THREE.Vector3(); this._n = new THREE.Vector3(); this._b = new THREE.Vector3();
  }
  reset(anchor, dir) {
    for (let i = 0; i < this.n; i++) {
      this.p[i].copy(anchor).addScaledVector(dir, i * this.segLen);
      this.o[i].copy(this.p[i]);
    }
    this.inited = true;
  }
  // force(i, t, out) で各点に加える加速度
  simulate(anchor, force, damping = 0.9) {
    const { p, o, n } = this;
    if (!this.inited) this.reset(anchor, new THREE.Vector3(0, -1, 0));
    p[0].copy(anchor); o[0].copy(anchor);
    const f = new THREE.Vector3();
    for (let i = 1; i < n; i++) {
      const cur = p[i];
      const vx = (cur.x - o[i].x) * damping, vy = (cur.y - o[i].y) * damping, vz = (cur.z - o[i].z) * damping;
      o[i].copy(cur);
      f.set(0, 0, 0);
      force(i, i / (n - 1), f);
      cur.x += vx + f.x; cur.y += vy + f.y; cur.z += vz + f.z;
    }
    for (let it = 0; it < 3; it++) {
      for (let i = 1; i < n; i++) {
        const a = p[i - 1], b = p[i];
        const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
        const d = Math.hypot(dx, dy, dz) || 1e-6;
        const k = this.segLen / d;
        b.x = a.x + dx * k; b.y = a.y + dy * k; b.z = a.z + dz * k;
      }
    }
    this.rebuild();
  }
  rebuild() {
    const { p, n, radial, posArr } = this;
    const T = this._t, N = this._n, B = this._b;
    for (let i = 0; i < n; i++) {
      const a = p[Math.max(0, i - 1)], b = p[Math.min(n - 1, i + 1)];
      T.subVectors(b, a).normalize();
      N.set(0, 0, 1).cross(T);
      if (N.lengthSq() < 1e-4) N.set(1, 0, 0);
      N.normalize();
      B.crossVectors(T, N).normalize();
      const tt = i / (n - 1);
      const r = this.radius(tt);
      // うねり（リボンをジグザグに揺らす）
      const w = (this.waveAmp || 0) * tt * Math.sin(tt * (this.waveFreq || 10) - (this.waveT || 0));
      const tw = (this.twist || 0) * tt;
      const ct = Math.cos(tw), st = Math.sin(tw);
      for (let k = 0; k < radial; k++) {
        const ang = (k / radial) * Math.PI * 2;
        const ax = Math.cos(ang) * r, ay = Math.sin(ang) * r * this.flat;
        const cx = ax * ct - ay * st + w, cy = ax * st + ay * ct;
        const vi = (i * radial + k) * 3;
        posArr[vi] = p[i].x + N.x * cx + B.x * cy;
        posArr[vi + 1] = p[i].y + N.y * cx + B.y * cy;
        posArr[vi + 2] = p[i].z + N.z * cx + B.z * cy;
      }
    }
    this.attr.needsUpdate = true;
  }
}

// 点を取るための空オブジェクト
export function marker(parent, x, y, z) {
  const o = new THREE.Object3D();
  o.position.set(x, y, z);
  parent.add(o);
  return o;
}

// モデル一式のGPUリソースを解放（共有マテリアルは残す）
export function disposeTree(root) {
  const seen = new Set();
  root.traverse((o) => {
    if (o.geometry && !seen.has(o.geometry)) { seen.add(o.geometry); o.geometry.dispose(); }
    const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    for (const m of mats) {
      if (seen.has(m) || m.userData.shared) continue;
      seen.add(m);
      m.dispose();
    }
  });
}
