"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const cards = [
    {
        icon: Target,
        title: "Our Mission",
        description: "To empower every homeowner in Tamil Nadu with verified professionals, transparent pricing, and stress-free construction experiences.",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        textColor: "text-blue-600"
    },
    {
        icon: Eye,
        title: "Our Vision",
        description: "To become South India's #1 digital construction ecosystem, where building a dream home is as easy as booking a cab.",
        color: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
        textColor: "text-teal-600"
    }
];

export default function MissionVision() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Our core principles that guide every decision we make.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <card.icon className={`w-8 h-8 ${card.textColor}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}