import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./reducers/appReducer";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const action = type =>
  store.dispatch({
    type
  });

export { store as Store };
export { action as ActionDispatcher };
