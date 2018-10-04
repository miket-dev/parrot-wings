import { Map } from "immutable";
import actionTypes from "../actions/actionTypes";
import userService from "../services/userService";
import { LOCATION_CHANGE } from "connected-react-router";

let user = userService.currentUser();
const userInitialState = new Map({
  loggedIn: !!user.id,
  userId: user.id || -1,
  username: user.username,
  loading: false,
  error: null,
  users: []
});

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case actionTypes.USER.REQUEST: {
      return state.set("loading", true).set("error", null);
    }
    case actionTypes.USER.SUCCESS: {
      return state.set("loading", false);
    }
    case actionTypes.USER.FAILURE: {
      return state.set("loading", false).set("error", action.error);
    }
    case actionTypes.USER.LOGIN_SUCCESS: {
      return state
        .set("loggedIn", true)
        .set("username", action.username)
        .set("userId", action.id);
    }
    case actionTypes.USER.LOGOUT: {
      return state
        .set("loggedIn", false)
        .set("username", null)
        .set("userId", -1);
    }
    case actionTypes.USER.REGISTER_SUCCESS: {
      return state
        .set("loggedIn", true)
        .set("username", action.username)
        .set("userId", action.id);
    }
    case LOCATION_CHANGE: {
      return state.set("error", null);
    }
  }

  return state;
}

export default userReducer;
