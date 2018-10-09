import { connect } from "react-redux";
import transactionActions from "../../../actions/transactionActions";
import TransferStep3 from "../../../components/transfer/steps/TransferStep3";

const initTransfer = dispatch => (userToId, amount) =>
  dispatch(transactionActions.transferRequest({ userToId, amount }));

const TransferStep3Container = connect(
  state => ({
    users: state.user.get("users"),
    transferred: state.transaction.get("transactionStatus"),
    error: state.transaction.get("error")
  }),
  dispatch => ({
    initTransfer: initTransfer(dispatch)
  })
)(TransferStep3);

export default TransferStep3Container;
