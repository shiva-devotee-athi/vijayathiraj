import React from "react";
import Experience from "../experience/Experience";

const WorkExperiencepage: React.FC = () => {
  return (
    <section
      id="projects-section"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-section"
    >
      <div className="container">
        <div className="heading-section mb-12 text-center">
          <h1 className="big big-2 text-black/20 dark:text-white/10">Work</h1>
          <h2 className="mb-4 text-black dark:text-white">Experience</h2>
          <p className="text-gray-600 dark:text-white/45 mt-4">
            Throughout my career, I've had the privilege of working with two
            outstanding companies, each contributing to my growth and expertise
            in different ways. Here's a glimpse into my journey with these
            organizations:
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default WorkExperiencepage;
