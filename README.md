# AGRI VISION for Gen Z

第2回動画生成AIコンテスト『AGRI VISION for Gen Z』の作品紹介ランディングページ

## 概要

Z世代のクリエイターが生成AIで描く、農業の新しい未来をテーマにした動画コンテストの作品紹介サイトです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **動画埋め込み**: React YouTube

## 主な機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに最適化
- **モダンなUI/UX**: Z世代向けのエネルギッシュで未来的なデザイン
- **スムーズなアニメーション**: Framer Motionによる洗練されたアニメーション
- **YouTube動画埋め込み**: モーダルで作品動画を視聴可能
- **パフォーマンス最適化**: Next.js Imageによる画像最適化

## セクション構成

1. **ヒーローセクション**: キャッチコピーとCTA
2. **コンテスト背景**: 課題、目的、実績
3. **作品ギャラリー**: エントリー作品の一覧表示
4. **作品詳細モーダル**: YouTube動画、制作者情報、使用AIツール
5. **応募要項**: テーマ、期間、賞品、規定
6. **フッター**: リンク、SNS

## 開発環境のセットアップ

### 必要要件

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。

### ビルド

```bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start
```

## ディレクトリ構造

```
agri-vision-genz-2025/
├── src/
│   ├── app/
│   │   ├── globals.css       # グローバルスタイル
│   │   ├── layout.tsx        # ルートレイアウト
│   │   └── page.tsx          # メインページ
│   ├── components/           # Reactコンポーネント
│   │   ├── Hero.tsx          # ヒーローセクション
│   │   ├── About.tsx         # コンテスト背景
│   │   ├── Entries.tsx       # 作品ギャラリー
│   │   ├── EntryCard.tsx     # 作品カード
│   │   ├── EntryModal.tsx    # 作品詳細モーダル
│   │   ├── Guidelines.tsx    # 応募要項
│   │   └── Footer.tsx        # フッター
│   ├── data/
│   │   └── entries.ts        # 作品データ
│   ├── types/
│   │   └── entry.ts          # TypeScript型定義
│   └── lib/
│       └── youtube.ts        # YouTube関連ユーティリティ
├── public/                   # 静的ファイル
├── tailwind.config.ts        # Tailwind設定
├── tsconfig.json            # TypeScript設定
└── next.config.js           # Next.js設定
```

## 作品データの追加・編集

`src/data/entries.ts` ファイルで作品データを管理します：

```typescript
{
  id: 1,
  creator: "制作者名",
  title: "作品タイトル",
  overview: "作品の概要",
  youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  aiTools: ["使用AIツール1", "使用AIツール2"],
  music: "使用楽曲名（任意）",
  message: "制作者メッセージ"
}
```

## カスタマイズ

### カラースキーム

`tailwind.config.ts` でカラーパレットをカスタマイズできます。

### アニメーション

各コンポーネントのFramer Motion設定を調整して、アニメーションを変更できます。

## デプロイ

### Vercel（推奨）

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

### その他のプラットフォーム

Next.js 14は以下のプラットフォームでもデプロイ可能です：
- Netlify
- AWS Amplify
- Azure Static Web Apps
- その他のNode.js対応ホスティング

## ライセンス

このプロジェクトは AGRI VISION for Gen Z コンテスト用に作成されました。

## お問い合わせ

AGRI VISION運営事務局まで

---

Made with ❤️ for Gen Z
