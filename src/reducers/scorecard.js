import {
  SET_ASSIGNED_EMPLOYEES_OF_SCORECARD,
  SET_ASSIGNED_SCORECARDS,
  SET_PERSPECTIVES_OF_SCORECARD,
  SET_SCORECARD,
  SET_SCORECARDS,
} from "../constants/types";

const scorecard = (
  state = {
    scorecard: null,
    scorecards: null,
    perspectives: null,
    assignedEmployees: null,
    assignedScorecards: null,
  },
  action
) => {
  switch (action.type) {
    case SET_SCORECARD:
      return { ...state, scorecard: action.payload };

    case SET_SCORECARDS:
      return { ...state, scorecards: action.payload };

    case SET_PERSPECTIVES_OF_SCORECARD:
      return { ...state, perspectives: action.payload };

    case SET_ASSIGNED_EMPLOYEES_OF_SCORECARD:
      return { ...state, assignedEmployees: action.payload };

    case SET_ASSIGNED_SCORECARDS:
      return { ...state, assignedScorecards: action.payload };

    default:
      return state;
  }
};

export default scorecard;
