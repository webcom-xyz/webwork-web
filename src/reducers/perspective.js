import { SET_OBJECTIVES_OF_PERSPECTIVE, SET_PERSPECTIVE } from "../constants/types";

const perspective = (state = { perspective: null, objectives: null }, action) => {
    switch (action.type) {

        case SET_PERSPECTIVE:
            return { ...state, perspective: action.payload }
        case SET_OBJECTIVES_OF_PERSPECTIVE: 
            return { ...state, objectives: action.payload }
        
        default:
            return state;
    }
}

export default perspective;