//common
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

//user special
const LOGIN_STARTED = "LOGIN_STARTED";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const REGISTER_STARTED = "REGISTER_STARTED";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";

//transactions special
const CURRENT_BALANCE_STARTED = "CURRENT_BALANCE_STARTED";
const CURRENT_BALANCE_SUCCESS = "CURRENT_BALANCE_SUCCESS";

const requestTypesFactory = base => extra =>
  [REQUEST, SUCCESS, FAILURE, ...extra].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

const actionTypes = {
  USER: requestTypesFactory("USER")([
    LOGOUT,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    REGISTER_STARTED,
    REGISTER_SUCCESS
  ]),
  TRANSACTION: requestTypesFactory("TRANSACTION")([
    CURRENT_BALANCE_STARTED,
    CURRENT_BALANCE_SUCCESS
  ]),
  TEMPLATE: requestTypesFactory("TEMPLATE")([])
};

export default actionTypes;
