import React from 'react';
import BottomModalNavbar from '../../widgets/bottomModalNavbar/BottomModalNavbar';
import SidebarMenu from '../../widgets/sidebarMenu/SidebarMenu';

function Search():JSX.Element {
  return (
    <div className="Search">
      <SidebarMenu />
      <BottomModalNavbar />
    </div>
  );
}

export default Search;
