import React from "react";
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
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <Link
        to="/"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
      >
        <p className="text-black dark:text-white">DR</p>
      </Link>
      <div className="flex gap-4">
        <ul className="flex space-x-4">
          {links.map(({ link, text }) => (
            <li key={text}>
              <NavLinks link={link} text={text} />
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-black dark:text-white">LIGHT</span>
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
          <span className="text-xs">DARK</span>
        </div>
      </div>
    </nav>
  );
}
