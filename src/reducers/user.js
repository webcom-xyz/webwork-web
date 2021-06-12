import {
  GET_CURRENT_USER,
  UPDATE_CURRENT_USER_AVATAR,
} from "../constants/types";

const user = (state = { userData: null }, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      localStorage.setItem("current-user", JSON.stringify({ ...action?.data }));
      return { ...state, userData: action?.data };

    case UPDATE_CURRENT_USER_AVATAR:
      return { ...state };

    default:
      return state;
  }
};

export default user;
