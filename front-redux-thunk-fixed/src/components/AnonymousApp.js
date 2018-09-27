import React from "react";
import { Switch } from "react-router";
import { Route, Redirect } from "react-router-dom";
import ErrorContainer from "../containers/error/ErrorContainer";
import LoginFormContainer from "../containers/auth/LoginFormContainer";
import RegisterFormContainer from "../containers/auth/RegisterFormContainer";

const AnonymousApp = () => (
  <div className="container-fluid">
    <ErrorContainer />
    <Switch>
      <Route path="/login" component={LoginFormContainer} />{" "}
      <Route path="/register" component={RegisterFormContainer} />{" "}
      <Route path="*" component={() => <Redirect to="/login" />} />{" "}
    </Switch>{" "}
  </div>
);

export default AnonymousApp;
