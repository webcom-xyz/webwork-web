import { SET_OBJECTIVES } from "../constants/types";

const objective = (state = { objective: null }, action) => {
    switch (action.type) {
        case SET_OBJECTIVES: 
            return { ...state, objective: action.payload }
        
        default:
            return state;
    }
}

export default objective;