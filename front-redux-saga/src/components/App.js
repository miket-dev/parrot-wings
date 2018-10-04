import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "../containers/header/HeaderContainer";
import ErrorContainer from "../containers/utils/ErrorContainer";
import AuthenticatedSwitch from "./routes/routeSwitch.auth";
import AnonSwitch from "./routes/routeSwitch.anon";

const App = props => {
  const { loggedIn } = props;
  const switchItem = loggedIn ? <AuthenticatedSwitch /> : <AnonSwitch />;

  return (
    <div id="appContainer">
      <HeaderContainer />
      <div className="container-fluid">
        <ErrorContainer />
        {switchItem}
      </div>
    </div>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default App;
