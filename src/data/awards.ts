import { Entry } from '@/types/entry';
import { entries } from './entries';

export interface Award {
  category: string;
  categoryEn: string;
  prize: string;
  description: string;
  icon: string;
  gradient: string;
  entry: Entry;
  commentary?: string; // 講評
  evaluationPoints?: string[]; // 評価ポイント（後で編集可能）
  formUrl?: string; // 特典受け取りフォームURL（受賞者用）
}

/**
 * 受賞作品データ
 * AGRI VISION for Gen Z - 第2回動画生成AIコンテスト
 */
export const awards: Award[] = [
  {
    category: 'グランプリ',
    categoryEn: 'GRAND PRIX',
    prize: '🥇',
    description: '最優秀作品',
    icon: '👑',
    gradient: 'from-yellow-400 via-amber-500 to-yellow-600',
    entry: entries.find(e => e.id === 4)!,
    commentary: 'この作品が持つ最大の魅力は、「世界を変えるのは、特別なヒーローではなく"普通の人の小さな行動"である」という、Z世代が最も共感する価値観を、リアルで温かい物語として描いた点です。SNSで誰かの挑戦を見て、自分の中にも「何かできるかもしれない」という火が灯る——。その"伝播する勇気"の連鎖を、農業という分野にて表現しています。農業を「働くこと」から「生きること・つながること」へつなげていく。"一人の行動が未来を変える"という希望を表現した作品として、グランプリに選出されました。',
    formUrl: 'https://airtable.com/applcqOMmwyE9fjtX/pagw1uYbabmNTVBHp/form',
  },
  {
    category: '準グランプリ',
    categoryEn: 'RUNNER-UP GRAND PRIX',
    prize: '🥈',
    description: '第2位',
    icon: '🌟',
    gradient: 'from-slate-300 via-slate-400 to-slate-500',
    entry: entries.find(e => e.id === 7)!,
    commentary: '自然と人間の関係を"毛虫の視点"から描くという、常識を鮮やかにひっくり返す発想が光る作品です。毛虫＝害虫という固定観念を揺さぶり、「彼らは自然の掃除屋であり、生態系の一員である」という新しい理解を促す。農業を"制御の対象"ではなく"共生のパートナー"として捉える思想は、極めて現代的で革新的。発想力と哲学性の高さが評価され、準グランプリに輝きました。年代問わず楽しめる作品です。',
    formUrl: 'https://airtable.com/applcqOMmwyE9fjtX/paggcG8Ts4a6cV43x/form',
  },
  {
    category: 'Metagri特別賞',
    categoryEn: 'METAGRI SPECIAL AWARD',
    prize: '🌱',
    description: 'メタグリラボ特別賞',
    icon: '✨',
    gradient: 'from-purple-400 via-pink-500 to-purple-600',
    entry: entries.find(e => e.id === 1)!,
    commentary: 'この作品は、農業における最も普遍的なテーマ——「経験と勘」×「データとAI」という対立と融合を、ドラマティックな物語として映画のような世界観で描き切っていただきました。動画の時間は2分とショート動画としては比較的長編でしたが、Metagri研究所のコミュニティ内で高く評価されました。ベテラン農家の"身体知"と、若い研究者の"データ解釈"。そのぶつかり合いと理解の過程は、まさに今の農業現場で起きているリアルなテーマでもあります。AIは伝統を奪う敵ではなく、その魂を「翻訳」し、未来へつなぐパートナーである。この視点はMetagri研究所の理念そのものです。',
    formUrl: 'https://airtable.com/applcqOMmwyE9fjtX/pagPOMD02DQ7CDoAr/form',
  },
  {
    category: '農情人賞',
    categoryEn: 'NOUJYOUJIN AWARD',
    prize: '🌾',
    description: '農業への情熱賞',
    icon: '💚',
    gradient: 'from-green-400 via-emerald-500 to-green-600',
    entry: entries.find(e => e.id === 2)!,
    commentary: '"推し文化 × 農業"という、誰も予想しなかった切り口で、農業の未来を大胆に再構築した作品です。ファンが農家や農産物を応援し、共に文化をつくる「推し経済」モデルは、まさにZ世代が得意とする参加型コミュニティそのもの。農業の価値を「努力」ではなく「ワクワク」へ転換するこの作品は、農情人が大切にする"楽しさが人を動かす"という思想と一致しています。エンタメの力で農業の未来を軽やかに描いた、創造性と未来感あふれる一作、そして、前回の第1回目のグランプリ作品とは、大きなギャップがあることが農情人に刺さり特別賞に選ばれました。',
    formUrl: 'https://airtable.com/applcqOMmwyE9fjtX/pagdlN6RJDmtBZB7e/form',
  },
  {
    category: '農情人賞',
    categoryEn: 'NOUJYOUJIN AWARD',
    prize: '🌾',
    description: '農業への情熱賞',
    icon: '💚',
    gradient: 'from-green-400 via-emerald-500 to-green-600',
    entry: entries.find(e => e.id === 8)!,
    commentary: 'この作品は、農業継承の問題を「収益性」「労働力」ではなく、"田舎特有の人間関係のストレス"という極めてリアルな痛点から描いた点に、圧倒的な独自性があります。若者が農業を継げない本質的理由に踏み込み、テクノロジーによって「そこにいなくても関われる」という新しい継承の形を提示したことは、現場の苦しみと未来への希望を同時に見つめた、深い洞察の証です。美化しないリアルを出発点にしながら、最後に"救いのある未来"を描いた構成力が高く評価され、農情人賞に選定されました。',
    formUrl: 'https://airtable.com/applcqOMmwyE9fjtX/pagdlN6RJDmtBZB7e/form',
  },
];
