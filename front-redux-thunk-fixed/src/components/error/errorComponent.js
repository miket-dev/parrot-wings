import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = props =>
  !(props.errorMessage || props.message) ? (
    <div>
      <span
        style={{
          display: "none"
        }}
      >
        Here should be an error
      </span>
    </div>
  ) : (
    <div className="alert alert-danger" role="alert">
      {props.message || props.errorMessage.toString()}
    </div>
  );

ErrorComponent.propTypes = {
  errorMessage: PropTypes.any,
  message: PropTypes.string
};

export default ErrorComponent;
