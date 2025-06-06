import React from "react";
import Educationpage from "./Educationpage";
import { motion } from "framer-motion";
import sampleResumeFile from "@/assets/files/resume_sample.pdf";

const Resumepage: React.FC = () => {
  return (
    <section
      id="resume-section"
      className="py-16 bg-gray-100 dark:bg-transparent vj-pf-section"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 250 },
          }}
        >
          <div className="heading-section mb-12 text-center">
            <h1 className="big big-2 text-[#575757] dark:text-[#A6A6A6]">
              Resume
            </h1>
            <h2 className="mb-4 text-black dark:text-white relative z-1">Resume</h2>
            <p className="text-gray-600 dark:text-white/45 mt-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <div>
            <Educationpage />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 80 },
          }}
        >
          <div className="flex justify-center mt-12">
            <a
              aria-label="Download Resume"
              href={sampleResumeFile}
              target="_blank"
              download={true}
              className="btn-main bg-btn2 lnk py-4 px-8 rounded-full"
            >
              Download CV
              <i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resumepage;
