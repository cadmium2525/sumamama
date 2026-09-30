// エフェクト: ヒットスパーク・煙・撃墜の爆発・剣の軌跡など
import * as THREE from 'three';
import { softTexture, starTexture, ringTexture } from './toon.js';
import { rand } from '../util.js';

const POOL = 500;

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.free = [];
    this.live = [];
    for (let i = 0; i < POOL; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      s.visible = false;
      s.renderOrder = 10;
      this.group.add(s);
      this.free.push(s);
    }
    this.meshFx = [];
  }

  spawn({ x, y, z = 0.3, vx = 0, vy = 0, vz = 0, life = 20, size = 0.5, size1 = null, color = 0xffffff, tex = 'soft', additive = true, gravity = 0, drag = 1, opacity = 1, rot = 0, spin = 0 }) {
    const s = this.free.pop();
    if (!s) return null;
    const m = s.material;
    m.map = tex === 'star' ? starTexture() : tex === 'ring' ? ringTexture() : softTexture();
    m.color.set(color);
    m.blending = additive ? THREE.AdditiveBlending : THREE.NormalBlending;
    m.opacity = opacity;
    m.rotation = rot;
    s.position.set(x, y, z);
    s.scale.set(size, size, 1);
    s.visible = true;
    s.userData = { vx, vy, vz, life, max: life, size, size1: size1 === null ? size : size1, gravity, drag, opacity, spin };
    this.live.push(s);
    return s;
  }

  hitSpark(x, y, color, power = 0.5, dir = 1) {
    const p = Math.min(1.5, power);
    const col = new THREE.Color(color);
    this.spawn({ x, y, z: 0.6, life: 8, size: 1.2 + p * 1.8, size1: 0.3, color: 0xffffff, tex: 'star', rot: rand(0, 3) });
    this.spawn({ x, y, z: 0.5, life: 14, size: 0.4, size1: 2.2 + p * 2.2, color: col, tex: 'ring' });
    const n = 6 + Math.floor(p * 10);
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2);
      const sp = rand(0.08, 0.2) * (0.7 + p);
      this.spawn({ x, y, z: 0.5, vx: Math.cos(a) * sp + dir * 0.05 * p, vy: Math.sin(a) * sp, life: rand(10, 20), size: rand(0.15, 0.35) * (1 + p * 0.5), size1: 0.02, color: i % 2 ? 0xffffff : col, tex: i % 3 ? 'soft' : 'star', drag: 0.9 });
    }
  }

  shieldSpark(x, y, color) {
    this.spawn({ x, y, z: 0.6, life: 10, size: 1.3, size1: 0.2, color: 0xffffff, tex: 'star' });
    for (let i = 0; i < 6; i++) {
      const a = rand(0, Math.PI * 2);
      this.spawn({ x, y, z: 0.5, vx: Math.cos(a) * 0.12, vy: Math.sin(a) * 0.12, life: 12, size: 0.25, size1: 0.02, color, drag: 0.88 });
    }
  }

  dust(x, y, amount = 4, dir = 0) {
    for (let i = 0; i < amount; i++) {
      this.spawn({ x: x + rand(-0.2, 0.2), y: y + 0.1, z: rand(-0.3, 0.5), vx: dir * rand(0.01, 0.05) + rand(-0.03, 0.03), vy: rand(0.005, 0.03), life: rand(18, 30), size: rand(0.3, 0.5), size1: rand(0.8, 1.2), color: 0xc8c0e8, additive: false, opacity: 0.55, drag: 0.94 });
    }
  }

  smoke(x, y, color = 0xd8d0f0) {
    this.spawn({ x: x + rand(-0.1, 0.1), y: y + rand(-0.1, 0.1), z: 0.2, vx: rand(-0.01, 0.01), vy: rand(0, 0.01), life: 26, size: 0.45, size1: 0.9, color, additive: false, opacity: 0.45, drag: 0.95 });
  }

  sparkle(x, y, color = 0xffffff, n = 1, spread = 0.4) {
    for (let i = 0; i < n; i++) {
      this.spawn({ x: x + rand(-spread, spread), y: y + rand(-spread, spread), z: rand(0, 0.6), vy: rand(0.005, 0.02), life: rand(14, 26), size: rand(0.15, 0.32), size1: 0.02, color, tex: 'star', rot: rand(0, 3) });
    }
  }

  ring(x, y, color, size = 2, life = 16) {
    this.spawn({ x, y, z: 0.5, life, size: 0.3, size1: size, color, tex: 'ring' });
  }

  // 撃墜の爆発（ブラストラインから中心方向に伸びる光柱）
  koBlast(x, y, color) {
    const col = new THREE.Color(color);
    const dir = new THREE.Vector2(-x, -y * 0.6 + 2).normalize();
    const geo = new THREE.ConeGeometry(2.4, 18, 24, 1, true);
    geo.translate(0, -9, 0);
    const mat = new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(1.6), transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const cone = new THREE.Mesh(geo, mat);
    cone.position.set(x, y, 0);
    cone.rotation.z = Math.atan2(dir.y, dir.x) + Math.PI / 2;
    this.group.add(cone);
    const core = new THREE.Mesh(new THREE.ConeGeometry(0.9, 16, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    core.geometry.translate(0, -8, 0);
    core.position.copy(cone.position);
    core.rotation.copy(cone.rotation);
    this.group.add(core);
    this.meshFx.push({ mesh: cone, life: 50, max: 50, kind: 'blast' }, { mesh: core, life: 40, max: 40, kind: 'blast' });
    for (let i = 0; i < 40; i++) {
      const a = Math.atan2(dir.y, dir.x) + rand(-0.6, 0.6);
      const sp = rand(0.15, 0.6);
      this.spawn({ x, y, z: rand(-1, 1), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: rand(25, 50), size: rand(0.4, 1.0), size1: 0.05, color: i % 3 ? col : 0xffffff, tex: i % 2 ? 'star' : 'soft', drag: 0.94 });
    }
    this.spawn({ x, y, z: 1, life: 30, size: 2, size1: 14, color: col, tex: 'ring' });
    this.spawn({ x, y, z: 1, life: 18, size: 10, size1: 2, color: 0xffffff });
  }

  update() {
    for (let i = this.live.length - 1; i >= 0; i--) {
      const s = this.live[i];
      const u = s.userData;
      u.life--;
      if (u.life <= 0) {
        s.visible = false;
        this.live.splice(i, 1);
        this.free.push(s);
        continue;
      }
      u.vx *= u.drag; u.vy *= u.drag; u.vz *= u.drag;
      u.vy -= u.gravity;
      s.position.x += u.vx; s.position.y += u.vy; s.position.z += u.vz;
      const t = 1 - u.life / u.max;
      const sz = u.size + (u.size1 - u.size) * t;
      s.scale.set(sz, sz, 1);
      s.material.opacity = u.opacity * (1 - t * t);
      s.material.rotation += u.spin;
    }
    for (let i = this.meshFx.length - 1; i >= 0; i--) {
      const f = this.meshFx[i];
      f.life--;
      const t = 1 - f.life / f.max;
      if (f.kind === 'blast') {
        f.mesh.scale.set(1 - t * 0.7, 0.6 + t * 0.6, 1 - t * 0.7);
        f.mesh.material.opacity = 1 - t;
      }
      if (f.life <= 0) {
        this.group.remove(f.mesh);
        f.mesh.geometry.dispose();
        f.mesh.material.dispose();
        this.meshFx.splice(i, 1);
      }
    }
  }

  clear() {
    for (const s of this.live) { s.visible = false; this.free.push(s); }
    this.live.length = 0;
    for (const f of this.meshFx) { this.group.remove(f.mesh); f.mesh.geometry.dispose(); f.mesh.material.dispose(); }
    this.meshFx.length = 0;
  }
}

// 攻撃の軌跡（リボン）
export class Trail {
  constructor(scene, color, max = 14) {
    this.max = max;
    this.samples = [];
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 2 * 3);
    this.alpha = new Float32Array(max * 2);
    this.posAttr = new THREE.BufferAttribute(this.pos, 3);
    this.aAttr = new THREE.BufferAttribute(this.alpha, 1);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('alpha', this.aAttr);
    const idx = [];
    for (let i = 0; i < max - 1; i++) {
      const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
      idx.push(a, b, c, b, d, c);
    }
    geo.setIndex(idx);
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { color: { value: new THREE.Color(color).multiplyScalar(1.4) } },
      vertexShader: `attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color*vA, vA); }`,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 9;
    scene.add(this.mesh);
    this.a = new THREE.Vector3();
    this.b = new THREE.Vector3();
  }
  // active=true なら新しいサンプルを追加
  update(anchors, active) {
    if (active && anchors) {
      anchors[0].getWorldPosition(this.a);
      anchors[1].getWorldPosition(this.b);
      this.samples.unshift({ a: this.a.clone(), b: this.b.clone(), life: 1 });
    }
    for (const s of this.samples) s.life -= 0.14;
    while (this.samples.length > this.max || (this.samples.length && this.samples[this.samples.length - 1].life <= 0)) this.samples.pop();
    const n = this.samples.length;
    for (let i = 0; i < this.max; i++) {
      const s = this.samples[Math.min(i, n - 1)];
      const k = i * 6;
      if (!s) { this.alpha[i * 2] = this.alpha[i * 2 + 1] = 0; continue; }
      this.pos[k] = s.a.x; this.pos[k + 1] = s.a.y; this.pos[k + 2] = s.a.z;
      this.pos[k + 3] = s.b.x; this.pos[k + 4] = s.b.y; this.pos[k + 5] = s.b.z;
      const al = i < n ? Math.max(0, s.life) * (1 - i / this.max) : 0;
      this.alpha[i * 2] = al * 0.25;
      this.alpha[i * 2 + 1] = al * 0.9;
    }
    this.posAttr.needsUpdate = true;
    this.aAttr.needsUpdate = true;
    this.mesh.visible = n > 1;
  }
  dispose() {
    this.mesh.parent && this.mesh.parent.remove(this.mesh);
    this.mesh.geometry.dispose();
    this.mat.dispose();
  }
}
