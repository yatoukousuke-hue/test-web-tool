# 英単語テスト

日本語に合う英単語を入力して学習できる、シンプルなWebツールです。

HTML/CSS/JavaScriptだけで動く静的サイトなので、GitHubに置いてVercelで公開できます。

## ファイル構成

- `index.html`: 画面の構造
- `style.css`: 見た目の設定
- `script.js`: 問題、採点、復習リストの動き

## ローカルでの確認方法

1. このフォルダを開く。
2. `index.html` をブラウザで開く。
3. 問題に答えて、スコアと復習リストが動くことを確認する。

簡易サーバーで確認したい場合は、次のコマンドを使います。

```bash
python3 -m http.server 8000
```

ブラウザで次のURLを開きます。

```text
http://localhost:8000
```

## GitHubにアップロードする方法

GitHubの画面でアップロードする場合:

1. GitHubで新しいリポジトリを作る。
2. `index.html`、`style.css`、`script.js`、`README.md` をアップロードする。
3. 変更内容を入力して `Commit changes` を押す。

Gitコマンドでアップロードする場合:

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Add vocabulary quiz web tool"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main
```

`ユーザー名` と `リポジトリ名` は、自分のGitHubに合わせて変更してください。

## Vercelで公開する方法

1. Vercelにログインする。
2. `Add New...` から `Project` を選ぶ。
3. GitHubのリポジトリを選ぶ。
4. Framework Preset は `Other` のままでよい。
5. Build Command は空のままでよい。
6. Output Directory も空のままでよい。
7. `Deploy` を押す。

公開が完了すると、Vercelの画面に共有用URLが表示されます。

## 更新して再公開する方法

ファイルを修正したら、GitHubに反映します。

```bash
git add index.html style.css script.js README.md
git commit -m "Update vocabulary quiz"
git push
```

VercelはGitHubの更新を検知して、自動で再公開します。

## 公開前の注意

- APIキーやパスワードをファイルに書かない。
- 個人情報を `script.js` や `README.md` に含めない。
- 公開前にスマートフォンとPCの両方で表示を確認する。
