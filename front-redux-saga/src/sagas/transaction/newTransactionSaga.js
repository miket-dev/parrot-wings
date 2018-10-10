import "babel-polyfill";
import actionTypes from "../../actions/actionTypes";
import transactionActions from "../../actions/transactionActions";
import transactionService from "../../services/transactionService";
import { put, takeEvery, call, select, all } from "redux-saga/effects";
import userService from "../../services/userService";
import config from "config";

function* newTransactionFlow(requestData) {
  yield put(transactionActions.request());

  try {
    const userId = yield select(state => state.user.get("userId"));
    const { users, transactions } = yield all({
      users:
        select(state => state.user.get("users")).length > 0 ||
        call(userService.userList, userId),
      transactions:
        select(state => state.transaction.get("transactions")).length > 0 ||
        call(transactionService.transactions, userId)
    });

    const currentBalance = yield select(state =>
      state.transaction.get("currentBalance")
    );

    if (config.fakeRequest) {
      const transaction = {
        transaction: {
          id: transactions.reduce((acc, x) => (acc > x.id ? acc : x.id), 0) + 1,
          user: {
            name: users.filter(x => x.id === requestData.userToId)[0].name
          },
          type: "Credit",
          amount: requestData.amount,
          resource: currentBalance,
          date: new Date()
        }
      };

      yield put(transactionActions.appendTransaction(transaction));
    }

    yield put(transactionActions.requestSuccess());
  } catch (e) {
    yield put(transactionActions.requestFailed(e));
  }
}

function* newTransactionSaga() {
  yield takeEvery(actionTypes.TRANSACTION.TRANSFER_SUCCESS, newTransactionFlow);
}

export default newTransactionSaga;
