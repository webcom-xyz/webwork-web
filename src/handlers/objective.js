import { call, put } from "redux-saga/effects";
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
    yield call(requestGetAllObjectives, action.payload);
  } catch (error) {
    console.log(error);
  }
}
