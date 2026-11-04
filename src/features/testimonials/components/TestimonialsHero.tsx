"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";

export default function TestimonialsHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-24 md:py-32">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/15"
                >
                    <MessageSquareQuote className="w-4 h-4 text-amber-400" />
                    <span className="text-white/90">Client Stories</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
                >
                    Homes built.{" "}
                    <span className="bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                        Trust earned.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-indigo-100/85 max-w-2xl mx-auto leading-relaxed"
                >
                    Real feedback from families who found verified construction companies
                    on DreamHouse and built their dream homes across Tamil Nadu.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="mt-10 flex items-center justify-center gap-2 text-amber-300"
                >
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-white/80 text-sm font-medium">
                        4.9 average from verified clients
                    </span>
                </motion.div>
            </div>
        </section>
    );
}