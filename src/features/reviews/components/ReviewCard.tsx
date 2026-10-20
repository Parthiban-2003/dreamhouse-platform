"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, MapPin, Calendar } from "lucide-react";
import { Review } from "@/src/types";

interface ReviewCardProps {
    review: Review;
    index: number;
}

export function ReviewCard({ review, index }: ReviewCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group flex flex-col"
        >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-50 opacity-40 group-hover:opacity-100 transition-opacity" />

            {/* Header - Client Info */}
            <div className="flex items-center gap-4 mb-5">
                <img
                    src={review.clientImage}
                    alt={review.clientName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 shadow-sm"
                />
                <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{review.clientName}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                    </div>
                </div>
                {review.isVerified && (
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-green-100">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                    </div>
                )}
            </div>

            {/* Rating */}
            <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                    />
                ))}
                <span className="ml-2 text-xs text-gray-400 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {review.date}
                </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 leading-relaxed mb-6 italic flex-grow">"{review.reviewText}"</p>

            {/* Footer */}
            <div className="pt-5 border-t border-gray-100 bg-gray-50/50 -mx-8 -mb-8 px-8 py-4 rounded-b-3xl flex items-center justify-between">
                <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Built with</p>
                    <p className="font-bold text-blue-600 text-sm">{review.engineerName}</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Project</p>
                    <p className="font-semibold text-gray-700 text-sm">{review.projectType}</p>
                </div>
            </div>
        </motion.div>
    );
}