import React, { useState } from 'react';
import burgerMenuIcon from '../../../../assets/images/burgerMenu.svg';

import house from '../../../../assets/images/house.svg';
import lens from '../../../../assets/images/lens.svg';
import cast from '../../../../assets/images/cast.svg';
import about from '../../../../assets/images/about.svg';
import cog from '../../../../assets/images/cog.svg';

function SidebarMenu(): JSX.Element {
  const [isToggle, setIsToggle] = useState(true);

  function toggleNavBar(): void {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
  }

  return (
    <div className="sidebar-menu">
      <button type="button" onClick={toggleNavBar}>
        <img src={burgerMenuIcon} alt="Burger Menu" />
      </button>
      <nav className={`navbar ${isToggle ? 'navbar-visible' : 'navbar-hidden'}`}>
        <ul>
          <a href="/home">
            <li>
              <img src={house} alt="Home" />
              <p>Home</p>
            </li>
          </a>
          <a href="/home">
            <li>
              <img src={lens} alt="Search City" />
              <p>Search city</p>
            </li>
          </a>
          <a href="/home">
            <li>
              <img src={cast} alt="Weather News" />
              <p>Weather News</p>
            </li>
          </a>
          <a href="/home">
            <li>
              <img src={about} alt="About" />
              <p>About</p>
            </li>
          </a>
          <a href="/home">
            <li>
              <img src={cog} alt="Settings" />
              <p>Settings</p>
            </li>
          </a>
        </ul>
        <button type="button" onClick={toggleNavBar}>
          Close menu
        </button>
      </nav>
    </div>
  );
}

export default SidebarMenu;
