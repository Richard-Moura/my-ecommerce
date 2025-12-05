import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
=======
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
>>>>>>> af83053 (Corrigido erro de renderização do Router e ajustes no código)
  </React.StrictMode>
);
