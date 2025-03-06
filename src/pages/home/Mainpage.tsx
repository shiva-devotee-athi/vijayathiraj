import React from "react";
import Heropage from "./Heropage";
import Aboutpage from "./Aboutpage";
import Resumepage from "./Resumepage";
import Hoppiespage from "./Hoppiespage";
import Statisticpage from "./Statisticpage";
import Skillpage from "./Skillpage";
import Contactpage from "./Contactpage";
import Repopage from "./Repopage";
import MarqueePage from "./MarqueePage";
import WorkExperiencepage from "./WorkExperiencepage";
import Chatbot from "@/components/chatbot/Chatbot";

const Mainpage: React.FC = () => {
  return (
    <div>
      <Heropage />
      <Aboutpage />
      <MarqueePage />
      <Resumepage />
      <Skillpage />
      <WorkExperiencepage />
      <Repopage />
      <Hoppiespage />
      <Statisticpage />
      <Contactpage />
      <Chatbot />
    </div>
  );
};

export default Mainpage;
