import React, { useRef, useEffect, useState } from "react";
import "./About.css";

function About() {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(aboutSectionRef.current!);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = aboutSectionRef.current; // Copia il valore del ref

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect(); // È buona pratica disconnettere l'observer nella cleanup
    };
  }, []);

  return (
    <section
      className={`about ${isVisible ? "fade-in" : ""}`}
      ref={aboutSectionRef}
    >
      <div className="background-heading">
        <h1>Benvenuto nel mio mondo!</h1>
        <p className="subtitle">
          Sono un UX / UI Designer con soluzioni innovative e grafiche per i
          tuoi prodotti
        </p>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="text-content">
            <h2>Chi sono</h2>
            <p>
              Ciao! Mi chiamo [Il tuo Nome] e sono uno sviluppatore web con una
              forte passione per la creazione di soluzioni digitali innovative e
              user-friendly. Sono particolarmente interessato a [Menziona le tue
              aree di interesse specifiche].
            </p>
            <p>
              Durante il mio percorso di apprendimento e nei miei progetti
              personali, ho acquisito competenze in [Elenca alcune delle tue
              competenze tecniche principali].
            </p>
            <p>
              Sono sempre alla ricerca di nuove sfide e opportunità per crescere
              professionalmente e contribuire a progetti stimolanti. In questo
              portfolio, puoi trovare alcuni dei progetti su cui ho lavorato.
            </p>
          </div>
        </div>

        <div className="skills">
          <h3>Competenze</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Git</li>
            {/* Aggiungi altre tue competenze */}
          </ul>
        </div>

        <div className="personal-details">
          <h3>Dettagli personali</h3>
          <ul>
            <li>
              <strong>Nome:</strong> [Il tuo Nome e Cognome]
            </li>
            <li>
              <strong>Città:</strong> [La tua Città]
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:[La tua Email]">[La tua Email]</a>
            </li>
            {/* Puoi aggiungere altri dettagli se lo desideri */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
