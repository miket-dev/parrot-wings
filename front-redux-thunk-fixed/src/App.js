import React from "react";
import PropTypes from "prop-types";
import AppWrapper from "./components/AppWrapper";
import AnonymousApp from "./components/AnonymousApp";
import AuthenticatedApp from "./components/AuthenticatedApp";

import configureFakeBackend from "./fake/fakeBackend";
configureFakeBackend();

class App extends React.Component {
  componentDidMount() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      this.props.loadCurrentBalance();
    }
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <AppWrapper>
        {loggedIn ? <AuthenticatedApp /> : <AnonymousApp />}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
  loadCurrentBalance: PropTypes.func.isRequired
};

export default App;
