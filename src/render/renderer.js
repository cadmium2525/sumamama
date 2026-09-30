import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const IS_TOUCH = typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches;

// 画質: high = 高解像度 / low = 解像度控えめ（スマホ既定）
export function initialQuality() {
  try {
    const q = localStorage.getItem('sumamama.quality');
    if (q === 'high' || q === 'low') return q;
  } catch (e) { /* 保存領域が使えない環境 */ }
  return IS_TOUCH ? 'low' : 'high';
}

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = false;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  // 金属の映り込み用の環境マップ
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.65;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 400);
  camera.position.set(0, 4, 24);

  // ライト
  scene.add(new THREE.HemisphereLight(0xc9c2ff, 0x2a1838, 1.05));
  const sun = new THREE.DirectionalLight(0xfff1e0, 1.75);
  sun.position.set(-8, 16, 12);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0xb48cff, 1.6);
  rim.position.set(6, 6, -12);
  scene.add(rim);

  const R = {
    renderer, scene, camera, sun,
    quality: initialQuality(),
    resize() {
      const w = window.innerWidth, h = window.innerHeight;
      const cap = R.quality === 'high' ? 2 : 1.25;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    },
    setQuality(q) {
      R.quality = q;
      try { localStorage.setItem('sumamama.quality', q); } catch (e) { /* 無視 */ }
      R.resize();
    },
    render() {
      renderer.render(scene, camera);
    },
  };
  R.resize();
  window.addEventListener('resize', R.resize);
  window.addEventListener('orientationchange', () => setTimeout(R.resize, 200));
  return R;
}
