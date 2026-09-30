// 簡易静的ファイルサーバー
//   node server.js         → 開発用（ソースをそのまま配信）
//   node server.js --docs  → docs/（GitHub Pages 用ビルド結果）をプレビュー
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const os = require('os');

const root = process.argv.includes('--docs') ? path.join(__dirname, 'docs') : __dirname;
const portArg = process.argv.find((a) => a.startsWith('--port='));
const port = Number(portArg ? portArg.slice(7) : process.env.PORT) || 5173;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

// --base=/repo/ で GitHub Pages と同じサブパス配信を再現
const baseArg = process.argv.find((a) => a.startsWith('--base='));
const base = baseArg ? baseArg.slice(7) : '/';

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (base !== '/') {
    if (p === base.slice(0, -1)) { res.writeHead(301, { Location: base }); res.end(); return; }
    if (!p.startsWith(base)) { res.writeHead(404); res.end('404'); return; }
    p = '/' + p.slice(base.length);
  }
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(root, p);
  if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('404'); return; }
    const type = types[path.extname(file)] || 'application/octet-stream';
    const headers = { 'Content-Type': type, 'Cache-Control': 'no-cache' };
    if (/text|javascript|json|svg/.test(type) && /gzip/.test(req.headers['accept-encoding'] || '')) {
      data = zlib.gzipSync(data);
      headers['Content-Encoding'] = 'gzip';
    }
    res.writeHead(200, headers);
    res.end(data);
  });
}).listen(port, () => {
  console.log(`SUMAMAMA BROS (${path.basename(root)}): http://localhost:${port}`);
  for (const list of Object.values(os.networkInterfaces())) {
    for (const a of list || []) if (a.family === 'IPv4' && !a.internal) console.log(`  同じWi-Fiのスマホから: http://${a.address}:${port}`);
  }
});
