"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  duration?: number;
  delay?: number; // Optional delay
  className?: string; // Optional className for customization
}

function FadeUpAnimation({
  children,
  duration = 1.5,
  delay = 0,
  className = "",
}: Props) {
  return (
    <motion.div
      className={className} // Apply the optional className
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and float to original position
      transition={{ duration, delay, ease: "easeOut" }} // Add delay for staggered effect
      viewport={{ once: true, amount: 0.8 }} // Trigger animation when 80% of the element is in view
    >
      {children}
    </motion.div>
  );
}

export default FadeUpAnimation;
