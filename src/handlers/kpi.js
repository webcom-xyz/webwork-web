import { call, put } from "redux-saga/effects";
import {
  setAssignedEmployeesOfKPI,
  setAssignedKPIs,
  setKPI,
  setKPIValues,
} from "../actions/kpi";
import {
  requestAssignEmployeeToKPI,
  requestCreateKPIValue,
  requestCreateNewKPI,
  requestDeleteKPI,
  requestGetAssignedEmployeesOfKPI,
  requestGetAssignedKPIs,
  requestGetKPI,
  requestGetKPIValues,
  requestUpdateKPI,
} from "../requests/kpi";

export function* handleCreateNewKPI(action) {
  try {
    yield call(requestCreateNewKPI, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetKPI(action) {
  try {
    const { data } = yield call(requestGetKPI, action.payload);
    yield put(setKPI(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteKPI(action) {
  try {
    const { data } = yield call(requestDeleteKPI, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateKPI(action) {
  try {
    const { data } = yield call(requestUpdateKPI, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleAssignEmployeeToKPI(action) {
  try {
    const { data } = yield call(requestAssignEmployeeToKPI, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAssignKPIs(action) {
  try {
    const { data } = yield call(requestGetAssignedKPIs, action.payload);
    yield put(setAssignedKPIs(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAssignedEmployeesOfKPI(action) {
  try {
    const { data } = yield call(
      requestGetAssignedEmployeesOfKPI,
      action.payload
    );
    yield put(setAssignedEmployeesOfKPI(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateKPIValue(action) {
  try {
    const { data } = yield call(requestCreateKPIValue, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetKPIValues(action) {
  try {
    const { data } = yield call(requestGetKPIValues, action.payload);
    yield put(setKPIValues(data));
  } catch (error) {
    console.log(error);
  }
}
