import { connect } from "react-redux";
import transactionActions from "../../actions/transactionActions";
import TransactionsPanel from "../../components/transactions/TransactionsPanel";

const requestTransactions = dispatch => userId =>
  dispatch(transactionActions.listRequest(userId));

const TransactionsPanelContainer = connect(
  state => ({
    transactions: state.transaction.get("transactions"),
    userId: state.user.get("userId")
  }),
  dispatch => ({
    requestTransactions: requestTransactions(dispatch)
  })
)(TransactionsPanel);

export default TransactionsPanelContainer;
