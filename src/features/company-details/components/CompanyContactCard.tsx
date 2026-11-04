"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Company } from "@/src/types";

interface CompanyContactCardProps {
    company: Company;
}

export function CompanyContactCard({ company }: CompanyContactCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-fit rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 p-7 text-white shadow-xl lg:sticky lg:top-28"
        >

            {/* Contact Information */}
            <h2 className="text-xl font-bold mb-1">Contact Company</h2>
            <p className="text-indigo-200 text-sm mb-6">
                Reach out to start your project with {company.name}.
            </p>

            <div className="space-y-4 mb-6">
                <a
                    href={`tel:${company.phone}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                        <p className="text-[11px] text-indigo-300 uppercase tracking-wide">
                            Phone
                        </p>
                        <p className="font-semibold text-sm">{company.phone}</p>
                    </div>
                </a>

                <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-amber-400" />
                    </div>

                    {/* Email */}
                    <div>
                        <p className="text-[11px] text-indigo-300 uppercase tracking-wide">
                            Email
                        </p>
                        <p className="font-semibold text-sm break-all">{company.email}</p>
                    </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-amber-400" />
                    </div>

                    {/* Address */}
                    <div>
                        <p className="text-[11px] text-indigo-300 uppercase tracking-wide">
                            Address
                        </p>
                        <p className="font-medium text-sm leading-snug">
                            {company.address}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-amber-400" />
                    </div>

                    {/* Working Hours */}
                    <div>
                        <p className="text-[11px] text-indigo-300 uppercase tracking-wide">
                            Working Hours
                        </p>
                        <p className="font-semibold text-sm">{company.workingHours}</p>
                    </div>
                </div>
            </div>

            {/* Call Now */}
            <a
                href={`tel:${company.phone}`}
                className="block w-full text-center rounded-xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-bold py-3.5 transition-colors shadow-lg shadow-amber-500/20"
            >
                Call Now
            </a>
        </motion.div>
    );
}