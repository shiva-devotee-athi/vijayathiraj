import React, { useState } from "react";
import "@/styles/scss/homepage.scss";
import hero_img from "@/assets/images/hero/Tobi.png";

import { motion } from "framer-motion";
import clsx from "clsx";

const Heropage: React.FC = () => {
  const [isKamui, setIsKamui] = useState(false);
  const text =
    "Hello. my name is vijay athiraj. nice to meet you I would like to welcome you with my personal portfolio".split(
      " "
    );

  const handleIllusion = () => {
    setIsKamui(true);
    setTimeout(() => {
      setIsKamui(false);
    }, 4000);
  };

  const kamuiClassName = clsx(
    "max-w-screen-sm mx-auto absolute bottom-0 left-0 right-0 obito_uchicha_container",
    {
      "before:!block": isKamui,
      "before:!hidden": !isKamui,
    }
  );
  return (
    <section
      id="hero"
      className="relative vj-pf-hero-section w-full h-screen bg-white dark:bg-transparent overflow-hidden"
    >
      <div className="container">
        <div className="flex justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1.1, 1.2, 1],
              transition: {
                duration: 3,
                visualDuration: 1,
                ease: ["easeIn", "easeOut"],
              },
            }}
          >
            <h1 className="heading-name text-center text-amber-700 dark:text-[#ff9d23]">
              VIJAY ATHI RAJ
            </h1>
          </motion.div>
          <h1 className="heading-name"></h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 relative z-0  px-4 sm:px-0">
          <motion.span
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
              },
            }}
            animate={{
              y: ["0rem", "2rem", "0rem"],
            }}
          >
            <p className="text-gray-800 dark:text-black bg-[#fbe0d4] dark:bg-[#cb5000] p-4 rounded-lg text-lg font-semibold sm:text-lg lg:text-2xl after:bg-[#fbe0d4] dark:after:bg-[#cb5000] vj-pf-hero-thoughts">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i / 5,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>
            <div className="flex flex-col items-center">
              <span className="dash dash-1 bg-[#f9c2aa] dark:bg-[#cb6c2f]"></span>
              <span className="dash dash-2 bg-[#fba37c] dark:bg-[#cb7c49]"></span>
              <span className="dash dash-3 bg-[#f48b5c] dark:bg-[#c8865c]"></span>
            </div>
          </motion.span>
        </div>
        <div
          // className={`max-w-screen-sm mx-auto absolute bottom-0 left-0 right-0 obito_uchicha_container ${
          //   isKamui ? "before:!block" : "before:!hidden"
          // }`}
          className={kamuiClassName}
          // className="max-w-screen-sm mx-auto absolute bottom-0 left-0 right-0 "
        >
          <img
            src={hero_img}
            className="obito_uchicha"
            width="100%"
            alt="hero-img"
          />
        </div>
      </div>

      <div className="max-w-screen-sm absolute bottom-0 left-0 right-0 mx-auto flex justify-center">
        <label className="vj-pf-nav-switch">
          <input
            type="checkbox"
            className="vj-pf-nav-switch-chk"
            checked={isKamui}
            onChange={handleIllusion}
          />
          <span className="vj-pf-nav-switch-slider"></span>
        </label>
      </div>
      {/* <Samplepage/> */}
    </section>
  );
};

export default Heropage;
