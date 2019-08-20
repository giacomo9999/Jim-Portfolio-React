import React, { Component } from "react";
import ContactForm from "./ContactForm";

class About extends Component {
  render() {
    const lightButton = { color:"#0057A0", backgroundColor: "#a0deee" };
    const inheritColor = { color: "inherit" };
    return (
      <div className="container-inner">
        <div className="text-block">
          <p>I build and design web apps. </p>
          <div className="spacer5" />
          <p>
            For twenty-five years, I've also been one of America's best-loved
            editorial illustrators. (My portfolio for
            <i>&nbsp;that&nbsp;</i>is at
            <a href="http://www.GiacomoMarchesi.com" style={inheritColor}>
              &nbsp;GiacomoMarchesi.com
            </a>
            .)
          </p>
          <div className="spacer5" />
          <p>
            I can be reached by phone at 646.549.0648, or by e-mail at the link
            below.
          </p>
        </div>

        <div className="spacer5" />
        <button>Resumé</button>
        <button>Email me!</button>
        <button>
          {" "}
          <a
            href="https://www.linkedin.com/in/james-gary/"
            style={inheritColor}
          >
            LinkedIn
          </a>
        </button>
        <button onClick={this.props.closePanel} style={lightButton}>
          Close Panel
        </button>
        <div className="spacer5" />
        <ContactForm />
      </div>
    );
  }
}

export default About;
