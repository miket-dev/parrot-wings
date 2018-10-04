/* eslint-disable no-undef */
const withTimeout = (resolve, result) => {
  setTimeout(() => {
    resolve(result);
  }, 500);
};

const login = username => {
  if (username === "qq@qq") {
    throw new Error("invalid username");
  }
  return new Promise(resolve =>
    withTimeout(resolve, { login: true, username, id: 1 })
  );
};

const logout = () =>
  new Promise(resolve => withTimeout(resolve, { logout: true }));

//eslint-disable-next-line no-unused-vars
const register = (username, email, password) => {
  if (email === "qq@qq") {
    throw new Error("invalid email");
  }
  return new Promise(resolve =>
    withTimeout(resolve, { registered: true, username, id: 1 })
  );
};

//eslint-disable-next-line no-unused-vars
const currentBalance = userId => {
  return new Promise(resolve => withTimeout(resolve, 500));
};

const fakeServer = {
  login,
  logout,
  register,
  currentBalance
};
export default fakeServer;
