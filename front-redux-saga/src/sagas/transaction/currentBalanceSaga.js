import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import transactionActions from "../../actions/transactionActions";
import transactionService from "../../services/transactionService";
import { put, takeEvery, call } from "redux-saga/effects";

function* currentBalanceFlow(request) {
  yield put(transactionActions.request());
  try {
    const { userId } = request;

    const balanceResult = yield call(() =>
      transactionService.currentBalance(userId)
    );

    yield put(transactionActions.requestSuccess());
    yield put(
      transactionActions.currentBalanceSuccess({ balance: balanceResult })
    );
  } catch (error) {
    yield put(transactionActions.requestFailed(error));
  }
}

function* currentBalanceSaga() {
  yield takeEvery(
    actionTypes.TRANSACTION.CURRENT_BALANCE_STARTED,
    currentBalanceFlow
  );
}

export default currentBalanceSaga;
