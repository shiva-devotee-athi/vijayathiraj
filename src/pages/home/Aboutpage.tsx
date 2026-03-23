import React from "react";
import { motion } from "framer-motion";
import personalDp from "@/assets/images/personal/personal-dp.webp";
import sampleResumeFile from "@/assets/files/resume_sample.pdf";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { TOTAL_YEARS_OF_EXPERIENCE } from "@/pages/data/information";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const Aboutpage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-transparent py-12 vj-pf-about vj-pf-section"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Left Side - Image */}
          <div className="">
            <div className="relative w-full h-96 md:h-auto">
              <div className="absolute inset-0 rounded-lg"></div>
              <motion.picture
                className="w-full h-full bg-cover bg-center rounded-lg mask1"
                variants={slideUpAndFade}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.img
                  src={personalDp}
                  className="max-w-xs mx-auto"
                  alt="vijay personal dp"
                  width="100%"
                  height="auto"
                  variants={slideUpAndFade}
                  initial="hidden"
                  animate="visible"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </motion.picture>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className=" md:col-span-1 lg:col-span-2 xl:col-span-3 pl-0 md:pl-12 pt-8 md:pt-0">
            <div className="pb-6 heading-section">
              <motion.h1
                className="big big-2 text-[#d3d4d5] dark:text-[#303030]"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {t("About")}
              </motion.h1>
              <motion.h2
                className="mb-4 text-black dark:text-white relative z-1"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {t("About Me")}
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-white/45"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {t(
                  "I am a Full Stack Developer with 4.1 years of professional experience in building scalable, high-performance web applications. My foundation is built on Logical Reasoning and Mathematics, which I translate into clean, efficient code across the entire MERN and NestJS ecosystem.",
                )}
              </motion.p>
              <motion.p
                className="text-gray-600 dark:text-white/45  mt-2"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {t(
                  "While my expertise began in crafting pixel-perfect, responsive user interfaces, my recent experience has seen me step deep into the backend trenches. I specialize in architecting robust APIs, managing PostgreSQL and MongoDB databases, and streamlining deployments using AWS and Docker.",
                )}
              </motion.p>
              <motion.p
                className="text-gray-600 dark:text-white/45  mt-2"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {t(
                  "I thrive in environments that require adaptability—whether it's leading a frontend transition or taking full ownership of server-side infrastructure. I don't just write code; I build seamless digital experiences that are as powerful on the inside as they are beautiful on the outside.",
                )}
              </motion.p>
              <motion.p
                className="text-gray-600 dark:text-white/45 mt-2"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {t(
                  "Explore my portfolio to see samples of my work that highlight my UI design standards and attention to detail.",
                )}
              </motion.p>
            </div>

            {/* Personal Info */}
            <motion.ul
              className="mt-6 space-y-3 about-info"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <li className="flex">
                <span className="font-semibold text-gray-700 dark:text-gray-300 w-32">
                  {t("Name")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : Vijay Athiraj
                </span>
              </li>
              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Current Role")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : Full Stack Developer
                </span>
              </li>
              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Primary Stack")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : React, Next.js, Node.js, Nest.js, PostgreSQL
                </span>
              </li>
              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Education")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : B.Sc. Mathematics (Logic & Analytics Foundation)
                </span>
              </li>
              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Languages")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : Tamil (Native), English
                </span>
              </li>

              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Phone")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : +91 8870762077
                </span>
              </li>

              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Email")}:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : vijayathiraj99@gmail.com
                </span>
              </li>

              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Current Location")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : Guindy, Chennai
                </span>
              </li>
              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Native Location")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : Srivilliputtur, Virudhunagar
                </span>
              </li>
              <li className="flex">
                <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                  {t("Date of birth")}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  : June 02, 2000
                </span>
              </li>
            </motion.ul>

            {/* Counter Section */}
            <motion.div
              className="mt-8 flex items-center space-x-4 counter-wrap"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-500">
                {TOTAL_YEARS_OF_EXPERIENCE}
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                {t("Years Experience")}
              </span>
            </motion.div>

            {/* Download CV Button */}
            <div className="mt-6 flex flex-wrap gap-2 md:gap-4">
              <motion.a
                aria-label="Download CV"
                href={sampleResumeFile}
                target="_blank"
                download={true}
                className="btn-main bg-btn2 lnk py-3 px-6 rounded-md"
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {t("Download CV")}
                <i className="fas fa-chevron-right fa-icon"></i>
                <span className="circle"></span>
              </motion.a>
              <motion.div
                variants={slideUpAndFade}
                initial="hidden"
                whileInView="visible"
                className="inline-block"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  aria-label="For HRs Recruitement Process"
                  to="/info/human-resource"
                  target="_blank"
                  className="btn-main bg-btn4 lnk py-3 px-6 rounded-md"
                >
                  {t("For HRs")}
                  <i className="fas fa-chevron-right fa-icon"></i>
                  <span className="circle"></span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
