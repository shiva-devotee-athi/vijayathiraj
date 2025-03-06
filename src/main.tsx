import { createRoot } from "react-dom/client";
import "@/styles/css/style.css";
import "@/styles/css/font.css";
import App from "./App";
import { ThemeProvider } from "@/context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
