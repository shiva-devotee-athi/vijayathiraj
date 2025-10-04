import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import obitoPiece1 from "@/assets/images/hero/Obito-Piece-1.webp";
import obitoPiece2 from "@/assets/images/hero/Obito-Piece-2.webp";
import obitoPiece3 from "@/assets/images/hero/Obito-Piece-3.webp";
import { useTranslation } from "react-i18next";
import { socialIcons } from "../data/navigation";

export default function NewHeroPage() {
  const ref = useRef(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  // const fontSize = useTransform(scrollYProgress, [0, 1], ["6em", "3.5em"]);
  const slideUP = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const slideDown = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  const slideUpAndFade = {
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
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="justify-between items-center flex md:hidden">
          <div className="flex flex-col justify-center items-center w-full">
            <motion.h1
              className="banner-title slide-up-and-fade leading-[.95] text-2xl xs:text-3xl font-anton"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              <span className="text-primary font-bold text-amber-700 dark:text-amber-500">
                {t("Frontend")}
              </span>{" "}
              <span className="font-bold">{t("Developer")}</span>
              <br />
            </motion.h1>
            <motion.p
              className="banner-description slide-up-and-fade my-3 text-sm text-center text-muted-foreground"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              {t("Hi! I'm")}{" "}
              <span className="font-medium text-foreground">Vijay Athiraj</span>
              .{" "}
              {t(
                "A creative Frontend Developer with 3.2+ years of experience in building high-performance, scalable, and responsive web solutions"
              )}
              .
            </motion.p>
          </div>
        </div>

        <div className="max-md:pb-10 justify-between items-center max-md:flex-col hidden md:flex">
          <div className="max-md:grow max-md:flex flex-col justify-center items-start me-auto max-w-[544px]">
            <motion.h1
              className="banner-title slide-up-and-fade leading-[.95] text-6xl lg:text-[80px] font-anton"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              <span className="text-primary font-bold text-amber-700 dark:text-amber-500">
                {t('FRONTEND')}
              </span>
              <br />
              <span className="ml-4 font-bold">{t('DEVELOPER')}</span>
              <br />
            </motion.h1>
            <motion.p
              className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground"
              variants={slideUpAndFade}
              initial="hidden"
              animate="visible"
            >
              {t("Hi! I'm")}{" "}
              <span className="font-medium text-foreground">Vijay Athiraj.{" "}</span>
              {t("A creative Frontend Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions")}.
            </motion.p>
            
            <div className="flex space-x-4 mt-9 vj-pf-social-icons">
              {socialIcons.map(({ href, icon, ariaLabel}, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full justify-center flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: -350 },
            }}
            style={{ translateY: slideUP }}
          >
            <img
              src={obitoPiece1}
              className="w-full max-h-[45vh] md:max-h-[60vh]"
              width="100%"
              loading="eager"
              alt="Digital artwork of Obito from Naruto Piece 1"
            />
          </motion.div>
          <div className="flex flex-row items-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5,
              }}
              variants={{
                visible: { opacity: 1, translateX: 0 },
                hidden: { opacity: 0, translateX: -10 },
              }}
            >
              <img
                src={obitoPiece2}
                className="w-full h-[55vh] md:h-[70vh] object-cover"
                width="100%"
                alt="Digital artwork of Obito from Naruto Piece 2"
                loading="eager"
                // srcSet="
                //   /vijayathiraj/assets/Obito-Piece-2-480w.webp 480w,
                //   /vijayathiraj/assets/Obito-Piece-2-768w.webp 768w,
                //   /vijayathiraj/assets/Obito-Piece-2-1280w.webp 1280w
                // "
                // sizes="(max-width: 768px) 100vw, 70vh"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, translateY: 0 },
                hidden: { opacity: 0, translateY: 350 },
              }}
              style={{ translateY: slideDown }}
            >
              <img
                src={obitoPiece3}
                className="w-full max-h-[45vh] md:max-h-[60vh]"
                width="100%"
                loading="eager"
                alt="Digital artwork of Obito from Naruto Piece 3"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
