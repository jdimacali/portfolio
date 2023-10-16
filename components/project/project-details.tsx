import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const ProjectDetails = ({
  title,
  descriptions,
  tags,
  imageUrl,
  githubUrl,
  projectUrl,
}: ProjectProps) => {
  return (
    <motion.section className="flex justify-between">
      <div>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full 
                dark:text-white/80"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="bg-gray-100 max-w-[42rem] borderBlack rounded-lg  sm:p-4 relative sm:h-[38rem]
       dark:bg-white/20 dark:text-white"
      >
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:block h-full w-full shadow-2xl"
        />
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
