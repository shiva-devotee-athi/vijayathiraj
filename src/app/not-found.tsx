"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--vj-pf-root-bg-color)] dark:bg-[var(--vj-pf-root-bg-color)] flex flex-col items-center justify-center p-4 relative overflow-hidden dark:text-gray-100 text-gray-900">

      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 dark:bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 404 Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center justify-center text-8xl md:text-[150px] font-black tracking-widest text-[#bb4d00] dark:text-[#ff9d23] mb-8 relative z-10"
      >
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          4
        </motion.span>

        {/* Animated Middle Picture */}
        <motion.div
          className="mx-4 md:mx-8 text-red-600 dark:text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          <motion.div
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image width={100} height={100} className="w-24 md:w-32" src="/images/cover/obito-404.webp" alt="404" />
          </motion.div>
        </motion.div>

        <motion.span
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          4
        </motion.span>
      </motion.div>

      {/* Content Container */}
      <div className="flex flex-col items-center relative z-10 text-center">
        {/* Sub Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-wide"
        >
          Please go back
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 italic font-serif leading-relaxed px-4"
        >
          &ldquo;Wake up to reality, there is nothing in this page, no longer this page had created.&rdquo;
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 font-semibold text-white bg-[#bb4d00] dark:bg-[#ff9d23] dark:text-black rounded-full overflow-hidden transition-transform hover:scale-105 shadow-lg hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(255,157,35,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:bg-white/30 transition-colors" />
            <Home size={20} className="relative z-10" />
            <span className="relative z-10 text-lg uppercase tracking-wider">home return</span>
          </Link>
        </motion.div>
      </div>

    </div>
  );
}
