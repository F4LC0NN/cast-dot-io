import React from 'react';

import SidebarMenu from '../../widgets/sidebarMenu/SidebarMenu';
import SearchComponent from './searchComponent/SearchComponent';
import BottomModalNavbar from '../../widgets/bottomModalNavbar/BottomModalNavbar';

import './Search.scss';

function Search():JSX.Element {
  return (
    <div className="Search">
      <SidebarMenu />
      <SearchComponent />
      <BottomModalNavbar />
    </div>
  );
}

export default Search;
