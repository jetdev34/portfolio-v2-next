import React from "react";
import Particles from "../components/Particles/Particles";
import PolkaBackground from "../components/Polka/PolkaBackground";
import Animation from "../components/Animation";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Particles Effect */}
      <Particles />
      {/* Polka Dots Background */}
      <PolkaBackground />

      <div className="absolute inset-0 container">
        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col py-12 md:flex-row-reverse md:justify-between items-center  z-10">
          <Animation />
          <h1 className="text-white font-bold text-4xl font-light uppercase text-center">
            Hello World
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
