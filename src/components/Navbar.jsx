import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faHamburger, faClose } from "@fortawesome/free-solid-svg-icons";
import Headroom from "react-headroom";

export default function Navbar({ secondSectionPos }) {
  const [opened, setOpened] = useState(false);

  const toggleOpen = () => setOpened((prevOpened) => !prevOpened);

  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);

  function logScroll() {
    setScrollY(window.scrollY);
    // console.log(new Date().getTime());
  }

  useEffect(() => {
    window.addEventListener("scroll", logScroll);
    // console.log(showNav);
    // console.log("Passed value to Navbar is ", secondSectionPos);
    if (scrollY !== 0) {
      if (scrollY >= secondSectionPos - 150) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    }

    return () => {
      window.removeEventListener("scroll", logScroll);
    };
  }, [scrollY, showNav]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpened(false);
      console.log(section);
    } else {
      console.log("section does not exist!");
    }
  };

  return (
    <div className="component-container">
      <Headroom>
        <div className={`navbar ${showNav ? "visible" : ""}`}>
          <div className="navbar-container">
            <h1 className="navbar-logo">Sean Julag-ay</h1>
            <FontAwesomeIcon
              icon={faHamburger}
              className="hamburger-icon"
              onClick={toggleOpen}
            />
            <ul className="menu-container">
              <li className="menu-item" onClick={() => scrollToSection("home")}>
                Home
              </li>
              <li
                className="menu-item"
                onClick={() => scrollToSection("about-me")}
              >
                About Me
              </li>
              <li
                className="menu-item"
                onClick={() => scrollToSection("my-projects")}
              >
                My Projects
              </li>
              <li
                className="menu-item"
                onClick={() => scrollToSection("resume")}
              >
                Resume
              </li>
            </ul>
          </div>
        </div>
      </Headroom>
      <div className={`mobile-menu ${opened ? "is-open" : ""}`}>
        <div className="mobile-menu-container">
          <FontAwesomeIcon
            icon={faClose}
            className="menu-close-icon"
            onClick={toggleOpen}
          />
          <ul className="mobile-menu-items-container">
            <li
              className="mobile-menu-item"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="mobile-menu-item"
              onClick={() => scrollToSection("about-me")}
            >
              About Me
            </li>
            <li
              className="mobile-menu-item"
              onClick={() => scrollToSection("my-projects")}
            >
              My Projects
            </li>
            <li
              className="mobile-menu-item"
              onClick={() => scrollToSection("resume")}
            >
              Resume
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
