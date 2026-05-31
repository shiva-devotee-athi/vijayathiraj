interface Experience {
  company: string;
  role: string;
  from: Date;
  to: Date;
}

export const experience = [
  {
    company: "Infoapto Technologies",
    role: "Full Stack Developer",
    from: new Date("Sep 2023"),
    to: new Date(),
  },
  {
    company: "RAMSOL PVT LTD",
    role: "Consultant Front-end Dev",
    from: new Date("Feb 2023"),
    to: new Date("Aug 2023"),
  },
  {
    company: "Azure Soft Tech Solutions",
    role: "Software Associate",
    from: new Date("Jul 2022"),
    to: new Date("Jan 2023"),
  },
];

export const education = [
  {
    date: "2020-2022",
    title: "Master Degree in Mathematics",
    score: "Coursework",
    scoreType: "Completed",
  },
  {
    date: "2017-2020",
    title: "Bachelor's Degree in Mathematics",
    score: "7.29",
    scoreType: "CGPA",
  },
  {
    date: "2010-2017",
    title: "High school education (TN)",
    score: "79.42",
    scoreType: "%",
  },
];

export const getExperienceDuration = (from: Date, to: Date = new Date()) => {
  let totalMonths =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth()) +
    1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} Year${years > 1 ? "s" : ""}`);
  }

  if (months > 0) {
    parts.push(`${months} Month${months > 1 ? "s" : ""}`);
  }

  return parts.join(" ") || "0 Months";
};

export const getTotalExperience = () => {
  let totalMonths = 0;

  experience.forEach(({ from, to }) => {
    const months =
      (to.getFullYear() - from.getFullYear()) * 12 +
      (to.getMonth() - from.getMonth()) +
      1; // Inclusive month count

    totalMonths += months;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return {
    year: years,
    month: months,
    decimal: Number((totalMonths / 12).toFixed(1)),
  };
};

export const sortedExperience = [...experience].sort((a, b) => {
  const dateA = a.to ?? new Date();
  const dateB = b.to ?? new Date();

  return dateB.getTime() - dateA.getTime();
});

const exp = getTotalExperience();

export const personalInfo = [
  { title: "Full name", value: "Vijayathiraj S" },
  { title: "Email", value: "vijayathiraj99@gmail.com" },
  { title: "Mobile", value: "8870762077" },
  { title: "Gender", value: "Male" },
  { title: "Birthday", value: "2 June, 2000" },
  { title: "Total Experience", value: `${exp.year} Years ${exp.month} Months` },
  { title: "Current Location", value: "Guindy, Chennai" },
  { title: "Native Location", value: "Srivilliputtur, Virudhunagar" },
  { title: "Current CTC", value: "4.44 LPA" },
  { title: "Expected CTC", value: "above 9 LPA" },
  { title: "Languages", value: "English, Tamil" },
];
export const skillTags = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  // "React Native*",
  // "Electron.js*",
  "Redux",
  "Tailwind CSS",
  "Framer Motion",
  "Jest*",
  "Node.js",
  "Nest.js",
  "Express.js",
  "JWT",
  "MongoDB",
  "Mongoose",
  "Postgres SQL",
  "Sequelize ORM",
  "Git",
  "GitHub",
  "Docker*",
  "AWS (EC2/S3/RDS)",
  "Postman",
  "Cpanel",
  // "Render",
  "Apache Config",
  "Responsive Design",
  "Cross-browser Compatibility",
  "Performance Optimization",
  "Architecture",
  "Ubuntu",
  "Windows",
];
