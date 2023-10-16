"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

// Because the data is as const we need to give the the typeof the imported dated with an index of number for any number, then we set it as props and destructure the data given
type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  descriptions,
  tags,
  imageUrl,
  githubUrl,
  projectUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // scroll from framer motion that takes a ref and and offset where the scroll stops and ends to animate
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section
        className="bg-gray-100 max-w-[44rem] borderBlack rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] max-h-[28rem] hover:bg-gray-200 transition sm:group-even:pl-8
       dark:bg-white/20 dark:hover:bg-white/30 dark:text-white"
      >
        <Link href={projectUrl} target="blank">
          <object>
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col gap-y-3 h-full sm:group-even:ml-[18rem] ">
              <h3 className="text-2xl font-semibold line-clamp-2">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
                {descriptions[0]}
              </p>
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
              <div className="flex justify-between gap-2">
                <Link
                  className="cursor-pointer bg-white text-black px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow dark:bg-white/20 dark:text-white mt-5 whitespace-nowrap"
                  target="blank"
                  href={githubUrl}
                >
                  See code <FaGithubSquare />
                </Link>
                <Link
                  className="cursor-pointer bg-white text-black px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow dark:bg-white/20 dark:text-white mt-5 whitespace-nowrap"
                  href={`http://localhost:3000/projects/${title}`}
                >
                  Learn more
                </Link>
              </div>
            </div>

            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40 "
            />
          </object>
        </Link>
      </section>
    </motion.div>
  );
};
export default ProjectCard;
