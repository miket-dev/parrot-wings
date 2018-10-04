import userReducer from "./userReducer";
import transactionReducer from "./transactionReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  user: userReducer,
  transaction: transactionReducer
});

export default appReducer;
