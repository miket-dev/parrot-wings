import "babel-polyfill";
import { all } from "redux-saga/effects";
import userListSaga from "./user/userListSaga";
import rootAuth from "./auth/rootAuth";
import rootTransaction from "./transaction/rootTransaction";
import rootTemplate from "./template/rootTemplate";

export function* rootSaga() {
  yield all([...rootAuth, userListSaga(), ...rootTransaction, ...rootTemplate]);
}
