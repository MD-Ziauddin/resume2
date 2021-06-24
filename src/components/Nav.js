import React, { useEffect, useRef, useState } from 'react';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Nav = (props) => {
  const myRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);

  const handleScrollUp = (event) => {
    console.log('scroll2');
    setIsScrolled(false);
    setIsScrolledUp(true);
    window.scrollTo(0, 0);

    const nav = document.querySelector('.nav2');
    const wave = document.querySelectorAll('.wave');

    nav.style.height = 150 + 'px';
    nav.style.paddingTop = 0 + 'px';
    // nav.style.position = 'fixed';
    wave[0].style.height = 100 + '%';
    wave[1].style.height = 100 + '%';

    wave[0].style.animation = `animate 3s ease-out`;
    wave[0].style.animationDirection = 'reverse';
    wave[1].style.animation = `animate2 2s ease-out`;
    wave[1].style.animationDirection = 'reverse';

    setTimeout(() => {
      wave[0].style.animation = 'none';
      wave[1].style.animation = 'none';
      nav.style.position = 'relative';
    }, 2000);
  };

  const handleScroll = (event) => {
    console.log('scroll');
    setIsScrolled(true);
    // setIsScrolledUp(false);
    console.log('up', isScrolledUp);
    window.scrollTo(0, 0);
    // myRef.current.scrollIntoView();
    const nav = document.querySelector('.nav2');
    const wave = document.querySelectorAll('.wave');
    const links = document.querySelector('.nav2__linkBox');
    const btnText = document.querySelector('.nav2__btn--text');

    nav.style.height = 70 + 'px';
    nav.style.paddingTop = 0 + 'px';
    // nav.style.position = 'fixed';
    wave[0].style.height = 0 + 'px';
    wave[1].style.height = 0 + 'px';

    wave[0].style.animation = `animate 3s  ease-out`;
    wave[1].style.animation = `animate2 2s ease-out`;
    // wave[0].style.bottom = 0;
    // wave[1].style.bottom = 0;
    links.style.transform = `translateY(0px)`;

    setTimeout(() => {
      wave[0].style.animation = 'none';
      wave[1].style.animation = 'none';
      nav.style.position = 'sticky';
    }, 3000);

    setTimeout(() => {
      btnText.style.transform = `translatex(0px)`;
    }, 500);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.y, prevPos.y);
      if (Math.abs(prevPos.y) <= 0 && isScrolled === false) {
        window.addEventListener('scroll', handleScroll);
        // setIsScrolledUp(false);
        console.log('down');
        setTimeout(() => {
          window.removeEventListener('scroll', handleScroll);
        }, 1000);
      } else if (
        Math.abs(currPos.y) <= 100 &&
        Math.abs(prevPos.y) > Math.abs(currPos.y) &&
        isScrolledUp === false
      ) {
        window.addEventListener('scroll', handleScrollUp);
        console.log('down');
        setTimeout(() => {
          window.removeEventListener('scroll', handleScrollUp);
        }, 3000);
      }

      if (Math.abs(currPos.y) >= 100) {
        console.log('IsScroll up false');
        setIsScrolledUp(false);
      }
      console.log(isScrolledUp);
    },
    [isScrolled, isScrolledUp]
  );

  // useEffect(() => {
  //   if (isScrolled === true) {
  //     console.log('true');
  //     return;
  //   }

  //   const handleScroll = (event) => {
  //     console.log('scroll');
  //     setIsScrolled(true);
  //     window.scrollTo(0, 0);
  //     myRef.current.scrollIntoView();
  //     const nav = document.querySelector('.nav2');
  //     const wave = document.querySelectorAll('.wave');
  //     const links = document.querySelector('.nav2__linkBox');
  //     const btnText = document.querySelector('.nav2__btn--text');

  //     nav.style.height = 70 + 'px';
  //     nav.style.paddingTop = 0 + 'px';
  //     // nav.style.position = 'fixed';
  //     wave[0].style.height = 0 + 'px';
  //     wave[1].style.height = 0 + 'px';

  //     wave[0].style.animation = `animate 2s linear infinite`;
  //     wave[1].style.animation = `animate2 2s linear infinite`;
  //     // wave[0].style.bottom = 0;
  //     // wave[1].style.bottom = 0;
  //     links.style.transform = `translateY(0px)`;

  //     setTimeout(() => {
  //       wave[0].style.animation = 'none';
  //       wave[1].style.animation = 'none';
  //       nav.style.position = 'fixed'
  //     }, 2000);

  //     setTimeout(() => {
  //       btnText.style.transform = `translatex(0px)`;
  //     }, 1000);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () =>
  //     setTimeout(() => {
  //       window.removeEventListener('scroll', handleScroll);
  //       console.log('scroll off');
  //     }, 1000);
  // }, [isScrolled]);

  return (
    <nav className='nav2' ref={myRef}>
      <div className='wave' id='wave1'></div>
      <div className='wave' id='wave2'></div>

      <div className='nav2__brandLogo'>
        <h2>MD DEV</h2>
      </div>

      <div className='nav2__linkBox'>
        <ul className='nav2__item'>
          <li className='nav2__link'>Home</li>
          <li className='nav2__link'>Service</li>
          <li className='nav2__link'>Press kit</li>
        </ul>
        <div className='nav2__btn'>
          <a href='#' className='nav2__btn--text'>
            Buy now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
