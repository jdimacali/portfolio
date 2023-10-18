"use client";

import Error from "@/components/404";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";
import Intro from "./_components/intro";
import Buttons from "./_components/buttons";
import FirstKeyFeature from "./_components/first-key-feature";
import SecondKeyFeature from "./_components/second-key-feature";
import TechUsed from "./_components/techUsed";

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
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.55 }}
      >
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          {project.title}
        </h2>
        <div className="w-[300px] border bg-white opacity-20 h-1 mb-10 rounded-3xl" />
      </motion.div>

      <div className="flex flex-col items-center gap-y-14">
        <Intro project={project} />
        <Buttons project={project} />

        <div className="flex flex-col items-center">
          <SectionHeading> Key Features </SectionHeading>
        </div>

        <FirstKeyFeature project={project} />
        <SecondKeyFeature project={project} />

        <div className="flex flex-col items-center">
          <SectionHeading> Technology Used </SectionHeading>
        </div>

        <TechUsed project={project} />
      </div>
    </>
  );
};
export default ProjectPage;
