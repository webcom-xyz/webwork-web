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
  ADD_MEMBER,
  REMOVE_MEMBER,
  GET_MEMBERS,
  GET_KPI,
  GET_SCORECARD,
  GET_PERSPECTIVES_OF_SCORECARD,
  GET_OBJECTIVES_OF_PERSPECTIVE,
  GET_KPIS_OF_OBJECTIVE,
  ASSIGN_EMPLOYEE_TO_SCORECARD,
  GET_PERSPECTIVE,
  GET_OBJECTIVE,
  REMOVE_EMPLOYEE,
  UPDATE_SCORECARD,
  DELETE_KPI,
  UPDATE_KPI,
  ASSIGN_EMPLOYEE_TO_KPI,
  UPDATE_PERSPECTIVE,
  UPDATE_OBJECTIVE,
  DELETE_OBJECTIVE,
  ASSIGN_EMPLOYEE_TO_OBJECTIVE,
  DELETE_PERSPECTIVE,
  ASSIGN_EMPLOYEE_TO_PERSPECTIVE,
  GET_ASSIGNED_KPIS,
  GET_ASSIGNED_EMPLOYEES_OF_KPI,
  GET_ASSIGNED_EMPLOYEES_OF_OBJECTIVE,
  GET_ASSIGNED_EMPLOYEES_OF_PERSPECTIVE,
  GET_ASSIGNED_EMPLOYEES_OF_SCORECARD,
  GET_ASSIGNED_OBJECTIVES,
  GET_ASSIGNED_SCORECARDS,
  GET_ASSIGNED_PERSPECTIVES,
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
  handleAssignEmployeeToScorecard,
  handleUpdateScorecard,
  handleGetAssignedEmployeesOfScorecard,
  handleGetAssignedScorecards,
} from "../handlers/scorecard";
import {
  handleAssignEmployeeToPerspective,
  handleCreateNewPerspective,
  handleDeletePerspective,
  handleGetAssignedEmployeesOfPerspective,
  handleGetAssignedPerspectives,
  handleGetObjectivesOfPerspective,
  handleGetPerspective,
  handleUpdatePerspective,
} from "../handlers/perspective";
import {
  handleAssignEmployeeToObjective,
  handleCreateNewObjective,
  handleDeleteObjective,
  handleGetAssignedEmployeesOfObjective,
  handleGetAssignedObjectives,
  handleGetKPIsOfObjective,
  handleGetObjective,
  handleUpdateObjective,
} from "../handlers/objective";
import {
  handleAssignEmployeeToKPI,
  handleCreateNewKPI,
  handleDeleteKPI,
  handleGetAssignedEmployeesOfKPI,
  handleGetAssignKPIs,
  handleGetKPI,
  handleUpdateKPI,
} from "../handlers/kpi";
import {
  handleAddMembers,
  handleRemoveMember,
  handleGetMembers,
  handleRemoveEmployee,
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
  yield takeLatest(
    ASSIGN_EMPLOYEE_TO_SCORECARD,
    handleAssignEmployeeToScorecard
  );
  yield takeLatest(UPDATE_SCORECARD, handleUpdateScorecard);
  yield takeLatest(
    GET_ASSIGNED_EMPLOYEES_OF_SCORECARD,
    handleGetAssignedEmployeesOfScorecard
  );
  yield takeLeading(GET_ASSIGNED_SCORECARDS, handleGetAssignedScorecards);

  // Perspective
  yield takeLatest(CREATE_NEW_PERSPECTIVE, handleCreateNewPerspective);
  yield takeLatest(
    GET_OBJECTIVES_OF_PERSPECTIVE,
    handleGetObjectivesOfPerspective
  );
  yield takeLatest(GET_PERSPECTIVE, handleGetPerspective);
  yield takeLatest(DELETE_PERSPECTIVE, handleDeletePerspective);
  yield takeLatest(UPDATE_PERSPECTIVE, handleUpdatePerspective);
  yield takeLatest(
    ASSIGN_EMPLOYEE_TO_PERSPECTIVE,
    handleAssignEmployeeToPerspective
  );
  yield takeLatest(
    GET_ASSIGNED_EMPLOYEES_OF_PERSPECTIVE,
    handleGetAssignedEmployeesOfPerspective
  );
  yield takeLeading(GET_ASSIGNED_PERSPECTIVES, handleGetAssignedPerspectives);

  // Objective
  yield takeLatest(CREATE_NEW_OBJECTIVE, handleCreateNewObjective);
  yield takeLatest(GET_KPIS_OF_OBJECTIVE, handleGetKPIsOfObjective);
  yield takeLatest(GET_OBJECTIVE, handleGetObjective);
  yield takeLatest(UPDATE_OBJECTIVE, handleUpdateObjective);
  yield takeLatest(DELETE_OBJECTIVE, handleDeleteObjective);
  yield takeLatest(
    ASSIGN_EMPLOYEE_TO_OBJECTIVE,
    handleAssignEmployeeToObjective
  );
  yield takeLatest(
    GET_ASSIGNED_EMPLOYEES_OF_OBJECTIVE,
    handleGetAssignedEmployeesOfObjective
  );
  yield takeLeading(GET_ASSIGNED_OBJECTIVES, handleGetAssignedObjectives);

  // KPI
  yield takeLatest(CREATE_NEW_KPI, handleCreateNewKPI);
  yield takeLatest(GET_KPI, handleGetKPI);
  yield takeLatest(DELETE_KPI, handleDeleteKPI);
  yield takeLatest(UPDATE_KPI, handleUpdateKPI);
  yield takeLatest(ASSIGN_EMPLOYEE_TO_KPI, handleAssignEmployeeToKPI);
  yield takeLeading(GET_ASSIGNED_KPIS, handleGetAssignKPIs);
  yield takeLatest(
    GET_ASSIGNED_EMPLOYEES_OF_KPI,
    handleGetAssignedEmployeesOfKPI
  );

  // Workspace
  yield takeLatest(ADD_MEMBER, handleAddMembers);
  yield takeLatest(GET_MEMBERS, handleGetMembers);
  yield takeLatest(REMOVE_MEMBER, handleRemoveMember);
  yield takeLatest(REMOVE_EMPLOYEE, handleRemoveEmployee);
}
