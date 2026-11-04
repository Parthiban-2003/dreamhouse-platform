"use client";

import { motion } from "framer-motion";
import { Building2, Home, MapPin, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
    { icon: Building2, value: "50+", label: "Verified Companies" },
    { icon: Home, value: "1,200+", label: "Homes Delivered" },
    { icon: MapPin, value: "38", label: "Districts Covered" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
];

export default function StatsSection() {
    return (
        <section className="py-24 px-4 bg-stone-50">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 p-10 md:p-16 text-white shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />

                    {/* Stats */}
                    <div className="relative z-10">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                                Our Impact in Numbers
                            </h2>
                            <p className="text-indigo-200 max-w-xl mx-auto">
                                Trusted by families and builders across Tamil Nadu.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="text-center"
                                >
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                                        <stat.icon className="w-7 h-7 text-amber-400" />
                                    </div>

                                    <div className="text-3xl md:text-4xl font-bold mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-indigo-200 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Call to Action */}
                        <div className="flex justify-center">
                            <Link
                                href="/find-companies"
                                className="inline-flex items-center gap-2 bg-white text-indigo-950 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-amber-50 transition-all shadow-lg"
                            >
                                Find Companies Near You
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}