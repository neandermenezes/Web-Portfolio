import React from "react";
import sprite from "../img/sprite.svg";

export default function FrontToolsCard() {
  return (
    <div data-aos="fade-up" className="cardbox">
      <div data-aos="flip-right" className="icon-container">
        <svg className="tools__icon">
          <use href={sprite + "#icon-javascript"} />
        </svg>
        <span className="tools__description">Javascript</span>
      </div>

      <div data-aos="flip-right" className="icon-container"> 
        <svg className="tools__icon">
          <use href={sprite + "#icon-html-five"} />
        </svg>
        <span className="tools__description">HTML</span>
      </div>

      <div data-aos="flip-right" className="icon-container">
        <svg className="tools__icon">
          <use href={sprite + "#icon-css3"} />
        </svg>
        <span className="tools__description">CSS</span>
      </div>

      <div data-aos="flip-right" className="icon-container">
        <svg className="tools__icon">
          <use href={sprite + "#icon-react"} />
        </svg>
        <span className="tools__description">REACT</span>
      </div>

      <div data-aos="flip-right" className="icon-container">
        <svg className="tools__icon">
          <use href={sprite + "#icon-sass"} />
        </svg>
        <span className="tools__description">SASS</span>
      </div>

      <div data-aos="flip-right" className="icon-container">
        <svg className="tools__icon">
          <use href={sprite + "#icon-jest"} />
        </svg>
        <span className="tools__description">JEST/RTL</span>
      </div>
    </div>
  );
}
