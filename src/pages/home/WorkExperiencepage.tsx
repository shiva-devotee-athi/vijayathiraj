import React from "react";
import Experience from "../experience/Experience";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WorkExperiencepage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-bottom-section"
    >
      <div className="container">
        <div className="heading-section mb-12 text-center">
          <motion.h1
            className="big big-2 text-[#d3d4d5] dark:text-[#303030]"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Work")}
          </motion.h1>
          <motion.h2
            className="mb-4 text-black dark:text-white relative z-1"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Experience")}
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-white/45 mt-4"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t(
              "Throughout my career, I've had the privilege of working with two outstanding companies, each contributing to my growth and expertise in different ways. Here's a glimpse into my journey with these organizations:"
            )}
          </motion.p>
        </div>
        <div className="w-full flex justify-center">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default WorkExperiencepage;
