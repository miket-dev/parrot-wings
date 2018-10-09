import { Map } from "immutable";
import actionTypes from "../actions/actionTypes";
import transferredValues from "../constants/transferredValues";
import { LOCATION_CHANGE } from "connected-react-router";

const transactionInitialState = new Map({
  currentBalance: null,
  transactions: [],
  transactionStatus: transferredValues.NOT_STARTED,
  loading: false,
  error: null
});

function transactionReducer(state = transactionInitialState, action) {
  switch (action.type) {
    case actionTypes.TRANSACTION.REQUEST: {
      return state.set("loading", true).set("error", null);
    }
    case actionTypes.TRANSACTION.SUCCESS: {
      return state.set("loading", false);
    }
    case actionTypes.TRANSACTION.FAILURE: {
      return state.set("loading", false).set("error", action.error);
    }
    case actionTypes.TRANSACTION.CURRENT_BALANCE_SUCCESS: {
      return state.set("currentBalance", action.balance);
    }
    case actionTypes.TRANSACTION.LIST_SUCCESS: {
      return state.set("transactions", action.transactions);
    }
    case actionTypes.TRANSACTION.APPEND: {
      return state.updateIn(["transactions"], arr => {
        return arr.concat(action.transaction);
      });
    }
    case actionTypes.TRANSACTION.TRANSFER_STARTED: {
      return state.set("transactionStatus", transferredValues.NOT_STARTED);
    }
    case actionTypes.TRANSACTION.TRANSFER_SUCCESS: {
      return state
        .set("currentBalance", state.get("currentBalance") - action.amount)
        .set("transactionStatus", transferredValues.SUCCESS);
    }
    case LOCATION_CHANGE: {
      return state.set("error", null);
    }
  }

  return state;
}

export default transactionReducer;
