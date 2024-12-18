import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const links = [
  { link: "/about", text: "About" },
  { link: "/work", text: "Work" },
  { link: "/contact", text: "Contact" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between px-8 py-4 ${
        isOpen ? "bg-gray-100 dark:bg-gray-900 md:bg-transparent" : ""
      }`}
    >
      <Link
        to="/"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
      >
        <p className="font-heading">DR</p>
      </Link>
      <div className="hidden gap-4 md:flex">
        <ul className="flex space-x-4">
          {links.map(({ link, text }) => (
            <li key={text}>
              <NavLinks link={link} text={text} />
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <span className="text-xs">Light</span>
          <button
            onClick={toggleTheme}
            className={`relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none ${
              theme === "light" ? "bg-gray-300" : "bg-gray-600"
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                theme === "light" ? "translate-x-1" : "translate-x-9"
              }`}
            />
          </button>
          <span className="text-xs">Dark</span>
        </div>
      </div>
      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-16 w-full bg-gray-100 dark:bg-gray-900 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map(({ link, text }) => (
              <li key={text}>
                <NavLinks link={link} text={text} />
              </li>
            ))}
            <div className="flex items-center space-x-2">
              <span className="text-xs">Light</span>
              <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none ${
                  theme === "light" ? "bg-gray-300" : "bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    theme === "light" ? "translate-x-1" : "translate-x-9"
                  }`}
                />
              </button>
              <span className="text-xs">Dark</span>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
