import {combineReducers} from "redux";
import settings from "./settings"
import body from "./body";
import process from "./process";

export default combineReducers({
    settings, body, process
})