import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  link: string;
  text: string;
}

export default function NavLinks({ link, text }: NavLinkProps) {
  return (
    <Link to={link} className="text-lg hover:text-cyan-600">
      {text}
    </Link>
  );
}