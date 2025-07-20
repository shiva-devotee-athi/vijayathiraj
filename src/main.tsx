import { createRoot } from "react-dom/client";
import "@/styles/css/style.css";
import "@/styles/css/font.css";
import App from "./App";
import { ThemeProvider } from "@/context/ThemeContext";
import { I18nextProvider } from "react-i18next";
import '@/i18n/config';
import i18next from "i18next";

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18next}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </I18nextProvider>
);