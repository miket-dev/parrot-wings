import { connect } from "react-redux";
import ErrorComponent from "../../components/utils/ErrorComponent";

const ErrorContainer = connect(state => ({
  error: state.user.get("error") || state.transaction.get("error")
}))(ErrorComponent);

export default ErrorContainer;
