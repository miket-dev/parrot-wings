import { connect } from "react-redux";
import appActions from "../../actions/appActions";
import userService from "../../services/userService";
import Header from "../../components/header/Header";

const logout = dispatch => () => dispatch(appActions.logout());

const mapStateToProps = state => ({
  loggedIn: state.get("loggedIn"),
  name: userService.currentUser()
});

const mapDispatchToProps = dispatch => ({
  logout: logout(dispatch)
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
