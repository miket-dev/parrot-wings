import { connect } from "react-redux";
import userActions from "../../../actions/userActions";
import TransferStep1 from "../../../components/transfer/steps/TransferStep1";

const userRequest = dispatch => userId =>
  dispatch(userActions.listRequest({ userId }));

const TransferStep1Container = connect(
  state => ({
    users: state.user.get("users"),
    userId: state.user.get("userId"),
    currentBalance: state.transaction.get("currentBalance")
  }),
  dispatch => ({
    userRequest: userRequest(dispatch)
  })
)(TransferStep1);

export default TransferStep1Container;
