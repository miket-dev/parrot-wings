import { connect } from "react-redux";
import App from "../App";

const AppContainer = connect(state => {
  //eslint-disable-next-line
    console.log(state.user.get("loading"));
  return {
    loggedIn: state.user.get("loggedIn"),
    error: state.user.get("error"),
    loading: state.user.get("loading")
  };
})(App);

export default AppContainer;
