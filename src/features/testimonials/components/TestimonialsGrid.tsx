"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck, MapPin } from "lucide-react";
import { mockReviews } from "@/src/lib/mock-data";

export default function TestimonialsGrid() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-stone-50 to-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-14">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        Verified Reviews
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-3">
                        What our clients say
                    </h2>
                    <p className="text-stone-500 max-w-xl mx-auto">
                        Honest experiences from homeowners who worked with DreamHouse
                        partner companies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {mockReviews.map((review, index) => (
                        <motion.article
                            key={review.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="group bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {review.projectImage && (
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={review.projectImage}
                                        alt={review.projectType}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <span className="absolute bottom-3 left-4 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                                        {review.projectType}
                                    </span>
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-1 mb-3">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating
                                                    ? "fill-amber-400 text-amber-400"
                                                    : "text-stone-200"
                                                }`}
                                        />
                                    ))}
                                    <span className="ml-1.5 text-sm font-bold text-stone-800">
                                        {review.rating}.0
                                    </span>
                                </div>

                                <p className="text-stone-600 leading-relaxed text-sm flex-1 mb-5">
                                    &ldquo;{review.reviewText}&rdquo;
                                </p>

                                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                                    <img
                                        src={review.clientImage}
                                        alt={review.clientName}
                                        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-1.5">
                                            <h4 className="font-bold text-stone-900 text-sm truncate">
                                                {review.clientName}
                                            </h4>
                                            {review.isVerified && (
                                                <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                                            )}
                                        </div>
                                        <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                                            <MapPin className="w-3 h-3" />
                                            {review.location}
                                        </p>
                                        {(review.companyName || review.engineerName) && (
                                            <p className="text-[11px] text-indigo-700 font-medium mt-0.5 truncate">
                                                via {review.companyName || review.engineerName}
                                            </p>
                                        )}
                                    </div>
                                    <span className="text-[10px] text-stone-400 font-medium shrink-0">
                                        {review.date}
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}