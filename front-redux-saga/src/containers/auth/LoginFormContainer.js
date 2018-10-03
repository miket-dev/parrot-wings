import { connect } from "react-redux";
import LoginForm from "../../components/auth/LoginForm";
import userActions from "../../actions/userActions";

const handleLogin = dispatch => (email, password) => {
  if (email && password) {
    dispatch(userActions.loginStarted({ email, username: email, password }));
  }
};

const handleLogout = dispatch => () => dispatch(userActions.logout());

const LoginFormContainer = connect(
  state => ({
    loggedIn: state.user.get("loggedIn"),
    error: state.user.get("error"),
    loading: state.user.get("loading")
  }),
  dispatch => ({
    handleLogin: handleLogin(dispatch),
    handleLogout: handleLogout(dispatch)
  })
)(LoginForm);

export default LoginFormContainer;
