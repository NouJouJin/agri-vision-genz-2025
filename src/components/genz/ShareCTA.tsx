'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ShareCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const shareText = encodeURIComponent(
    '🌾 AGRI VISION for Gen Z 投票キャンペーン\n\n投票で豪華特典GET！\n✅ 参加証明NFT\n✅ AIセミナー無料参加\n✅ 抽選で新米5kg\n\nあなたの一票で、日本の農業の未来を変えよう！\n\n#AGRIVISIONforGenZ #農業 #生成AI'
  );

  const shareUrl = encodeURIComponent('https://agrivision-genz-2025.metagri-labo.com/genz-campaign');

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(decodeURIComponent(shareUrl));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* メインコンテンツ */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/30 rounded-3xl p-8 sm:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                シェアで広げよう
              </h2>
              <p className="text-gray-300 text-lg mb-2">
                この投票キャンペーンを友人にもシェアして、
              </p>
              <p className="text-gray-300 text-lg">
                一緒に日本の農業の未来を考えよう！
              </p>
            </motion.div>

            {/* シェアボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              {/* Xでシェアボタン */}
              <button
                onClick={handleTwitterShare}
                className="group flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-900 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X（旧Twitter）でシェア</span>
              </button>

              {/* リンクコピーボタン */}
              <button
                onClick={handleCopyLink}
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-lg rounded-full border-2 border-white/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              >
                {copied ? (
                  <>
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-400">コピーしました！</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>リンクをコピー</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* シェアテキストプレビュー */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <p className="text-xs text-gray-400 mb-2">シェアテキストプレビュー</p>
              <p className="text-gray-300 text-sm whitespace-pre-line text-left">
                {decodeURIComponent(shareText)}
              </p>
            </motion.div>

            {/* 補足テキスト */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>シェアいただくことで、より多くの方に日本の農業の未来を考えるきっかけを届けられます</span>
              </div>
            </motion.div>
          </div>

          {/* 戻るリンク */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-8"
          >
            <a
              href="#voting"
              className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              投票フォームに戻る
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
