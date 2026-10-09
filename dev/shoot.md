# 比較画像の撮り方（開発用）

1. `npm start` で開発サーバーを起動
2. `http://localhost:5173/dev/closeup.html?c=illumine&s=face` を開く（`s` は face / head / front / back / side）
3. ブラウザのコンソールで `await shoot('名前')` → `dev/out/名前.png` に「参考画像｜モデル」を並べた画像が保存される
4. その画像だけを審査役（サブエージェント）に見せ、項目別の点数と修正点を出させる

`await shootAll('v12')` で全構図をまとめて保存できる（`dev/out/illumine_face_v12.png` など）。
