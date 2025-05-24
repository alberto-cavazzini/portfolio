import React, { useRef, useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import "./About.css";

interface Skill {
  name: string;

  description: string;

  imageUrl?: string;
}

interface SkillGroup {
  title: string;

  skills: Skill[];
}

const skillsData: SkillGroup[] = [
  {
    title: "Frontend Development",

    skills: [
      {
        name: "HTML5",

        description:
          "Conoscenza approfondita della struttura semantica del web e delle sue potenzialità per l'accessibilità.",

        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
      },

      {
        name: "CSS",

        description:
          "Styling avanzato con layout flessibili (Flexbox e Grid), responsive design per diverse risoluzioni e familiarità con pre-processori come Sass.",

        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },

      {
        name: "JavaScript",

        description:
          "Programmazione dinamica, manipolazione del DOM (Document Object Model), gestione di eventi e conoscenza dei concetti di programmazione asincrona.",

        imageUrl:
          "https://wpguru.co.uk/wp-content/uploads/2013/09/Javascript-Logo.png",
      },

      {
        name: "TypeScript",

        description:
          "Sviluppo di applicazioni scalabili e manutenibili con tipizzazione statica, sfruttando le funzionalità del linguaggio per migliorare la qualità del codice.",

        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },

      {
        name: "React",

        description:
          "Esperienza nello sviluppo di interfacce utente dinamiche e reattive utilizzando React, la sua libreria di componenti, Hooks e gestione dello stato (es. Context API, Redux - conoscenza di base).",

        imageUrl:
          "https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-1679x2048-hjal07w8.png",
      },
    ],
  },

  {
    title: "Backend Development",

    skills: [
      {
        name: "Node.js",

        description:
          "Sviluppo di applicazioni lato server con JavaScript e l'ecosistema Node.js, creazione di API RESTful e gestione di database (es. MongoDB, PostgreSQL - conoscenza di base).",

        imageUrl:
          "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
      },
    ],
  },

  {
    title: "Tools & Technologies",

    skills: [
      {
        name: "Git",

        description:
          "Controllo di versione distribuito per la gestione del codice sorgente, collaborazione in team e gestione di branch.",

        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      },

      {
        name: "npm",

        description:
          "Gestione delle dipendenze e dei pacchetti per progetti JavaScript.",

        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jsL60TRaLJhvwQpSqsYIdryZY6cxsARwDA&s",
      },

      {
        name: "VS Code",

        description:
          "Ambiente di sviluppo integrato con funzionalità avanzate per la produttività.",

        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },

      {
        name: "Figma",

        description: "Strumento per la progettazione UI e la prototipazione.",

        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png",
      },
    ],
  },
];

const About = () => {
  const aboutSectionRef = useRef<HTMLElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const [hasAnimated, setHasAnimated] = useState(false);

  const [currentText, setCurrentText] = useState("");

  const [textIndex, setTextIndex] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);

  const [typingSpeed, setTypingSpeed] = useState(50);

  const [pauseDuration, setPauseDuration] = useState(2000);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const sentences = [
    "Sono un UX / UI Designer con soluzioni innovative e grafiche per i tuoi prodotti.",

    "Creo esperienze utente coinvolgenti e intuitive.",

    "Il mio obiettivo è trasformare le idee in realtà digitali.",

    "Passionato di design e tecnologia, sempre alla ricerca di nuove sfide.",
  ];

  const [showImages, setShowImages] = useState(false);

  const [togglePosition, setTogglePosition] = useState("text");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            if (!hasAnimated) {
              setHasAnimated(true);
            }
          }
        });
      },

      {
        threshold: 0.1,
      }
    );

    const currentRef = aboutSectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (hasAnimated) {
      const typeText = () => {
        const i = textIndex % sentences.length;

        const fullText = sentences[i];

        const current = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);

        setCurrentText(current);

        if (!isDeleting && current === fullText) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        } else if (isDeleting && current === "") {
          setIsDeleting(false);

          setTextIndex(i + 1);
        }

        timer = setTimeout(typeText, typingSpeed);
      };

      timer = setTimeout(typeText, typingSpeed);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [
    textIndex,

    currentText,

    isDeleting,

    hasAnimated,

    sentences,

    typingSpeed,

    pauseDuration,
  ]);

  const toggleSkillDescription = (skillName: string, groupTitle: string) => {
    setExpandedSkill((prevSkill) =>
      prevSkill === skillName ? null : skillName
    );

    setExpandedGroup((prevGroup) =>
      prevGroup === groupTitle ? null : groupTitle
    );
  };

  const handleToggleShowImages = () => {
    setShowImages(!showImages);

    setTogglePosition((prev) => (prev === "text" ? "icons" : "text"));
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },

    visible: {
      opacity: 1,

      y: 0,

      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -10 },

    visible: {
      opacity: 1,

      y: 0,

      transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
    },
  };

  // Varianze per l'animazione a zig-zag delle card

  const cardZigZagVariants = {
    hiddenLeft: { opacity: 0, x: -100 },

    visibleLeft: {
      opacity: 1,

      x: 0,

      transition: { duration: 0.8, ease: "easeOut" },
    },

    hiddenRight: { opacity: 0, x: 100 },

    visibleRight: {
      opacity: 1,

      x: 0,

      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },

    visible: {
      opacity: 1,

      scale: 1,

      transition: { duration: 0.3, ease: "easeInOut" },
    },

    whileHover: { scale: 1.1 },

    whileTap: { scale: 0.95 },
  };

  const descriptionVariants = {
    initial: { opacity: 0, height: 0 },

    animate: {
      opacity: 1,

      height: "auto",

      transition: {
        height: { duration: 0.4, ease: "easeInOut" },

        opacity: { duration: 0.2, delay: 0.1 },
      },
    },

    exit: {
      opacity: 0,

      height: 0,

      transition: {
        height: { duration: 0.4, ease: "easeInOut" },

        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <section
      className={`about ${isVisible ? "fade-in" : ""}`}
      ref={aboutSectionRef}
    >
      <motion.div
        className="background-heading"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={headingVariants}
      >
        <motion.h1 variants={headingVariants}>
          Benvenuto nel mio mondo!
        </motion.h1>

        <motion.p variants={subtitleVariants} className="subtitle">
          {currentText}
        </motion.p>
      </motion.div>

      <div className="container">
        <motion.div
          className="about-content" // Questo è il genitore Flexbox per le card
          initial="hidden" // Puoi rimuovere questa animazione generale se non la vuoi sulle card all'inizio
          animate={isVisible ? "visible" : "hidden"}

          // variants={textVariants} // Questa variante potrebbe causare conflitti, meglio rimuoverla o ridefinirla
        >
          {/* Card "Chi sono" - allineata a sinistra */}

          <motion.div
            className="section right-align"
            initial="hiddenLeft"
            animate={isVisible ? "visibleLeft" : "hiddenLeft"}
            variants={cardZigZagVariants}
            custom={0} // Custom prop per lo staggered delay se vuoi, ma con i variants diretti non è sempre necessario
          >
            <h3>Chi sono</h3>

            <p>
              Ciao! Sono Alberto, uno sviluppatore web e UX/UI designer con sede
              nella bellissima Bologna. La mia passione per la creazione di
              esperienze digitali significative è nata dalla curiosità di
              comprendere come la tecnologia possa migliorare la vita delle
              persone.
            </p>
          </motion.div>

          {/* Card "Il mio percorso" - allineata a sinistra */}

          <motion.div
            className="section left-align"
            initial="hiddenLeft"
            animate={isVisible ? "visibleLeft" : "hiddenLeft"}
            variants={cardZigZagVariants}
            custom={1}
          >
            <h3>Il mio percorso</h3>

            <p>
              Il mio percorso nel mondo del web è iniziato con lo studio
              autonomo e la realizzazione di progetti personali focalizzati
              sullo sviluppo frontend. Da allora, ho avuto l'opportunità di
              lavorare su diversi progetti, sia personali che collaborativi, che
              mi hanno permesso di applicare e affinare le mie competenze in
              vari contesti. Ogni esperienza mi ha fornito preziose competenze
              nello sviluppo di interfacce utente interattive e nella creazione
              di backend funzionali.
            </p>
          </motion.div>

          {/* Card "La mia filosofia" - allineata a destra */}

          <motion.div
            className="section right-align"
            initial="hiddenRight"
            animate={isVisible ? "visibleRight" : "hiddenRight"}
            variants={cardZigZagVariants}
            custom={2}
          >
            <h3>La mia filosofia</h3>

            <p>
              Credo fermamente che un buon design vada oltre l'estetica; deve
              essere intuitivo, accessibile e centrato sull'utente. Il mio
              approccio si basa sulla comprensione profonda delle esigenze degli
              utenti e sulla creazione di soluzioni che siano al contempo
              funzionali e visivamente accattivanti. Cerco sempre di iterare
              rapidamente, testare le ipotesi con gli utenti e mantenere la
              semplicità come principio guida.
            </p>
          </motion.div>

          {/* Card "Cosa mi appassiona" - allineata a sinistra */}

          <motion.div
            className="section left-align"
            initial="hiddenLeft"
            animate={isVisible ? "visibleLeft" : "hiddenLeft"}
            variants={cardZigZagVariants}
            custom={3}
          >
            <h3>Cosa mi appassiona</h3>

            <p>
              Sono particolarmente entusiasta di esplorare nuove tecnologie e di
              applicarle per risolvere problemi reali. Mi affascina il design di
              interfacce complesse che semplificano l'interazione per l'utente e
              lo sviluppo di applicazioni web performanti che offrano
              un'esperienza utente fluida e reattiva. Trovo stimolante il
              continuo apprendimento e la sfida di rimanere aggiornato con le
              ultime tendenze del settore.
            </p>
          </motion.div>

          {/* Card "Guardando al futuro" - allineata a destra */}

          <motion.div
            className="section right-align"
            initial="hiddenRight"
            animate={isVisible ? "visibleRight" : "hiddenRight"}
            variants={cardZigZagVariants}
            custom={4}
          >
            <h3>Guardando al futuro</h3>

            <p>
              Sono sempre alla ricerca di nuove sfide e opportunità per crescere
              professionalmente e contribuire a progetti stimolanti. Il mio
              obiettivo è continuare ad approfondire le mie competenze in React
              e Node.js, esplorare nuove librerie e framework, e collaborare con
              team innovativi per creare prodotti che abbiano un impatto
              positivo sulla vita delle persone.
            </p>
          </motion.div>

          {/* Paragrafo finale fuori dalle card */}

          <p
            style={{
              color: "#d1d1d1",

              textAlign: "center",

              maxWidth: "800px",

              margin: "40px auto 0",
            }}
          >
            In questo portfolio, puoi trovare alcuni dei progetti su cui ho
            lavorato. Spero che ti diano un'idea della mia passione e delle mie
            capacità.
          </p>
        </motion.div>

        <div className="skills">
          <h4>Competenze</h4>

          <div className="toggle">
            <div className="toggle-container">
              <button
                className={`toggle-button ${!showImages ? "active" : ""}`}
                onClick={handleToggleShowImages}
              >
                Text
              </button>

              <button
                className={`toggle-button ${showImages ? "active" : ""}`}
                onClick={handleToggleShowImages}
              >
                Icons
              </button>
            </div>
          </div>

          {skillsData.map((group) => (
            <div className="skills-group" key={group.title}>
              <h4>{group.title}</h4>

              <div className="skills-row">
                {group.skills.map((skill, index) => {
                  return (
                    <React.Fragment key={skill.name}>
                      <motion.div
                        variants={skillItemVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        custom={index}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className={`skill-item ${
                          expandedSkill === skill.name ? "expanded" : ""
                        } ${showImages ? "show-images" : ""}`}
                        onClick={() =>
                          toggleSkillDescription(skill.name, group.title)
                        }
                      >
                        {showImages && skill.imageUrl ? (
                          <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            style={{
                              maxWidth: "50px",

                              maxHeight: "50px",

                              borderRadius: "5px",
                            }}
                          />
                        ) : (
                          <strong>{skill.name}</strong>
                        )}
                      </motion.div>
                    </React.Fragment>
                  );
                })}
              </div>

              <AnimatePresence>
                {expandedGroup === group.title && expandedSkill && (
                  <motion.div
                    className="skill-description"
                    variants={descriptionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {group.skills.find((skill) => skill.name === expandedSkill)
                      ?.description || ""}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="why-me">
          <button className="why-me-button">Perché scegliere me</button>

          <div className="why-me-title">
            <h2>
              <span>Perché io come</span>

              <span style={{ color: "#83858D" }}> Web Developer</span>
            </h2>

            <p>Why Partner with Me for the Design Excellence</p>
          </div>

          <div className="why-me-cards">
            <h2>Senior Designer.</h2>

            <p>
              Experience and expertise at your fingertips, ensuring exceptional
              design quality.
            </p>
          </div>

          <div className="why-me-cards">
            <h2>Senior Designer.</h2>

            <p>
              Experience and expertise at your fingertips, ensuring exceptional
              design quality.
            </p>
          </div>

          <div className="why-me-cards">
            <h2>Senior Designer.</h2>

            <p>
              Experience and expertise at your fingertips, ensuring exceptional
              design quality.
            </p>
          </div>

          <div className="why-me-cards">
            <h2>Senior Designer.</h2>

            <p>
              Experience and expertise at your fingertips, ensuring exceptional
              design quality.
            </p>
          </div>
        </div>

        <div className="personal-details">
          <h3>Dettagli personali</h3>

          <ul>
            <li>
              <strong>Nome:</strong> Alberto Cavazzini
            </li>

            <li>
              <strong>Città:</strong> Bologna, Italy
            </li>

            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:alberto.cavazzini97@gmail.com">
                alberto.cavazzini97@gmail.com
              </a>
            </li>

            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/alberto-cavazzini-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Il mio profilo LinkedIn
              </a>
            </li>

            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/albertocavazzini"
                target="_blank"
                rel="noopener noreferrer"
              >
                Il mio profilo GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
