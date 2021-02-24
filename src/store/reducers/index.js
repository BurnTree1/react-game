import {combineReducers} from "redux";
import settings from "./settings"
import body from "./body";

export default combineReducers({
    settings, body
})