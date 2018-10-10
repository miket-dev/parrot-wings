import userReducer from "./userReducer";
import transactionReducer from "./transactionReducer";
import templateReducer from "./templateReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  user: userReducer,
  transaction: transactionReducer,
  template: templateReducer
});

export default appReducer;
