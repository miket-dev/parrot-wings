import actionCreator from "./actionCreator";
import actionTypes from "./actionTypes";

const request = () => actionCreator(actionTypes.USER.REQUEST);
const requestSuccess = response =>
  actionCreator(actionTypes.USER.SUCCESS, response);
const requestFailed = error => actionCreator(actionTypes.USER.FAILURE, error);
const loginStarted = login =>
  actionCreator(actionTypes.USER.LOGIN_STARTED, login);
const loginSuccess = login =>
  actionCreator(actionTypes.USER.LOGIN_SUCCESS, login);
const logout = logout => actionCreator(actionTypes.USER.LOGOUT, logout);

const user = {
  request,
  requestSuccess,
  requestFailed,
  loginStarted,
  loginSuccess,
  logout
};

export default user;
