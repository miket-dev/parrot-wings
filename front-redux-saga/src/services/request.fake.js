//import config from "config";
import fakeServer from "./fakeServer";

const post = function(url, data) {
  if (url.endsWith("login")) {
    return fakeServer.login(data.username);
  }

  if (url.endsWith("register")) {
    return fakeServer.register(data.username, data.email, data.password);
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
};

const fakeRequest = {
  get,
  post
};

export default fakeRequest;
