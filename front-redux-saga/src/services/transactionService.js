import request from "./request";
import config from "config";

const currentBalance = userId =>
  request.get(`${config.apiUrl}/transaction/current`, { userId });

const transactions = userId =>
  request.get(`${config.apiUrl}/transaction/list`, { userId });

const transactionService = {
  currentBalance,
  transactions
};

export default transactionService;
