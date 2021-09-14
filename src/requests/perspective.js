import API from "../api";

export const requestCreateNewPerspective = ({ perspectiveData }) => {
  API.post("/perspective", perspectiveData);
};

export const requestGetObjectivesOfPerspective = (perspectiveId) => {
  return API.get(`perspective/${perspectiveId}/objectives`);
};

// export const requestGetAllObjectives = (perspectiveId) => {
//   return API.get("/objective", {data: {perspectiveId}});
// };
