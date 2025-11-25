'use client';

import Footer from '@/components/Footer';

export default function SeminarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950">
      {/* Hero Section - Ultra Refined */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Multi-layered Futuristic Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.03]" />
          {/* Secondary Fine Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.02]" />
          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_50%)]" />
        </div>

        {/* Sophisticated Animated Glows with More Layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary Glows */}
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-cyan-400/25 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

          {/* Secondary Glows */}
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-teal-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-emerald-300/15 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }} />

          {/* Accent Glows */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-[150px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-pink-400/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '5s' }} />
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-teal-400/35 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-emerald-300/40 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Premium Label Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 border border-emerald-400/50 rounded-full mb-10 backdrop-blur-lg shadow-[0_0_40px_rgba(16,185,129,0.4),0_0_80px_rgba(6,182,212,0.2)]">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,1)]" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-emerald-200 font-bold text-sm md:text-base tracking-widest uppercase">AGRI VISION for Gen Z 受賞記念セミナー</span>
          </div>

          {/* Main Title with Multi-layer Gradient and Enhanced Glow */}
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-cyan-100 to-teal-200 leading-tight animate-[pulse_8s_ease-in-out_infinite]" style={{
              textShadow: '0 0 80px rgba(16,185,129,0.5), 0 0 120px rgba(6,182,212,0.3)'
            }}>
              AIで地方から世界へ
            </h1>
            {/* Glow effect behind title */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl -z-10" />
          </div>

          <p className="text-2xl md:text-5xl font-bold text-white mb-10 leading-tight" style={{
            textShadow: '0 4px 30px rgba(0,0,0,0.6), 0 0 60px rgba(16,185,129,0.2)'
          }}>
            一次産業×AIクリエイターの<br className="md:hidden" />
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">新たな未来</span>
          </p>

          {/* Subtitle with Better Hierarchy */}
          <p className="text-xl md:text-2xl text-gray-200 mb-3 leading-relaxed">
            都会じゃなくても、資本がなくても
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]">
              「武器」を持てる時代へ
            </span>
          </p>

          <p className="text-base md:text-lg text-gray-400 mb-14 tracking-wide">
            AI時代のローカルキャリア戦略
          </p>

          {/* Premium CTA Button with Advanced Effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="#details"
              className="group relative inline-flex items-center gap-3 px-14 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-[0_0_60px_rgba(16,185,129,0.5),0_0_100px_rgba(6,182,212,0.3)] hover:shadow-[0_0_80px_rgba(16,185,129,0.7),0_0_120px_rgba(6,182,212,0.5),0_0_160px_rgba(20,184,166,0.3)]"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <span className="relative z-10 tracking-wide">セミナー詳細を見る</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Enhanced Info Cards with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="group relative bg-gradient-to-br from-cyan-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-cyan-300 text-4xl font-black mb-2 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">60分</div>
              <div className="relative text-gray-200 text-sm font-medium">充実した学びの時間</div>
            </div>
            <div className="group relative bg-gradient-to-br from-emerald-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-emerald-300 text-4xl font-black mb-2 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">オンライン</div>
              <div className="relative text-gray-200 text-sm font-medium">Zoom開催（全国どこからでも）</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section with Enhanced Design */}
      <section id="details" className="relative py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-emerald-300 font-bold text-sm tracking-wider">LEARNING OUTCOMES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 mb-6 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              このセミナーで学べること
            </h2>
            <p className="text-gray-300 text-lg font-medium">
              参加者が持ち帰れる具体的な成果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                title: '「AI時代でも"ローカル"で戦える理由」が腹落ちする',
                description: '東京・大企業に行かなくても、AIを使えば勝負できる理由。ニッチ×ローカルこそAIと相性が良い根拠を理解できます。',
                gradient: 'from-emerald-500/20 to-emerald-700/20',
                borderColor: 'border-emerald-400/30 hover:border-emerald-400/60',
                shadowColor: 'shadow-[0_0_40px_rgba(16,185,129,0.15)]'
              },
              {
                icon: '💡',
                title: 'AI×一次産業・地域の具体的な事例が分かる',
                description: 'グランプリ受賞作品の制作プロセス、農情人賞受賞作品のエンタメ×農業戦略を詳しく学べます。',
                gradient: 'from-cyan-500/20 to-cyan-700/20',
                borderColor: 'border-cyan-400/30 hover:border-cyan-400/60',
                shadowColor: 'shadow-[0_0_40px_rgba(34,211,238,0.15)]'
              },
              {
                icon: '🚀',
                title: '自分の「AI×◯◯」のアイデアのタネができる',
                description: 'ワークシート形式で自分の可能性を棚卸し。登壇者のケーススタディから応用パターンを学びます。',
                gradient: 'from-purple-500/20 to-purple-700/20',
                borderColor: 'border-purple-400/30 hover:border-purple-400/60',
                shadowColor: 'shadow-[0_0_40px_rgba(168,85,247,0.15)]'
              },
              {
                icon: '⚡',
                title: '動画生成AIを"仕事に繋げる"プロセスがイメージできる',
                description: '趣味レベル → 仕事レベルへの転換ポイント。個人でもAI活用で高品質の動画コンテンツを実現できる制作フローを理解できます。',
                gradient: 'from-pink-500/20 to-pink-700/20',
                borderColor: 'border-pink-400/30 hover:border-pink-400/60',
                shadowColor: 'shadow-[0_0_40px_rgba(236,72,153,0.15)]'
              }
            ].map((item, index) => (
              <div key={index} className={`group relative bg-gradient-to-br ${item.gradient} backdrop-blur-xl rounded-3xl p-8 border ${item.borderColor} hover:scale-105 transition-all duration-300 ${item.shadowColor}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-5xl mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">{item.icon}</div>
                <h3 className="relative text-2xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="relative text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section with Enhanced Design */}
      <section className="relative py-20 px-6 bg-slate-950 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-yellow-300 font-bold text-sm tracking-wider">SPEAKERS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-300 mb-6 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              登壇者紹介
            </h2>
            <p className="text-gray-300 text-lg font-medium">
              AI×ローカルのロールモデルとして実践している先駆者たち
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Speaker 1 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-emerald-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-4xl font-black text-white shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  🏆
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 border border-yellow-400/50 rounded-full mb-2 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-yellow-300 text-sm font-bold">グランプリ受賞者</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Shinpei Kojima</h3>
                  <p className="text-gray-300 text-sm font-medium">クリエイター</p>
                </div>
              </div>

              <div className="relative mb-4">
                <h4 className="text-lg font-bold text-emerald-300 mb-2">受賞作品</h4>
                <p className="text-white font-semibold mb-2">「LOCAL HEROES NEXT｜わたしたちが動けば、世界が変わる」</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  特別な人でなくても、小さな1歩から地球を変えられる。普通の若者がSNSやAIを使ってローカルから変化を起こす物語。
                </p>
              </div>

              <div className="relative pt-4 border-t border-emerald-400/20">
                <h4 className="text-sm font-bold text-emerald-300 mb-3">トークテーマ</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AI×ローカルで描きたい世界</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>生成AIででここまでできる制作プロセス</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AI活用で未開拓の価値を発見・発展させる可能性</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Speaker 2 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-pink-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(236,72,153,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-4xl font-black text-white shadow-[0_0_30px_rgba(236,72,153,0.4)]">
                  🌾
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/50 rounded-full mb-2 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-300 text-sm font-bold">農情人賞 + 前回グランプリ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">大森研一</h3>
                  <p className="text-gray-300 text-sm font-medium">AIクリエイター</p>
                </div>
              </div>

              <div className="relative mb-4">
                <h4 className="text-lg font-bold text-pink-300 mb-2">受賞作品（今回）</h4>
                <p className="text-white font-semibold mb-2">「アグリ☆ビート_アイドル兼プロデューサー」</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  農業×アイドル×推し文化。エンタメの力で一次産業を「推せる・楽しい・カッコいい」に変換する革新的アプローチ。
                </p>
              </div>

              <div className="relative pt-4 border-t border-pink-400/20">
                <h4 className="text-sm font-bold text-pink-300 mb-3">トークテーマ</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>ローカル×エンタメ×AIの掛け算</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sora2がもたらした新たな表現のカタチ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>地方クリエイターにとっての追い風</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section - Enhanced */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-cyan-300 font-bold text-sm tracking-wider">PROGRAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 mb-6 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              プログラム
            </h2>
            <p className="text-gray-300 text-lg font-medium">
              60分で学ぶ、AI時代のローカルキャリア戦略
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                time: '0:00 - 0:05',
                title: 'オープニング & ゴール共有',
                description: 'セミナーのテーマと今日のゴールを共有。登壇者紹介。',
                color: 'from-slate-500 to-slate-600'
              },
              {
                time: '0:05 - 0:15',
                title: 'AI時代、地方・一次産業・個人でも"勝ち筋"を持てる理由',
                description: 'AIがもたらす「個人・地方の武器化」。大企業が手を出しづらい「ニッチ×ローカル」こそAIと相性が良い理由。AGRI VISION for Gen Zコンテストの意義と、AI×ローカル×一次産業の可能性。',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                time: '0:15 - 0:35',
                title: 'ケーススタディ①：「LOCAL HEROES NEXT」',
                description: '普通の若者×ローカル×AIが社会を動かす。グランプリ受賞者が語る制作の裏側（15分）と、AI×ローカルの可能性。その後、参加者や主催からの質問に回答いただきつつ対話（5分）。',
                color: 'from-cyan-500 to-cyan-600',
                speaker: 'Shinpei Kojima'
              },
              {
                time: '0:35 - 0:55',
                title: 'ケーススタディ②：「アグリ☆ビート」',
                description: '推し文化×農業×AIでエンタメに変換する。Sora2が映像革命。一次産業×動画生成AIの可能性。（15分）。その後、参加者や主催からの質問に回答いただきつつ対話（5分）。',
                color: 'from-pink-500 to-purple-600',
                speaker: '大森研一'
              },
              {
                time: '0:55 - 1:00',
                title: 'クロージング & 次のアクション',
                description: '今日のまとめと、次回コンテストの案内。Metagriコミュニティへの参加呼びかけ。',
                color: 'from-slate-500 to-slate-600'
              }
            ].map((session, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex flex-col md:flex-row md:items-center gap-4">
                  <div className={`flex-shrink-0 px-6 py-3 bg-gradient-to-r ${session.color} rounded-xl text-white font-bold text-sm shadow-lg`}>
                    {session.time}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{session.title}</h3>
                    {session.speaker && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 rounded-full mb-2 backdrop-blur-sm">
                        <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-emerald-300 text-xs font-semibold">登壇：{session.speaker}</span>
                      </div>
                    )}
                    <p className="text-gray-300 text-sm leading-relaxed">{session.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section - Enhanced */}
      <section className="relative py-20 px-6 bg-slate-950 overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-emerald-300 font-bold text-sm tracking-wider">TARGET AUDIENCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 mb-6 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              こんな方におすすめ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎨',
                title: 'Z世代クリエイター・学生',
                items: [
                  '東京に行かずにAIで勝負したい',
                  '地方・一次産業×クリエイティブに興味',
                  '同世代のロールモデルから学びたい'
                ],
                gradient: 'from-emerald-500/10 to-cyan-500/10',
                borderColor: 'border-emerald-400/30 hover:border-emerald-400/60',
                accentColor: 'text-emerald-400'
              },
              {
                icon: '🌾',
                title: '一次産業・地方関係者',
                items: [
                  '農業・地域のPR方法を知りたい',
                  'Z世代への伝え方を学びたい',
                  'AIツールの活用事例を知りたい'
                ],
                gradient: 'from-cyan-500/10 to-purple-500/10',
                borderColor: 'border-cyan-400/30 hover:border-cyan-400/60',
                accentColor: 'text-cyan-400'
              },
              {
                icon: '💼',
                title: 'マーケター・広報担当',
                items: [
                  '動画制作の効率化を図りたい',
                  'Z世代向けコンテンツを作りたい',
                  '地方×AI事例を知りたい'
                ],
                gradient: 'from-purple-500/10 to-pink-500/10',
                borderColor: 'border-purple-400/30 hover:border-purple-400/60',
                accentColor: 'text-purple-400'
              }
            ].map((audience, index) => (
              <div key={index} className={`group relative bg-gradient-to-br ${audience.gradient} backdrop-blur-xl rounded-3xl p-8 border ${audience.borderColor} hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)]`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative text-6xl mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">{audience.icon}</div>
                <h3 className="relative text-2xl font-bold text-white mb-6 leading-tight">{audience.title}</h3>
                <ul className="relative space-y-3">
                  {audience.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <svg className={`w-5 h-5 ${audience.accentColor} flex-shrink-0 mt-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="relative py-20 px-6 bg-slate-950 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-cyan-300 font-bold text-sm tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 mb-6 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'AIツールを使ったことがなくても参加できますか？',
                a: 'はい、もちろんです。このセミナーは「AIツールの使い方講座」ではなく、「AI時代のキャリア戦略」を考える場です。AI初心者の方も、ぜひご参加ください。'
              },
              {
                q: '地方在住ですが、参加できますか？',
                a: 'むしろ歓迎です！このセミナーは「地方でもAIで戦える」というテーマですので、地方在住の方にこそ参加いただきたい内容です。オンライン開催なので、全国どこからでも参加可能です。'
              },
              {
                q: '農業に全く関わりがないのですが、参加してもいいですか？',
                a: 'はい、問題ありません。このセミナーのテーマは「AI×ローカル×一次産業」ですが、他の分野（観光、教育、ものづくりなど）にも応用できる内容です。'
              },
              {
                q: '録画視聴はできますか？',
                a: 'はい、有料チケット購入者には録画アーカイブを提供します。'
              },
              {
                q: 'Metagriコミュニティとは何ですか？',
                a: 'Metagri研究所が運営する、AI×農業・地域に関心のある方々のコミュニティです。Discordやニュースレターで情報共有・交流を行っています。セミナー参加者には優先的にご招待します。'
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                <summary className="cursor-pointer text-lg font-bold text-white flex items-center justify-between list-none">
                  <span className="flex-1 pr-4">{faq.q}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-300 leading-relaxed pl-1">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-emerald-950/30 to-slate-950 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-emerald-300 font-bold text-sm tracking-wider">JOIN US</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-cyan-200 to-emerald-200 mb-6 leading-tight drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]">
            あなたの『AI×◯◯』を、<br />
            ぜひ形にしてください
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            このセミナーが、新しい一歩を踏み出す<br className="hidden md:block" />
            きっかけになれば幸いです
          </p>

          {/* Decorative Icons */}
          <div className="flex items-center justify-center gap-8 text-4xl opacity-60">
            <div className="animate-pulse" style={{ animationDuration: '3s' }}>🌾</div>
            <div className="text-emerald-400 text-2xl">×</div>
            <div className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}>🤖</div>
            <div className="text-cyan-400 text-2xl">=</div>
            <div className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '2s' }}>🚀</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
