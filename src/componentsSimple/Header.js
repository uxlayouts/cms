import React from 'react';
import logo from './assets/img/logo.svg';
import Nav from './Nav';

const Header = (props) => {
  return (
    <div>
      <div className="pageHeader">
        <img src={logo} className="logo" alt="logo" />
        <Nav />
      </div>
    </div>
  );
};
export default Header;
