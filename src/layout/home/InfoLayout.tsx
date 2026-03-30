'use client'
import React from "react";
import "@/styles/scss/homepage.scss";
import "@/styles/scss/infopage.scss";
import InfoHeader from "@/sections/header/InfoHeader";
import InfoFooter from "@/sections/footer/InfoFooter";

interface InfoLayoutProps {
  children: React.ReactNode;
}

const InfoLayout: React.FC<InfoLayoutProps> = ({ children }) => {
  return (
    <>
      <InfoHeader />
      <main className="w-full">
        {children}
      </main>
      <InfoFooter />
    </>
  );
};

export default InfoLayout;
