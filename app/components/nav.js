import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => {
  return (
    <nav>
      <NavLink to="/candies" activeClassName="active">
        Goodie Bag
      </NavLink>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
    </nav>
  );
};

export default nav;
