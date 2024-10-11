"use client";

import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedTheme: "light" | "dark") => {
    if (theme !== selectedTheme) {
      toggleTheme();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer rounded bg-light-accent px-4 py-2 font-bold text-white hover:opacity-80 dark:bg-dark-accent"
      >
        Select Theme
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 rounded-lg border-4 border-light-accent bg-light-primaryBg p-6 shadow-lg dark:border-dark-accent dark:bg-dark-primaryBg">
          <h2 className="mb-4 text-center text-xl font-bold text-light-primaryText dark:text-dark-primaryText">
            Select Theme
          </h2>
          <div className="space-y-2">
            <div
              className={`flex cursor-pointer items-center rounded p-3 transition-colors duration-200 ${
                theme === "light"
                  ? "bg-light-accent text-white"
                  : "bg-light-primaryBg text-light-primaryText hover:bg-opacity-70"
              }`}
              onClick={() => handleSelect("light")}
            >
              <span className="mr-2">{theme === "light" ? "▶" : "  "}</span>
              <span className="font-medium">Light Mode</span>
            </div>
            <div
              className={`flex cursor-pointer items-center rounded p-3 transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-dark-accent text-dark-primaryText"
                  : "bg-dark-primaryBg text-dark-primaryText hover:bg-opacity-70"
              }`}
              onClick={() => handleSelect("dark")}
            >
              <span className="mr-2">{theme === "dark" ? "▶" : "  "}</span>
              <span className="font-medium">Dark Mode</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
