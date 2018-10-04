import React from "React";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginFormContainer from "../../containers/auth/LoginFormContainer";
import RegisterFormContainer from "../../containers/auth/RegisterFormContainer";

const RouteSwitch = () => (
  <Switch>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/register" component={RegisterFormContainer} />
    <Route path="*" component={() => <Redirect to="/login" />} />
  </Switch>
);

export default RouteSwitch;
