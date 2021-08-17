import { CREATE_NEW_OBJECTIVE, GET_ALL_OBJECTIVES, SET_OBJECTIVES } from "../constants/types";

export const createNewObjective = (objectiveData) => ({
  type: CREATE_NEW_OBJECTIVE,
  payload: { objectiveData },
});

export const getAllObjectives = (perspectiveId) => ({
  type: GET_ALL_OBJECTIVES,
  payload: { perspectiveId }
});

export const setObjectives = (response) => ({
  type: SET_OBJECTIVES,
  payload: { response }
})