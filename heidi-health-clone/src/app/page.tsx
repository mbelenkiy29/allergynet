import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CarePartnerSection } from "@/components/CarePartnerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { SecuritySection } from "@/components/SecuritySection";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnersMarquee />
      <div id="why-us"><WhyUsSection /></div>
      <CarePartnerSection />
      <FeaturesSection />
      <StatsSection />
      <SecuritySection />
      <div id="pricing"><EnterpriseSection /></div>
      <div id="contact"><CTASection /></div>
      <Footer />
    </main>
  );
}
