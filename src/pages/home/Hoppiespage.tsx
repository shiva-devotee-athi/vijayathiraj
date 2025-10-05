import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { hoppieImage } from "@/pages/data/information";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HoppieImageDisplay = () => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {hoppieImage.map((chunk, chunkIndex) => {
        return (
          <div key={chunkIndex} className="grid gap-4">
            {chunk.chunk.map(({ title, image }, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                variants={{
                  visible: (i) => ({
                    opacity: 1,
                    filter: "blur(0px)",
                    translateY: 0,
                    transition: { delay: i * 0.2 },
                  }),
                  hidden: { opacity: 0, filter: "blur(8px)", translateY: 50 },
                }}
                key={index}
              >
                <picture key={index}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    loading="lazy"
                    src={image}
                    alt={title}
                  />
                </picture>
              </motion.div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const Hoppiespage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="happiness"
      className="bg-gray-100 dark:bg-transparent vj-pf-section"
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
            {t("Hoppies")}
          </motion.h1>
          <motion.h2
            className="mb-4 text-black dark:text-white relative z-1"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Happiness")}
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
        {HoppieImageDisplay()}
      </div>
    </section>
  );
};

export default Hoppiespage;
