"use client";

import { motion } from "framer-motion";
import { Users, Home, MapPin, Award } from "lucide-react";

const stats = [
    { icon: Users, value: "500+", label: "Verified Engineers" },
    { icon: Home, value: "1,200+", label: "Dream Homes Built" },
    { icon: MapPin, value: "38", label: "Districts Covered" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
                            <p className="text-gray-400 max-w-xl mx-auto">Trusted by thousands of families across Tamil Nadu.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                                        <stat.icon className="w-7 h-7 text-teal-400" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}