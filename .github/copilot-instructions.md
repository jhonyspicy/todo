# Copilot Commit Message Instructions

このリポジトリでは、GitHub Copilot によるコミットメッセージ生成時に以下の指針に従ってください。

1. **必ず日本語で記述してください。**
2. **コミットメッセージは、最初に [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) に則って記述してください。**
3. **その後、ファイルごとの詳細な変更内容を記述してください。**

---

## 例

```
feat: タスク追加機能を実装

- index.js: 新しいタスクを追加する関数を作成
- public/index.html: 入力フォームを追加
```

---

## 補足
- コミットメッセージの先頭は `feat`, `fix`, `docs` などの Conventional Commits のタイプを使用してください。
- 変更内容の詳細は、どのファイルにどのような変更を加えたかを簡潔に記載してください。

---

このルールは `settings.json` の `github.copilot.chat.commitMessageGeneration.instructions` で自動的に適用されます。
