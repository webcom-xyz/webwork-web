import {
  CREATE_NEW_KPI,
  GET_KPI,
  SET_KPI,
  DELETE_KPI,
  UPDATE_KPI,
  ASSIGN_EMPLOYEE_TO_KPI,
} from "../constants/types";

export const createNewKPI = (kpiData) => ({
  type: CREATE_NEW_KPI,
  payload: { kpiData },
});

export const getKPI = (kpiData) => ({
  type: GET_KPI,
  payload: kpiData,
});

export const setKPI = (kpiData) => ({
  type: SET_KPI,
  payload: kpiData,
});

export const deleteKPI = (kpiId) => ({
  type: DELETE_KPI,
  payload: kpiId,
});

export const updateKPI = (kpiId, kpiData) => ({
  type: UPDATE_KPI,
  payload: { kpiId, kpiData },
});

export const assignEmployeeToKPI = (kpiId, employeeData) => ({
  type: ASSIGN_EMPLOYEE_TO_KPI,
  payload: { kpiId, employeeData },
});
