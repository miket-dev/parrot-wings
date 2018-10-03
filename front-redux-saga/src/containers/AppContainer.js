import { connect } from "react-redux";
import App from "../components/App";
import { withRouter } from "react-router-dom";

const AppContainer = connect(state => ({
  loggedIn: state.user.get("loggedIn"),
  error: state.user.get("error"),
  loading: state.user.get("loading")
}))(App);

const connectedContainer = withRouter(AppContainer);
export { connectedContainer as AppContainer };
