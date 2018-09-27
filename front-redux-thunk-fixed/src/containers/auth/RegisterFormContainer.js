import { connect } from "react-redux";
import appActions from "../../actions/appActions";
import RegisterForm from "../../components/auth/RegisterForm";

const handleRegister = dispatch => (email, name, password) => {
  if (email && password) {
    dispatch(appActions.register(name, email, password));
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleRegister: handleRegister(dispatch)
  };
};

const RegisterFormContainer = connect(mapDispatchToProps)(RegisterForm);

export default RegisterFormContainer;
