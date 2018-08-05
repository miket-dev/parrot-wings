import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import appActions from "./actions/appActions";
import { ErrorComponent } from "./components/error/errorComponent";
import { LoginForm } from "./components/auth/LoginForm";
import { RegisterForm } from "./components/auth/RegisterForm";
import { Header } from "./components/header/Header";
import { UserInfoForm } from "./components/main/userInfo/UserInfoForm";
import { TransactionsPanel } from "./components/main/transactionsPanel/TransactionsPanel";
import { TransferPanel } from "./components/main/transferPanel/TransferPanel";
import { TemplatePanel } from "./components/main/templatePanel/TemplatePanel";

// import configureFakeBackend from "./fake/fakeBackend";
// configureFakeBackend();

class App extends React.Component {
  constructor(props) {
    super(props);

    const { loggedIn, dispatch } = this.props;

    if (loggedIn) {
      dispatch(appActions.currentBalance());
    }
  }

  render() {
    const { loggedIn } = this.props;
    if (!loggedIn) {
      return (
        <div id="appContainer">
          <Header />
          <div className="container-fluid">
            <ErrorComponent />
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="*" component={() => <Redirect to="/login" />} />
            </Switch>
          </div>
        </div>
      );
    }

    return (
      <div id="appContainer">
        <Header />
        <div className="container-fluid">
          <ErrorComponent />
          <div className="row">
            <UserInfoForm />
            <Switch>
              <Route exact path="/" component={TransactionsPanel} />
              <Route exact path="/transfer" component={TransferPanel} />
              <Route exact path="/templates" component={TemplatePanel} />
              <Route path="*" component={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  loggedIn: state.get("loggedIn"),
  users: state.get("users"),
  currentBalance: state.get("currentBalance"),
  errorMessage: state.get("errorMessage")
});

const connectedApp = withRouter(connect(mapStateToProps)(App));

export { connectedApp as App };
