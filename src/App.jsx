import React, { useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";

export default function App() {
  const [aboutMeYPos, setAboutMeYPos] = useState(0);

  const callFromChild = (value) => {
    // console.log("Passed value is ", value);
    setAboutMeYPos(value);
  };

  return (
    <div className="app">
      <Navbar secondSectionPos={aboutMeYPos} />
      <Home />
      <AboutMe callback={callFromChild} />
      <MyProjects />
      <Resume />
    </div>
  );
}
