// ProjectCard.js
import React from "react";
interface Project {
    name:string;
    description:string;
    liveLink:string;
}

const ProjectCard = (project:Project) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Live
      </a>
    </div>
  );
};

export default ProjectCard;
