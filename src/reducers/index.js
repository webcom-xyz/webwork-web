import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import workspace from "./workspace";

export default combineReducers({
    auth,
    user,
    workspace
})