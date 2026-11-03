"use client";

import { motion, Variants } from "framer-motion";
import {
    MapPin,
    Search,
    Star,
    ShieldCheck,
    Sparkles,
    ArrowRight,
    Navigation,
    Loader2,
    X,
    Building2,
    Map,
} from "lucide-react";
import { POPULAR_DISTRICTS } from "@/src/lib/constants";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import { CompanyCard } from "@/src/features/find-companies/components/CompanyCard";
import { mockCompanies } from "@/src/lib/mock-data";
import { Company } from "@/src/types";
import dynamic from "next/dynamic";

const LocationMapPicker = dynamic(
    () =>
        import("@/src/components/ui/location-map-picker").then(
            (m) => m.LocationMapPicker
        ),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-64 bg-stone-100 rounded-xl animate-pulse flex items-center justify-center border border-stone-200">
                <span className="text-stone-400 text-sm">Loading map...</span>
            </div>
        ),
    }
);

interface PincodeSuggestion {
    name: string;
    district: string;
    state: string;
    pincode: string;
    display: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function HeroSection() {
    const [locationQuery, setLocationQuery] = useState("");
    const [selectedLocation, setSelectedLocation] = useState<{
        display: string;
        pincode?: string;
        district?: string;
        state?: string;
        lat?: number;
        lng?: number;
    } | null>(null);
    const [suggestions, setSuggestions] = useState<PincodeSuggestion[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [lookupLoading, setLookupLoading] = useState(false);
    const [geoLoading, setGeoLoading] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [mapLat, setMapLat] = useState<number | null>(null);
    const [mapLng, setMapLng] = useState<number | null>(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);

    const lookupPincode = useCallback(async (query: string) => {
        const cleaned = query.trim();
        if (cleaned.length < 3) {
            setSuggestions([]);
            return;
        }

        if (/^\d{6}$/.test(cleaned)) {
            setLookupLoading(true);
            try {
                const res = await fetch(
                    `https://api.postalpincode.in/pincode/${cleaned}`
                );
                const data = await res.json();
                if (data[0]?.Status === "Success" && data[0]?.PostOffice?.length) {
                    const list: PincodeSuggestion[] = data[0].PostOffice.map(
                        (po: {
                            Name: string;
                            District: string;
                            State: string;
                            Pincode: string;
                        }) => ({
                            name: po.Name,
                            district: po.District,
                            state: po.State,
                            pincode: po.Pincode,
                            display: `${po.Name}, ${po.District}, ${po.State}`,
                        })
                    );
                    const unique = list.filter(
                        (item, i, arr) =>
                            arr.findIndex(
                                (x) => x.district === item.district && x.state === item.state
                            ) === i
                    );
                    setSuggestions(
                        unique.length
                            ? unique
                            : [
                                {
                                    name: data[0].PostOffice[0].Name,
                                    district: data[0].PostOffice[0].District,
                                    state: data[0].PostOffice[0].State,
                                    pincode: cleaned,
                                    display: `${data[0].PostOffice[0].District}, ${data[0].PostOffice[0].State}`,
                                },
                            ]
                    );
                    setShowSuggestions(true);
                } else {
                    setSuggestions([]);
                    setShowSuggestions(false);
                }
            } catch {
                setSuggestions([]);
            } finally {
                setLookupLoading(false);
            }
            return;
        }

        if (cleaned.length >= 3) {
            setLookupLoading(true);
            try {
                const res = await fetch(
                    `https://api.postalpincode.in/postoffice/${encodeURIComponent(cleaned)}`
                );
                const data = await res.json();
                if (data[0]?.Status === "Success" && data[0]?.PostOffice?.length) {
                    const list: PincodeSuggestion[] = data[0].PostOffice.slice(0, 8).map(
                        (po: {
                            Name: string;
                            District: string;
                            State: string;
                            Pincode: string;
                        }) => ({
                            name: po.Name,
                            district: po.District,
                            state: po.State,
                            pincode: po.Pincode,
                            display: `${po.Name}, ${po.District}, ${po.State} - ${po.Pincode}`,
                        })
                    );
                    setSuggestions(list);
                    setShowSuggestions(true);
                } else {
                    setSuggestions([]);
                    setShowSuggestions(false);
                }
            } catch {
                setSuggestions([]);
            } finally {
                setLookupLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        const t = setTimeout(() => {
            if (locationQuery && !selectedLocation) {
                lookupPincode(locationQuery);
            }
        }, 400);
        return () => clearTimeout(t);
    }, [locationQuery, selectedLocation, lookupPincode]);

    const selectSuggestion = (s: PincodeSuggestion) => {
        setSelectedLocation({
            display: `${s.district}, ${s.pincode}`,
            pincode: s.pincode,
            district: s.district,
            state: s.state,
        });
        setLocationQuery(`${s.district}, ${s.pincode}`);
        setSuggestions([]);
        setShowSuggestions(false);
        toast.success(`Location set: ${s.district}, ${s.state}`);
    };

    const handleUseMyLocation = () => {
        if (typeof window === "undefined" || !navigator.geolocation) {
            toast.error("Geolocation not supported on this browser");
            return;
        }
        if (
            window.location.protocol !== "https:" &&
            window.location.hostname !== "localhost" &&
            window.location.hostname !== "127.0.0.1"
        ) {
            toast.error("Location works only on HTTPS or localhost");
            return;
        }

        setGeoLoading(true);
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                setMapLat(lat);
                setMapLng(lng);

                try {
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=12`,
                        { headers: { "Accept-Language": "en" } }
                    );
                    const data = await res.json();
                    const addr = data.address || {};
                    const display =
                        [
                            addr.suburb || addr.neighbourhood || addr.village || addr.town,
                            addr.city || addr.state_district || addr.county,
                            addr.state,
                            addr.postcode,
                        ]
                            .filter(Boolean)
                            .join(", ") || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;

                    setSelectedLocation({
                        display,
                        pincode: addr.postcode,
                        district: addr.state_district || addr.city || addr.county,
                        state: addr.state,
                        lat,
                        lng,
                    });
                    setLocationQuery(display);
                    toast.success("Current location set!");
                } catch {
                    const display = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                    setSelectedLocation({ display, lat, lng });
                    setLocationQuery(display);
                    toast.success("Location coordinates set");
                }
                setGeoLoading(false);
            },
            (error) => {
                setGeoLoading(false);
                let msg = "Unable to get location";
                if (error.code === error.PERMISSION_DENIED)
                    msg = "Location permission denied. Please allow location access in your browser settings.";
                else if (error.code === error.POSITION_UNAVAILABLE)
                    msg = "Location unavailable. GPS / network check panu.";
                else if (error.code === error.TIMEOUT)
                    msg = "Location request timed out. Again try panu.";
                toast.error(msg);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
        );
    };

    const handleMapLocationSelect = (
        lat: number,
        lng: number,
        address: string
    ) => {
        setMapLat(lat);
        setMapLng(lng);
        setSelectedLocation({
            display: address || `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
            lat,
            lng,
        });
        setLocationQuery(address || `${lat.toFixed(4)}, ${lng.toFixed(4)}`);
        setShowMap(false);
        toast.success("Map location selected!");
    };

    const handleSearch = () => {
        if (!selectedLocation && !locationQuery.trim()) {
            toast.error("Select a location or enter pincode first");
            return;
        }

        let result: Company[] = [...mockCompanies];

        if (selectedLocation?.pincode) {
            const pin = selectedLocation.pincode;
            result = result.filter(
                (c) =>
                    c.pincode.startsWith(pin.slice(0, 3)) ||
                    c.district
                        .toLowerCase()
                        .includes((selectedLocation.district || "").toLowerCase())
            );
        } else if (selectedLocation?.district) {
            result = result.filter((c) =>
                c.district
                    .toLowerCase()
                    .includes(selectedLocation.district!.toLowerCase())
            );
        } else if (selectedLocation?.lat && selectedLocation?.lng) {
            result = result
                .map((c) => ({
                    ...c,
                    _dist:
                        Math.abs(c.lat - selectedLocation.lat!) +
                        Math.abs(c.lng - selectedLocation.lng!),
                }))
                .sort((a, b) => a._dist - b._dist)
                .slice(0, 10);
        } else if (locationQuery.trim()) {
            const q = locationQuery.toLowerCase();
            result = result.filter(
                (c) =>
                    c.district.toLowerCase().includes(q) ||
                    c.location.toLowerCase().includes(q) ||
                    c.pincode.includes(q.replace(/\D/g, ""))
            );
        }

        setFilteredCompanies(result);
        setHasSearched(true);

        setTimeout(() => {
            document.getElementById("search-results")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };

    const handleClear = () => {
        setHasSearched(false);
        setFilteredCompanies([]);
        setSelectedLocation(null);
        setLocationQuery("");
        setSuggestions([]);
        setShowSuggestions(false);
        setShowMap(false);
        setMapLat(null);
        setMapLng(null);
    };

    const handleQuickChip = (name: string) => {
        setLocationQuery(name);
        setSelectedLocation({ display: name, district: name });
        setShowSuggestions(false);
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-indigo-50/40 to-amber-50/30 py-20 lg:py-28">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

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
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                        >
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            Tamil Nadu&apos;s #1 Home Building Platform
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl lg:text-7xl font-bold leading-[1.1] text-stone-900 tracking-tight"
                        >
                            Build Your{" "}
                            <span className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-amber-600 bg-clip-text text-transparent">
                                Dream Home
                            </span>
                            <br />
                            With Trusted Companies
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Search by pincode anywhere in India, use your current location, or
                            pick on the map — then connect with verified construction
                            companies.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-4 pt-4"
                        >
                            {[
                                { icon: Building2, label: "Companies", value: "50+" },
                                { icon: Star, label: "Avg Rating", value: "4.8★" },
                                { icon: ShieldCheck, label: "Verified", value: "100%" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-stone-200/60 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md shadow-indigo-900/20">
                                        <stat.icon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div className="text-2xl font-bold text-stone-900">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-stone-500 font-medium mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-amber-500 rounded-3xl opacity-15 blur-2xl" />

                        <div className="relative bg-white rounded-3xl shadow-2xl border border-stone-100 p-8 lg:p-10">
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-900/25">
                                        <Building2 className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                                            Find Companies
                                        </h3>
                                        <p className="text-sm text-stone-500">
                                            Pincode · Current location · Map
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2 relative">
                                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5" />
                                        Location
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                                        <input
                                            type="text"
                                            value={locationQuery}
                                            onChange={(e) => {
                                                setLocationQuery(e.target.value);
                                                setSelectedLocation(null);
                                                setShowSuggestions(true);
                                            }}
                                            onFocus={() =>
                                                suggestions.length > 0 && setShowSuggestions(true)
                                            }
                                            placeholder="Enter pincode or place name (All India)"
                                            className="w-full h-12 pl-12 pr-10 text-base bg-white border-2 border-stone-200 rounded-xl focus:border-indigo-500 focus:ring-0 outline-none transition-all placeholder:text-stone-400"
                                        />
                                        {(locationQuery || lookupLoading) && (
                                            <button
                                                type="button"
                                                onClick={handleClear}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                                            >
                                                {lookupLoading ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <X className="w-4 h-4" />
                                                )}
                                            </button>
                                        )}
                                    </div>

                                    {showSuggestions && suggestions.length > 0 && (
                                        <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-stone-200 rounded-xl shadow-xl overflow-hidden max-h-56 overflow-y-auto">
                                            {suggestions.map((s, i) => (
                                                <button
                                                    key={`${s.pincode}-${s.name}-${i}`}
                                                    type="button"
                                                    onClick={() => selectSuggestion(s)}
                                                    className="w-full text-left px-4 py-3 hover:bg-indigo-50 flex items-start gap-3 border-b border-stone-100 last:border-0 transition-colors"
                                                >
                                                    <MapPin className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                                                    <div>
                                                        <p className="text-sm font-semibold text-stone-900">
                                                            {s.district}
                                                            <span className="ml-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                                                                {s.pincode}
                                                            </span>
                                                        </p>
                                                        <p className="text-xs text-stone-500">
                                                            {s.name} · {s.state}
                                                        </p>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleUseMyLocation}
                                    disabled={geoLoading}
                                    className="w-full h-11 px-4 bg-stone-50 hover:bg-stone-100 text-stone-700 text-sm font-semibold rounded-xl border border-stone-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {geoLoading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <Navigation className="w-4 h-4 text-indigo-700" />
                                    )}
                                    {geoLoading ? "Locating..." : "Use Current Location"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowMap(!showMap)}
                                    className={`w-full h-11 px-4 text-sm font-semibold rounded-xl border transition-all flex items-center justify-center gap-2 ${showMap
                                        ? "bg-indigo-50 border-indigo-300 text-indigo-800"
                                        : "bg-white border-stone-200 text-stone-700 hover:border-indigo-300 hover:bg-indigo-50"
                                        }`}
                                >
                                    <Map className="w-4 h-4" />
                                    {showMap ? "Hide Map" : "Choose Location on Map"}
                                </button>

                                {showMap && (
                                    <div className="rounded-xl overflow-hidden border border-stone-200">
                                        <LocationMapPicker
                                            lat={mapLat}
                                            lng={mapLng}
                                            onLocationSelect={handleMapLocationSelect}
                                            onCancel={() => setShowMap(false)}
                                        />
                                    </div>
                                )}

                                <Button
                                    onClick={handleSearch}
                                    className="w-full h-14 text-base font-semibold bg-gradient-to-r from-indigo-900 to-indigo-800 hover:from-indigo-800 hover:to-indigo-700 shadow-xl shadow-indigo-900/25 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 group"
                                >
                                    <Search className="w-5 h-5 mr-2" />
                                    Search Companies
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <div className="relative py-2">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-stone-200" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-white px-3 text-xs font-medium text-stone-400 uppercase tracking-wider">
                                            Quick Search
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {POPULAR_DISTRICTS.map((d) => (
                                        <button
                                            key={d}
                                            type="button"
                                            onClick={() => handleQuickChip(d)}
                                            className="text-sm bg-stone-50 hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-200 text-stone-600 px-4 py-2 rounded-full transition-all border border-stone-200 font-medium"
                                        >
                                            {d}
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
                        transition={{ duration: 0.6 }}
                        className="mt-24 pt-12 border-t border-stone-200/60"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                            <div>
                                <h3 className="text-3xl font-bold text-stone-900 flex items-center gap-3 flex-wrap">
                                    {filteredCompanies.length} Companies Found
                                    {selectedLocation && (
                                        <span className="text-sm font-normal text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                                            near {selectedLocation.display}
                                        </span>
                                    )}
                                </h3>
                                <p className="text-stone-500 mt-2">
                                    Verified construction companies based on your location.
                                </p>
                            </div>
                            <button
                                onClick={handleClear}
                                className="text-sm text-red-600 hover:text-red-700 font-semibold flex items-center gap-2 bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-xl transition-colors border border-red-100 self-start md:self-auto"
                            >
                                <X className="w-4 h-4" />
                                Clear Search
                            </button>
                        </div>

                        {filteredCompanies.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredCompanies.map((company, index) => (
                                    <CompanyCard
                                        key={company.id}
                                        company={company}
                                        index={index}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gradient-to-br from-stone-50 to-white rounded-3xl border-2 border-dashed border-stone-200">
                                <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-10 h-10 text-stone-400" />
                                </div>
                                <h4 className="text-2xl font-bold text-stone-900 mb-3">
                                    No Companies Found
                                </h4>
                                <p className="text-stone-500 max-w-md mx-auto mb-6">
                                    No companies near{" "}
                                    <b>{selectedLocation?.display || "this location"}</b>. Try
                                    another pincode or area.
                                </p>
                                <button
                                    onClick={handleClear}
                                    className="px-6 py-2.5 bg-indigo-900 text-white rounded-lg font-medium hover:bg-indigo-800 transition-colors"
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