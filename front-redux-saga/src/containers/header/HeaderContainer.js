import { connect } from "react-redux";
import Header from "../../components/header/Header";
import userActions from "../../actions/userActions";

const handleLogout = dispatch => () => dispatch(userActions.logout());

const HeaderContainer = connect(
  state => ({
    loggedIn: state.user.get("loggedIn")
  }),
  dispatch => ({
    handleLogout: handleLogout(dispatch)
  })
)(Header);

export default HeaderContainer;
