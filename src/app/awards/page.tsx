'use client';

import AwardsHero from '@/components/awards/AwardsHero';
import AwardCard from '@/components/awards/AwardCard';
import Footer from '@/components/Footer';
import { awards } from '@/data/awards';

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AwardsHero />

      {/* Awards Section */}
      <section className="py-20">
        {awards.map((award, index) => (
          <AwardCard key={`${award.category}-${award.entry.id}`} award={award} index={index} />
        ))}
      </section>

      {/* Congratulations Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 mb-6">
              おめでとうございます！
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              受賞者の皆様、素晴らしい作品をご応募いただき、誠にありがとうございました。<br />
              Z世代の視点から描かれた農業の未来は、どれも創造性と情熱に溢れていました。<br />
              これからも、テクノロジーと農業の可能性を切り拓いていってください。
            </p>
            <div className="flex justify-center gap-4 text-5xl">
              🎉 🎊 ✨ 🏆 ✨ 🎊 🎉
            </div>
          </div>
        </div>
      </section>

      {/* All Works CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-500/20 shadow-2xl overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Key Visual Placeholder - キービジュアルは後で挿入 */}
              <div className="mb-8 rounded-2xl overflow-hidden bg-slate-800/50 border border-white/10">
  <img 
    src="http://metagri-labo.com/wp-content/uploads/2025/10/03f293037a8b54f66dbbf1df0e9a958f.png" 
    alt="AGRI VISION for Gen Z コンテスト" 
    className="w-full h-full object-cover"
  />
</div>

              {/* Title */}
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  全13作品を見る
                </h3>
                <p className="text-gray-300 text-lg">
                  Z世代が描く農業の未来、すべての作品をチェック！
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href="/genz-campaign#entries"
                  className="group relative inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>他の作品を見る</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
