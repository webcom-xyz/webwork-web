import {
  CREATE_NEW_KPI,
  GET_KPI,
  SET_KPI,
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
