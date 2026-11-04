"use client";

import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2 } from "lucide-react";

const highlights = [
    "Verified construction companies across Tamil Nadu",
    "Transparent sq.ft. pricing with no hidden costs",
    "Engineer availability & project tracking",
    "Dedicated support from plot to keys",
];

export default function OurStory() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -top-5 -left-5 w-full h-full bg-indigo-100/80 rounded-[2rem]" />
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
                            alt="Our Story"
                            className="relative rounded-[2rem] shadow-2xl w-full h-[420px] object-cover border border-stone-100"
                        />

                        {/* Trusted Companies */}
                        <div className="absolute -bottom-6 -right-6 bg-indigo-950 text-white px-6 py-4 rounded-2xl shadow-xl hidden sm:block">
                            <p className="text-2xl font-bold">2019</p>
                            <p className="text-xs text-indigo-200">Founded in Chennai</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-6"
                    >
                        {/* Our Story */}
                        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-100">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            Our Story
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                            From a simple idea to Tamil Nadu&apos;s home-building partner
                        </h2>

                        <p className="text-stone-600 leading-relaxed text-lg">
                            DreamHouse started when we saw families struggle to find reliable
                            builders — unclear quotes, delays, and no accountability. We built
                            a platform where verified companies and engineers meet homeowners
                            with full transparency.
                        </p>

                        <p className="text-stone-600 leading-relaxed">
                            Today we help thousands of families search by district or pincode,
                            compare company profiles and projects, and start construction with
                            confidence.
                        </p>

                        {/* Key Highlights */}
                        <ul className="space-y-3 pt-2">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                                    <span className="text-stone-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}