"use client";

import React from "react";
import { motion } from "framer-motion"; // Corrected import path for `framer-motion`

interface Props {
  children: React.ReactNode;
  duration?: number; // Optional, will default to 1.5 if not provided
  delay?: number; // Optional delay
}

function FadeAnimation({ children, duration = 1.5, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start invisible and slightly below
      whileInView={{ opacity: 1 }} // Fade in and float to original position
      transition={{ duration, delay, ease: "easeOut" }} // Smooth easing and default duration
      viewport={{ once: true, amount: 0.8 }} // Trigger animation when 80% of the element is in view
    >
      {children}
    </motion.div>
  );
}

export default FadeAnimation;
