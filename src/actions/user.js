import * as api from "../api";
import { GET_CURRENT_USER } from "../constants/actionTypes";


export const getCurrentUser = (history) => async (dispatch) => {
    try {
        const { data } = await api.getCurrentUser();
        dispatch({ type: GET_CURRENT_USER, data });
        history.go(0);

    } catch (error) {
        console.log(error);
    }
}