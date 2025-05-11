import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css"; // Importa il file CSS se lo crei

// Definisci un'interfaccia per i dati del progetto per una migliore tipizzazione
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string; // URL del sito live (opzionale)
  codeUrl?: string; // URL del repository del codice (opzionale)
}

// Array di esempio dei tuoi progetti
const projects: Project[] = [
  {
    title: "Titolo",
    description:
      "Una breve descrizione del Progetto Esempio 1. Potrebbe includere le tecnologie utilizzate e gli obiettivi del progetto.",
    imageUrl: "/images/project1.png", // Assicurati che l'immagine sia nella cartella public/images
    liveUrl: "https://esempio1.com",
    codeUrl: "https://github.com/iltuonome/progetto1",
  },
  {
    title: "Titolo",
    description:
      "Una breve descrizione del Progetto Esempio 2. Descrivi le sfide affrontate e le soluzioni implementate.",
    imageUrl: "/images/project2.png", // Assicurati che l'immagine sia nella cartella public/images
    liveUrl: "https://esempio2.net",
    codeUrl: "https://github.com/iltuonome/progetto2",
  },
  // Aggiungi altri progetti qui...
];

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Progetti</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
