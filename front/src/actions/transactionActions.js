import actionTypes from "./types/actionTypes";
import { transferredValues } from "./constants/actionConstants";
import { ensure } from "./ensure";
import userService from "../services/userService";
import transactionService from "../services/transactionService";

export function currentBalance() {
  return dispatch => {
    if (!ensure.loggedIn(true, dispatch)) {
      return;
    }

    let user = userService.currentUser();

    transactionService
      .currentBalance(user.id)
      .then(balance => {
        dispatch(actionTypes.getBalance(balance));
      })
      .catch(error => {
        dispatch(actionTypes.setError(error));
      });
  };
}

export function getTransactions() {
  return dispatch => {
    if (!ensure.loggedIn(true, dispatch)) {
      return;
    }

    let user = userService.currentUser();
    transactionService
      .getTransactions(user.id)
      .then(transactions => {
        let parsedDateTransactions = transactions.map(x => {
          x.date = new Date(x.date);
          return x;
        });

        dispatch(actionTypes.getTransactions(parsedDateTransactions));
      })
      .catch(error => {
        dispatch(actionTypes.setError(error));
      });
  };
}

export function restoreTransferred() {
  return dispatch =>
    dispatch(actionTypes.setTransferred(transferredValues.NOT_STARTED));
}

export function transferPW(userToId, amount) {
  return dispatch => {
    if (!ensure.loggedIn(true, dispatch)) {
      return;
    }

    let user = userService.currentUser();
    transactionService
      .transfer(user.id, userToId, amount)
      .then(() => {
        dispatch(actionTypes.setTransferred(transferredValues.SUCCESS));
        return transactionService.currentBalance(user.id);
      })
      .then(balance => {
        dispatch(actionTypes.getBalance(balance));
      })
      .catch(error => {
        dispatch(actionTypes.setTransferred(transferredValues.FAILED));
        dispatch(actionTypes.setError(error));
      });
  };
}
