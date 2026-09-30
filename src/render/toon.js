import * as THREE from 'three';

let gradient = null;
export function toonGradient() {
  if (!gradient) {
    gradient = new THREE.DataTexture(new Uint8Array([70, 150, 235, 255]), 4, 1, THREE.RedFormat);
    gradient.minFilter = gradient.magFilter = THREE.NearestFilter;
    gradient.generateMipmaps = false;
    gradient.needsUpdate = true;
  }
  return gradient;
}

export function toonMat(color, opts = {}) {
  return new THREE.MeshToonMaterial({ color, gradientMap: toonGradient(), ...opts });
}

export function glowMat(color, intensity = 1) {
  const c = new THREE.Color(color).multiplyScalar(intensity);
  return new THREE.MeshBasicMaterial({ color: c });
}

// ビュー空間で法線方向へ押し出す背面法アウトライン（スケールに依存しない太さ）
const outlineCache = new Map();
export function outlineMat(color = 0x0a0610, thickness = 0.018) {
  const key = color + ':' + thickness;
  if (outlineCache.has(key)) return outlineCache.get(key);
  const m = new THREE.ShaderMaterial({
    uniforms: { color: { value: new THREE.Color(color) }, thickness: { value: thickness } },
    vertexShader: /* glsl */`
      uniform float thickness;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        mv.xyz += n * thickness * (1.0 + 0.02 * -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 color;
      void main() {
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }`,
    side: THREE.BackSide,
  });
  m.userData.shared = true;
  outlineCache.set(key, m);
  return m;
}

export function addOutline(mesh, color, thickness) {
  const o = new THREE.Mesh(mesh.geometry, outlineMat(color, thickness));
  o.name = 'outline';
  o.castShadow = false;
  o.receiveShadow = false;
  o.userData.isOutline = true;
  mesh.add(o);
  return mesh;
}

// メッシュ生成ヘルパー
export function mesh(geo, mat, { outline = 0x0a0610, thick = 0.018, shadow = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = shadow;
  m.receiveShadow = false;
  if (outline !== null && outline !== false) addOutline(m, outline, thick);
  return m;
}

// イルミネ用: 下端に向かって光るグラデーション布シェーダー
export function clothMaterial({
  base = 0x160d22, c1 = 0x6a2cff, c2 = 0x3f6bff, c3 = 0xff3fd0, c4 = 0xffd0f4,
  glowStart = 0.55, spots = 0, spotColor = 0xff8fd8, inner = 0x2a1245, glowBoost = 1.6,
} = {}) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      base: { value: new THREE.Color(base) },
      c1: { value: new THREE.Color(c1) },
      c2: { value: new THREE.Color(c2) },
      c3: { value: new THREE.Color(c3) },
      c4: { value: new THREE.Color(c4) },
      inner: { value: new THREE.Color(inner) },
      spotColor: { value: new THREE.Color(spotColor).multiplyScalar(1.3) },
      glowStart: { value: glowStart },
      spots: { value: spots },
      time: { value: 0 },
      flash: { value: new THREE.Vector4(1, 1, 1, 0) },
      glowBoost: { value: glowBoost },
      opacity: { value: 1 },
    },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      varying vec3 vN;
      varying vec3 vView;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vView = mv.xyz;
        vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 base, c1, c2, c3, c4, inner, spotColor;
      uniform float glowStart, spots, time, glowBoost, opacity;
      uniform vec4 flash;
      varying vec2 vUv;
      varying vec3 vN;
      varying vec3 vView;
      void main() {
        vec3 n = normalize(vN);
        if (!gl_FrontFacing) n = -n;
        vec3 L = normalize(vec3(0.35, 0.8, 0.55));
        float l = dot(n, L);
        float toon = l > 0.35 ? 1.0 : (l > -0.15 ? 0.72 : 0.5);
        float wav = 0.04 * sin(vUv.x * 37.0 + time * 1.7);
        float t = smoothstep(glowStart + wav, 1.0, vUv.y);
        vec3 g = mix(c1, c2, smoothstep(0.0, 0.4, t));
        g = mix(g, c3, smoothstep(0.35, 0.8, t));
        g = mix(g, c4, smoothstep(0.86, 1.0, t));
        vec3 b = gl_FrontFacing ? base * toon : inner * (0.7 + 0.3 * toon);
        float rim = pow(1.0 - abs(dot(n, normalize(-vView))), 3.0);
        b += c1 * rim * 0.35;
        vec3 col = mix(b, g * glowBoost, t);
        if (spots > 0.5) {
          float cells = spots;
          vec2 cell = vec2(fract(vUv.x * cells) - 0.5, (vUv.y - 0.5) * 3.2);
          float row = mod(floor(vUv.x * cells), 2.0);
          cell.y += row * 0.9 - 0.2;
          float d = length(cell * vec2(1.0, 1.25));
          if (d < 0.2) col = mix(col, spotColor, smoothstep(0.2, 0.16, d));
        }
        col = mix(col, flash.rgb, flash.a);
        gl_FragColor = vec4(col, opacity);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    side: THREE.DoubleSide,
    transparent: false,
  });
  return mat;
}

// グロー用の丸いテクスチャ
let softTex = null, starTex = null, ringTex = null;
export function softTexture() {
  if (softTex) return softTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.35, 'rgba(255,255,255,0.6)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  softTex = new THREE.CanvasTexture(c);
  return softTex;
}
export function starTexture() {
  if (starTex) return starTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.translate(32, 32);
  const grd = g.createRadialGradient(0, 0, 0, 0, 0, 30);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const r = i % 2 === 0 ? 31 : 7;
    g.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  g.closePath();
  g.fill();
  starTex = new THREE.CanvasTexture(c);
  return starTex;
}
export function ringTexture() {
  if (ringTex) return ringTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 40, 64, 64, 63);
  grd.addColorStop(0, 'rgba(255,255,255,0)');
  grd.addColorStop(0.6, 'rgba(255,255,255,0.9)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  ringTex = new THREE.CanvasTexture(c);
  return ringTex;
}
