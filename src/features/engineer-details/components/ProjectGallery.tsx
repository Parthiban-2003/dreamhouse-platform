"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, MapPin, Calendar, ZoomIn } from "lucide-react";
import { Engineer } from "@/src/types";
import { ProjectDetailsModal } from "./ProjectDetailsModal";

interface ProjectGalleryProps {
    engineer: Engineer;
}

export function ProjectGallery({ engineer }: ProjectGalleryProps) {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    if (!engineer.recentProjects || engineer.recentProjects.length === 0) {
        return null;
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Project Gallery</h2>
                        <p className="text-sm text-gray-500">Click on any project to view full details</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {engineer.recentProjects.map((project, index) => (
                        <motion.div
                            key={project.id || index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            </div>

                            {/* Zoom Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ZoomIn className="w-5 h-5 text-white" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                                <div className="flex items-center gap-3 text-xs text-gray-300">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {project.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {project.year}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <ProjectDetailsModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}