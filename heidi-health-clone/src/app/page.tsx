import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { HeidiRemoteSection } from "@/components/HeidiRemoteSection";
import { CarePartnerSection } from "@/components/CarePartnerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { VideoSection } from "@/components/VideoSection";
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
      <HeidiRemoteSection />
      <CarePartnerSection />
      <FeaturesSection />
      <StatsSection />
      <VideoSection />
      <SecuritySection />
      <EnterpriseSection />
      <CTASection />
      <Footer />
    </main>
  );
}
