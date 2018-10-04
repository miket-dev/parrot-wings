import actionCreator from "./actionCreator";
import actionTypes from "./actionTypes";

const request = () => actionCreator(actionTypes.TRANSACTION.REQUEST);
const requestSuccess = response =>
  actionCreator(actionTypes.TRANSACTION.SUCCESS, response);
const requestFailed = error =>
  actionCreator(actionTypes.TRANSACTION.FAILURE, { error });

const currentBalanceStarted = balanceStarted =>
  actionCreator(
    actionTypes.TRANSACTION.CURRENT_BALANCE_STARTED,
    balanceStarted
  );
const currentBalanceSuccess = balanceSuccess =>
  actionCreator(
    actionTypes.TRANSACTION.CURRENT_BALANCE_SUCCESS,
    balanceSuccess
  );

const transaction = {
  request,
  requestSuccess,
  requestFailed,
  currentBalanceStarted,
  currentBalanceSuccess
};

export default transaction;
