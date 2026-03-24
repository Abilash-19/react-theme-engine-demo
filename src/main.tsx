import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "react-theming-engine";
import App from "./App";
import "./index.css";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      defaultThemeName={prefersDark ? "dark" : "light"}
      storageKey="playground-theme"
    >
      <App />
    </ThemeProvider>
  </StrictMode>
);
