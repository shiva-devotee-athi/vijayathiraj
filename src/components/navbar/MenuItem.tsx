import React from "react";
import { motion } from "framer-motion";
import seal_png from "@/assets/images/icons/naruto_seal.png";
import seal_dark_png from "@/assets/images/icons/naruto_seal_dark.png";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => {
  //   const style = { color: `${colors[i]}` };
  const style = { color: `red` };
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="vj_pf_mobile_nav_bar_ul_li"
    >
      <button
        aria-label="naruto-seal-pointer"
        onClick={handleScroll}
        className="flex items-center gap-2 mb-2 cursor-pointer"
      >
        <div className="icon-placeholder" style={style}>
          {theme === "light" ? (
            <img
              src={seal_png}
              className="w-5 h-5 object-contain"
              alt="seal logo"
            />
          ) : (
            <img
              src={seal_dark_png}
              className="w-5 h-5 object-contain"
              alt="seal logo"
            />
          )}
        </div>

        <div className="text-placeholder dark:text-white/80 leading-4.5">
          {t(title)}
        </div>
      </button>
    </motion.li>
  );
};
