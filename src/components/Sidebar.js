import React from 'react';
import logo from './assets/img/logo.svg';
import Nav from './Nav';

const Sidebar = (props) => {
  return (
    <div>
      <div className="pageSidebar">
        <img src={logo} className="logo" alt="logo" />
        <Nav />
      </div>
    </div>
  );
};
export default Sidebar;
