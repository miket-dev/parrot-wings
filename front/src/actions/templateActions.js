import actionTypes from "./types/actionTypes";
import { ensure } from "./ensure";
import userService from "../services/userService";
import templateService from "../services/templateService";

export function storeTemplate(userId, amount) {
  return dispatch => {
    if (!ensure.loggedIn(true, dispatch)) {
      return;
    }

    let user = userService.currentUser();
    templateService
      .storeTemplate(user.id, userId, amount)
      .then(template => {
        dispatch(actionTypes.storeTemplate(template));
      })
      .catch(error => {
        dispatch(actionTypes.setError(error));
      });
  };
}

export function getTemplates() {
  return dispatch => {
    if (!ensure.loggedIn(true, dispatch)) {
      return;
    }

    let user = userService.currentUser();
    templateService
      .getTemplates(user.id)
      .then(templates => {
        dispatch(actionTypes.getTemplates(templates));
      })
      .catch(error => {
        dispatch(actionTypes.setError(error));
      });
  };
}
