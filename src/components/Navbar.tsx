import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa il file CSS per la Navbar

interface NavbarProps {
  resumeUrl: string; // Definisci una prop per l'URL del curriculum
}

function Navbar({ resumeUrl }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/" className="logo-link">
            Alberto Cavazzini
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Chi sono</Link>
          </li>
          <li>
            <Link to="/projects">Progetti</Link>
          </li>
          <li>
            <Link to="/contact">Contatti</Link>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/DE10s1y7IDKYa4e6ichT2F/CV-Alberto-Cavazzini"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Curriculum
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
