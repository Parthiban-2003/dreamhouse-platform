"use client";

import { motion } from "framer-motion";
import { Search, Handshake, Home } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Search & Select",
        desc: "Enter your location and browse through our list of verified civil engineers.",
        color: "from-blue-500 to-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: Handshake,
        title: "Connect & Plan",
        desc: "View profiles, check past projects, and connect with the expert of your choice.",
        color: "from-teal-500 to-teal-600",
        bg: "bg-teal-50",
    },
    {
        icon: Home,
        title: "Build Your Dream",
        desc: "Get transparent pricing, track milestones, and build your home stress-free.",
        color: "from-purple-500 to-purple-600",
        bg: "bg-purple-50",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        How <span className="text-blue-600">DreamHouse</span> Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                            {/* Connector Line (Desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gray-200 -z-10"></div>
                            )}

                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                                <div className={`w-16 h-16 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                    <step.icon className={`w-8 h-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} style={{ color: index === 0 ? '#2563eb' : index === 1 ? '#0d9488' : '#9333ea' }} />
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}