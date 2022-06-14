import {
  CREATE_NEW_KPI,
  GET_KPI,
  SET_KPI,
  DELETE_KPI,
  UPDATE_KPI,
  ASSIGN_EMPLOYEE_TO_KPI,
  SET_ASSIGNED_KPIS,
  GET_ASSIGNED_KPIS,
  SET_ASSIGNED_EMPLOYEES_OF_KPI,
  GET_ASSIGNED_EMPLOYEES_OF_KPI,
  CREATE_KPI_VALUE,
  GET_KPI_VALUES,
  SET_KPI_VALUES,
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

export const getAssignedKPIs = (kpisData) => ({
  type: GET_ASSIGNED_KPIS,
  payload: kpisData,
});

export const setAssignedKPIs = (kpisData) => ({
  type: SET_ASSIGNED_KPIS,
  payload: kpisData,
});

export const getAssignedEmployeesOfKPI = (kpiId) => ({
  type: GET_ASSIGNED_EMPLOYEES_OF_KPI,
  payload: kpiId,
});

export const setAssignedEmployeesOfKPI = (employeesData) => ({
  type: SET_ASSIGNED_EMPLOYEES_OF_KPI,
  payload: employeesData,
});

export const getKPIValues = (kpiId) => ({
  type: GET_KPI_VALUES,
  payload: kpiId
});

export const createKPIValue = (kpiId, kpiData) => ({
  type: CREATE_KPI_VALUE,
  payload: { kpiId, kpiData },
});

export const setKPIValues = (kpiData) => ({
  type: SET_KPI_VALUES,
  payload: { kpiData },
});
