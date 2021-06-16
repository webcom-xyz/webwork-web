import { GET_CURRENT_USER, SET_CURRENT_USER, UPDATE_CURRENT_USER_AVATAR } from "../constants/types";

export const getCurrentUser = () => ({
    type: GET_CURRENT_USER
})

export const setCurrentUser = (currentUser) => ({
    type: SET_CURRENT_USER,
    payload: { currentUser }
})

export const updateCurrentUserAvatar = (formData) => ({
    type: UPDATE_CURRENT_USER_AVATAR,
    payload: { formData }
})