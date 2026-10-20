"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "2s" }}></div>

            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-base font-medium mb-8 border border-white/20 shadow-lg"
                >
                    <Heart className="w-5 h-5 text-red-300 fill-red-300" />
                    <span className="text-white">About DreamHouse</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
                >
                    <span className="text-white block">Building Dreams,</span>
                    <span className="block bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">
                        One Home at a Time.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    We are Tamil Nadu's most trusted platform connecting homeowners
                    with verified civil engineers, ensuring transparent pricing and quality
                    construction.
                </motion.p>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                        ></motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}