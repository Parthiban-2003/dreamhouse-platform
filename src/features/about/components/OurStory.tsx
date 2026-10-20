"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function OurStory() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                            alt="Our Story"
                            className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                            <Lightbulb className="w-4 h-4" />
                            Our Story
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            From a Simple Idea to a <span className="text-blue-600">Trusted Platform</span>
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            DreamHouse started in 2024 with a simple mission: to solve the biggest headache in home construction—finding reliable and honest civil engineers.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            After seeing countless families struggle with hidden costs, delayed projects, and unverified contractors, we built a platform that brings 100% transparency. Today, we proudly serve thousands of homeowners across all 38 districts of Tamil Nadu.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}