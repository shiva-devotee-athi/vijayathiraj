import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { Link } from "react-router";
import { projects } from "@/pages/data/information";
import { useMediaQuery } from "@/hooks/useMediaQuery";
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination.min.css";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
// const SLIDES_PER_VIEW = 3;

const Projectpage: React.FC = () => {
  const { t } = useTranslation();
  const isSmallDevices = useMediaQuery("(max-width: 990px)");
  const [swiperPage, setSwiperPage] = useState<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleBreakpointChange = (swiper: any) => {
    // const currentSlidesPerView = swiper.params.slidesPerViewDynamic
    //   ? swiper.slidesPerViewDynamic
    //   : swiper.params.slidesPerView;
    setSlidesPerView(swiper.params.slidesPerView);
  };
  const totalBullets = Math.ceil(projects.length / slidesPerView);

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
            {t("Dev")}
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
              "A curated selection of my recent professional and personal projects. Each artifact demonstrates my capabilities in full-stack development, robust code architecture using TypeScript, and effective user interface creation with modern frameworks like React and Node.js. Explore the repository links below to see how I translate complex ideas into functional, real-world applications."
            )}
          </motion.p>
        </div>

        {/* Left Column */}
        <div>
          <Swiper
            className="relative !pb-6"
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            slidesPerGroup={slidesPerView}
            slidesPerGroupAuto={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1, // 👈 for screens up to 440px
              },
              485: {
                slidesPerView: 2, // 👈 for screens up to 768px
              },
              768: {
                slidesPerView: 3, // 👈 default for larger screens
              },
            }}
            onBreakpoint={(swiper) => handleBreakpointChange(swiper)}
            onSlideChange={(swiper) => {
              const groupIndex = Math.floor(swiper.realIndex / slidesPerView);
              setActiveIndex(groupIndex);
              
              // const bulletIndex = swiper.realIndex % totalBullets;
              // setSlidingIndex(bulletIndex);
            }}
            onSwiper={(swiper) => setSwiperPage(swiper)}
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <article className="w-full h-full bg-transparent hover:bg-white dark:hover:bg-[#1d1e22] rounded-lg hover:shadow-lg overflow-hidden">
                  <div>
                    <img
                      className="object-cover h-40 w-full"
                      src={item.src}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-6">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.title}
                    </h2>
                    <span className="block text-gray-600 dark:text-gray-200 mt-2">
                      <button
                        type="button"
                        className="px-3 py-1 text-xs font-medium text-center inline-flex items-center text-blue-500 bg-blue-100 rounded-lg  focus:ring-0 focus:outline-none  dark:text-blue-100 dark:bg-blue-900 "
                      >
                        {item.type === "Personal" && (
                          <FaGithub className="me-1" />
                        )}
                        {item.type === "Company" && (
                          <FaGithub className="me-1" />
                        )}
                        {t("Personal")}
                      </button>
                    </span>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 h-full sm:min-h-20 sm:max-h-20 overflow-hidden overflow-ellipsis">
                      {t(item.description)}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
            {!isSmallDevices && (
              <div className="flex justify-center gap-4 mt-6">
                {Array.from({
                  length: totalBullets,
                }).map((_, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      if (!swiperPage) return;
                      const targetIndex = i * slidesPerView;

                      // ✅ Use Swiper’s loop fix: use slideTo() with 'true' param
                      swiperPage.slideToLoop(
                        targetIndex % projects.length,
                        600,
                        true
                      );

                      // ✅ Restart autoplay for smooth continuation
                      swiperPage.autoplay.start();
                    }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <motion.svg
                      viewBox="0 0 20 20"
                      version="1.1"
                      className={`w-3.5 h-3.5 md:w-6 md:h-6 cursor-pointer hover:scale-105 ${
                        activeIndex === i
                          ? "text-amber-700 dark:text-amber-500"
                          : "text-black dark:text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="currentColor"
                      animate={{
                        scale: activeIndex === i ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6, type: "spring" }}
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <desc>Created with Sketch.</desc>
                        <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-260.000000, -7639.000000)"
                            fill="currentColor"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <path
                                d="M210.593931,7496.99997 L207.738773,7496.99997 C206.968159,7496.99997 206.488644,7496.06497 206.879434,7495.39897 L207.994979,7493.53898 C208.577177,7494.87897 209.474398,7495.99997 210.593931,7496.99997 M211.722437,7484.45598 C214.470925,7482.13098 217.528457,7483.06498 220.109464,7483.56598 C220.872102,7483.71498 221.651688,7483.40498 222.106281,7482.77298 L223.81798,7480.53099 C224.094125,7480.14599 224.052254,7479.61799 223.718289,7479.28299 C223.288619,7478.85199 222.572836,7478.92299 222.235879,7479.42999 C220.40455,7481.83398 220.703624,7481.84898 217.294182,7481.05899 C216.470732,7480.86799 215.615381,7480.78999 214.779968,7480.92499 C210.230058,7481.65998 206.838561,7485.82598 207.288168,7490.65598 L204.277491,7495.89197 C203.496909,7497.22497 204.455939,7498.99997 205.997166,7498.99997 L215.963304,7498.99997 C219.950955,7499.00997 222.511027,7496.40397 223.039391,7492.90298 C223.611619,7489.10298 221.175164,7485.76798 217.732824,7484.98398 C214.524758,7484.25298 211.234946,7486.47998 211.215008,7489.77998 C211.201051,7492.26898 213.008454,7494.33897 215.373131,7494.73997 C217.163587,7495.04297 218.997906,7493.94598 219.18732,7492.13498 C219.376733,7490.33198 217.975074,7488.80998 216.21652,7488.80998 C215.666224,7488.80998 215.220604,7489.25698 215.220604,7489.80998 C215.220604,7490.36198 215.667221,7490.80998 216.218513,7490.80998 C216.768809,7490.80998 217.215426,7491.25698 217.215426,7491.80998 C217.215426,7492.36198 216.768809,7492.80998 216.218513,7492.80998 C214.459959,7492.80998 213.056306,7491.28698 213.244722,7489.48498 C213.435133,7487.67298 215.264468,7486.57598 217.054923,7486.87998 C219.4196,7487.28098 221.217034,7489.35098 221.203078,7491.83898 C221.184136,7495.08197 217.970089,7497.31997 214.803894,7496.66597 C211.62773,7496.00997 209.240124,7493.18898 209.240124,7489.80998 C209.240124,7487.66198 210.205135,7485.73998 211.722437,7484.45598"
                                id="naruto-[#119]"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </motion.svg>
                    <div className="w-4 md:w-8 h-0.5 md:h-1 bg-gray-300 dark:bg-gray-500 rounded overflow-hidden">
                      <motion.div
                        className="h-0.5 md:h-1 bg-amber-700 dark:bg-amber-500"
                        initial={{ width: 0 }}
                        animate={{ width: activeIndex === i ? "100%" : "0%" }}
                        transition={{
                          duration: activeIndex === i ? 8 : 0.3, // 8s matches autoplay delay
                          ease: "linear",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Swiper>

          <motion.div
            className="flex justify-center mt-12"
            variants={slideUpAndFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              aria-label="Info Projects"
              to="/info/projects"
              target="_blank"
              className="btn-main bg-btn2 lnk py-4 px-8 rounded-full"
            >
              {t("Know More")}

              <i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projectpage;
