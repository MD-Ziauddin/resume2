import React, { useEffect, useState } from 'react';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import logo from '../img/logo-black.png';
import profilePic from '../img/photo.jpg';

const Header = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // const handleScrollDown = (event) => {
  //   const header = document.querySelector('.header');

  //   setIsScrolled(true);

  //   header.style.marginTop = -140 + 'px';

  //   setTimeout(() => {
  //     header.style.marginTop = 70 + 'px';
  //   }, 1000);
  // };

  // const handleScrollUp = (event) => {
  //   const handleScrollDown = (event) => {
  //     const header = document.querySelector('.header');

  //     setIsScrolled(true);

  //     setTimeout(() => {
  //       header.style.animatione = `margintTopAnima 2s linear`;
  //       header.style.animationDirection = 'reverse';
  //     }, 0);
  //   };
  // };

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     if (Math.abs(prevPos.y) <= 0 && isScrolled === false) {
  //       window.addEventListener('scroll', handleScrollDown);
  //       setIsScrolled(true);
  //       console.log('down');
  //       setTimeout(() => {
  //         window.removeEventListener('scroll', handleScrollDown);
  //       }, 1000);
  //     } else if (
  //       Math.abs(currPos.y) <= 100 &&
  //       Math.abs(prevPos.y) > Math.abs(currPos.y) &&
  //       isScrolled === true
  //     ) {
  //       window.addEventListener('scroll', handleScrollUp);
  //       console.log('down');
  //       setTimeout(() => {
  //         window.removeEventListener('scroll', handleScrollUp);
  //       }, 1000);
  //     }

  //     // if (Math.abs(currPos.y) >= 100) {
  //     //   console.log('IsScroll up false');
  //     //   setIsScrolledUp(false);
  //     // }
  //     console.log(isScrolled);
  //   },
  //   [isScrolled]
  // );

  // useEffect(() => {
  //   if (isScrolled === true) {
  //     return;
  //   }

  //   const handleScroll = (event) => {
  //     const header = document.querySelector('.header');

  //     console.log('scroll');
  //     setIsScrolled(true);
  //     header.style.marginTop = 70 + 'px';
  //     setTimeout(() => {}, 0);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () =>
  //     setTimeout(() => {
  //       window.removeEventListener('scroll', handleScroll);
  //     }, 2000);
  // }, [isScrolled]);

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
