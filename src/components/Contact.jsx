import React from "react";
import sprite from "../img/sprite.svg";

export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      <footer className="footer">
        <h5 data-aos="fade-up" className="footer__header">Contato</h5>

        <div data-aos="fade-up" className="footer__container">
          <a
            data-aos="flip-right"
            className="footer__item"
            href="https://www.linkedin.com/in/neandermenezes/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="footer__icon">
              <use href={sprite + "#icon-linkedin"} />
            </svg>
            <span>Linkedin</span>
          </a>

          <a 
            data-aos="flip-right"
            className="footer__item"
            href="https://github.com/neandermenezes/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="footer__icon">
              <use href={ sprite + "#icon-github"} />
            </svg>
            <span>Github</span>
          </a>
        </div>

        <span className="footer__rights">Desenvolvido por Neander Menezes</span>
        
        <div className="footer__mail">
          <svg className="footer__icon--mail">
            <use href={ sprite + "#icon-mail"} />
          </svg>

          <span className="email">neander2801@gmail.com</span>
        </div>

      </footer>
    </div>
  );
}
