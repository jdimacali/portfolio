"use client";

import { ProjectProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface IntroProps {
  project: ProjectProps;
}

const Intro = ({ project }: IntroProps) => {
  return (
    <motion.article
      className="mx-8 sm:flex flex-col items-center justify-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ ease: "easeOut", duration: 0.75, delay: 0.15 }}
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Image
        alt="Project image"
        src={project.photos[0]}
        width={800}
        height={800}
        className="rounded-lg shadow-2xl object-cover"
      />
      <div className="flex justify-center">
        <p className="mt-10 text-gray-700 dark:text-gray-300 text-center font-semibold lg:w-[69%]">
          {project.descriptions[0]}
        </p>
      </div>
    </motion.article>
  );
};
export default Intro;
