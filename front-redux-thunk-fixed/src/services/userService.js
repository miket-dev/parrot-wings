import config from "config";
import apiRequest, { VERBS } from "./_apiRequestHelper";

const userUrl = `${config.apiUrl}/user`;

const userService = {
  register,
  login,
  getUsers,
  currentUser
};

function register(name, email, password) {
  return apiRequest(`${userUrl}/register`, VERBS.POST, {
    name,
    email,
    password
  });
}

function login(email, password) {
  return apiRequest(`${userUrl}/login`, VERBS.POST, {
    email,
    password
  });
}

function getUsers() {
  let user = currentUser();
  return apiRequest(`${userUrl}/users`, VERBS.GET, {
    currentUser: user.id
  });
}

function currentUser() {
  //eslint-disable-next-line no-undef
  let user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export default userService;
