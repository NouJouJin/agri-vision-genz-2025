'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      {/* 背景アニメーション */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 結果発表バッジ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 mb-8 rounded-full backdrop-blur-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/40 shadow-lg shadow-yellow-500/20"
          >
            <span className="text-4xl">🏆</span>
            <span className="text-yellow-100 font-bold text-base sm:text-lg tracking-wide">
              投票締切 - 結果発表
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block mb-2">AGRI VISION</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 neon-glow">
              for Gen Z
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            第2回 動画生成AIコンテスト
          </motion.p>

          {/* KV画像 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-yellow-400/30"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="http://metagri-labo.com/wp-content/uploads/2025/11/88725afb02f5d4e5475d3ae2dcca3398.png"
              alt="AGRI VISION for Gen Z - 結果発表"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            たくさんの投票、ありがとうございました！
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/awards"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold text-lg rounded-full hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 hover:scale-105"
            >
              🏆 受賞結果を見る
            </a>
            <a
              href="#entries"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              全作品を見る
            </a>
          </motion.div>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
