import API from "../api";

export const requestCreateNewKPI = ({ kpiData }) => {
  API.post("/kpi", kpiData);
};

export const requestGetKPI = (kpiId) => {
  return API.get(`/kpi/${kpiId}`);
  // API({
  //   method: "GET",
  //   url: `/kpi/${kpiId}`,
  // }).then((response) => {
  //   return response;
  // });
};

export const requestGetAllKPIs = ({ objectiveId }) => {
  return API.get(`/objective/${objectiveId.objectiveId}/kpis`);
};
