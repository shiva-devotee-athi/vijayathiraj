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
  SiDocker,
  SiUbuntu,
  SiApache,
  SiElectron,
  SiJest,
  SiNestjs,
  SiPostgresql,
  SiSequelize,
} from "@icons-pack/react-simple-icons";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

import { ViWindowsIcon, ViAWSIcon } from "@/assets/icons/skill-icons";


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
      {
        title: "React Native*",
        icon: <SiReact className="size-4 text-[#61DAFB]" />,
      },
      {
        title: "Electron.js*",
        icon: <SiElectron className="size-4 text-[#47848F]" />,
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
      { title: "Jest*", icon: <SiJest className="size-4 text-[#C21325]" /> },
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
        title: "Nest.js",
        icon: <SiNestjs className="size-4 text-[#E0234E]" />,
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
      {
        title: "Postgres SQL",
        icon: <SiPostgresql className="size-4 text-[#4169E1]" />,
      },
      {
        title: "Sequelize ORM",
        icon: <SiSequelize className="size-4 text-[#52B0E7]" />,
      },
    ],
  },
  {
    title: "DevOps",
    description: "Deployment, CI/CD, and server management",
    skills: [
      { title: "Git", icon: <SiGit className="size-4 text-[#F05032]" /> },
      { title: "GitHub", icon: <SiGithub className="size-4 text-[#181717]" /> },
      {
        title: "Docker*",
        icon: <SiDocker className="size-4 text-[#2496ED]" />,
      },
      {
        title: "AWS (EC2/S3/RDS)",
        icon: <ViAWSIcon className="size-4 text-[#FF9900]" />,
      },
      {
        title: "Postman",
        icon: <SiPostman className="size-4 text-[#FF6C37]" />,
      },
      { title: "Cpanel", icon: <SiCpanel className="size-4 text-[#FF6C2C]" /> },
      { title: "Render", icon: <SiRender className="size-4 text-[#000000]" /> },
      {
        title: "Apache Config",
        icon: <SiApache className="size-4 text-[#D22128]" />,
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
        title: "Architecture",
        icon: <SiHackthebox className="size-4 text-pink-500" />,
      },
      { title: "Ubuntu", icon: <SiUbuntu className="size-4 text-[#E95420]" /> },
      {
        title: "Windows",
        icon: <ViWindowsIcon className="size-4 text-[#0078D6]" />,
      },
    ],
  },
];

