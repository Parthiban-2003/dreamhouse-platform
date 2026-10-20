"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Engineer } from "@/src/types";

interface AboutSectionProps {
    engineer: Engineer;
}

export function AboutSection({ engineer }: AboutSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <User className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">About</h2>
                    <p className="text-sm text-gray-500">Know more about this engineer</p>
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
                {engineer.description}
            </p>
        </motion.div>
    );
}