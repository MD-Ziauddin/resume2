import React from 'react';

import logo from '../img/logo-black.png';
import profilePic from '../img/photo.jpg';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav__logo'>
          <img src={logo} alt='' class='logo' />
        </div>
      </nav>
      <div className='header__box'>
        <img
          src={profilePic}
          alt='Profile pic'
          className='header__avatar u-margin-bottom-small'
        />
        <h1 className='heading-primary'>
          <span className='heading-primary--main u-margin-bottom-small'>
            MD ZIAUDDIN
          </span>
          <span className='heading-primary--sub'>
            Building excellent user experience.
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
