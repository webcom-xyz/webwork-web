import API from "../api";

export const requestCreateNewObjective = ({ objectiveData }) => {
  API.post("/objective", objectiveData);
};

export const requestGetAllObjectives = ({ perspectiveId }) => {
  return API.get(`perspective/${perspectiveId.perspectiveId}/objectives`);
};

export const requestGetKPIsOfObjective = (objectiveId) => {
  return API.get(`/objective/${objectiveId}/kpis`);
};

export const requestGetObjective = (objectiveId) => {
  return API.get(`/objective/${objectiveId}`);
};

export const requestDeleteObjective = (objectiveId) => {
  return API.delete(`/objective/${objectiveId}`);
};

export const requestUpdateObjective = ({ objectiveId, objectiveData }) => {
  return API.put(`/objective/${objectiveId}`, objectiveData);
};

export const requestAssignEmployeeToObjective = ({
  objectiveId,
  employeeData,
}) => {
  return API.post(`/objective/${objectiveId}/employee`, employeeData);
};

export const requestGetAssignedEmployeesOfObjective = (objectiveId) => {
  return API.get(`/objective/${objectiveId}/employee`);
};
