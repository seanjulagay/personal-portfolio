import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import resumeImage from "/images/resume/resume.png";

export default function Resume({ callback }) {
  const myRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (myRef.current != null) {
        const offsetTop = myRef.current.offsetTop;
        callback(offsetTop);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div id="resume" ref={myRef}>
      <div className="resume-container content-container">
        <h1 className="text-header">Resume</h1>
        <div className="resume-content-container">
          <div className="resume-image-container">
            <img src={resumeImage} alt="" className="resume-image" />
          </div>
          <div className="resume-text-container">
            <span className="text-content">
              I’m currently looking for opportunities where I can showcase and
              further improve my skillset. If you’re interested in learning more
              about me for possible collaborations in the future, please feel
              free to download my resume below or reach out to me through
              e-mail:
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
      </div>
    </div>
  );
}
