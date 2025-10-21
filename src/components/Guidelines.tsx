'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Guidelines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="guidelines" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* セクションタイトル */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Application <span className="text-green-400">Guidelines</span>
            </h2>
            <p className="text-gray-300 text-lg">応募要項</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* テーマ */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">テーマ</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                「もしも未来農業戦略室 "初代室長" に任命されたら？」<br />
                Z世代に刺さる未来の農業プロモーション動画を募集します。
              </p>
            </motion.div>

            {/* 応募期間 */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">応募期間</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                2025年10月10日(金) 〜 11月2日(日) 23:59
              </p>
            </motion.div>

            {/* 応募資格 */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">応募資格</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                年齢、国籍、プロ・アマ問わず、未来の農業に関心のあるすべての方。<br />
                <span className="text-sm text-gray-400">※18歳未満の方は保護者の同意が必要です。</span>
              </p>
            </motion.div>

            {/* 賞品 */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">賞品</h3>
              </div>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>グランプリ (初代室長賞):</strong> 新米10kg + Metagri会員証NFT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>準グランプリ:</strong> 新米5kg + Metagri会員証NFT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>Metagri特別賞:</strong> 旬の厳選農産物 + Metagri会員証NFT</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* 作品規定 */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-8 border border-green-500/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              作品規定
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>動画生成AIを活用した30〜60秒の作品</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>9:16の縦型動画を推奨 (横型も可)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>MP4形式 / 720p以上 / 24 or 30fps</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>音声レベルは-14 LUFSを目安</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>BGM・効果音は権利をクリアした音源を使用</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>日本語または英語 (日本語字幕必須/SRT可)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>1人(1チーム)3作品まで応募可能</span>
              </li>
            </ul>
          </motion.div>

          {/* 応募ボタン */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://metagri-labo.com/agri-vision-genz-2025/#entry" // LPの応募フォームセクションへのアンカーリンク
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              応募フォームへ
            </a>
            <p className="text-gray-400 text-sm mt-4">
              ※公式サイトの応募フォームへ遷移します
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
