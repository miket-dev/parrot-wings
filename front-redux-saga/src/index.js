import "../scss/main.scss";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Store, History } from "./store";
import { AppContainer } from "./containers/AppContainer";
import { ConnectedRouter as Router } from "connected-react-router";
import "../scss/main.scss";
import "../external/bootstrap.min.css";

ReactDOM.render(
  <Provider store={Store}>
    <Router history={History}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("app") //eslint-disable-line no-undef
);
