"use client";

import React from "react";
import { motion } from "framer-motion";

interface HighlightProps {
  text: string;
}

function SubHeader({ text }: HighlightProps) {
  const letters = text.split("");

  const variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0.5 },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      className="mb-8 "
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="text-5xl uppercase relative md:text-6xl"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default SubHeader;
