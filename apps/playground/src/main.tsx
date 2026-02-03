import React from "react";
import ReactDOM from "react-dom/client";
import { PixelThemeProvider } from "@proton-ui/core";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PixelThemeProvider>
      <App />
    </PixelThemeProvider>
  </React.StrictMode>
);
