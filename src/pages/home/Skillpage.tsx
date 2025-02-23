import React, { CSSProperties } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import html_logo from "@/assets/images/skills/html.svg";
import css_logo from "@/assets/images/skills/css3.svg";
import js_logo from "@/assets/images/skills/javascript.svg";
import react_js_logo from "@/assets/images/skills/react-js.svg";
import next_js_logo from "@/assets/images/skills/next-js.svg";
import electron_js_logo from "@/assets/images/skills/electron-js.svg";
import useDarkMode from "@/hooks/useDarkMode";
import { motion } from "framer-motion";

const skillCards = [
  {
    title: "HTML",
    name: "HTML",
    bgColor: "#381506",
    color: "#ef6428",
    image: html_logo,
    star: 4.5,
  },
  {
    title: "CSS",
    name: "CSS",
    bgColor: "#040d31",
    color: "#264de4",
    image: css_logo,
    star: 4.5,
  },
  {
    title: "Java Script",
    name: "JS",
    bgColor: "#2d2804",
    color: "#f0db4f",
    image: js_logo,
    star: 4.0,
  },
  {
    title: "React JS",
    name: "REACT",
    bgColor: "#052b35",
    color: "#60dafa",
    image: react_js_logo,
    star: 4.0,
  },
  {
    title: "NEXT JS",
    name: "NEXT",
    bgColor: "#3f2109",
    color: "#e67113",
    image: next_js_logo,
    star: 3.5,
  },
  {
    title: "React Native",
    name: "NATIVE",
    bgColor: "#052b35",
    color: "#60dafa",
    image: react_js_logo,
    star: 3.5,
  },
  {
    title: "Electron JS",
    name: "ELECTRON",
    bgColor: "#052b35",
    color: "#60dafa",
    image: electron_js_logo,
    star: 2.0,
  },
];

const Skillpage: React.FC = () => {
  const [theme] = useDarkMode();

  const generateStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <BsStarFill key={`full-${index}`} className="text-warning me-1" />
        ))}
        {halfStar && <BsStarHalf className="text-warning me-1" />}
        {[...Array(emptyStars)].map((_, index) => (
          <BsStar key={`empty-${index}`} className="text-secondary" />
        ))}
      </>
    );
  };

  return (
    <section
      id="skills-section"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-section"
    >
      <div className="container">
        <div className="heading-section mb-8 text-center">
          <h1 className="big big-2 text-black/20 dark:text-white/10">Skills</h1>
          <h2 className="mb-4 text-black dark:text-white">Talents</h2>
          <p className="text-gray-600 mt-4">
            In my journey toward independence and self-reliance, I'm
            continuously developing a range of practical skills. The progress
            bars below represent my current self-assessment, which is subjective
            and subject to change as I learn and grow. Remember, skill
            development is a lifelong process, and I'm committed to deepening my
            understanding through ongoing learning and real-world experience.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 mb-6">
          <p className="text-black dark:text-white/70 text-2xl font-bold">One of My Fav Quote</p>
          <div>
            <p className="text-gray-600">
              <strong className="text-gray-600 dark:text-white/50">Tamil Quote:</strong> <span className="text-amber-700 dark:text-amber-500 italic tamil-skill-quote text-base lg:text-lg ms-2 w-full">கற்றது கைமண் அளவு, கல்லாதது உலகளவு.</span> 
            </p>
            <p className="text-gray-600 dark:text-white/50">
              <strong>Translation:</strong> What you have learned is but a
              handful of sand; what you have not learned is the size of the
              world.
            </p>
          </div>
        </div>

        {/* Left Column */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 overflow-x-hidden">
            {skillCards.map(
              ({ name, title, bgColor, color, image, star }, index) => {
                const CSSstyle = {
                  "--before-bg-color": theme === "light" ? color : "#717171",
                  background: theme === "light" ? bgColor : "#232323",
                } as CSSProperties;
                return (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    variants={{
                      visible: (i) => ({
                        opacity: 1,
                        translateX: 0,
                        transition: { delay: i * 0.2 },
                      }),
                      hidden: { opacity: 0, translateX: 250 },
                    }}
                    key={index}
                  >
                    <div
                      className="vj-pf-skill-card"
                      data-skill={name}
                      data-color={color}
                      style={CSSstyle}
                    >
                      <div className="imgBx">
                        <img src={image} alt="nike-air-shoe" />
                      </div>
                      <div className="contentBx">
                        <h2>{title}</h2>

                        <div className="size">
                          <h3>Rating :</h3>
                          <div className="flex text-yellow-400">
                            {generateStars(star)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillpage;
