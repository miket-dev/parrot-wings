import { Map } from "immutable";
import actionTypes from "../actions/actionTypes";
import { LOCATION_CHANGE } from "connected-react-router";

const templateInitialState = new Map({
  templates: null,
  loading: false,
  error: null
});

function templateReducer(state = templateInitialState, action) {
  switch (action.type) {
    case actionTypes.TEMPLATE.REQUEST: {
      return state.set("loading", true).set("error", null);
    }
    case actionTypes.TEMPLATE.SUCCESS: {
      return state.set("loading", false);
    }
    case actionTypes.TEMPLATE.FAILURE: {
      return state.set("loading", false).set("error", action.error);
    }
    case actionTypes.TEMPLATE.LIST_SUCCESS: {
      return state.set("templates", action.templates);
    }
    case LOCATION_CHANGE: {
      return state.set("error", null);
    }
  }

  return state;
}

export default templateReducer;
