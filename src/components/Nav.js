import React, { useEffect, useRef, useState } from 'react';

const Nav = (props) => {
  const myRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isScrolled === true) {
      console.log('true');
      return;
    }

    const handleScroll = (event) => {
      console.log('scroll');
      setIsScrolled(true);
      window.scrollTo(0, 0);
      myRef.current.scrollIntoView();
      const nav = document.querySelector('.nav2');
      const wave = document.querySelectorAll('.wave');
      const links = document.querySelector('.nav2__linkBox');
      const btnText = document.querySelector('.nav2__btn--text');

      nav.style.height = 70 + 'px';
      nav.style.paddingTop = 0 + 'px';
      // nav.style.position = 'fixed';
      wave[0].style.height = 0 + 'px';
      wave[1].style.height = 0 + 'px';

      wave[0].style.animation = `animate 2s linear infinite`;
      wave[1].style.animation = `animate2 2s linear infinite`;
      // wave[0].style.bottom = 0;
      // wave[1].style.bottom = 0;
      links.style.transform = `translateY(0px)`;

      setTimeout(() => {
        wave[0].style.animation = 'none';
        wave[1].style.animation = 'none';
        nav.style.position = 'fixed'
      }, 2000);

      setTimeout(() => {
        btnText.style.transform = `translatex(0px)`;
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () =>
      setTimeout(() => {
        window.removeEventListener('scroll', handleScroll);
        console.log('scroll off');
      }, 1000);
  }, [isScrolled]);

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
