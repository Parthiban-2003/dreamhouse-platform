"use client";

import { motion } from "framer-motion";
import { Search, Handshake, Home } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Search Companies",
        desc: "Select your district or pincode and browse verified construction companies near you.",
        color: "from-indigo-800 to-indigo-900",
        bg: "bg-indigo-50",
        iconColor: "#312e81",
    },
    {
        icon: Handshake,
        title: "Compare & Connect",
        desc: "View company profiles, projects, engineers and ratings — then connect with the best fit.",
        color: "from-amber-500 to-amber-600",
        bg: "bg-amber-50",
        iconColor: "#d97706",
    },
    {
        icon: Home,
        title: "Build Your Dream",
        desc: "Get transparent pricing, track milestones, and build your home stress-free.",
        color: "from-teal-500 to-teal-600",
        bg: "bg-teal-50",
        iconColor: "#0d9488",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
                        How <span className="text-indigo-800">DreamHouse</span> Works
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Building your dream home is now just 3 simple steps away.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-stone-200 -z-10" />
                            )}

                            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                                <div
                                    className={`w-16 h-16 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                                >
                                    <step.icon
                                        className="w-8 h-8"
                                        style={{ color: step.iconColor }}
                                    />
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}