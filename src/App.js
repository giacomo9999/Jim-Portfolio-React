import React, { Component } from "react";
import logo from "./JGary_logo.svg";
import About from "./About";
import Projects from "./Projects";
import "./App.css";
import "./media-queries.css";

class App extends Component {
  state = { aboutPanelOpen: false, projectsPanelOpen: false };

  toggleAboutPanel = e => {
    e.preventDefault();
    console.log("Toggling About Panel");
    this.setState({ aboutPanelOpen: !this.state.aboutPanelOpen });
  };
  toggleProjectsPanel = e => {
    this.setState({ projectsPanelOpen: !this.state.projectsPanelOpen });
  };

  render() {
    const isAboutOpen = this.state.aboutPanelOpen;
    const isProjectsOpen = this.state.projectsPanelOpen;
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
        </div>

        <div className="container-invisible">
          {isAboutOpen ? (
            <About closePanel={this.toggleAboutPanel} />
          ) : (
            <button className="big" onClick={this.toggleAboutPanel} >About Me</button>
          )}
          <div className="spacer10" />
          {isProjectsOpen ? (
            <Projects closePanel={this.toggleProjectsPanel} />
          ) : (
            <button className="big" onClick={this.toggleProjectsPanel}>Apps I've Built</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
