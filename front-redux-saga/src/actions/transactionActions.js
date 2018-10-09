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

const listRequest = listRequest =>
  actionCreator(actionTypes.TRANSACTION.LIST_REQUEST, listRequest);
const listSuccess = listSuccess =>
  actionCreator(actionTypes.TRANSACTION.LIST_SUCCESS, listSuccess);

const transferRequest = transferRequest =>
  actionCreator(actionTypes.TRANSACTION.TRANSFER_STARTED, transferRequest);
const transferSuccess = transferSuccess =>
  actionCreator(actionTypes.TRANSACTION.TRANSFER_SUCCESS, transferSuccess);

const appendTransaction = append =>
  actionCreator(actionTypes.TRANSACTION.APPEND, append);

const transaction = {
  request,
  requestSuccess,
  requestFailed,
  currentBalanceStarted,
  currentBalanceSuccess,
  listRequest,
  listSuccess,
  transferRequest,
  transferSuccess,
  appendTransaction
};

export default transaction;
