"use client";

import { motion, Variants } from "framer-motion";
import {
    MapPin,
    Search,
    Star,
    ShieldCheck,
    Home,
    Sparkles,
    ArrowRight,
    Navigation,
    Loader2,
    X,
} from "lucide-react";
import {
    TAMIL_NADU_DISTRICTS,
    POPULAR_DISTRICTS,
} from "@/src/lib/constants";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DistrictCombobox } from "@/src/components/ui/combobox";
import dynamic from "next/dynamic";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import { EngineerCard } from "@/src/features/find-engineers/components/EngineerCard";
import { mockEngineers } from "@/src/lib/mock-data";
import { Engineer } from "@/src/types";

const LocationMap = dynamic(
    () =>
        import("@/src/components/ui/location-map").then((mod) => ({
            default: mod.LocationMap
        })),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-48 bg-gray-100 rounded-xl animate-pulse flex items-center justify-center border-2 border-gray-200">
                <span className="text-gray-400 text-sm font-medium">Loading Map...</span>
            </div>
        ),
    }
);

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
    const router = useRouter();
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [location, setLocation] = useState("");
    const [mapLat, setMapLat] = useState<number | null>(null);
    const [mapLng, setMapLng] = useState<number | null>(null);
    const [mapAddress, setMapAddress] = useState("");
    const [showMap, setShowMap] = useState(false);

    const [hasSearched, setHasSearched] = useState(false);
    const [filteredEngineers, setFilteredEngineers] = useState<Engineer[]>([]);

    const geo = useGeolocation();

    useEffect(() => {
        if (geo.lat && geo.lng) {
            setMapLat(geo.lat);
            setMapLng(geo.lng);
            setMapAddress(`${geo.lat.toFixed(4)}, ${geo.lng.toFixed(4)}`);
            setShowMap(true);
            setLocation("My Current Location");
            toast.success("Location detected!", {
                description: "Your current location has been set.",
            });
        }
        if (geo.error) {
            toast.error("Location Error", {
                description: geo.error,
            });
        }
    }, [geo.lat, geo.lng, geo.error]);

    const handleUseMyLocation = () => {
        geo.getCurrentLocation();
    };

    const handleMapLocationSelect = (lat: number, lng: number, address: string) => {
        setMapLat(lat);
        setMapLng(lng);
        setMapAddress(address);
        setLocation("Selected from Map");
        toast.success("Location selected!", {
            description: `Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        });
    };

    const handleClearMapLocation = () => {
        setMapLat(null);
        setMapLng(null);
        setMapAddress("");
        setLocation("");
        setShowMap(false);
    };

    const handleSearch = () => {
        let filtered = mockEngineers;
        if (selectedDistrict) {
            filtered = filtered.filter((e) =>
                e.district.toLowerCase().includes(selectedDistrict.toLowerCase())
            );
        }

        setFilteredEngineers(filtered);
        setHasSearched(true);

        setTimeout(() => {
            document.getElementById("search-results")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    };

    const handleClearSearch = () => {
        setHasSearched(false);
        setFilteredEngineers([]);
        setSelectedDistrict("");
        setLocation("");
        setMapLat(null);
        setMapLng(null);
        setMapAddress("");
        setShowMap(false);
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-20 lg:py-28">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                        >
                            <Sparkles className="w-4 h-4" />
                            Tamil Nadu's #1 Home Building Platform
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl lg:text-7xl font-bold leading-[1.1] text-gray-900 tracking-tight"
                        >
                            Build Your{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                                Dream Home
                            </span>
                            <br />
                            With Experts
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            From foundation to finishing, find verified civil engineers, get accurate
                            cost estimates, and connect with trusted experts near you.
                        </motion.p>

                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { icon: Home, label: "Homes Built", value: "500+" },
                                { icon: Star, label: "Avg Rating", value: "4.8★" },
                                { icon: ShieldCheck, label: "Verified", value: "100%" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/60 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md shadow-blue-500/30">
                                        <stat.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl opacity-20 blur-2xl"></div>

                        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                                            Find Engineers
                                        </h3>
                                        <p className="text-sm text-gray-500">Near your location</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        Select District
                                    </label>
                                    <DistrictCombobox
                                        districts={TAMIL_NADU_DISTRICTS}
                                        value={selectedDistrict}
                                        onChange={setSelectedDistrict}
                                        placeholder="Type to search district..."
                                        emptyMessage="No district found. Try another keyword."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                                        Your Location
                                    </label>

                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            placeholder="e.g., Anna Nagar, Chennai"
                                            className="w-full h-12 pl-12 pr-10 text-base bg-white border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                                        />
                                        {location && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setLocation("");
                                                    handleClearMapLocation();
                                                }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleUseMyLocation}
                                            disabled={geo.loading}
                                            className="flex-1 h-11 px-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 disabled:opacity-50"
                                        >
                                            {geo.loading ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <Navigation className="w-4 h-4" />
                                            )}
                                            {geo.loading ? "Locating..." : "Use My Location"}
                                        </button>

                                        <button
                                            onClick={() => setShowMap(!showMap)}
                                            className={`flex-1 h-11 px-4 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 border-2 ${showMap
                                                ? "bg-blue-50 border-blue-300 text-blue-700"
                                                : "bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600"
                                                }`}
                                        >
                                            <MapPin className="w-4 h-4" />
                                            {showMap ? "Hide Map" : "Pick from Map"}
                                        </button>
                                    </div>

                                    {showMap && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <LocationMap
                                                lat={mapLat}
                                                lng={mapLng}
                                                onLocationSelect={handleMapLocationSelect}
                                                onClear={handleClearMapLocation}
                                                isLocating={geo.loading}
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                <Button
                                    onClick={handleSearch}
                                    className="w-full h-14 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl shadow-blue-600/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 group"
                                >
                                    <Search className="w-5 h-5 mr-2" />
                                    Search Engineers
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <div className="relative py-2">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-white px-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                                            Popular Searches
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {POPULAR_DISTRICTS.map((district) => (
                                        <button
                                            key={district}
                                            onClick={() => setSelectedDistrict(district.toLowerCase())}
                                            className="text-sm bg-gray-50 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-gray-600 px-4 py-2 rounded-full transition-all duration-200 border border-gray-200 font-medium"
                                        >
                                            {district}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {hasSearched && (
                    <motion.div
                        id="search-results"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mt-24 pt-12 border-t border-gray-200/60"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                    {filteredEngineers.length} Engineers Found
                                    <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                                        {selectedDistrict ? `in ${selectedDistrict}` : "All Districts"}
                                    </span>
                                </h3>
                                <p className="text-gray-500 mt-2">
                                    Showing top rated experts based on your search criteria.
                                </p>
                            </div>

                            <button
                                onClick={handleClearSearch}
                                className="text-sm text-red-600 hover:text-red-700 font-semibold flex items-center gap-2 bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-xl transition-colors border border-red-100 self-start md:self-auto"
                            >
                                <X className="w-4 h-4" />
                                Clear Search
                            </button>
                        </div>

                        {filteredEngineers.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredEngineers.map((engineer, index) => (
                                    <EngineerCard key={engineer.id} engineer={engineer} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-dashed border-gray-200">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-10 h-10 text-gray-400" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">No Engineers Found</h4>
                                <p className="text-gray-500 max-w-md mx-auto mb-6">
                                    We couldn't find engineers in <b>{selectedDistrict || "this area"}</b>. Try selecting a different district or clear the search.
                                </p>
                                <button
                                    onClick={handleClearSearch}
                                    className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Try Another Search
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
}

// Helper hook for geolocation (Moved inside or keep in separate file)
function useGeolocation() {
    const [state, setState] = useState({
        lat: null as number | null,
        lng: null as number | null,
        error: null as string | null,
        loading: false,
    });

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setState((prev) => ({ ...prev, error: "Geolocation not supported" }));
            return;
        }
        setState((prev) => ({ ...prev, loading: true, error: null }));
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    error: null,
                    loading: false,
                });
            },
            (error) => {
                setState((prev) => ({ ...prev, error: "Unable to retrieve location", loading: false }));
            }
        );
    };

    return { ...state, getCurrentLocation };
}