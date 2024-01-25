import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import projects from "../data/projects.json";
import jannaPortfolio from "/images/myprojects/janna-portfolio.png";

export default function MyProjects() {
  const previewImages = [jannaPortfolio];

  const mappedProject = projects.map((item, index) => (
    <div className="project-container" key={index}>
      <img src={previewImages[index]} alt="" className="project-img" />
      <h2 className="text-subheader">{item.name}</h2>
      <div className="project-details">
        <span className="text-content">
          <b>Status: </b>
          {item.status}
        </span>
        <span className="text-content">
          <b>Technologies: </b>
          {item.technologies}
        </span>
      </div>
      <span className="text-content">{item.description}</span>
      <div className="project-buttons-container">
        {item.liveSite && (
          <a href={item.liveSite} className="filled-button" target="_blank">
            <div className="live-button button">
              <FontAwesomeIcon icon={faRocket} className="button-icon" />
              <span className="button-text">Live Site</span>
            </div>
          </a>
        )}
        {item.sourceCode && (
          <a href={item.sourceCode} className="outlined-button" target="_blank">
            <div className="github-button button">
              <FontAwesomeIcon icon={faGithub} className="button-icon" />
              <span className="button-text">Repository</span>
            </div>
          </a>
        )}
      </div>
    </div>
  ));

  return (
    <div id="my-projects">
      <div className="my-projects-container content-container">
        <h1 className="text-header">My Projects</h1>
        {mappedProject}
      </div>
    </div>
  );
}
