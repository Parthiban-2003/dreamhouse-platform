"use client";
import { useState, useCallback } from "react";

interface GeolocationState {
    lat: number | null;
    lng: number | null;
    error: string | null;
    loading: boolean;
}

export function useGeolocation() {
    const [state, setState] = useState<GeolocationState>({
        lat: null,
        lng: null,
        error: null,
        loading: false,
    });

    const getCurrentLocation = useCallback(() => {
        if (!navigator.geolocation) {
            setState((prev) => ({
                ...prev,
                error: "Geolocation is not supported by your browser",
            }));
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
                let errorMessage = "Unable to retrieve your location";
                if (error.code === 1) errorMessage = "Location access denied. Please enable location permissions.";
                if (error.code === 2) errorMessage = "Location unavailable. Please try again.";
                if (error.code === 3) errorMessage = "Location request timed out.";

                setState((prev) => ({
                    ...prev,
                    error: errorMessage,
                    loading: false,
                }));
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    }, []);

    const clearLocation = useCallback(() => {
        setState({ lat: null, lng: null, error: null, loading: false });
    }, []);

    return {
        ...state,
        getCurrentLocation,
        clearLocation,
    };
}