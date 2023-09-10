"use client";

import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import { useParams } from "next/navigation";
import React from "react";

const ProjectPage = () => {
  const params = useParams();
  const title = params.id;
  const project = projectsData.find((project) => project.title === title);

  return (
    <section>
      <SectionHeading> {project?.title} </SectionHeading>
      <div className="flex flex-col items-center">
        {projectsData.map((project: any, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default ProjectPage;
