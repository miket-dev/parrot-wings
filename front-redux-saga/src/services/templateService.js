import request from "./request";
import config from "config";

const templates = userId =>
  request.get(`${config.apiUrl}/templates/list`, { userId });

const saveTemplate = (userIdFrom, userIdTo, amount) =>
  request.post(`${config.apiUrl}/templates/save`, {
    userIdFrom,
    userIdTo,
    amount
  });

const templateService = {
  templates,
  saveTemplate
};

export default templateService;
