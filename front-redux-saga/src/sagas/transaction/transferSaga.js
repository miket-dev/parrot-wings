import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import transactionActions from "../../actions/transactionActions";
import transactionService from "../../services/transactionService";
import { put, takeEvery, call, select } from "redux-saga/effects";

function* transferFlow(requestData) {
  yield put(transactionActions.request());

  try {
    const userFromId = yield select(state => state.user.get("userId"));
    yield call(() =>
      transactionService.transfer(
        userFromId,
        requestData.userToId,
        requestData.amount
      )
    );

    yield put(
      transactionActions.transferSuccess({
        amount: requestData.amount,
        userToId: requestData.userToId
      })
    );

    yield put(transactionActions.requestSuccess());
  } catch (e) {
    yield put(transactionActions.requestFailed(e));
  }
}

function* transferSaga() {
  yield takeEvery(actionTypes.TRANSACTION.TRANSFER_STARTED, transferFlow);
}

export default transferSaga;
