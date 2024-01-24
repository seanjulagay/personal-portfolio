import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gradPic from "/images/home/gradpic.png";
import robot from "/images/misc/bg-robot.png";
import microchip from "/images/misc/bg-microchip.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-image-container">
          <img src={gradPic} alt="" className="home-image" />
        </div>
        <div className="home-text-container">
          <h2 className="text-subheader">Hi! I'm</h2>
          <h1 className="text-header">Sean Julag-ay</h1>
          <span className="text-content">
            A computer science graduate eager to improve their skills in
            software development. Always learning, always exploring_
          </span>
          <div className="home-buttons-container">
            <a
              href="https://www.linkedin.com/in/sean-austin-julag-ay-987448243/"
              target="_blank"
              className="filled-button"
            >
              <div className="linkedin-button button">
                <FontAwesomeIcon icon={faLinkedin} className="button-icon" />
                <span className="button-text">LinkedIn</span>
              </div>
            </a>
            <a
              href="https://github.com/seanjulagay"
              target="_blank"
              className="filled-button"
            >
              <div className="github-button button">
                <FontAwesomeIcon icon={faGithub} className="button-icon" />
                <span className="button-text">GitHub</span>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-images-container">
          <img src={robot} alt="" className="robot-img" />
          <img src={microchip} alt="" className="microchip-img" />
        </div>
      </div>
    </div>
  );
}
