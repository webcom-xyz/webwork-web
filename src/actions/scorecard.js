import { CREATE_NEW_SCORECARD, CREATE_NEW_SCORECARD_FROM_TEMPLATE, GET_ALL_SCORECARDS, SET_SCORECARD, DELETE_SCORECARD } from "../constants/types";

export const createNewScorecard = (workspaceData) => ({
    type: CREATE_NEW_SCORECARD,
    payload: { workspaceData },
})

export const createNewScorecardFromTemplate = (workspaceData) => ({
    type: CREATE_NEW_SCORECARD_FROM_TEMPLATE,
    payload: { workspaceData },
})

export const getAllScorecards = () => ({
    type: GET_ALL_SCORECARDS
})

export const setScorecard = (response) => ({
    type: SET_SCORECARD,
    payload: { response },
})

export const deleteScorecard = (scorecardId) => ({
    type: DELETE_SCORECARD,
    payload: { scorecardId }
})