import "babel-polyfill";
import { all } from "redux-saga/effects";
import loginSaga from "./auth/loginSaga";
import registerSaga from "./auth/registerSaga";
import logoutSaga from "./auth/logoutSaga";
import currentBalanceSaga from "./transaction/currentBalanceSaga";

export function* rootSaga() {
  yield all([loginSaga(), registerSaga(), logoutSaga(), currentBalanceSaga()]);
}
