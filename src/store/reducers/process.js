import _ from "lodash"
import {REFRESH_GAME, START_GAME, GAME_OVER} from "Actions";
import {GAME_READY, GAME_END, GAME_IN_PROGRESS} from "Helpers"

const initProcess = {
    activity: "",
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
    })
}

export default (process = initProcess, {type, payload}) => _.get(handlers, type, () => process)(process, payload)