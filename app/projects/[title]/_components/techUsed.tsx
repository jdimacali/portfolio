"use client";

import { ProjectProps } from "@/types";
import { motion } from "framer-motion";

interface TechUsedProps {
  project: ProjectProps;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const TechUsed = ({ project }: TechUsedProps) => {
  return (
    <ul className="grid grid-cols-3 justify-center text-lg gap-3 text-gray-800 mt-[-3rem]">
      {project.tags.map((skill, index) => (
        <motion.li
          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  );
};
export default TechUsed;
