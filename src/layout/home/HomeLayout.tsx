'use client'
import React from "react";
import "@/styles/scss/homepage.scss";
import Header from "@/sections/header/Header";
import Footer from "@/sections/footer/Footer";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
