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
        className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
      >
        Select Theme
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 rounded-lg border-4 border-gray-600 bg-gray-800 p-6 shadow-lg">
          <h2 className="mb-4 text-center text-xl font-bold text-white">
            Select Theme
          </h2>
          <div className="space-y-2">
            <div
              className={`flex cursor-pointer items-center rounded p-3 transition-colors duration-200 ${
                theme === "light"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => handleSelect("light")}
            >
              <span className="mr-2">{theme === "light" ? "▶" : "  "}</span>
              <span className="font-medium">Light Mode</span>
            </div>
            <div
              className={`flex cursor-pointer items-center rounded p-3 transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
