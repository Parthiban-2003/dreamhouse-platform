"use client";

import { motion } from "framer-motion";
import { Hammer, CheckCircle } from "lucide-react";
import { Engineer } from "@/src/types";

interface ServicesSectionProps {
    engineer: Engineer;
}

export function ServicesSection({ engineer }: ServicesSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Hammer className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Services Provided</h2>
                    <p className="text-sm text-gray-500">What this engineer offers</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
                {engineer.services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                    >
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="font-medium text-gray-700">{service}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}