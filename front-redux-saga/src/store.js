import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./reducers/appReducer";
import { rootSaga } from "./sagas/rootSaga";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const action = type =>
  store.dispatch({
    type
  });

export { store as Store };
export { action as ActionDispatcher };
