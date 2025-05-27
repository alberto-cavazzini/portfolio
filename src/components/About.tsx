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
    title: "Sviluppo Frontend",
    skills: [
      {
        name: "HTML5",
        description:
          "Il fondamento del web! Uso HTML5 per strutturare contenuti chiari e accessibili, garantendo una base solida per ogni applicazione.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
      },
      {
        name: "CSS",
        description:
          "Trasformo il design in realtà. Con CSS, do vita alle tue idee, creando interfacce utente eleganti e responsive che si adattano a ogni dispositivo.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "SCSS",
        description:
          "Potenzio il CSS con funzionalità avanzate. SCSS mi permette di scrivere stili più organizzati, modulari e manutenibili, accelerando il processo di design.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
      },
      {
        name: "JavaScript",
        description:
          "Il motore dell'interattività. Implemento logiche complesse e funzionalità dinamiche per rendere le applicazioni fluide e coinvolgenti.",
        imageUrl:
          "https://wpguru.co.uk/wp-content/uploads/2013/09/Javascript-Logo.png",
      },
      {
        name: "TypeScript",
        description:
          "Aggiungo robustezza al codice. Con TypeScript, sviluppo applicazioni più sicure, scalabili e facili da manutenere, riducendo gli errori e migliorando la collaborazione.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
      {
        name: "React",
        description:
          "Costruisco interfacce utente moderne e performanti. Sfrutto la potenza di React per creare componenti riutilizzabili e architetture scalabili, ottimizzando lo sviluppo e l'esperienza utente.",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-1679x2048-hjal07w8.png",
      },
    ],
  },
  {
    title: "Sviluppo Backend",
    skills: [
      {
        name: "Node.js",
        description:
          "Costruisco il cuore delle applicazioni. Con Node.js, creo API robuste e scalabili, gestendo la logica server-side e l'interazione con i database per un'esperienza utente fluida.",
        imageUrl:
          "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
      },
      {
        name: "Python",
        description:
          "Sfrutto la versatilità di Python per lo sviluppo backend, automazione e analisi dati, creando soluzioni efficienti e potenti per ogni esigenza.",
        imageUrl: "/images/python-icon.png",
      },
    ],
  },
  {
    title: "Strumenti e Tecnologie",
    skills: [
      {
        name: "Git",
        description:
          "Garantisco una collaborazione efficiente e un controllo totale delle versioni del codice, essenziale per team di sviluppo agili e progetti complessi.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      },
      {
        name: "GitHub",
        description:
          "Non solo controllo versione, ma anche piattaforma di collaborazione. Uso GitHub per gestire repository, revisioni di codice e contribuire a progetti open-source, garantendo trasparenza e organizzazione.",
        imageUrl: "/images/github-icon.png",
      },
      {
        name: "npm",
        description:
          "Essenziale per lo sviluppo JavaScript moderno, semplifico la gestione delle dipendenze e l'automazione dei flussi di lavoro, per un'efficienza senza pari.",
        imageUrl: "https://img.icons8.com/?size=96&id=24895&format=png",
      },
      {
        name: "VS Code",
        description:
          "Il mio ambiente di sviluppo preferito: potente, personalizzabile e ricco di estensioni. Massimizzo la produttività e la qualità del codice con un editor che si adatta alle mie esigenze.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Linux",
        description:
          "Sfrutto la potenza e la flessibilità di Linux come ambiente di sviluppo, garantendo stabilità e controllo per ogni progetto.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
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
  const [typingSpeed] = useState(50);
  const [pauseDuration] = useState(2000);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sentences = [
    "Trasformo idee in esperienze digitali innovative.",
    "Sviluppo soluzioni web dinamiche e coinvolgenti.",
    "Ogni riga di codice, una soluzione su misura per te.",
    "Porto la tua visione sul web con passione e precisione.",
  ];

  const [showImages, setShowImages] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    const newExpandedSkill = expandedSkill === skillName ? null : skillName;
    setExpandedSkill(newExpandedSkill);

    if (newExpandedSkill === null) {
      if (expandedGroup === groupTitle) {
        setExpandedGroup(null);
      }
    } else {
      setExpandedGroup(groupTitle);
    }
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
    initial: { opacity: 0, maxHeight: 0 },
    animate: {
      opacity: 1,
      maxHeight: "500px",
      transition: {
        maxHeight: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.2, delay: 0.1 },
      },
    },
    exit: {
      opacity: 0,
      maxHeight: 0,
      transition: {
        maxHeight: { duration: 0.4, ease: "easeInOut" },
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
          La mia storia, la tua soluzione.
        </motion.h1>
        <motion.p variants={subtitleVariants} className="subtitle">
          {currentText}
        </motion.p>
      </motion.div>

      <div className="container">
        <motion.div
          className="about-content"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="intro-flex-container">
            <img
              src="/images/Adobe Express - file (2).png"
              alt=""
              className="image-chisono"
            />
            {/* Card "Chi sono" */}
            <motion.div
              className="section right-align"
              initial="hiddenLeft"
              animate={isVisible ? "visibleLeft" : "hiddenLeft"}
              variants={cardZigZagVariants}
              custom={0}
            >
              <h3>Chi sono</h3>
              <p>
                Ciao! Sono Alberto, il tuo Web Developer! Ho da sempre una
                passione per l'informatica e la creazione di applicazioni web.
                La mia avventura nel mondo del codice è iniziata dalla curiosità
                di dare vita a idee digitali, e da allora non mi sono più
                fermato!
              </p>
            </motion.div>
          </div>
          <div className="intro-flex-container">
            {/* Card "Cosa faccio" */}
            <motion.div
              className="section left-align"
              initial="hiddenLeft"
              animate={isVisible ? "visibleLeft" : "hiddenLeft"}
              variants={cardZigZagVariants}
              custom={1}
            >
              <h3>Cosa faccio</h3>
              <p>
                Mi occupo dello sviluppo completo di applicazioni web, partendo
                dalla progettazione dell'interfaccia utente (frontend) fino alla
                logica del server e alla gestione dei dati (backend). Ho
                consolidato le mie competenze attraverso la realizzazione di
                diversi progetti personali, che mi hanno permesso di esplorare e
                padroneggiare le tecnologie più innovative del settore.
              </p>
            </motion.div>
            <img
              src="/images/Adobe Express - file (3).png"
              alt=""
              className="image-cosa"
            />
          </div>
          {/* Card "La mia filosofia" */}
          <motion.div
            className="section right-align"
            initial="hiddenRight"
            animate={isVisible ? "visibleRight" : "hiddenRight"}
            variants={cardZigZagVariants}
            custom={2}
          >
            <h3>La mia filosofia</h3>
            <p>
              Credo che il successo di un progetto si basi sull'innovazione,
              sulla collaborazione e sulla formazione continua. Amo lavorare in
              team e mettermi alla prova con sfide sempre più complesse, perché
              è lì che le idee migliori prendono forma e la crescita
              professionale accelera. Il mio obiettivo è portare valore e
              qualità in ogni linea di codice.
            </p>
          </motion.div>

          {/* Card "Ciò che cerco" */}
          <motion.div
            className="section left-align"
            initial="hiddenLeft"
            animate={isVisible ? "visibleLeft" : "hiddenLeft"}
            variants={cardZigZagVariants}
            custom={3}
          >
            <h3>Ciò che cerco</h3>
            <p>
              Il mio scopo è quello di contribuire a soluzioni tech innovative
              per crescere professionalmente e lasciare il mio segno.
            </p>
          </motion.div>

          {/* Card "Oltre il codice" */}
          <motion.div
            className="section right-align"
            initial="hiddenRight"
            animate={isVisible ? "visibleRight" : "hiddenRight"}
            variants={cardZigZagVariants}
            custom={4}
          >
            <h3>Oltre il codice</h3>
            <p>
              Fuori dalla programmazione, la mia curiosità mi spinge a esplorare
              tematiche legate alla leadership, alle strategie aziendali
              innovative e ai processi di crescita. Cerco di ampliare la mia
              visione su come l'innovazione possa trasformare il mondo, principi
              che amo applicare anche al mio lavoro di sviluppatore.
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
            Esplora il mio portfolio per scoprire i progetti che ho realizzato.
            Sono pronto a trasformare le tue idee in realtà!
          </p>
        </motion.div>
        ---
        <div className="skills">
          <h4 className="skills-title">Le mie competenze</h4>
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
            <motion.div
              className="skills-group"
              key={group.title}
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
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
            </motion.div>
          ))}
        </div>
        ---
        <div className="why-me">
          <button className="why-me-button">Perché scegliere me</button>
          <div className="why-me-title">
            <h2>
              <span>Perché io come</span>
              <span style={{ color: "#83858D" }}> Web Developer</span>
            </h2>
            <p>Why Partner with Me for Design Excellence</p>
          </div>
          <div className="why-me-cards">
            <h2>Competenza Certificata</h2>
            <p>
              Esperienza e competenza a tua disposizione, garantendo una qualità
              di sviluppo eccezionale.
            </p>
          </div>
          <div className="why-me-cards">
            <h2>Approccio Orientato al Problema</h2>
            <p>
              Non mi limito a scrivere codice, ma risolvo problemi complessi con
              soluzioni innovative e scalabili.
            </p>
          </div>
          <div className="why-me-cards">
            <h2>Passione e Aggiornamento Continuo</h2>
            <p>
              Sempre all'avanguardia sulle ultime tecnologie e tendenze del
              mercato, per offrirti soluzioni moderne e competitive.
            </p>
          </div>
          <div className="why-me-cards">
            <h2>Collaborazione e Crescita</h2>
            <p>
              Amo lavorare in team, contribuire attivamente e imparare da ogni
              nuova sfida per superare le aspettative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
