"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function TestimonialsCTA() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 p-12 md:p-16 text-center text-white shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Ready to write your own success story?
                        </h2>
                        <p className="text-indigo-100 text-lg max-w-xl mx-auto mb-10">
                            Find a verified construction company near you and start building
                            with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/find-companies"
                                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-950 px-8 py-3.5 rounded-full font-bold hover:bg-amber-50 transition-all shadow-lg"
                            >
                                Find Companies
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}