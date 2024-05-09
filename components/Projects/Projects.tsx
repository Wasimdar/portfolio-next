"use client";
import React, { useState, useEffect } from "react";
interface Project {
  id: number;
  name: string;
  html_url: string;
  fork: boolean;
  archived: boolean;
}
const Projects = (project: Project) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Wasimdar/repos")
      .then((response) => response.json())
      .then((data) => {
        const filteredProjects = data.filter(
          (repo: { fork: any; archived: any }) => !repo.fork && !repo.archived
        );
        setProjects(filteredProjects);
      })
      .catch((error) =>
        console.error("Error fetching GitHub projects:", error)
      );
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-fuchsia-900 to-slate-900 text-white shadow-md p-4 md:p-6 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
    <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl hover:bg-opacity-0 transition duration-300"></div>
    <div className="transform hover:-translate-x-1 hover:-translate-y-1 transition duration-300">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
          My Projects</h2>
        <ul className="">
          {projects.map((pro: Project) => (
            <li key={pro.id} className="mb-2">
              <a
                href={pro.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600 transition duration-300 ease-in-out"
              >
                <span className="font-semibold">{pro.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
