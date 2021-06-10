import { AUTH, SIGN_OUT } from "../constants/actionTypes";

const auth = (state = { authData: null }, action) => {
    switch (action.type) {

        case AUTH:
            localStorage.setItem("x-auth-token", action?.data.access_token);
            // localStorage.setItem("x-auth-token", JSON.stringify({...action?.data}));
            return {...state, authData: action?.data };

        case SIGN_OUT:
            localStorage.clear();
            return { ...state, authData: null };
            
        default:
            return state;
    }
}

export default auth;