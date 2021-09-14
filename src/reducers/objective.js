import { SET_KPIS_OF_OBJECTIVE, SET_OBJECTIVES } from "../constants/types";

const objective = (state = { objective: null, kpis: null }, action) => {
  switch (action.type) {
    case SET_OBJECTIVES:
      return { ...state, objective: action.payload };

    case SET_KPIS_OF_OBJECTIVE:
      return { ...state, kpis: action.payload };

    default:
      return state;
  }
};

export default objective;
