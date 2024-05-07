"use client"
import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Wasimdar/repos")
      .then((response) => response.json())
      .then((data) => {
        const filteredProjects = data.filter(
          (repo: { fork: any; archived: any; }) => !repo.fork && !repo.archived
        );
        setProjects(filteredProjects);
      })
      .catch((error) =>
        console.error("Error fetching GitHub projects:", error)
      );
  }, []);

  return (
    <div className="bg-white shadow-md p-4 md:p-6 rounded-lg">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">My Projects</h2>
      <ul className="text-gray-700">
        {projects.map((project) => (
          <li key={project} className="mb-2">
            <a
              href={project}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-blue-600 transition duration-300 ease-in-out"
            >
                 <span className="font-semibold">{project}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
