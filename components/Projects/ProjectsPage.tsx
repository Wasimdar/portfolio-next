import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          name="Project 1"
          description="Description of Project 1."
          liveLink="https://example.com/project1"
        />
        <ProjectCard
          name="Project 2"
          description="Description of Project 2."
          liveLink="https://example.com/project2"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
