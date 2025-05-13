# todo
色々試しながら、よくみるtodo管理アプリを作ってみます。

## プロジェクト構成

このプロジェクトは、シンプルな Todo 管理アプリケーションです。

- `index.js` - Express.js サーバーのエントリーポイント
- `public/` - フロントエンドの静的ファイル
  - `index.html` - Todo アプリのユーザーインターフェース
- `.devcontainer/` - 開発環境の設定ファイル

## 開発環境

このプロジェクトは、VS Code の devcontainer 機能を使用して Node.js 開発環境を提供します。

### devcontainer の特徴

- Node.js 18 ランタイム環境
- ESLint と Prettier による自動コード整形
- ポート 3000 の自動転送
- コンテナ作成時に自動的に `npm install` を実行

### 使用方法

1. VS Code と Docker をインストールします
2. VS Code の拡張機能 "Remote - Containers" をインストールします
3. このリポジトリを VS Code で開きます
4. 右下に表示される通知から "Reopen in Container" を選択するか、コマンドパレット（F1）から "Remote-Containers: Reopen in Container" を実行します
5. コンテナのビルドが完了すると、Node.js 開発環境が準備されます

## アプリケーションの実行

1. devcontainer 内でターミナルを開きます
2. 以下のコマンドを実行してアプリケーションを起動します:
   ```
   npm start
   ```
3. ブラウザで http://localhost:3000 にアクセスして Todo アプリを使用します

開発モードで実行する場合は、ファイルの変更を監視して自動的に再起動する `npm run dev` コマンドを使用できます。
