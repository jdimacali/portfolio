import Error from "@/components/404";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectPage = async ({ params }: { params: { title: string } }) => {
  const title = decodeURI(params.title);
  const project = projectsData.find((project) => project.title === title);

  if (project === undefined || !title) {
    return (
      <>
        <SectionHeading>{title} was not found</SectionHeading>
        <Error />
      </>
    );
  }

  return (
    <div>
      <SectionHeading> {project?.title} </SectionHeading>
      <div className="mx-24 flex ">
        <Image
          alt="Project image"
          src={project.photos}
          width={1240}
          height={900}
          className="rounded-lg shadow-2xl border object-contain"
        />
        <div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 ml-20 text-center font-semibold">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
