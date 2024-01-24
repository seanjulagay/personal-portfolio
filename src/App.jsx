import React from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Resume from "./components/Resume";

export default function App() {
  return (
    <div className="app">
      <Home />
      <AboutMe />
      <MyProjects />
      <Resume />
    </div>
  );
}
