import React from 'react';

import SidebarMenu from '../../widgets/sidebarMenu/SidebarMenu';
import BottomModalNavbar from '../../widgets/bottomModalNavbar/BottomModalNavbar';

import './About.scss';
import AboutComponents from './aboutComponents/AboutComponents';

function About():JSX.Element {
  return (
    <div className="about">
      <SidebarMenu />
      <AboutComponents />
      <BottomModalNavbar />
    </div>
  );
}

export default About;
