"use client";

import { useEffect, useRef } from "react";
import { MapPin, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface LocationMapProps {
    lat: number | null;
    lng: number | null;
    onLocationSelect: (lat: number, lng: number, address: string) => void;
    onClear: () => void;
    isLocating?: boolean;
}

export function LocationMap({
    lat,
    lng,
    onLocationSelect,
    onClear,
    isLocating,
}: LocationMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);

    useEffect(() => {
        const mapContainer = mapRef.current;
        if (!mapContainer) return;

        if (mapInstance.current) return;

        const defaultLat = lat || 13.0827;
        const defaultLng = lng || 80.2707;

        const map = L.map(mapContainer, {
            zoomControl: false,
            attributionControl: false,
        }).setView([defaultLat, defaultLng], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
        }).addTo(map);

        map.on("click", (e: L.LeafletMouseEvent) => {
            const { lat: clickLat, lng: clickLng } = e.latlng;
            if (markerRef.current) {
                markerRef.current.setLatLng([clickLat, clickLng]);
            } else {
                markerRef.current = L.marker([clickLat, clickLng]).addTo(map);
            }
            onLocationSelect(clickLat, clickLng, `${clickLat.toFixed(4)}, ${clickLng.toFixed(4)}`);
        });

        if (lat && lng) {
            markerRef.current = L.marker([lat, lng]).addTo(map);
        }

        mapInstance.current = map;

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
                markerRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (mapInstance.current && lat && lng) {
            mapInstance.current.setView([lat, lng], 14);
            if (markerRef.current) {
                markerRef.current.setLatLng([lat, lng]);
            } else {
                markerRef.current = L.marker([lat, lng]).addTo(mapInstance.current);
            }
        }
    }, [lat, lng]);

    return (
        <div className="space-y-3">
            <div className="relative">
                <div
                    ref={mapRef}
                    className={cn(
                        "w-full h-48 rounded-xl border-2 border-gray-200 overflow-hidden",
                        "transition-all duration-300",
                        lat && lng ? "border-blue-400 shadow-lg shadow-blue-100" : ""
                    )}
                />

                {/* Map Overlay Instructions */}
                {!lat && !lng && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl pointer-events-none">
                        <div className="text-center px-4">
                            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2 animate-bounce" />
                            <p className="text-sm font-medium text-gray-700">
                                Click on map to select location
                            </p>
                        </div>
                    </div>
                )}

                {/* Loading Overlay */}
                {isLocating && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl z-20">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-sm font-medium text-blue-700">Locating...</p>
                        </div>
                    </div>
                )}

                {/* Clear Button */}
                {lat && lng && !isLocating && (
                    <button
                        onClick={onClear}
                        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-colors z-10"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Coordinates Display */}
            {lat && lng && !isLocating && (
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-mono text-blue-700">
                        {lat.toFixed(4)}, {lng.toFixed(4)}
                    </span>
                </div>
            )}
        </div>
    );
}