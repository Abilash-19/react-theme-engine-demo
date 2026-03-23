import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "react-theming-engine";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultThemeName="light" storageKey="playground-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
