'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import YouTube from 'react-youtube';
import { Entry } from '@/types/entry';
import { extractYouTubeVideoId } from '@/lib/youtube';

interface EntryModalProps {
  entry: Entry | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EntryModal({ entry, isOpen, onClose }: EntryModalProps) {
  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!entry) return null;

  const videoId = extractYouTubeVideoId(entry.youtubeUrl);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* オーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 modal-overlay"
          />

          {/* モーダルコンテンツ */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl max-w-5xl w-full mx-auto shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 閉じるボタン */}
                <button
                  onClick={onClose}
                  className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* コンテンツ */}
                <div className="p-6 sm:p-8">
                  {/* YouTube動画 */}
                  {videoId ? (
                    <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-black">
                      <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
                    </div>
                  ) : (
                    <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-slate-800 flex items-center justify-center">
                      <p className="text-gray-400">動画を読み込めませんでした</p>
                    </div>
                  )}

                  {/* タイトルと制作者 */}
                  <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                      {entry.title}
                    </h2>
                    <p className="text-gray-400 flex items-center text-lg">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {entry.creator}
                    </p>
                  </div>

                  {/* 作品概要 */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      作品概要
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {entry.overview}
                    </p>
                  </div>

                  {/* 使用AIツール */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      使用AIツール
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {entry.aiTools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 text-sm font-medium bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 使用楽曲 */}
                  {entry.music && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        使用楽曲
                      </h3>
                      <p className="text-gray-300">{entry.music}</p>
                    </div>
                  )}

                  {/* 制作者メッセージ */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      制作者メッセージ
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {entry.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
