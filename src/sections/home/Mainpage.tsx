'use client'
import React from "react";
import Aboutpage from "./Aboutpage";
import Educationpage from "./Educationpage";
import Hoppiespage from "./Hoppiespage";
import Statisticpage from "./Statisticpage";
import Contactpage from "./Contactpage";
import MarqueePage from "./MarqueePage";
import WorkExperiencepage from "./WorkExperiencepage";
import Chatbot from "@/components/chatbot/Chatbot";
import NewHeroPage from "./NewHeroPage";
import SkillPage from "./Skillpage";
import Projectpage from "../projects/Projectpage";
import Bookpage from "./Bookpage";

const Mainpage: React.FC = () => {
  return (
    <div>
      {/* <Heropage /> */}
      <NewHeroPage />
      <Aboutpage />
      <MarqueePage />
      <Educationpage />
      {/* <Skillpage /> */}
      <SkillPage />
      <WorkExperiencepage />
      {/* <Repopage /> */}
      <Projectpage />
      <Statisticpage />
      <Bookpage />
      <Hoppiespage />
      <Contactpage />
      <Chatbot />
    </div>
  );
};

export default Mainpage;
