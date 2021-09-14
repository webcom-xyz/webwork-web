import { SET_PERSPECTIVES_OF_SCORECARD, SET_SCORECARD, SET_SCORECARDS } from "../constants/types";

const scorecard = (state = { scorecard: null, scorecards: null, perspectives: null }, action) => {
    switch (action.type) {

        case SET_SCORECARD: 
            // return { ...state, scorecard: null, scorecard: action.payload }
            return { ...state, scorecard: action.payload }

        case SET_SCORECARDS: 
            // return { ...state, scorecards: action.payload, scorecard: null }
            return { ...state, scorecards: action.payload }

        case SET_PERSPECTIVES_OF_SCORECARD:
            return { ...state, perspectives: action.payload }
        
        default:
            return state;
    }
}

export default scorecard;