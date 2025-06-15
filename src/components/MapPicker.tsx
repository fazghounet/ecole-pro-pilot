
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "@/components/ui/button";

interface MapPickerProps {
  mapboxToken: string;
  onSelect: (coords: { lng: number; lat: number }) => void;
  initialCoords?: { lng: number; lat: number };
}

const DEFAULT_COORDS = { lng: 2.3522, lat: 48.8566 }; // Paris

const MapPicker: React.FC<MapPickerProps> = ({
  mapboxToken,
  onSelect,
  initialCoords,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [picked, setPicked] = useState<{ lng: number; lat: number } | null>(
    initialCoords ?? null
  );

  useEffect(() => {
    if (!mapContainer.current) return;
    mapboxgl.accessToken = mapboxToken;

    if (map.current) return; // Prevent multiple inits

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: picked || DEFAULT_COORDS,
      zoom: 11,
    });

    if (picked) {
      marker.current = new mapboxgl.Marker({ color: "#007aff" })
        .setLngLat([picked.lng, picked.lat])
        .addTo(map.current);
    }

    map.current.on("click", (e) => {
      setPicked({ lng: e.lngLat.lng, lat: e.lngLat.lat });
      if (marker.current) marker.current.remove();
      marker.current = new mapboxgl.Marker({ color: "#007aff" })
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .addTo(map.current);
    });

    // Clean on unmount
    return () => {
      map.current?.remove();
      map.current = null;
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (map.current && picked) {
      map.current.flyTo({ center: [picked.lng, picked.lat] });
    }
  }, [picked]);

  return (
    <div className="w-[350px] h-[300px] space-y-2">
      <div ref={mapContainer} className="w-full h-[240px] rounded-lg shadow" />
      <div className="flex justify-between items-center">
        <span className="text-xs">
          {picked
            ? `Lng: ${picked.lng.toFixed(4)}, Lat: ${picked.lat.toFixed(4)}`
            : "Cliquez sur la carte pour choisir un emplacement"}
        </span>
        {picked && (
          <Button size="sm" onClick={() => onSelect(picked)}>
            Valider
          </Button>
        )}
      </div>
    </div>
  );
};

export default MapPicker;
