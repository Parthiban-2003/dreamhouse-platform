"use client";

import { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon in Next/webpack
const markerIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

interface LocationMapPickerProps {
    lat: number | null;
    lng: number | null;
    onLocationSelect: (lat: number, lng: number, address: string) => void;
    onCancel: () => void;
}

function ClickHandler({
    onPick,
}: {
    onPick: (lat: number, lng: number) => void;
}) {
    useMapEvents({
        click(e) {
            onPick(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
}

function Recenter({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng], map.getZoom());
    }, [lat, lng, map]);
    return null;
}

export function LocationMapPicker({
    lat,
    lng,
    onLocationSelect,
    onCancel,
}: LocationMapPickerProps) {
    const defaultLat = lat ?? 13.0827;
    const defaultLng = lng ?? 80.2707;
    const [pickLat, setPickLat] = useState(defaultLat);
    const [pickLng, setPickLng] = useState(defaultLng);
    const [address, setAddress] = useState("");
    const [loadingAddr, setLoadingAddr] = useState(false);

    const reverseGeocode = async (la: number, ln: number) => {
        setLoadingAddr(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${la}&lon=${ln}&zoom=14`,
                { headers: { "Accept-Language": "en" } }
            );
            const data = await res.json();
            setAddress(data.display_name || `${la.toFixed(5)}, ${ln.toFixed(5)}`);
        } catch {
            setAddress(`${la.toFixed(5)}, ${ln.toFixed(5)}`);
        } finally {
            setLoadingAddr(false);
        }
    };

    useEffect(() => {
        reverseGeocode(pickLat, pickLng);
    }, [pickLat, pickLng]);

    const handlePick = (la: number, ln: number) => {
        setPickLat(la);
        setPickLng(ln);
    };

    return (
        <div className="bg-white">
            <div className="h-64 w-full relative z-0">
                <MapContainer
                    center={[defaultLat, defaultLng]}
                    zoom={12}
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={true}
                >
                    {/* Carto tiles — avoids OSM 403 block */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />
                    <ClickHandler onPick={handlePick} />
                    <Recenter lat={pickLat} lng={pickLng} />
                    <Marker position={[pickLat, pickLng]} icon={markerIcon} />
                </MapContainer>
            </div>

            <div className="p-4 border-t border-stone-100 space-y-3">
                <div>
                    <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wide mb-1">
                        Selected Location
                    </p>
                    <p className="text-sm text-stone-700 leading-snug">
                        {loadingAddr ? "Fetching address..." : address}
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                        Latitude: {pickLat.toFixed(6)} · Longitude: {pickLng.toFixed(6)}
                    </p>
                </div>
                <div className="flex gap-2 justify-end">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-sm font-semibold rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => onLocationSelect(pickLat, pickLng, address)}
                        className="px-4 py-2 text-sm font-semibold rounded-xl bg-indigo-900 text-white hover:bg-indigo-800"
                    >
                        Use This Location
                    </button>
                </div>
            </div>
        </div>
    );
}