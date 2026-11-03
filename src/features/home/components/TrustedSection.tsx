"use client";

import { motion } from "framer-motion";
import { Award, Clock, Wallet, Building2 } from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Verified Companies",
        description:
            "Every construction company is background-checked and verified for quality assurance.",
    },
    {
        icon: Wallet,
        title: "Transparent Pricing",
        description:
            "Get clear sq.ft. based estimates with no hidden charges or surprise costs.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description:
            "Track project milestones and ensure your dream home is ready on schedule.",
    },
    {
        icon: Award,
        title: "Expert Engineers",
        description:
            "Work with experienced civil engineers under trusted company banners.",
    },
];

export default function TrustedSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-stone-900 mb-4">
                        Why Choose DreamHouse?
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        We make home construction simple, transparent, and stress-free —
                        company by company.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-indigo-800" />
                            </div>
                            <h3 className="text-lg font-bold text-stone-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}