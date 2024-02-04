# kikukawa-lp

# 立ち上げ

通常のLive Serverなどで確認可能。

### TailwindCSSのコンパイル

以下のコマンドでTailwindの状態を監視しコンパイル可能。

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

# bladeへの対応

### Tailwind CSSへの対応

Tailwind CSSに対応したLaravelプロジェクトを作成してください。

### Alpine.jsへの対応

Alpine.jsに対応したLaravelプロジェクトを作成してください。
またはCDNから読み込んでください。

```
<!-- AipineJSインポート -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Google Fontsへの対応

CDNまたはダウンロードしてGoogle Fontsを使用してください。

```
<!-- Googleフォント -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link cdnhref="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

### Bladeコンポーネントの作成

各セクションをBladeコンポーネントとして分割して作成してください。

# その他対応事項
### リンク先の設定
以下のリンク先を設定してください。
- インターンシップ、説明会情報
- エントリーボタン

### モーダル
現在は一人分のモーダルの内容を作成していますが、blade化の際に中身の文言を差し替えた複数人分のモーダルに対応してください。