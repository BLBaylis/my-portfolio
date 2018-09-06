import React from "react";
import bradPic from "../../static/images/brad.jpg";

const AboutMe = () => (
  <section className="aboutMe">
    <h2>About Me</h2>
    <img src={bradPic} />
    <p>
      Hi! My name is Brad and I am a front end developer from London. I love the
      internet, gaming, exercising and dogs! This coding stuff seems pretty cool
      as well.
    </p>
  </section>
)

export default AboutMe;
