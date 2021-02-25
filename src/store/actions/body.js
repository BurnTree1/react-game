import _ from "lodash";

export const INIT_BODY = "BODY/INIT"
export const OPEN_TILE = "BODY/OPEN_TILE"

const tileTemplate = {
    isOpen: false,
    marker: "",
    isBug: false,
    nearBugCount: 0
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const initBody = () => (dispatch, getState) => {
    const {settings: {height, width, bugs}} = getState()

    let unusedBugs = bugs;
    let field = []

    const checkBugs = (i,j) => {
        let count = 0
        if (i > 0 && field[i-1][j].isBug) count ++
        if (i > 0 && j > 0 && field[i-1][j-1].isBug) count ++
        if (i > 0 && j < width -1 &&field[i-1][j+1].isBug) count ++
        if (j > 0 && field[i][j-1].isBug) count ++
        if (j < width - 1 && field[i][j+1].isBug) count ++
        if (i < height -1 && field[i+1][j].isBug) count ++
        if (i < height -1 && j > 0 && field[i+1][j-1].isBug) count ++
        if (i < height -1 && j < width -1 &&field[i+1][j+1].isBug) count ++
        return count
    }

    for(let i = 0; i < height; i++) {
        field[i] = []
        for(let j = 0; j < width; j++){
            field[i][j] = _.clone(tileTemplate);
        }
    }

    while (unusedBugs > 0) {
        const x = getRandomInt(0,width)
        const y = getRandomInt(0,height)

        if(!field[y][x].isBug) {
            field[y][x].isBug = true
            unusedBugs--;
        }
    }

    for(let i = 0; i < height; i++)
        for(let j = 0; j < width; j++)
            field[i][j].nearBugCount = checkBugs(i,j);

    dispatch({type: INIT_BODY,
        payload: {height, width, field}
    })
}

const generateBody = (height, width, bugs) => ({
    type: INIT_BODY,
    payload: {height, width, bugs}
})

export const openTile = (i,j) => ({
    type: OPEN_TILE,
    payload: {i,j}
})