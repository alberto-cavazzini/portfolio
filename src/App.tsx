import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Importa il componente Footer
import ScrollToTopButton from "./components/ScrollToTopButton"; // Importa il nuovo componente TSX
import ScrollToTop from "./components/ScrollToTop";
import "./App.css"; // Assicurati che questo sia importato

function App() {
  const resumeUrl =
    "https://www.figma.com/design/DE10s1y7IDKYa4e6ichT2F/CV-Alberto-Cavazzini?node-id=0-1&p=f&t=EehYjaiLj46uOV9q-0";

  return (
    <Router>
      <ScrollToTop />
      {/* Questo è il nuovo div principale che sarà un container flex */}
      <div className="main-app-container">
        <Navbar resumeUrl={resumeUrl} />
        {/* Questo div avvolgerà il contenuto principale e si espanderà */}
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Renderizza il componente Footer qui */}
        <ScrollToTopButton /> {/* Aggiungi il bottone qui */}
      </div>
    </Router>
  );
}

export default App;
