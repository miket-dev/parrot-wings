import actionTypes from "./types/actionTypes";

export const ensure = {
  loggedIn,
  notLoggedIn
};

function loggedIn(withThrow, dispatch) {
  //eslint-disable-next-line no-undef
  if (!localStorage.getItem("user")) {
    if (withThrow) {
      dispatch(actionTypes.setError(new Error("User is not logged in")));
    }

    return false;
  }

  return true;
}

function notLoggedIn(withThrow, dispatch) {
  //eslint-disable-next-line no-undef
  if (localStorage.getItem("user")) {
    if (withThrow) {
      dispatch(actionTypes.setError(new Error("User is logged in")));
    }

    return false;
  }

  return true;
}
