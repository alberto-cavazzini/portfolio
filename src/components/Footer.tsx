import React from "react";

import "./Footer.css"; // Importa il file CSS per il Footer

function Footer() {
  const handleFollowClick = () => {
    window.open("https://www.linkedin.com/in/albertocavazzini/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/alberto-cavazzini", "_blank"); // !!! SOSTITUISCI CON IL TUO URL GitHub !!!
  };

  const handleMailClick = () => {
    // Puoi aprire il client di posta predefinito dell'utente
    window.location.href = "mailto:tua.email@example.com"; // !!! SOSTITUISCI CON LA TUA VERA EMAIL !!!
  };

  return (
    <footer className="footer">
      <div className="author">
        <h4>Alberto Cavazzini</h4>
        <p>Learn from top-notch design educators</p>
        {/* Contenitore per i pulsanti: display flex in CSS per affiancarli */}
        <div className="button-group">
          <button onClick={handleFollowClick}>
            <img src="/images/linkedin-logo.png" alt="Linkedin" />
            Follow
          </button>

          {/* Aggiunta la classe 'github-button' per stili specifici */}
          <button onClick={handleGitHubClick} className="github-button">
            <img src="/images/icons8-github-512.png" alt="GitHub" />
          </button>

          {/* Aggiunta la classe 'mail-button' per stili specifici */}
          <button onClick={handleMailClick} className="mail-button">
            <img src="/images/icons8-apple-mail-480.png" alt="Mail" />
          </button>
        </div>
      </div>

      <div className="container">
        <div>
          <p className="copyright">
            &copy; {new Date().getFullYear()}{" "}
            {process.env.REACT_APP_PORTFOLIO_NAME || "Il tuo Nome"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
