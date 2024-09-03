import React, { useState } from "react";
import "./Fertigation.css";

export default function Fertigation() {
  const [motorStatus, setMotorStatus] = useState(true); // true for "Ouvert", false for "Fermé"

  const toggleMotorStatus = () => {
    setMotorStatus(!motorStatus);
  };

  const tankData = [
    { id: "K", level: 100 },
    { id: "N", level: 75 },
    { id: "P", level: 50 },
    { id: "Z", level: 90 },
  ];

  return (
    <div className="fertigation-container">
      <h2>Contrôlez l'état de la fertigation</h2>
      <p className="subheader">Visualisation des quatre citernes</p>

      <div className="motor-status">
        <span>Moteur</span>
        <div
          className={`toggle-switch ${motorStatus ? "open" : "closed"}`}
          onClick={toggleMotorStatus}
        >
          <span>{motorStatus ? "Ouvert" : "Fermé"}</span>
        </div>
      </div>

      <div className="tank-visualization">
        {tankData.map((tank) => (
          <div key={tank.id} className="tank">
            <div
              className="tank-level"
              style={{ height: `${tank.level}%` }}
            ></div>
            <span className="tank-label">{tank.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
