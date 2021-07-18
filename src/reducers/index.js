import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import scorecard from "./scorecard";

export default combineReducers({
    auth,
    user,
    scorecard
})