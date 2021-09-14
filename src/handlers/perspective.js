import { call, put } from "redux-saga/effects";
import { setObjectivesOfPerspective } from "../actions/perspective";
import { requestCreateNewPerspective, requestGetObjectivesOfPerspective } from "../requests/perspective";

export function* handleCreateNewPerspective(action) {
  try {
    yield call(requestCreateNewPerspective, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetObjectivesOfPerspective(action) {
  try {
    const { data } = yield call(requestGetObjectivesOfPerspective, action.payload);
    yield put(setObjectivesOfPerspective(data));
  } catch (error) {
    console.log(error);
  }
}

// export function* handleGetAllPerspectives(action) {
//   try {
//     yield call(requestGetAllPerspectives, action.payload);
//   } catch (error) {
//     console.log(error);
//   }
// }
