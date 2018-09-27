import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "../containers/header/HeaderContainer";

const AppWrapper = props => (
  <div id="appContainer">
    <HeaderContainer />
    {props.children}
  </div>
);

AppWrapper.propTypes = {
  children: PropTypes.any
};

export default AppWrapper;
