import React from "react";
import "./Acceuil.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for the default marker icon not being displayed
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Acceuil() {
  return (
    <div className="acceuil-container">
      <h1 className="acceuil-title">Bonjour Mr Esmail</h1>
      <div className="widgets-container">
        <div className="widget">
          <p>Température</p>
          <h2>23°C</h2>
          <span>+4°C</span>
        </div>
        <div className="widget">
          <p>Précipitation</p>
          <h2>69%</h2>
          <span>+3%</span>
        </div>
        <div className="widget">
          <p>Humidité</p>
          <h2>8%</h2>
          <span>-4%</span>
        </div>
        <div className="widget-large">
          <MapContainer
            center={[51.505, -0.09]} // Coordinates for the center of the map
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="widget">
          <p>Vent</p>
          <h2>52%</h2>
          <span>+6%</span>
        </div>
        <div className="widget">
          <p>Taux de fertilité</p>
          <h2>94%</h2>
          <p>pH 6</p>
          <p>Taux de pH</p>
        </div>
      </div>
    </div>
  );
}
