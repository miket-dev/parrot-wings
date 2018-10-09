import "babel-polyfill";
import { all } from "redux-saga/effects";
import loginSaga from "./auth/loginSaga";
import registerSaga from "./auth/registerSaga";
import logoutSaga from "./auth/logoutSaga";
import currentBalanceSaga from "./transaction/currentBalanceSaga";
import listRequestSaga from "./transaction/listRequestSaga";
import userListSaga from "./user/userListSaga";
import transferSaga from "./transaction/transferSaga";
import newTransactionSaga from "./transaction/newTransactionSaga";

export function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    logoutSaga(),
    currentBalanceSaga(),
    listRequestSaga(),
    userListSaga(),
    transferSaga(),
    newTransactionSaga()
  ]);
}
