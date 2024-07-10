/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Popup } from "react-leaflet";

interface IPinInformationProps {
  selectedPin: any;
  setSelectedPin: React.Dispatch<any>;
}

const PinInformation = ({
  selectedPin,
  setSelectedPin,
}: IPinInformationProps) => {
  return (
    <>
      {selectedPin && (
        <Popup position={selectedPin?.position}>
          <h2 className="text-lg font-semibold">{selectedPin?.title}</h2>
          <p>{selectedPin?.description}</p>
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedPin(null)}
          >
            Close
          </button>
        </Popup>
      )}
    </>
  );
};

export default PinInformation;
