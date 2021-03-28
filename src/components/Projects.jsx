import React from "react";

const Projects = () => {
  return (
    <section className="section-projects">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">Projects</h2>
      </div>
      <div className="projects">
        <div className="project project--1">
          <img
            src="./img/spotify.png"
            alt="project"
            className="project__image"
          />
          <div className="project__info">
            <h3 className="heading-tertiary u-margin-bottom-medium">
              Spotify Clone
            </h3>
            <a
              href="https://github.com/MD-Ziauddin/spotify-clone"
              target="_blank"
              rel="noreferrer"
              className="btn btn--white"
            >
              Link
            </a>
          </div>
        </div>

        <div className="project project--2">
          <img
            src="./img/expense.png"
            alt="project"
            className="project__image"
          />
          <div className="project__info">
            <h3 className="heading-tertiary u-margin-bottom-medium">
              Expense Tracker
            </h3>
            <a
              href="https://md-ziauddin.github.io/Expense-Tracker/"
              target="_blank"
              rel="noreferrer"
              className="btn btn--white"
            >
              Link
            </a>
          </div>
        </div>

        <div className="project project--3">
          <img
            src="./img/crowdfund.jpg"
            alt="project"
            className="project__image"
          />
          <div className="project__info">
            <h3 className="heading-tertiary u-margin-bottom-medium">
              Crowd Funding
            </h3>
            <a
              href="https://github.com/MD-Ziauddin/CrowdFundingPage"
              target="_blank"
              rel="noreferrer"
              className="btn btn--white"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
