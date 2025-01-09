"use client";

import React, { useEffect, useState } from "react";
import styles from "./Particles.module.css";

function Particles() {
  const [randomStyles, setRandomStyles] = useState([]);

  useEffect(() => {
    // Generate random styles only on the client
    const generateRandomStyle = () => {
      const randomX = Math.random() * 100; // Random X position (in vw)
      const randomScale = Math.random() * 0.5 + 0.5; // Random scale (0.5 to 1)
      const randomOpacity = Math.random(); // Random opacity (0 to 1)
      const fallDuration = Math.random() * 40 + 20; // Animation duration (20s to 60s)
      const fallDelay = Math.random() * -30; // Animation delay (-30s to 0s)

      return {
        "--random-x": `${randomX}vw`, // Random horizontal starting point
        "--random-scale": randomScale,
        "--random-opacity": randomOpacity,
        animationDuration: `${fallDuration}s`, // Animation speed
        animationDelay: `${fallDelay}s`,
        left: `${randomX}vw`, // Set horizontal position
      };
    };

    // Generate styles for 12 particles
    const stylesArray = [...Array(12)].map(() => generateRandomStyle());
    setRandomStyles(stylesArray);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {randomStyles.map((style, index) => (
        <div key={index} className={styles.particle} style={style}></div>
      ))}
    </div>
  );
}

export default Particles;
