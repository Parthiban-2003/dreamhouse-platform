"use client";

import { motion } from "framer-motion";
import { Building2, Home, Store, Church } from "lucide-react";
import { Engineer } from "@/src/types";

interface ProjectTypesSectionProps {
    engineer: Engineer;
}

const projectIcons: Record<string, any> = {
    "Individual Houses": Home,
    "Luxury Villas": Home,
    "Apartment Complexes": Building2,
    "Commercial Buildings": Store,
    "Eco Homes": Home,
    "Farm Houses": Home,
    "Residential Complexes": Building2,
    "Traditional Homes": Home,
    "Commercial Spaces": Store,
    "Religious Structures": Church,
    "Smart Homes": Home,
    "Affordable Housing": Building2,
    "Studio Apartments": Building2,
};

export function ProjectTypesSection({ engineer }: ProjectTypesSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Project Types</h2>
                    <p className="text-sm text-gray-500">Types of projects handled</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {engineer.projectTypes.map((type, index) => {
                    const Icon = projectIcons[type] || Building2;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-5 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                                <Icon className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">{type}</h3>
                                <p className="text-xs text-gray-500">Specialized in this area</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}