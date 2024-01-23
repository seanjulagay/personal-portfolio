import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text-container">
          <h2 className="text-subheader">Hi! I'm</h2>
          <h1 className="text-header">Sean Julag-ay</h1>
          <span className="text-content">
            A computer science graduate eager to improve their skills in
            software development. Always learning, always exploring_
          </span>
          <div className="home-buttons-container">
            <a href="" className="filled-button">
              <div className="linkedin-button button">
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="button-text">LinkedIn</span>
              </div>
              <div className="github-button button">
                <FontAwesomeIcon icon={faGithub} />
                <span className="button-text">GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
