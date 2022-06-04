import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import burgerMenuIcon from '../../../assets/images/burgerMenu.svg';
import house from '../../../assets/images/house.svg';
import lens from '../../../assets/images/lens.svg';
import cast from '../../../assets/images/cast.svg';
import about from '../../../assets/images/about.svg';

function SidebarMenu(): JSX.Element {
  const [isToggle, setIsToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const navBarRef = useRef(null);

  useEffect(() => {
    switch (true) {
      case (windowWidth <= 480):
        gsap.from(navBarRef.current, { x: `${-30}rem` });
        break;
      case (windowWidth >= 481):
        gsap.to(navBarRef.current, { x: `${-50}rem`, display: 'none' });
        break;
      case (windowWidth >= 768):
        gsap.to(navBarRef.current, { x: `${-100}rem`, display: 'none' });
        break;
      default:
        gsap.to(navBarRef.current, { x: `${-30}rem`, display: 'none' });
        break;
    }

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setWindowWidth(windowWidth));
    };
  }, [windowWidth]);

  function openNavBar(): void {
    if (isToggle) {
      setIsToggle(true);
    }
    gsap.to(navBarRef.current, { x: 0, display: 'flex' });
  }

  function closeNavBar(): void {
    if (isToggle) {
      setIsToggle(false);
    }

    switch (true) {
      case (windowWidth <= 480):
        gsap.to(navBarRef.current, { x: `${-30}rem`, display: 'none' });
        break;
      case (windowWidth >= 481):
        gsap.to(navBarRef.current, { x: `${-50}rem`, display: 'none' });
        break;
      case (windowWidth >= 768):
        gsap.to(navBarRef.current, { x: `${-100}rem`, display: 'none' });
        break;
      default:
        gsap.to(navBarRef.current, { x: `${-30}rem`, display: 'none' });
        break;
    }
  }

  return (
    <div className="sidebar-menu">
      <button type="button" onClick={openNavBar}>
        <img src={burgerMenuIcon} alt="Burger Menu" />
      </button>
      <nav className="navbar" ref={navBarRef}>
        <ul>
          <Link to="/">
            <li>
              <img src={house} alt="Home" />
              <p>Home</p>
            </li>
          </Link>
          <Link to="/search">
            <li>
              <img src={lens} alt="Search City" />
              <p>Search city</p>
            </li>
          </Link>
          <Link to="/weather-news">
            <li>
              <img src={cast} alt="Weather News" />
              <p>Weather News</p>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <img src={about} alt="About" />
              <p>About</p>
            </li>
          </Link>
        </ul>
        <button type="button" onClick={closeNavBar}>
          Close menu
        </button>
      </nav>
    </div>
  );
}

export default SidebarMenu;
