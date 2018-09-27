import { connect } from "react-redux";
import appActions from "../../actions/appActions";
import LoginForm from "../../components/auth/LoginForm";

const mapStateToProps = state => ({
  loggedIn: state.get("loggedIn")
});

const handleLogin = dispatch => (email, password) => {
  if (email && password) {
    dispatch(appActions.login(email, password));
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: handleLogin(dispatch)
  };
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
