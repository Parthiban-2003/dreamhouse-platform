"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const cards = [
    {
        icon: Target,
        title: "Our Mission",
        description:
            "To empower every homeowner in Tamil Nadu with verified construction companies, transparent pricing, and a stress-free build experience from first search to final handover.",
        accent: "from-indigo-800 to-indigo-900",
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-800",
        border: "border-indigo-100",
    },
    {
        icon: Eye,
        title: "Our Vision",
        description:
            "To become South India's #1 digital construction ecosystem — where finding the right company and building a dream home is as simple and trusted as booking a ride.",
        accent: "from-amber-500 to-amber-600",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        border: "border-amber-100",
    },
];

export default function MissionVision() {
    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    {/* mission and vision */}
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        What Drives Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
                        Mission & Vision
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        The principles that guide every product decision and partnership.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 }}
                            className={`bg-white p-8 md:p-10 rounded-3xl border ${card.border} shadow-sm hover:shadow-xl transition-all duration-300`}
                        >
                            <div
                                className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                            >
                                <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                            </div>

                            {/* mission and vision  tiles and descriptions */}
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">
                                {card.title}
                            </h3>
                            <p className="text-stone-600 leading-relaxed text-base">
                                {card.description}
                            </p>
                            <div
                                className={`mt-8 h-1.5 w-16 rounded-full bg-gradient-to-r ${card.accent}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}