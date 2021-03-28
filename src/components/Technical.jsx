import React from "react";

const Technical = () => {
  return (
    <section class="section-techincal">
      <div class="u-center-text u-margin-bottom-medium">
        <h2 class="heading-secondary">Technical PROFICIENCIES</h2>
      </div>
      <div class="cards u-margin-bottom-medium">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1">&nbsp;</div>
            <h3 class="card__heading">
              <div class="card__heading-span card__heading-span--1">
                Front-end
              </div>
            </h3>
            <div class="card__details">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Chrome DevTools</li>
              <li>NPM</li>
              <li>SASS / LESS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--2">&nbsp;</div>
            <h3 class="card__heading">
              <div class="card__heading-span card__heading-span--2">
                Back-end
              </div>
            </h3>
            <div class="card__details">
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDb</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-2">
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDb</li>
              <li>PostgreSQL</li>
              <li>Rest API</li>
              <li>MVC</li>
              <li>HTTP</li>
              <li>Git / Github</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--3">&nbsp;</div>
            <h3 class="card__heading">
              <div class="card__heading-span card__heading-span--3">Devops</div>
            </h3>
            <div class="card__details">
              <ul>
                <li>AWS</li>
                <li>Firebase</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-3">
            <ul>
              <li>AWS</li>
              <li>Firebase</li>
              <li>Docker</li>
              <li>Networking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;
