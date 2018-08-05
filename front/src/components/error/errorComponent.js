import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ErrorComponent = props =>
  !props.error ? null : (
    <div className="alert alert-danger" role="alert">
      {props.error.toString()}
    </div>
  );

ErrorComponent.propTypes = {
  error: PropTypes.any
};

const mapStateToProps = state => ({
  error: state.get("error")
});

const connectedErrorComponent = connect(mapStateToProps)(ErrorComponent);

export { connectedErrorComponent as ErrorComponent };
