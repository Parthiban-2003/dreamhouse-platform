"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Users, Filter, Search } from "lucide-react";
import { mockEngineers } from "@/src/lib/mock-data";
import { TAMIL_NADU_DISTRICTS } from "@/src/lib/constants";
import { EngineerCard } from "@/src/features/find-engineers/components/EngineerCard";
import { DistrictCombobox } from "@/src/components/ui/combobox";

export default function FindEngineersPage() {
    const searchParams = useSearchParams();

    const initialDistrict = searchParams.get("district") || "";
    const [selectedDistrict, setSelectedDistrict] = useState(initialDistrict);

    const filteredEngineers = selectedDistrict
        ? mockEngineers.filter((e) =>
            e.district.toLowerCase().includes(selectedDistrict.toLowerCase())
        )
        : [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
            {/* Sticky Header with Filter */}
            <section className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-24 z-40 shadow-sm">
                <div className="container mx-auto px-4 py-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                        {/* Title & Count */}
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <Users className="w-8 h-8 text-blue-600" />
                                Find Verified Engineers
                            </h1>
                            <p className="text-gray-500 mt-1 flex items-center gap-2 flex-wrap">
                                {selectedDistrict ? (
                                    <>
                                        Showing <span className="font-bold text-blue-600">{filteredEngineers.length}</span> experts
                                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-sm font-medium">
                                            in {TAMIL_NADU_DISTRICTS.find(d => d.value === selectedDistrict)?.label || selectedDistrict}
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-sm">Please select a district to view engineers.</span>
                                )}
                            </p>
                        </div>

                        {/* Filter Section */}
                        <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-200 w-full md:w-auto">
                            <div className="flex items-center gap-2 px-3 text-gray-600">
                                <Filter className="w-5 h-5" />
                                <span className="text-sm font-semibold hidden sm:inline">Filter by:</span>
                            </div>

                            <div className="flex-1 md:w-64">
                                <DistrictCombobox
                                    districts={TAMIL_NADU_DISTRICTS}
                                    value={selectedDistrict}
                                    onChange={setSelectedDistrict}
                                    placeholder="Select District..."
                                    emptyMessage="No district found."
                                />
                            </div>

                            {selectedDistrict && (
                                <button
                                    onClick={() => setSelectedDistrict("")}
                                    className="px-4 py-2.5 bg-red-50 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-100 transition-colors border border-red-200"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Engineers Grid or Empty State */}
            <section className="container mx-auto px-4 py-10">
                {filteredEngineers.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredEngineers.map((engineer, index) => (
                            <EngineerCard key={engineer.id} engineer={engineer} index={index} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200 shadow-sm max-w-2xl mx-auto"
                    >
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {selectedDistrict ? "No Engineers Found" : "Start Your Search"}
                        </h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-6">
                            {selectedDistrict
                                ? `We couldn't find any verified engineers in this district right now. Try a different district.`
                                : "Please select a district from the dropdown above to see available civil engineers near you."}
                        </p>
                        {selectedDistrict && (
                            <button
                                onClick={() => setSelectedDistrict("")}
                                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                            >
                                Clear Filter & Show All
                            </button>
                        )}
                    </motion.div>
                )}
            </section>
        </div>
    );
}