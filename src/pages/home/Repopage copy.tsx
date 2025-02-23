import React from "react";

const repoDetails = [
  {
    date: "2014-2015",
    title: "VIJAY-MERN-project",
    position: "Cambridge University",
    type: "PERSONAL",
    description:
      "I'm excited to introduce my MERN project, a web application that combines the power of MongoDB, Express.js, React, and Node.js to create a seamless user experience. This project focuses on two essential aspects: User Authentication, Profile Page Management with File System",
  },
  {
    date: "2014-2015",
    title: "React JS Food Order UI",
    position: "Cambridge University",
    type: "PERSONAL",
    description:
      "Introducing my Food Order UI Page React repository - a sleek and interactive user interface for ordering delicious meals. Explore a responsive design, seamless navigation, and a delightful ordering experience.",
  },
  {
    date: "2014-2015",
    title: "Shri-chat",
    position: "Cambridge University",
    type: "PERSONAL",
    description:
      "Discover my Chatting Application built with React.js and Firebase integration, featuring Google login for quick access. Connect with others effortlessly through five default chat groups, fostering real-time conversations and connections. Join the conversation now!",
  },
  {
    date: "2014-2015",
    title: "VJ-Shri-mens-Wear-cart",
    position: "Cambridge University",
    type: "PERSONAL",
    description:
      "Discover my Men's Cart Purchase Web Application, crafted with HTML, CSS, and JavaScript. It's a valuable resource for learning and practicing essential JavaScript functions while simulating a seamless shopping experience. Dive into coding and shopping simultaneously!",
  },
  {
    date: "2017-2018",
    title: "Responsive Design",
    position: "Cambridge University",
    type: "PERSONAL",
    description:
      "An emphasis on cutting-edge design and modern usability standards",
  },
];

const Repopage: React.FC = () => {
  return (
    <section
      id="projects-section"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-section"
    >
      <div className="container">
        <div className="heading-section mb-12 text-center">
          <h1 className="big big-2 text-black/20 dark:text-white/10">Repos</h1>
          <h2 className="mb-4 text-black dark:text-white">Repositories</h2>
          <p className="text-gray-600 dark:text-white/45 mt-4">
            Here, you can explore the various projects and code repositories
            I've been working on. As a passionate developer, I'm constantly
            striving to learn and create new software solutions. Feel free to
            browse through my repositories and provide feedback or even
            collaborate if you find something interesting.
          </p>
        </div>

        {/* Left Column */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {repoDetails.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1d1e22] p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mt-2">
                  {item.title}
                </h2>
                <span className="block text-gray-600 dark:text-gray-50 mt-2">
                  <button
                    type="button"
                    className="px-3 py-1 text-xs font-medium text-center inline-flex items-center text-blue-500 bg-blue-100 rounded-lg  focus:ring-0 focus:outline-none  dark:text-blue-100 dark:bg-blue-800 "
                  >
                    {/* w-3 h-3 text-white me-2 */}
                    Personal
                  </button>
                </span>
                <p className="mt-2 text-gray-600 dark:text-gray-50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repopage;
