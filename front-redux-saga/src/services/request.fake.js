//import config from "config";
import fakeServer from "./fakeServer";

const post = function(url, data) {
  if (url.endsWith("login")) {
    return fakeServer.login(data.username);
  }

  if (url.endsWith("register")) {
    return fakeServer.register(data.username, data.email, data.password);
  }

  if (url.endsWith("transfer")) {
    return fakeServer.transfer(data.userIdFrom, data.userIdTo, data.amount);
  }

  if (url.endsWith("/templates/save")) {
    return fakeServer.setTemplate(data.userIdTo, data.amount);
  }

  throw new Error("unknown request");
};

//eslint-disable-next-line no-unused-vars
const get = function(url, data) {
  if (url.endsWith("logout")) {
    return fakeServer.logout();
  }

  if (url.endsWith("current")) {
    return fakeServer.currentBalance();
  }

  if (url.endsWith("transaction/list")) {
    return fakeServer.transactions();
  }

  if (url.endsWith("user/list")) {
    return fakeServer.users();
  }

  if (url.endsWith("templates/list")) {
    return fakeServer.templates();
  }
};

const fakeRequest = {
  get,
  post
};

export default fakeRequest;
