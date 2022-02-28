import React from "react";
import sprite from "../img/sprite.svg";

export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      <footer className="footer">
        <h5 className="footer__header">Contato</h5>

        <div className="footer__container">
          <a
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
      </footer>
    </div>
  );
}
