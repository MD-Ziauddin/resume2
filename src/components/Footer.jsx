import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__logo">
        <img src="./img/logo-white.png" alt="Logo" class="logo" />
      </div>
      <div class="footer__craft">
        <p class="paragraph">Handcrafted by me. 😊</p>
      </div>
      <div class="footer__links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/md-ziauddin/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="footer__icons footer__icons--linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MD-Ziauddin"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="footer__icons footer__icons--github" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ziauddin02"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="footer__icons footer__icons--twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
