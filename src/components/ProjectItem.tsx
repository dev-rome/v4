import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url: string;
  githubLink: string;
}

const ProjectItem: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  url,
  githubLink,
}) => (
  <div className="group relative h-full w-full overflow-hidden rounded-lg">
    <img
      src={image}
      alt={title}
      className="h-full w-full rounded-lg object-cover"
    />
    <div className="absolute inset-0 flex translate-y-[110%] transform flex-col items-start justify-end bg-black bg-opacity-70 p-4 text-left text-white transition-transform duration-500 ease-in-out group-hover:translate-y-0">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-xs">{description}</p>
      <div className="mt-1 flex gap-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FaLink className="mt-2 text-lg" />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="mt-2 text-lg" />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectItem;
