"use client";

import { motion } from "framer-motion";
import { Shield, Handshake, Clock, Gem } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "100% Verified",
        desc: "Every company and engineer is background-checked and ID verified before listing.",
    },
    {
        icon: Handshake,
        title: "Transparent Pricing",
        desc: "Clear sq.ft. based estimates. No hidden costs or surprise bills.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        desc: "Project timelines with milestone updates so you always know the status.",
    },
    {
        icon: Gem,
        title: "Quality First",
        desc: "Premium materials and expert craftsmanship from trusted partners.",
    },
];

export default function CoreValues() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    {/* core values */}
                    <span className="inline-block bg-amber-50 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-amber-100">
                        Our Core Values
                    </span>
                    {/* choose us */}
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
                        Why families choose us
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        The pillars that make DreamHouse the preferred way to build in Tamil
                        Nadu.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-stone-50 p-7 rounded-3xl border border-stone-100 hover:bg-white hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-900 transition-colors">
                                <value.icon className="w-6 h-6 text-indigo-800 group-hover:text-amber-400 transition-colors" />
                            </div>
                            {/* core value tiles and descriptions */}
                            <h3 className="text-xl font-bold text-stone-900 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}