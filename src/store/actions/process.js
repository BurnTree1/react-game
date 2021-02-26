import {initBody} from "Actions";

export const REFRESH_GAME = "PROCESS/REFRESH_GAME"
export const START_GAME = "PROCESS/START_GAME"
export const GAME_OVER = "PROCESS/GAME_OVER"

export const refreshGame  = () => (dispatch) => {
    dispatch(initBody())
    dispatch({type: REFRESH_GAME})
}

export const startGame = () => ({
    type: START_GAME
})

export const gameOver = () => ({
    type: GAME_OVER
})