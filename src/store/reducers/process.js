import _ from "lodash"
import {START_GAME, GAME_OVER} from "Actions";

const initProcess = {
    tileSize: 50,
    music: "on",
    activity: ""
}

const handlers = {
    [START_GAME]: () => ({

    }),
    [GAME_OVER]: () => ({

    })
}

export default (process = initProcess, {type, payload}) => _.get(handlers, type, () => process)(process, payload)