import actionTypes from "./types/actionTypes";
import { ensure } from "./ensure";
import userService from "../services/userService";
import transactionService from "../services/transactionService";

export function register(username, email, password) {
  return dispatch => {
    if (!ensure.notLoggedIn(true, dispatch)) {
      return;
    }

    userService
      .register(username, email, password)
      .then(user => {
        //eslint-disable-next-line no-undef
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(actionTypes.setAuth(true));
        return transactionService.currentBalance(user.id);
      })
      .then(balance => {
        dispatch(actionTypes.getBalance(balance));
      })
      .catch(error => {
        dispatch(actionTypes.setError(error));
      });
  };
}

export function login(email, password) {
  return dispatch => {
    if (!ensure.notLoggedIn(true, dispatch)) {
      return;
    }

    userService
      .login(email, password)
      .then(user => {
        //eslint-disable-next-line no-undef
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(actionTypes.setAuth(true));
        return transactionService.currentBalance(user.id);
      })
      .then(balance => {
        dispatch(actionTypes.getBalance(balance));
      })
      .catch(error => {
        dispatch(actionTypes.setError(error));
      });
  };
}

export function logout() {
  return dispatch => {
    if (!ensure.loggedIn(true, dispatch)) {
      return;
    }

    //eslint-disable-next-line no-undef
    localStorage.setItem("user", "");
    dispatch(actionTypes.setAuth(false));
  };
}

export function getUsers() {
  return dispatch => {
    userService.getUsers().then(users => {
      dispatch(actionTypes.getUsers(users));
    });
  };
}
