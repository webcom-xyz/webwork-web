import { call, put } from "redux-saga/effects";
import { getCurrentUser, setCurrentUser } from "../actions/user";
import { requestGetCurrentUser, requestUpdateCurrentUserAvatar } from "../requests/user";

export function* handleGetCurrentUser(action) {
    try {
        const { data } = yield call(requestGetCurrentUser);
        yield put(setCurrentUser(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handleSetCurrentUser(action) {
    try {
        yield localStorage.setItem("current-user", JSON.stringify(action.payload.currentUser.data));
    } catch (error) {
        console.log(error);
    }
}

export function* handleUpdateCurrentUserAvatar(action) {
    try {
        yield call(requestUpdateCurrentUserAvatar, action.payload.formData);
    } catch (error) {
        console.log(error);
    }
}