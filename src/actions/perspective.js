import { CREATE_NEW_PERSPECTIVE, GET_ALL_PERSPECTIVES } from "../constants/types";

export const createNewPerspective = (perspectiveData) => ({
    type: CREATE_NEW_PERSPECTIVE,
    payload: { perspectiveData }
})

export const getAllPerspective = () => ({
    type: GET_ALL_PERSPECTIVES
})