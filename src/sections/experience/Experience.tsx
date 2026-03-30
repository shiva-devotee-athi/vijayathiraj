import React from "react";
import "@/styles/scss/auth.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { workExperience } from "@/data/information";

const Experience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="timeline overflow-x-hidden">
      <div className="outer">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          variants={{
            visible: (i) => ({
              opacity: 1,
              translateX: 0,
              transition: { delay: i * 0.2 },
            }),
            hidden: { opacity: 0, translateX: 100 },
          }}
          className="vj-pf-exp-card before:text-amber-700 dark:before:text-amber-500"
        >
          <div className="exp-info bg-gray-200 dark:bg-zinc-800 border border-[#c5c5c5] dark:border-zinc-600">
            <h3 className="title next-company-icon text-amber-700 dark:text-amber-500 font-bold">
              {workExperience[0].company}
            </h3>
            <h4 className="text-left font-medium text-gray-900 text-sm dark:text-zinc-300">
              {workExperience[0].role}
            </h4>
            <h5 className="text-left font-normal text-sm text-gray-900 text-base dark:text-zinc-300">
              {workExperience[0].duration}
            </h5>
            <h6 className="text-left font-normal text-sm text-gray-900 text-base dark:text-zinc-300">
              {workExperience[0].experience}
            </h6>
            <p className="text-justify text-zinc-700 dark:text-zinc-400">
              {workExperience[0].description}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          variants={{
            visible: (i) => ({
              opacity: 1,
              translateX: 0,
              transition: { delay: i * 0.2 },
            }),
            hidden: { opacity: 0, translateX: -100 },
          }}
          className="vj-pf-exp-card before:text-amber-700 dark:before:text-amber-500"
        >
          <div className="exp-info bg-gray-200 dark:bg-zinc-800 border border-[#c5c5c5] dark:border-zinc-600">
            <h3 className="title infoapto-icon text-amber-700 dark:text-amber-500 font-bold">
              {workExperience[1].company}
            </h3>
            <h4 className="text-right font-medium text-gray-900 text-sm dark:text-zinc-300">
              {workExperience[1].role}
            </h4>
            <h5 className="text-right font-normal text-sm text-gray-900 text-base dark:text-zinc-300">
              {workExperience[1].duration}
            </h5>
            <h6 className="text-right font-normal text-sm text-gray-900 text-base dark:text-zinc-300">
              {workExperience[1].experience}
            </h6>
            <p className="text-justify text-zinc-700 dark:text-zinc-400">
              {workExperience[1].description}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          variants={{
            visible: (i) => ({
              opacity: 1,
              translateX: 0,
              transition: { delay: i * 0.2 },
            }),
            hidden: { opacity: 0, translateX: 100 },
          }}
          className="vj-pf-exp-card before:text-amber-700 dark:before:text-amber-500"
        >
          <div className="exp-info bg-gray-200 dark:bg-zinc-800 border border-[#c5c5c5] dark:border-zinc-600">
            <h3 className="title ramsol-icon text-amber-700 dark:text-amber-500 font-bold">
              {workExperience[2].company}
            </h3>
            <h4 className="text-left font-medium text-gray-900 text-sm dark:text-zinc-300">
              {workExperience[2].role}
            </h4>
            <h5 className="text-left font-normal text-sm text-gray-900 text-base dark:text-zinc-300">
              {workExperience[2].duration}
            </h5>
            <h6 className="text-left font-normal text-sm text-gray-900 text-base dark:text-zinc-300">
              {workExperience[2].experience}
            </h6>
            <p className="text-justify text-zinc-700 dark:text-zinc-400">
              {
                workExperience[2].description
              }
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          variants={{
            visible: (i) => ({
              opacity: 1,
              translateX: 0,
              transition: { delay: i * 0.2 },
            }),
            hidden: { opacity: 0, translateX: -100 },
          }}
          className="vj-pf-exp-card before:text-amber-700 dark:before:text-amber-500"
        >
          <div className="exp-info bg-gray-200 dark:bg-zinc-800 border border-[#c5c5c5] dark:border-zinc-600">
            <h3 className="title text-base azure-icon text-amber-700 dark:text-amber-500 font-bold">
              {workExperience[3].company}
            </h3>
            <h4 className="text-right font-medium text-gray-900 text-base dark:text-zinc-300">
              {workExperience[3].role}
            </h4>
            <h5 className="text-right font-normal text-sm text-gray-900 text-base dark:text-zinc-300">
              {workExperience[3].duration}
            </h5>
            <h6 className="text-right font-normal text-sm text-gray-900 text-base dark:text-zinc-300">
              {workExperience[3].experience}
            </h6>
            <p className="text-justify text-base text-zinc-700 dark:text-zinc-400">
              {workExperience[3].description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
