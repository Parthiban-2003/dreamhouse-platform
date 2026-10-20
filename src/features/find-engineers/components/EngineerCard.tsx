"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Phone, CheckCircle, Clock, AlertCircle, IndianRupee, Hammer } from "lucide-react";
import { Engineer } from "@/src/types/index";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

interface EngineerCardProps {
    engineer: Engineer;
    index: number;
}

export function EngineerCard({ engineer, index }: EngineerCardProps) {
    const availabilityConfig = {
        Available: { color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle },
        Busy: { color: "bg-orange-100 text-orange-700 border-orange-200", icon: Clock },
        "On Leave": { color: "bg-red-100 text-red-700 border-red-200", icon: AlertCircle },
    };

    const status = availabilityConfig[engineer.availability];
    const StatusIcon = status.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
        >
            {/* Card Header */}
            <div className="relative h-32 bg-gradient-to-br from-blue-500 to-teal-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${status.color} backdrop-blur-sm`}>
                        <StatusIcon className="w-3 h-3" />
                        {engineer.availability}
                    </span>
                </div>
            </div>

            {/* Profile Section */}
            <div className="px-6 pb-6">
                <div className="flex items-end gap-4 -mt-12 mb-4">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-xl">
                            <img
                                src={engineer.image}
                                alt={engineer.name}
                                className="w-full h-full rounded-xl object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                    </div>
                    <div className="flex-1 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {engineer.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-blue-500" />
                            {engineer.location}
                        </div>
                    </div>
                </div>

                {/* Rating & Price Row */}
                <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-1.5">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-lg font-bold text-gray-900">{engineer.rating}</span>
                        <span className="text-sm text-gray-500">/ 5.0</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <IndianRupee className="w-4 h-4 text-green-600" />
                        <span className="text-lg font-bold text-gray-900">{engineer.pricePerSqft}</span>
                        <span className="text-sm text-gray-500">/ sq.ft</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {engineer.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center gap-2 text-sm bg-blue-50/50 p-2 rounded-lg">
                        <Hammer className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700 font-medium">{engineer.projectsCompleted} Projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm bg-purple-50/50 p-2 rounded-lg">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700 font-medium">{engineer.experience} Yrs Exp.</span>
                    </div>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {engineer.services.slice(0, 3).map((service, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg font-medium border border-gray-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors"
                        >
                            {service}
                        </span>
                    ))}
                    {engineer.services.length > 3 && (
                        <span className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg font-medium border border-gray-200">
                            +{engineer.services.length - 3} more
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <Link href={`/engineer/${engineer.id}`} className="flex-1">
                        <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5">
                            View Profile
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        className="h-11 w-14 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center p-0"
                        onClick={() => window.open(`tel:${engineer.phone}`, '_self')}
                    >
                        <Phone className="w-5 h-5 text-blue-600" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}