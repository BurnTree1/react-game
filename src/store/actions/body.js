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
    const {settings: {size, difficulty}} = getState()
    let height = size;
    let width = size;
    const bugs = Math.floor((height * width * (difficulty * 5)) / 100);
    let unusedBugs = bugs;
    let field = []

    const checkBugs = (i, j) => {
        let count = 0
        if (field[i][j].isBug) count++
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
    dispatch(generateBody({height, width, bugs, field, difficulty}))
}

export const generateBody = (body) => ({
    type: INIT_BODY,
    payload: {body}
})

export const clickTile = (i, j) => (dispatch, getState) => {
    const {process: {activity}, body: {field}} = getState()
    const tile = field[i][j]
    if (!tile.isFlag) {
        if (activity === GAME_READY)
            dispatch(startGame())
        if (activity === GAME_READY || activity === GAME_IN_PROGRESS)
            if (tile.isBug)
                dispatch(gameOver())
            else
                (tile.nearBugCount === 0) ? dispatch(reverseOpen(i, j)) : dispatch(openTile(i, j))
    }
    //TODO need refactoring
}


export const clickFlagTile = (i, j) => (dispatch, getState) => {
    const {process: {activity}} = getState()
    if (activity === GAME_READY)
        dispatch(startGame())
    if (activity === GAME_READY || activity === GAME_IN_PROGRESS)
        dispatch(flagTile(i, j))
}

const flagTile = (i, j) => ({
    type: FLAG_TILE,
    payload: {i, j}
})

const reverseOpen = (i, j) => (dispatch, getState) => {
    const {body: {width, height, field}} = getState()
    dispatch(openTile(i, j))

    const check = (x, y) => {
        const tile = field[x][y]
        if (!tile.isOpen)
            (tile.nearBugCount === 0) ? dispatch(reverseOpen(x, y)) : dispatch(openTile(x, y))
    }

    if (i > 0) check(i - 1, j)
    if (i > 0 && j > 0) check(i - 1, j - 1)
    if (i > 0 && j < width - 1) check(i - 1, j + 1)
    if (j > 0) check(i, j - 1)
    if (j < width - 1) check(i, j + 1)
    if (i < height - 1) check(i + 1, j)
    if (i < height - 1 && j > 0) check(i + 1, j - 1)
    if (i < height - 1 && j < width - 1) check(i + 1, j + 1)
}

export const openTile = (i, j) => ({
    type: OPEN_TILE,
    payload: {i, j}
})