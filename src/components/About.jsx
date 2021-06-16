import React from "react";

import profilePic from "../img/photo.jpg";

const About = () => {
  return (
    <section className="section-about">
      <div class="u-center-text u-margin-bottom-medium">
        <h2 class="heading-secondary">About Me</h2>
      </div>

      <div className="about">
        <figure className="about__shape">
          <img src={profilePic} alt="About img" className="about__image" />
        </figure>
        <div className="about__text">
          <p className="paragraph">
            A Software Engineer with a strong passion for learning and building
            applications. Proficient in developing web applications using modern
            technologies. Able to self-manage while working on independent
            projects as well as collaborating with a team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
