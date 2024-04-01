import { ProjectProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface SecondKeyFeatureProps {
  project: ProjectProps;
}

const SecondKeyFeature = ({ project }: SecondKeyFeatureProps) => {
  return (
    <motion.article
      className="mx-8 sm:flex flex-col items-center justify-center mt-8"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{
        delay: 0.1,
        duration: 0.85,
        ease: "easeIn",
      }}
      viewport={{
        once: true,
      }}
    >
      <Image
        alt="Project image"
        src={project.photos[2]}
        width={800}
        height={800}
        className="rounded-lg shadow-2xl object-cover"
      />
      <div className="max-w-[800px]">
        <p className="mt-8 text-gray-700 dark:text-gray-300 text-center font-semibold">
          {project.descriptions[2]}
        </p>
      </div>
    </motion.article>
  );
};
export default SecondKeyFeature;
