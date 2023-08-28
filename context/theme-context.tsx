"use client";

import { useContext, useLayoutEffect, useState } from "react";
import { createContext } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // saves the users last saved theme into local storage using the window object and setItem
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
      // check if the users prefered theme is dark or and set it, the default is light so we dont change that
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      "useThemeContext must be used within an useThemeContextProvider"
    );
  }

  return context;
}
