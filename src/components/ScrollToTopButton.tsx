import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css"; // Manteniamo lo stesso CSS

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Funzione per mostrare o nascondere il bottone in base allo scroll
  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funzione per scorrere la pagina fino all'inizio
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Aggiungi e rimuovi l'event listener per lo scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? "show" : ""}`}>
      <button onClick={scrollToTop} aria-label="Torna su">
        &#x2191; {/* Freccia verso l'alto */}
      </button>
    </div>
  );
};

export default ScrollToTopButton;
