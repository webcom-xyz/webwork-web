import { call, put } from "redux-saga/effects";
import { setKPIsOfObjective } from "../actions/objective";
import {
  requestCreateNewObjective,
  requestGetKPIsOfObjective,
} from "../requests/objective";

export function* handleCreateNewObjective(action) {
  try {
    yield call(requestCreateNewObjective, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetKPIsOfObjective(action) {
  try {
    const { data } = yield call(requestGetKPIsOfObjective, action.payload);
    yield put(setKPIsOfObjective(data));
  } catch (error) {
    console.log(error);
  }
}
