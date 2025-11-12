'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AwardsHero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/20 via-transparent to-transparent"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500/20 via-transparent to-transparent"
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [100, -100],
            x: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: '0%',
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Trophy icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            duration: 1,
          }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-yellow-400/50 rounded-full blur-3xl"
            />
            <div className="relative text-9xl">🏆</div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-7xl md:text-8xl font-black mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 animate-gradient-x">
              受賞作品
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-300 to-purple-400 mt-2">
              発表
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
            AGRI VISION for Gen Z
          </p>
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-500">
            第2回 動画生成AIコンテスト
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-12"
        />

        {/* Award categories preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: '👑', label: 'グランプリ', color: 'from-yellow-400 to-amber-600' },
            { icon: '✨', label: 'Metagri特別賞', color: 'from-purple-400 to-pink-600' },
            { icon: '💚', label: '農情人賞', color: 'from-green-400 to-emerald-600' },
          ].map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`px-6 py-3 bg-gradient-to-r ${category.color} rounded-full shadow-lg backdrop-blur-sm`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              <span className="text-white font-bold text-sm md:text-base">{category.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <p className="text-sm mb-2">スクロールして受賞作品をご覧ください</p>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-32 h-32 border-t-4 border-l-4 border-yellow-400/30 rounded-tl-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-b-4 border-r-4 border-purple-400/30 rounded-br-3xl"></div>
    </section>
  );
}
