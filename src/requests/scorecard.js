import API from "../api";

export const requestCreateNewScorecard = ({ workspaceData }) => {
  API.post("/scorecard", workspaceData);
};

export const requestCreateNewScorecardFromTemplate = (workspaceData) => {
  API.post("/scorecard/template", workspaceData.workspaceData);
};

export const requestGetScorecard = (scorecardId) => {
  return API.get(`/scorecard/${scorecardId}`);
};

export const requestGetAllScorecards = () => {
  return API.get("/scorecard");
};

export const requestDeleteScorecard = ({ scorecardId }) => {
  API.delete(`/scorecard/${scorecardId}`);
};
