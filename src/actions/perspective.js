import {
  CREATE_NEW_PERSPECTIVE,
  GET_ALL_PERSPECTIVES,
  GET_OBJECTIVES_OF_PERSPECTIVE,
  SET_OBJECTIVES_OF_PERSPECTIVE
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
    payload: perspectiveData
});
