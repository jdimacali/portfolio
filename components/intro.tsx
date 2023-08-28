"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

// TODO: change the photo in the public folder to a photo of myself
// TODO: Change the links in the github and linked links to my personal links !!! not the default, make sure they are not the default website links

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.325 }}
          >
            <Image
              src="/James.jpg"
              alt="James Dimacali Portrait"
              width="200"
              height="200"
              quality="100"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-2xl bottom-0 right-0 absolute"
            initial={{ scale: 0, rotate: 125 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ ease: "backOut", duration: 0.75, delay: 0.1 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm James.`}</span> {`I'm a`}{" "}
        <span className="font-bold">full-stack developer.</span> I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale:105 transition-all"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group cursor-pointer bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow dark:bg-white/20 dark:text-white"
          // this href leads to the my resume in the public static folder and download is set to true so when it is pressed the pdf is downloaded
          href="/CV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>
        {/* TODO: add links to my own github and linked in, these will not work if i dont put my link specifically  */}
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow dark:bg-white/20 dark:text-white"
          href="https://www.linkedin.com/in/matthew-dimacali-070075259"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 text-[1.25rem] p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
          hover:bg-white-100 active:scale:105 transition-all borderBlack shadow dark:bg-white/20 dark:text-white"
          href="https://github.com/LilahDim"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
export default Intro;
