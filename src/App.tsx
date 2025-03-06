import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "@/layout/Auth/AuthLayout.tsx";
import Login from "@/pages/auth/Login.tsx";
import Register from "@/pages/auth/Register.tsx";
import HomeLayout from "@/layout/home/HomeLayout.tsx";
import Mainpage from "@/pages/home/Mainpage.tsx";

function App() {
  return (
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
}

export default App;
