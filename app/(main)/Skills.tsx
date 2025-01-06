"use client";

import React from "react";
import { motion } from "framer-motion";
import SubHeader from "../../components/SubHeader";
import Box from "../../components/Box";
import { SKILLS } from "@/lib/data";
function Skills() {
  return (
    <section className="spacing" id="skills">
      <div className="container">
        <SubHeader text="Skills" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          className="grid"
        >
          {SKILLS.map((skill) => (
            <Box
              key={skill.name}
              image_url={skill.image_url}
              text={skill.name}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
