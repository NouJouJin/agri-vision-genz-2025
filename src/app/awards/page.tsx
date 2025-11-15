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

      <Footer />
    </main>
  );
}
