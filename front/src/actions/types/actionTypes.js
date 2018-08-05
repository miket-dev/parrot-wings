import { actionConstants } from "../constants/actionConstants";

const actionTypes = {
  setAuth,
  getBalance,
  getUsers,
  getTransactions,
  setTransferred,
  storeTemplate,
  getTemplates,
  setError
};

function setAuth(isLoggedIn) {
  return {
    type: actionConstants.SET_AUTH,
    isLoggedIn
  };
}

function getBalance(balance) {
  return {
    type: actionConstants.GET_BALANCE,
    balance
  };
}

function getUsers(users) {
  return {
    type: actionConstants.GET_USERS,
    users
  };
}

function getTransactions(transactions) {
  return {
    type: actionConstants.GET_TRANSACTIONS,
    transactions
  };
}

function setTransferred(transferred) {
  return {
    type: actionConstants.SET_TRANSFERRED,
    transferred
  };
}

function getTemplates(templates) {
  return {
    type: actionConstants.GET_TEMPLATES,
    templates
  };
}

function storeTemplate(template) {
  return {
    type: actionConstants.STORE_TEMPLATE,
    template
  };
}

function setError(error) {
  return {
    type: actionConstants.SET_ERROR,
    error
  };
}

export default actionTypes;
