import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import templateActions from "../../actions/templateActions";
import templateService from "../../services/templateService";
import { put, takeEvery, call, select } from "redux-saga/effects";

function* setTemplateFlow(request) {
  yield put(templateActions.request());
  console.log("MY LOG!!!", request);
  const currentUserId = yield select(state => state.user.get("userId"));
  try {
    const result = yield call(
      templateService.saveTemplate,
      currentUserId,
      request.userToId,
      request.amount
    );

    console.log("MY LOG!!!", result);

    yield put(templateActions.setTemplateSuccess(result));

    yield put(templateActions.requestSuccess());
  } catch (e) {
    yield put(templateActions.requestFailed(e));
  }
}

function* setTemplateSaga() {
  yield takeEvery(actionTypes.TEMPLATE.SET_TEMPLATE_STARTED, setTemplateFlow);
}

export default setTemplateSaga;
