import config from "config";
import apiRequest, { VERBS } from "./_apiRequestHelper";

const transactionUrl = `${config.apiUrl}/transaction`;

const transactionService = {
  currentBalance,
  getTransactions,
  transfer
};

function currentBalance(userId) {
  if (!userId) {
    throw new Error("userId is undefined");
  }
  return apiRequest(`${transactionUrl}/balance`, VERBS.GET, { userId });
}

function getTransactions(userId) {
  if (!userId) {
    throw new Error("userId is undefined");
  }

  return apiRequest(`${transactionUrl}/transactions`, VERBS.GET, { userId });
}

function transfer(userIdFrom, userIdTo, amount) {
  //validation
  if (!userIdFrom) {
    throw new Error("userIdFrom is undefined");
  }

  if (!userIdTo) {
    throw new Error("userIdTo is undefined");
  }

  if (!amount) {
    throw new Error("amount is undefined");
  }

  return apiRequest(`${transactionUrl}/transfer`, VERBS.POST, {
    userIdFrom,
    userIdTo,
    amount
  });
}

export default transactionService;
