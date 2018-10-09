import "babel-polyfill";
import loginSaga from "./loginSaga";
import logoutSaga from "./logoutSaga";
import registerSaga from "./registerSaga";

const rootAuth = [loginSaga(), logoutSaga(), registerSaga()];

export default rootAuth;
