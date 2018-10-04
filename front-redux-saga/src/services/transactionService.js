import request from "./request";
import config from "config";

const currentBalance = userId =>
  request.get(`${config.apiUrl}/transaction/current`, { userId });

const transactionService = {
  currentBalance
};

export default transactionService;
