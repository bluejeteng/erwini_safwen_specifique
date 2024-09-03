import React from "react";
import "./Group.css";

const Group = () => {
  // Mock data
  const statusData = [
    { date: "02-08-2024" },
    { date: "02-08-2024" },
    { date: "02-08-2024" },
    { date: "02-08-2024" },
  ];

  const historyDates = [
    "12-08-2024",
    "11-08-2024",
    "10-08-2024",
    "09-08-2024",
    "08-08-2024",
    "07-08-2024",
    "06-08-2024",
    "05-08-2024",
    "04-08-2024",
    "03-08-2024",
    "02-08-2024",
    "01-08-2024",
  ];

  return (
    <div className="group-container">
      <h1>État du groupe électrogène et historique :</h1>
      <p className="current-date">13-08-2024</p>
      <div className="status-section">
        {statusData.map((status, index) => (
          <div key={index} className="status-item">
            <p>{status.date}</p>
            <div className="status-bar"></div>
          </div>
        ))}
      </div>
      <div className="history-section">
        <h2>Historique</h2>
        <ul>
          {historyDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Group;
