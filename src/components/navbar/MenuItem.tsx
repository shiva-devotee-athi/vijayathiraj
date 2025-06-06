import React from "react";
import { motion } from "framer-motion";
import seal_png from "@/assets/images/icons/naruto_seal.png";
import seal_dark_png from "@/assets/images/icons/naruto_seal_dark.png";
import { useTheme } from "@/context/ThemeContext";

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

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="vj_pf_mobile_nav_bar_ul_li"
    >
      <a aria-label="naruto-seal-pointer" href={href} className="flex items-center gap-2 mb-2">
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

        <div className="text-placeholder dark:text-white/80">{title}</div>
      </a>
    </motion.li>
  );
};
