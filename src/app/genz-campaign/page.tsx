import GenZHero from '@/components/genz/GenZHero';
import VoteBenefits from '@/components/genz/VoteBenefits';
import Entries from '@/components/Entries';
import Voting from '@/components/Voting';
import ShareCTA from '@/components/genz/ShareCTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AGRI VISION for Gen Z - 投票キャンペーン',
  description: 'Z世代が生成AIで描く、農業の新しい未来。投票で豪華特典をGET！',
};

export default function GenZCampaignPage() {
  return (
    <main className="min-h-screen">
      <GenZHero />
      <VoteBenefits />
      <Entries />
      <Voting />
      <ShareCTA />
      <Footer />
    </main>
  );
}
