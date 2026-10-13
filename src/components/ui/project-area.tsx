"use client";

import { useEffect, useState } from "react";
import { formatProjectArea } from "@/lib/utils";

// Shared in-memory cache across components and page navigations
const geocodeCache = new Map<string, string>();

export interface ProjectAreaProps {
  coordinates?: { lat?: number; lng?: number } | null;
  fallback?: string | null;
  className?: string;
}

export function ProjectArea({ coordinates, fallback, className }: ProjectAreaProps) {
  const [area, setArea] = useState<string>(() => {
    if (coordinates?.lat && coordinates?.lng) {
      const key = `${coordinates.lat},${coordinates.lng}`;
      if (geocodeCache.has(key)) {
        return geocodeCache.get(key)!;
      }
    }
    return formatProjectArea(fallback);
  });

  useEffect(() => {
    if (!coordinates?.lat || !coordinates?.lng) return;

    const key = `${coordinates.lat},${coordinates.lng}`;
    if (geocodeCache.has(key)) {
      setArea(geocodeCache.get(key)!);
      return;
    }

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
    if (!token) return;

    let isMounted = true;

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.lng},${coordinates.lat}.json?access_token=${token}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data.features && data.features.length > 0) {
          const place = data.features[0];
          const locationName = place.place_name || place.text || "";
          const clean = formatProjectArea(locationName);
          if (clean) {
            geocodeCache.set(key, clean);
            setArea(clean);
          }
        }
      })
      .catch(() => {
        // Fallback remains
      });

    return () => {
      isMounted = false;
    };
  }, [coordinates?.lat, coordinates?.lng]);

  return <span className={className}>{area || formatProjectArea(fallback)}</span>;
}

export default ProjectArea;

