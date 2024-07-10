import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LocationMarker } from "../components/LocationMarker";
import Header from "../components/Header";
import MarkerCluster, { Pin } from "../components/MarkerCluster";
import PinInformation from "../components/PinInformation";
import Layer from "../components/Layer";
import FlyToMarker from "../components/FlyToMarker";
import useGpsStatus from "../hooks/useGpsStatus";

const MapComponent: React.FC = () => {
  const [center] = useState<[number, number]>([28.3949, 84.124]); // Kathmandu coordinates
  const [mapLayer, setMapLayer] = useState<"osm" | "satellite">("osm");
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const isGpsEnabled = useGpsStatus();

  const toggleMapLayer = () => {
    setMapLayer((prev) => (prev === "osm" ? "satellite" : "osm"));
  };

  const handlePinClick = (pin: Pin) => {
    setSelectedPin(pin);
  };
  const [zoomLevel, setZoomLevel] = useState<number>(12);

  const handleShowLocation = () => {
    if (!isGpsEnabled) {
      alert("enable the gps");
    }
    setResetKey((prevKey) => prevKey + 1);
    setZoomLevel(15);
  };
  return (
    <div className="h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Map Container */}
      <div className="flex-grow relative">
        <MapContainer center={center} zoom={12} className="h-full w-full">
          <ZoomControl position="topright" />
          <LocationMarker
            key={resetKey}
            zoomLevel={zoomLevel}
            resetKey={resetKey}
          />
          <TileLayer
            url={
              mapLayer === "osm"
                ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                : "http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            }
          />

          <MarkerCluster handlePinClick={handlePinClick} />

          {/* Custom controls */}
          <Layer
            handleShowLocation={handleShowLocation}
            toggleMapLayer={toggleMapLayer}
          />
          {selectedPin && (
            <FlyToMarker position={selectedPin.position} zoomLevel={15} />
          )}
          {/* Pin Information Modal */}
          {selectedPin && (
            <PinInformation
              selectedPin={selectedPin}
              setSelectedPin={setSelectedPin}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
