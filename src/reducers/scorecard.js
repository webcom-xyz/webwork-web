import { SET_SCORECARD } from "../constants/types";

const scorecard = (state = { scorecard: null }, action) => {
    switch (action.type) {
        case SET_SCORECARD: 
            return { ...state, scorecard: action.payload }
        
        default:
            return state;
    }
}

export default scorecard;