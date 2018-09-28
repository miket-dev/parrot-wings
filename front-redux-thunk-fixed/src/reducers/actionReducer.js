import { Map } from "immutable";
import userService from "../services/userService";
import {
  actionConstants,
  transferredValues
} from "../actions/constants/actionConstants";

let user = userService.currentUser();
const initialState = Map({
  loggedIn: Boolean(user),
  users: [],
  transactions: [],
  currentBalance: 0,
  errorMessage: null,
  transferred: transferredValues.NOT_STARTED,
  templates: []
});

export default function actionReducer(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case actionConstants.SET_AUTH: {
      return state.set("loggedIn", action.isLoggedIn);
    }
    case actionConstants.GET_BALANCE: {
      return state.set("currentBalance", action.balance);
    }
    case actionConstants.SET_TRANSFERRED: {
      return state.set("transferred", action.transferred);
    }
    case actionConstants.GET_USERS: {
      return state.set("users", action.users);
    }
    case actionConstants.GET_TRANSACTIONS: {
      return state.set("transactions", action.transactions);
    }
    case actionConstants.STORE_TEMPLATE: {
      return state.updateIn(["templates"], arr => {
        return arr.concat(action.template);
      });
    }
    case actionConstants.GET_TEMPLATES: {
      return state.set("templates", action.templates);
    }
    case actionConstants.SET_ERROR: {
      return state.set("errorMessage", action.error);
    }
  }

  return state;
}
