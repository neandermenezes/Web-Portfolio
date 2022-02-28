import React from "react";

export default function HeaderNav() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#projects" className="nav__link">Projetos</a>
        <a href="#tools" className="nav__link">Ferramentas</a>
        <a href="#contact" className="nav__link">Contato</a>
      </nav>
    </header>
  );
}
