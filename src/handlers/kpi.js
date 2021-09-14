import { call, put } from "redux-saga/effects";
import { setKPI } from "../actions/kpi";
import { requestCreateNewKPI, requestGetAllKPIs, requestGetKPI } from "../requests/kpi";

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

// export function* handleGetAllKPIs(action) {
//   try {
//     const { data } = yield call(requestGetAllKPIs, action.payload);
//     yield put(setKPIs(data));
//   } catch (error) {
//     console.log(error);
//   }
// }