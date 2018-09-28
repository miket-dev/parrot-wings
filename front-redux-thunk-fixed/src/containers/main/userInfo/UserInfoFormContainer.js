import { connect } from "react-redux";
import appActions from "../../../actions/appActions";
import UserInfoForm from "../../../components/main/userInfo/UserInfoForm";

const mapStateToProps = state => ({
  currentBalance: state.get("currentBalance")
});

const getBalance = dispatch => () => {
  dispatch(appActions.currentBalance());
};

const mapDispatchToProps = dispatch => ({
  getBalance: getBalance(dispatch)
});

const UserInfoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoForm);

export default UserInfoFormContainer;
