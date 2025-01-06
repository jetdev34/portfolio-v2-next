"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  duration?: number;
  delay?: number; // Optional delay
}

function FadeUpAnimation({ children, duration = 1.5, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in and float to original position
      transition={{ duration, delay, ease: "easeOut" }} // Add delay for staggered effect
    >
      {children}
    </motion.div>
  );
}

export default FadeUpAnimation;
