import { Map } from "immutable";
import actionTypes from "../actions/actionTypes";

const userInitialState = new Map({
  loggedIn: false,
  userId: -1,
  username: null,
  loading: false,
  error: null,
  users: []
});

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case actionTypes.USER.REQUEST: {
      return state.set("loading", true);
    }
    case actionTypes.USER.SUCCESS: {
      return state.set("loading", false);
    }
    case actionTypes.USER.FAILURE: {
      return state.set("loading", false).set("error", action.error);
    }
    case actionTypes.USER.LOGIN: {
      return state
        .set("loggedIn", true)
        .set("username", action.login.name)
        .set("userId", action.login.id);
    }
    case actionTypes.USER.LOGOUT: {
      return state
        .set("loggedIn", false)
        .set("username", null)
        .set("userId", -1);
    }
  }

  return state;
}

export default userReducer;
