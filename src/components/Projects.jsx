import React from "react";

import organic from "../img/organic.png";
import expenseTracker from "../img/expense.png";
import musicPlayer from "../img/reactMusicPlayer.png";

const Projects = () => {
  return (
    <section className="section-projects">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">Projects</h2>
      </div>
      <div className="projects">
        <div className="project project--1">
          <img src={organic} alt="project" className="project__image" />
          <div className="project__info">
            <h3 className="heading-tertiary u-margin-bottom-medium">Organic</h3>
            <a
              href="https://md-ziauddin.github.io/Mauka-task-assesment/"
              target="_blank"
              rel="noreferrer"
              className="btn btn--white"
            >
              Link
            </a>
          </div>
        </div>

        <div className="project project--2">
          <img src={expenseTracker} alt="project" className="project__image" />
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
          <img src={musicPlayer} alt="project" className="project__image" />
          <div className="project__info">
            <h3 className="heading-tertiary u-margin-bottom-medium">
              React Music Player
            </h3>
            <a
              href="https://md-ziauddin.github.io/React-Music-Player/"
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
