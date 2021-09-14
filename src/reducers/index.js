import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import scorecard from "./scorecard";
import objective from "./objective";
import kpi from "./kpi";
import perspective from "./perspective";
import workspace from "./workspace";

export default combineReducers({
  auth,
  user,
  scorecard,
  objective,
  kpi,
  workspace,
  perspective
});
