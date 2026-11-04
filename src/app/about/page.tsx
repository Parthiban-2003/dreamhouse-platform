import type { Metadata } from "next";
import AboutHero from "@/src/features/about/components/AboutHero";
import OurStory from "@/src/features/about/components/OurStory";
import MissionVision from "@/src/features/about/components/MissionVision";
import CoreValues from "@/src/features/about/components/CoreValues";
import StatsSection from "@/src/features/about/components/StatsSection";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about DreamHouse — Tamil Nadu's trusted platform connecting homeowners with verified construction companies and civil engineers.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <OurStory />
            <MissionVision />
            <CoreValues />
            <StatsSection />
        </div>
    );
}