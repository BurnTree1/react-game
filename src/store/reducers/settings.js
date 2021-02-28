import _ from "lodash"
import {INIT_SETTINGS} from "Actions";

const initSettings = {
    tileSize: 50,
    music: 0,
    sound: 0,
    size: 10,
    difficulty: 10
}

const handlers = {
    [INIT_SETTINGS]: (state, {settings}) => ({
        ...state,
        ...(settings)
    })
}

export default (setting = initSettings, {type, payload}) => _.get(handlers, type, () => setting)(setting, payload)