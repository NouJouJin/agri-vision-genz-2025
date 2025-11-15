'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface VotingProps {
  formUrl?: string;
  showDeadline?: boolean;
  isClosed?: boolean;
}

export default function Voting({
  formUrl = "https://airtable.com/embed/applcqOMmwyE9fjtX/pag7tefz36UiQ7ZPB/form",
  showDeadline = true,
  isClosed = false
}: VotingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="voting" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* セクションタイトル */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Vote for <span className="text-green-400">Your Favorite</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-2">
              あなたのお気に入り作品に投票してください
            </p>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              全13作品の中から、最も印象に残った作品を選んでください。<br />
              あなたの一票が、クリエイターの励みになります！
            </p>
            {showDeadline && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/40 rounded-full"
              >
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-300 font-bold text-sm sm:text-base">
                  投票締め切り: 2025年11月14日（金）23:59
                </span>
              </motion.div>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-6"></div>
          </div>

          {/* 投票フォーム埋め込み or 締め切りメッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {isClosed ? (
              // 投票締め切りメッセージ
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  投票は締め切りました
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  たくさんのご投票、誠にありがとうございました。<br />
                  受賞作品の発表をお楽しみに！
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/40 rounded-full">
                  <span className="text-amber-300 font-bold">
                    投票期間: 2025年11月14日（金）23:59 まで
                  </span>
                </div>
              </div>
            ) : (
              // 投票フォーム
              <>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border border-white/10 shadow-xl">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%', minHeight: '533px' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-2xl"
                      src={formUrl}
                      frameBorder="0"
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        minHeight: '533px',
                      }}
                      title="AGRI VISION for Gen Z 投票フォーム"
                    />
                  </div>
                </div>

                {/* 注意事項 */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-6 py-3 rounded-full border border-white/10">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>投票は1回のみ有効です。慎重にお選びください。</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* CTAセクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6">
              投票前に、全作品をご覧になることをおすすめします
            </p>
            <a
              href="#entries"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              作品一覧に戻る
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
