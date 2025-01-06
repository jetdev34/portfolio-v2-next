import SubHeader from "@/components/SubHeader";
import React from "react";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
function Projects() {
  return (
    <section className="spacing">
      <div className="container">
        <SubHeader text="Projects" />

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image_url={project.image_url}
              stacks={project.stack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
