import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import resumeImage from "/images/resume/resume.png";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume-container content-container">
        <h1 className="text-header">Resume</h1>
        <div className="resume-image-container">
          <img src={resumeImage} alt="" className="resume-image" />
        </div>
        <span className="text-content">
          I’m currently looking for opportunities relevant to my skillset! If
          you’re interested in learning more about me for possible
          collaborations in the future, please feel free to download my resume
          below or reach out to me through e-mail:
        </span>
        <div className="resume-buttons-container">
          <a
            href="https://drive.google.com/uc?export=download&id=1mRfnFUzISbWQAXSR8VV9pGMw_tkKp5Vj"
            className="filled-button-inverted"
          >
            <div className="download-button button">
              <FontAwesomeIcon icon={faDownload} className="button-icon" />
              <span className="button-text">Download</span>
            </div>
          </a>
          <a
            href={`mailto:${"sean@julagay.net"}`}
            className="outlined-button-inverted"
          >
            <div className="email-button button">
              <FontAwesomeIcon icon={faEnvelope} className="button-icon" />
              <span className="button-text">Email</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
