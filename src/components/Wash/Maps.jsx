import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

function MyComponent() {
  const map = useMap();

  const handleZoomIn = () => {
    map.zoomIn(1);
  };

  const handleZoomOut = () => {
    map.zoomOut(1);
  };

  return (
    <div className="maps-control">
      <button onClick={handleZoomIn} className="maps-control-plus">
        <img className="maps-control-plus-icon" src={plus} />
      </button>
      <button onClick={handleZoomOut} className="maps-control-minus">
        <img className="maps-control-plus-icon" src={minus} />
      </button>
    </div>
  );
}

const MapComponent = ({ markers }) => {
  const navigation = useNavigate();
  const position = [37.774929, -122.419416]; // Начальные координаты карты
  const mapRef = useRef(null);

  return (
    <>
      <div className="maps">
        <div className="maps-head">
          <div className="maps-head-back">
            <button
              className="maps-head-back-button"
              onClick={() => navigation("/wash")}
            >
              <img className="maps-head-back-button-icon" src={back} />
            </button>
          </div>
          <div className="maps-head-filter">
            <button className="maps-head-filter-button">Фільтри</button>
          </div>
        </div>

        <MapContainer
          ref={mapRef}
          center={position}
          zoom={8}
          style={{ width: "100%", height: "100%", zIndex: 2 }}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {markers.map((marker, index) => (
            <Marker key={index} position={[marker.lat, marker.lng]}>
              <Popup>
                <div>
                  <p>Текст для информационного окна</p>
                </div>
              </Popup>
            </Marker>
          ))}

          <MyComponent />
        </MapContainer>
      </div>
    </>
  );
};

export default MapComponent;
