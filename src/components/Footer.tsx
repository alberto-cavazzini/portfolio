import React from "react";

import "./Footer.css"; // Importa il file CSS per il Footer

function Footer() {
  const handleFollowClick = () => {
    // Questa funzione viene chiamata quando il pulsante viene cliccato

    window.open("https://www.linkedin.com/in/albertocavazzini/", "_blank");
  };

  return (
    <footer className="footer">
      <div className="author">
        <h4>Alberto Cavazzini</h4>

        <p>Learn from top-notch design educators</p>

        <button onClick={handleFollowClick}>
          {" "}
          <img src="/images/linkedin-logo.png" alt="Linkedin" />
          Follow
        </button>
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
