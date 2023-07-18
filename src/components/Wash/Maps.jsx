import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import close from "../../assets/icons/close.svg";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import { useEffect } from "react";
import axios from "axios";
import getCoordinates from "./getCoordinates";

function CurrentLocate() {
  const map = useMap();
  const mapEvents = useMapEvents({
    locationfound: (location) => {
      map.setView({ lat: location.latlng.lat, lng: location.latlng.lng });
    },
  });

  const checkCurrent = () => {
    map.locate();
  };

  return (
    <button className="maps-current" onClick={checkCurrent}>
      Де я ?
    </button>
  );
}

function MapControls() {
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

const MapComponent = () => {
  const [categoriesWash, setCategoriesWash] = useState([]);
  const [wash, setWash] = useState([]);
  const navigation = useNavigate();
  const mapRef = useRef(null);
  const position = [50.447195, 30.534966]; // Начальные координаты карты

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const openFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const switchFilter = (name) => {
    const newData = categoriesWash.map((item) => {
      if (item.name === name) {
        return { ...item, used: !item.used };
      } else {
        return item;
      }
    });

    setCategoriesWash(newData);
  };

  const [filterWash, setFilterWash] = useState([]);

  const goFilter = () => {
    const categories = categoriesWash.filter((item) => item.used);
    const usedCategories = categories.map((item) => {
      return item.name;
    });

    const newFilter = wash.filter((item) => {
      let findCategory = false;

      item.categories.forEach((category) => {
        if (usedCategories.includes(category.category.name)) {
          findCategory = true;
        }
      });
      if (findCategory) return item;
    });

    setFilterWash(newFilter);
    setIsFilterOpen(false);
  };

  useEffect(() => {
    const getWash = async () => {
      const result = await axios(`${process.env.REACT_APP_SERVER}/api/wash`);

      const newWash = await Promise.all(
        result.data.docs.map(async (item) => {
          return {
            ...item,
            coordinates: await getCoordinates(`Украина ${item.address}`),
          };
        })
      );
      setWash(newWash);
    };

    const getCategories = async () => {
      const result = await axios(
        `${process.env.REACT_APP_SERVER}/api/categories-wash`
      );
      const newCategories = result.data.docs.map((item) => {
        return { ...item, used: false };
      });
      setCategoriesWash(newCategories);
    };
    getCategories();
    getWash();
  }, []);

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
          <div className="maps-head-filter" onClick={openFilter}>
            <button className="maps-head-filter-button">Фільтри</button>
          </div>
        </div>

        <MapContainer
          ref={mapRef}
          center={position}
          zoom={10}
          style={{ width: "100%", height: "100%", zIndex: 2 }}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {filterWash.length === 0 ? (
            <>
              {wash.map((marker, index) => (
                <Marker
                  key={index}
                  position={[marker.coordinates.lat, marker.coordinates.lng]}
                >
                  <Popup>
                    <div>
                      <p>Текст для информационного окна</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </>
          ) : (
            <>
              {filterWash.map((marker, index) => (
                <Marker
                  key={index}
                  position={[marker.coordinates.lat, marker.coordinates.lng]}
                >
                  <Popup>
                    <div>
                      <p>Текст для информационного окна</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </>
          )}

          <CurrentLocate />
          <MapControls />
        </MapContainer>

        <div className={`maps-filter ${isFilterOpen ? "active" : ""}`}>
          <div className="maps-filter-block">
            <div className="maps-filter-head">
              <p className="maps-filter-head-title">Фільтри</p>
              <button className="maps-filter-head-close" onClick={openFilter}>
                <img className="maps-filter-head-close-icon" src={close} />
              </button>
            </div>

            <div className="maps-filter-categories">
              {categoriesWash.length === 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  {categoriesWash.map((item) => (
                    <button
                      key={item.name}
                      className={`maps-filter-categories-button ${
                        item.used ? "active" : ""
                      }`}
                      onClick={() => switchFilter(item.name)}
                    >
                      {item?.icon === undefined ? (
                        <></>
                      ) : (
                        <img
                          className="maps-filter-categories-button-icon"
                          src={item.icon.url}
                        />
                      )}

                      {item.name}
                    </button>
                  ))}
                </>
              )}
            </div>

            <div className="maps-filter-result">
              <button className="maps-filter-result-button" onClick={goFilter}>
                Показати результати
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
