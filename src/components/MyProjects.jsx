import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import projects from "../data/projects.json";
import miniProjects from "../data/miniprojects.json";
import unavailable from "/images/myprojects/unavailable.png";
import portfolio from "/images/myprojects/portfolio.png";
import jannaPortfolio from "/images/myprojects/janna-portfolio.png";
import uncoveringTheDeep from "/images/myprojects/uncovering-the-deep.png";
import smileSolutions from "/images/myprojects/smile-solutions.png";
import lostInSpace from "/images/myprojects/lost-in-space.png";
import automataCompiler from "/images/myprojects/automata-compiler.png";
import apolloMusicShop from "/images/myprojects/apollo-music-shop.png";
import simpleCalculator from "/images/myprojects/simple-calculator.png";
import spinAndMunch from "/images/myprojects/spin-and-munch.gif";
import huddle from "/images/myprojects/miniprojects/huddle.png";
import fourCard from "/images/myprojects/miniprojects/four-card.png";
import aboutMe from "/images/myprojects/miniprojects/about-me.png";
import pokedex from "/images/myprojects/pokedex.gif";
import todo from "/images/myprojects/miniprojects/todo.png";

export default function MyProjects({ callback }) {
  const previewImages = [
    pokedex,
    jannaPortfolio,
    portfolio,
    uncoveringTheDeep,
    smileSolutions,
    lostInSpace,
    automataCompiler,
    apolloMusicShop,
    spinAndMunch,
  ];

  const previewImagesMini = [todo, simpleCalculator, huddle, fourCard, aboutMe];

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

  const mappedProjects = projects.map((item, index) => {
    const techSpaced = item.technologies.join(", ");

    return (
      <div
        className={`project-container ${index % 2 != 0 ? "inverted" : ""}`}
        key={index}
      >
        <img src={previewImages[index]} alt="" className="project-img" />
        <div className="project-text">
          <h2 className="text-subheader">{item.name}</h2>
          <div className="project-details">
            <span className="text-content">
              <b>Status: </b>
              {item.status}
            </span>
            <span className="text-content">
              <b>Technologies: </b>
              {techSpaced}
            </span>
          </div>
          <span className="text-content">{item.description}</span>
          <div className="project-buttons-container">
            {item.btnFillSrc && (
              <a
                href={item.btnFillSrc}
                className="filled-button"
                target="_blank"
              >
                <div className="live-button button">
                  <FontAwesomeIcon icon={faRocket} className="button-icon" />
                  <span className="button-text">{item.btnFillLabel}</span>
                </div>
              </a>
            )}
            {item.btnOutlineSrc && (
              <a
                href={item.btnOutlineSrc}
                className="outlined-button"
                target="_blank"
              >
                <div className="github-button button">
                  <FontAwesomeIcon icon={faGithub} className="button-icon" />
                  <span className="button-text">{item.btnOutlineLabel}</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  });

  const mappedMiniProjects = miniProjects.map((item, index) => {
    const techSpaced = item.technologies.join(", ");

    return (
      <div
        className={`project-container ${index % 2 != 0 ? "inverted" : ""}`}
        key={index}
      >
        <img src={previewImagesMini[index]} alt="" className="project-img" />
        <div className="project-text">
          <h2 className="text-subheader">{item.name}</h2>
          <div className="project-details">
            <span className="text-content">
              <b>Status: </b>
              {item.status}
            </span>
            <span className="text-content">
              <b>Technologies: </b>
              {techSpaced}
            </span>
          </div>
          <span className="text-content">{item.description}</span>
          <div className="project-buttons-container">
            {item.btnFillSrc && (
              <a
                href={item.btnFillSrc}
                className="filled-button"
                target="_blank"
              >
                <div className="live-button button">
                  <FontAwesomeIcon icon={faRocket} className="button-icon" />
                  <span className="button-text">{item.btnFillLabel}</span>
                </div>
              </a>
            )}
            {item.btnOutlineSrc && (
              <a
                href={item.btnOutlineSrc}
                className="outlined-button"
                target="_blank"
              >
                <div className="github-button button">
                  <FontAwesomeIcon icon={faGithub} className="button-icon" />
                  <span className="button-text">{item.btnOutlineLabel}</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="my-projects" ref={myRef}>
      <div className="my-projects-container content-container">
        <h1 className="text-header">My Projects</h1>
        {mappedProjects}
        <h1 className="text-header">Mini Projects</h1>
        {mappedMiniProjects}
      </div>
    </div>
  );
}
