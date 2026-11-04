"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Star,
    Phone,
    Mail,
    CheckCircle,
    Building2,
    Users,
    Award,
    Calendar,
    Globe,
} from "lucide-react";
import { Company } from "@/src/types";

interface CompanyHeaderProps {
    company: Company;
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
    return (
        <div className="relative">
            <div className="relative h-56 md:h-72 overflow-hidden rounded-3xl">
                <img
                    src={company.coverImage}
                    alt={company.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {company.isVerified && (
                    <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-stone-900">
                            Verified Company
                        </span>
                    </div>
                )}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative -mt-16 px-4 md:px-8"
            >
                <div className="bg-white rounded-3xl shadow-premium-lg border border-stone-100 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="relative shrink-0">
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-white p-1.5 shadow-xl border border-stone-100">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="w-full h-full rounded-xl object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-1.5 -right-1.5 w-9 h-9 bg-indigo-900 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                                <Building2 className="w-4 h-4 text-amber-400" />
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                                        {company.name}
                                    </h1>
                                    <p className="text-amber-700 font-medium mt-1">
                                        {company.tagline}
                                    </p>
                                    <div className="flex items-center gap-2 text-stone-500 mt-2 text-sm">
                                        <MapPin className="w-4 h-4 text-indigo-600" />
                                        <span>{company.address}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-100 shrink-0">
                                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                    <span className="text-xl font-bold text-stone-900">
                                        {company.rating}
                                    </span>
                                    <span className="text-sm text-stone-500">/ 5.0</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                                <div className="bg-indigo-50 p-3.5 rounded-xl border border-indigo-100">
                                    <Award className="w-4 h-4 text-indigo-600 mb-1.5" />
                                    <div className="text-xl font-bold text-stone-900">
                                        {company.totalProjects}+
                                    </div>
                                    <div className="text-[11px] text-stone-500 font-medium">
                                        Projects Done
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
                                    <Users className="w-4 h-4 text-emerald-600 mb-1.5" />
                                    <div className="text-xl font-bold text-stone-900">
                                        {company.teamSize}
                                    </div>
                                    <div className="text-[11px] text-stone-500 font-medium">
                                        Team Size
                                    </div>
                                </div>
                                <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-100">
                                    <Calendar className="w-4 h-4 text-amber-600 mb-1.5" />
                                    <div className="text-xl font-bold text-stone-900">
                                        {company.yearEstablished}
                                    </div>
                                    <div className="text-[11px] text-stone-500 font-medium">
                                        Established
                                    </div>
                                </div>
                                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                                    <Building2 className="w-4 h-4 text-stone-600 mb-1.5" />
                                    <div className="text-xl font-bold text-stone-900">
                                        {company.engineerIds.length}
                                    </div>
                                    <div className="text-[11px] text-stone-500 font-medium">
                                        Engineers
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`tel:${company.phone}`}
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-900/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Company
                                </a>
                                <a
                                    href={`mailto:${company.email}`}
                                    className="inline-flex items-center gap-2 bg-white border-2 border-stone-200 text-stone-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                                >
                                    <Mail className="w-4 h-4" />
                                    Email
                                </a>
                                {company.website && (
                                    <a
                                        href={company.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white border-2 border-stone-200 text-stone-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:border-amber-300 hover:bg-amber-50 transition-all"
                                    >
                                        <Globe className="w-4 h-4" />
                                        Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}