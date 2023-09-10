"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import ProjectCard from "./project-card";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading> My Projects</SectionHeading>
      <div>
        {projectsData.map((project: any, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Projects;
