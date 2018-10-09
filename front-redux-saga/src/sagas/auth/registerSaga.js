import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import userActions from "../../actions/userActions";
import userService from "../../services/userService";
import { put, takeEvery, call } from "redux-saga/effects";

function* registerFlow(request) {
  yield put(userActions.request());

  try {
    const { username, email, password } = request;
    const registerResult = yield call(() =>
      userService.register(username, email, password)
    );

    yield put(userActions.requestSuccess());

    window.localStorage.setItem("userId", registerResult.id); //eslint-disable-line no-undef
    window.localStorage.setItem("username", username); //eslint-disable-line no-undef
    yield put(userActions.registerSuccess(registerResult));
  } catch (error) {
    yield put(userActions.requestFailed(error));
  }
}

export default function* registerSaga() {
  yield takeEvery(actionTypes.USER.REGISTER_STARTED, registerFlow);
}
