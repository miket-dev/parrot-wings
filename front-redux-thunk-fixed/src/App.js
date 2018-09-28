import React from "react";
import PropTypes from "prop-types";
import AppWrapper from "./components/AppWrapper";
import AnonymousApp from "./components/AnonymousApp";
import AuthenticatedApp from "./components/AuthenticatedApp";

import configureFakeBackend from "./fake/fakeBackend";
configureFakeBackend();

const App = props => {
  const { loggedIn } = props;
  return (
    <AppWrapper>
      {loggedIn ? <AuthenticatedApp /> : <AnonymousApp />}
    </AppWrapper>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool
};

export default App;
