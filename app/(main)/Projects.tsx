import SubHeader from "@/components/SubHeader";
import React from "react";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import FadeUpAnimation from "@/components/Animation/FadeUpAnimation";

function Projects() {
  return (
    <>
      <div className="border-2 border-dashed border-gray-500 mx-6"></div>
      <section className="spacing" id="projects">
        <div className="container">
          <SubHeader text="Projects" />

          {PROJECTS.map((project, i) => (
            <FadeUpAnimation
              key={project.title}
              className="space-y-6"
              duration={0.5}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                flip={i % 2 === 0 ? "flex-row" : "flex-row-reverse"}
                stacks={project.stack}
                demo_link={project.demo_link}
                code_link={project.code_link}
              />
            </FadeUpAnimation>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
