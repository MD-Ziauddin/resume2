import React, { useEffect, useState } from 'react';

import logo from '../img/logo-black.png';
import profilePic from '../img/photo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isScrolled === true) {
      return;
    }

    const handleScroll = (event) => {
      const header = document.querySelector('.header');

      console.log('scroll');
      setIsScrolled(true);
      setTimeout(() => {
        header.style.marginTop = 0 + 'px';
      }, 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () =>
      setTimeout(() => {
        window.removeEventListener('scroll', handleScroll);
      }, 2000);
  }, [isScrolled]);

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
