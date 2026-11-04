"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/15 shadow-lg"
                >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    {/* About DreamHouse */}
                    <span className="text-white/90">About DreamHouse</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.08] tracking-tight"
                >
                    {/* Building Dreams */}
                    <span className="text-white block">Building Dreams,</span>
                    <span className="block bg-gradient-to-r from-amber-300 via-amber-200 to-indigo-200 bg-clip-text text-transparent">
                        One Home at a Time.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-indigo-100/90 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    {/* Find Companies */}
                    Tamil Nadu&apos;s trusted platform connecting homeowners with verified
                    construction companies and expert engineers — transparent pricing,
                    quality work, zero stress.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 flex items-center justify-center gap-3 text-indigo-200/70 text-sm"
                >
                    <Building2 className="w-4 h-4" />
                    {/* Trusted Companies */}
                    <span>Trusted companies · Verified engineers · All 38 districts</span>
                </motion.div>
            </div>
        </section>
    );
}