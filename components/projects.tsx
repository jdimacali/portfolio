import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section className="">
      <SectionHeading> My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Projects;
