"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-[999] relative flex justify-center">
      <motion.div
        className="fixed top-0 h-[4.5rem] w-full rounded-none 
      border-white border-opacity-60 bg-white bg-opacity-80 shadow-black/[0.09] backdrop-blur-[0.5rem] shadow-lg sm:top-6 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-1">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.75 }}
            >
              <Link
                className="flex w-full items-center justfy-center px-2.5 py-3 hover:text-gray-900 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
