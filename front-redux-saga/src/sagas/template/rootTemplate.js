import "babel-polyfill";
import templateListRequestSaga from "./templateListRequestSaga";
import setTemplateSaga from "./setTemplateSaga";

const rootTemplate = [templateListRequestSaga(), setTemplateSaga()];

export default rootTemplate;
