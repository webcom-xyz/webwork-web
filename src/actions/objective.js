import { CREATE_NEW_OBJECTIVE, GET_ALL_OBJECTIVES } from "../constants/types";

export const createNewObjective = (objectiveData) => ({
  type: CREATE_NEW_OBJECTIVE,
  payload: { objectiveData },
});

export const getAllObjectives = (perspectiveId) => ({
  type: GET_ALL_OBJECTIVES,
  payload: { perspectiveId }
});
