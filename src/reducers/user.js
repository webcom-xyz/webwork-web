import { GET_CURRENT_USER } from "../constants/actionTypes";

const user = (state = { userData: null }, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      localStorage.setItem("current-user", JSON.stringify({ ...action?.data }));
      return { ...state, userData: action?.data };

    default:
      return state;
  }
};

export default user;
