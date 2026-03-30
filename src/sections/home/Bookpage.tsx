import React from "react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { books } from "@/data/information";
import Image from "next/image";

const slideUpAndFade: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const bookVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    })
};



const Bookpage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section
            id="books"
            className="bg-gray-100 dark:bg-transparent vj-pf-bottom-section"
        >
            <div className="container">
                <div className="heading-section mb-12 text-center">
                    <motion.h1
                        className="big big-2 text-[#d3d4d5] dark:text-[#303030]"
                        variants={slideUpAndFade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {t("Beliefs")}
                    </motion.h1>
                    <motion.h2
                        className="mb-4 text-black dark:text-white relative z-1"
                        variants={slideUpAndFade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {t("Books")}
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 dark:text-white/45 mt-4"
                        variants={slideUpAndFade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {t(
                            "I’m a beginner in reading, but it has slowly become a habit I truly enjoy. I was inspired to start this journey by my colleague Rajapandeeswaran. These days, I love reading during quiet moments—especially at bedtime, while traveling, or in peaceful places surrounded by nature. Each book I pick adds something new to my thoughts and perspective."
                        )}
                    </motion.p>
                </div>

                {/* Animated Book Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
                    {books.map((book, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={bookVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 dark:hover:shadow-amber-500/10 border border-gray-100 dark:border-gray-800/50 flex flex-col group transition-shadow duration-300"
                        >
                            {/* Book Cover Container */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                    width={200}
                                    height={300}
                                />
                                {/* Status Badge */}
                                {book.status === 'reading' && (
                                    <div className="absolute top-4 right-4">
                                        <span
                                            className={`px-3 py-1 text-xs font-bold rounded-full shadow-md text-white backdrop-blur-sm bg-amber-500/90 border border-amber-400/20`}
                                        >
                                            {t('Reading')}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Book Details */}
                            <div className="p-5 flex flex-col flex-grow relative bg-white dark:bg-[#1a1a1a]">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight mb-3">
                                    {book.title}
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-auto flex items-center gap-2">
                                    <span className="w-5 h-[1px] bg-amber-500 inline-block"></span>
                                    {book.author}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bookpage;
