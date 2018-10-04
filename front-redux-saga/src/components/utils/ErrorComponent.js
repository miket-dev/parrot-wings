import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = props =>
  !props.error ? null : (
    <div className="alert alert-danger" role="alert">
      {props.error.toString()}
    </div>
  );

ErrorComponent.propTypes = {
  error: PropTypes.any
};

export default ErrorComponent;
