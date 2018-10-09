import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import userActions from "../../actions/userActions";
import userService from "../../services/userService";
import { put, take, call, select } from "redux-saga/effects";

function* userListSaga() {
  yield take(actionTypes.USER.LIST_REQUEST);

  yield put(userActions.request());

  try {
    const currentUserId = yield select(state => state.user.userId);

    const result = yield call(() => userService.userList(currentUserId));

    yield put(userActions.listSuccess({ users: result }));

    yield put(userActions.requestSuccess());
  } catch (e) {
    yield put(userActions.requestFailed(e));
  }
}

export default userListSaga;
