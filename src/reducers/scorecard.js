import { SET_SCORECARD, SET_SCORECARDS } from "../constants/types";

const scorecard = (state = { scorecard: null, scorecards: null }, action) => {
    switch (action.type) {

        case SET_SCORECARD: 
            return { ...state, scorecard: null, scorecard: action.payload }

        case SET_SCORECARDS: 
            return { ...state, scorecards: action.payload, scorecard: null }
        
        default:
            return state;
    }
}

export default scorecard;