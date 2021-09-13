import { CREATE_NEW_KPI, GET_KPI, GET_ALL_KPIS, SET_KPIS } from "../constants/types";

export const createNewKPI = (kpiData) => ({
  type: CREATE_NEW_KPI,
  payload: { kpiData },
});

export const getKPI = (kpiData) => ({
  type: GET_KPI,
  payload: kpiData
})

export const getAllKPIs = (objectiveId) => ({
  type: GET_ALL_KPIS,
  payload: { objectiveId },
});

// export const setKPI = (response) => ({
//   type: SET_KPI,
//   payload: { response }
// });

export const setKPIs = (response) => ({
    type: SET_KPIS,
    payload: { response }
});
