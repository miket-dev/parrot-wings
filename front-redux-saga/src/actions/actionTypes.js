//common
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

//special
const LOGIN_STARTED = "LOGIN_STARTED";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";

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
    REGISTER
  ]),
  TRANSACTION: requestTypesFactory("TRANSACTION")([]),
  TEMPLATE: requestTypesFactory("TEMPLATE")([])
};

export default actionTypes;
