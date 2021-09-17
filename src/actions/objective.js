import {
  CREATE_NEW_OBJECTIVE,
  GET_KPIS_OF_OBJECTIVE,
  GET_OBJECTIVE,
  SET_KPIS_OF_OBJECTIVE,
  SET_OBJECTIVES,
  SET_OBJECTIVE,
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
