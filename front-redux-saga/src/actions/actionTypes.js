//common
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

//special
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";

const requestTypesFactory = base => extra =>
  [REQUEST, SUCCESS, FAILURE, ...extra].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

const actionTypes = {
  USER: requestTypesFactory("USER")([LOGOUT, LOGIN, REGISTER]),
  TRANSACTION: requestTypesFactory("TRANSACTION")([]),
  TEMPLATE: requestTypesFactory("TEMPLATE")([])
};

export default actionTypes;
