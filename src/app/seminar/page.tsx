'use client';

import Footer from '@/components/Footer';

export default function SeminarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-emerald-400 font-bold text-sm">AGRI VISION for Gen Z 受賞記念セミナー</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-cyan-300 to-emerald-400 mb-6 leading-tight">
            AIで地方から世界へ
          </h1>

          <p className="text-3xl md:text-4xl font-bold text-white mb-8">
            一次産業×AIクリエイターの新たな未来
          </p>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            都会じゃなくても、資本がなくても<br className="md:hidden" />
            <span className="text-emerald-400 font-bold">「武器」を持てる時代へ</span>
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12">
            AI時代のローカルキャリア戦略
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="#details"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              詳細を見る
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="text-cyan-400 text-3xl font-black mb-2">50分</div>
              <div className="text-gray-300 text-sm">コンパクトな学びの時間</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="text-emerald-400 text-3xl font-black mb-2">オンライン</div>
              <div className="text-gray-300 text-sm">Zoom開催（全国どこからでも）</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section id="details" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6">
              このセミナーで学べること
            </h2>
            <p className="text-gray-400 text-lg">
              参加者が持ち帰れる具体的な成果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                title: '「AI時代でも"ローカル"で戦える理由」が腹落ちする',
                description: '東京・大企業に行かなくても、AIを使えば勝負できる理由。ニッチ×ローカルこそAIと相性が良い根拠を理解できます。',
                gradient: 'from-emerald-500/20 to-emerald-700/20'
              },
              {
                icon: '💡',
                title: 'AI×一次産業・地域の具体的な事例が分かる',
                description: 'グランプリ受賞作品の制作プロセス、農情人賞受賞作品のエンタメ×農業戦略を詳しく学べます。',
                gradient: 'from-cyan-500/20 to-cyan-700/20'
              },
              {
                icon: '🚀',
                title: '自分の「AI×◯◯」のアイデアのタネができる',
                description: 'ワークシート形式で自分の可能性を棚卸し。登壇者のケーススタディから応用パターンを学びます。',
                gradient: 'from-purple-500/20 to-purple-700/20'
              },
              {
                icon: '⚡',
                title: '動画生成AIを"仕事に繋げる"プロセスがイメージできる',
                description: '趣味レベル → 仕事レベルへの転換ポイント。小さなチームでも高品質コンテンツを生む制作フローを理解できます。',
                gradient: 'from-pink-500/20 to-pink-700/20'
              }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300`}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 mb-6">
              登壇者紹介
            </h2>
            <p className="text-gray-400 text-lg">
              AI×ローカルのロールモデルとして実践している先駆者たち
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Speaker 1 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-4xl font-black text-white">
                  🏆
                </div>
                <div>
                  <div className="inline-block px-4 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-2">
                    <span className="text-yellow-400 text-sm font-bold">グランプリ受賞者</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Shinpei Kojima</h3>
                  <p className="text-gray-400 text-sm">クリエイター</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold text-emerald-400 mb-2">受賞作品</h4>
                <p className="text-white font-semibold mb-2">「LOCAL HEROES NEXT｜わたしたちが動けば、世界が変わる」</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  特別な人でなくても、小さな1歩から地球を変えられる。普通の若者がSNSやAIを使ってローカルから変化を起こす物語。
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold text-gray-400 mb-2">トークテーマ</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• AI×ローカルで描きたい世界</li>
                  <li>• 小さなチームでもここまでできる制作プロセス</li>
                  <li>• 地方・一次産業の未開拓の可能性</li>
                </ul>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-4xl font-black text-white">
                  🌾
                </div>
                <div>
                  <div className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/30 rounded-full mb-2">
                    <span className="text-green-400 text-sm font-bold">農情人賞 + 前回グランプリ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">大森研一</h3>
                  <p className="text-gray-400 text-sm">AIクリエイター</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-bold text-pink-400 mb-2">受賞作品（今回）</h4>
                <p className="text-white font-semibold mb-2">「アグリ☆ビート_アイドル兼プロデューサー」</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  農業×アイドル×推し文化。エンタメの力で一次産業を「推せる・楽しい・カッコいい」に変換する革新的アプローチ。
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold text-gray-400 mb-2">トークテーマ</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• ローカル×エンタメ×AIの掛け算</li>
                  <li>• Sora2がもたらした表現のジャンプ</li>
                  <li>• 地方クリエイターにとっての追い風</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              プログラム
            </h2>
            <p className="text-gray-400 text-lg">
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
                time: '0:15 - 0:30',
                title: 'ケーススタディ①：「LOCAL HEROES NEXT」',
                description: '普通の若者×ローカル×AIが社会を動かす。グランプリ受賞者が語る制作の裏側と、AI×ローカルの可能性。小さなチームでもここまでできる制作プロセスを公開。',
                color: 'from-cyan-500 to-cyan-600',
                speaker: 'Shinpei Kojima'
              },
              {
                time: '0:30 - 0:45',
                title: 'ケーススタディ②：「アグリ☆ビート」',
                description: '推し文化×農業×AIでエンタメに変換する。Sora2がもたらした表現のジャンプと、ローカルクリエイターへのエール。エンタメ経由で一次産業とつながる未来像。',
                color: 'from-pink-500 to-purple-600',
                speaker: '大森研一'
              },
              {
                time: '0:45 - 0:50',
                title: 'Q&A・質疑応答',
                description: '参加者からの質問に登壇者が回答。AI×ローカル×一次産業に関する疑問を解消します。',
                color: 'from-yellow-500 to-amber-600'
              },
              {
                time: '0:50 - 0:55',
                title: 'クロージング & 次のアクション',
                description: '今日のまとめと、次回コンテストの案内。Metagriコミュニティへの参加呼びかけ。',
                color: 'from-slate-500 to-slate-600'
              }
            ].map((session, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className={`flex-shrink-0 px-6 py-3 bg-gradient-to-r ${session.color} rounded-xl text-white font-bold text-sm`}>
                    {session.time}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                    {session.speaker && (
                      <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-2">
                        <span className="text-emerald-400 text-xs font-semibold">登壇：{session.speaker}</span>
                      </div>
                    )}
                    <p className="text-gray-400 text-sm">{session.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6">
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
                ]
              },
              {
                icon: '🌾',
                title: '一次産業・地方関係者',
                items: [
                  '農業・地域のPR方法を知りたい',
                  'Z世代への伝え方を学びたい',
                  'AIツールの活用事例を知りたい'
                ]
              },
              {
                icon: '💼',
                title: 'マーケター・広報担当',
                items: [
                  '動画制作の効率化を図りたい',
                  'Z世代向けコンテンツを作りたい',
                  '地方×AI事例を知りたい'
                ]
              }
            ].map((audience, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-6">{audience.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-6">{audience.title}</h3>
                <ul className="space-y-3">
                  {audience.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
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
                a: 'はい、参加者には期間限定で録画アーカイブを提供します。当日参加できない場合でも、後日視聴可能です。'
              },
              {
                q: 'Metagriコミュニティとは何ですか？',
                a: 'Metagri研究所が運営する、AI×農業・地域に関心のある方々のコミュニティです。Discordやニュースレターで情報共有・交流を行っています。セミナー参加者には優先的にご招待します。'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                <summary className="cursor-pointer text-lg font-bold text-white flex items-center justify-between">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-emerald-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-emerald-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-cyan-300 to-emerald-400 mb-6">
            あなたの『AI×◯◯』を、<br />
            ぜひ形にしてください
          </h2>
          <p className="text-xl text-gray-300">
            このセミナーが、新しい一歩を踏み出すきっかけになれば幸いです
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
