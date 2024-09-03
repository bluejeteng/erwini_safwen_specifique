import React from "react";
import { createRoot } from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import reportWebVitals from "./reportWebVitals";
import Basic from "./basic/Basic";
import Collapsed from "./collapsed/Collapsed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Acceuil from "./basic/Acceuil"; // Import Acceuil component
import Irrigation from "./basic/Irrigation";
import Group from "./basic/Group";
import Profile from "./basic/Profile";
import Fertigation from "./basic/Fertigation";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/collapsed" element={<Collapsed />} />
        <Route path="/acceuil" element={<Acceuil />} />{" "}
        <Route path="/irrigation" element={<Irrigation />} />{" "}
        <Route path="/group" element={<Group />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/fertigation" element={<Fertigation />} />{" "}
        {/* Use Acceuil component here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
