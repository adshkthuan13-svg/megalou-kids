import Hero from '@/components/Hero';
import Features from '@/components/Features';
import GameShowcase from '@/components/GameShowcase';
import LearningShowcase from '@/components/LearningShowcase';
import Gallery from '@/components/Gallery';
import AlphaSignup from '@/components/AlphaSignup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <GameShowcase />
      <LearningShowcase />
      <Gallery />
      <AlphaSignup />
      <Footer />
    </main>
  );
}
