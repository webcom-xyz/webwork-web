import { call, put } from "redux-saga/effects";
import { setObjectives } from "../actions/objective";
import { requestCreateNewObjective, requestGetAllObjectives } from "../requests/objective";

export function* handleCreateNewObjective(action) {
  try {
    yield call(requestCreateNewObjective, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAllObjectves(action) {
  try {
    const { data } = yield call(requestGetAllObjectives, action.payload);
    yield put(setObjectives(data));
  } catch (error) {
    console.log(error);
  }
}