import React from "react";

const Skills = () => {
  return (
    <section className="section-skills">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">Skills</h2>
      </div>

      <div className="skill">
        <div className="skill__details">
          <ul>
            <li>Time Management</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Problem Solver</li>
            <li>Proficient in English</li>
          </ul>
        </div>

        <div className="skill__details">
          <ul>
            <li>Building maintainable and scalable code.</li>
            <li>Participate in architecture design reviews</li>
            <li>Write production ready code.</li>
            <li>Curious to learn new thing.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
