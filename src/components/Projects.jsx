import React from "react";
import ProjectsData from "../services/ProjectsData";
import sprite from "../img/sprite.svg";

export default function Projects() {
  return (
    <div className="projects-section">
      {ProjectsData.map(({ title, description, image, tools, repository }) => (
        <div data-aos="fade-right" className="project">
          <div className="project__card">
            <h3 className="project__title">{title}</h3>
            <p className="project__description">{description}</p>
          </div>
          <div className="project__details">
            <img className="project__img" src={image} alt="project-example" />
            <div className="project__toolbox">
              <ul className="project__tools">
                {tools.map((tool) => (
                  <li className="project__tools-item"> {tool} </li>
                ))}
              </ul>
              <a className="project__icon" href={repository} target="_blank" rel="noreferrer">
                <svg className="project__icon">
                  <use href={sprite + "#icon-github"} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
