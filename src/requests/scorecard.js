import API from "../api";

export const requestCreateNewScorecard = ({ workspaceData }) => {
  API.post("/scorecard", workspaceData);
};

export const requestCreateNewScorecardFromTemplate = (workspaceData) => {
  API.post("/scorecard/template", workspaceData.workspaceData);
};

// Get current scorecard details
export const requestGetScorecard = (scorecardId) => {
  return API.get(`/scorecard/${scorecardId}`);
};

// Get all scorecards + perspecives' ids and names
export const requestGetAllScorecards = () => {
  return API.get("/scorecard");
};

export const requestDeleteScorecard = (scorecardId) => {
  API.delete(`/scorecard/${scorecardId}`);
};

export const requestGetPerspectivesOfScorecard = (scorecardId) => {
  return API.get(`/scorecard/${scorecardId}/perspectives`);
  // API({
  //   method: "GET",
  //   url: `/scorecard/${scorecardId.scorecardId}/perspectives`,
  // }).then((response) => {
  //   return response;
  // });
};

export const requestAssignEmployeeToScorecard = ({
  scorecardId,
  employeeData,
}) => {
  return API.post(`/scorecard/${scorecardId}/employee`, employeeData);
};

export const requestUpdateScorecard = ({ scorecardId, scorecardData }) => {
  return API.put(`/scorecard/${scorecardId}`, scorecardData);
};

export const requestGetAssignedEmployeesOfScorecard = (scorecardId) => {
  return API.get(`/scorecard/${scorecardId}/employee`);
};
