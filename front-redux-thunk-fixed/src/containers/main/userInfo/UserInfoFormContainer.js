import { connect } from "react-redux";
import UserInfoForm from "../../../components/main/userInfo/UserInfoForm";

const mapStateToProps = state => ({
  currentBalance: state.get("currentBalance")
});

const UserInfoFormContainer = connect(mapStateToProps)(UserInfoForm);

export default UserInfoFormContainer;
