// スマッシュボールと「最後の切りふだ」用の演出・処理
import * as THREE from 'three';
import { softTexture, starTexture } from './render/toon.js';
import { rand, clamp, sign } from './util.js';
import { audio } from './audio.js';

export class SmashBall {
  constructor(battle) {
    this.b = battle;
    this.x = rand(-5, 5);
    this.y = 15;
    this.vx = 0; this.vy = -0.05;
    this.r = 0.55;
    this.hp = 40;
    this.life = 60 * 22;
    this.t = 0;
    this.flash = 0;
    this.target = { x: rand(-7, 7), y: rand(2, 7) };
    this.dead = false;
    const g = new THREE.Group();
    this.mat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, flash: { value: 0 } },
      vertexShader: `varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `
        varying vec3 vN; varying vec3 vP; uniform float time; uniform float flash;
        vec3 hue(float h){ return clamp(abs(mod(h*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0); }
        void main(){
          float a = atan(vP.z, vP.x) + vP.y*2.5 + time*2.0;
          vec3 c = hue(fract(a/6.2831 + time*0.1));
          float band = smoothstep(0.08,0.0,abs(vP.y)) + smoothstep(0.08,0.0,abs(vP.x));
          c = mix(c, vec3(1.0), clamp(band,0.0,1.0)*0.9);
          float rim = pow(1.0 - abs(vN.z), 2.0);
          c += rim*0.6 + flash;
          gl_FragColor = vec4(c*1.3, 1.0);
          #include <colorspace_fragment>
        }`,
    });
    this.core = new THREE.Mesh(new THREE.SphereGeometry(this.r, 28, 20), this.mat);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: 0xffe9a0, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
    glow.scale.setScalar(3.2);
    const star = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTexture(), color: 0xffffff, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false }));
    star.scale.setScalar(2.4);
    this.star = star;
    g.add(glow, star, this.core);
    this.mesh = g;
    battle.scene.add(g);
    this.px = this.x; this.py = this.y;
  }

  update() {
    this.t++;
    this.px = this.x; this.py = this.y;
    this.life--;
    if (this.flash > 0) this.flash -= 0.1;
    if (this.life < 0) {
      // 時間切れ: 上へ飛び去る
      this.vy = Math.min(0.2, this.vy + 0.008);
      this.vx *= 0.97;
      if (this.y > 20) this.remove();
    } else {
      if (this.t % 100 === 0 || Math.hypot(this.target.x - this.x, this.target.y - this.y) < 0.6) {
        this.target = { x: rand(-8, 8), y: rand(1.8, 8.5) };
      }
      const ax = clamp(this.target.x - this.x, -1, 1) * 0.003;
      const ay = clamp(this.target.y - this.y, -1, 1) * 0.003;
      this.vx = clamp((this.vx + ax) * 0.985, -0.08, 0.08);
      this.vy = clamp((this.vy + ay) * 0.985, -0.08, 0.08);
    }
    this.x += this.vx;
    this.y += this.vy + Math.sin(this.t * 0.07) * 0.01;
    this.x = clamp(this.x, -14, 14);
    if (this.t % 3 === 0) this.b.effects.sparkle(this.x, this.y, [0xff7070, 0xffe070, 0x70ff90, 0x70b0ff, 0xd070ff][this.t % 5], 1, 0.6);
  }

  hit(dmg, dir) {
    this.hp -= dmg;
    this.flash = 1;
    this.vx = dir * 0.12;
    this.vy = 0.05;
    this.target = { x: this.x + dir * 3, y: clamp(this.y + 1, 2, 8) };
    this.b.effects.hitSpark(this.x, this.y, 0xffe070, 0.4, dir);
    audio.hit(0.3);
    audio.star();
    return this.hp <= 0;
  }

  render(alpha) {
    const x = this.px + (this.x - this.px) * alpha, y = this.py + (this.y - this.py) * alpha;
    this.mesh.position.set(x, y, 0.4);
    this.mat.uniforms.time.value = this.t / 60;
    this.mat.uniforms.flash.value = Math.max(0, this.flash);
    this.core.rotation.y = this.t * 0.03;
    this.star.material.rotation = this.t * 0.02;
  }

  remove() {
    if (this.dead) return;
    this.dead = true;
    this.b.scene.remove(this.mesh);
    this.mesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  }
}

// イルミネの切りふだ: 暗黒の月（相手を閉じ込めて連続ダメージ→爆発）
export class EclipseSphere {
  constructor(battle, x, y) {
    this.b = battle;
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: { time: { value: 0 }, fade: { value: 1 } },
      vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; vN = normalMatrix*normal; gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `
        varying vec3 vN; varying vec3 vV; uniform float time; uniform float fade;
        void main(){
          float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
          vec3 core = vec3(0.04,0.0,0.09);
          vec3 rim = mix(vec3(0.6,0.2,1.0), vec3(1.0,0.4,0.85), 0.5+0.5*sin(time*3.0));
          vec3 c = mix(core, rim*1.6, pow(f, 2.2));
          gl_FragColor = vec4(c, (0.72 + 0.28*f) * fade);
          #include <colorspace_fragment>
        }`,
    });
    this.mat = mat;
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 28), mat);
    this.mesh.position.set(x, y, 0);
    this.mesh.renderOrder = 8;
    this.mesh.scale.setScalar(0.1);
    battle.scene.add(this.mesh);
    this.t = 0;
  }
  setRadius(r) { this.mesh.scale.setScalar(r); }
  update() { this.t++; this.mat.uniforms.time.value = this.t / 60; }
  remove() {
    this.b.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    this.mat.dispose();
  }
}

// デュラハンの切りふだ: 巨大な黄金の剣閃
export function makeSolarWave() {
  const g = new THREE.Group();
  const arcMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffd460).multiplyScalar(1.6), transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  const arc = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.32, 10, 40, Math.PI), arcMat);
  arc.rotation.z = -Math.PI / 2;
  const inner = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.12, 8, 40, Math.PI), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  inner.rotation.z = -Math.PI / 2;
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: 0xffc040, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.scale.set(6, 6, 1);
  g.add(glow, arc, inner);
  return g;
}

export function fsLabel(def) {
  return def.id === 'illumine' ? 'エターナル・エクリプス' : 'ソーラー・ジャッジメント';
}

export { sign };
