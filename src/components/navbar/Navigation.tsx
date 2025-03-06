import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const headerLinks = [
  { href: "#home-section", title: "Home" },
  { href: "#about-section", title: "About" },
  { href: "#skills-section", title: "Skills" },
  { href: "#resume-section", title: "Resume" },
  { href: "#projects-section", title: "Projects" },
  { href: "#contact-section", title: "Contact" },
];

export const Navigation = () => (
  <motion.ul variants={variants} className="vj_pf_mobile_nav_bar_ul">
    {headerLinks.map((item,index) => (
      <MenuItem title={item.title} href={item.href} key={index} />
    ))}
  </motion.ul>
);
