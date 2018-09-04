import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = props => {
  let renderedElement = props.isSignedIn ? (
    <header className="main-header">
      <NavLink to="/" activeClassName="is-active" exact>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  ) : (
    <header className="main-header">
      <NavLink to="/" activeClassName="is-active" exact>
        Login
      </NavLink>
      <NavLink to="/register" activeClassName="is-active">
        Register
      </NavLink>
    </header>
  );
  return  renderedElement ;
};
