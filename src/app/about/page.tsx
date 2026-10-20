import type { Metadata } from "next";
import AboutHero from "@/src/features/about/components/AboutHero";
import OurStory from "@/src/features/about/components/OurStory";
import MissionVision from "@/src/features/about/components/MissionVision";
import StatsSection from "@/src/features/about/components/StatsSection";
import CoreValues from "@/src/features/about/components/CoreValues";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | DreamHouse - Building Dreams in Tamil Nadu",
    description: "Learn about DreamHouse, Tamil Nadu's #1 platform for finding verified civil engineers and building your dream home with transparency.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <OurStory />
            <MissionVision />
            <StatsSection />
            <CoreValues />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-teal-50 rounded-[2.5rem] p-12 md:p-16 border border-blue-100">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Build Your <span className="text-blue-600">Dream Home?</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                            Connect with verified civil engineers near you and get started on your construction journey today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/find-engineers"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1"
                            >
                                Find Engineers
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}