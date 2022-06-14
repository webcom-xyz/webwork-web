import { SET_TOKEN } from "../constants/types";

const auth = (state = { authData: null }, action) => {
    switch (action.type) {

        case SET_TOKEN:
            return { ...state, authData: action.payload };
            
        default:
            return state;
    }
}

export default auth;