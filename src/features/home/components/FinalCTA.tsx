"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 p-12 md:p-20 text-center text-white shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Ready to Build Your <br />
                            <span className="text-amber-300">Dream Home?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                            Connect with verified construction companies today and get a free
                            cost estimate for your plot.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/find-companies"
                                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all shadow-lg hover:-translate-y-1"
                            >
                                Find Companies Near You
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}