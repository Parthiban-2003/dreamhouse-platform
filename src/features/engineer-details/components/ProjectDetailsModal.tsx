"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Maximize, IndianRupee, Palette, CheckCircle2 } from "lucide-react";

interface Project {
    id: string;
    title: string;
    location: string;
    image: string;
    year: string;
    area: string;
    duration: string;
    budget: string;
    style: string;
    description: string;
    features: string[];
}

interface ProjectDetailsModalProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Large Image */}
                    <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-t-3xl">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 md:left-10 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
                            <div className="flex items-center gap-2 text-gray-200">
                                <MapPin className="w-4 h-4" />
                                <span>{project.location} • Completed in {project.year}</span>
                            </div>
                        </div>
                    </div>

                    {/* Details Content */}
                    <div className="p-6 md:p-10 space-y-8">

                        {/* Key Specs Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                                <Maximize className="w-5 h-5 text-blue-600 mb-2" />
                                <p className="text-xs text-gray-500 font-medium">Total Area</p>
                                <p className="text-lg font-bold text-gray-900">{project.area}</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
                                <Calendar className="w-5 h-5 text-purple-600 mb-2" />
                                <p className="text-xs text-gray-500 font-medium">Duration</p>
                                <p className="text-lg font-bold text-gray-900">{project.duration}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                                <IndianRupee className="w-5 h-5 text-green-600 mb-2" />
                                <p className="text-xs text-gray-500 font-medium">Est. Budget</p>
                                <p className="text-lg font-bold text-gray-900">{project.budget}</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                                <Palette className="w-5 h-5 text-orange-600 mb-2" />
                                <p className="text-xs text-gray-500 font-medium">Architectural Style</p>
                                <p className="text-lg font-bold text-gray-900">{project.style}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
                        </div>

                        {/* Features / Highlights */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features & Highlights</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-xl border border-gray-200"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="pt-4 border-t border-gray-100 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}