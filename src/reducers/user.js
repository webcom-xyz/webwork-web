import { SET_CURRENT_USER } from "../constants/types";

const user = (state = { currentUser: null }, action) => {
    switch (action.type) {

        case SET_CURRENT_USER:
            return { ...state, currentUser: action.payload.currentUser };
            
        default:
            return state;
    }
}

export default user;