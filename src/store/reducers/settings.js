import _ from "lodash"
import {INIT_SETTINGS, SET_MODE} from "Actions";

const initSettings = {
    tileSize: 45,
    music: 100,
    sound: 100,
    size: 10,
    difficulty: 1,
    mode: "light"
}

const handlers = {
    [INIT_SETTINGS]: (state, {settings}) => ({
        ...state,
        ...settings
    }),
    [SET_MODE]: (state, {mode}) => ({
        ...state,
        mode
    })
}

export default (setting = initSettings, {type, payload}) => _.get(handlers, type, () => setting)(setting, payload)