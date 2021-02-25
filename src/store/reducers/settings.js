import _ from "lodash"
import {MUSIC_OFF} from "Actions";

const initSettings = {
    tileSize: 50,
    music: "on",
    height: 10,
    width: 10,
    bugs: 10
}

const handlers = {
    [MUSIC_OFF]: () => ({music: "off"}),
}

export default (setting = initSettings, {type, payload}) => _.get(handlers, type, () => setting)(setting, payload)