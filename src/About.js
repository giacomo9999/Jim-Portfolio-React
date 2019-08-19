import React, { Component } from "react";

class About extends Component {
  render() {
    const lightButton = { backgroundColor: "#003780" };
    return (
      <div className="container-inner">
        <div className="text-block">
          <p>I build and design web apps. </p>
          <div className="spacer5" />
          <p>
            For twenty-five years, I've also been one of America's best-loved
            editorial illustrators. (My portfolio for
            <i>&nbsp;that&nbsp;</i>is at
            <a href="http://www.GiacomoMarchesi.com">
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

        {/* <input
            type="button"
            href="mailto:gmarchesi888@gmail.com"
            class="jg_button"
            value="E-mail me"
            onclick="window.location.href='mailto:gmarchesi888@gmail.com'"
          /> */}
        {/* <a href="./J_Gary_CV_190430.pdf"> */}
        <div className="spacer5" />
        <button>Resumé</button>
        <button>E-Mail Me</button>
        <button>LinkedIn</button>
        <button onClick={this.props.closePanel} style={lightButton}>
          Close
        </button>
      </div>
    );
  }
}

export default About;
