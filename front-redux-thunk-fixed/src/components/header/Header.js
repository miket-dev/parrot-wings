import React from "react";
import PropTypes from "prop-types";
import "./header.scss";

const Header = props => {
  const { loggedIn, logout } = props;

  let logoutButton = null;
  if (loggedIn) {
    logoutButton = (
      <button className="btn btn-default" onClick={logout}>
        Log out
      </button>
    );
  }

  return (
    <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
      <a
        className="navbar-brand mr-0 mr-md-2"
        href="/"
        aria-label="Parrot Wings"
      >
        Parrot Wings
      </a>

      <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link " href="/">
              Home
            </a>
          </li>
        </ul>
      </div>

      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li className="nav-item">{logoutButton}</li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;
