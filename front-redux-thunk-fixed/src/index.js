import "../scss/main.scss";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import "../scss/main.scss";

const ConnectedApp = withRouter(AppContainer);
render(
  <Provider store={store}>
    <Router>
      <ConnectedApp />
    </Router>
  </Provider>,
  document.getElementById("app") //eslint-disable-line no-undef
);
