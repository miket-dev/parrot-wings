import { connect } from "react-redux";
import ErrorComponent from "../../components/error/errorComponent";

const mapStateToProps = state => ({
  errorMessage: state.get("error")
});

const ErrorContainer = connect(mapStateToProps)(ErrorComponent);

export default ErrorContainer;
