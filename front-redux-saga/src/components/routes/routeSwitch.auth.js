import React from "React";
import { Switch, Route, Redirect } from "react-router-dom";
import UserInfoContainer from "../../containers/userInfo/UserInfoContainer";
import TransactionsPanelContainer from "../../containers/transactions/TransactionsPanelContainer";

const RouteSwitch = () => (
  <div className="row">
    <UserInfoContainer />
    <Switch>
      <Route path="/" component={TransactionsPanelContainer} />
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  </div>
);

export default RouteSwitch;
