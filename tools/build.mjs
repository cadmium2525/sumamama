// GitHub Pages 公開用ビルド: docs/ に軽量化した静的ファイル一式を出力する
// 使い方: npm run build
import { build, transform } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { gzipSync } from 'node:zlib';

const OUT = 'docs';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT + '/icons', { recursive: true });

// 1) JS をひとつにまとめて圧縮（three.js も使う部分だけ取り込む）
const js = await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2022'],
  define: { __PROD__: 'true' },
  legalComments: 'none',
  write: false,
});
const appJs = js.outputFiles[0].contents;

// 2) CSS 圧縮
const css = (await transform(readFileSync('style.css', 'utf8'), { loader: 'css', minify: true })).code;

const hash = createHash('sha1').update(appJs).update(css).digest('hex').slice(0, 10);
writeFileSync(`${OUT}/app.js`, appJs);
writeFileSync(`${OUT}/style.css`, css);

// 3) index.html: importmap を外し、バンドルを読み込む
let html = readFileSync('index.html', 'utf8');
html = html.replace(/<script type="importmap">[\s\S]*?<\/script>\s*/, '');
// ルート公開用のリダイレクトは公開版には不要
html = html.replace(/<script>\s*\/\/ GitHub Pages[\s\S]*?<\/script>\s*/, '');
html = html.replace('<link rel="stylesheet" href="style.css">', `<link rel="stylesheet" href="style.css?v=${hash}">`);
html = html.replace('<script type="module" src="src/main.js"></script>', `<script type="module" src="app.js?v=${hash}"></script>`);
writeFileSync(`${OUT}/index.html`, html);

// 4) PWA 一式
copyFileSync('manifest.webmanifest', `${OUT}/manifest.webmanifest`);
for (const f of readdirSync('icons')) copyFileSync(`icons/${f}`, `${OUT}/icons/${f}`);
const precache = ['./', 'index.html', `app.js?v=${hash}`, `style.css?v=${hash}`, 'manifest.webmanifest', ...readdirSync('icons').map((f) => `icons/${f}`)];
const sw = readFileSync('tools/sw.template.js', 'utf8')
  .replace('__VERSION__', hash)
  .replace('__PRECACHE__', JSON.stringify(precache));
writeFileSync(`${OUT}/sw.js`, sw);
writeFileSync(`${OUT}/.nojekyll`, '');

// サイズ報告
let total = 0, totalGz = 0;
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = `${d}/${f}`;
  if (statSync(p).isDirectory()) return walk(p);
  const b = readFileSync(p);
  total += b.length; totalGz += gzipSync(b).length;
  console.log(`${p.padEnd(34)} ${(b.length / 1024).toFixed(1).padStart(8)} KB  (gzip ${(gzipSync(b).length / 1024).toFixed(1)} KB)`);
});
walk(OUT);
console.log(`合計 ${(total / 1024).toFixed(0)} KB / gzip ${(totalGz / 1024).toFixed(0)} KB  version=${hash}`);
