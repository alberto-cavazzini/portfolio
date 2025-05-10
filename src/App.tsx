import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Importa il componente Footer
import "./App.css";

function App() {
  // Sostituisci con l'URL del tuo curriculum su Figma
  const resumeUrl =
    "https://www.figma.com/file/IL_TUO_ID_FILE/Il-tuo-Curriculum?type=design&node-id=0%3A1&mode=design&t=XYZ123abc-def4-5678-9ghi-jklm0nopqrs";

  return (
    <Router>
      <div>
        <Navbar resumeUrl={resumeUrl} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Renderizza il componente Footer qui */}
      </div>
    </Router>
  );
}

export default App;
