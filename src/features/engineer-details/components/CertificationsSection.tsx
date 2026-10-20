"use client";

import { motion } from "framer-motion";
import { Award, Globe, Clock } from "lucide-react";
import { Engineer } from "@/src/types";

interface CertificationsSectionProps {
    engineer: Engineer;
}

export function CertificationsSection({ engineer }: CertificationsSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                    <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Certifications & Details</h2>
                    <p className="text-sm text-gray-500">Qualifications and working info</p>
                </div>
            </div>

            {/* Certifications */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Certifications</h3>
                <div className="space-y-2">
                    {engineer.certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100"
                        >
                            <Award className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Working Hours */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Working Hours</h3>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-700">{engineer.workingHours}</span>
                </div>
            </div>

            {/* Languages */}
            <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Languages</h3>
                <div className="flex flex-wrap gap-2">
                    {engineer.languages.map((lang, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium border border-purple-100 flex items-center gap-2"
                        >
                            <Globe className="w-4 h-4" />
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}