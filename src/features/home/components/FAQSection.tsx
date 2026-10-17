"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "Are the engineers on DreamHouse verified?",
        a: "Yes! Every engineer on our platform undergoes a strict background check, ID verification, and portfolio review before being listed."
    },
    {
        q: "How is the construction cost calculated?",
        a: "We provide transparent, sq.ft.-based pricing. You can use our Cost Calculator tool on any engineer's profile to get an instant estimate."
    },
    {
        q: "What if I have an issue during construction?",
        a: "DreamHouse provides dedicated support. You can raise a ticket, and our team will mediate between you and the engineer to resolve it quickly."
    },
    {
        q: "Do you cover all districts in Tamil Nadu?",
        a: "Absolutely. We currently have verified engineers across all 38 districts of Tamil Nadu, from Chennai to Kanyakumari."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        <HelpCircle className="w-4 h-4" /> Got Questions?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg">Everything you need to know about building with us.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50 hover:bg-white transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}