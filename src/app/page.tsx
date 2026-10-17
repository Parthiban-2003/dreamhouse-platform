import HeroSection from "@/src/features/home/components/HeroSection";
import TrustedSection from "@/src/features/home/components/TrustedSection";
import HowItWorks from "@/src/features/home/components/HowItWorks";
// import FeaturedEngineers from "@/src/features/home/components/FeaturedEngineers";
import FAQSection from "@/src/features/home/components/FAQSection";
import FinalCTA from "@/src/features/home/components/FinalCTA";

export const metadata = {
  title: "Home | DreamHouse - Build Your Dream Home in Tamil Nadu",
  description: "Find verified civil engineers, calculate construction costs, and explore top-rated experts near you.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustedSection />
      <HowItWorks />
      {/* <FeaturedEngineers /> */}
      <FAQSection />
      <FinalCTA />
    </div>
  );
}