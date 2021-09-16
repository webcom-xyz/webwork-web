import { call, put } from "redux-saga/effects";
import {
  requestAssignEmployeeToScorecard,
  requestCreateNewScorecard,
  requestCreateNewScorecardFromTemplate,
  requestDeleteScorecard,
  requestGetAllScorecards,
  requestGetPerspectivesOfScorecard,
  requestGetScorecard,
} from "../requests/scorecard";
import {
  setPerspectivesOfScorecard,
  setScorecard,
  setScorecards,
} from "../actions/scorecard";

export function* handleCreateNewScorecard(action) {
  try {
    yield call(requestCreateNewScorecard, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateNewScorecardFromTemplate(action) {
  try {
    yield call(requestCreateNewScorecardFromTemplate, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetScorecard(action) {
  try {
    const { data } = yield call(requestGetScorecard, action.payload);
    yield put(setScorecard(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAllScorecards(action) {
  try {
    const { data } = yield call(requestGetAllScorecards);
    yield put(setScorecards(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteScorecard(action) {
  try {
    const { data } = yield call(requestDeleteScorecard, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetPerspectivesOfScorecard(action) {
  try {
    const { data } = yield call(
      requestGetPerspectivesOfScorecard,
      action.payload
    );
    yield put(setPerspectivesOfScorecard(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleAssignEmployeeToScorecard(action) {
  try {
    const { data } = yield call(
      requestAssignEmployeeToScorecard,
      action.payload
    );
  } catch (error) {
    console.log(error);
  }
}
