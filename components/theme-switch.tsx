"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";
import { useThemeContext } from "@/context/theme-context";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <motion.button
      className="flex items-center justify-center fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] 
    bg-opacity-80 backdrop:blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all
    dark:bg-gray-900"
      onClick={toggleTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
};

export default ThemeSwitch;
