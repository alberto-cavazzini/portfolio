import React from "react";

import ProjectCard from "../components/ProjectCard";

import "./Projects.css"; // Importa il file CSS se lo crei

// Definisci un'interfaccia per i dati del progetto per una migliore tipizzazione

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
  liveUrl?: string;
  codeUrl?: string;
  hasCaseStudy?: boolean;
  caseStudyId?: string; // Un ID per recuperare i dati della case study
}
// Array di esempio dei tuoi progetti
const projects: Project[] = [
  {
    title: "App Meteo",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/images/app-meteo.png",
    id: "app-meteo",
    liveUrl: "https://alberto-cavazzini.github.io/app-meteo/",
    codeUrl: "https://github.com/alberto-cavazzini/app-meteo",
    hasCaseStudy: true,
    caseStudyId: "progetto1", // Identificatore unico
  },

  {
    title: "Pong Game",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/images/pong.png",
    id: "pong-game",
    liveUrl: "https://alberto-cavazzini.github.io/pong-game/",
    codeUrl: "https://github.com/alberto-cavazzini/pong-game",
    hasCaseStudy: false,
  },

  {
    title: "Snake Game",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/images/snake.png", // Assicurati che l'immagine sia nella cartella public/images
    id: "snake-game",
    liveUrl: "https://alberto-cavazzini.github.io/snake-game/",
    codeUrl: "https://github.com/alberto-cavazzini/snake-game",
  },

  {
    title: "Tic Tac Toe",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/images/tic-tac-toe.png", // Assicurati che l'immagine sia nella cartella public/images
    id: "tic-tac-toe",
    liveUrl: "https://alberto-cavazzini.github.io/TicTacToe-Game/",
    codeUrl: "https://github.com/alberto-cavazzini/TicTacToe-Game",
  },

  {
    title: "Stopwatch",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/images/stopwatch.png", // Assicurati che l'immagine sia nella cartella public/images
    id: "stopwatch",
    liveUrl: "https://alberto-cavazzini.github.io/stopwatch/",
    codeUrl: "https://github.com/alberto-cavazzini/stopwatch",
  },

  {
    title: "Youtube Clone",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/images/youtube-clone.png", // Assicurati che l'immagine sia nella cartella public/images
    id: "youtube-clone",
    liveUrl: "https://alberto-cavazzini.github.io/Youtube-Clone/",
    codeUrl: "https://github.com/alberto-cavazzini/Youtube-Clone",
  },

  // Aggiungi altri progetti qui...
];

function Projects() {
  return (
    <section className="projects" id="projects-section">
      {" "}
      {/* Ho corretto qui l'ID */}
      <div className="container">
        <div className="projects-grid">
          {projects.map(
            (
              project // Ho rimosso 'index' perché 'project.id' è un key migliore
            ) => (
              <ProjectCard key={project.id} project={project} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
