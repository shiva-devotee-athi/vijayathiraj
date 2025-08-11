import React from "react";
import { motion } from "framer-motion";
import personalDp from "@/assets/images/personal/personal-dp.webp";
import sampleResumeFile from "@/assets/files/resume_sample.pdf";
import { useTranslation } from "react-i18next";

const Aboutpage: React.FC = () => {
  const {t} = useTranslation()
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 250 },
      }}
    >
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
                <picture className="w-full h-full bg-cover bg-center rounded-lg mask1">
                  <img
                    src={personalDp}
                    alt="vijay personal dp"
                    width="600"
                    height="400"
                  />
                </picture>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className=" md:col-span-1 lg:col-span-2 xl:col-span-3 pl-0 md:pl-12 pt-8 md:pt-0">
              <div className="pb-6 heading-section">
                <h1 className="big big-2 text-[#575757] dark:text-[#A6A6A6]">
                  {t("About")}
                </h1>
                <h2 className="mb-4 text-black dark:text-white relative z-1">About Me</h2>
                <p className="text-gray-600 dark:text-white/45">
                  {t("Passionate web developer skilled in HTML, CSS, JavaScript, Node.js, React.js, and Next.js. Dedicated to creating seamless and engaging user experiences through high-quality web solutions.")}
                </p>
                <p className="text-gray-600 dark:text-white/45 mt-2">
                  {t("Explore my portfolio to see samples of my work that highlight my UI design standards and attention to detail.")}
                </p>
              </div>

              {/* Personal Info */}
              <ul className="mt-6 space-y-3 about-info">
                <li className="flex">
                  <span className="font-semibold text-gray-700 dark:text-gray-300 w-32">
                    {t("Name")}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Vijay Athiraj
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                    {t("Date of birth")}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    June 02, 2000
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                    {t("Address")}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    10A/39 Perumalpatti Nadar, 1st west st,
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                    {t("City")}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Srivilliputtur
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                    {t("Pin code")}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    626125
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                    {t("Email")}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    vijayathiraj99@gmail.com
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-gray-700 w-32 dark:text-gray-300">
                    {t("Phone")}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    +91 8870762077
                  </span>
                </li>
              </ul>

              {/* Counter Section */}
              <div className="mt-8 flex items-center space-x-4 counter-wrap">
                <div className="text-4xl font-bold text-green-600 dark:text-green-500">
                  12
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  {t("Projects Completed")}
                </span>
              </div>

              {/* Download CV Button */}
              <div className="mt-6">
                <a
                  aria-label="Download CV"
                  href={sampleResumeFile}
                  target="_blank"
                  download={true}
                  className="btn-main bg-btn2 lnk py-3 px-6 rounded-md"
                >
                  {t("Download CV")}
                  <i className="fas fa-chevron-right fa-icon"></i>
                  <span className="circle"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Aboutpage;
