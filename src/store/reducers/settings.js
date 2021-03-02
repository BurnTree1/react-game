import _ from "lodash"
import {INIT_SETTINGS} from "Actions";

const initSettings = {
    tileSize: 45,
    music: 100,
    sound: 100,
    size: 10,
    difficulty: 1
}

const handlers = {
    [INIT_SETTINGS]: (state, {settings}) => ({
        ...state,
        ...settings
    })
}

export default (setting = initSettings, {type, payload}) => _.get(handlers, type, () => setting)(setting, payload)