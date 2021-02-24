import _ from "lodash"
import {INIT_BODY} from "Actions";

const initBody = {
    height: 10,
    width: 10,
    field: []
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const handlers = {
    [INIT_BODY]: (body, {height, width, bombs}) => {
        let unusedBombs = bombs;
        let field = []
        for(let i = 0; i < height; i++) {
            field[i] = []
            for(let j = 0; j < width; j++){
                   field[i][j] = 0;
            }
        }
        while (unusedBombs > 0) {
            const x = getRandomInt(0,width)
            const y = getRandomInt(0,height)
            if(field[y][x] === 0) {
                field[y][x] = -1
                unusedBombs--;
            }
        }
        return {...body, field}
    }
}

export default (body = initBody, {type, payload}) => _.get(handlers, type, () => body)(body, payload)