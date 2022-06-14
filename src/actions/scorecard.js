import {
  CREATE_NEW_SCORECARD,
  CREATE_NEW_SCORECARD_FROM_TEMPLATE,
  GET_ALL_SCORECARDS,
  SET_SCORECARD,
  DELETE_SCORECARD,
  GET_SCORECARD,
  SET_SCORECARDS,
  GET_PERSPECTIVES_OF_SCORECARD,
  SET_PERSPECTIVES_OF_SCORECARD,
  ASSIGN_EMPLOYEE_TO_SCORECARD,
  UPDATE_SCORECARD,
  GET_ASSIGNED_EMPLOYEES_OF_SCORECARD,
  SET_ASSIGNED_EMPLOYEES_OF_SCORECARD,
  GET_ASSIGNED_SCORECARDS,
  SET_ASSIGNED_SCORECARDS,
} from "../constants/types";

export const createNewScorecard = (workspaceData) => ({
  type: CREATE_NEW_SCORECARD,
  payload: { workspaceData },
});

export const createNewScorecardFromTemplate = (workspaceData) => ({
  type: CREATE_NEW_SCORECARD_FROM_TEMPLATE,
  payload: { workspaceData },
});

export const getScorecard = (scorecardId) => ({
  type: GET_SCORECARD,
  payload: scorecardId,
});

// Sidebar
export const getAllScorecards = () => ({
  type: GET_ALL_SCORECARDS,
});

export const setScorecard = (scorecardData) => ({
  type: SET_SCORECARD,
  payload: scorecardData,
});

export const setScorecards = (scorecardData) => ({
  type: SET_SCORECARDS,
  payload: scorecardData,
});

export const deleteScorecard = (scorecardId) => ({
  type: DELETE_SCORECARD,
  payload: scorecardId,
});

export const getPerspectivesOfScorecard = (scorecardId) => ({
  type: GET_PERSPECTIVES_OF_SCORECARD,
  payload: scorecardId,
});

export const setPerspectivesOfScorecard = (perspectiveData) => ({
  type: SET_PERSPECTIVES_OF_SCORECARD,
  payload: perspectiveData,
});

export const assignEmployeeToScorecard = (scorecardId, employeeData) => ({
  type: ASSIGN_EMPLOYEE_TO_SCORECARD,
  payload: { scorecardId, employeeData },
});

export const updateScorecard = (scorecardId, scorecardData) => ({
  type: UPDATE_SCORECARD,
  payload: { scorecardId, scorecardData },
});

export const getAssignedEmployeesOfScorecard = (scorecardId) => ({
  type: GET_ASSIGNED_EMPLOYEES_OF_SCORECARD,
  payload: scorecardId,
});

export const setAssignedEmployeesOfScorecard = (employeesData) => ({
  type: SET_ASSIGNED_EMPLOYEES_OF_SCORECARD,
  payload: employeesData,
});

export const getAssignedScorecards = () => ({
  type: GET_ASSIGNED_SCORECARDS,
});

export const setAssignedScorecards = (scorecardsData) => ({
  type: SET_ASSIGNED_SCORECARDS,
  payload: scorecardsData,
});
