export const START_GAME = "PROCESS/START_GAME"
export const GAME_OVER = "PROCESS/GAME_OVER"

export const startGame = () => ({
    type: START_GAME,
    payload: {}
})

export const gameOver = () => ({
    type: GAME_OVER
})