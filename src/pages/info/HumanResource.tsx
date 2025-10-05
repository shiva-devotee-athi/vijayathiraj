import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import HeroInfo from "./HeroInfo";
import personalDp from "@/assets/images/personal/personal-dp.webp";
import {
  education,
  experience,
  personalInfo,
  skillTags,
} from "@/pages/data/humanResource";
import { TOTAL_YEARS_OF_EXPERIENCE } from "../data/information";
import { useTheme } from "@/context/ThemeContext";

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type CopiedState = { index: number; field: string } | null;

const HumanResource: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  // const [copyStatus, setCopyStatus] = useState("");
  const [copied, setCopied] = useState<CopiedState>(null);

  const handleCopyClick = async (
    value: string,
    index: number,
    field = "list"
  ) => {
    if (copied) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopied({ index, field });
      // toast((props) => (
      //   <CustomToast
      //     {...props}
      //     toastProps={{
      //       ...props.toastProps,
      //       className: "bg-transparent sangi",
      //       style: {
      //         background: "transparent",
      //       },
      //     }}
      //     type="success"
      //     title="Message Sent!"
      //     description="Your message has been delivered."
      //   />
      // ));
      setTimeout(() => setCopied(null), 1000); // Clear message after 2 seconds
    } catch (err) {
      setCopied(null);
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <HeroInfo title="Human Resource" />
      <section
        id="human-resource"
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
              {t("Hiring")}
            </motion.h1>
            <motion.h2
              className="mb-4 text-black dark:text-white relative z-1"
              variants={slideUpAndFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {t("For HR")}
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
          <div className="relative mx-auto w-full px-4 py-12">
            {/* Vertical line */}
            <div className="md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
            <p>
              <span className="text-red-500 dark:text-red-700">*</span>
              {t("You can copy the details to the clipboard when you hover over the underlined text click")}.
            </p>
            </div>

            <div className="bg-white dark:bg-[#1d2025] md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
              <div
                className={`h-[140px] ${
                  theme === "light"
                    ? "human-resource-banner-bg"
                    : "dark-human-resource-banner-bg"
                }`}
                // style={{
                //   background:
                //     "linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)",
                // }}
              />
              <div className="px-5 py-2 flex flex-col gap-3 pb-6">
                <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white dark:border-slate-500">
                  <img
                    src={personalDp}
                    className="w-full h-full rounded-full object-center object-cover"
                  />
                </div>
                <div className="">
                  <h3
                    className={`text-xl w-fit relative font-bold leading-6 hover:underline cursor-pointer ${
                      copied?.field === "intro-name"
                        ? "text-green-500 dark:text-green-700"
                        : "text-slate-900 dark:text-white"
                    }`}
                    onClick={() =>
                      handleCopyClick(`Vijayathiraj S`, 100, "intro-name")
                    }
                  >
                    {copied?.field === "intro-name"
                      ? "Copied!"
                      : "Vijayathiraj S"}
                  </h3>
                  <p
                    className={`text-sm py-1 w-fit hover:underline cursor-pointer ${
                      copied?.field === "intro-email"
                        ? "text-green-500 dark:text-green-700"
                        : "text-gray-600 dark:text-slate-500"
                    }`}
                    onClick={() =>
                      handleCopyClick(
                        `vijayathiraj99@gmail.com`,
                        101,
                        "intro-email"
                      )
                    }
                  >
                    {copied?.field === "intro-email"
                      ? "Copied!"
                      : "vijayathiraj99@gmail.com"}
                  </p>
                  <p
                    className={`text-sm pb-1 w-fit hover:underline cursor-pointer ${
                      copied?.field === "intro-mobile"
                        ? "text-green-500 dark:text-green-700"
                        : "text-gray-600 dark:text-slate-500"
                    }`}
                    onClick={() =>
                      handleCopyClick(`8870762077`, 102, "intro-mobile")
                    }
                  >
                    {copied?.field === "intro-mobile"
                      ? "Copied!"
                      : "8870762077"}
                  </p>
                </div>
                <div className="flex gap-x-3 gap-y-1.5 flex-wrap">
                  {skillTags.map((skill, index) => (
                    <span
                      key={skill}
                      onClick={() =>
                        handleCopyClick(`${skill}`, index, "intro-skill")
                      }
                      className={`rounded-sm px-3 py-1 text-xs font-medium hover:underline cursor-pointer ${
                        copied?.index === index &&
                        copied?.field === "intro-skill"
                          ? "bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-300"
                          : "bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300"
                      }`}
                    >
                      {copied?.index === index &&
                      copied?.field === "intro-skill"
                        ? "Copied!"
                        : skill}
                    </span>
                  ))}
                </div>

                <h4 className="mt-2 text-base text-black dark:text-gray-300 font-medium leading-3">
                  About
                </h4>
                <p className="text-sm text-stone-500 dark:text-slate-500">
                  Passionate web developer skilled in HTML, CSS, JavaScript,
                  Node.js, React.js, and Next.js. Dedicated to creating seamless
                  and engaging user experiences through high-quality web
                  solutions.
                </p>
                <h4 className="mt-2 text-base text-black dark:text-gray-300 font-medium leading-3">
                  Experiences
                </h4>
                <h5 className="text-sm text-black dark:text-gray-300 leading-3">
                  Total{" "}
                  <span
                    className="text-green-700 dark:text-green-500 font-medium hover:underline cursor-pointer"
                    onClick={() =>
                      handleCopyClick(
                        `${TOTAL_YEARS_OF_EXPERIENCE} Years`,
                        104,
                        "intro-total-exp"
                      )
                    }
                  >
                    {copied?.field === "intro-total-exp"
                      ? "Copied!"
                      : `${TOTAL_YEARS_OF_EXPERIENCE} Years`}
                  </span>{" "}
                  Experience
                </h5>
                <div className="flex flex-col gap-3">
                  {experience.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-2 py-3 bg-white dark:bg-[#282d34] dark:border-[#282d34] rounded border border-zinc-200 w-full "
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 50 50"
                        className="h-7 w-7 text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <path d="M9 0C7.355469 0 6 1.355469 6 3L6 50L44 50L44 3C44 1.355469 42.644531 0 41 0 Z M 9 2L41 2C41.554688 2 42 2.445313 42 3L42 48L38 48L38 36L27 36L27 48L8 48L8 3C8 2.445313 8.445313 2 9 2 Z M 12 6L12 14L23 14L23 6 Z M 27 6L27 14L38 14L38 6 Z M 14 8L21 8L21 12L14 12 Z M 29 8L36 8L36 12L29 12 Z M 12 16L12 24L23 24L23 16 Z M 27 16L27 24L38 24L38 16 Z M 14 18L21 18L21 22L14 22 Z M 29 18L36 18L36 22L29 22 Z M 12 26L12 34L23 34L23 26 Z M 27 26L27 34L38 34L38 26 Z M 14 28L21 28L21 32L14 32 Z M 29 28L36 28L36 32L29 32 Z M 12 36L12 44L23 44L23 36 Z M 14 38L21 38L21 42L14 42 Z M 29 38L36 38L36 48L29 48Z" />
                        </g>
                      </svg>
                      <div className="leading-3">
                        <p
                          className={`text-sm font-bold hover:underline cursor-pointer ${
                            copied?.index === index &&
                            copied?.field === "work-company"
                              ? "text-green-500 dark:text-green-700"
                              : "text-slate-700 dark:text-slate-400"
                          }`}
                          onClick={() =>
                            handleCopyClick(
                              `${item.company}`,
                              index,
                              "work-company"
                            )
                          }
                        >
                          {copied?.index === index &&
                          copied?.field === "work-company"
                            ? "Copied"
                            : item.company}
                        </p>
                        <span
                          className={`text-xs hover:underline cursor-pointer ${
                            copied?.index === index &&
                            copied?.field === "work-date"
                              ? "text-green-500 dark:text-green-700"
                              : "text-slate-600 dark:text-slate-500"
                          }`}
                          onClick={() =>
                            handleCopyClick(`${item.date}`, index, "work-date")
                          }
                        >
                          {copied?.index === index &&
                          copied?.field === "work-date"
                            ? "Copied"
                            : item.date}
                        </span>
                        <span
                          className={`text-xs ms-1 hover:underline cursor-pointer ${
                            copied?.index === index &&
                            copied?.field === "work-experience"
                              ? "text-green-500 dark:text-green-700"
                              : "text-blue-600"
                          }`}
                          onClick={() =>
                            handleCopyClick(
                              `${item.experience}`,
                              index,
                              "work-experience"
                            )
                          }
                        >
                          {copied?.index === index &&
                          copied?.field === "work-experience"
                            ? "Copied"
                            : item.experience}
                        </span>
                      </div>
                      <p className="text-sm self-start ml-auto">
                        <span className="text-slate-500 dark:text-slate-400">
                          As{" "}
                        </span>
                        <span
                          className={`hover:underline cursor-pointer ${
                            copied?.index === index &&
                            copied?.field === "work-role"
                              ? "text-green-500 dark:text-green-700"
                              : "text-slate-500 dark:text-slate-400"
                          }`}
                          onClick={() =>
                            handleCopyClick(
                              `${item.company}`,
                              index,
                              "work-role"
                            )
                          }
                        >
                          {copied?.index === index &&
                          copied?.field === "work-role"
                            ? "Copied"
                            : item.role}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
                <h4 className="mt-2 text-base text-black dark:text-gray-300 font-medium leading-3">
                  Education
                </h4>
                <div className="relative overflow-hidden px-4">
                  <div className="absolute h-full border border-dashed border-opacity-20 border-zinc-300 dark:border-slate-500" />
                  {education.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start w-full mb-6 -ml-1"
                    >
                      <div className="mt-1.5 w-4 aspect-square z-1">
                        <div className="w-2.5 h-2.5 bg-blue-500 shadow-blue-300 shadow-2xl rounded-full" />
                      </div>
                      <div className="w-11/12">
                        <p
                          className={`text-sm hover:underline cursor-pointer ${
                            copied?.index === index &&
                            copied?.field === "edu-title"
                              ? "text-green-500 dark:text-green-700"
                              : "text-black dark:text-slate-400"
                          }`}
                          onClick={() =>
                            handleCopyClick(`${item.title}`, index, "edu-title")
                          }
                        >
                          {copied?.index === index &&
                          copied?.field === "edu-title"
                            ? "Copied"
                            : item.title}
                        </p>
                        <p className="text-xs">
                          <span
                            className={`hover:underline cursor-pointer ${
                              copied?.index === index &&
                              copied?.field === "edu-date"
                                ? "text-green-500 dark:text-green-700"
                                : "text-gray-500 dark:text-slate-500"
                            }`}
                            onClick={() =>
                              handleCopyClick(`${item.date}`, index, "edu-date")
                            }
                          >
                            {copied?.index === index &&
                            copied?.field === "edu-date"
                              ? "Copied"
                              : item.date}{" "}
                          </span>
                          <span
                            className={`hover:underline cursor-pointer ${
                              copied?.index === index &&
                              copied?.field === "edu-score"
                                ? "text-green-500 dark:text-green-700"
                                : "text-blue-600"
                            }`}
                            onClick={() =>
                              handleCopyClick(
                                `${item.score} ${item.scoreType}`,
                                index,
                                "edu-score"
                              )
                            }
                          >
                            {copied?.index === index &&
                            copied?.field === "edu-score"
                              ? "Copied"
                              : `${item.score} ${item.scoreType}`}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* start::Timeline item */}
                  {/* end::Timeline item */}
                </div>

                <h4 className="mt-2 text-base text-black dark:text-gray-300 font-medium leading-3">
                  Personal Info
                </h4>
                <ul className="text-gray-700 dark:text-slate-500 text-sm">
                  {personalInfo.map((item, index) => (
                    <li
                      key={index}
                      className="flex border-b border-gray-100 dark:border-[#23272f] py-2"
                    >
                      <span className="font-bold w-32">{item.title}</span>
                      <span className="text-gray-700 dark:text-slate-500 hover:underline cursor-pointer">
                        {":"}
                      </span>
                      <span
                        title={"Click to copy"}
                        className={`ms-1 hover:underline cursor-pointer ${
                          copied?.index === index &&
                          copied?.field === "personal-list"
                            ? "text-green-500 dark:text-green-700"
                            : "text-gray-700 dark:text-slate-500"
                        }`}
                        onClick={() =>
                          handleCopyClick(
                            `${item.value}`,
                            index,
                            "personal-list"
                          )
                        }
                      >
                        {copied?.index === index &&
                        copied?.field === "personal-list"
                          ? "Copied!"
                          : item.value}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* <ul className="text-gray-700 text-sm">
                  <li className="flex border-b border-zinc-300 py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="text-gray-700">Vijayathiraj S</span>
                  </li>
                  <li className="flex border-b border-zinc-300 py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="text-gray-700">
                      vijayathiraj99@gmail.com
                    </span>
                  </li>
                  <li className="flex border-b border-zinc-300 py-2">
                    <span className="font-bold w-24">Mobile:</span>
                    <span className="text-gray-700">8870762077</span>
                  </li>
                  <li className="flex border-b border-zinc-300 py-2">
                    <span className="font-bold w-24">Gender:</span>
                    <span className="text-gray-700">Male</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Birthday:</span>
                    <span className="text-gray-700">2 June, 2000</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-32">Total Experience:</span>
                    <span className="text-gray-700">3.2 Years</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-32">Current Location:</span>
                    <span className="text-gray-700">Chromepet, Chennai</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-32">Native Location:</span>
                    <span className="text-gray-700">
                      Srivilliputtur, Virudhunagar
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-32">Current CTC:</span>
                    <span className="text-gray-700">3.8 laks</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-32">Expected CTC:</span>
                    <span className="text-gray-700">above 6 laks</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-32">Languages:</span>
                    <span className="text-gray-700">English, Spanish</span>
                  </li>
                  <li className="flex items-center border-b py-2 space-x-2">
                    <span className="font-bold w-32">Elsewhere:</span>
                    <a href="#" title="Facebook">
                      <svg
                        className="w-5 h-5"
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 506.86 506.86"
                      >
                        <defs>
                          <style
                            dangerouslySetInnerHTML={{
                              __html: ".cls-1{fill:#1877f2;}.cls-2{fill:#fff;}",
                            }}
                          />
                        </defs>
                        <path
                          className="cls-1"
                          d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                        />
                        <path
                          className="cls-2"
                          d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                        />
                      </svg>
                    </a>
                    <a href="#" title="Twitter">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 333333 333333"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path
                          d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                          fill="#1da1f2"
                        />
                      </svg>
                    </a>
                    <a href="#" title="LinkedIn">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 333333 333333"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path
                          d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                          fill="#0077b5"
                        />
                      </svg>
                    </a>
                    <a href="#" title="Github">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={0}
                        height={0}
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 640 640"
                      >
                        <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                      </svg>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanResource;
