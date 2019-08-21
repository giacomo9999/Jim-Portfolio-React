import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div className="container-inner">
        <div className="copy-block">
          <h2 className="bold">{this.props.projData.name}</h2>
          <div className="spacer5" />
          <p>{this.props.projData.description}</p>
          <p className="bold">{this.props.projData.stack}</p>
        </div>
      </div>
    );
  }
}

export default Project;
