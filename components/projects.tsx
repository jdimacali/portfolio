"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import ProjectCard from "./project-card";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading> My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Link href={project.projectUrl} target="blank">
              <ProjectCard {...project} />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Projects;
