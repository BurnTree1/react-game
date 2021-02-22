import _ from "lodash"
import {MUSIC_OFF} from "Actions";

const initSettings = {
    music: "on"
}

const handlers = {
    [MUSIC_OFF]: () => ({music: "off"})
}

export default (setting = initSettings, {type, payload}) => _.get(handlers, type, () => setting)(setting, payload)