import React from "react";
import "./Footer.css"; // Importa il file CSS per il Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          {process.env.REACT_APP_PORTFOLIO_NAME || "Il tuo Nome"}
        </p>
        {/* Puoi aggiungere qui altri link o informazioni, come icone social */}
        {/* <div className="social-links">
          <a href="[Il tuo profilo LinkedIn]" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.svg" alt="LinkedIn" /></a>
          <a href="[Il tuo profilo GitHub]" target="_blank" rel="noopener noreferrer"><img src="/images/github.svg" alt="GitHub" /></a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
