import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import userActions from "../../actions/userActions";
import userService from "../../services/userService";
import { put, take, call } from "redux-saga/effects";

function* loginSaga() {
  //marking that this saga could be repeatable
  while (true) {
    //waiting for login request
    const request = yield take(actionTypes.USER.LOGIN_STARTED);

    yield put(userActions.request());
    try {
      const { username, password } = request;

      const loginResult = yield call(() =>
        userService.login(username, password)
      );

      yield put(userActions.requestSuccess());
      window.localStorage.setItem("userId", loginResult.login.userId); //eslint-disable-line no-undef
      window.localStorage.setItem("username", username); //eslint-disable-line no-undef
      yield put(userActions.loginSuccess(loginResult.login));
    } catch (error) {
      yield put(userActions.requestFailed(error));
    }
  }
}

export default loginSaga;
