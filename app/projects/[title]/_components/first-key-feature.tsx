import { ProjectProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface FirstKeyFeatureProps {
  project: ProjectProps;
}

const FirstKeyFeature = ({ project }: FirstKeyFeatureProps) => {
  return (
    <motion.article
      className="mx-8 lg:flex items-center justify-center mt-[-3rem]"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 100 }}
      transition={{
        delay: 0.15,
        duration: 1.15,
        ease: "easeInOut",
      }}
      viewport={{
        once: true,
      }}
    >
      <Image
        alt="Project image"
        src={project.photos[1]}
        width={800}
        height={800}
        className="rounded-lg shadow-2xl object-cover"
      />
      <div className="w-full lg:w-96 md:pl-12">
        <p className="mt-6 text-gray-700 dark:text-gray-300 text-center font-semibold">
          {project.descriptions[1]}
        </p>
      </div>
    </motion.article>
  );
};
export default FirstKeyFeature;
