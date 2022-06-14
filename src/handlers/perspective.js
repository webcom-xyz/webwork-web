import { call, put } from "redux-saga/effects";
import {
  setAssignedEmployeesOfPerspective,
  setAssignedPerspectives,
  setObjectivesOfPerspective,
  setPerspective,
} from "../actions/perspective";
import {
  requestAssignEmployeeToPerspective,
  requestCreateNewPerspective,
  requestDeletePerspective,
  requestGetAssignedEmployeesOfPerspective,
  requestGetAssignedPerspectives,
  requestGetObjectivesOfPerspective,
  requestGetPerspective,
  requestUpdatePerspective,
} from "../requests/perspective";

export function* handleCreateNewPerspective(action) {
  try {
    yield call(requestCreateNewPerspective, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetObjectivesOfPerspective(action) {
  try {
    const { data } = yield call(
      requestGetObjectivesOfPerspective,
      action.payload
    );
    yield put(setObjectivesOfPerspective(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetPerspective(action) {
  try {
    const { data } = yield call(requestGetPerspective, action.payload);
    yield put(setPerspective(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeletePerspective(action) {
  try {
    const { data } = yield call(requestDeletePerspective, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdatePerspective(action) {
  try {
    const { data } = yield call(requestUpdatePerspective, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleAssignEmployeeToPerspective(action) {
  try {
    const { data } = yield call(
      requestAssignEmployeeToPerspective,
      action.payload
    );
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAssignedEmployeesOfPerspective(action) {
  try {
    const { data } = yield call(
      requestGetAssignedEmployeesOfPerspective,
      action.payload
    );
    yield put(setAssignedEmployeesOfPerspective(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAssignedPerspectives(action) {
  try {
    const { data } = yield call(requestGetAssignedPerspectives);
    yield put(setAssignedPerspectives(data));
  } catch (error) {
    console.log(error);
  }
}
