'use client';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { socialIcons } from "@/data/navigation";
import Image from "next/image";

export default function NewHeroPage() {
  const ref = useRef(null);
  const { t } = useTranslation();

  const images = [
    "/images/hero/Obito-Piece-94.webp",
    "/images/hero/Obito-Piece-74.webp",
    "/images/hero/Obito-Piece-64.webp",
    "/images/hero/Obito-Piece-84.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Carousel Logic: 5-second interval with pause capability
  useEffect(() => {
    if (isPaused) return;

    const duration = 10000; // 10 seconds
    const intervalTime = 100; // Update every 50ms for smooth progress
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Apply easing to make motion smoother
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  // Parallax effects
  const slideUP = useTransform(smoothProgress, [0, 1], ["0%", "-150%"]);
  const slideDown = useTransform(smoothProgress, [0, 1], ["0%", "150%"]);

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideUpAndFade: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="hero"
      ref={ref}
      className="w-full overflow-hidden relative grid place-items-center container h-[100svh] min-h-[530px] "
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
        {/* Mobile Title Section */}
        <div className="justify-between order-2 md:order-1 items-center flex md:hidden">
          <div className="flex flex-col justify-center items-center w-full">
            <motion.h1
              className="banner-title slide-up-and-fade leading-[.95] mt-0 my-3 text-2xl xs:text-3xl font-anton"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              <span className="text-primary font-bold text-amber-700 dark:text-amber-500">
                {t("FULL STACK")}
              </span>{" "}
              <span className="font-bold">{t("Developer")}</span>
              <br />
            </motion.h1>
            <motion.p
              className="banner-description slide-up-and-fade mt-0 my-3 text-sm text-center text-muted-foreground"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              {t('Driven by Logic. Defined by Adaptability.')}
            </motion.p>
            <motion.p
              className="banner-description slide-up-and-fade mt-0 my-3 text-xs text-center text-muted-foreground"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              {t("Hi! I'm")}{" "}
              <span className="font-medium text-amber-700 dark:text-amber-500">Vijay Athiraj</span>
              .{" "}
              {t(
                "a developer who thrives where design meets data. After years of perfecting the Frontend, I stepped into the Backend trenches to ensure seamless system continuity. Today, I leverage a deep stack including Node.js, Sequelize, and Cloud Infrastructure to build applications that are as powerful on the inside as they are beautiful on the outside."
              )}
            </motion.p>
          </div>
        </div>

        {/* Desktop Title Section */}
        <div className="max-md:pb-10 order-2 md:order-1 justify-between items-center max-md:flex-col hidden md:flex">
          <div className="max-md:grow max-md:flex flex-col justify-center items-start me-auto max-w-[544px]">
            <motion.h1
              className="banner-title slide-up-and-fade leading-[.95] text-5xl lg:text-[70px] font-anton"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              <span className="text-primary font-bold text-amber-700 dark:text-amber-500">
                {t("FULL STACK")}
              </span>
              <br />
              <span className="ml-4 font-bold">{t("DEVELOPER")}</span>
              <br />
            </motion.h1>
            <motion.p
              className="banner-description slide-up-and-fade mt-4 text-xl text-muted-foreground"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              {t('Driven by Logic. Defined by Adaptability.')}
            </motion.p>
            <motion.p
              className="banner-description slide-up-and-fade mt-4 text-base text-muted-foreground"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              {t("Hi! I'm")}{" "}
              <span className="font-medium text-amber-700 dark:text-amber-500">
                Vijay Athiraj.{" "}
              </span>
              {t(
                "a developer who thrives where design meets data. After years of perfecting the Frontend, I stepped into the Backend trenches to ensure seamless system continuity. Today, I leverage a deep stack including Node.js, Sequelize, and Cloud Infrastructure to build applications that are as powerful on the inside as they are beautiful on the outside."
              )}
            </motion.p>

            <div className="flex space-x-4 mt-9 vj-pf-social-icons">
              {socialIcons.map(({ href, icon, ariaLabel }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  aria-label={ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Framer Motion Carousel Section */}
        <div className="w-full order-1 md:order-2 justify-center flex items-center relative py-10">
          <div
            className="w-full relative h-[45vh] md:h-[60vh] cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Hero Piece ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Custom Progress Bar */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[40%] h-[3px] bg-white/10 rounded-full overflow-hidden z-10">
              <motion.div
                className="h-full bg-amber-700 dark:bg-amber-500 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
