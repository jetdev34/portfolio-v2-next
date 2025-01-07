import SubHeader from "@/components/SubHeader";
import React from "react";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
function Projects() {
  return (
    <>
      <div className=" border-2 border-dashed border-gray-500 mx-6"></div>
      <section className="spacing" id="projects">
        <div className="container">
          <SubHeader text="Projects" />

          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                // image_url={project.image_url}
                stacks={project.stack}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
