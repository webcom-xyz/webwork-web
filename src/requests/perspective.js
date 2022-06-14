import API from "../api";

export const requestCreateNewPerspective = ({ perspectiveData }) => {
  API.post("/perspective", perspectiveData);
};

export const requestGetObjectivesOfPerspective = (perspectiveId) => {
  return API.get(`/perspective/${perspectiveId}/objectives`);
};

export const requestGetPerspective = (perspectiveId) => {
  // API({
  //   method: "GET",
  //   url: `/perspective/${perspectiveId}`,
  // }).then((response) => {
  //   return response;
  // });
  return API.get(`/perspective/${perspectiveId}`);
};

export const requestDeletePerspective = (perspectiveId) => {
  return API.delete(`/perspective/${perspectiveId}`);
};

export const requestUpdatePerspective = ({
  perspectiveId,
  perspectiveData,
}) => {
  return API.put(`/perspective/${perspectiveId}`, perspectiveData);
};

export const requestAssignEmployeeToPerspective = ({
  perspectiveId,
  employeeData,
}) => {
  return API.post(`/perspective/${perspectiveId}/employee`, employeeData);
};

export const requestGetAssignedEmployeesOfPerspective = (perspectiveId) => {
  return API.get(`/perspective/${perspectiveId}/employee`);
};

export const requestGetAssignedPerspectives = () => {
  return API.get(`/perspective/assigned`);
};