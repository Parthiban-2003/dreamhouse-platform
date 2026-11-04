"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { Company } from "@/src/types";

interface CompanyAboutProps {
    company: Company;
}

export function CompanyAbout({ company }: CompanyAboutProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-premium border border-stone-100 p-7 md:p-8"
        >
            <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-900/20">
                    <Building2 className="w-5 h-5 text-amber-400" />
                </div>

                {/* Find Engineers */}
                <div>
                    <h2 className="text-xl font-bold text-stone-900">About Company</h2>
                    <p className="text-sm text-stone-500">Who we are & what we do</p>
                </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-6">{company.description}</p>

            {/* Services Offered */}
            <div className="mb-6">
                <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                    Services Offered
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                    {company.services.map((service) => (
                        <div
                            key={service}
                            className="flex items-center gap-2.5 p-3 bg-stone-50 rounded-xl border border-stone-100"
                        >
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                            <span className="text-sm font-medium text-stone-700">
                                {service}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Specialties */}
            <div className="mb-6">
                <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                    Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                    {company.specialties.map((s) => (
                        <span
                            key={s}
                            className="px-3.5 py-1.5 bg-amber-50 text-amber-800 rounded-full text-sm font-medium border border-amber-100"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div>
                <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                    Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                    {company.certifications.map((c) => (
                        <span
                            key={c}
                            className="px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-100"
                        >
                            {c}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}