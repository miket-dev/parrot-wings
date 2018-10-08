import { connect } from "react-redux";
import TransferStep2 from "../../../components/transfer/steps/TransferStep2";

const TransferStep2Container = connect(state => ({
  users: state.user.get("users")
}))(TransferStep2);

export default TransferStep2Container;
