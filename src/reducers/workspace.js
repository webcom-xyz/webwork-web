import { SET_MEMBERS } from "../constants/types";

const workspace = (state = { workspace: null }, action) => {
    switch (action.type) {

        case SET_MEMBERS: 
            return { ...state, workspace: action.payload }
        
        default:
            return state;
    }
}

export default workspace;