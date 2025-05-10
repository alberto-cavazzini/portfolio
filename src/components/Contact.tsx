import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contatti</h2>
        <p>
          Sentiti libero di contattarmi per qualsiasi domanda, opportunità di
          collaborazione o semplicemente per un saluto! Puoi utilizzare il
          modulo sottostante o trovarmi sui seguenti canali:
        </p>
        <div className="contact-info">
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:[La tua Email]">[La tua Email]</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="[Il tuo profilo LinkedIn]"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Il tuo nome su LinkedIn]
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="[Il tuo profilo GitHub]"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Il tuo nome su GitHub]
              </a>
            </li>
          </ul>
        </div>

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
