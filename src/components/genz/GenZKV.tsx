'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GenZKV() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* PC用KV画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="hidden md:block absolute inset-0"
      >
        <Image
          src="http://metagri-labo.com/wp-content/uploads/2025/11/88725afb02f5d4e5475d3ae2dcca3398.png"
          alt="AGRI VISION for Gen Z - 観る、感じる、選ぶ～Next Generation Agriculture～"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </motion.div>

      {/* スマホ用KV画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="md:hidden absolute inset-0"
      >
        <Image
          src="http://metagri-labo.com/wp-content/uploads/2025/11/e21696e1a81592fa6006e8edca4b629e.png"
          alt="AGRI VISION for Gen Z - 観る、感じる、選ぶ～Next Generation Agriculture～"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </motion.div>

      {/* グラデーションオーバーレイ（下部） */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="flex flex-col items-center text-white/90 drop-shadow-lg">
          <span className="text-sm font-bold mb-2 tracking-wider">SCROLL DOWN</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* CTAボタン（オプション - 中央下部に配置） */}
      <motion.div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.a
          href="#voting"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-5 overflow-hidden rounded-full shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 animate-gradient-x" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-3 text-white font-black text-xl tracking-wide drop-shadow-lg">
            今すぐ投票する
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
