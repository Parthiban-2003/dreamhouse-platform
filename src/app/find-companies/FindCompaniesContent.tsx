"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Filter, Search, MapPin } from "lucide-react";
import { mockCompanies, getCompaniesByDistrict } from "@/src/lib/mock-data";
import { TAMIL_NADU_DISTRICTS } from "@/src/lib/constants";
import { CompanyCard } from "@/src/features/find-companies/components/CompanyCard";
import { DistrictCombobox } from "@/src/components/ui/combobox";
import { Company } from "@/src/types";

export default function FindCompaniesContent() {
    const searchParams = useSearchParams();
    const initialDistrict = searchParams.get("district") || "";
    const initialPincode = searchParams.get("pincode") || "";

    const [selectedDistrict, setSelectedDistrict] = useState(initialDistrict);
    const [pincode, setPincode] = useState(initialPincode);
    const [pincodeError, setPincodeError] = useState("");
    const [filtered, setFiltered] = useState<Company[]>(mockCompanies);

    useEffect(() => {
        let result = mockCompanies;

        if (selectedDistrict) {
            result = getCompaniesByDistrict(selectedDistrict);
        }

        if (pincode && pincode.length >= 3) {
            result = result.filter((c) =>
                c.pincode.startsWith(pincode.slice(0, 3))
            );
        }

        setFiltered(result);
    }, [selectedDistrict, pincode]);

    const handlePincodeSearch = async () => {
        if (!pincode || pincode.length !== 6) {
            setPincodeError("Enter a valid 6-digit pincode");
            return;
        }
        setPincodeError("");

        try {
            const res = await fetch(
                `https://api.postalpincode.in/pincode/${pincode}`
            );
            const data = await res.json();

            if (data[0]?.Status === "Success" && data[0]?.PostOffice?.length) {
                const po = data[0].PostOffice[0];
                const districtName = po.District || "";

                const matched = TAMIL_NADU_DISTRICTS.find(
                    (d) =>
                        d.label.toLowerCase().includes(districtName.toLowerCase()) ||
                        districtName.toLowerCase().includes(d.label.toLowerCase()) ||
                        d.value.includes(districtName.toLowerCase().replace(/\s/g, ""))
                );

                if (matched) {
                    setSelectedDistrict(matched.value);
                }
            } else {
                setPincodeError("Pincode not found or not in Tamil Nadu");
            }
        } catch {
            setPincodeError("Could not verify pincode. Showing local matches.");
        }
    };

    const clearAll = () => {
        setSelectedDistrict("");
        setPincode("");
        setPincodeError("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-indigo-50/30 to-amber-50/20">
            <section className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-20 z-40 shadow-sm">
                <div className="container mx-auto px-4 py-5">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-stone-900 flex items-center gap-3">
                                <Building2 className="w-7 h-7 text-indigo-800" />
                                Find Construction Companies
                            </h1>
                            <p className="text-stone-500 mt-1 text-sm">
                                {selectedDistrict || pincode ? (
                                    <>
                                        Showing{" "}
                                        <span className="font-bold text-indigo-700">
                                            {filtered.length}
                                        </span>{" "}
                                        companies
                                        {selectedDistrict && (
                                            <span className="ml-1 bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md text-xs font-medium">
                                                in{" "}
                                                {TAMIL_NADU_DISTRICTS.find(
                                                    (d) => d.value === selectedDistrict
                                                )?.label || selectedDistrict}
                                            </span>
                                        )}
                                    </>
                                ) : (
                                    "Select district or enter pincode to filter"
                                )}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <div className="flex items-center gap-2 bg-stone-50 p-1.5 rounded-2xl border border-stone-200">
                                <div className="flex items-center gap-1.5 px-2 text-stone-500">
                                    <Filter className="w-4 h-4" />
                                    <span className="text-xs font-semibold hidden sm:inline">
                                        District
                                    </span>
                                </div>
                                <div className="w-full sm:w-52">
                                    <DistrictCombobox
                                        districts={TAMIL_NADU_DISTRICTS}
                                        value={selectedDistrict}
                                        onChange={setSelectedDistrict}
                                        placeholder="Select District..."
                                        emptyMessage="No district found."
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                                    <input
                                        type="text"
                                        value={pincode}
                                        onChange={(e) => {
                                            const v = e.target.value.replace(/\D/g, "").slice(0, 6);
                                            setPincode(v);
                                            setPincodeError("");
                                        }}
                                        placeholder="Pincode"
                                        maxLength={6}
                                        className="h-11 w-32 pl-9 pr-3 rounded-xl border border-stone-200 bg-white text-sm focus:border-indigo-500 focus:ring-0 outline-none"
                                    />
                                </div>
                                <button
                                    onClick={handlePincodeSearch}
                                    className="h-11 px-4 bg-indigo-900 text-white text-sm font-semibold rounded-xl hover:bg-indigo-800 transition-colors"
                                >
                                    Search
                                </button>
                            </div>

                            {(selectedDistrict || pincode) && (
                                <button
                                    onClick={clearAll}
                                    className="h-11 px-4 bg-red-50 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-100 border border-red-200 transition-colors"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                    {pincodeError && (
                        <p className="text-red-500 text-xs mt-2">{pincodeError}</p>
                    )}
                </div>
            </section>

            <section className="container mx-auto px-4 py-10">
                {filtered.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
                    >
                        {filtered.map((company, index) => (
                            <CompanyCard
                                key={company.id}
                                company={company}
                                index={index}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-stone-200 shadow-sm max-w-2xl mx-auto"
                    >
                        <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-5">
                            <Search className="w-9 h-9 text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">
                            {selectedDistrict || pincode
                                ? "No Companies Found"
                                : "Start Your Search"}
                        </h3>
                        <p className="text-stone-500 max-w-md mx-auto mb-6">
                            {selectedDistrict || pincode
                                ? "No verified companies in this area right now. Try another district or pincode."
                                : "Select a Tamil Nadu district or enter a pincode to see construction companies near you."}
                        </p>
                        {(selectedDistrict || pincode) && (
                            <button
                                onClick={clearAll}
                                className="px-6 py-3 bg-indigo-900 text-white rounded-xl font-semibold hover:bg-indigo-800 transition-colors"
                            >
                                Clear Filters
                            </button>
                        )}
                    </motion.div>
                )}
            </section>
        </div>
    );
}