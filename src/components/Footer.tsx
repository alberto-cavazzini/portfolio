import React from "react";

import "./Footer.css"; // Importa il file CSS per il Footer
import { Link } from "react-router-dom";

function Footer() {
  const handleFollowClick = () => {
    window.open("https://www.linkedin.com/in/albertocavazzini/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/alberto-cavazzini", "_blank"); // !!! SOSTITUISCI CON IL TUO URL GitHub !!!
  };

  const handleMailClick = () => {
    // Puoi aprire il client di posta predefinito dell'utente
    window.location.href = "mailto:alberto.cavazzini97@gmail.com"; // !!! SOSTITUISCI CON LA TUA VERA EMAIL !!!
  };

  const handleWhatsappClick = () => {
    // Puoi aprire il client di posta predefinito dell'utente
    window.open("https://wa.me/393771970249"); // !!! SOSTITUISCI CON LA TUA VERA EMAIL !!!
  };

  return (
    <footer className="footer">
      <div className="context-footer">
        <div className="author">
          <h4>Alberto Cavazzini</h4>
          <p>Seguimi per rimanere aggiornato!</p>

          <div className="button-group">
            <button onClick={handleFollowClick}>
              <img
                src={process.env.PUBLIC_URL + "/images/linkedin-logo.png"}
                alt="Linkedin"
              />
              Follow
            </button>

            {/* Aggiunta la classe 'github-button' per stili specifici */}
            <button onClick={handleGitHubClick} className="github-button">
              <img
                src={process.env.PUBLIC_URL + "/images/github-icon.png"}
                alt="GitHub"
              />
            </button>

            {/* Aggiunta la classe 'mail-button' per stili specifici */}
            <button onClick={handleMailClick} className="mail-button">
              <img
                src={process.env.PUBLIC_URL + "/images/mail-icon.png"}
                alt="Mail"
              />
            </button>

            <button onClick={handleWhatsappClick}>
              <img
                src={process.env.PUBLIC_URL + "/images/whatsapp-icon.png"}
                alt="Contattaci su WhatsApp"
              />
            </button>
          </div>
        </div>

        {/* NUOVO: Spostato il div dei link qui, fuori da 'author' */}
        <div className="footer-links-group">
          <h4>Developer Hub</h4>
          <Link to="/projects">Esplora</Link>
          <Link to="/contact">Contattami</Link>
          <a
            href="https://www.figma.com/file/DE10s1y7IDKYa4e6ichT2F/CV-Alberto-Cavazzini"
            target="_blank" // Apre il link in una nuova scheda
            rel="noopener noreferrer" // Migliora la sicurezza
          >
            Apri il mio CV
          </a>
        </div>
      </div>
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()}{" "}
          {process.env.REACT_APP_PORTFOLIO_NAME || "Alberto Cavazzini"}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
