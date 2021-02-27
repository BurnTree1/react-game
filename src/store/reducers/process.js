import _ from "lodash"
import {REFRESH_GAME, START_GAME, GAME_OVER, SET_TIME, WIN} from "Actions";
import {GAME_READY, GAME_END, GAME_IN_PROGRESS, GAME_WIN} from "Helpers"

const initProcess = {
    activity: "",
    time: 0,
}

const handlers = {
    [REFRESH_GAME]: (process) => ({
        ...process,
        activity: GAME_READY
    }),
    [START_GAME]: (process) => ({
        ...process,
        activity: GAME_IN_PROGRESS
    }),
    [GAME_OVER]: (process) => ({
        ...process,
        activity: GAME_END
    }),
    [WIN] : (process) => ({
        ...process,
        activity: GAME_WIN
    }),
    [SET_TIME]: (process, {time}) => ({
        ...process,
        time: time
    })
}

export default (process = initProcess, {type, payload}) => _.get(handlers, type, () => process)(process, payload)