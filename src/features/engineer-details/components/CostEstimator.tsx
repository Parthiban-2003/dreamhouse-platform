"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, Check } from "lucide-react";
import { Engineer } from "@/src/types";

interface CostEstimatorProps {
    engineer: Engineer;
}

export function CostEstimator({ engineer }: CostEstimatorProps) {
    const [sqft, setSqft] = useState("");
    const [calculatedCost, setCalculatedCost] = useState<number | null>(null);

    const handleCalculate = () => {
        const area = parseFloat(sqft);
        if (!isNaN(area) && area > 0) {
            setCalculatedCost(area * engineer.pricePerSqft);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                    <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Cost Estimator</h2>
                    <p className="text-sm text-gray-500">Calculate estimated cost for your plot</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-800">
                        <strong>Base Rate:</strong> ₹{engineer.pricePerSqft} per sq.ft. (Includes standard materials & labor)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Plot Area (in Sq.Ft)</label>
                        <input
                            type="number"
                            value={sqft}
                            onChange={(e) => {
                                setSqft(e.target.value);
                                setCalculatedCost(null);
                            }}
                            placeholder="e.g., 1200"
                            className="w-full h-12 px-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:bg-white outline-none transition-all text-lg font-semibold"
                        />
                    </div>
                    <button
                        onClick={handleCalculate}
                        disabled={!sqft}
                        className="h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-green-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Calculate
                    </button>
                </div>

                {calculatedCost !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 text-center"
                    >
                        <p className="text-gray-400 text-sm mb-1">Estimated Construction Cost</p>
                        <div className="flex items-center justify-center gap-2 text-4xl font-bold text-green-400">
                            <IndianRupee className="w-8 h-8" />
                            {calculatedCost.toLocaleString('en-IN')}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">*Final cost may vary based on design & material upgrades</p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}