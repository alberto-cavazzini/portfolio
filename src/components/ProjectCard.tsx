import React from "react";
import "./ProjectCard.css"; // Importa il file CSS se lo crei

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    liveUrl?: string;
    codeUrl?: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {project.codeUrl && (
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            Codice
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
