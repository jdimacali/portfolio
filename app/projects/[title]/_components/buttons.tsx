import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { ProjectProps } from "@/types";
import { motion } from "framer-motion";

interface ButtonsProps {
  project: ProjectProps;
}

const Buttons = ({ project }: ButtonsProps) => {
  return (
    <div className="flex justify-between gap-8">
      <Link
        className="cursor-pointer bg-white text-black sm:px-20 px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow dark:bg-white/20 dark:text-white whitespace-nowrap"
        target="blank"
        href={project.githubUrl}
      >
        See code repository <FaGithubSquare />
      </Link>
      <Link
        className="cursor-pointer bg-gray-800 text-white sm:px-20 px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow  dark:text-white whitespace-nowrap hover:bg-gray-900"
        href={project.projectUrl}
        target="blank"
      >
        Visit website <BsArrowUpRight />
      </Link>
    </div>
  );
};

export default Buttons;
