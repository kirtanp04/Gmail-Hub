import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AppThemeProvider from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter basename="/GMailHub">
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
