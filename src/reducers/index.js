import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import scorecard from "./scorecard";
import objective from "./objective";

export default combineReducers({
  auth,
  user,
  scorecard,
  objective,
});
