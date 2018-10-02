/* eslint-disable no-undef */
import config from "config";
import realRequest from "./request.real";
import fakeRequest from "./request.fake";

if (config.fakeRequest) {
  module.exports = fakeRequest;
} else {
  module.exports = realRequest;
}
