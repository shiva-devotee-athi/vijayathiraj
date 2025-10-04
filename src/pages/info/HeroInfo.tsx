import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const HeroInfo: React.FC<{ title: string; imgClass?: string }> = ({
  title = "Title",
  imgClass = "human-resource-bg",
}) => {
  const { t } = useTranslation();

  return (
    <section className={`w-full pb-5 vj-pf-hero-sub-section ${imgClass}`}>
      <div className="max-w-screen-xl mx-auto py-5">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-6xl font-bold mb-0 !text-white animated slideInLeft">
              {t(title)}
            </h1>
          </div>
          <div className="w-full animated slideInRight">
            <nav aria-label="breadcrumb">
              <ol className="flex justify-center items-center lg:justify-start mb-0 space-x-2">
                <li className="breadcrumb-item">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-sm text-stone-800 transition-colors duration-300 ease-in hover:text-stone-200 dark:hover:text-black rounded bg-stone-200 px-2 py-1 hover:bg-amber-700 dark:hover:bg-amber-500"
                  >
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        d="M7 18H10.5H14"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 14H7.5H8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10H8.5H10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 2L16.5 2L21 6.5V19"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 20.5V6.5C3 5.67157 3.67157 5 4.5 5H14.2515C14.4106 5 14.5632 5.06321 14.6757 5.17574L17.8243 8.32426C17.9368 8.43679 18 8.5894 18 8.74853V20.5C18 21.3284 17.3284 22 16.5 22H4.5C3.67157 22 3 21.3284 3 20.5Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 5V8.4C14 8.73137 14.2686 9 14.6 9H18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t("Home")}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-white">
                    <svg
                      width="1.5em"
                      height="1.5em"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                      className="h-4 w-4 stroke-2"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </li>

                <li className="breadcrumb-item">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-stone-800 transition-colors duration-300 ease-in hover:text-stone-200 dark:hover:text-black rounded bg-stone-200 px-2 py-1 hover:bg-amber-700 dark:hover:bg-amber-500"
                  >
                    {t(title)}
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInfo;
