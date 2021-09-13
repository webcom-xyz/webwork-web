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
  CREATE_NEW_KPI,
  GET_ALL_KPIS,
  ADD_MEMBER,
  REMOVE_MEMBER,
  GET_MEMBERS,
  GET_KPI,
  SET_KPI,
  GET_SCORECARD,
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
  handleGetScorecard,
} from "../handlers/scorecard";
import { handleCreateNewPerspective } from "../handlers/perspective";
import {
  handleCreateNewObjective,
  handleGetAllObjectves,
} from "../handlers/objective";
import {
  handleCreateNewKPI,
  handleGetAllKPIs,
  handleGetKPI,
} from "../handlers/kpi";
import {
  handleAddMembers,
  handleRemoveMember,
  handleGetMembers,
} from "../handlers/workspace";

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
  yield takeLatest(GET_SCORECARD, handleGetScorecard);

  // Perspective
  yield takeLatest(CREATE_NEW_PERSPECTIVE, handleCreateNewPerspective);

  // Objective
  yield takeLatest(CREATE_NEW_OBJECTIVE, handleCreateNewObjective);
  yield takeLatest(GET_ALL_OBJECTIVES, handleGetAllObjectves);

  // KPI
  yield takeLatest(CREATE_NEW_KPI, handleCreateNewKPI);
  yield takeLatest(GET_KPI, handleGetKPI);
  yield takeLatest(GET_ALL_KPIS, handleGetAllKPIs);


  // Workspace
  yield takeLatest(ADD_MEMBER, handleAddMembers);
  yield takeLatest(GET_MEMBERS, handleGetMembers);
  yield takeLatest(REMOVE_MEMBER, handleRemoveMember);
}
