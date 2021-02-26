import _ from "lodash";
import {gameOver, startGame} from "Actions";
import {GAME_IN_PROGRESS, GAME_READY} from "Helpers";

export const INIT_BODY = "BODY/INIT"
export const OPEN_TILE = "BODY/OPEN_TILE"
export const FLAG_TILE = "BODY/FLAG_TILE"

const tileTemplate = {
    isOpen: false,
    isFlag: false,
    isBug: false,
    nearBugCount: 0
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const initBody = () => (dispatch, getState) => {
    const {settings: {height, width, bugs}} = getState()

    let unusedBugs = bugs;
    let field = []

    const checkBugs = (i, j) => {
        let count = 0
        if (i > 0 && field[i - 1][j].isBug) count++
        if (i > 0 && j > 0 && field[i - 1][j - 1].isBug) count++
        if (i > 0 && j < width - 1 && field[i - 1][j + 1].isBug) count++
        if (j > 0 && field[i][j - 1].isBug) count++
        if (j < width - 1 && field[i][j + 1].isBug) count++
        if (i < height - 1 && field[i + 1][j].isBug) count++
        if (i < height - 1 && j > 0 && field[i + 1][j - 1].isBug) count++
        if (i < height - 1 && j < width - 1 && field[i + 1][j + 1].isBug) count++
        return count
    }

    for (let i = 0; i < height; i++) {
        field[i] = []
        for (let j = 0; j < width; j++) {
            field[i][j] = _.clone(tileTemplate);
        }
    }

    while (unusedBugs > 0) {
        const x = getRandomInt(0, width)
        const y = getRandomInt(0, height)

        if (!field[y][x].isBug) {
            field[y][x].isBug = true
            unusedBugs--;
        }
    }

    for (let i = 0; i < height; i++)
        for (let j = 0; j < width; j++)
            field[i][j].nearBugCount = checkBugs(i, j);

    dispatch({
        type: INIT_BODY,
        payload: {height, width, field}
    })
}

export const clickTile = (i, j) => (dispatch, getState) => {
    const {process: {activity}, body: {field}} = getState()
    if (activity === GAME_READY)
        dispatch(startGame())
    if (activity === GAME_READY || activity === GAME_IN_PROGRESS)
        dispatch(openTile(i,j))
    if(field[i][j].isBug)
        dispatch(gameOver())
}

export const flagTile = (i,j) => ({
    type: FLAG_TILE,
    payload: {i, j}
})

export const openTile = (i, j) => ({
    type: OPEN_TILE,
    payload: {i, j}
})