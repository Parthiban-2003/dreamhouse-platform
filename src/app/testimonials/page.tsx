import type { Metadata } from "next";
import TestimonialsHero from "@/src/features/testimonials/components/TestimonialsHero";
import TestimonialsGrid from "@/src/features/testimonials/components/TestimonialsGrid";
import TestimonialsCTA from "@/src/features/testimonials/components/TestimonialsCTA";

export const metadata: Metadata = {
    title: "Testimonials",
    description:
        "Real stories from homeowners who built with verified DreamHouse construction companies across Tamil Nadu.",
};

export default function TestimonialsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <TestimonialsHero />
            <TestimonialsGrid />
            <TestimonialsCTA />
        </div>
    );
}