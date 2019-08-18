import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="container-inner">
        <h1>Projects</h1>
        <button className="jg_button" onClick={this.props.closePanel}>
          Close
        </button>
        
      </div>
    );
  }
}

export default Projects;
