import { Map } from "immutable";
import actionTypes from "../actions/actionTypes";
import { LOCATION_CHANGE } from "connected-react-router";

const transactionInitialState = new Map({
  currentBalance: null,
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
    case LOCATION_CHANGE: {
      return state.set("error", null);
    }
  }

  return state;
}

export default transactionReducer;
