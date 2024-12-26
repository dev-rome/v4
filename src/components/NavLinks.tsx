import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  link: string;
  text: string;
}

const NavLinks: React.FC<NavLinkProps> = ({ link, text }) => {
  return (
    <Link to={link} className="text-lg hover:text-cyan-600">
      {text}
    </Link>
  );
};

export default NavLinks;
