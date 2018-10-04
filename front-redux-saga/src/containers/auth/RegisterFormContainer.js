import { connect } from "react-redux";
import RegisterForm from "../../components/auth/RegisterForm";
import userActions from "../../actions/userActions";

const handleRegister = dispatch => (email, username, password) => {
  if (email && username && password) {
    dispatch(userActions.registerStarted({ email, username, password }));
  }
};

const RegisterFormContainer = connect(
  state => ({
    error: state.user.get("error"),
    loading: state.user.get("loading")
  }),
  dispatch => ({
    handleRegister: handleRegister(dispatch)
  })
)(RegisterForm);

export default RegisterFormContainer;
