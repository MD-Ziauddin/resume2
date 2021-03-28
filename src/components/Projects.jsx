import React from "react";

const Projects = () => {
  return (
    <section class="section-projects">
      <div class="u-center-text u-margin-bottom-medium">
        <h2 class="heading-secondary">Projects</h2>
      </div>
      <div class="projects">
        <div class="project project--1">
          <img src="./img/spotify.png" alt="project" class="project__image" />
          <div class="project__info">
            <h3 class="heading-tertiary u-margin-bottom-medium">
              Spotify Clone
            </h3>
            <a
              href="https://github.com/MD-Ziauddin/spotify-clone"
              target="_blank"
              rel="noreferrer"
              class="btn btn--white"
            >
              Link
            </a>
          </div>
        </div>

        <div class="project project--2">
          <img src="./img/expense.png" alt="project" class="project__image" />
          <div class="project__info">
            <h3 class="heading-tertiary u-margin-bottom-medium">
              Expense Tracker
            </h3>
            <a
              href="https://md-ziauddin.github.io/Expense-Tracker/"
              target="_blank"
              rel="noreferrer"
              class="btn btn--white"
            >
              Link
            </a>
          </div>
        </div>

        <div class="project project--3">
          <img src="./img/crowdfund.jpg" alt="project" class="project__image" />
          <div class="project__info">
            <h3 class="heading-tertiary u-margin-bottom-medium">
              Crowd Funding
            </h3>
            <a
              href="https://github.com/MD-Ziauddin/spotify-clone"
              target="_blank"
              rel="noreferrer"
              class="btn btn--white"
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
