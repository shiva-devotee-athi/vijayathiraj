"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { I18nextProvider } from "react-i18next";
import "@/i18n/config";
import i18next from "i18next";
import { ToastContainer } from "react-toastify";
import Preloader from "@/components/Preloader";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <Preloader />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={false}
          closeButton={false}
          toastStyle={{ background: "transparent", boxShadow: "none" }}
          hideProgressBar
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </I18nextProvider>
  );
}
