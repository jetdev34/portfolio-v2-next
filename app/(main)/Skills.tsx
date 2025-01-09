"use client";

import React from "react";
import SubHeader from "../../components/SubHeader";
import Box from "../../components/Box";
import { SKILLS } from "@/lib/data";
import FadeUpAnimation from "@/components/Animation/FadeUpAnimation";
function Skills() {
  return (
    <section className="spacing bg-[#FBFBFB] text-black" id="skills">
      <div className="container">
        <SubHeader text="Skills" />

        <FadeUpAnimation className="grid " duration={0.5}>
          {SKILLS.map((skill) => (
            <Box
              key={skill.name}
              image_url={skill.image_url}
              text={skill.name}
            />
          ))}
        </FadeUpAnimation>
      </div>
    </section>
  );
}

export default Skills;
