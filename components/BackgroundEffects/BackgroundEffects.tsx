"use client";

import React, { useEffect, useState } from "react";
import styles from "./BackgroundEffects.module.css";

// Define the type for the style object
interface ParticleStyle {
  "--random-x": string;
  "--random-scale": number;
  "--random-opacity": number;
  animationDuration: string;
  animationDelay: string;
  left: string;
}

function BackgroundEffects() {
  const [randomStyles, setRandomStyles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    const generateRandomStyle = (): ParticleStyle => {
      const randomX = Math.random() * 100; // Random X position (in vw)
      const randomScale = Math.random() * 0.5 + 0.5; // Random scale (0.5 to 1)
      const randomOpacity = Math.random(); // Random opacity (0 to 1)
      const fallDuration = Math.random() * 40 + 20; // Animation duration (20s to 60s)
      const fallDelay = Math.random() * -30; // Animation delay (-30s to 0s)

      return {
        "--random-x": `${randomX}vw`, // Random horizontal starting point
        "--random-scale": randomScale,
        "--random-opacity": randomOpacity,
        animationDuration: `${fallDuration}s`,
        animationDelay: `${fallDelay}s`,
        left: `${randomX}vw`,
      };
    };

    // Generate styles for 12 particles
    const stylesArray = Array.from({ length: 24 }, () => generateRandomStyle());
    setRandomStyles(stylesArray);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Polka Dots Background */}
      <div className={styles.background}></div>

      {/* Particle Animations */}
      {randomStyles.map((style, index) => (
        <div key={index} className={styles.particle} style={style}></div>
      ))}
    </div>
  );
}

export default BackgroundEffects;
