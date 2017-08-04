import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="navMenu">
      <NavLink className="navLink" exact to="/" activeClassName="active">Home</NavLink>
      <NavLink className="navLink" to="/about">About</NavLink>
      <NavLink className="navLink" to="/articles">Articles</NavLink>
      <NavLink className="navLink" to="/feathers-service">Feathers</NavLink>
      <NavLink className="navLink" to="/posts">Posts</NavLink>
      <NavLink className="navLink" to="/fghfghfhg">404</NavLink>
      <NavLink className="navLink" to="/create">Create</NavLink>
      <NavLink className="navLink" to="/create/add-content">Add Content</NavLink>
      <NavLink className="navLink" to="/create/fghfghfhg">Create 404</NavLink>
    </div>
  );
};
export default Nav;
