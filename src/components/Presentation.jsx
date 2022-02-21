import React from "react";
import Neander from "../img/neandsemfundo.png";

export default function Presentation() {
  return (
    <section className="presentation-section">
      <div className="presentation">
        <div className="presentation__text">
          <h2 className="header__secondary">Eu sou</h2>
          <h1 className="header__primary">
            Neander
            <span className="header__primary dot">Menezes</span>
          </h1>
        </div>
        <img
          className="presentation__picture"
          src={Neander}
          alt="developer's face"
        />
        <div className="presentation__info">
          <p className="presentation__description">Desenvolvedor web</p>
          <ul className="presentation__skills">
            <li className="presentation__item">ENG. COMPUTAÇÃO</li>
            <li className="presentation__item">FRONT-END</li>
            <li className="presentation__item">BACK-END</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
