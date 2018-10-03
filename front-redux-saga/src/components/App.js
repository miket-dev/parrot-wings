import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginFormContainer from "../containers/auth/LoginFormContainer";
import HeaderContainer from "../containers/header/HeaderContainer";

const App = () => {
  return (
    <div id="appContainer">
      <HeaderContainer />
      <div className="container-fluid">
        <Switch>
          <Route path="/login" component={LoginFormContainer} />
          <Route path="*" component={() => <Redirect to="/login" />} />
        </Switch>
      </div>
    </div>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default App;
