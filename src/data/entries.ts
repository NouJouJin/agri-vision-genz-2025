import { Entry } from '@/types/entry';

/**
 * コンテストエントリー作品データ
 * 実際のYouTube URLと作品情報を設定してください
 */
export const entries: Entry[] = [
  {
    id: 1,
    creator: "制作者名1",
    title: "作品タイトル1",
    overview: "作品の概要説明をここに記載します。Z世代が描く農業の未来をテーマにした作品です。",
    youtubeUrl: "https://www.youtube.com/watch?v=SAMPLE_VIDEO_ID_1",
    aiTools: ["Sora", "Runway Gen-3", "ChatGPT"],
    music: "使用楽曲名（任意）",
    message: "制作者からのメッセージをここに記載します。この作品に込めた思いや、コンテストへの参加理由などを自由に表現してください。",
  },
  {
    id: 2,
    creator: "制作者名2",
    title: "作品タイトル2",
    overview: "2つ目の作品概要です。AIを活用した農業の革新的なアプローチを表現しています。",
    youtubeUrl: "https://www.youtube.com/watch?v=SAMPLE_VIDEO_ID_2",
    aiTools: ["Midjourney", "Stable Diffusion", "ElevenLabs"],
    message: "農業とテクノロジーの融合をテーマに制作しました。Z世代ならではの視点で未来の農業を描いています。",
  },
  {
    id: 3,
    creator: "制作者名3",
    title: "作品タイトル3",
    overview: "持続可能な農業をテーマにした作品です。環境との調和を重視した未来像を描きます。",
    youtubeUrl: "https://www.youtube.com/watch?v=SAMPLE_VIDEO_ID_3",
    aiTools: ["Pika Labs", "Adobe Firefly", "Synthesia"],
    music: "オリジナルBGM",
    message: "環境に優しい農業の未来をビジュアル化しました。次世代に残したい地球の姿を表現しています。",
  },
  {
    id: 4,
    creator: "制作者名4",
    title: "作品タイトル4",
    overview: "都市農業とスマート農業の融合をテーマにした近未来的な作品です。",
    youtubeUrl: "https://www.youtube.com/watch?v=SAMPLE_VIDEO_ID_4",
    aiTools: ["Leonardo AI", "Kaiber", "Udio"],
    message: "都会でも農業ができる未来を想像しながら制作しました。テクノロジーと自然の共存を目指しています。",
  },
];
