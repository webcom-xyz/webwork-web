import { SET_WORKSPACE } from "../constants/types";

const workspace = (state = { workspace: null }, action) => {
    switch (action.type) {
        case SET_WORKSPACE: 
            return { ...state, workspace: action.payload }
        
        default:
            return state;
    }
}

export default workspace;