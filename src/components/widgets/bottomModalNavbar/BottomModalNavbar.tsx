import React from 'react';
import { Link } from 'react-router-dom';

import house from '../../../assets/images/house.svg';
import lens from '../../../assets/images/lens.svg';
import cast from '../../../assets/images/cast.svg';
import about from '../../../assets/images/about.svg';

function BottomModalNavbar(): JSX.Element {
  return (
    <ul className="bottom-modal-navbar">
      <Link to="/">
        <li>
          <button type="button">
            <img src={house} alt="Home" />
          </button>
        </li>
      </Link>
      <Link to="/search">
        <li>
          <button type="button">
            <img src={lens} alt="Search" />
          </button>
        </li>
      </Link>
      <Link to="/weather-news">
        <li>
          <button type="button">
            <img src={cast} alt="Weather News" />
          </button>
        </li>
      </Link>
      <Link to="/">
        <li>
          <button type="button">
            <img src={about} alt="About" />
          </button>
        </li>
      </Link>
    </ul>
  );
}

export default BottomModalNavbar;
