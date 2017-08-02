import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="navMenu">
      <NavLink className="navLink" exact to="/" activeClassName="active">Home</NavLink>
      <NavLink className="navLink" to="/about">About</NavLink>
      <NavLink className="navLink" to="/ghfghfhg">Create 404</NavLink>
    </div>
  );
};
export default Nav;
