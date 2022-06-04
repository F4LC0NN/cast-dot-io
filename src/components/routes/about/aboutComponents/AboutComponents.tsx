import React from 'react';

import CastDotIo from '../castDotIo/CastDotIo';
import AboutMe from '../aboutMe/AboutMe';
import FollowUp from '../followUp/FollowUp';

function AboutComponents(): JSX.Element {
  return (
    <div className="about-components">
      <CastDotIo />
      <AboutMe />
      <FollowUp />
    </div>
  );
}

export default AboutComponents;
