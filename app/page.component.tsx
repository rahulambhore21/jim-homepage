import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PaymentMethodsMarquee from '@/components/PaymentMethodsMarquee';
import AIPartnerSection from '@/components/AIPartnerSection';
import FeatureCards from '@/components/FeatureCards';
import ThingsDoneMarquee from '@/components/ThingsDoneMarquee';
import GrowingSection from '@/components/GrowingSection';
import AudienceMarquee from '@/components/AudienceMarquee';
import PersonalizedAISection from '@/components/PersonalizedAISection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import BlogsSection from '@/components/BlogsSection';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';
import MobileStickyButton from '@/components/MobileStickyButton';

export const metadata = {
  title: 'Jim | Your AI Hire That Gets You Paid — Instant Payouts in India',
  description:
    'Meet Jim — the AI partner that runs your payments and grows your business. Accept contactless card & UPI payments on your phone, send smart links, and track sales across India.',
  icons: {
    icon: '/assets/Favicon.png',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f3f3] text-[#1A0000] selection:bg-[#FF5C19] selection:text-[#1A0000] flex flex-col antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PaymentMethodsMarquee />
        <AIPartnerSection />
        <FeatureCards />
        <ThingsDoneMarquee />
        <GrowingSection />
        <AudienceMarquee />
        <PersonalizedAISection />
        <BenefitsSection />
        <TestimonialsSection />
        <StatsSection />
        <FAQSection />
        <BlogsSection />
        <PreFooterCTA />
      </main>
      <Footer />
      <MobileStickyButton />
    </div>
  );
}
