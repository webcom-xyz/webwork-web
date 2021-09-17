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

// export const requestGetAllObjectives = (perspectiveId) => {
//   return API.get("/objective", {data: {perspectiveId}});
// };
