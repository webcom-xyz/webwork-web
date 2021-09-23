import {
  CREATE_NEW_OBJECTIVE,
  GET_KPIS_OF_OBJECTIVE,
  GET_OBJECTIVE,
  SET_KPIS_OF_OBJECTIVE,
  SET_OBJECTIVES,
  SET_OBJECTIVE,
  UPDATE_OBJECTIVE,
  DELETE_OBJECTIVE,
  ASSIGN_EMPLOYEE_TO_OBJECTIVE,
  GET_ASSIGNED_EMPLOYEES_OF_OBJECTIVE,
  SET_ASSIGNED_EMPLOYEES_OF_OBJECTIVE,
} from "../constants/types";

export const createNewObjective = (objectiveData) => ({
  type: CREATE_NEW_OBJECTIVE,
  payload: { objectiveData },
});

export const setObjectives = (response) => ({
  type: SET_OBJECTIVES,
  payload: response,
});

export const setObjective = (objectiveData) => ({
  type: SET_OBJECTIVE,
  payload: objectiveData,
});

export const getKPIsOfObjective = (objectiveId) => ({
  type: GET_KPIS_OF_OBJECTIVE,
  payload: objectiveId,
});

export const setKPIsOfObjective = (kpisData) => ({
  type: SET_KPIS_OF_OBJECTIVE,
  payload: kpisData,
});

export const getObjective = (objectiveId) => ({
  type: GET_OBJECTIVE,
  payload: objectiveId,
});

export const deleteObjective = (objectiveId) => ({
  type: DELETE_OBJECTIVE,
  payload: objectiveId,
});

export const updateObjective = (objectiveId, objectiveData) => ({
  type: UPDATE_OBJECTIVE,
  payload: { objectiveId, objectiveData },
});

export const assignEmployeeToObjective = (objectiveId, employeeData) => ({
  type: ASSIGN_EMPLOYEE_TO_OBJECTIVE,
  payload: { objectiveId, employeeData },
});

export const getAssignedEmployeesOfObjective = (objectiveId) => ({
  type: GET_ASSIGNED_EMPLOYEES_OF_OBJECTIVE,
  payload: objectiveId,
});

export const setAssignedEmployeesOfObjective = (employeesData) => ({
  type: SET_ASSIGNED_EMPLOYEES_OF_OBJECTIVE,
  payload: employeesData,
});
