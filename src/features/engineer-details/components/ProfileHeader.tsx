"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Phone, Mail, Clock, CheckCircle, Award } from "lucide-react";
import { Engineer } from "@/src/types";

interface ProfileHeaderProps {
    engineer: Engineer;
}

export function ProfileHeader({ engineer }: ProfileHeaderProps) {
    const availabilityConfig = {
        Available: { color: "bg-green-500", text: "Available Now" },
        Busy: { color: "bg-orange-500", text: "Currently Busy" },
        "On Leave": { color: "bg-red-500", text: "On Leave" },
    };

    const status = availabilityConfig[engineer.availability];

    return (
        <div className="relative">
            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-3xl">
                <img
                    src={engineer.coverImage || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200"}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Availability Badge */}
                <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className={`w-2.5 h-2.5 ${status.color} rounded-full animate-pulse`}></span>
                        <span className="text-sm font-semibold text-gray-900">{status.text}</span>
                    </div>
                </div>
            </div>

            {/* Profile Info Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative -mt-20 px-6 md:px-10"
            >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white p-2 shadow-xl">
                                <img
                                    src={engineer.image}
                                    alt={engineer.name}
                                    className="w-full h-full rounded-xl object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                        {engineer.name}
                                    </h1>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                        <span>{engineer.location}</span>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-xl border border-yellow-200">
                                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                    <span className="text-2xl font-bold text-gray-900">{engineer.rating}</span>
                                    <span className="text-sm text-gray-500">/ 5.0</span>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <Award className="w-5 h-5 text-blue-600 mb-2" />
                                    <div className="text-2xl font-bold text-gray-900">{engineer.experience}</div>
                                    <div className="text-xs text-gray-600">Years Experience</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                                    <div className="text-2xl font-bold text-gray-900">{engineer.projectsCompleted}</div>
                                    <div className="text-xs text-gray-600">Projects Done</div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                    <Clock className="w-5 h-5 text-purple-600 mb-2" />
                                    <div className="text-2xl font-bold text-gray-900">{engineer.teamSize}</div>
                                    <div className="text-xs text-gray-600">Team Members</div>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                    <div className="text-2xl font-bold text-gray-900 mb-2">₹{engineer.pricePerSqft}</div>
                                    <div className="text-xs text-gray-600">Per Sq.Ft</div>
                                </div>
                            </div>

                            {/* Contact Buttons */}
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`tel:${engineer.phone}`}
                                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now
                                </a>
                                <a
                                    href={`mailto:${engineer.email}`}
                                    className="flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all"
                                >
                                    <Mail className="w-5 h-5" />
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}