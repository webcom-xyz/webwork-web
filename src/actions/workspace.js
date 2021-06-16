import { CREATE_NEW_WORKSPACE, GET_ALL_WORKSPACES, SET_WORKSPACE } from "../constants/types";

export const createNewWorkspace = (workspaceData) => ({
    type: CREATE_NEW_WORKSPACE,
    payload: { workspaceData },
})

export const getAllWorkspaces = () => ({
    type: GET_ALL_WORKSPACES
})

export const setWorkspace = (response) => ({
    type: SET_WORKSPACE,
    payload: { response },
})