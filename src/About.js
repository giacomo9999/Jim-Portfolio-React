import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container-inner">
        <h1>About Me</h1>
        <p>
          I build and design web apps. For twenty-five years, I've also been one
          of America's best-loved editorial illustrators. (My portfolio for that
          is at &nbsp; 
          <a href="http://www.GiacomoMarchesi.com">GiacomoMarchesi.com</a>).
        </p>

        <h2>Tel: 646.549.0648</h2>
        {/* <input
            type="button"
            href="mailto:gmarchesi888@gmail.com"
            class="jg_button"
            value="E-mail me"
            onclick="window.location.href='mailto:gmarchesi888@gmail.com'"
          /> */}
        {/* <a href="./J_Gary_CV_190430.pdf"> */}
        <div className="spacer10" />
        <button className="jg_button">View Resumé</button>
        <button className="jg_button">E-Mail Me</button>
        <button className="jg_button">Close</button>
      </div>
    );
  }
}

export default About;
