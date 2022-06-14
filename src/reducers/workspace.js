import { SET_MEMBERS } from "../constants/types";

const workspace = (state = { members: null }, action) => {
    switch (action.type) {

        case SET_MEMBERS: 
            return { ...state, members: action.payload }
        
        default:
            return state;
    }
}

export default workspace;