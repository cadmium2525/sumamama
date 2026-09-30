// ステージ「月夜の聖域」: 当たり判定データと見た目
import * as THREE from 'three';
import { toonMat, mesh, glowMat, softTexture } from './render/toon.js';
import { mergeStatic } from './models/kit.js';

export const STAGE = {
  main: { half: 8, top: 0, lip: -1, bottom: -5, bottomHalf: 3.4 },
  platforms: [
    { x1: -6.2, x2: -2.6, y: 2.7 },
    { x1: 2.6, x2: 6.2, y: 2.7 },
    { x1: -1.8, x2: 1.8, y: 5.3 },
  ],
  ledges: [{ x: -8, y: 0, side: -1 }, { x: 8, y: 0, side: 1 }],
  blast: { left: -21, right: 21, top: 16.5, bottom: -11 },
  spawns: [{ x: -4.4, y: 0 }, { x: 4.4, y: 0 }],
  respawn: { x: 0, y: 8.2 },
};

export const MAIN_SURFACE = { x1: -STAGE.main.half, x2: STAGE.main.half, y: 0, main: true };

// 高さ y における本体(固体)の半幅。範囲外なら -1
export function halfWidthAt(y) {
  const m = STAGE.main;
  if (y > m.top || y < m.bottom) return -1;
  if (y >= m.lip) return m.half;
  const t = (m.lip - y) / (m.lip - m.bottom);
  return m.half + (m.bottomHalf - m.half) * t;
}
export function insideSolid(x, y) {
  const w = halfWidthAt(y);
  return w > 0 && Math.abs(x) < w;
}

export class Stage {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.time = 0;
    this.type = 'battlefield';
    this.activePlatforms = STAGE.platforms;
    this.buildSky();
    this.buildMain();
    this.buildPlatforms();
    this.buildScenery();
    // 動かない部品をまとめて描画コールを削減
    mergeStatic(this.group);
  }

  setType(type) {
    this.type = type;
    const on = type === 'battlefield';
    this.activePlatforms = on ? STAGE.platforms : [];
    this.platGroup.visible = on;
  }

  buildSky() {
    const geo = new THREE.SphereGeometry(180, 32, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: { time: { value: 0 } },
      vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        varying vec3 vP; uniform float time;
        void main(){
          float h = vP.y;
          vec3 top = vec3(0.02,0.02,0.09);
          vec3 mid = vec3(0.13,0.05,0.26);
          vec3 hor = vec3(0.55,0.2,0.45);
          vec3 low = vec3(0.08,0.03,0.14);
          vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0,0.25,h)), top, smoothstep(0.25,0.8,h)) : mix(hor, low, smoothstep(0.0,-0.3,h));
          float band = exp(-pow((h-0.03)*14.0,2.0));
          c += vec3(0.5,0.25,0.4)*band*0.35;
          gl_FragColor = vec4(c,1.0);
          #include <colorspace_fragment>
        }`,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.scene.add(this.sky);

    // 星
    const N = 900;
    const pos = new Float32Array(N * 3), size = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2;
      const y = Math.abs(u) * 0.95 + 0.05;
      const r = Math.sqrt(1 - y * y);
      pos[i * 3] = Math.cos(a) * r * 170; pos[i * 3 + 1] = y * 170 - 10; pos[i * 3 + 2] = Math.sin(a) * r * 170;
      size[i] = Math.random() * 2.2 + 0.6;
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    sg.setAttribute('size', new THREE.BufferAttribute(size, 1));
    this.starMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { time: { value: 0 } },
      vertexShader: `attribute float size; uniform float time; varying float vA;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*(1.0+0.4*sin(time*2.0+position.x)); vA = 0.6+0.4*sin(time*3.0+position.z*0.3);
        gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `varying float vA; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d)); gl_FragColor = vec4(vec3(1.0,0.92,1.0)*1.4, a*vA); }`,
    });
    this.scene.add(new THREE.Points(sg, this.starMat));

    // 月
    const moon = new THREE.Mesh(new THREE.CircleGeometry(9, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xfff2d6).multiplyScalar(1.25), fog: false }));
    moon.position.set(-38, 34, -120);
    moon.lookAt(0, 0, 0);
    this.scene.add(moon);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: 0xffb8e8, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.scale.set(60, 60, 1);
    halo.position.copy(moon.position).multiplyScalar(1.03);
    this.scene.add(halo);
  }

  buildMain() {
    const m = STAGE.main;
    // 本体は奥へずらし、前面がファイターのすぐ手前に来るようにする（崖つかまりが隠れないように）
    const g = new THREE.Group();
    g.position.z = -2.65;
    this.group.add(g);
    // 本体（側面の形状は当たり判定と一致）
    const shape = new THREE.Shape();
    shape.moveTo(-m.half, m.top);
    shape.lineTo(m.half, m.top);
    shape.lineTo(m.half, m.lip);
    shape.lineTo(m.bottomHalf, m.bottom);
    shape.lineTo(-m.bottomHalf, m.bottom);
    shape.lineTo(-m.half, m.lip);
    shape.lineTo(-m.half, m.top);
    const depth = 6;
    const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSize: 0.15, bevelThickness: 0.2, bevelSegments: 2 });
    geo.translate(0, 0, -depth / 2);
    const rock = mesh(geo, toonMat(0x3a2f5c), { outline: 0x0c0718, thick: 0.05 });
    rock.receiveShadow = true;
    g.add(rock);
    // 上面のタイル
    const top = new THREE.Mesh(new THREE.BoxGeometry(m.half * 2 + 0.4, 0.22, depth + 0.5), toonMat(0x8b86b8));
    top.position.y = -0.09;
    top.receiveShadow = true;
    g.add(top);
    const inlay = new THREE.Mesh(new THREE.BoxGeometry(m.half * 2 - 0.6, 0.02, depth - 1.2), toonMat(0x6f6aa0));
    inlay.position.y = 0.025; inlay.receiveShadow = true;
    g.add(inlay);
    // 金の縁取り
    const goldM = toonMat(0xf0c040, { emissive: new THREE.Color(0x3a2a00) });
    const trim = mesh(new THREE.BoxGeometry(m.half * 2 + 0.5, 0.14, 0.14), goldM, { outline: 0x201000, thick: 0.02 });
    trim.position.set(0, -0.2, depth / 2 + 0.26);
    g.add(trim);
    for (const s of [-1, 1]) {
      const cap = mesh(new THREE.BoxGeometry(0.14, 0.14, depth + 0.5), goldM, { outline: 0x201000, thick: 0.02 });
      cap.position.set(s * (m.half + 0.2), -0.2, 0);
      g.add(cap);
      // 崖の柱飾り
      const pillar = mesh(new THREE.CylinderGeometry(0.22, 0.26, 1.1, 12), toonMat(0xcfc8ee), { outline: 0x0c0718, thick: 0.03 });
      pillar.position.set(s * (m.half - 0.6), 0.55, 0.2);
      pillar.castShadow = true;
      g.add(pillar);
      const orb = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), glowMat(0xffb8ff, 1.6));
      orb.position.set(s * (m.half - 0.6), 1.3, 0.2);
      orb.userData.keep = true;
      g.add(orb);
      this.orbs = this.orbs || [];
      this.orbs.push(orb);
    }
    // 光るルーン（前面）
    const runeMat = glowMat(0x9a6bff, 1.3);
    for (let i = -3; i <= 3; i++) {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.035, 6, 16), runeMat);
      r.position.set(i * 2.1, -0.65, depth / 2 + 0.21);
      g.add(r);
      const d = new THREE.Mesh(new THREE.OctahedronGeometry(0.12, 0), runeMat);
      d.position.set(i * 2.1, -0.65, depth / 2 + 0.22);
      g.add(d);
    }
    // 下にぶら下がる結晶
    this.crystals = [];
    const cm = new THREE.MeshToonMaterial({ color: 0xb58cff, emissive: new THREE.Color(0x5a2cc0), gradientMap: null });
    const spots = [[-2.6, -5.0, 1.2], [0.4, -5.0, 1.9], [2.4, -5.0, 1.0], [-1.2, -5.0, 1.4], [-5.2, -2.6, 0.8], [5.4, -2.4, 0.9]];
    for (const [x, y, s] of spots) {
      const c = mesh(new THREE.ConeGeometry(0.35 * s, 1.8 * s, 5), cm, { outline: 0x1a0830, thick: 0.03 });
      c.rotation.x = Math.PI;
      c.position.set(x, y - 0.9 * s + 0.1, (Math.random() - 0.5) * 2);
      g.add(c);
    }
  }

  buildPlatforms() {
    this.platGroup = new THREE.Group();
    this.platGroup.userData.keep = true;
    this.group.add(this.platGroup);
    const topM = toonMat(0xa9a2d8);
    const edgeM = toonMat(0xf0c040, { emissive: new THREE.Color(0x3a2a00) });
    const glowM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xc58cff).multiplyScalar(1.2), transparent: true, opacity: 0.7 });
    this.platMeshes = [];
    for (const p of STAGE.platforms) {
      const w = p.x2 - p.x1;
      const grp = new THREE.Group();
      grp.position.set((p.x1 + p.x2) / 2, p.y, 0);
      const slab = mesh(new THREE.BoxGeometry(w, 0.22, 3.2), topM, { outline: 0x0c0718, thick: 0.03 });
      slab.position.y = -0.11; slab.receiveShadow = true; slab.castShadow = true;
      grp.add(slab);
      const edge = mesh(new THREE.BoxGeometry(w + 0.1, 0.08, 0.1), edgeM, { outline: null });
      edge.position.set(0, -0.2, 1.62);
      grp.add(edge);
      const under = new THREE.Mesh(new THREE.BoxGeometry(w * 0.85, 0.06, 2.6), glowM);
      under.position.y = -0.26;
      grp.add(under);
      const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), glowMat(0xff9cf0, 1.3));
      gem.position.y = -0.62;
      gem.userData.keep = true;
      grp.add(gem);
      this.platMeshes.push({ grp, gem });
      this.platGroup.add(grp);
    }
  }

  buildScenery() {
    // 遠景の浮島
    const isleMat = toonMat(0x241a3e);
    const topMat = toonMat(0x4e3f7a);
    this.isles = [];
    const defs = [[-34, -6, -45, 5], [30, -2, -55, 6], [-12, 8, -80, 4], [48, 10, -90, 7], [-55, 4, -70, 6], [12, -14, -40, 3]];
    for (const [x, y, z, s] of defs) {
      const grp = new THREE.Group();
      const cone = new THREE.Mesh(new THREE.ConeGeometry(s, s * 2.2, 7), isleMat);
      cone.rotation.x = Math.PI; cone.position.y = -s * 1.1;
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.02, s, s * 0.3, 7), topMat);
      grp.add(cone, cap);
      // 小さな塔
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.12, s * 0.15, s * 1.2, 8), toonMat(0x6e62a8));
      tower.position.set(s * 0.3, s * 0.6, 0);
      const light = new THREE.Mesh(new THREE.SphereGeometry(s * 0.1, 8, 6), glowMat(0xffd48a, 1.5));
      light.position.set(s * 0.3, s * 1.25, 0);
      grp.add(tower, light);
      grp.position.set(x, y, z);
      grp.userData.baseY = y;
      grp.userData.phase = Math.random() * 6;
      this.scene.add(grp);
      this.isles.push(grp);
    }
    // 漂う光の粒
    const N = 140;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = Math.random() * 30 - 8;
      pos[i * 3 + 2] = -Math.random() * 30 - 4;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.motes = new THREE.Points(g, new THREE.PointsMaterial({ map: softTexture(), size: 0.5, color: 0xd9a8ff, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.scene.add(this.motes);
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    this.starMat.uniforms.time.value = t;
    for (const isle of this.isles) isle.position.y = isle.userData.baseY + Math.sin(t * 0.4 + isle.userData.phase) * 0.6;
    for (const { gem } of this.platMeshes) { gem.rotation.y = t * 1.5; gem.position.y = -0.62 + Math.sin(t * 2) * 0.06; }
    if (this.orbs) this.orbs.forEach((o, i) => { o.position.y = 1.3 + Math.sin(t * 1.8 + i) * 0.08; });
    const p = this.motes.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) {
      let y = p.getY(i) + 0.012;
      if (y > 22) y = -8;
      p.setY(i, y);
      p.setX(i, p.getX(i) + Math.sin(t + i) * 0.004);
    }
    p.needsUpdate = true;
  }
}
