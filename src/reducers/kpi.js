import {
  SET_ASSIGNED_EMPLOYEES_OF_KPI,
  SET_ASSIGNED_KPIS,
  SET_KPI,
  SET_KPI_VALUES,
} from "../constants/types";

const kpi = (
  state = {
    kpi: null,
    assignedKPIs: null,
    assignedEmployees: null,
    kpiValues: null,
  },
  action
) => {
  switch (action.type) {
    case SET_ASSIGNED_KPIS:
      return { ...state, assignedKPIs: action.payload };

    case SET_ASSIGNED_EMPLOYEES_OF_KPI:
      return { ...state, assignedEmployees: action.payload };

    case SET_KPI:
      return { ...state, kpi: action.payload };

    case SET_KPI_VALUES:
      return { ...state, kpiValues: action.payload };

    default:
      return state;
  }
};

export default kpi;
