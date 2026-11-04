"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Star,
    Phone,
    CheckCircle,
    Building2,
    Users,
} from "lucide-react";
import { Company } from "@/src/types";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

interface CompanyCardProps {
    company: Company;
    index: number;
}

export function CompanyCard({ company, index }: CompanyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden hover:border-amber-300/60 hover:shadow-premium-lg transition-all duration-300"
        >
            <div className="relative h-36 overflow-hidden">
                <img
                    src={company.coverImage}
                    alt={company.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {company.isVerified && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-700 border border-emerald-100 shadow-sm">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Verified
                    </div>
                )}

                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white p-0.5 shadow-lg">
                            <img
                                src={company.logo}
                                alt=""
                                className="w-full h-full rounded-[10px] object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg leading-tight drop-shadow">
                                {company.name}
                            </h3>
                            <p className="text-white/80 text-xs flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {company.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 space-y-4">
                <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed">
                    {company.tagline}
                </p>

                <div className="grid grid-cols-3 gap-2">
                    <div className="bg-stone-50 rounded-xl p-2.5 text-center border border-stone-100">
                        <div className="flex items-center justify-center gap-1 text-amber-600 mb-0.5">
                            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                            <span className="font-bold text-sm text-stone-900">
                                {company.rating}
                            </span>
                        </div>
                        <p className="text-[10px] text-stone-500 font-medium">Rating</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-2.5 text-center border border-stone-100">
                        <div className="flex items-center justify-center gap-1 text-indigo-600 mb-0.5">
                            <Building2 className="w-3.5 h-3.5" />
                            <span className="font-bold text-sm text-stone-900">
                                {company.totalProjects}
                            </span>
                        </div>
                        <p className="text-[10px] text-stone-500 font-medium">Projects</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-2.5 text-center border border-stone-100">
                        <div className="flex items-center justify-center gap-1 text-teal-600 mb-0.5">
                            <Users className="w-3.5 h-3.5" />
                            <span className="font-bold text-sm text-stone-900">
                                {company.teamSize}
                            </span>
                        </div>
                        <p className="text-[10px] text-stone-500 font-medium">Team</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {company.specialties.slice(0, 3).map((s) => (
                        <span
                            key={s}
                            className="text-[11px] px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-medium border border-indigo-100"
                        >
                            {s}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2 pt-1">
                    <Link href={`/company/${company.id}`} className="flex-1">
                        <Button className="w-full h-10 bg-gradient-to-r from-indigo-900 to-indigo-800 hover:from-indigo-800 hover:to-indigo-700 text-white font-semibold shadow-md shadow-indigo-900/20 transition-all hover:-translate-y-0.5 rounded-xl">
                            View Company
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        className="h-10 w-11 border border-stone-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl p-0"
                        onClick={() => window.open(`tel:${company.phone}`, "_self")}
                    >
                        <Phone className="w-4 h-4 text-indigo-700" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}