import React, { useState, useEffect, useRef } from "react";
import htmlLogo from "/images/aboutme/html-logo.png";
import cssLogo from "/images/aboutme/css-logo.png";
import jsLogo from "/images/aboutme/js-logo.png";
import reactLogo from "/images/aboutme/react-logo.png";
import tailwindLogo from "/images/aboutme/tailwind-logo.png";
import csharpLogo from "/images/aboutme/csharp-logo.png";
import javaLogo from "/images/aboutme/java-logo.png";
import gitLogo from "/images/aboutme/git-logo.png";
import unityLogo from "/images/aboutme/unity-logo.png";
import figmaLogo from "/images/aboutme/figma-logo.png";
import photoshopLogo from "/images/aboutme/photoshop-logo.png";
import officeLogo from "/images/aboutme/office-logo.png";

export default function AboutMe({ callback }) {
  const images = [
    htmlLogo,
    cssLogo,
    jsLogo,
    reactLogo,
    tailwindLogo,
    csharpLogo,
    javaLogo,
    gitLogo,
    unityLogo,
    figmaLogo,
    photoshopLogo,
    officeLogo,
  ];

  const myRef = useRef();
  // const [yPos, setYPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (myRef.current != null) {
        const offsetTop = myRef.current.offsetTop;
        // setYPos(offsetTop);
        callback(offsetTop);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // console.log("About me is in ", yPos);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  // console.log("About me is in " + yPos);

  return (
    <div id="about-me" ref={myRef}>
      <div className="about-me-container content-container">
        <h1 className="text-header white-font">About Me</h1>
        <span className="text-content white-font">
          <span className="about-me-content">
            I’m a fresh graduate of De La Salle University - Dasmarinas that’s
            currently indulging in design, development, and all about making
            things look sleek, stylish, and responsive! My other backgrounds
            revolve around game development and UI/UX design. Currently, I make
            side projects to improve my skills and hopefully become a full-stack
            developer in the near future. I am a quick learner, and enjoy
            continuously digesting bits and pieces of information that can help
            me improve my skills. I deeply enjoy the field I am in, and I am
            passionate about developing and creating.
          </span>
          <span className="about-me-content">
            I’ve worked with different software and languages over the course of
            my degree, here are some of them:
            <div className="about-me-tech-container-parent">
              <div className="about-me-tech-container">
                {images.map((image, index) => {
                  return (
                    <img key={index} src={image} alt="" className="tech-img" />
                  );
                })}
              </div>
            </div>
          </span>
        </span>
      </div>
    </div>
  );
}
