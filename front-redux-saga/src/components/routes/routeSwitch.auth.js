import React from "React";
import { Switch, Route, Redirect } from "react-router-dom";
import UserInfoContainer from "../../containers/userInfo/UserInfoContainer";
import TransactionsPanelContainer from "../../containers/transactions/TransactionsPanelContainer";
import TransferPanel from "../transfer/TransferPanel";

const RouteSwitch = () => (
  <div className="row">
    <UserInfoContainer />
    <Switch>
      <Route exact path="/" component={TransactionsPanelContainer} />
      <Route exact path="/transfer" component={TransferPanel} />
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  </div>
);

export default RouteSwitch;
