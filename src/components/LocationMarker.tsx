import { useEffect, useState } from "react";
import { Circle, Marker, Popup, useMapEvents } from "react-leaflet";

export function LocationMarker({
  resetKey,
  zoomLevel,
}: {
  resetKey: number;
  zoomLevel: number;
}) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      const zoom = zoomLevel ?? map.getZoom();
      map.flyTo(e.latlng, zoom);
    },
  });

  useEffect(() => {
    map.locate();
  }, [map, resetKey]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
      <Circle radius={100} center={position} />
    </Marker>
  );
}
