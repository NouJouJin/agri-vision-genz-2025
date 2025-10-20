import Hero from '@/components/Hero';
import About from '@/components/About';
import Entries from '@/components/Entries';
import Guidelines from '@/components/Guidelines';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Entries />
      <Guidelines />
      <Footer />
    </main>
  );
}
