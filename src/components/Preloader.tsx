"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Wait until document is ready to start our minimum time, or just run immediately.
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment representing assets loading
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    // Give it a fixed minimum 2.5s for the aesthetic preloader to shine
    const timer = setTimeout(() => {
      setIsLoading(false);
      setProgress(100);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%", // Slides up smoothly to reveal the hero page
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Custom easing for premium feel
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--vj-pf-root-bg-color)] dark:bg-[#121212] border-none"
        >
          <div className="flex flex-col items-center">
            {/* Animated Brand Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-8 text-black dark:text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bb4d00] to-orange-500 dark:from-[#ff9d23] dark:to-yellow-500">
                Vijay
              </span>
              Athiraj
            </motion.div>

            {/* Glowing Progress Bar Container */}
            <div className="w-64 md:w-80 h-[2px] bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,157,35,0.1)]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-[#bb4d00] dark:bg-[#ff9d23] shadow-[0_0_10px_#bb4d00] dark:shadow-[0_0_10px_#ff9d23]"
              />
            </div>

            {/* Progress Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-xs md:text-sm font-mono tracking-widest text-[#bb4d00] dark:text-[#ff9d23] font-bold"
            >
              {Math.min(progress, 100)}%
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-8 text-[10px] md:text-xs text-gray-500 dark:text-gray-400 tracking-[0.3em] uppercase"
            >
              Fetching the Good Stuff
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
