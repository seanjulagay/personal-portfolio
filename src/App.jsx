import React, { useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";

export default function App() {
  const [aboutMeYPos, setAboutMeYPos] = useState(0);
  const [myProjectsYPos, setMyProjectsYPos] = useState(0);
  const [resumeYPos, setResumeYPos] = useState(0);

  const aboutMeYPosCallback = (value) => {
    // console.log("Passed value is ", value);
    setAboutMeYPos(value);
    // console.log("AboutMe YPOS: ", aboutMeYPos);
  };

  const myProjectsYPosCallback = (value) => {
    setMyProjectsYPos(value);
  };

  const resumeYPosCallback = (value) => {
    setResumeYPos(value);
  };

  return (
    <div className="app">
      <Navbar secondSectionPos={aboutMeYPos} />
      <Home />
      <AboutMe callback={aboutMeYPosCallback} />
      <MyProjects callback={myProjectsYPosCallback} />
      <Resume callback={resumeYPosCallback} />
    </div>
  );
}
