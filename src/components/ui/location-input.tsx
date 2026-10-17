"use client";

import { useState } from "react";
import { MapPin, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface LocationInputProps {
    value: string;
    onChange: (value: string) => void;
    suggestions?: string[];
    placeholder?: string;
}

export function LocationInput({
    value,
    onChange,
    suggestions = [],
    placeholder = "Enter your location (e.g., Anna Nagar, Chennai)",
}: LocationInputProps) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filtered, setFiltered] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onChange(val);
        if (val.length > 0) {
            const filtered = suggestions.filter((s) =>
                s.toLowerCase().includes(val.toLowerCase())
            );
            setFiltered(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSelect = (suggestion: string) => {
        onChange(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="relative">
            <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onFocus={() => value.length > 0 && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder={placeholder}
                    className={cn(
                        "w-full h-12 pl-12 pr-10 text-base bg-white border-2 border-gray-200 rounded-lg",
                        "focus:border-blue-500 focus:ring-0 outline-none transition-all",
                        "placeholder:text-gray-400"
                    )}
                />
                {value && (
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>

            {showSuggestions && filtered.length > 0 && (
                <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-48 overflow-auto">
                    {filtered.map((suggestion, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onMouseDown={() => handleSelect(suggestion)}
                            className="w-full px-4 py-3 text-left text-sm hover:bg-blue-50 transition-colors flex items-center gap-2"
                        >
                            <MapPin className="h-4 w-4 text-blue-500" />
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}