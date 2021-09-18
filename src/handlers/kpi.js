import { call, put } from "redux-saga/effects";
import { setKPI } from "../actions/kpi";
import {
  requestAssignEmployeeToKPI,
  requestCreateNewKPI,
  requestDeleteKPI,
  requestGetAllKPIs,
  requestGetKPI,
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

// export function* handleGetAllKPIs(action) {
//   try {
//     const { data } = yield call(requestGetAllKPIs, action.payload);
//     yield put(setKPIs(data));
//   } catch (error) {
//     console.log(error);
//   }
// }
