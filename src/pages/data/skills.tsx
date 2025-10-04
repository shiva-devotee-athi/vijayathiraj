import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiLighthouse,
  SiHackthebox,
  SiCss,
  SiCpanel,
  SiRender,
} from "@icons-pack/react-simple-icons";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

import html_logo from "@/assets/images/skills/html.svg";
import css_logo from "@/assets/images/skills/css3.svg";
import js_logo from "@/assets/images/skills/javascript.svg";
import react_js_logo from "@/assets/images/skills/react-js.svg";
import next_js_logo from "@/assets/images/skills/next-js.svg";
import electron_js_logo from "@/assets/images/skills/electron-js.svg";

export const myskills = [
  {
    title: "Frontend",
    description: "Building responsive and dynamic user interfaces",
    skills: [
      { title: "HTML5", icon: <SiHtml5 className="size-4 text-[#E34F26]" /> },
      { title: "CSS3", icon: <SiCss className="size-4 text-[#1572B6]" /> },
      {
        title: "JavaScript",
        icon: <SiJavascript className="size-4 text-[#F7DF1E]" />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript className="size-4 text-[#3178C6]" />,
      },
      {
        title: "React.js",
        icon: <SiReact className="size-4 text-[#61DAFB]" />,
      },
      {
        title: "Next.js",
        icon: <SiNextdotjs className="size-4 text-[#000000]" />,
      },
      { title: "Redux", icon: <SiRedux className="size-4 text-[#764ABC]" /> },
      {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="size-4 text-[#06B6D4]" />,
      },
      {
        title: "Framer Motion",
        icon: <SiFramer className="size-4 text-[#0055FF]" />,
      },
    ],
  },
  {
    title: "Backend",
    description: "Creating robust APIs and server-side applications",
    skills: [
      {
        title: "Node.js",
        icon: <SiNodedotjs className="size-4 text-[#339933]" />,
      },
      {
        title: "Express.js",
        icon: <SiExpress className="size-4 text-[#000000]" />,
      },
      {
        title: "JWT",
        icon: <SiJsonwebtokens className="size-4 text-[#F7DF1E]" />,
      },
    ],
  },
  {
    title: "Database",
    description: "Managing and designing efficient data storage solutions",
    skills: [
      {
        title: "MongoDB",
        icon: <SiMongodb className="size-4 text-[#47A248]" />,
      },
      {
        title: "Mongoose",
        icon: <SiMongoose className="size-4 text-[#880000]" />,
      },
    ],
  },
  {
    title: "DevOps",
    description: "Deployment, CI/CD, and server management",
    skills: [
      { title: "Git", icon: <SiGit className="size-4 text-[#F05032]" /> },
      { title: "GitHub", icon: <SiGithub className="size-4 text-[#ab01ab]" /> },
      { title: "Cpanel", icon: <SiCpanel className="size-4 text-[#E34F26]" /> },
      { title: "Render", icon: <SiRender className="size-4 text-[#000000]" /> },
      {
        title: "Postman",
        icon: <SiPostman className="size-4 text-[#E34F26]" />,
      },
    ],
  },
  {
    title: "Fundamentals",
    description: "Core web development concepts and best practices",
    skills: [
      {
        title: "Responsive Design",
        icon: <FaMobileAlt className="size-4 text-blue-500" />,
      }, // Placeholder, no official icon
      {
        title: "Cross-browser Compatibility",
        icon: <FaGlobe className="size-4 text-green-500" />,
      },
      {
        title: "Performance Optimization",
        icon: <SiLighthouse className="size-4 text-red-500" />,
      },
      {
        title: "Component-Driven Architecture",
        icon: <SiHackthebox className="size-4 text-pink-500" />,
      },
    ],
  },
];

export const skillCards = [
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
