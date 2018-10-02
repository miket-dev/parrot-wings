import actionCreator from "./actionCreator";
import actionTypes from "./actionTypes";

const request = () => actionCreator(actionTypes.USER.REQUEST);
const requestSuccess = response =>
  actionCreator(actionTypes.USER.SUCCESS, response);
const requestFailed = error => actionCreator(actionTypes.USER.FAILURE, error);
const login = login => actionCreator(actionTypes.USER.LOGIN, login);
const logout = logout => actionCreator(actionTypes.USER.LOGOUT, logout);

const user = {
  request,
  requestSuccess,
  requestFailed,
  login,
  logout
};

export default user;
