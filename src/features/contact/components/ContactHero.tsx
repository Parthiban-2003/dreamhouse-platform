"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                        <MessageSquare className="w-4 h-4 text-teal-300" />
                        <span>Get in Touch</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        We'd Love to Hear <br />
                        <span className="text-teal-300">From You.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Have a question about our engineers, pricing, or partnerships? Drop us a message and our team will get back to you within 24 hours.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}