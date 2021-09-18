import API from "../api";

export const requestCreateNewKPI = ({ kpiData }) => {
  API.post("/kpi", kpiData);
};

export const requestDeleteKPI = (kpiId) => {
  return API.delete(`/kpi/${kpiId}`);
};

export const requestUpdateKPI = ({ kpiId, kpiData }) => {
  return API.delete(`/kpi/${kpiId}`, kpiData);
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

export const requestAssignEmployeeToKPI = ({ kpiId, employeeData }) => {
  return API.post(`/kpi/${kpiId}/employee`, employeeData);
};
