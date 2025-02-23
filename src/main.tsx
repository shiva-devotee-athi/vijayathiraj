import { createRoot } from "react-dom/client";
import "@/styles/css/style.css";
import "@/styles/css/font.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "@/layout/Auth/AuthLayout.tsx";
import Login from "@/pages/auth/Login.tsx";
import Register from "@/pages/auth/Register.tsx";
import HomeLayout from "./layout/home/HomeLayout.tsx";
import Mainpage from "./pages/home/Mainpage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/vijayathiraj">
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Mainpage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
