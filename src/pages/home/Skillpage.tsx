import React, { CSSProperties } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import { motion } from "framer-motion";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import { skillCards } from "@/pages/data/skills";


const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skillpage: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const generateStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <BsStarFill key={`full-${index}`} className="text-warning me-1" />
        ))}
        {halfStar && <BsStarHalf className="text-warning me-1" />}
        {[...Array(emptyStars)].map((_, index) => (
          <BsStar key={`empty-${index}`} className="text-secondary" />
        ))}
      </>
    );
  };

  return (
    <section
      id="skills"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-bottom-section"
    >
      <div className="container">
        <div className="heading-section mb-8 text-center">
          <motion.h1
            className="big big-2 text-[#575757] dark:text-[#A6A6A6]"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Skills")}
          </motion.h1>
          <motion.h2
            className="mb-4 text-black dark:text-white relative z-1"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Talents")}
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
          <p className="text-black dark:text-white/70 text-2xl font-bold">
            {t("One of My Fav Quote")}
          </p>
          <div>
            <p className="text-gray-600">
              <strong className="text-gray-600 dark:text-white/50">
                {t("Tamil Quote")}:
              </strong>{" "}
              <span className="relative text-amber-700 dark:text-amber-500 italic tamil-skill-quote text-base lg:text-lg ms-2 w-full">
                <RiDoubleQuotesL className="absolute -left-4 -top-1.5 inline" />
                கற்றது கைமண் அளவு, கல்லாதது உலகளவு.
                <RiDoubleQuotesR className="absolute -right-4 inline" />
              </span>
            </p>
            <p className="text-gray-600 dark:text-white/50">
              <strong>{t("Translation")}:</strong>{" "}
              {t(
                "What you have learned is but a handful of sand; what you have not learned is the size of the world"
              )}
              .
            </p>
          </div>
        </div>

        {/* Left Column */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 overflow-x-hidden">
            {skillCards.map(
              ({ name, title, bgColor, color, image, star }, index) => {
                const CSSstyle = {
                  "--before-bg-color": theme === "light" ? color : "#717171",
                  background: theme === "light" ? bgColor : "#232323",
                } as CSSProperties;
                return (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    variants={{
                      visible: (i) => ({
                        opacity: 1,
                        translateX: 0,
                        transition: { delay: i * 0.2 },
                      }),
                      hidden: { opacity: 0, translateX: 150 },
                    }}
                    key={index}
                  >
                    <div
                      className="vj-pf-skill-card"
                      data-skill={name}
                      data-color={color}
                      style={CSSstyle}
                    >
                      <div className="imgBx">
                        <img src={image} alt="nike-air-shoe" />
                      </div>
                      <div className="contentBx">
                        <h2>{t(title)}</h2>

                        <div className="size">
                          <h3>{t("Rating")} :</h3>
                          <div className="flex text-yellow-400">
                            {generateStars(star)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillpage;
