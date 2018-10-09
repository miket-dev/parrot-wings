import request from "./request";
import config from "config";

const currentBalance = userId =>
  request.get(`${config.apiUrl}/transaction/current`, { userId });

const transactions = userId =>
  request.get(`${config.apiUrl}/transaction/list`, { userId });

const transfer = (userIdFrom, userIdTo, amount) =>
  request.post(`${config.apiUrl}/transaction/transfer`, {
    userIdFrom,
    userIdTo,
    amount
  });

const transactionService = {
  currentBalance,
  transactions,
  transfer
};

export default transactionService;
