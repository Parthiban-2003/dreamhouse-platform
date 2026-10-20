"use client";

import { motion } from "framer-motion";
import { Shield, Handshake, Clock, Gem } from "lucide-react";

const values = [
    { icon: Shield, title: "100% Verified", desc: "Every engineer is background-checked and ID verified." },
    { icon: Handshake, title: "Transparent Pricing", desc: "No hidden costs. Clear sq.ft. based estimates." },
    { icon: Clock, title: "On-Time Delivery", desc: "Strict project timelines with regular milestone updates." },
    { icon: Gem, title: "Quality Assurance", desc: "Premium materials and expert craftsmanship guaranteed." },
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">The pillars that make DreamHouse the preferred choice.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                                <value.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}