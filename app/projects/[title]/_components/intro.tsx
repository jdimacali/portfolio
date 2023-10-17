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
      className="mx-24 sm:flex flex-col items-center justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{
        duration: 0.85,
        ease: "easeInOut",
      }}
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
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
    </motion.article>
  );
};
export default Intro;
