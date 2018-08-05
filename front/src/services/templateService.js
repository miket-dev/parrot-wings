import config from "config";
import apiRequest, { VERBS } from "./_apiRequestHelper";

const templateUrl = `${config.apiUrl}/template`;

const templateService = {
  storeTemplate,
  getTemplates
};

function storeTemplate(userIdFrom, userIdTo, amount) {
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
  return apiRequest(`${templateUrl}/template`, VERBS.POST, {
    userIdFrom,
    userIdTo,
    amount
  });
}

function getTemplates(userId) {
  if (!userId) {
    throw new Error("userId is undefined");
  }

  return apiRequest(`${templateUrl}/template`, VERBS.GET, {
    userId
  });
}

export default templateService;
