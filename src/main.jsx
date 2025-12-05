import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";  // Usando HashRouter aqui
import App from "./App";
import "./index.css";  // ou ./styles/global.css

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>  {/* O Router é configurado aqui */}
      <App />
    </Router>
  </React.StrictMode>
);
