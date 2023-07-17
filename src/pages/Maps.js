import React from "react";
import MapComponent from "../components/Wash/Maps";
const markersData = [
  { lat: 37.774929, lng: -122.419416 },
  { lat: 37.774329, lng: -122.418416 },
  // Добавьте остальные маркеры по аналогии
];

const Maps = () => {
  return (
    <>
      <div>
        <MapComponent markers={markersData} />
      </div>
    </>
  );
};

export default Maps;
