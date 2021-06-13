import { call, put } from "redux-saga/effects";
import { setToken } from "../actions/auth";
import { requestSignUp, requestSignIn  } from "../requests/auth";

export function* handleSignUp(action) {
    try {
        const { data } = yield call(requestSignUp, action); //authData
    } catch (error) {
        console.log(error);
    }
}

export function* handleSignIn(action) {
    try {
        const { data } = yield call(requestSignIn, action);
        yield put(setToken(data));
    } catch (error) {
        console.log(error);
    }
}


export function* handleSetToken(action) {
    try {
        yield localStorage.setItem("x-auth-token", action.token.access_token);
    } catch (error) {
        console.log(error);
    }
}

export function* handleSignOut(action) {
    try {
        yield localStorage.clear();
    } catch (error) {
        console.log(error);
    }
}