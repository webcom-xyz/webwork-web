import { SET_OBJECTIVES_OF_PERSPECTIVE } from "../constants/types";

const perspective = (state = { objectives: null }, action) => {
    switch (action.type) {

        case SET_OBJECTIVES_OF_PERSPECTIVE: 
            return { ...state, objectives: action.payload }
        
        default:
            return state;
    }
}

export default perspective;