"use client";

import { motion } from "framer-motion";

const Background = () => {
  return (
    <>
      <motion.div
        className="bg-amber-100 absolute top-[-6rem] -z-10 right-[21rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:w-[54.75rem] dark:bg-rose-300"
        animate={{ x: [0, 100, 0], rotate: -360, scale: 1 }}
        transition={{
          delay: 1,
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="bg-cyan-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[9rem] dark:blur-[16rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]  dark:bg-indigo-600"
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
};
export default Background;
