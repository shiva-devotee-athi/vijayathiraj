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
import NewSkillPage from "./NewSkillPage";
import Projectpage from "../projects/Projectpage";

const Mainpage: React.FC = () => {
  return (
    <div>
      {/* <Heropage /> */}
      <NewHeroPage />
      <Aboutpage />
      <MarqueePage />
      <Educationpage />
      {/* <Skillpage /> */}
      <NewSkillPage />
      <WorkExperiencepage />
      <Projectpage />
      {/* <Repopage /> */}
      <Hoppiespage />
      <Statisticpage />
      <Contactpage />
      <Chatbot />
    </div>
  );
};

export default Mainpage;
