import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import userActions from "../../actions/userActions";
import userService from "../../services/userService";
import { put, take, call } from "redux-saga/effects";

export default function* logoutSaga() {
  while (true) {
    yield take(actionTypes.USER.LOGOUT);

    yield put(userActions.request());

    try {
      yield call(() => userService.logout());

      yield put(userActions.requestSuccess());
    } catch (error) {
      yield put(userActions.requestFailed(error));
    }
  }
}
