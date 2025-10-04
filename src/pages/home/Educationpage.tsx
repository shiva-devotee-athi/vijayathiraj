import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TabsBtn, TabsContent, TabsProvider } from "@/components/tabs/Tabs";
import { Link } from "react-router";
import { educationDetails } from "../data/information";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Educationpage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="education"
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
            {t("Education")}
          </motion.h1>
          <motion.h2
            className="mb-4 text-black dark:text-white relative z-1"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("Education")}
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-white/45 mt-4"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t(
              "My journey of learning has been a continuous adventure, shaping me into the professional I am today. Here's a look at my academic background and key milestones that have equipped me with the knowledge and skills to excel."
            )}
          </motion.p>
        </div>
        <div>
          <div className="bg-white/10 dark:bg-transparent backdrop-blur-sm rounded-md pt-2 p-0 md:py-4 relative">
            <TabsProvider defaultValue={educationDetails[0].title} wobbly>
              <div className="flex justify-center my-2">
                <div className="flex items-center w-fit dark:bg-[#1d2025] dark:text-gray-400 bg-gray-200 p-1 text-black rounded-md border dark:border-zinc-800">
                  {educationDetails.map((item, index) => (
                    <TabsBtn key={index} value={item.title}>
                      <span className="relative z-[2] uppercase hidden sm:block">
                        {t(item.shortTitle)}
                      </span>
                      <span className="relative z-[2] uppercase block sm:hidden">
                        {t(item.tinyTitle)}
                      </span>
                    </TabsBtn>
                  ))}
                </div>
              </div>

              {educationDetails.map((item, index) => (
                <TabsContent key={index} value={item.title} className="p-0">
                  <div className="bg-white dark:bg-[#1d1e22] rounded-lg shadow-lg grid md:grid-cols-5">
                    <picture className="w-full h-full group md:col-span-2 bg-black/20 rounded-t-lg md:rounded-none md:rounded-s-lg relative z-1 overflow-hidden">
                      <img
                        className="absolute z-0 blur-xs w-full"
                        src={item.imgSrc}
                        loading="lazy"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                      <img
                        className="object-contain w-full h-full max-w-80 max-h-80 m-auto md:h-auto relative z-1"
                        src={item.imgSrc}
                        loading="lazy"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </picture>
                    <div className="flex flex-col justify-start px-4 py-4 md:px-6 md:py-6 leading-normal md:col-span-3">
                      <span className="block text-amber-600 font-semibold">
                        {t(item.date)}
                      </span>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-2">
                        {t(item.title)}
                      </h2>
                      <span className="block text-gray-600 dark:text-gray-400 italic">
                        {t(item.position)}
                      </span>
                      <p className="mt-4 text-gray-600 dark:text-gray-400">
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </TabsProvider>
          </div>
        </div>

        <motion.div
          className="flex justify-center mt-12"
          variants={slideUpAndFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            aria-label="Education Know More Details"
            to="/info/education"
            target="_blank"
            className="btn-main bg-btn2 lnk py-4 px-8 rounded-full"
          >
            {t("Know More")}
            <i className="fas fa-chevron-right fa-icon"></i>
            <span className="circle"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Educationpage;
