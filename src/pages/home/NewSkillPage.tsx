import React from "react";
import { myskills } from "@/pages/data/skills";
import { motion } from "framer-motion";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const NewSkillPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-bottom-section"
    >
      <div className="container">
        <div className="heading-section mb-8 text-center">
          <motion.h1
            className="big big-2 text-[#d3d4d5] dark:text-[#303030]"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Technical")}
          </motion.h1>
          <motion.h2
            className="mb-4 text-black dark:text-white relative z-1"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Skills")}
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-white/45 mt-4"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t(
              "In my journey toward independence and self-reliance, I'm continuously developing a range of practical skills. The rating stars below represent my current self-assessment, which is subjective and subject to change as I learn and grow. Remember, skill development is a lifelong process, and I'm committed to deepening my understanding through ongoing learning and real-world experience."
            )}
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-2 mb-6">
          <motion.p
            className="text-black dark:text-white/70 text-2xl font-bold"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("One of My Fav Quote")}
          </motion.p>
          <div>
            <motion.p
              className="text-gray-600"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <strong className="text-gray-600 dark:text-white/50">
                {t("Tamil Quote")}:
              </strong>{" "}
              <span className="relative text-amber-700 dark:text-amber-500 italic tamil-skill-quote text-base lg:text-lg ms-2 w-full">
                <RiDoubleQuotesL className="absolute -left-4 -top-1.5 inline" />
                கற்றது கைமண் அளவு, கல்லாதது உலகளவு.
                <RiDoubleQuotesR className="absolute -right-4 inline" />
              </span>
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-white/50"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <strong>{t("Translation")}:</strong>{" "}
              {t(
                "What you have learned is but a handful of sand; what you have not learned is the size of the world"
              )}
              .
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-lg:gap-5">
          {myskills.map((talent, index) => (
            <motion.div
              key={index}
              className="space-y-5 rounded-xl border border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-white/[2%] p-5 max-sm:p-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
              variants={{
                visible: (i) => ({
                  opacity: 1,
                  translateX: 0,
                  transition: { delay: i * 0.2 },
                }),
                hidden: { opacity: 0, translateY: 20 },
              }}
            >
              <div className="flex gap-3">
                <p className="text-gray-500 border-gray-500 dark:text-white/50 dark:border-white/30 flex size-10 min-w-10 items-center justify-center rounded-lg border">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    className="size-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1zM1 4v10a1 1 0 0 0 1 1h2V4zm4 0v11h9a1 1 0 0 0 1-1V4z" />
                  </svg>
                </p>
                <div className="">
                  <h2 className="font-medium">
                    {t(talent.title)}
                    {/* <span className="ml-1 text-xs whitespace-nowrap text-tertiary"></span> */}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {t(talent.description)}.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {talent.skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5 px-3 py-2 text-center"
                  >
                    <span className="size-4">{skill.icon}</span>
                    <h2 className="text-xs font-medium text-gray-600 dark:text-gray-300">
                      {skill.title}
                    </h2>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSkillPage;
