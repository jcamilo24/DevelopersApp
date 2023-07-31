import React from "react";
import ReactDOM from "react-dom/client";
import { DevelopersApp } from "./DevelopersApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DevelopersApp />
    </BrowserRouter>
  </React.StrictMode>
);
