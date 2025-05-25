import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <p>
        Sentiti libero di contattarmi per qualsiasi domanda, opportunità di
        collaborazione o semplicemente per un saluto! Puoi trovarmi su{" "}
        <a href="https://www.linkedin.com/in/albertocavazzini/">Linkedin</a>
      </p>
      <div className="container">
        <h3>Oppure, inviami un messaggio:</h3>
        <form
          className="contact-form"
          action="[IL TUO ENDPOINT URL DI FORMSPREE]"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio:</label>
            <textarea id="message" name="message" rows={5} required></textarea>
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
