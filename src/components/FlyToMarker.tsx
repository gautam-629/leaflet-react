/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface IFlyToMarkerProps {
  position: any;
  zoomLevel: any;
}
const FlyToMarker = ({ position, zoomLevel }: IFlyToMarkerProps) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      const zoom = zoomLevel ?? map.getZoom();
      map.flyTo(position, zoom, {
        duration: 1,
      });
    }
  }, [map, position, zoomLevel]);

  return null;
};

export default FlyToMarker;
