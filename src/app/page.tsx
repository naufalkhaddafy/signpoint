import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AiReviewSection } from "@/components/sections/AiReviewSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <AiReviewSection />
        <HowItWorksSection />
        <SecuritySection />
        <PricingSection />
        <CompanySection />
        <ContactSection />
      </div>
    </main>
  );
}
