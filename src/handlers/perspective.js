import { call, put } from "redux-saga/effects";
import { requestCreateNewPerspective } from "../requests/perspective";

export function* handleCreateNewPerspective(action) {
  try {
    yield call(requestCreateNewPerspective, action.payload);
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
