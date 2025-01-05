import React from "react";
import projectData from "../data/projectData";
import ProjectItem from "../components/ProjectItem";

export default function Work() {
  return (
    <section id="work" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="px-4">
          <h2 className="text-xl font-bold">WORK</h2>
          <span className="-mt-2 block h-1 w-20 bg-accent-light dark:bg-accent-dark"></span>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
