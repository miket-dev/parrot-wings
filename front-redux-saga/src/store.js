import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./reducers/appReducer";
import { rootSaga } from "./sagas/rootSaga";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(appReducer),
  applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export { store as Store };
export { history as History };
