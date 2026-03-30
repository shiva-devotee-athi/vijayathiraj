import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { motion, type Variants } from "framer-motion";
import HeroInfo from "./HeroInfo";
import {
  education,
  experience,
  personalInfo,
  skillTags,
} from "@/data/humanResource";
import { TOTAL_YEARS_OF_EXPERIENCE } from "@/data/information";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const slideUpAndFade: Variants = {
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
      <HeroInfo title="Human Resource" href="/info/human-resource" />
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
                className={`h-[140px] ${theme === "light"
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
                  <Image
                    width={100}
                    height={100}
                    alt="personal-dp"
                    src={"/images/personal/personal-dp.webp"}
                    className="w-full h-full rounded-full object-center object-cover"
                  />
                </div>
                <div className="">
                  <h3
                    className={`text-xl w-fit relative font-bold leading-6 hover:underline cursor-pointer ${copied?.field === "intro-name"
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
                    className={`text-sm py-1 w-fit hover:underline cursor-pointer ${copied?.field === "intro-email"
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
                    className={`text-sm pb-1 w-fit hover:underline cursor-pointer ${copied?.field === "intro-mobile"
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
                      className={`rounded-sm px-3 py-1 text-xs font-medium hover:underline cursor-pointer ${copied?.index === index &&
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
                          className={`text-sm font-bold hover:underline cursor-pointer ${copied?.index === index &&
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
                          className={`text-xs hover:underline cursor-pointer ${copied?.index === index &&
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
                          className={`text-xs ms-1 hover:underline cursor-pointer ${copied?.index === index &&
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
                          className={`hover:underline cursor-pointer ${copied?.index === index &&
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
                          className={`text-sm hover:underline cursor-pointer ${copied?.index === index &&
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
                            className={`hover:underline cursor-pointer ${copied?.index === index &&
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
                            className={`hover:underline cursor-pointer ${copied?.index === index &&
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
                        className={`ms-1 hover:underline cursor-pointer ${copied?.index === index &&
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanResource;
