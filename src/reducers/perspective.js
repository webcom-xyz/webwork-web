import {
  SET_ASSIGNED_EMPLOYEES_OF_PERSPECTIVE,
  SET_OBJECTIVES_OF_PERSPECTIVE,
  SET_PERSPECTIVE,
} from "../constants/types";

const perspective = (
  state = { perspective: null, objectives: null, assignedEmployees: null },
  action
) => {
  switch (action.type) {
    case SET_PERSPECTIVE:
      return { ...state, perspective: action.payload };
    case SET_ASSIGNED_EMPLOYEES_OF_PERSPECTIVE:
      return { ...state, assignedEmployees: action.payload };
    case SET_OBJECTIVES_OF_PERSPECTIVE:
      return { ...state, objectives: action.payload };

    default:
      return state;
  }
};

export default perspective;
