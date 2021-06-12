import { AUTH, SIGN_OUT } from "../constants/types";

const auth = (state = { authData: null }, action) => {
    switch (action.type) {

        case AUTH:
            localStorage.setItem("x-auth-token", action?.data.access_token);
            return {...state, authData: action?.data };

        case SIGN_OUT:
            localStorage.clear();
            return { ...state, authData: null };
            
        default:
            return state;
    }
}

export default auth;