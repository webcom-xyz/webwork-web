import { call, put } from "redux-saga/effects";
import { requestCreateNewWorkspace, requestGetAllWorkspaces } from "../requests/workspace";
import { setWorkspace } from "../actions/workspace";

export function* handleCreateNewWorkspace(action) {
    try {
        yield call(requestCreateNewWorkspace(action.payload));
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetAllWorkspaces(action) {
    try {
        const { data } = yield call(requestGetAllWorkspaces);
        yield put(setWorkspace(data));
    } catch (error) {
        console.log(error);
    }
}
