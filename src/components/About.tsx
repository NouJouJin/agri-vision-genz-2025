'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* セクションタイトル */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="text-green-400">Contest</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>
          </motion.div>

          {/* コンテンツグリッド */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">日本農業の課題</h3>
              <p className="text-gray-300 leading-relaxed">
                高齢化、担い手不足、気候変動など、日本の農業は多くの課題に直面しています。持続可能な農業の実現には、新しい視点とイノベーションが必要です。
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">コンテストの目的</h3>
              <p className="text-gray-300 leading-relaxed">
                Z世代のクリエイティビティと最新のAI技術を融合させ、農業の未来に新たな可能性を提示します。斬新なアイデアで農業の魅力を再発見します。
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">第1回の実績</h3>
              <p className="text-gray-300 leading-relaxed">
                第1回コンテストでは、世界から33件の応募があり、革新的なアイデアが多数集まりました。今回はさらなる進化を目指します。
              </p>
            </motion.div>
          </div>

          {/* テーマセクション */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-10 border border-green-500/30"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-6">
              コンテストテーマ
            </h3>
            <p className="text-xl text-center text-green-300 font-semibold mb-4">
              「生成AIで描く、農業の新しい未来」
            </p>
            <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Sora、Runway、Pika Labsなどの最新動画生成AIツールを活用して、
              Z世代ならではの視点で農業の未来を表現してください。
              テクノロジーと自然の調和、持続可能性、革新的な農業のあり方など、
              自由な発想で農業の可能性を広げる作品をお待ちしています。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
