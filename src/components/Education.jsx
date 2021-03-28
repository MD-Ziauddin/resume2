import React from "react";

const Education = () => {
  return (
    <section className="section-education">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">Education</h2>
      </div>
      <div className="education u-margin-bottom-medium">
        <div className="education__institute">
          <h3 className="heading-tertiary">
            B.tech (IT), FIEM, <br />
            2017 - 2021
          </h3>
        </div>
        <div className="education__desc">
          <p className="paragraph">
            B.tech (IT) focuses on the overall development of engineers. The
            curriculum includes Data Structure, Algorithm, Operating Systems,
            RDBMS, Computer Networking, etc. But what I value the most are the
            things I got to learn during my studies like how to solve problems,
            to communicate with others, the Ability to work under pressure,
            Leadership skills, Time Management, etc. I love my engineering life.
          </p>
        </div>
      </div>

      <div className="education u-margin-bottom-medium">
        <div className="education__institute">
          <h3 className="heading-tertiary">
            High School, CMHS, <br />
            2014 - 2016
          </h3>
        </div>
        <div className="education__desc">
          <p className="paragraph">
            In high school, I love studying core science. I was passionate about
            coding and in my final year of high school I started learning web
            development. I experimented, designed, and built websites and
            showoff in front of my friends.
          </p>
        </div>
      </div>

      <div className="education u-margin-bottom-medium">
        <div className="education__institute">
          <h3 className="heading-tertiary">
            Secondary School, KPHS, <br />
            2007 - 2014
          </h3>
        </div>
        <div className="education__desc">
          <p className="paragraph">
            I loved my school life as we all do. The subjects were good like
            Maths, Biology, Chemistry, and Physics. The main objective of
            secondary school was to make us comfortable with most of the
            subjects and later we can choose our career path.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
