import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import transactionActions from "../../actions/transactionActions";
import transactionService from "../../services/transactionService";
import { put, take, call } from "redux-saga/effects";

function* currentBalanceSaga() {
  //marking that this saga could be repeatable
  while (true) {
    //waiting for login request
    const request = yield take(actionTypes.TRANSACTION.CURRENT_BALANCE_STARTED);

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
}

export default currentBalanceSaga;
