import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 10, label: "Awards" },
  { number: 12, label: "Complete Projects" },
  { number: 0, label: "Happy Customers" },
  { number: 0, label: "Cups of Coffee" },
];
const Statisticpage: React.FC = () => {
  // const count = useMotionValue(0);
  // const rounded = useTransform(count, Math.round);

  // useEffect(() => {
  //   statsNumber(50)
  // }, []);

  // const statsNumber = (count:number)=>{
  //   const animation = animate(count, 50, {
  //     duration: 2
  //   });
  // }

  return (
    <>
      <section
        className="relative z-[1] py-0 dark:bg-transparent vj-pf-counter img"
        id="section-counter"
      >
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-8 ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 flex justify-center counter-wrap"
              >
                <div className="block-18 dark:bg-[#191919] bg-amber-100 border-b-8  border-amber-500 dark:border-gray-500">
                  <div className="text text-center">
                    <strong className="number text-black dark:text-[#ffbd39]">
                      <motion.h1>{stat.number.toLocaleString()}</motion.h1>
                      {/* {stat.number.toLocaleString()} */}
                    </strong>
                    <span className="text-[#414141cc] dark:text-gray-200">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="vj-pf-section vj-pf-hireme img margin-top bg-cover bg-center">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full md:w-7/12 text-center">
              <h2>
                I'm <span className="text-amber-500">Available</span> for
                freelancing
              </h2>
              <p className="mb-6 text-white">
                Let's collaborate! I'm available for freelance projects and
                excited to contribute.
              </p>
              <p className="mb-0">
                <a
                  href="#contact-section"
                  className="btn bg-amber-600 text-white py-3 px-5 rounded-md hover:bg-amber-700 transition cursor-pointer"
                >
                  Contact Me
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statisticpage;
