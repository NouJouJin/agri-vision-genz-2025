import GenZHero from '@/components/genz/GenZHero';
import VoteBenefits from '@/components/genz/VoteBenefits';
import Entries from '@/components/Entries';
import Voting from '@/components/Voting';
import ShareCTA from '@/components/genz/ShareCTA';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGRI VISION for Gen Z - 投票キャンペーン｜観る、感じる、選ぶ～Next Generation Agriculture～',
  description: 'Z世代が生成AIで描く、農業の新しい未来。投票で豪華特典をGET！参加証明NFT、AIセミナー無料参加、抽選で新米5kgをプレゼント。',
  keywords: ['AGRI VISION', 'Gen Z', 'Z世代', '農業', '生成AI', '投票キャンペーン', 'NFT', 'AIセミナー'],
  authors: [{ name: 'AGRI VISION運営事務局' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://agrivision-genz-2025.metagri-labo.com/genz-campaign',
    siteName: 'AGRI VISION for Gen Z',
    title: '投票で豪華特典GET！｜AGRI VISION for Gen Z',
    description: '観る、感じる、選ぶ～Next Generation Agriculture～ あなたの一票で、日本の農業の未来を変える。投票した全員に限定特典をプレゼント！',
    images: [
      {
        url: 'http://metagri-labo.com/wp-content/uploads/2025/11/88725afb02f5d4e5475d3ae2dcca3398.png',
        width: 1920,
        height: 1080,
        alt: 'AGRI VISION for Gen Z - 投票キャンペーン',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '投票で豪華特典GET！｜AGRI VISION for Gen Z',
    description: '観る、感じる、選ぶ～Next Generation Agriculture～ あなたの一票で、日本の農業の未来を変える。',
    images: ['http://metagri-labo.com/wp-content/uploads/2025/11/88725afb02f5d4e5475d3ae2dcca3398.png'],
  },
  icons: {
    icon: 'http://metagri-labo.com/wp-content/uploads/2025/06/7b4279d2e6a9adb876529df2fcc013c1.png',
    shortcut: 'http://metagri-labo.com/wp-content/uploads/2025/06/7b4279d2e6a9adb876529df2fcc013c1.png',
    apple: 'http://metagri-labo.com/wp-content/uploads/2025/06/7b4279d2e6a9adb876529df2fcc013c1.png',
  },
};

export default function GenZCampaignPage() {
  return (
    <main className="min-h-screen">
      <GenZHero />
      <VoteBenefits />
      <Entries />
      <Voting formUrl="https://airtable.com/embed/applcqOMmwyE9fjtX/pagV9Be9LTXkw6iQT/form" />
      <ShareCTA />
      <Footer />
    </main>
  );
}
