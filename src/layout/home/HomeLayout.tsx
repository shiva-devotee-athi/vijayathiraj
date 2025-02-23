import React from "react";
import { Outlet } from "react-router";
import "@/styles/scss/homepage.scss";
import Header from "@/pages/header/Header";
import Footer from "@/pages/footer/Footer";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Header/>
      <main className="w-full">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default HomeLayout;
