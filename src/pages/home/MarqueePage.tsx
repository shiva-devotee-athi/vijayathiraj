import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const skills = [
  "HUMAN BEING",
  "UI UX DESIGN",
  "PHOTOSHOP BEGINNER",
  "UI UX DEVELOPMENT",
  "ICON DESIGN",
];

const MarqueePage: React.FC = () => {
  const {t} = useTranslation()
  return (
    <section className="relative bg-gray-100 dark:bg-transparent py-8 overflow-x-clip">
      <div className="bg-green-900 dark:bg-yellow-300 text-green-100 dark:text-gray-900 font-bold text-center p-4 text-lg w-[110%] rotate-6 absolute -left-5 top-0 z-2 skill-rippon">
        <Marquee className="skill-rippon" direction="right" pauseOnHover>
          {skills.map((item, index) => (
            <span key={index}>{t(item)}</span>
          ))}
        </Marquee>
      </div>
      <div className="bg-green-900 dark:bg-yellow-300 text-green-100 dark:text-gray-900 font-bold text-center p-4 text-lg w-[120%] -rotate-6 absolute -left-5 top-3 z-1 opacity-65">
        <Marquee className="skill-rippon" direction="left" pauseOnHover>
          {skills.map((item, index) => (
            <span key={index}>{t(item)}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueePage;
