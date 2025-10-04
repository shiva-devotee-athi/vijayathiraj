import React from "react";
import { Outlet } from "react-router";
import "@/styles/scss/homepage.scss";
import "@/styles/scss/infopage.scss";
import InfoHeader from "@/pages/header/InfoHeader";
import InfoFooter from "@/pages/footer/InfoFooter";

const InfoLayout: React.FC = () => {
  return (
    <>
      <InfoHeader />
      <main className="w-full">
        <Outlet />
      </main>
      <InfoFooter />
    </>
  );
};

export default InfoLayout;
