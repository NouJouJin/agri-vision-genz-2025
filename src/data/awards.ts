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
  evaluationPoints?: string[]; // 評価ポイント（後で編集可能）
}

/**
 * 受賞作品データ
 * AGRI VISION for Gen Z - 第2回動画生成AIコンテスト
 *
 * 評価ポイントは後で追記できるように配列形式で管理
 */
export const awards: Award[] = [
  {
    category: 'グランプリ',
    categoryEn: 'GRAND PRIX',
    prize: '🏆',
    description: '最優秀作品',
    icon: '👑',
    gradient: 'from-yellow-400 via-amber-500 to-yellow-600',
    entry: entries.find(e => e.id === 4)!,
    evaluationPoints: [
      // ここに評価ポイントを追記してください
      // 例: 'Z世代の視点から農業との出会いを描いた点',
      // 例: 'アニメーションスタイルとコンセプトへのこだわり',
    ],
  },
  {
    category: 'Metagri特別賞',
    categoryEn: 'METAGRI SPECIAL AWARD',
    prize: '🌟',
    description: 'メタグリラボ特別賞',
    icon: '✨',
    gradient: 'from-purple-400 via-pink-500 to-purple-600',
    entry: entries.find(e => e.id === 8)!,
    evaluationPoints: [
      // ここに評価ポイントを追記してください
    ],
  },
  {
    category: '農情人賞',
    categoryEn: 'NOUJYOUJIN AWARD',
    prize: '🌾',
    description: '農業への情熱賞',
    icon: '💚',
    gradient: 'from-green-400 via-emerald-500 to-green-600',
    entry: entries.find(e => e.id === 2)!,
    evaluationPoints: [
      // ここに評価ポイントを追記してください
    ],
  },
  {
    category: '農情人賞',
    categoryEn: 'NOUJYOUJIN AWARD',
    prize: '🌾',
    description: '農業への情熱賞',
    icon: '💚',
    gradient: 'from-green-400 via-emerald-500 to-green-600',
    entry: entries.find(e => e.id === 7)!,
    evaluationPoints: [
      // ここに評価ポイントを追記してください
    ],
  },
];
