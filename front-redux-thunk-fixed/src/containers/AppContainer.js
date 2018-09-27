import { connect } from "react-redux";
import appActions from "../actions/appActions";
import App from "../App";

const mapStateToProps = state => ({
  loggedIn: state.get("loggedIn")
});

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentBalance: () => {
      dispatch(appActions.currentBalance());
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
