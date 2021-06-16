import API from "../api";

export const requestCreateNewWorkspace = (workspaceData) => {
  API.post("/workspace", workspaceData.workspaceData);
};

export const requestGetAllWorkspaces = () => {
  return API.get("/workspace");
};
