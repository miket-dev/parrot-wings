import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import templateActions from "../../actions/templateActions";
import templateService from "../../services/templateService";
import { put, take, call } from "redux-saga/effects";

function* templateListRequestSaga() {
  const requestData = yield take(actionTypes.TEMPLATE.LIST_REQUEST);
  yield put(templateActions.request());

  try {
    const result = yield call(() =>
      templateService.templates(requestData.userId)
    );

    yield put(templateActions.listSuccess({ templates: result }));

    yield put(templateActions.requestSuccess());
  } catch (e) {
    yield put(templateActions.requestFailed(e));
  }
}

export default templateListRequestSaga;
