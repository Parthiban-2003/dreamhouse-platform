"use client";

import { motion } from "framer-motion";
import {
    Users,
    Star,
    MapPin,
    Phone,
    CheckCircle,
    Clock,
    AlertCircle,
} from "lucide-react";
import { Engineer } from "@/src/types";
import Link from "next/link";

interface CompanyEngineersProps {
    engineers: Engineer[];
    companyName: string;
}

const availabilityConfig = {
    Available: {
        color: "bg-emerald-100 text-emerald-700 border-emerald-200",
        icon: CheckCircle,
        cardClass: "",
    },
    Busy: {
        color: "bg-orange-100 text-orange-700 border-orange-200",
        icon: Clock,
        cardClass: "opacity-75",
    },
    "On Leave": {
        color: "bg-red-100 text-red-700 border-red-200",
        icon: AlertCircle,
        cardClass: "opacity-50 grayscale-[40%]",
    },
};

export function CompanyEngineers({
    engineers,
    companyName,
}: CompanyEngineersProps) {
    if (engineers.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-premium border border-stone-100 p-8 text-center"
            >
                <Users className="w-10 h-10 text-stone-300 mx-auto mb-3" />
                <p className="text-stone-500">
                    No engineers listed for this company yet.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-premium border border-stone-100 p-7 md:p-8"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-900/20">
                    <Users className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-stone-900">Our Engineers</h2>
                    <p className="text-sm text-stone-500">
                        {engineers.length} experts at {companyName}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-5 text-xs">
                {/* Availability */}
                <span className="flex items-center gap-1.5 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Available
                </span>

                {/* Busy */}
                <span className="flex items-center gap-1.5 text-orange-700">
                    <span className="w-2 h-2 rounded-full bg-orange-500" /> Busy
                </span>

                {/* On Leave */}
                <span className="flex items-center gap-1.5 text-red-600">
                    <span className="w-2 h-2 rounded-full bg-red-500" /> On Leave
                </span>
            </div>

            <div className="space-y-4">
                {engineers.map((eng, index) => {
                    const status = availabilityConfig[eng.availability];
                    const StatusIcon = status.icon;
                    const isUnavailable = eng.availability === "On Leave";

                    return (
                        <motion.div
                            key={eng.id}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className={`relative flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all ${status.cardClass}`}
                        >
                            <div className="relative shrink-0">
                                <img
                                    src={eng.image}
                                    alt={eng.name}
                                    className={`w-16 h-16 rounded-xl object-cover border-2 border-white shadow ${isUnavailable ? "grayscale" : ""
                                        }`}
                                />
                                <span
                                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center ${eng.availability === "Available"
                                        ? "bg-emerald-500"
                                        : eng.availability === "Busy"
                                            ? "bg-orange-500"
                                            : "bg-red-500"
                                        }`}
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <h3 className="font-bold text-stone-900">{eng.name}</h3>
                                    <span
                                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${status.color}`}
                                    >
                                        <StatusIcon className="w-3 h-3" />
                                        {eng.availability}
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-2">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {eng.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                        {eng.rating}
                                    </span>
                                    <span>{eng.experience} yrs exp</span>
                                    <span>{eng.projectsCompleted} projects</span>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {eng.services.slice(0, 3).map((s) => (
                                        <span
                                            key={s}
                                            className="text-[10px] px-2 py-0.5 bg-white text-stone-600 rounded-md border border-stone-200"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex sm:flex-col gap-2 shrink-0 self-start sm:self-center">
                                <Link
                                    href={`/engineer/${eng.id}`}
                                    className={`px-4 py-2 rounded-xl text-sm font-semibold text-center transition-all ${isUnavailable
                                        ? "bg-stone-200 text-stone-500 cursor-not-allowed"
                                        : "bg-indigo-900 text-white hover:bg-indigo-800 shadow-md"
                                        }`}
                                    onClick={(e) => isUnavailable && e.preventDefault()}
                                >
                                    View Profile
                                </Link>
                                {!isUnavailable && (
                                    <a
                                        href={`tel:${eng.phone}`}
                                        className="px-4 py-2 rounded-xl text-sm font-semibold text-center border border-stone-200 text-stone-700 hover:border-indigo-300 hover:bg-indigo-50 transition-all flex items-center justify-center gap-1.5"
                                    >
                                        <Phone className="w-3.5 h-3.5" /> Call
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}