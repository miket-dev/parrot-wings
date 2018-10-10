import actionCreator from "./actionCreator";
import actionTypes from "./actionTypes";

const request = () => actionCreator(actionTypes.TEMPLATE.REQUEST);
const requestSuccess = response =>
  actionCreator(actionTypes.TEMPLATE.SUCCESS, response);
const requestFailed = error =>
  actionCreator(actionTypes.TEMPLATE.FAILURE, { error });

const listRequest = listRequest =>
  actionCreator(actionTypes.TEMPLATE.LIST_REQUEST, listRequest);
const listSuccess = listSuccess =>
  actionCreator(actionTypes.TEMPLATE.LIST_SUCCESS, listSuccess);

const setTemplateRequest = setTemplateRequest =>
  actionCreator(actionTypes.TEMPLATE.SET_TEMPLATE_STARTED, setTemplateRequest);
const setTemplateSuccess = setTemplateSuccess =>
  actionCreator(actionTypes.TEMPLATE.SET_TEMPLATE_SUCCESS, setTemplateSuccess);

const template = {
  request,
  requestSuccess,
  requestFailed,
  listRequest,
  listSuccess,
  setTemplateRequest,
  setTemplateSuccess
};

export default template;
