// import { SET_CURRENT_USER, SIGN_IN } from "../constants/types";

// const auth = (state = { authData: null }, action) => {
//     switch (action.type) {

//         case SET_CURRENT_USER:
//             localStorage.setItem("x-auth-token", action.currentUser.access_token);
//             return { ...state, authData: action };
            
//         default:
//             return state;
//     }
// }

// export default auth;

import { SET_TOKEN } from "../constants/types";

const auth = (state = { authData: null }, action) => {
    switch (action.type) {

        case SET_TOKEN:
            return { ...state, authData: action };
            
        default:
            return state;
    }
}

export default auth;