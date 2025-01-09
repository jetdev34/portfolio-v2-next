import React from "react";
import BackgroundEffects from "@/components/BackgroundEffects/BackgroundEffects";
import FadeUpAnimation from "../../components/Animation/FadeUpAnimation";
import FadeAnimation from "../../components/Animation/FadeAnimation";
import Button from "@/components/Button";
// import Animation from "@/components/Animation";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Combined Background Effects */}
      <BackgroundEffects />
      <div className="absolute inset-0 container">
        <div className="absolute inset-0 flex flex-col py-12 justify-center items-center z-10">
          <FadeUpAnimation delay={0}>
            <h1 className="text-white  text-4xl md:text-6xl lg:text-8xl text-center">
              Jethro Santos Alonzo
            </h1>
          </FadeUpAnimation>

          <FadeAnimation delay={1.4}>
            <span className="text-lg md:text-xl lg-2xl ">
              Front-end Developer
            </span>
          </FadeAnimation>

          <div className="flex gap-4 mt-8">
            <Button
              rel="noopener noreferrer"
              target="_blank"
              href="/Alonzo_Jethro_Resume.pdf"
              text="Download CV"
            />
            <Button href="#projects" text="My Projects" />
          </div>

          {/* <Animation /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
