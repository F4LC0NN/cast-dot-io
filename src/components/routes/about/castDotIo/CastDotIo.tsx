import React from 'react';
import logo from '../../../../assets/images/logo.svg';

function CastDotIo(): JSX.Element {
  return (
    <div className="cast-dot-io">
      <img src={logo} alt="Logo" className="logo" />
      <p>With Cast.io, I wanted to showcase my skills, & consolidate what I learned so far.</p>
      <p>This project is the culmunation of one year of experience.</p>
      <p>Cast.io is a simple weather app that allows you to:</p>
      <ul className="project-text-list">
        <li className="project-text-item">Target your current location to get an updated forecast around you,</li>
        <li className="project-text-item">Search for the weather cast of your favorite location</li>
        <li className="project-text-item">
          Get your favorite location&apos;s forecast for the current day,
          the next day and the day after,
        </li>
        <li className="project-text-item">Check climate news around the world.</li>
      </ul>
    </div>
  );
}

export default CastDotIo;
