import {
  ASSIGN_EMPLOYEE_TO_PERSPECTIVE,
  CREATE_NEW_PERSPECTIVE,
  DELETE_PERSPECTIVE,
  GET_ALL_PERSPECTIVES,
  GET_ASSIGNED_EMPLOYEES_OF_PERSPECTIVE,
  GET_OBJECTIVES_OF_PERSPECTIVE,
  GET_PERSPECTIVE,
  SET_ASSIGNED_EMPLOYEES_OF_PERSPECTIVE,
  SET_OBJECTIVES_OF_PERSPECTIVE,
  SET_PERSPECTIVE,
  UPDATE_PERSPECTIVE,
} from "../constants/types";

export const createNewPerspective = (perspectiveData) => ({
  type: CREATE_NEW_PERSPECTIVE,
  payload: { perspectiveData },
});

export const getAllPerspective = () => ({
  type: GET_ALL_PERSPECTIVES,
});

export const getObjectivesOfPerspective = (perspectiveId) => ({
  type: GET_OBJECTIVES_OF_PERSPECTIVE,
  payload: perspectiveId,
});

export const setObjectivesOfPerspective = (perspectiveData) => ({
  type: SET_OBJECTIVES_OF_PERSPECTIVE,
  payload: perspectiveData,
});

export const getPerspective = (perspectiveId) => ({
  type: GET_PERSPECTIVE,
  payload: perspectiveId,
});

export const setPerspective = (perspectiveData) => ({
  type: SET_PERSPECTIVE,
  payload: perspectiveData,
});

export const deletePerspective = (perspectiveId) => ({
  type: DELETE_PERSPECTIVE,
  payload: perspectiveId,
});

export const updatePerspective = (perspectiveId, perspectiveData) => ({
  type: UPDATE_PERSPECTIVE,
  payload: { perspectiveId, perspectiveData },
});

export const assignEmployeeToPerspective = (perspectiveId, employeeData) => ({
  type: ASSIGN_EMPLOYEE_TO_PERSPECTIVE,
  payload: { perspectiveId, employeeData },
});

export const getAssignedEmployeesOfPerspective = (perspectiveId) => ({
  type: GET_ASSIGNED_EMPLOYEES_OF_PERSPECTIVE,
  payload: perspectiveId,
});

export const setAssignedEmployeesOfPerspective = (employeesData) => ({
  type: SET_ASSIGNED_EMPLOYEES_OF_PERSPECTIVE,
  payload: employeesData,
});
