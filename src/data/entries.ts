import { Entry } from '@/types/entry';

/**
 * コンテストエントリー作品データ
 * 実際のYouTube URLと作品情報を設定してください
 */
export const entries: Entry[] = [
  // ... 既存の id: 1 から 4 までのデータはここに ...
  {
    id: 1,
    creator: "制作者名1",
    title: "作品タイトル1",
    overview: "作品の概要説明をここに記載します。Z世代が描く農業の未来をテーマにした作品です。",
    youtubeUrl: "https://youtu.be/8UeGYaE1p2I?si=ngqlGjoWiEvBNL8O",
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

  // ▼ ここからが追加したデータです ▼
  {
    id: 5,
    creator: "梅田直人",
    title: "太陽光を保存する未来農業",
    overview: "昼夜を問わず安定した農業を実現する、革新的なソーラーシステム！太陽光パネルに太陽エネルギーを保存し、天候に左右されない安定供給を可能にする未来型農業です。野菜選びにもこだわり、最終的にはゴーヤとトマトを選択。鮮やかな色彩で、希望に満ちた未来農業を表現しています！",
    youtubeUrl: "https://youtu.be/8UeGYaE1p2I?si=ngqlGjoWiEvBNL8O",
    aiTools: ["Sora2"],
    music: "Sora2",
    message: "Z世代が農業を敬遠する理由の一つは、天候に左右される不安定さ。この作品は、テクノロジーでその課題を解消し、誰もが安心して取り組める農業の未来を描いています。",
  },
  {
    id: 6,
    creator: "NouJouJin",
    title: "【AI×未来農業】#農業しか勝たん｜Food Dance Demo",
    overview: "「農業をエンタメに変換する」革命的アプローチ！推し文化×ダンス×未来フード×AI技術を融合させた、まったく新しい農業の未来像です。ネオン輝く未来都市で、AR技術を駆使した多拠点参加型のフードダンスが展開。「#農業しか勝たん」というZ世代の言葉で、農業のイメージを\"土臭い重労働\"から\"カッコいい推せるコンテンツ\"へと大胆に転換！20秒×2本=40秒の映像に、バズる要素をギュッと凝縮しました。",
    youtubeUrl: "https://youtube.com/shorts/5lVk4Bzqrao",
    aiTools: ["Sora2"],
    music: "Sora2",
    message: "「もしも未来農業戦略室の初代室長に任命されたら?」というテーマに対し、農業をエンタメへ変換する挑戦。土臭さではなく、推せるカッコよさで未来農業を再定義します。#農業しか勝たん",
  },
  {
    id: 7,
    creator: "Sasshi",
    title: "アナタが作る未来の食卓",
    overview: "農家に生まれた少女の成長と葛藤を描いた、心温まるストーリー。肉体労働のイメージがある農業が、テクノロジーの進歩により、遠隔で誰でも取り組めるようになる近未来。少女は葛藤しながらも、テクノロジーの恩恵を受けて農業に誇りを持ち、人々の食卓に笑顔を届けます。60秒の中に、丁寧なシナリオ設計と世界観の流れを織り込んだアニメーション作品です。",
    youtubeUrl: "https://www.tiktok.com/@minomucchi/video/7562894509911133460",
    aiTools: ["Kling AI", "Sora2", "Veo3.1", "Midjourney", "Grok", "ChatGPT"],
    music: "音楽使用なし",
    message: "スプレッドシートでシナリオをライティング→伝えたいメッセージとアニメシーンを整理→ChatGPTで元画像作成→複数の動画生成AIで同プロンプトを試し、最もイメージに近いものを選定。全てI2V（Image to Video）で制作した、こだわりの一作です！",
  },
  {
    id: 8,
    creator: "梅田直人",
    title: "Agri x Art City",
    overview: "農業が芸術になる、美しい観光都市！ドローン視点で撮影された、低層ビル群（ウーブンシティのような未来都市）の屋上農園。日本の四季を彩る野菜たちが主役です。春は菜の花、夏はゴーヤ、秋は冬瓜、冬は大根…すべて制作者が愛する、育てている、料理に使える手軽な野菜をチョイス。農業と芸術が融合した、新しい都市のかたちを描いています。",
    youtubeUrl: "https://youtu.be/4_Y5V38uPSQ?si=Ciza85lPlJMErI7q",
    aiTools: ["Sora2", "iMovie"],
    music: "作品をご覧ください",
    message: "あえて高層ビルを避け、低層の美しい街並みで四季折々の野菜を表現。農業が観光資源になる、芸術的な未来都市の提案です。",
  },
];
