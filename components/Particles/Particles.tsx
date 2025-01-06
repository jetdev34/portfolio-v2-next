import React from "react";
import styles from "./Particles.module.css";

function Particles() {
  const generateRandomStyle = () => {
    const randomX = Math.random() * 100; // Random X position (in vw)
    const randomScale = Math.random() * 0.5 + 0.5; // Random scale (0.5 to 1)
    const randomOpacity = Math.random(); // Random opacity (0 to 1)

    //! Speed of the particles - Increase the number to decrease the speed of the particles
    const fallDuration = Math.random() * 40 + 20;

    const fallDelay = Math.random() * -30; // Fall delay (-30s to 0s)

    return {
      "--random-x": `${randomX}vw`, // Random horizontal starting point
      "--random-scale": randomScale,
      "--random-opacity": randomOpacity,
      animationDuration: `${fallDuration}s`, // Slower animation
      animationDelay: `${fallDelay}s`,
      left: `${randomX}vw`, // Set horizontal position
    };
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Change the array number to increase or decrease the number of particles */}
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className={styles.particle}
          style={generateRandomStyle()}
        ></div>
      ))}
    </div>
  );
}

export default Particles;
