"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, MapPin, Calendar, ZoomIn } from "lucide-react";
import { Company } from "@/src/types";
import { ProjectDetailsModal } from "@/src/features/engineer-details/components/ProjectDetailsModal";

interface CompanyProjectsProps {
    company: Company;
}

export function CompanyProjects({ company }: CompanyProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    if (!company.projects || company.projects.length === 0) {
        return null;
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-premium border border-stone-100 p-7 md:p-8"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-900/20">
                        <ImageIcon className="w-5 h-5 text-amber-400" />
                    </div>

                    {/* Completed Projects */}
                    <div>
                        <h2 className="text-xl font-bold text-stone-900">
                            Completed Projects
                        </h2>
                        <p className="text-sm text-stone-500">
                            {company.totalProjects}+ projects delivered across Tamil Nadu
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {company.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            </div>

                            <div className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ZoomIn className="w-4 h-4 text-white" />
                            </div>

                            {/* Project Details */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3 className="font-bold text-base mb-1">{project.title}</h3>
                                <div className="flex items-center gap-3 text-xs text-white/80">
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

            {/* Project Details Modal */}
            <ProjectDetailsModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}