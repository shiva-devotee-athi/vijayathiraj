import React from "react";
import { projects } from "@/pages/data/information";


const Repopage: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-bottom-section"
    >
      <div className="container">
        <div className="heading-section mb-12 text-center">
          <h1 className="big big-2 text-[#575757] dark:text-[#A6A6A6]">Repos</h1>
          <h2 className="mb-4 text-black dark:text-white relative z-1">Repositories</h2>
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
            {projects.map((item, index) => (
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
