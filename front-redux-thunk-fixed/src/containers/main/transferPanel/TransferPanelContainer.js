import { connect } from "react-redux";
import appActions from "../../../actions/appActions";
import TransferPanel from "../../../components/main/transferPanel/TransferPanel";

const mapStateToProps = state => ({
  errorMessage: state.get("errorMessage"),
  users: state.get("users"),
  currentBalance: state.get("currentBalance")
});

const getUsers = dispatch => () => dispatch(appActions.getUsers());
const restoreTransferred = dispatch => () =>
  dispatch(appActions.restoreTransferred());

const mapDispatchToProps = dispatch => ({
  getUsers: getUsers(dispatch),
  restoreTransferred: restoreTransferred(dispatch)
});

const TransferPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferPanel);

export default TransferPanelContainer;
