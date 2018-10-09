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
const transfer = (userIdFrom, userIdTo, amount) => {
  return new Promise(resolve => withTimeout(resolve, { status: true }));
};

//eslint-disable-next-line no-unused-vars
const currentBalance = userId => {
  return new Promise(resolve => withTimeout(resolve, 500));
};

const createTransaction = (id, username, type, amount, resource, date) => ({
  id,
  user: {
    name: username
  },
  type,
  amount,
  resource,
  date
});

const transactions = () => {
  return new Promise(resolve =>
    withTimeout(resolve, [
      createTransaction(1, "Darth Vader", "Credit", 130, 470, new Date()),
      createTransaction(2, "Clark Kent", "Debit", 240, 670, new Date()),
      createTransaction(3, "Bruce Wayne", "Credit", 210, 350, new Date())
    ])
  );
};

const users = () => {
  return new Promise(resolve =>
    withTimeout(resolve, [
      { id: 1, name: "Darth Vader" },
      { id: 2, name: "Clark Kent" },
      { id: 3, name: "Bruce Wayne" }
    ])
  );
};

const fakeServer = {
  login,
  logout,
  register,
  currentBalance,
  transactions,
  users,
  transfer
};
export default fakeServer;
