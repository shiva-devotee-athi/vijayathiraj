import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { motion, useInView, AnimatePresence } from "framer-motion";
import HeroInfo from "./HeroInfo";
import { IoClose } from "react-icons/io5";
import { educationDetails, educationInstidutionGallery } from "@/pages/data/information";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type Tab = "All" | "MSC" | "BSC" | "Class XII";

// interface ImageItem {
//   id: number;
//   category: Exclude<Tab, "All">;
//   src: string;
// }

const tabs: Tab[] = ["All", "MSC", "BSC", "Class XII"];

const Education: React.FC = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages =
    activeTab === "All"
      ? educationInstidutionGallery
      : educationInstidutionGallery.filter((img) => img.category === activeTab);

  return (
    <div>
      <HeroInfo title="Education" />
      <section
        id="education"
        className="py-16 bg-gray-100 dark:bg-transparent vj-pf-info-section"
      >
        <div>
          {/* Head */}
          <div className="heading-section mb-12 text-center">
            <motion.h1
              className="big big-2 text-[#d3d4d5] dark:text-[#303030]"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {t("Dev")}
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
                "Hoarding happiness in my free time, I love diving into the world of cartoons and anime. You can often find me laughing along with the antics of Naruto, Shinchan, and Tom and Jerry. I also enjoy revisiting classics like Ben 10, Courage the Cowardly Dog, Ninja Hattori, Doraemon, and Oggy. These shows are my go-to for a dose of fun and nostalgia."
              )}
            </motion.p>
          </div>

          {/* Content */}
          <div className="relative mx-auto w-full px-4 py-12">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-200 dark:bg-zinc-800 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {educationDetails.map((edu, index) => (
                <TimelineItem key={edu.title} edu={edu} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="score-percentage">
        <div className="bg-linear-to-r from-[#44202d] via-[#8d545b] to-[#2d4157] dark:bg-linear-to-r dark:from-zinc-500 dark:via-stone-600 dark:to-zinc-900 w-full">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8  lg:py-20">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="pb-1 text-4xl font-extrabold text-white">
                {t("My Academic Score")}
              </h2>
              <p className="mt-3 text-lg text-white">
                {t("My official, quantified result based on the established scoring criteria for this academic submission")}.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-1 bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  <span className="overline inline">MSC (CGPA)</span>
                  <span className="relative z-0 group inline-block">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="size-4 inline ms-1.5 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM13,8H11V6h2Zm0,10H11V10h2Z" />
                      </g>
                    </svg>
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bottom-0 right-0 w-48 h-24 mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg text-xs py-2 z-10">
                      <p className="px-1 text-left">3 Semester</p>
                      <div className="px-1">
                        <table className="w-full border-collapse border border-[#44202d] dark:border-zinc-900 max-w-xl">
                          <tr className="bg-[#44202d] dark:bg-zinc-900 text-white text-xs">
                            <th className="px-1 text-left">Exam</th>
                            <th className="px-1 text-left">CGPA</th>
                          </tr>
                          <tbody>
                            <tr className="bg-white border-b border-[#44202d] dark:border-zinc-900 text-xs">
                              <td className="px-1 text-left">Semester-1</td>
                              <td className="px-1">25</td>
                            </tr>
                            <tr className="bg-white border-b border-[#44202d] dark:border-zinc-900">
                              <td className="px-1 text-left">Semester-2</td>
                              <td className="px-1">30</td>
                            </tr>
                            <tr className="bg-white border-b border-[#44202d] dark:border-zinc-900">
                              <td className="px-1 text-left">Semester-3</td>
                              <td className="px-1">40</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </span>
                </dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                  6.9
                </dd>
              </div>
              <div className="flex flex-col gap-1 bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  BSC (CGPA){" "}
                </dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                  7.4
                </dd>
              </div>
              <div className="flex flex-col gap-1 bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Class XII (Percentage)
                </dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                  79.42
                </dd>
              </div>
              <div className="flex flex-col gap-1 bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Class X (Percentage)
                </dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                  90
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        id="education"
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
              {t("Memories")}
            </motion.h1>
            <motion.h2
              className="mb-4 text-black dark:text-white relative z-1"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {t("Gallery")}
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
        </div>
        <div className="w-full py-10 px-4">
          {/* Tabs */}
          <div className="relative flex w-full md:w-8/12 mx-auto justify-between bg-stone-100 dark:bg-transparent p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-0 flex-1 text-sm font-medium py-2 px-3 rounded-md transition-colors cursor-pointer select-none ${
                  activeTab === tab
                    ? "text-amber-700 dark:text-white"
                    : "text-stone-700 dark:text-stone-500"
                }`}
              >
                {t(tab)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 -z-[1] bg-amber-100 dark:bg-amber-900 shadow-sm rounded-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedImg(img.src)}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full aspect-square object-cover rounded-lg shadow-2xl hover:opacity-90"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Modal */}
          <AnimatePresence>
            {selectedImg && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImg(null)}
              >
                <motion.div
                  className="relative bg-transparent rounded-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  onClick={(e) => e.stopPropagation()} // prevent closing on inside click
                >
                  <button
                    onClick={() => setSelectedImg(null)}
                    className="absolute top-3 -right-3 w-full flex justify-end text-gray-700 hover:text-red-500"
                  >
                    <IoClose className="w-8 h-8 bg-white rounded-t-xl rounded-r-xl p-1 hover:shadow-2xs" />
                  </button>
                  <img
                    src={selectedImg}
                    alt="modal"
                    className="rounded-md w-full max-w-3xl max-h-[70vh] object-contain"
                    width="100%"
                    height="auto"
                    // className="rounded-md w-full max-w-3xl max-h-[80vh] object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Education;

function TimelineItem({ edu, index }: { edu: any; index: number }) {
  const ref = useRef(null);
  const { t } = useTranslation();
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const isLeft = index % 2 === 0; // alternate left/right on desktop

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Circle marker */}
      <motion.div
        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-amber-700 dark:bg-amber-500 rounded-full shadow-md"
        style={{
          boxShadow: "0 0 8px 4px rgba(251, 191, 36, 0.6)", // amber-500 glow
        }}
        transition={{
          duration: 0.2,
          delay: 0.5,
        }}
      />

      {/* Content Card */}
      <div
        className={`mt-8 ps-8 md:ml-0 md:mt-0 w-full md:w-1/2 ${
          isLeft ? "md:pr-4 lg:pr-8" : "md:pl-4 lg:pl-8"
        }`}
      >
        <div className="mx-auto bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden">
          <div className="lg:flex min-h-52">
            {/* <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={
                  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                }
                alt={edu.title}
              />
            </div> */}
            <div className="p-6">
              <h3 className="uppercase tracking-wide text-sm text-amber-700 dark:text-amber-500 font-semibold">
                {edu.date}
              </h3>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-2">
                {t(edu.title)}
              </h2>
              <span className="block text-gray-600 dark:text-gray-400 italic">
                {t(edu.position)}
              </span>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {t(edu.description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
