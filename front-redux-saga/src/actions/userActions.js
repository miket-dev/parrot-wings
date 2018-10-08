import actionCreator from "./actionCreator";
import actionTypes from "./actionTypes";

const request = () => actionCreator(actionTypes.USER.REQUEST);
const requestSuccess = response =>
  actionCreator(actionTypes.USER.SUCCESS, response);
const requestFailed = error =>
  actionCreator(actionTypes.USER.FAILURE, { error });

const loginStarted = login =>
  actionCreator(actionTypes.USER.LOGIN_STARTED, login);
const loginSuccess = login =>
  actionCreator(actionTypes.USER.LOGIN_SUCCESS, login);

const logout = logout => actionCreator(actionTypes.USER.LOGOUT, logout);

const registerStarted = register =>
  actionCreator(actionTypes.USER.REGISTER_STARTED, register);
const registerSuccess = register =>
  actionCreator(actionTypes.USER.REGISTER_SUCCESS, register);

const listRequest = listRequest =>
  actionCreator(actionTypes.USER.LIST_REQUEST, listRequest);
const listSuccess = listSuccess =>
  actionCreator(actionTypes.USER.LIST_SUCCESS, listSuccess);

const user = {
  request,
  requestSuccess,
  requestFailed,
  registerStarted,
  registerSuccess,
  loginStarted,
  loginSuccess,
  logout,
  listRequest,
  listSuccess
};

export default user;
