import { register, login, logout, getUsers } from "./userActions";
import {
  currentBalance,
  getTransactions,
  transferPW,
  restoreTransferred
} from "./transactionActions";
import { storeTemplate, getTemplates } from "./templateActions";

const appActions = {
  register,
  login,
  logout,
  getUsers,
  currentBalance,
  getTransactions,
  transferPW,
  restoreTransferred,
  storeTemplate,
  getTemplates
};

export default appActions;
