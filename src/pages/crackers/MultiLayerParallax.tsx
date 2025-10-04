import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const fontSize = useTransform(scrollYProgress, [0, 1], ["6em", "3.5em"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY,fontSize }}
        className="font-bold text-white text-7xl md:text-9xl relative z-1"
      >
        PARALLAX
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/vijayathiraj/images/cover/image-full.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/vijayathiraj/images/cover/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
