import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import transactionActions from "../../actions/transactionActions";
import transactionService from "../../services/transactionService";
import { put, take, call } from "redux-saga/effects";

function* listRequestSaga() {
  const requestData = yield take(actionTypes.TRANSACTION.LIST_REQUEST);

  yield put(transactionActions.request());

  try {
    const result = yield call(() =>
      transactionService.transactions(requestData)
    );

    yield put(transactionActions.listSuccess({ transactions: result }));

    yield put(transactionActions.requestSuccess());
  } catch (e) {
    yield put(transactionActions.requestFailed(e));
  }
}

export default listRequestSaga;
