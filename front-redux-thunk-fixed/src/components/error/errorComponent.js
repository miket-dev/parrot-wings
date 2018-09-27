import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = props =>
  !(props.error || props.message) ? null : (
    <div className="alert alert-danger" role="alert">
      {props.message || props.error.toString()}
    </div>
  );

ErrorComponent.propTypes = {
  error: PropTypes.any,
  message: PropTypes.string
};

export default ErrorComponent;
