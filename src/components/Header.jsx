import React from "react";

const Header = () => {
  return (
    <header class="header">
      <nav class="nav">
        <div class="nav__logo">
          <img src="./img/logo-black.png" alt="" class="logo" />
        </div>
      </nav>
      <div class="header__box">
        <img
          src="./img/photo.jpg"
          alt="Profile pic"
          class="header__avatar u-margin-bottom-small"
        />
        <h1 class="heading-primary">
          <span class="heading-primary--main u-margin-bottom-small">
            MD ZIAUDDIN
          </span>
          <span class="heading-primary--sub">
            Building excellent user experience.
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
