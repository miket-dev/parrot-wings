import "../scss/main.scss";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import store from "./store";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "../scss/main.scss";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app") //eslint-disable-line no-undef
);
