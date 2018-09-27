import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import actionReducer from "./reducers/actionReducer";

export default createStore(actionReducer, applyMiddleware(thunkMiddleware));
