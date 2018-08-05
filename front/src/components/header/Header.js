import React from "react";
import { connect } from "react-redux";
import appActions from "../../actions/appActions";
import "./header.scss";

const Header = props => {
  //eslint-disable-next-line
  const { loggedIn, currentBalance, dispatch } = props;
  const logout = () => {
    dispatch(appActions.logout());
  };

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

const mapStateToProps = state => ({
  loggedIn: state.get("loggedIn")
});

const connectedHeader = connect(mapStateToProps)(Header);

export { connectedHeader as Header };
