import _ from "lodash"
import {
    REFRESH_GAME,
    START_GAME,
    GAME_OVER,
    SET_TIME,
    WIN,
    INIT_PROCESS,
    ADD_TO_SCORE,
    MODAL_WINDOWS_ARE_SHOWING
} from "Actions";
import {GAME_READY, GAME_END, GAME_IN_PROGRESS, GAME_WIN} from "Helpers"

const initProcess = {
    activity: "",
    time: 0,
    score: [],
    isModalNeedShow: true
}

const handlers = {
    [INIT_PROCESS]: (current, {process}) => process,
    [REFRESH_GAME]: (process) => ({
        ...process,
        activity: GAME_READY
    }),
    [START_GAME]: (process) => ({
        ...process,
        isModalNeedShow: true,
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
    }),
    [ADD_TO_SCORE]: (process, {score}) => ({
        ...process, score
    }),
    [MODAL_WINDOWS_ARE_SHOWING]: (process) => ({
        ...process,
        isModalNeedShow: false
    })
}

export default (process = initProcess, {type, payload}) => _.get(handlers, type, () => process)(process, payload)