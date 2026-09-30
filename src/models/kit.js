// モデル制作キット: PBRマテリアル・パラメトリック形状・両面シェル・メッシュ結合・手描き風テクスチャ
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const V2 = (x, y) => new THREE.Vector2(x, y);

export function metal(color, { rough = 0.25, metal = 0.9, env = 1, emissive = 0x000000, map = null } = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, envMapIntensity: env, emissive, map });
}
export function gloss(color, { rough = 0.35, metal = 0.1, env = 0.9, emissive = 0x000000, side = THREE.FrontSide } = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, envMapIntensity: env, emissive, side });
}
export function basic(color, k = 1, opts = {}) {
  return new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), ...opts });
}

// u(0..1) × v(0..1) の静的パラメトリック面。fn(u, v, out:Vector3)
export function paramGeo(cols, rows, fn) {
  const pos = [], uv = [], idx = [];
  const p = new THREE.Vector3();
  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      const u = c / cols, v = r / rows;
      fn(u, v, p);
      pos.push(p.x, p.y, p.z);
      uv.push(u, v);
    }
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const a = r * (cols + 1) + c, b = a + 1, d = a + cols + 1, e = d + 1;
      idx.push(a, d, b, b, d, e);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// 外側と内側で別マテリアルを持つ薄い殻（内側は裏面描画）
export function shell(geo, outer, inner) {
  const g = new THREE.Group();
  const a = new THREE.Mesh(geo, outer);
  g.add(a);
  if (inner) {
    const b = new THREE.Mesh(geo, inner);
    b.userData.inner = true;
    g.add(b);
  }
  return g;
}

export function lathe(points, seg = 24, phiStart = 0, phiLen = Math.PI * 2) {
  // 法線が外向きになるよう、輪郭は下から上の順にそろえる
  const pts = points[0][1] > points[points.length - 1][1] ? [...points].reverse() : points;
  return new THREE.LatheGeometry(pts.map(([x, y]) => V2(Math.max(0.0005, x), y)), seg, phiStart, phiLen);
}

export function place(obj, parent, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = null) {
  obj.position.set(x, y, z);
  obj.rotation.set(rx, ry, rz);
  if (s) Array.isArray(s) ? obj.scale.set(...s) : obj.scale.setScalar(s);
  parent.add(obj);
  return obj;
}

export function mesh(geo, mat) { return new THREE.Mesh(geo, mat); }

// 同じ親・同じマテリアルの静的メッシュを1つに結合して描画コールを減らす
export function mergeStatic(root) {
  const groups = [];
  root.traverse((o) => { if (o.isObject3D && !o.isMesh) groups.push(o); });
  for (const g of groups) {
    // 子グループ（形状用）を平坦化: ジョイント以外のGroupは中身を親に移す
    const flat = [];
    const collect = (node, m) => {
      for (const ch of node.children) {
        if (ch.userData.joint || ch.userData.keep) continue;
        const mm = new THREE.Matrix4().multiplyMatrices(m, ch.matrix);
        if (ch.isMesh) {
          // 輪郭線などの子メッシュも一緒に結合する
          if (ch.children.every((c) => c.isMesh && c.children.length === 0)) {
            flat.push({ mesh: ch, m: mm });
            for (const c of ch.children) { c.updateMatrix(); flat.push({ mesh: c, m: new THREE.Matrix4().multiplyMatrices(mm, c.matrix) }); }
          }
        }
        else if (ch.type === 'Group' && !ch.userData.joint) collect(ch, mm);
      }
    };
    g.updateMatrix();
    for (const ch of g.children) ch.updateMatrix();
    const walk = (node) => { node.updateMatrix(); node.children.forEach(walk); };
    g.children.forEach(walk);
    collect(g, new THREE.Matrix4());
    if (flat.length < 2) continue;
    const byMat = new Map();
    for (const f of flat) {
      const k = f.mesh.material.uuid + (f.mesh.geometry.index ? 'i' : 'n');
      if (!byMat.has(k)) byMat.set(k, []);
      byMat.get(k).push(f);
    }
    for (const list of byMat.values()) {
      // 1個だけでも親メッシュが外れる輪郭線は平坦化して残す
      if (list.length < 2 && !list[0].mesh.parent.isMesh) continue;
      const geos = list.map(({ mesh, m }) => {
        const gg = mesh.geometry.clone();
        for (const name of Object.keys(gg.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(name)) gg.deleteAttribute(name);
        if (!gg.attributes.uv) gg.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(gg.attributes.position.count * 2), 2));
        if (!gg.attributes.normal) gg.computeVertexNormals();
        gg.applyMatrix4(m);
        return gg;
      });
      const hasColor = geos.some((x) => x.attributes.color);
      if (hasColor && !geos.every((x) => x.attributes.color)) continue;
      const merged = mergeGeometries(geos, false);
      if (!merged) continue;
      const nm = new THREE.Mesh(merged, list[0].mesh.material);
      nm.userData.inner = list[0].mesh.userData.inner;
      for (const { mesh } of list) if (mesh.parent) mesh.parent.remove(mesh);
      g.add(nm);
    }
    // 空になった形状用グループを掃除
    const prune = (node) => {
      for (const ch of [...node.children]) {
        if (ch.userData.joint || ch.userData.keep || ch.isMesh) continue;
        prune(ch);
        if (ch.type === 'Group' && ch.children.length === 0) node.remove(ch);
      }
    };
    prune(g);
  }
}

// 内側で光る水面模様（イルミネの裏地）
export function glowLining({ c1 = 0x5b4dff, c2 = 0xc05cff, c3 = 0xff7ad8, line = 0xf4e4ff, scale = 5, bright = 1 } = {}) {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      time: { value: 0 }, c1: { value: new THREE.Color(c1) }, c2: { value: new THREE.Color(c2) }, c3: { value: new THREE.Color(c3) },
      line: { value: new THREE.Color(line) }, scale: { value: scale }, bright: { value: bright }, flash: { value: new THREE.Vector4(1, 1, 1, 0) },
    },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform float time, scale, bright; uniform vec3 c1, c2, c3, line; uniform vec4 flash; varying vec2 vUv;
      float caustic(vec2 p, float t){
        vec2 i = p; float c = 1.0; float inten = 0.006;
        for (int n = 0; n < 4; n++) {
          float tt = t * (1.0 - (3.5 / float(n + 1)));
          i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
          c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
        }
        c /= 4.0; c = 1.17 - pow(c, 1.4);
        return clamp(pow(abs(c), 6.0), 0.0, 1.0);
      }
      void main(){
        vec2 p = vec2(vUv.x * scale * 2.0, vUv.y * scale) + 20.0;
        float k = caustic(p, time * 0.5);
        vec3 col = mix(c1, c2, smoothstep(0.1, 0.8, vUv.y));
        col = mix(col, c3, smoothstep(0.82, 1.0, vUv.y));
        col += line * k * 0.6;
        col *= bright;
        col = mix(col, flash.rgb, flash.a);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

// キャンバスでテクスチャを描く
export function canvasTex(w, h, draw, { repeat = null, srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}

// 唐草模様（剣の金具）
export function filigreeTex(base = '#f0c450', ink = '#a8741c') {
  return canvasTex(512, 256, (g, w, h) => {
    const grd = g.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, '#fff0b0'); grd.addColorStop(0.5, base); grd.addColorStop(1, '#c8902c');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
    g.strokeStyle = ink; g.lineWidth = 7; g.lineCap = 'round';
    // 縁取り
    g.strokeRect(14, 14, w - 28, h - 28);
    g.lineWidth = 6;
    const scroll = (x, y, s, dir) => {
      g.beginPath();
      g.moveTo(x, y);
      g.bezierCurveTo(x + 40 * s * dir, y - 60 * s, x + 110 * s * dir, y - 20 * s, x + 90 * s * dir, y + 25 * s);
      g.bezierCurveTo(x + 75 * s * dir, y + 55 * s, x + 40 * s * dir, y + 30 * s, x + 55 * s * dir, y + 10 * s);
      g.stroke();
    };
    g.beginPath(); g.moveTo(30, h / 2); g.bezierCurveTo(160, 40, 300, 220, 490, h / 2); g.stroke();
    for (let i = 0; i < 4; i++) { scroll(60 + i * 110, h / 2 + (i % 2 ? 30 : -30), 0.9, 1); }
    g.fillStyle = ink;
    for (let i = 0; i < 6; i++) { g.beginPath(); g.arc(50 + i * 85, i % 2 ? 60 : h - 60, 9, 0, Math.PI * 2); g.fill(); }
    // 光沢
    const hl = g.createLinearGradient(0, 0, w, h);
    hl.addColorStop(0.3, 'rgba(255,255,255,0)'); hl.addColorStop(0.45, 'rgba(255,255,240,0.35)'); hl.addColorStop(0.6, 'rgba(255,255,255,0)');
    g.fillStyle = hl; g.fillRect(0, 0, w, h);
  });
}

// ルーン文字が刻まれた盾の面
export function runeShieldTex(base = '#f2c44c', ink = '#b07a18') {
  return canvasTex(512, 512, (g, w, h) => {
    const cx = w / 2, cy = h / 2;
    const grd = g.createRadialGradient(cx - 60, cy - 70, 20, cx, cy, 256);
    grd.addColorStop(0, '#fff4c0'); grd.addColorStop(0.45, base); grd.addColorStop(1, '#b8841f');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
    g.strokeStyle = ink; g.lineWidth = 6;
    g.beginPath(); g.arc(cx, cy, 238, 0, Math.PI * 2); g.stroke();
    g.beginPath(); g.arc(cx, cy, 168, 0, Math.PI * 2); g.stroke();
    g.fillStyle = ink;
    g.font = 'bold 42px serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    const runes = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ';
    const n = 26;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      g.save();
      g.translate(cx + Math.cos(a) * 203, cy + Math.sin(a) * 203);
      g.rotate(a + Math.PI / 2);
      g.fillText(runes[i % runes.length], 0, 0);
      g.restore();
    }
    const hl = g.createRadialGradient(cx - 50, cy - 60, 0, cx - 50, cy - 60, 150);
    hl.addColorStop(0, 'rgba(255,255,230,0.55)'); hl.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = hl; g.fillRect(0, 0, w, h);
  });
}

// 羽根飾りのすじ
export function plumeTex(base = '#e5431a', dark = '#9c1e08', light = '#ff8a3a') {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    for (let i = 0; i < 120; i++) {
      const a = Math.random() * Math.PI * 2;
      g.strokeStyle = Math.random() < 0.5 ? dark : light;
      g.globalAlpha = 0.35 + Math.random() * 0.4;
      g.lineWidth = 1 + Math.random() * 2.5;
      g.beginPath();
      g.moveTo(cx + Math.cos(a) * 30, cy + Math.sin(a) * 30);
      g.lineTo(cx + Math.cos(a) * 128, cy + Math.sin(a) * 128);
      g.stroke();
    }
    g.globalAlpha = 1;
  });
}

// ジョイント用グループ
export function joint(name, parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.name = name;
  g.userData.joint = true;
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

// 足元の影（ブロブシャドウ）
export function blobShadow(color = 0x000000, glow = null, size = 1) {
  const tex = canvasTex(128, 128, (g, w, h) => {
    const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, 'rgba(255,255,255,0.95)');
    grd.addColorStop(0.55, 'rgba(255,255,255,0.8)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
  }, { srgb: false });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color, map: tex, transparent: true, opacity: 0.75, depthWrite: false }));
  m.rotation.x = -Math.PI / 2;
  m.scale.set(size, size * 0.62, 1);
  m.renderOrder = 2;
  const g = new THREE.Group();
  g.add(m);
  if (glow) {
    const r = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.5, 40), new THREE.MeshBasicMaterial({ color: new THREE.Color(glow).multiplyScalar(1.3), transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending }));
    r.rotation.x = -Math.PI / 2;
    r.scale.set(size, size * 0.62, 1);
    r.position.y = 0.002;
    g.add(r);
  }
  return g;
}
