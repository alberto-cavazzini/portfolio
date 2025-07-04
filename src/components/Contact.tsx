import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <p>
        Sentiti libero di contattarmi per qualsiasi domanda, opportunità di
        collaborazione o semplicemente per un saluto! Puoi trovarmi su{" "}
        <a
          href="https://www.linkedin.com/in/albertocavazzini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </p>
      <div className="container">
        <h3>Oppure, inviami un messaggio:</h3>
        <form
          className="contact-form"
          action="https://formspree.io/f/mgvkzqrr"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Il tuo Nome Completo:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" es. Mario Rossi"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">La tua Email di Contatto:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="es. mario.rossi@esempio.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Il tuo Messaggio (descrivi la tua richiesta):
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Sono interessato a..."
              required
            ></textarea>
          </div>
          <button type="submit">Invia messaggio</button>

          {/* Campi aggiuntivi che Formspree potrebbe richiedere (opzionale) */}
          {/* <input type="hidden" name="_subject" value="Nuovo messaggio dal tuo portfolio" /> */}
          {/* <input type="hidden" name="_next" value="https://iltuosito.com/grazie" /> */}
        </form>
      </div>
    </section>
  );
}

export default Contact;
