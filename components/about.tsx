"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.185 }}
      id="about"
      ref={ref}
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        After trying out cybersecurity in school for a while, I decided to
        pursue my passion for programming. I started to take courses online and
        went from basic coding in python to{" "}
        <span className="font-medium"> full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I enjoy playing
        video games, watching movies with my girlfriend, and playing with my
        dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        reading the book cracking the coding interview and learning data
        structures and algorithms.
      </p>
    </motion.section>
  );
};
