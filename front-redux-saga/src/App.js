import React from "react";
import PropTypes from "prop-types";

const App = props => {
  return <div>{props.loading.toString()}</div>;
};

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default App;
