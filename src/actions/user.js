import * as api from "../api";
import {
  GET_CURRENT_USER,
  UPDATE_CURRENT_USER_AVATAR,
} from "../constants/types";

export const getCurrentUser = () => async (dispatch) => {
  try {
    const { data } = await api.getCurrentUser();
    dispatch({ type: GET_CURRENT_USER, data });
  } catch (error) {
    console.log(error);
  }
};

export const updateCurrentUserAvatar =
  (formData, history) => async (dispatch) => {
    try {
      await api.updateCurrentUserAvatar(formData);
      history.go(0);
    } catch (error) {
      console.log(error);
    }
  };
