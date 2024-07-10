import { useState } from "react";
import { Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

export interface Pin {
  id: number;
  position: [number, number];
  title: string;
  description: string;
}
interface IMarkerProps {
  handlePinClick: (pin: Pin) => void;
}
const MarkerCluster = ({ handlePinClick }: IMarkerProps) => {
  const [pins] = useState<Pin[]>([
    {
      id: 1,
      position: [27.7172, 85.324],
      title: "Durbar Square",
      description: "Historic royal palace square",
    },
    {
      id: 2,
      position: [27.7116, 85.3078],
      title: "Swayambhunath",
      description: "Ancient religious architecture atop a hill",
    },
    {
      id: 3,
      position: [27.7041, 85.3294],
      title: "Patan Durbar Square",
      description: "UNESCO World Heritage site",
    },
    {
      id: 4,
      position: [27.6722, 85.4295],
      title: "Bhaktapur Durbar Square",
      description: "One of the three Durbar Squares in the Kathmandu Valley",
    },
    {
      id: 5,
      position: [28.3949, 84.124],
      title: "Annapurna Base Camp",
      description:
        "Popular trekking destination in the Annapurna mountain range",
    },
    {
      id: 6,
      position: [28.2639, 83.9722],
      title: "Phewa Lake",
      description: "Freshwater lake in Pokhara",
    },
    {
      id: 7,
      position: [27.6197, 85.5361],
      title: "Changu Narayan Temple",
      description: "Ancient Hindu temple near Bhaktapur",
    },
    {
      id: 8,
      position: [27.6764, 85.2677],
      title: "Nagarkot",
      description: "Hill station known for its views of the Himalayas",
    },
    {
      id: 9,
      position: [27.6167, 85.0251],
      title: "Dhulikhel",
      description: "Town known for its mountain views and hiking trails",
    },
    {
      id: 10,
      position: [28.6116, 83.8795],
      title: "Begnas Lake",
      description: "Freshwater lake in Pokhara",
    },
    {
      id: 11,
      position: [27.6863, 85.3149],
      title: "Garden of Dreams",
      description: "Historical garden in the heart of Kathmandu",
    },
    {
      id: 12,
      position: [27.6594, 85.324],
      title: "Pashupatinath Temple",
      description: "Famous Hindu temple complex",
    },
    {
      id: 13,
      position: [27.678, 85.3068],
      title: "Boudhanath Stupa",
      description: "One of the largest spherical stupas in Nepal",
    },
    {
      id: 14,
      position: [27.7306, 85.2901],
      title: "Kopan Monastery",
      description: "Tibetan Buddhist monastery near Boudhanath",
    },
    {
      id: 15,
      position: [28.2192, 83.9491],
      title: "World Peace Pagoda",
      description: "Buddhist stupa in Pokhara",
    },
    {
      id: 16,
      position: [28.0, 86.8528],
      title: "Mount Everest",
      description: "World's highest mountain peak",
    },
    {
      id: 17,
      position: [27.6735, 85.2848],
      title: "Thamel",
      description:
        "Tourist district in Kathmandu known for its shops and restaurants",
    },
    {
      id: 18,
      position: [27.5015, 85.4108],
      title: "Kirtipur",
      description: "Historical town near Kathmandu",
    },
    {
      id: 19,
      position: [27.9648, 86.9331],
      title: "Gokyo Lakes",
      description: "High-altitude lakes in the Everest region",
    },
    {
      id: 20,
      position: [27.681, 85.2746],
      title: "Asan Bazaar",
      description: "Traditional market in Kathmandu",
    },
  ]);

  return (
    <>
      <MarkerClusterGroup>
        {pins.map((pin) => (
          <Marker
            key={pin.id}
            position={pin.position}
            eventHandlers={{
              click: () => handlePinClick(pin),
            }}
          />
        ))}
      </MarkerClusterGroup>
    </>
  );
};

export default MarkerCluster;
