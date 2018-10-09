import "babel-polyfill";
import currentBalanceSaga from "./currentBalanceSaga";
import listRequestSaga from "./listRequestSaga";
import transferSaga from "./transferSaga";
import newTransactionSaga from "./newTransactionSaga";

const rootTransaction = [
  currentBalanceSaga(),
  listRequestSaga(),
  transferSaga(),
  newTransactionSaga()
];

export default rootTransaction;
