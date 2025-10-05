import { JSX, useRef } from "react";
import { motion, useScroll, MotionValue } from "framer-motion";
import { projects } from "@/pages/data/information";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";

// ----- Main -----
export default function Index(): JSX.Element {
  const container = useRef(null);

  // Track scroll progress for stacking cards
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  return (
    <section className="text-white w-full">
      <div ref={container} className="relative w-full">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <NewStackingCards
              key={`p_${i}`}
              i={i}
              url={project?.link}
              src={project?.src}
              link={project?.link}
              title={project?.title}
              type={project?.type}
              color={project?.color}
              skills={project?.skills}
              description={project?.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

// ----- Card Component -----
interface CardProps {
  i?: number;
  title: string;
  description: string;
  type: string;
  src: string;
  url?: string;
  color?: string;
  skills?: string[] | null;
  link?: string;
  progress?: MotionValue<number>;
  range?: [number, number];
  targetScale?: number;
}

export const NewStackingCards: React.FC<CardProps> = ({
  title,
  description,
  src,
  skills,
  type,
  // i,
  // url,
  // color,
  // link,
  // progress,
  // range,
  // targetScale,
}) => {
  // const scale = useTransform(progress, range, [1, targetScale]);
  const { t } = useTranslation();
  // console.info(i,url,color,link,progress,range,targetScale)
  return (
    <div
      // ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="w-full max-w-4xl px-4"
        style={{
          // scale,
          // top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="group mb-3 last:mb-0 sm:mb-8">
          <div>
            <div className="relative w-full min-h-[360px] sm:w-[52rem] overflow-hidden rounded-lg border transition dark:hover:bg-primary-foreground bg-white dark:bg-[#1e1e1e] hover:bg-amber-100 dark:hover:bg-[#281e0f] hover:backdrop-blur-lg backdrop-blur-md cursor-pointer border-transparent group-hover:border-amber-500">
              <div className="flex h-full flex-col justify-start px-5 gap-2 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
                <h3 className="text-xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-400 dark:from-orange-600 dark:to-amber-500 whitespace-nowrap text-ellipsis">
                  {title}
                </h3>
                <span className="block text-gray-600 dark:text-gray-200">
                  <button
                    type="button"
                    className="px-3 py-1 text-xs font-medium text-center inline-flex items-center text-blue-500 bg-blue-100 rounded-lg  focus:ring-0 focus:outline-none  dark:text-blue-100 dark:bg-blue-900"
                  >
                    {type === "Personal" && <FaGithub className="me-1" />}
                    {type === "Company" && <FaGithub className="me-1" />}
                    {t("Personal")}
                  </button>
                </span>
                <p className="mt-0 leading-relaxed text-sm text-justify text-black dark:text-slate-300 max-sm:text-justify">
                  {description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills &&
                    skills.length > 0 &&
                    skills.map((skill, index) => (
                      <li
                        key={index}
                        className="rounded-full bg-rose-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                      >
                        {skill}
                      </li>
                    ))}
                </ul>
              </div>
              <picture>
                <img
                  loading="lazy"
                  width={3456}
                  height={1976}
                  decoding="async"
                  data-nimg={1}
                  className="absolute hidden sm:block bg-white -right-20 bottom-0 w-[450px] rounded-t-lg transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3"
                  style={{ color: "transparent" }}
                  src={src}
                  alt={title}
                />
              </picture>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};