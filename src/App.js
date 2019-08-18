import React from "react";
import logo from "./JGary_logo.svg";
import About from "./About";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="container-outer">
        <About />
        <Projects/>
      </div>
    </div>
  );
}

export default App;
