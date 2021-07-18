import { call, put } from "redux-saga/effects";
import { requestCreateNewScorecard, requestCreateNewScorecardFromTemplate, requestGetAllScorecards } from "../requests/scorecard";
import { setScorecard } from "../actions/scorecard";

export function* handleCreateNewScorecard(action) {
    try {
        yield call(requestCreateNewScorecard, action.payload);
    } catch (error) {
        console.log(error);
    }
}

export function* handleCreateNewScorecardFromTemplate(action) {
    try {
        yield call(requestCreateNewScorecardFromTemplate, action.payload);
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetAllScorecards(action) {
    try {
        const { data } = yield call(requestGetAllScorecards);
        yield put(setScorecard(data));
    } catch (error) {
        console.log(error);
    }
}
