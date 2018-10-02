/* eslint-disable no-undef */
const login = username =>
  new Promise(resolve => resolve({ login: true, username, id: 1 }));

const logout = () => new Promise(resolve => resolve({ logout: true }));

//eslint-disable-next-line no-unused-vars
const register = (username, email, password) =>
  new Promise(resolve => resolve({ registered: true, id: 1, username }));

const fakeServer = {
  login,
  logout,
  register
};
export default fakeServer;
