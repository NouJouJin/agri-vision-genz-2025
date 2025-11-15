'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AwardsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Tech-agriculture icons
  const floatingIcons = [
    { icon: '🌱', x: 15, y: 20, delay: 0, duration: 4 },
    { icon: '🤖', x: 85, y: 30, delay: 0.5, duration: 5 },
    { icon: '🌾', x: 10, y: 70, delay: 1, duration: 4.5 },
    { icon: '✨', x: 90, y: 75, delay: 0.3, duration: 5.5 },
    { icon: '💫', x: 50, y: 15, delay: 0.7, duration: 4.8 },
    { icon: '🔬', x: 20, y: 85, delay: 1.2, duration: 5.2 },
    { icon: '🌿', x: 80, y: 85, delay: 0.2, duration: 4.3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-900">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient orbs */}
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
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
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
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />

      {/* Floating particles - data flow effect */}
      {mounted && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: '100vh' }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [100, -100],
            x: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear',
          }}
          className="absolute w-0.5 h-8 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating tech-agri icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
          className="absolute text-4xl md:text-5xl filter drop-shadow-lg"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"
        />

        {/* Event title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-emerald-400 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-3">
            Winner Announcement
          </p>
          <h2 className="text-lg md:text-xl text-gray-400 font-light mb-2">
            AGRI VISION for Gen Z
          </h2>
          <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-400 to-emerald-300">
            第2回 動画生成AIコンテスト
          </p>
        </motion.div>

        {/* Main title with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight">
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-white"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              受賞作品
            </motion.span>
            <motion.span
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
                delay: 0.5,
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              発表
            </motion.span>
          </h1>

          {/* Glow effect behind text */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10"
          />
        </motion.div>

        {/* Award categories with modern card design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: '👑',
                label: 'グランプリ',
                gradient: 'from-yellow-400 to-amber-500',
                border: 'border-yellow-400/50',
              },
              {
                icon: '🌟',
                label: '準グランプリ',
                gradient: 'from-slate-300 to-slate-400',
                border: 'border-slate-400/50',
              },
              {
                icon: '✨',
                label: 'Metagri\n特別賞',
                gradient: 'from-purple-400 to-pink-500',
                border: 'border-purple-400/50',
              },
              {
                icon: '💚',
                label: '農情人賞',
                gradient: 'from-green-400 to-emerald-500',
                border: 'border-green-400/50',
              },
            ].map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`
                  relative overflow-hidden
                  bg-gradient-to-br from-slate-900/80 to-slate-800/80
                  backdrop-blur-sm
                  border ${category.border}
                  rounded-2xl p-4
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  group
                `}
              >
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${category.gradient}
                  opacity-0 group-hover:opacity-10 transition-opacity duration-300
                `} />

                <div className="relative z-10">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <p className="text-white font-bold text-xs md:text-sm whitespace-pre-line leading-tight">
                    {category.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mb-16"
        >
          <p className="text-gray-400 text-base md:text-lg font-light">
            <span className="text-emerald-400">AI</span> × <span className="text-cyan-400">農業</span> で描く、新しい未来
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-gray-500 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <p className="text-xs md:text-sm mb-3 tracking-wider">SCROLL DOWN</p>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-current rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mt-16"
        />
      </div>

      {/* Corner decorations - tech style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-0 left-0 w-32 h-32"
      >
        <div className="absolute top-8 left-8 w-16 h-0.5 bg-emerald-400/30" />
        <div className="absolute top-8 left-8 w-0.5 h-16 bg-emerald-400/30" />
        <div className="absolute top-6 left-6 w-2 h-2 border border-emerald-400/50 rotate-45" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 right-0 w-32 h-32"
      >
        <div className="absolute bottom-8 right-8 w-16 h-0.5 bg-cyan-400/30" />
        <div className="absolute bottom-8 right-8 w-0.5 h-16 bg-cyan-400/30" />
        <div className="absolute bottom-6 right-6 w-2 h-2 border border-cyan-400/50 rotate-45" />
      </motion.div>
    </section>
  );
}
