import React from "react";
import { motion } from "framer-motion";

export function FadeInWhenVisible({ children }: { children: React.ReactElement }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function Box() {
  return (
    <div
      style={{
        padding: 40,
        background: "red",
        display: "inline-block",
        borderRadius: 5,
        width:700,
        height:700
        
      }}
    />
  );
}

function Samplepage() {
  return (
    <div className="App">
      <p style={{ color: "white", padding: 10 }}>Scroll down</p>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
    </div>
  );
}

export default Samplepage;
