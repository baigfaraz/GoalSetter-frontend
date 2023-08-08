import React from "react";
import ReactDOM from "react-dom/client";
import "./config/config-firebase";
import "./index.css";
import App from "./App";
import { TokenProvider } from "./context/tokenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>
);
