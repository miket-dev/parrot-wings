//common
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const LIST_REQUEST = "LIST_REQUEST";
const LIST_SUCCESS = "LIST_SUCCESS";

//user special
const LOGIN_STARTED = "LOGIN_STARTED";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const REGISTER_STARTED = "REGISTER_STARTED";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";

//transactions special
const CURRENT_BALANCE_STARTED = "CURRENT_BALANCE_STARTED";
const CURRENT_BALANCE_SUCCESS = "CURRENT_BALANCE_SUCCESS";
const TRANSFER_STARTED = "TRANSFER_STARTED";
const TRANSFER_SUCCESS = "TRANSFER_SUCCESS";

const requestTypesFactory = base => extra =>
  [REQUEST, SUCCESS, FAILURE, LIST_REQUEST, LIST_SUCCESS, ...extra].reduce(
    (acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );

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
    CURRENT_BALANCE_SUCCESS,
    TRANSFER_STARTED,
    TRANSFER_SUCCESS
  ]),
  TEMPLATE: requestTypesFactory("TEMPLATE")([])
};

export default actionTypes;
