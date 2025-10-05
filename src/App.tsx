import { HashRouter , Route, Routes } from "react-router";
import AuthLayout from "@/layout/Auth/AuthLayout.tsx";
import Login from "@/pages/auth/Login.tsx";
import Register from "@/pages/auth/Register.tsx";
import HomeLayout from "@/layout/home/HomeLayout.tsx";
import Mainpage from "@/pages/home/Mainpage.tsx";
import Education from "./pages/info/Education";
import Project from "@/pages/info/Project";
import InfoLayout from "./layout/home/InfoLayout";
import HumanResource from "./pages/info/HumanResource";

function App() {
  return (
    <HashRouter  basename="/vijayathiraj">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Mainpage />} />
        </Route>
        <Route path="info" element={<InfoLayout />}>
          <Route path="projects" element={<Project />} />
          <Route path="human-resource" element={<HumanResource />} />
          <Route path="education" element={<Education />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </HashRouter >
  );
}

export default App;
