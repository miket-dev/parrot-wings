import "../scss/main.scss";
import React from "react";
import { Provider } from "react-redux";
// import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Store } from "./store";
import { AppContainer } from "./containers/AppContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "../scss/main.scss";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("app") //eslint-disable-line no-undef
);
