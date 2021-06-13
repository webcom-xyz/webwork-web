// import * as api from "../api";
// import {
//   GET_CURRENT_USER,
//   UPDATE_CURRENT_USER_AVATAR,
// } from "../constants/types";

// export const getCurrentUser = () => async (dispatch) => {
//   try {
//     const { data } = await api.getCurrentUser();
//     dispatch({ type: GET_CURRENT_USER, data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateCurrentUserAvatar =
//   (formData, history) => async (dispatch) => {
//     try {
//       await api.updateCurrentUserAvatar(formData);
//       history.go(0);
//     } catch (error) {
//       console.log(error);
//     }
//   };

import { GET_CURRENT_USER, SET_CURRENT_USER, UPDATE_CURRENT_USER_AVATAR } from "../constants/types";

export const getCurrentUser = () => ({
    type: GET_CURRENT_USER
})

export const setCurrentUser = (currentUser) => ({
    type: SET_CURRENT_USER,
    currentUser
})

export const updateCurrentUserAvatar = (formData) => ({
    type: UPDATE_CURRENT_USER_AVATAR,
    formData
})