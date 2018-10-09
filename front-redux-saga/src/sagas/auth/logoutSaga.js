import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import userActions from "../../actions/userActions";
import userService from "../../services/userService";
import { put, takeEvery, call } from "redux-saga/effects";

function* logoutFlow() {
  yield put(userActions.request());

  try {
    yield call(() => userService.logout());

    yield put(userActions.requestSuccess());
  } catch (error) {
    yield put(userActions.requestFailed(error));
  }
}

export default function* logoutSaga() {
  yield takeEvery(actionTypes.USER.LOGOUT, logoutFlow);
}
