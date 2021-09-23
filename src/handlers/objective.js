import { call, put } from "redux-saga/effects";
import { setAssignedEmployeesOfObjective, setKPIsOfObjective, setObjective } from "../actions/objective";
import {
  requestAssignEmployeeToObjective,
  requestCreateNewObjective,
  requestDeleteObjective,
  requestGetAssignedEmployeesOfObjective,
  requestGetKPIsOfObjective,
  requestGetObjective,
  requestUpdateObjective,
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

export function* handleGetObjective(action) {
  try {
    const { data } = yield call(requestGetObjective, action.payload);
    yield put(setObjective(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteObjective(action) {
  try {
    const { data } = yield call(requestDeleteObjective, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateObjective(action) {
  try {
    const { data } = yield call(requestUpdateObjective, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleAssignEmployeeToObjective(action) {
  try {
    const { data } = yield call(
      requestAssignEmployeeToObjective,
      action.payload
    );
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAssignedEmployeesOfObjective(action) {
  try {
    const { data } = yield call(requestGetAssignedEmployeesOfObjective, action.payload);
    yield put(setAssignedEmployeesOfObjective(data));
  } catch (error) {
    console.log(error);
  }
}
