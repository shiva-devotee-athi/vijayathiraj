import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/pages/data/information";


const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Repopage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
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
            {t("Repos")}
          </motion.h1>
          <motion.h2
            className="mb-4 text-black dark:text-white relative z-1"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Repositories")}
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-white/45 mt-4"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t(
              "Hoarding happiness in my free time, I love diving into the world of cartoons and anime. You can often find me laughing along with the antics of Naruto, Shinchan, and Tom and Jerry. I also enjoy revisiting classics like Ben 10, Courage the Cowardly Dog, Ninja Hattori, Doraemon, and Oggy. These shows are my go-to for a dose of fun and nostalgia."
            )}
          </motion.p>
        </div>

        {/* Left Column */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1d1e22] p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mt-2">
                  {item.title}
                </h2>
                <span className="block text-gray-600 dark:text-gray-200 mt-2">
                  <button
                    type="button"
                    className="px-3 py-1 text-xs font-medium text-center inline-flex items-center text-blue-500 bg-blue-100 rounded-lg  focus:ring-0 focus:outline-none  dark:text-blue-100 dark:bg-blue-900 "
                  >
                    {item.type === "Personal" && <FaGithub className="me-1" />}
                    {item.type === "Company" && <FaGithub className="me-1" />}
                    {t("Personal")}
                  </button>
                </span>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repopage;
