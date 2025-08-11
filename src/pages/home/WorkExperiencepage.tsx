import React from "react";
import Experience from "../experience/Experience";
import { useTranslation } from "react-i18next";

const WorkExperiencepage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-section"
    >
      <div className="container">
        <div className="heading-section mb-12 text-center">
          <h1 className="big big-2 text-[#575757] dark:text-[#A6A6A6]">
            {t("Work")}
          </h1>
          <h2 className="mb-4 text-black dark:text-white relative z-1">
            {t("Experience")}
          </h2>
          <p className="text-gray-600 dark:text-white/45 mt-4">
            {t(
              "Throughout my career, I've had the privilege of working with two outstanding companies, each contributing to my growth and expertise in different ways. Here's a glimpse into my journey with these organizations:"
            )}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default WorkExperiencepage;
