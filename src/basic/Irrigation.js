import React, { useState } from "react";
import "./Irrigation.css";
import { PieChart } from "react-minimal-pie-chart";

export default function Irrigation() {
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false); // State to manage the switch

  const wellData = [
    {
      id: 1,
      charts: [
        { percentage: 75, color: "#4caf50", label: "Rapport d'eau" },
        { percentage: 66, color: "#4caf50", label: "Eau Utilisé" },
        {
          percentage: 50,
          color: "#4caf50",
          label: "Pourcentage d'eau souhaité",
        },
      ],
    },
    {
      id: 2,
      charts: [
        { percentage: 80, color: "#4caf50", label: "Rapport d'eau" },
        { percentage: 60, color: "#4caf50", label: "Eau Utilisé" },
        {
          percentage: 55,
          color: "#4caf50",
          label: "Pourcentage d'eau souhaité",
        },
      ],
    },
    {
      id: 3,
      charts: [
        { percentage: 70, color: "#4caf50", label: "Rapport d'eau" },
        { percentage: 50, color: "#4caf50", label: "Eau Utilisé" },
        {
          percentage: 45,
          color: "#4caf50",
          label: "Pourcentage d'eau souhaité",
        },
      ],
    },
  ];

  const renderPieCharts = () => {
    const well = wellData.find((w) => w.id === activeTab);
    return well.charts.map((chart, index) => (
      <div className="chart-container" key={index}>
        <PieChart
          data={[
            { title: chart.label, value: chart.percentage, color: chart.color },
          ]}
          totalValue={100}
          lineWidth={15}
          startAngle={-90}
          rounded={true}
          background="#d3d3d3"
          style={{ height: "120px", width: "120px" }}
        />
        <div className="chart-label">
          <p className="chart-percentage">{`${chart.percentage}%`}</p>
          <span>{chart.label}</span>
        </div>
      </div>
    ));
  };

  const toggleSwitch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="irrigation-container">
      <h2>Contrôlez votre terrain à distance</h2>
      <p className="subheader">Irrigation - Contrôle - Préservation</p>

      <div className="well-monitoring">
        <h3>Suivi des puits :</h3>
        <div className="well-tabs">
          {wellData.map((well) => (
            <span
              key={well.id}
              className={activeTab === well.id ? "active-tab" : ""}
              onClick={() => setActiveTab(well.id)}
            >
              Puit {well.id}
            </span>
          ))}
        </div>

        <div className="well-stats">{renderPieCharts()}</div>
      </div>

      <div className="pump-status">
        <h3>État des pompes :</h3>
        <div
          className={`pump-toggle ${isOpen ? "open" : "closed"}`}
          onClick={toggleSwitch}
        >
          <div className={`toggle-switch ${isOpen ? "open" : "closed"}`}>
            <span>{isOpen ? "Ouvert" : "Fermé"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
