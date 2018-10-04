import request from "./request";
import config from "config";

const login = (username, password) =>
  request.post(`${config.apiUrl}/user/login`, { username, password });

const register = (username, email, password) =>
  request.post(`${config.apiUrl}/user/register`, { username, email, password });

const logout = () => request.get(`${config.apiUrl}/user/logout`);

const currentUser = () => ({
  id: window.localStorage.getItem("userId"),
  username: window.localStorage.getItem("username")
});

const userService = {
  login,
  register,
  logout,
  currentUser
};

export default userService;
