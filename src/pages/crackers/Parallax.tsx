import { useRef } from "react";
import "./parallax.scss";
import "@/styles/scss/homepage.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="Portfolio"
      className="h-screen w-screen overflow-hidden hero"
      //   style={{ scrollSnapAlign: "center" }}
    >
      <div
        className="parallax"
        ref={ref}
        style={{
          background:
            type === "services"
              ? "linear-gradient(180deg, #111132, #0c0c1d)"
              : "linear-gradient(180deg, #111132, #505064)",
        }}
      >
        {/* <motion.h1 >
          {type === "services" ? "What We Do?" : "What We Did?"}
        </motion.h1> */}
        <div className="flex justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1.1, 1.2, 1],
              transition: {
                duration: 3,
                visualDuration: 1,
                ease: ["easeIn", "easeOut"],
              },
            }}
            style={{ y: yText }}
          >
            <h1 className="heading-name text-center text-amber-700 dark:text-[#ff9d23]">
              VIJAY ATHI RAJ
            </h1>
          </motion.div>
          <h1 className="heading-name"></h1>
        </div>
        <motion.div className="mountains"></motion.div>
        <motion.div
          className="planets"
          style={{
            y: yBg,
            backgroundImage: `url(${
              type === "services" ? "/planets.png" : "/sun.png"
            })`,
          }}
        ></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    </section>
  );
};

export default Parallax;
