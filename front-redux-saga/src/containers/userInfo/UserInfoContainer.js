import { connect } from "react-redux";
import UserInfo from "../../components/userInfo/UserInfo";
import transactionActions from "../../actions/transactionActions";

const requestBalance = dispatch => () =>
  dispatch(transactionActions.currentBalanceStarted());

const UserInfoContainer = connect(
  state => ({
    userId: state.user.get("userId"),
    username: state.user.get("username"),
    currentBalance: state.transaction.get("currentBalance")
  }),
  dispatch => ({
    requestBalance: requestBalance(dispatch)
  })
)(UserInfo);

export default UserInfoContainer;
