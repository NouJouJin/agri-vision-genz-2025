'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award } from '@/data/awards';

interface AwardCardProps {
  award: Award;
  index: number;
}

export default function AwardCard({ award, index }: AwardCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showVideo, setShowVideo] = useState(false);

  // Extract YouTube video ID
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(award.entry.youtubeUrl);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-32"
    >
      {/* Award badge */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
          className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${award.gradient} rounded-full shadow-2xl`}
        >
          <span className="text-4xl">{award.icon}</span>
          <div className="text-left">
            <p className="text-white/80 text-xs font-medium tracking-wider">{award.categoryEn}</p>
            <p className="text-white text-2xl font-black">{award.category}</p>
          </div>
          <span className="text-5xl">{award.prize}</span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
                {!showVideo ? (
                  <>
                    {/* Thumbnail */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${award.entry.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowVideo(true)}
                        className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-colors"
                      >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.button>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Creator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                className="mt-6 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  {award.entry.creator.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">制作者</p>
                  <p className="text-white font-bold text-lg">{award.entry.creator}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              className="space-y-6"
            >
              {/* Title */}
              <div>
                <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                  {award.entry.title}
                </h3>
              </div>

              {/* Overview (Condensed) */}
              <div className="bg-slate-800/30 rounded-xl p-4 border border-white/5">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {award.entry.overview}
                </p>
              </div>

              {/* Commentary */}
              {award.commentary && (
                <div className={`bg-gradient-to-r ${award.gradient} p-[2px] rounded-2xl`}>
                  <div className="bg-slate-900/95 rounded-2xl p-6">
                    <h4 className="text-yellow-200 font-bold text-base mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      講評
                    </h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {award.commentary}
                    </p>
                  </div>
                </div>
              )}

              {/* Evaluation Points */}
              {award.evaluationPoints && award.evaluationPoints.length > 0 && (
                <div className={`bg-gradient-to-r ${award.gradient} p-[2px] rounded-2xl`}>
                  <div className="bg-slate-900 rounded-2xl p-6">
                    <h4 className="text-yellow-300 font-bold text-sm mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      評価ポイント
                    </h4>
                    <ul className="space-y-2">
                      {award.evaluationPoints.map((point, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* AI Tools */}
              <div>
                <h4 className="text-gray-400 text-sm font-bold mb-2">使用AI</h4>
                <div className="flex flex-wrap gap-2">
                  {award.entry.aiTools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Award Form Button */}
              {award.formUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  className="pt-6"
                >
                  <a
                    href={award.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 px-6 bg-gradient-to-r ${award.gradient} rounded-2xl text-white font-bold text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      特典の受け取り申請フォーム
                    </span>
                  </a>
                </motion.div>
              )}

              {/* View All Works Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                className="pt-2"
              >
                <a
                  href="/genz-campaign#entries"
                  className="block w-full py-3 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-medium text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    他の作品を見る
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
