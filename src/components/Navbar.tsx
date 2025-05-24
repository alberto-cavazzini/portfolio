import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa il file CSS per la Navbar

interface NavbarProps {
  resumeUrl: string; // Definisci una prop per l'URL del curriculum
}

function Navbar({ resumeUrl }: NavbarProps) {
  // Stato per gestire se il menu mobile è aperto o chiuso
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Funzione per fare il toggle del menu
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
          {/* Ho avvolto il nome in uno span per poterlo nascondere specificatamente */}
          <Link to="/" className="logo-link">
            <span className="logo-name">Alberto Cavazzini</span>
          </Link>
        </div>

        {/* Hamburger Icon per schermi piccoli */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links - ora condizionalmente mostrati */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="nav-item" onClick={toggleMenu}>
              Chi sono
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-item" onClick={toggleMenu}>
              Progetti
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item" onClick={toggleMenu}>
              Contatti
            </Link>
          </li>
          <li>
            <a
              href={resumeUrl} // Usa la prop resumeUrl
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
              onClick={toggleMenu}
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
