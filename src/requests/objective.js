import API from "../api";

export const requestCreateNewObjective = ({ objectiveData }) => {
  API.post("/objective", objectiveData);
};

export const requestGetAllObjectives = ({ perspectiveId }) => {
  return API.get(`perspective/${perspectiveId.perspectiveId}/objectives`);
};