import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBanner from "@/components/SocialProofBanner";
import RecognitionSection from "@/components/RecognitionSection";
import WhatIsSection from "@/components/WhatIsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StartpakkeSection from "@/components/StartpakkeSection";
import HjertestarterSection from "@/components/HjertestarterSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import ForedragSection from "@/components/ForedragSection";
import AboutMariaSection from "@/components/AboutMariaSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProofBanner />
      <RecognitionSection />
      <WhatIsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <StartpakkeSection />
      <HjertestarterSection />
      <ContactSection />
      <NewsletterSection />
      <ForedragSection />
      <AboutMariaSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
