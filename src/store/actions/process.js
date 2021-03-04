import {initBody} from "Actions";
import _ from "lodash"

export const INIT_PROCESS = "PROCESS/INIT"
export const SET_TIME = "PROCESS/SET_TIME"
export const ADD_TO_SCORE = "PROCESS/ADD_TO_SCORE"
export const MODAL_WINDOWS_ARE_SHOWING = "PROCESS/DONT_SHOW_MODAL"

export const REFRESH_GAME = "PROCESS/REFRESH_GAME"
export const START_GAME = "PROCESS/START_GAME"
export const GAME_OVER = "PROCESS/GAME_OVER"
export const WIN = "PROCESS/GAME_WIN"


export const initProcess = (process) => ({
    type: INIT_PROCESS,
    payload: {process}
})

export const refreshGame = () => (dispatch) => {
    dispatch(initBody())
    dispatch({type: REFRESH_GAME})
}

export const addToScoreTable = (name) => (dispatch, getState) => {
    const {body: {difficulty, height, width}, process: {score, time}} = getState()
    let newScore = _.cloneDeep(score)
    newScore.push({name, difficulty, time, size: `${height}x${width}`})
    newScore.sort((a, b) => (a.difficulty !== b.difficulty) ? b.difficulty - a.difficulty :
        (a.size !== b.size) ? sortString(b.size, a.size) : a.time - b.time)
    dispatch({
        type: ADD_TO_SCORE,
        payload: {score: _.map(newScore, (element, key) => ({...element, id: key + 1}))}
    })
}

const sortString = (a,b) => (a>b) ? 1: -1

export const startGame = () => ({
    type: START_GAME
})

export const gameOver = () => ({
    type: GAME_OVER
})

export const gameWin = () => ({
    type: WIN
})

export const setTime = (time) => ({
    type: SET_TIME,
    payload: {time}
})

export const modalAreShowing = () => ({
    type: MODAL_WINDOWS_ARE_SHOWING
})