"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { mockEngineers } from "@/src/lib/mock-data";
import { EngineerCard } from "@/src/features/find-engineers/components/EngineerCard";

export default function FeaturedEngineers() {
    // Show only top 3 engineers on home page
    const topEngineers = mockEngineers.slice(0, 3);

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                            <Sparkles className="w-4 h-4" /> Top Rated
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                            Featured Engineers
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Meet our most trusted and highly-rated construction experts.
                        </p>
                    </div>
                    <Link
                        href="/find-engineers"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    >
                        View All Engineers
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topEngineers.map((engineer, index) => (
                        <EngineerCard key={engineer.id} engineer={engineer} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}