"use client";

import Error from "@/components/404";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectPage = () => {
  const params = useParams();

  const undecodedTitle = params.title as string;
  const title = decodeURI(undecodedTitle);
  const project = projectsData.find((project) => project.title === title);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (project === undefined || !title) {
    return (
      <>
        <SectionHeading>{title} was not found</SectionHeading>
        <Error />
      </>
    );
  }

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <SectionHeading> {project?.title} </SectionHeading>
        <div className="w-[300px] border bg-white opacity-20 h-1 mb-10 rounded-3xl" />
      </div>

      <div className="flex flex-col items-center gap-y-20">
        <article className="mx-24 sm:flex flex-col items-center justify-center">
          <Image
            alt="Project image"
            src={project.photos[0]}
            width={900}
            className="rounded-lg shadow-2xl object-cover"
          />
          <div>
            <p className="mt-8 text-gray-700 dark:text-gray-300 text-center font-semibold">
              {project.descriptions[0]}
            </p>
          </div>
        </article>

        <div className="flex justify-between gap-2">
          <Link
            className="cursor-pointer bg-white text-black px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow dark:bg-white/20 dark:text-white mt-5 whitespace-nowrap"
            target="blank"
            href={project.githubUrl}
          >
            See code repository <FaGithubSquare />
          </Link>
          <Link
            className="cursor-pointer bg-white text-black px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow dark:bg-white/20 dark:text-white mt-5 whitespace-nowrap"
            href={project.projectUrl}
            target="blank"
          >
            Visit website <BsArrowUpRight />
          </Link>
        </div>

        <article className="mx-24 sm:flex items-center justify-center">
          <Image
            alt="Project image"
            src={project.photos[1]}
            width={900}
            className="rounded-lg shadow-2xl object-cover"
          />
          <div className="w-[300px]">
            <p className="mt-6 ml-10 text-gray-700  dark:text-gray-300 text-center font-semibold">
              {project.descriptions[1]}
            </p>
          </div>
        </article>

        <article className="mx-24 sm:flex flex-col items-center justify-center">
          <Image
            alt="Project image"
            src={project.photos[2]}
            width={900}
            className="rounded-lg shadow-2xl object-cover"
          />
          <div>
            <p className="mt-8 text-gray-700 dark:text-gray-300 text-center font-semibold">
              {project.descriptions[2]}
            </p>
          </div>
        </article>
      </div>
    </>
  );
};
export default ProjectPage;
