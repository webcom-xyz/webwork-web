import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import { watcherSaga } from "../sagas";

const saga = createSagaMiddleware();
const middlewares = [saga];
const store = createStore(reducer, compose(applyMiddleware(...middlewares)));
export type RootState = ReturnType<typeof store.getState>;
saga.run(watcherSaga);

export default store;
