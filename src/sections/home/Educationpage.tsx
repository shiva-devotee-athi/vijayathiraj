import React from "react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TabsBtn, TabsContent, TabsProvider } from "@/components/tabs/Tabs";
import Link from "next/link";
import { educationDetails } from "@/data/information";
import Image from "next/image";

const slideUpAndFade: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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
                  <motion.article
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="bg-white dark:bg-[#1d1e22] rounded-lg shadow-xl grid md:grid-cols-5 overflow-hidden border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <motion.div
                      variants={staggerItem}
                      className="relative w-full h-64 md:h-full md:col-span-2 bg-black/5 dark:bg-white/5 relative z-1 overflow-hidden group"
                    >
                      <Image
                        fill
                        className="absolute z-0 blur-xl opacity-20 dark:opacity-30 object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                        src={item.imgSrc}
                        alt=""
                        loading="lazy"
                      />
                      <div className="relative z-10 w-full h-full flex items-center justify-center p-6 md:p-8">
                        <Image
                          width={300}
                          height={300}
                          className="object-contain w-auto h-auto max-w-full max-h-full drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110 rounded-lg"
                          src={item.imgSrc}
                          loading="lazy"
                          alt={item.title}
                        />
                      </div>
                    </motion.div>
                    <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-10 leading-normal md:col-span-3">
                      <motion.span
                        variants={staggerItem}
                        className="block text-amber-600 font-bold tracking-wider uppercase text-sm mb-2"
                      >
                        {t(item.date)}
                      </motion.span>
                      <motion.h3
                        variants={staggerItem}
                        className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight"
                      >
                        {t(item.title)}
                      </motion.h3>
                      <motion.span
                        variants={staggerItem}
                        className="block text-gray-500 dark:text-gray-400 font-medium italic mb-6 border-l-4 border-amber-600/30 pl-4"
                      >
                        {t(item.position)}
                      </motion.span>
                      <motion.p
                        variants={staggerItem}
                        className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
                      >
                        {t(item.description)}
                      </motion.p>
                    </div>
                  </motion.article>
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
            href="/info/education"
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
