import React from "react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import HeroInfo from "./HeroInfo";
import StackCard from "./StackingCard";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Project: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroInfo title="Projects" />
      <section
        id="project"
        className="py-16 bg-gray-100 dark:bg-transparent vj-pf-info-section"
      >
        <div>
          <div className="heading-section mb-12 text-center">
            <motion.h1
              className="big big-2 text-[#d3d4d5] dark:text-[#303030]"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {t("Projects")}
            </motion.h1>
            <motion.h2
              className="mb-4 text-black dark:text-white relative z-1"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {t("Projects")}
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-white/45 mt-4"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {t(
                "A curated selection of my recent professional and personal projects. Each artifact demonstrates my capabilities in full-stack development, robust code architecture using TypeScript, and effective user interface creation with modern frameworks like React and Node.js. Explore the repository links below to see how I translate complex ideas into functional, real-world applications"
              )}.
            </motion.p>
          </div>

          {/* Left Column */}
          <div className="relative mx-auto w-full px-4 py-12">
            {/* Vertical line */}
            {/* <StickyScroll content={content} /> */}
          
            <StackCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
