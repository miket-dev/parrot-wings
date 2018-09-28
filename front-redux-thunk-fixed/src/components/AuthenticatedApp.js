import React from "react";
import { Switch } from "react-router";
import { Route, Redirect } from "react-router-dom";
import ErrorContainer from "../containers/error/ErrorContainer";
import UserInfoFormContainer from "../containers/main/userInfo/UserInfoFormContainer";
import { TransactionsPanel } from "./main/transactionsPanel/TransactionsPanel";
import TransferPanelContainer from "../containers/main/transferPanel/TransferPanelContainer";
import { TemplatePanel } from "./main/templatePanel/TemplatePanel";

const AuthenticatedApp = () => (
  <div className="container-fluid">
    <ErrorContainer />
    <div className="row">
      <UserInfoFormContainer />
      <Switch>
        <Route exact path="/" component={TransactionsPanel} />
        <Route exact path="/transfer" component={TransferPanelContainer} />
        <Route exact path="/templates" component={TemplatePanel} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  </div>
);

export default AuthenticatedApp;
