import { call, put } from "redux-saga/effects";
import { setToken } from "../actions/auth";
import { requestSignUp, requestSignIn, requestSignInWithGoogle  } from "../requests/auth";

export function* handleSignUp(action) {
    try {
        const { data } = yield call(requestSignUp, action.payload); //authData
        const { history } = action.payload;
        history.push("/sign-in");
    } catch (error) {
        console.log(error);
    }
}

export function* handleSignIn(action) {
    try {
        const { data } = yield call(requestSignIn, action.payload);
        yield put(setToken(data));
        const { history } = action.payload;
        history.push("/scorecard/dashboard");
    } catch (error) {
        console.log(error);
    }
}


export function* handleSetToken(action) {
    try {
        yield localStorage.setItem("x-auth-token", action.payload.token.access_token);
    } catch (error) {
        console.log(error);
    }
}

export function* handleSignOut(action) {
    try {
        yield localStorage.clear();
        const { history } = action.payload;
        history.push("/sign-in");
    } catch (error) {
        console.log(error);
    }
}