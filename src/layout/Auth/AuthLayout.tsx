import React from "react";
import "@/styles/scss/auth.scss";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="w-full h-lvh flex auth-layout-container">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
