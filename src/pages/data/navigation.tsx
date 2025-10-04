import {
  SiInstagram,
  SiFacebook,
  SiGithub,
  SiX,
} from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa6";

export const headerLinks = [
  { href: "#hero", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#skills", title: "Skills" },
  { href: "#education", title: "Education" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

export const footerLinks = [
  { href: "#about", title: "About" },
  { href: "#skills", title: "Skills" },
  { href: "#education", title: "Education" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

export const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "Japanese", value: "ja" },
  // { label: "Tamil", value: "tn" },
];

export const socialIcons = [
  {
    href: "https://www.facebook.com/athi.vignesh.58/",
    icon: <SiFacebook />,
    ariaLabel: "Facebook Profile",
    color: "#1877F2", // Facebook Blue
  },
  {
    href: "https://www.instagram.com/shiva_devotee_athi",
    icon: <SiInstagram />,
    ariaLabel: "Instagram Profile",

    color: "#E4405F", // Instagram Pink
  },
  {
    href: "https://github.com/shiva-devotee-athi",
    icon: <SiGithub />,
    ariaLabel: "Github Profile",

    color: "#000000", // GitHub Black
  },
  {
    href: "https://www.linkedin.com/mwlite/in/vijayathiraj-s-519966210",
    icon: <FaLinkedinIn />,
    ariaLabel: "Linkedin Profile",

    color: "#000000", // GitHub Black
  },
  {
    href: "https://twitter.com/shiva_devotee",
    icon: <SiX />,
    ariaLabel: "X Profile",
    color: "#1DA1F2", // X Blue
  },
];
