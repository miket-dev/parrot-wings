import React from "react";
import PropTypes from "prop-types";

const ErrorPanel = props => (
  <div className="alert alert-danger" role="alert">
    {props.message}
  </div>
);

ErrorPanel.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorPanel;
