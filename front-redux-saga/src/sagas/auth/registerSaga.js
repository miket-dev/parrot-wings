import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import userActions from "../../actions/userActions";
import userService from "../../services/userService";
import { put, take, call } from "redux-saga/effects";

export default function* registerSaga() {
  //assuming that there could be multiple register actions
  while (true) {
    //waiting for register request
    const request = yield take(actionTypes.USER.REGISTER);

    yield put(userActions.request());

    try {
      const { username, email, password } = request.data;
      const loginResult = yield call(() =>
        userService.register(username, email, password)
      );

      yield put(userActions.requestSuccess());

      window.localStorage.setItem("username", username); //eslint-disable-line no-undef
      yield put(userActions.register(loginResult.register));
    } catch (error) {
      yield put(userActions.requestFailed(error));
    }
  }
}
