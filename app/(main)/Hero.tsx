import React from "react";
import Particles from "../../components/Particles/Particles";
import PolkaBackground from "@/components/Polka/PolkaBackground";
import FadeUpAnimation from "../../components/Animation/FadeUpAnimation";
import FadeAnimation from "../../components/Animation/FadeAnimation";
import Button from "@/components/Button";
function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Particles Effect */}
      <Particles />
      {/* Polka Dots Background */}
      <PolkaBackground />
      <div className="absolute inset-0 container">
        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col py-12 justify-center items-center z-10">
          {/* <Animation /> */}
          <FadeUpAnimation delay={0}>
            <h1 className="text-white font-bold text-5xl md:text-8xl font-silk text-center">
              Jethro Alonzo
            </h1>
          </FadeUpAnimation>

          <FadeAnimation delay={1.4}>
            <span className="text-xl  font-silk">Front-end Developer</span>
          </FadeAnimation>

          <div className="flex gap-4 mt-8">
            <Button
              rel="noopener noreferrer"
              target="_blank"
              href="/Alonzo_Jethro_Resume.pdf"
              text="Download CV"
            />
            <Button href="#projects" text="Check my Projects" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
