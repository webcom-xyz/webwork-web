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
  GET_PERSPECTIVES_OF_SCORECARD,
  GET_OBJECTIVES_OF_PERSPECTIVE,
  GET_KPIS_OF_OBJECTIVE,
  ASSIGN_EMPLOYEE_TO_SCORECARD,
  GET_PERSPECTIVE,
  GET_OBJECTIVE,
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
  handleGetPerspectivesOfScorecard,
  handleGetScorecard,
  handleAssignEmployeeToScorecard
} from "../handlers/scorecard";
import {
  handleCreateNewPerspective,
  handleGetObjectivesOfPerspective,
  handleGetPerspective,
} from "../handlers/perspective";
import {
  handleCreateNewObjective,
  handleGetKPIsOfObjective,
  handleGetObjective,
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
  yield takeLatest(
    GET_PERSPECTIVES_OF_SCORECARD,
    handleGetPerspectivesOfScorecard
  );
  yield takeLatest(ASSIGN_EMPLOYEE_TO_SCORECARD, handleAssignEmployeeToScorecard);

  // Perspective
  yield takeLatest(CREATE_NEW_PERSPECTIVE, handleCreateNewPerspective);
  yield takeLatest(
    GET_OBJECTIVES_OF_PERSPECTIVE,
    handleGetObjectivesOfPerspective
  );
  yield takeLatest(GET_PERSPECTIVE, handleGetPerspective);

  // Objective
  yield takeLatest(CREATE_NEW_OBJECTIVE, handleCreateNewObjective);
  yield takeLatest(GET_KPIS_OF_OBJECTIVE, handleGetKPIsOfObjective);
  yield takeLatest(GET_OBJECTIVE, handleGetObjective);

  // KPI
  yield takeLatest(CREATE_NEW_KPI, handleCreateNewKPI);
  yield takeLatest(GET_KPI, handleGetKPI);
  // yield takeLatest(GET_ALL_KPIS, handleGetAllKPIs);

  // Workspace
  yield takeLatest(ADD_MEMBER, handleAddMembers);
  yield takeLatest(GET_MEMBERS, handleGetMembers);
  yield takeLatest(REMOVE_MEMBER, handleRemoveMember);
}
