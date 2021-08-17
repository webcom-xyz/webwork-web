import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import {
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  SET_TOKEN,
  SIGN_IN,
  SIGN_UP,
  UPDATE_CURRENT_USER_AVATAR,
  SIGN_OUT,
  UPDATE_CURRENT_USER,
  CREATE_NEW_SCORECARD_FROM_TEMPLATE,
  GET_ALL_SCORECARDS,
  CREATE_NEW_OBJECTIVE,
  GET_ALL_OBJECTIVES,
  CREATE_NEW_SCORECARD,
  CREATE_NEW_PERSPECTIVE,
  DELETE_SCORECARD,
} from "../constants/types";
import {
  handleSignUp,
  handleSignIn,
  handleSetToken,
  handleSignOut,
} from "../handlers/auth";
import {
  handleGetCurrentUser,
  handleSetCurrentUser,
  handleUpdateCurrentUserAvatar,
  handleUpdateCurrentUser,
} from "../handlers/user";
import {
  handleCreateNewScorecard,
  handleCreateNewScorecardFromTemplate,
  handleDeleteScorecard,
  handleGetAllScorecards,
} from "../handlers/scorecard";
import { handleCreateNewPerspective } from "../handlers/perspective";
import {
  handleCreateNewObjective,
  handleGetAllObjectves,
} from "../handlers/objective";

export function* watcherSaga() {
  // Authentication
  yield takeLatest(SIGN_UP, handleSignUp);
  yield takeLatest(SIGN_IN, handleSignIn);
  yield takeLatest(SIGN_OUT, handleSignOut);
  yield takeLatest(SET_TOKEN, handleSetToken);

  // User
  yield takeLatest(GET_CURRENT_USER, handleGetCurrentUser);
  yield takeLatest(SET_CURRENT_USER, handleSetCurrentUser);
  yield takeLatest(UPDATE_CURRENT_USER_AVATAR, handleUpdateCurrentUserAvatar);
  yield takeLatest(UPDATE_CURRENT_USER, handleUpdateCurrentUser);

  // Scorecard
  yield takeLatest(CREATE_NEW_SCORECARD, handleCreateNewScorecard);
  yield takeLatest(
    CREATE_NEW_SCORECARD_FROM_TEMPLATE,
    handleCreateNewScorecardFromTemplate
  );
  yield takeLatest(DELETE_SCORECARD, handleDeleteScorecard);
  yield takeLatest(GET_ALL_SCORECARDS, handleGetAllScorecards);

  // Perspective
  yield takeLatest(CREATE_NEW_PERSPECTIVE, handleCreateNewPerspective);

  // Objective
  yield takeLatest(CREATE_NEW_OBJECTIVE, handleCreateNewObjective);
  yield takeLatest(GET_ALL_OBJECTIVES, handleGetAllObjectves);
}
