'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function VoteBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: '参加証明NFT',
      subtitle: 'デジタル会員証',
      description: 'ご登録いただいたメールアドレス宛に、参加証明NFT（デジタル会員証）の受け取り方法を11月中旬にお送りいたします。',
      color: 'from-green-500 to-emerald-600',
      iconBg: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AIセミナー無料参加チケット',
      subtitle: '動画生成AI最新活用術',
      description: '動画生成AIの最新活用術を学べるオンラインセミナーに無料でご参加いただけます！',
      details: [
        '最新のAIトレンド',
        '動画生成AIの制作テクニック',
        '最新AI情報のキャッチアップ方法',
      ],
      schedule: '開催日時：2025年12月～2026年1月予定',
      info: '参加方法：後日メールにてご案内',
      color: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-emerald-500/20',
      borderColor: 'border-emerald-400/30',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: '抽選で新米5kg',
      subtitle: '1名様にプレゼント',
      description: '2025年秋収穫の新米5kgを、抽選で1名様にプレゼント！',
      schedule: '抽選結果は11月中旬に発表予定。',
      info: '当選者の方には直接ご連絡いたします。',
      color: 'from-teal-500 to-cyan-600',
      iconBg: 'bg-teal-500/20',
      borderColor: 'border-teal-400/30',
      badge: '抽選',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full mb-6"
            >
              <span className="text-green-300 font-semibold">投票いただいたZ世代の方に、以下をプレゼント！</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              豪華<span className="text-green-400">特典</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              あなたの一票が、日本の農業の未来を変えます
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-6"></div>
          </div>

          {/* 特典カード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border ${benefit.borderColor} hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {/* バッジ */}
                {benefit.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs font-semibold">
                      {benefit.badge}
                    </span>
                  </div>
                )}

                {/* アイコン */}
                <div className={`${benefit.iconBg} backdrop-blur-sm rounded-2xl p-4 inline-flex mb-6`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>

                {/* タイトル */}
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${benefit.color} text-transparent bg-clip-text`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{benefit.subtitle}</p>

                {/* 説明 */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* 詳細リスト */}
                {benefit.details && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-300 mb-2">【セミナー内容（予定）】</p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-green-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-green-400 mt-1">•</span>
                        <span>など</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* スケジュール情報 */}
                {benefit.schedule && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-sm mb-1">{benefit.schedule}</p>
                    {benefit.info && (
                      <p className="text-gray-400 text-sm">{benefit.info}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/30 rounded-3xl p-8 max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl font-bold text-white mb-4">
                あなたの一票が、日本の農業の未来を変えます。
              </p>
              <p className="text-gray-300 mb-6">
                ぜひ友人にもシェアしてください！
              </p>
              <a
                href="#voting"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                今すぐ投票する
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
